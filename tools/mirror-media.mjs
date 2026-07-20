#!/usr/bin/env node
// Download all uploaded wiki images (originals) into docs/public/images/.
// Local filenames are the URL-decoded basename so they match the refs convert.mjs emits.
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const manifest = JSON.parse(readFileSync(path.join(ROOT, 'tools/raw/titles.json'), 'utf8'));

// Keep in sync with safeImageName() in convert.mjs.
function safeImageName(name) {
  return name.replace(/ /g, '_').replace(/[&'"#?%]/g, '_').replace(/\.([^.]+)$/, (m, e) => '.' + e.toLowerCase());
}
const OUT = path.join(ROOT, 'docs/public/images');
mkdirSync(OUT, { recursive: true });

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36';
const CONCURRENCY = 12;

function localName(url) {
  const seg = url.split('?')[0].split('/').filter(Boolean).pop();
  let decoded; try { decoded = decodeURIComponent(seg); } catch { decoded = seg; }
  return safeImageName(decoded);
}

const images = manifest.images;
let done = 0, skipped = 0;
const failures = [];

async function fetchOne(img) {
  const name = localName(img.url);
  const dest = path.join(OUT, name);
  if (existsSync(dest) && statSync(dest).size > 0) { skipped++; return; }
  try {
    const r = await fetch(img.url, { headers: { 'User-Agent': UA } });
    if (!r.ok) { failures.push({ url: img.url, status: r.status }); return; }
    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.length === 0) { failures.push({ url: img.url, status: 'empty' }); return; }
    writeFileSync(dest, buf);
    done++;
  } catch (e) {
    failures.push({ url: img.url, status: String(e) });
  }
}

async function run() {
  let i = 0;
  async function worker() {
    while (i < images.length) {
      const img = images[i++];
      await fetchOne(img);
      if ((done + skipped) % 100 === 0) process.stdout.write(`\r${done + skipped}/${images.length}`);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  process.stdout.write('\n');
  writeFileSync(path.join(ROOT, 'tools/raw/media-report.json'), JSON.stringify({ downloaded: done, skipped, failed: failures.length, failures }, null, 2));
  console.log(`downloaded=${done} skipped=${skipped} failed=${failures.length}`);
  if (failures.length) console.log('failures written to tools/raw/media-report.json');
}
run();
