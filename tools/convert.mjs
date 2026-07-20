#!/usr/bin/env node
// Convert exported MediaWiki rendered HTML (tools/raw/pages/*.json) into VitePress markdown.
// Local only: uses pandoc (html -> gfm) plus link/image rewriting. No network.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const RAW = path.join(ROOT, 'tools', 'raw');
const PAGES_DIR = path.join(RAW, 'pages');
const DOCS = path.join(ROOT, 'docs');

const NS_DIR = { 0: '', 4: 'project/', 10: 'templates/', 12: 'help/', 14: 'categories/' };
const NS_PREFIX = { 4: 'Spring:', 10: 'Template:', 12: 'Help:', 14: 'Category:' };

// ---------- load manifest ----------
const manifest = JSON.parse(readFileSync(path.join(RAW, 'titles.json'), 'utf8'));
const titleNs = new Map();            // exact title -> namespace id
for (const ns of Object.keys(manifest.content)) {
  for (const t of manifest.content[ns]) titleNs.set(t, Number(ns));
}
const aliasMap = manifest.aliasMap || {};   // redirect source -> target title

// ---------- load exported pages ----------
const pages = [];
for (const f of readdirSync(PAGES_DIR).filter(f => f.endsWith('.json')).sort()) {
  const d = JSON.parse(readFileSync(path.join(PAGES_DIR, f), 'utf8'));
  for (const p of d.pages) pages.push(p);
}
// de-dupe by title (batch-recover may overlap)
const byTitle = new Map();
for (const p of pages) byTitle.set(p.title, p);
const allPages = [...byTitle.values()];

// ---------- slug + path assignment ----------
function slugify(s) {
  return s.toLowerCase()
    .replace(/&[a-z]+;/g, '-')
    .replace(/[_\s]+/g, '-')
    .replace(/[\/:]+/g, '-')
    .replace(/[^a-z0-9.\-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-.]+|[-.]+$/g, '') || 'page';
}
function anchorSlug(a) {
  // MediaWiki anchor -> VitePress heading anchor approximation
  return a.toLowerCase().replace(/[_\s]+/g, '-').replace(/[^a-z0-9\-]/g, '').replace(/-+/g, '-');
}
function stripNsPrefix(title, ns) {
  const pre = NS_PREFIX[ns];
  return pre && title.startsWith(pre) ? title.slice(pre.length) : title;
}

const titleToUrl = new Map();   // exact title -> site-absolute url path (no base, no .md)
const titleToFile = new Map();  // exact title -> output file path
const usedSlugs = new Set();
const collisions = [];
for (const p of allPages) {
  const ns = titleNs.get(p.title);
  if (ns === undefined) continue; // File-ns or unknown; not a site page
  const dir = NS_DIR[ns] ?? '';
  let base = slugify(stripNsPrefix(p.title, ns));
  let key = dir + base;
  if (usedSlugs.has(key)) {
    let n = 2;
    while (usedSlugs.has(dir + base + '-' + n)) n++;
    collisions.push({ title: p.title, resolved: base + '-' + n });
    base = base + '-' + n;
    key = dir + base;
  }
  usedSlugs.add(key);
  titleToUrl.set(p.title, '/' + dir + base);
  titleToFile.set(p.title, path.join(DOCS, dir, base + '.md'));
}

// ---------- category membership (reconstructed from per-page categories) ----------
const categoryMembers = new Map(); // category name -> [titles]
for (const p of allPages) {
  for (const c of (p.categories || [])) {
    if (!categoryMembers.has(c.category)) categoryMembers.set(c.category, []);
    categoryMembers.get(c.category).push(p.title);
  }
}

