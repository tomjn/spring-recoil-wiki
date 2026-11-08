#!/usr/bin/env node
// Let block screenshots show at full size instead of the wiki's thumbnail width.
//
// MediaWiki pages set small widths (e.g. 300px) because clicking the thumbnail opened
// the full image. We serve the full image, so the width attribute only shrinks it.
// This drops width/height from images that sit alone on their line, outside floated
// thumbnails, galleries, tables and lists, so CSS shows them at natural size capped at
// the page width. Images set below MIN_WIDTH are icons, logos and unit portraits meant
// to stay small: in the imported content they are all 128px or less, screenshots 150px+.
//
// Usage: node tools/widen-images.mjs [--write]   (dry run by default)
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const MIN_WIDTH = 150;
const LINE = /^(\[?<img )([^>]*)(\/>(?:\]\([^)]*\))?\s*)$/;

function pngJpgGifWidth(buf) {
  if (buf.readUInt32BE(0) === 0x89504e47) return buf.readUInt32BE(16); // PNG IHDR
  if (buf.toString('ascii', 0, 3) === 'GIF') return buf.readUInt16LE(6);
  if (buf[0] === 0xff && buf[1] === 0xd8) { // JPEG: walk segments to a SOFn marker
    let i = 2;
    while (i + 9 < buf.length) {
      if (buf[i] !== 0xff) { i++; continue; }
      const marker = buf[i + 1];
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) return buf.readUInt16BE(i + 7);
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }
  return null;
}

// imagesDir: docs/public/images. Returns { md, widened }.
export function widenImages(md, imagesDir) {
  const lines = md.split('\n');
  let widened = 0;
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(LINE);
    if (!m) continue;
    const width = Number((m[2].match(/\bwidth="(\d+)"/) || [])[1]);
    const src = (m[2].match(/\bsrc="\/images\/([^"]+)"/) || [])[1];
    if (!width || !src || width < MIN_WIDTH) continue;
    // Skip images inside a still-open thumbnail, gallery, table cell or list item.
    const back = lines.slice(Math.max(0, i - 6), i).join('\n');
    const opened = Math.max(back.lastIndexOf('class="thumb'), back.lastIndexOf('gallery'), back.lastIndexOf('<td'), back.lastIndexOf('<li'));
    if (opened >= 0 && opened > Math.max(back.lastIndexOf('</div>'), back.lastIndexOf('</td>'))) continue;
    let natural;
    try { natural = pngJpgGifWidth(readFileSync(path.join(imagesDir, src))); } catch { continue; }
    if (!natural || natural <= width) continue;
    lines[i] = m[1] + m[2].replace(/\s*\b(width|height)="\d+"/g, '').trimEnd() + ' ' + m[3];
    widened++;
  }
  return { md: lines.join('\n'), widened };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const DOCS = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'docs');
  const IMAGES = path.join(DOCS, 'public', 'images');
  const WRITE = process.argv.includes('--write');
  const walk = (dir, out = []) => {
    for (const name of readdirSync(dir)) {
      if (name.startsWith('.') || name === 'public') continue;
      const full = path.join(dir, name);
      if (statSync(full).isDirectory()) walk(full, out);
      else if (name.endsWith('.md')) out.push(full);
    }
    return out;
  };
  let files = 0, total = 0;
  for (const f of walk(DOCS)) {
    const before = readFileSync(f, 'utf8');
    const { md, widened } = widenImages(before, IMAGES);
    if (!widened) continue;
    files++; total += widened;
    if (WRITE) writeFileSync(f, md);
    else console.log(`${path.relative(DOCS, f)} ${widened}`);
  }
  console.log(`${WRITE ? 'widened' : 'would widen'} images=${total} files=${files}`);
}
