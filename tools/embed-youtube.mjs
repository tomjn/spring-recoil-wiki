#!/usr/bin/env node
// Follow each YouTube video link with an embedded player.
//
// The embed goes after the heading, paragraph or list item holding the link, or inside
// the table cell holding it. Links that only wrap a YouTube thumbnail are replaced by
// the player. Each video is embedded once per page. Videos YouTube's oEmbed endpoint
// reports as deleted (404) or not embeddable (401/403) keep their plain link.
// Channel and playlist links are not videos and are left alone.
//
// Usage: node tools/embed-youtube.mjs [--write]   (dry run by default)
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const CACHE = path.join(ROOT, 'tools', 'raw', 'youtube-oembed.json');

const LINK = /<a href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g;
export function videoId(url) {
  const u = url.replace(/&amp;/g, '&');
  const m = u.match(/^https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?(?:[^#]*&)?v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/i);
  return m ? m[1] : null;
}

// id -> { ok, title }, cached across runs
const cache = existsSync(CACHE) ? JSON.parse(readFileSync(CACHE, 'utf8')) : {};
export async function lookup(id) {
  if (!cache[id]) {
    const r = await fetch(`https://www.youtube.com/oembed?format=json&url=${encodeURIComponent('https://www.youtube.com/watch?v=' + id)}`);
    if (r.ok) cache[id] = { ok: true, title: (await r.json()).title };
    else if ([401, 403, 404].includes(r.status)) cache[id] = { ok: false, status: r.status };
    else throw new Error(`oEmbed HTTP ${r.status} for ${id}`);
    mkdirSync(path.dirname(CACHE), { recursive: true });
    writeFileSync(CACHE, JSON.stringify(cache, null, 2));
  }
  return cache[id];
}

function escapeAttr(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\{\{/g, '&#123;&#123;').replace(/\}\}/g, '&#125;&#125;');
}
function player(id, title) {
  return `<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${escapeAttr(title)}" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
}

export async function embedYoutube(md) {
  const lines = md.split('\n');
  const embedded = new Set([...md.matchAll(/youtube-nocookie\.com\/embed\/([A-Za-z0-9_-]{11})/g)].map(m => m[1]));
  const out = [];
  const skipped = [];
  let added = 0;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const after = [];
    for (const m of [...line.matchAll(LINK)]) {
      const id = videoId(m[1]);
      if (!id || embedded.has(id)) continue;
      const info = await lookup(id);
      if (!info.ok) { skipped.push(`${id} (HTTP ${info.status})`); continue; }
      embedded.add(id);
      added++;
      const html = player(id, info.title);
      if (/^\s*<img [^>]*i\.ytimg\.com[^>]*>\s*$/.test(m[2])) line = line.replace(m[0], `\n\n${html}\n\n`);
      else after.push(html);
    }
    // Thumbnail replacement leaves blank-line padding: collapse it and trim the ends.
    line = line.replace(/\n[ \t]*(?:\n[ \t]*)+\n/g, '\n\n').replace(/^\s*\n|\n\s*$/g, '');
    if (after.length && line.includes('</td>')) {
      const at = line.lastIndexOf('</td>');
      line = line.slice(0, at) + after.join('') + line.slice(at);
    } else if (after.length) {
      const indent = (line.match(/^(\s*(?:[-*+]|\d+\.)\s+)/) || [''])[0].replace(/\S/g, ' ');
      line += '\n\n' + after.map(h => indent + h).join('\n\n');
      if ((lines[i + 1] ?? '').trim() !== '') line += '\n';
    }
    out.push(line);
  }
  return { md: out.join('\n'), added, skipped };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const DOCS = path.join(ROOT, 'docs');
  const WRITE = process.argv.includes('--write');
  const walk = (dir, acc = []) => {
    for (const name of readdirSync(dir)) {
      if (name.startsWith('.') || name === 'public') continue;
      const full = path.join(dir, name);
      if (statSync(full).isDirectory()) walk(full, acc);
      else if (name.endsWith('.md')) acc.push(full);
    }
    return acc;
  };
  let files = 0, total = 0;
  for (const f of walk(DOCS)) {
    const before = readFileSync(f, 'utf8');
    const { md, added, skipped } = await embedYoutube(before);
    const rel = path.relative(DOCS, f);
    if (skipped.length) console.log(`${rel} not embeddable: ${skipped.join(', ')}`);
    if (!added) continue;
    files++; total += added;
    if (WRITE) writeFileSync(f, md);
    else console.log(`${rel} +${added}`);
  }
  console.log(`${WRITE ? 'embedded' : 'would embed'} videos=${total} files=${files}`);
}
