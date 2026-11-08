#!/usr/bin/env node
// One-off fix: rewrite links to the dead (ta)spring.clan-sy.com hosts in docs/.
// See tools/old-hosts.mjs for the rules. users/ and talk/ are skipped because
// tools/import-userspace.mjs applies the same fix when it generates them.
//
// Usage: node tools/fix-old-hosts.mjs [path to dump history.xml] [--write]
// Dry run by default. The dump is optional and only adds redirect titles.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fixOldHosts } from './old-hosts.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DOCS = path.join(ROOT, 'docs');
const WRITE = process.argv.includes('--write');
const xmlPath = process.argv.slice(2).find(a => !a.startsWith('--'));
const SKIP_DIRS = ['users/', 'talk/'];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || name === 'public') continue;
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith('.md')) out.push(full);
  }
  return out;
}

const titleToUrl = new Map();
for (const f of walk(DOCS)) {
  const src = readFileSync(f, 'utf8').match(/^source_url: "https:\/\/springrts\.com\/wiki\/([^"]+)"/m);
  if (src) titleToUrl.set(decodeURI(src[1]).replace(/_/g, ' '), '/' + path.relative(DOCS, f).replace(/\.md$/, ''));
}
const redirects = new Map();
if (xmlPath) {
  const xml = readFileSync(xmlPath, 'utf8');
  const re = /<title>([^<]*)<\/title>\s*<ns>-?\d+<\/ns>\s*<id>\d+<\/id>\s*<redirect title="([^"]*)"/g;
  const dec = s => s.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, '&');
  for (let m; (m = re.exec(xml)) !== null;) redirects.set(dec(m[1]), dec(m[2]));
}
const resolveTitle = t => titleToUrl.get(t) || titleToUrl.get(redirects.get(t)) || null;
const onDisk = new Set(readdirSync(path.join(DOCS, 'public', 'images')));

let files = 0, internal = 0, external = 0;
for (const f of walk(DOCS)) {
  const rel = path.relative(DOCS, f);
  if (SKIP_DIRS.some(d => rel.startsWith(d))) continue;
  const before = readFileSync(f, 'utf8');
  const r = fixOldHosts(before, resolveTitle, onDisk);
  if (r.md === before) continue;
  files++; internal += r.internal; external += r.external;
  if (WRITE) writeFileSync(f, r.md);
  else console.log(rel);
}
console.log(`${WRITE ? 'wrote' : 'would change'} files=${files} internal=${internal} springrts=${external} redirectsLoaded=${redirects.size}`);
