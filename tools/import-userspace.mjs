#!/usr/bin/env node
// Import the User and Talk namespace pages that the first import (convert.mjs) skipped.
//
// Inventory comes from p2004a's MediaWiki history dump of springrts.com (2025-08-17).
// Rendered HTML comes from his mirror of that dump, so templates expand exactly as they
// did on the original wiki. Conversion steps match convert.mjs, which is frozen.
//
// Usage: node tools/import-userspace.mjs <path to springrtscom_mediawiki-*-history.xml>
import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, existsSync, statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fixOldHosts } from './old-hosts.mjs';
import { widenImages } from './widen-images.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DOCS = path.join(ROOT, 'docs');
const CACHE = path.join(ROOT, 'tools', 'raw', 'userspace');
const MIRROR = 'https://springrts-wiki.p2004a.com';
const API = MIRROR + '/mediawiki/api.php';

const xmlPath = process.argv[2];
if (!xmlPath || !existsSync(xmlPath)) {
  console.error('usage: node tools/import-userspace.mjs <path to history.xml>');
  process.exit(1);
}

// namespace id -> [output dir, slug prefix]
const NS_OUT = {
  2: ['users/', ''],
  1: ['talk/', ''],
  3: ['talk/', 'user-'],
  5: ['talk/', 'spring-'],
  11: ['talk/', 'template-'],
};
const NS_NAME = { 1: 'Talk', 2: 'User', 3: 'User talk', 5: 'Spring talk', 11: 'Template talk' };

// Pages with no content worth keeping: empty, "test", spam markers, vandalism.
const SKIP = new Set([
  'User:Diesel', 'User:Elio', 'User:Jivvz', 'User:Mildreadmorris', 'User:P3374H', // empty
  'User:8611', 'User:Silentwings', // "test"
  'User:Johnsonne', 'User:Maelstrom', // "SPAMMER", "spam deleted"
  'User:GoldenRoar', 'User:LunarAvenger', // vandalism
  'User:Aegis', // only {{FULLPAGENAME}}
]);

// ---------- dump inventory ----------
function xmlDecode(s) {
  return s.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}
const xml = readFileSync(xmlPath, 'utf8');
const dumpPages = [];
const pageRe = /<page>([\s\S]*?)<\/page>/g;
for (let m; (m = pageRe.exec(xml)) !== null;) {
  const body = m[1];
  const head = body.slice(0, body.indexOf('<revision>'));
  const title = xmlDecode(head.match(/<title>([^<]*)<\/title>/)[1]);
  const ns = Number(head.match(/<ns>(-?\d+)<\/ns>/)[1]);
  const r = head.match(/<redirect title="([^"]*)"/);
  dumpPages.push({ title, ns, redirect: r ? xmlDecode(r[1]) : null });
}
const aliasMap = Object.fromEntries(dumpPages.filter(p => p.redirect).map(p => [p.title, p.redirect]));

// ---------- existing site pages (title -> url) from source_url frontmatter ----------
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || name === 'public') continue;
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith('.md')) out.push(full);
  }
  return out;
}
const OUT_DIRS = [...new Set(Object.values(NS_OUT).map(([d]) => d))];
const titleToUrl = new Map();
for (const f of walk(DOCS)) {
  const rel = path.relative(DOCS, f);
  if (OUT_DIRS.some(d => rel.startsWith(d))) continue; // regenerated below
  const m = readFileSync(f, 'utf8').match(/^source_url: "https:\/\/springrts\.com\/wiki\/([^"]+)"/m);
  if (m) titleToUrl.set(decodeURI(m[1]).replace(/_/g, ' '), '/' + rel.replace(/\.md$/, ''));
}

