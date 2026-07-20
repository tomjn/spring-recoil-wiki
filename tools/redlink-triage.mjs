// tools/redlink-triage.mjs
// Triage the unresolved internal wiki-links recorded by tools/convert.mjs
// (see tools/raw/convert-report.json -> topUnresolved) to find any that
// are false negatives: a real imported page that resolveTitle() missed.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const DOCS = join(ROOT, 'docs')
const REPORT = join(ROOT, 'tools/raw/convert-report.json')
const OUT = join(ROOT, 'tools/raw/redlink-actions.json')

const SUBDIRS = ['categories', 'help', 'project', 'templates']

function collectSlugs() {
  const slugs = new Set()
  for (const name of readdirSync(DOCS)) {
    const full = join(DOCS, name)
    if (name.endsWith('.md') && !statSync(full).isDirectory()) {
      slugs.add('/' + name.replace(/\.md$/, ''))
    }
  }
  for (const dir of SUBDIRS) {
    const dirPath = join(DOCS, dir)
    for (const name of readdirSync(dirPath)) {
      if (name.endsWith('.md')) slugs.add(`/${dir}/${name.replace(/\.md$/, '')}`)
    }
  }
  return slugs
}

function slugify(title) {
  return '/' + title
    .toLowerCase()
    .replace(/\?.*$/, '') // strip trailing query string
    .replace(/[:/_ ]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

const report = JSON.parse(readFileSync(REPORT, 'utf8'))
const slugs = collectSlugs()

const resolvable = []
const dead = []

for (const [title, count] of report.topUnresolved) {
  const candidate = slugify(title)
  if (slugs.has(candidate)) {
    resolvable.push({ title, count, to: candidate })
  } else {
    dead.push({ title, count })
  }
}

writeFileSync(OUT, JSON.stringify({ resolvable, dead }, null, 2) + '\n')

console.log(`Unresolved titles: ${report.topUnresolved.length}`)
console.log(`Resolvable (candidate slug exists): ${resolvable.length}`)
console.log(`Dead (no matching slug): ${dead.length}`)
console.log('\nResolvable list:')
for (const r of resolvable) console.log(`  "${r.title}" (x${r.count}) -> ${r.to}`)