// ---------- link resolution ----------
function resolveTitle(title) {
  // returns url path or null
  if (titleToUrl.has(title)) return titleToUrl.get(title);
  if (aliasMap[title] && titleToUrl.has(aliasMap[title])) return titleToUrl.get(aliasMap[title]);
  return null;
}
// Authoritative "exists" set = files actually mirrored to disk (safeImageName form).
// Keying on reality (not the inventory) means un-mirrored images keep their original URL
// instead of producing a dangling /images/ import that breaks the Vite build.
const IMG_DIR = path.join(DOCS, 'public', 'images');
const onDisk = existsSync(IMG_DIR) ? new Set(readdirSync(IMG_DIR)) : new Set();
function htmlDecode(s) {
  return s.replace(/&amp;/g, '&').replace(/&#0?39;/g, "'").replace(/&quot;/g, '"').replace(/&#0?34;/g, '"');
}
// Canonical URL/filesystem-safe image filename, used identically here and in mirror-media.mjs.
export function safeImageName(name) {
  // Vite asset detection is case-sensitive: lowercase the extension so .PNG/.JPG are
  // treated as static assets, not module imports.
  return name.replace(/ /g, '_').replace(/[&'"#?%]/g, '_').replace(/\.([^.]+)$/, (m, e) => '.' + e.toLowerCase());
}
function imageBasename(urlPath) {
  const clean = htmlDecode(urlPath.split('?')[0]);
  const parts = clean.split('/').filter(Boolean);
  const ti = parts.indexOf('thumb');
  // .../images/thumb/x/xy/Name.ext/###px-Name.ext  -> Name.ext (second to last)
  const seg = ti >= 0 ? parts[parts.length - 2] : parts[parts.length - 1];
  try { return decodeURIComponent(seg); } catch { return seg; }
}
// Map any image-ish URL to a local mirror path, but only if the file exists in the inventory.
function mapImage(url) {
  if (!/\/images\//.test(url)) return null;
  const safe = safeImageName(imageBasename(url));
  if (onDisk.has(safe)) return '/images/' + safe;
  return null;
}

// ---------- HTML cleanup (nesting-aware tag removal) ----------
function removeMatchedTag(html, tag, attrMatch) {
  const openRe = new RegExp(`<${tag}\\b[^>]*>`, 'gi');
  let out = '', last = 0, m;
  while ((m = openRe.exec(html)) !== null) {
    if (attrMatch && !m[0].includes(attrMatch)) continue;
    const start = m.index;
    // walk to matching close accounting for nested same-tag
    let depth = 1, i = openRe.lastIndex;
    const scan = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'gi');
    scan.lastIndex = i;
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
  out += html.slice(last);
  return out;
}
function cleanHtml(html) {
  // normalise absolute wiki/mediawiki URLs to relative so the rewriters below catch them
  html = html.replace(/https?:\/\/springrts\.com(\/(?:wiki|mediawiki)\/)/gi, '$1');
  html = removeMatchedTag(html, 'div', 'id="toc"');
  html = removeMatchedTag(html, 'span', 'class="mw-editsection"');
  html = html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<link\b[^>]*>/gi, '');
  html = removeMatchedTag(html, 'div', 'id="catlinks"');
  html = removeMatchedTag(html, 'div', 'class="MediaTransformError"'); // failed-thumbnail error boxes
  html = html.replace(/<div class="printfooter">[\s\S]*?<\/div>/gi, '');
  // unwrap headline spans so VitePress derives anchors from heading text
  html = html.replace(/<span\b[^>]*class="mw-headline"[^>]*>([\s\S]*?)<\/span>/gi, '$1');
  html = rewriteHtmlMedia(html);
  html = rewriteHtmlAnchors(html);
  return html;
}

// Rewrite <img> src to mirrored originals and drop srcset (which points at origin thumbs).
function rewriteHtmlMedia(html) {
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    let out = tag.replace(/\ssrcset="[^"]*"/gi, '');
    out = out.replace(/(\ssrc=")([^"]*)(")/i, (m, a, src, b) => {
      const mapped = mapImage(src);
      return mapped ? a + mapped + b : m;
    });
    return out;
  });
}

// Resolve or unwrap <a> at the HTML level (covers both pandoc-converted and raw-passthrough links).
function rewriteHtmlAnchors(html) {
  return html.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (full, attrs, inner) => {
    const hm = attrs.match(/\shref="([^"]*)"/i);
    if (!hm) return inner;
    if (inner.trim() === '') return ''; // empty anchors (e.g. magnify enlarge)
    const res = rewriteDest(hm[1].replace(/&amp;/g, '&'), false);
    if (!res) return full;            // external / unknown: keep as-is
    if (res.unlink) return inner;     // redlink/user/special: drop link, keep contents
    return `<a href="${res.dest}">${inner}</a>`;
  });
}