// ---------- pages to import + slug assignment ----------
function slugify(s) {
  return s.toLowerCase()
    .replace(/&[a-z]+;/g, '-')
    .replace(/[_\s]+/g, '-')
    .replace(/[\/:]+/g, '-')
    .replace(/[^a-z0-9.\-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-.]+|[-.]+$/g, '') || 'page';
}
const toImport = dumpPages.filter(p => NS_OUT[p.ns] && !p.redirect && !SKIP.has(p.title) && !titleToUrl.has(p.title));
const titleToFile = new Map();
const usedSlugs = new Set();
for (const p of toImport) {
  const [dir, prefix] = NS_OUT[p.ns];
  const base = prefix + slugify(p.title.slice(NS_NAME[p.ns].length + 1));
  let slug = base;
  for (let n = 2; usedSlugs.has(dir + slug); n++) slug = base + '-' + n;
  usedSlugs.add(dir + slug);
  titleToUrl.set(p.title, '/' + dir + slug);
  titleToFile.set(p.title, path.join(DOCS, dir, slug + '.md'));
}

// ---------- fetch rendered HTML from the mirror (cached) ----------
mkdirSync(CACHE, { recursive: true });
const UA = 'spring-recoil-wiki importer (https://github.com/tomjn/spring-recoil-wiki)';
async function fetchParsed(title) {
  const cacheFile = path.join(CACHE, encodeURIComponent(title) + '.json');
  if (existsSync(cacheFile)) return JSON.parse(readFileSync(cacheFile, 'utf8'));
  const url = `${API}?action=parse&format=json&formatversion=2&prop=text|categories|displaytitle&page=${encodeURIComponent(title)}`;
  let lastErr;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA } });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const j = await r.json();
      if (j.error) throw new Error(`API ${j.error.code}: ${j.error.info}`);
      writeFileSync(cacheFile, JSON.stringify(j.parse));
      return j.parse;
    } catch (e) {
      lastErr = e;
    }
  }
  throw new Error(`fetch failed for ${title}: ${lastErr}`);
}

