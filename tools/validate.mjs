#!/usr/bin/env node
// Find every page whose rendered HTML breaks the Vue SFC compiler, in one pass,
// by replicating VitePress's markdown -> HTML -> Vue-template pipeline.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { createMarkdownRenderer } from 'vitepress';
import { compile } from '@vue/compiler-dom';

const DOCS = new URL('../docs', import.meta.url).pathname;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || name === 'public') continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith('.md')) out.push(full);
  }
  return out;
}

const md = await createMarkdownRenderer(DOCS, { attrs: { disable: true } });
const files = walk(DOCS);
const bad = [];
for (const f of files) {
  let src = readFileSync(f, 'utf8');
  src = src.replace(/^---\n[\s\S]*?\n---\n/, ''); // strip frontmatter
  let html;
  try { html = md.render(src); } catch (e) { bad.push({ f: f.replace(DOCS + '/', ''), stage: 'md', errs: [String(e).split('\n')[0]] }); continue; }
  try {
    compile(html, { onError: (e) => { throw e; } });
  } catch (e) {
    bad.push({ f: f.replace(DOCS + '/', ''), stage: 'vue', errs: [String(e.message || e).split('\n')[0]] });
  }
}
console.log(`checked=${files.length} bad=${bad.length}`);
for (const b of bad) console.log(`  ${b.f}  ${b.stage}: ${b.errs ? b.errs.join(' | ') : b.err}`);