// ---------- pandoc ----------
function runPandoc(args, input) {
  const r = spawnSync('pandoc', args, { input, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  if (r.status !== 0) throw new Error('pandoc failed: ' + (r.stderr || r.error));
  return r.stdout;
}
function pandoc(html) {
  // Pass 1: normalise to well-formed HTML (repairs stray/unclosed tags that break the
  // Vue SFC compiler). Pass 2: convert to gfm, keeping the now well-formed raw HTML for
  // tables/infoboxes that markdown can't express.
  const normalized = runPandoc(['-f', 'html', '-t', 'html5', '--wrap=none'], html);
  return runPandoc(['-f', 'html', '-t', 'gfm', '--wrap=none'], normalized);
}

// ---------- markdown link/image rewriting ----------
const unresolved = new Map(); // target title -> count
function rewriteDest(dest, isImage) {
  // returns { dest } to keep link, or { unlink:true } to drop link keeping text, or null to leave unchanged
  dest = dest.replace(/&amp;/g, '&');
  if (dest.startsWith('#')) return { dest: '#' + anchorSlug(dest.slice(1)) };
  const img = mapImage(dest);
  if (img) return { dest: img };
  if (/^\/mediawiki\/index\.php/.test(dest)) return { unlink: true }; // edit/redlink
  const m = dest.match(/^\/wiki\/(.+)$/);
  if (!m) return null; // external / other
  let raw = decodeURIComponent(m[1]);
  let anchor = '';
  const h = raw.indexOf('#');
  if (h >= 0) { anchor = raw.slice(h + 1); raw = raw.slice(0, h); }
  const title = raw.replace(/_/g, ' ');
  if (/^File:/i.test(title)) {
    const safe = safeImageName(htmlDecode(title.replace(/^File:/i, '')));
    if (onDisk.has(safe)) return { dest: '/images/' + safe };
    return { unlink: true }; // File page for a non-existent upload
  }
  const url = resolveTitle(title);
  if (url) return { dest: url + (anchor ? '#' + anchorSlug(anchor) : '') };
  unresolved.set(title, (unresolved.get(title) || 0) + 1);
  return isImage ? { dest } : { unlink: true };
}
// Strip hardcoded presentational attributes from raw HTML tables (MediaWiki infoboxes/wikitables
// carry inline colours/borders/widths that clash with the theme). Keep only colspan/rowspan, and
// tag floated infoboxes so CSS can style them cleanly.
function cleanTables(md) {
  return md.replace(/<(table|thead|tbody|tfoot|tr|td|th|col|colgroup|caption)\b([^>]*)>/gi, (full, tag, attrs) => {
    const keep = [];
    const cs = attrs.match(/\bcolspan="?(\d+)"?/i); if (cs) keep.push(`colspan="${cs[1]}"`);
    const rs = attrs.match(/\browspan="?(\d+)"?/i); if (rs) keep.push(`rowspan="${rs[1]}"`);
    // Only float-right/left or explicitly-classed infoboxes become wiki-infobox; a plain
    // width style is NOT enough (wide data tables carry widths too).
    if (/^table$/i.test(tag) && (/float\s*:\s*(right|left)/i.test(attrs) || /class="[^"]*infobox/i.test(attrs))) {
      const left = /float\s*:\s*left/i.test(attrs);
      keep.unshift(`class="wiki-infobox${left ? ' wiki-infobox-left' : ''}"`);
    }
    return `<${tag}${keep.length ? ' ' + keep.join(' ') : ''}>`;
  });
}

// Neutralise Vue interpolation ({{ }}) outside code spans/blocks so VitePress compiles the page.
function escapeInterp(md) {
  const parts = md.split(/(```[\s\S]*?```|`[^`]*`)/g);
  return parts.map((seg, i) => i % 2 === 1 ? seg
    : seg.replace(/\{\{/g, '&#123;&#123;').replace(/\}\}/g, '&#125;&#125;')).join('');
}
function rewriteMarkdown(md) {
  // links and images: [text](dest) / ![alt](dest) optionally with "title"
  const re = /(!?)\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  return md.replace(re, (full, bang, text, dest) => {
    const isImage = bang === '!';
    const res = rewriteDest(dest, isImage);
    if (!res) return full;
    if (res.unlink) return text; // drop link, keep visible text
    return `${bang}[${text}](${res.dest})`;
  });
}

// ---------- render one page ----------
function plainTitle(displaytitle, title) {
  if (!displaytitle) return title;
  const t = displaytitle.replace(/<[^>]+>/g, '').trim();
  return t || title;
}
function frontmatter(p) {
  const ns = titleNs.get(p.title);
  const t = plainTitle(p.displaytitle, p.title);
  const cats = (p.categories || []).map(c => c.category);
  const src = 'https://springrts.com/wiki/' + encodeURI(p.title.replace(/ /g, '_'));
  const lines = ['---', `title: ${JSON.stringify(t)}`, `source_url: ${JSON.stringify(src)}`];
  if (cats.length) lines.push('categories:', ...cats.map(c => `  - ${JSON.stringify(c)}`));
  lines.push('---', '');
  return { yaml: lines.join('\n'), h1: t };
}

// ---------- main ----------
if (existsSync(DOCS)) {
  // clean previously generated content dirs only (leave .vitepress, public, index.md)
  for (const d of ['', 'project', 'templates', 'help', 'categories']) {
    // remove generated .md except index handled below
  }
}
for (const d of ['', 'project', 'templates', 'help', 'categories']) {
  mkdirSync(path.join(DOCS, d), { recursive: true });
}

let written = 0, empty = 0;
const emptyPages = [];
for (const p of allPages) {
  if (!titleToFile.has(p.title)) continue;
  const cleaned = cleanHtml(p.html || '');
  let md = pandoc(cleaned).trim();
  // strip span tags (MediaWiki anchor/style cruft); their broken attributes break the Vue compiler
  md = md.replace(/<\/?span\b[^>]*>/gi, '');
  md = cleanTables(md);
  md = rewriteMarkdown(md);
  md = escapeInterp(md);
  // The page title is the sole H1. If the body itself uses H1 (MediaWiki =Heading=),
  // demote every body heading one level so it nests under the title instead of duplicating it.
  if (/^# /m.test(md)) md = md.replace(/^(#{1,5}) /gm, '#$1 ');
  // drop stray standalone backslash lines (pandoc's rendering of empty <br> / hard breaks)
  md = md.replace(/^\\\s*$/gm, '').replace(/\n{3,}/g, '\n\n');
  const { yaml, h1 } = frontmatter(p);
  if (md.length < 2) { empty++; emptyPages.push(p.title); }
  // inject reconstructed member list into category pages
  const ns = titleNs.get(p.title);
  if (ns === 14) {
    const catName = stripNsPrefix(p.title, 14);
    const members = (categoryMembers.get(catName) || []).filter(t => titleToUrl.has(t)).sort();
    if (members.length) {
      const list = members.map(t => `- [${plainTitle(byTitle.get(t)?.displaytitle, t)}](${titleToUrl.get(t)})`).join('\n');
      md += `\n\n## Pages in this category\n\n${list}`;
    }
  }
  const src = 'https://springrts.com/wiki/' + encodeURI(p.title.replace(/ /g, '_'));
  const provenance = `\n\n---\n\n*Imported from the springrts.com wiki (public domain). Original page: [${p.title}](${src}).*\n`;
  const body = `${yaml}# ${h1}\n\n${md}${provenance}`;
  writeFileSync(titleToFile.get(p.title), body);
  written++;
}

// ---------- reports ----------
const report = {
  written,
  empty,
  emptyPages,
  collisions,
  unresolvedCount: unresolved.size,
  unresolvedTotalRefs: [...unresolved.values()].reduce((a, b) => a + b, 0),
  topUnresolved: [...unresolved.entries()].sort((a, b) => b[1] - a[1]).slice(0, 40),
};
writeFileSync(path.join(RAW, 'convert-report.json'), JSON.stringify(report, null, 2));
console.log(`written=${written} empty=${empty} collisions=${collisions.length} unresolvedTitles=${unresolved.size} unresolvedRefs=${report.unresolvedTotalRefs}`);