// ---------- conversion (same steps as convert.mjs) ----------
const IMG_DIR = path.join(DOCS, 'public', 'images');
const onDisk = new Set(readdirSync(IMG_DIR));
function htmlDecode(s) {
  return s.replace(/&amp;/g, '&').replace(/&#0?39;/g, "'").replace(/&quot;/g, '"').replace(/&#0?34;/g, '"');
}
function safeImageName(name) {
  return name.replace(/ /g, '_').replace(/[&'"#?%]/g, '_').replace(/\.([^.]+)$/, (m, e) => '.' + e.toLowerCase());
}
function imageBasename(urlPath) {
  const clean = htmlDecode(urlPath.split('?')[0]);
  const parts = clean.split('/').filter(Boolean);
  const ti = parts.indexOf('thumb');
  const seg = ti >= 0 ? parts[parts.length - 2] : parts[parts.length - 1];
  try { return decodeURIComponent(seg); } catch { return seg; }
}
function mapImage(url) {
  if (!/\/images\//.test(url)) return null;
  const safe = safeImageName(imageBasename(url));
  return onDisk.has(safe) ? '/images/' + safe : null;
}
function anchorSlug(a) {
  return a.toLowerCase().replace(/[_\s]+/g, '-').replace(/[^a-z0-9\-]/g, '').replace(/-+/g, '-');
}
function resolveTitle(title) {
  if (titleToUrl.has(title)) return titleToUrl.get(title);
  if (aliasMap[title] && titleToUrl.has(aliasMap[title])) return titleToUrl.get(aliasMap[title]);
  return null;
}
const unresolved = new Map();
function rewriteDest(dest, isImage) {
  dest = dest.replace(/&amp;/g, '&');
  if (dest.startsWith('#')) return { dest: '#' + anchorSlug(dest.slice(1)) };
  const img = mapImage(dest);
  if (img) return { dest: img };
  if (/^\/mediawiki\/index\.php/.test(dest)) return { unlink: true };
  const m = dest.match(/^\/wiki\/(.+)$/);
  if (!m) return null;
  let raw;
  try { raw = decodeURIComponent(m[1]); } catch { raw = m[1]; }
  let anchor = '';
  const h = raw.indexOf('#');
  if (h >= 0) { anchor = raw.slice(h + 1); raw = raw.slice(0, h); }
  const title = raw.replace(/_/g, ' ');
  if (/^File:/i.test(title)) {
    const safe = safeImageName(htmlDecode(title.replace(/^File:/i, '')));
    return onDisk.has(safe) ? { dest: '/images/' + safe } : { unlink: true };
  }
  const url = resolveTitle(title);
  if (url) return { dest: url + (anchor ? '#' + anchorSlug(anchor) : '') };
  unresolved.set(title, (unresolved.get(title) || 0) + 1);
  return isImage ? { dest } : { unlink: true };
}
function removeMatchedTag(html, tag, attrMatch) {
  const openRe = new RegExp(`<${tag}\\b[^>]*>`, 'gi');
  let out = '', last = 0, m;
  while ((m = openRe.exec(html)) !== null) {
    if (attrMatch && !m[0].includes(attrMatch)) continue;
    const start = m.index;
    let depth = 1;
    const scan = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'gi');
    scan.lastIndex = openRe.lastIndex;
    let s, end = -1;
    while ((s = scan.exec(html)) !== null) {
      if (s[1] === '/') { depth--; if (depth === 0) { end = scan.lastIndex; break; } }
      else depth++;
    }
    if (end === -1) end = html.length;
    out += html.slice(last, start);
    last = end;
    openRe.lastIndex = end;
  }
  return out + html.slice(last);
}
function cleanHtml(html) {
  html = html.replace(/https?:\/\/(?:springrts\.com|springrts-wiki\.p2004a\.com)(\/(?:wiki|mediawiki)\/)/gi, '$1');
  html = removeMatchedTag(html, 'div', 'id="toc"');
  html = removeMatchedTag(html, 'span', 'class="mw-editsection"');
  html = html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<link\b[^>]*>/gi, '');
  html = removeMatchedTag(html, 'div', 'id="catlinks"');
  html = removeMatchedTag(html, 'div', 'class="MediaTransformError"');
  html = html.replace(/<div class="printfooter">[\s\S]*?<\/div>/gi, '');
  html = html.replace(/<span\b[^>]*class="mw-headline"[^>]*>([\s\S]*?)<\/span>/gi, '$1');
  html = html.replace(/<img\b[^>]*>/gi, (tag) => tag.replace(/\ssrcset="[^"]*"/gi, '')
    .replace(/(\ssrc=")([^"]*)(")/i, (m, a, src, b) => { const mapped = mapImage(src); return mapped ? a + mapped + b : m; }));
  html = html.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (full, attrs, inner) => {
    const hm = attrs.match(/\shref="([^"]*)"/i);
    if (!hm) return inner;
    if (inner.trim() === '') return '';
    const res = rewriteDest(hm[1].replace(/&amp;/g, '&'), false);
    if (!res) return full;
    if (res.unlink) return inner;
    return `<a href="${res.dest}">${inner}</a>`;
  });
  return html;
}
function runPandoc(args, input) {
  const r = spawnSync('pandoc', args, { input, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  if (r.status !== 0) throw new Error('pandoc failed: ' + (r.stderr || r.error));
  return r.stdout;
}
function pandoc(html) {
  const normalized = runPandoc(['-f', 'html', '-t', 'html5', '--wrap=none'], html);
  return runPandoc(['-f', 'html', '-t', 'gfm', '--wrap=none'], normalized);
}
function cleanTables(md) {
  return md.replace(/<(table|thead|tbody|tfoot|tr|td|th|col|colgroup|caption)\b([^>]*)>/gi, (full, tag, attrs) => {
    const keep = [];
    const cs = attrs.match(/\bcolspan="?(\d+)"?/i); if (cs) keep.push(`colspan="${cs[1]}"`);
    const rs = attrs.match(/\browspan="?(\d+)"?/i); if (rs) keep.push(`rowspan="${rs[1]}"`);
    if (/^table$/i.test(tag) && (/float\s*:\s*(right|left)/i.test(attrs) || /class="[^"]*infobox/i.test(attrs))) {
      const left = /float\s*:\s*left/i.test(attrs);
      keep.unshift(`class="wiki-infobox${left ? ' wiki-infobox-left' : ''}"`);
    }
    return `<${tag}${keep.length ? ' ' + keep.join(' ') : ''}>`;
  });
}
function escapeInterp(md) {
  const parts = md.split(/(```[\s\S]*?```|`[^`]*`)/g);
  return parts.map((seg, i) => i % 2 === 1 ? seg
    : seg.replace(/\{\{/g, '&#123;&#123;').replace(/\}\}/g, '&#125;&#125;')).join('');
}
function rewriteMarkdown(md) {
  return md.replace(/(!?)\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (full, bang, text, dest) => {
    const res = rewriteDest(dest, bang === '!');
    if (!res) return full;
    if (res.unlink) return text;
    return `${bang}[${text}](${res.dest})`;
  });
}
function plainTitle(displaytitle, title) {
  if (!displaytitle) return title;
  return displaytitle.replace(/<[^>]+>/g, '').trim() || title;
}

// ---------- main ----------
for (const d of OUT_DIRS) {
  rmSync(path.join(DOCS, d), { recursive: true, force: true });
  mkdirSync(path.join(DOCS, d), { recursive: true });
}
const failures = [];
let written = 0;
for (const p of toImport) {
  let parsed;
  try { parsed = await fetchParsed(p.title); } catch (e) { failures.push(String(e.message)); continue; }
  let md = pandoc(cleanHtml(parsed.text || '')).trim();
  md = md.replace(/<\/?span\b[^>]*>/gi, '');
  md = cleanTables(md);
  md = rewriteMarkdown(md);
  md = escapeInterp(md);
  md = fixOldHosts(md, resolveTitle, onDisk).md;
  md = widenImages(md, IMG_DIR).md;
  if (/^# /m.test(md)) md = md.replace(/^(#{1,5}) /gm, '#$1 ');
  md = md.replace(/^\\\s*$/gm, '').replace(/\n{3,}/g, '\n\n');
  const t = plainTitle(parsed.displaytitle, p.title);
  const pagePath = encodeURI(p.title.replace(/ /g, '_'));
  const src = 'https://springrts.com/wiki/' + pagePath;
  // The mirror's newer MediaWiki adds a tracking category the original wiki never had.
  const cats = (parsed.categories || []).map(c => c.category.replace(/_/g, ' '))
    .filter(c => c !== 'Pages with broken file links');
  const fm = ['---', `title: ${JSON.stringify(t)}`, `source_url: ${JSON.stringify(src)}`];
  if (cats.length) fm.push('categories:', ...cats.map(c => `  - ${JSON.stringify(c)}`));
  fm.push('---', '');
  const provenance = `\n\n---\n\n*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](${MIRROR}/wiki/${pagePath}). Original page: [${p.title}](${src}).*\n`;
  writeFileSync(titleToFile.get(p.title), `${fm.join('\n')}# ${t}\n\n${md}${provenance}`);
  written++;
}

const report = {
  written,
  skipped: [...SKIP],
  failures,
  unresolvedCount: unresolved.size,
  unresolved: [...unresolved.entries()].sort((a, b) => b[1] - a[1]),
};
writeFileSync(path.join(CACHE, '..', 'userspace-report.json'), JSON.stringify(report, null, 2));
console.log(`toImport=${toImport.length} written=${written} failed=${failures.length} skipped=${SKIP.size} unresolvedTitles=${unresolved.size}`);
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
