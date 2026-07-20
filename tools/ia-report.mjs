// tools/ia-report.mjs
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { resolveSection } from '../docs/.vitepress/sections.mjs'

const DOCS = new URL('../docs/', import.meta.url).pathname

function frontmatter(txt) {
  const m = txt.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return { categories: [], section: '' }
  const fm = m[1]
  const sec = (fm.match(/^section:\s*"?([^"\n]+)"?/m) || [])[1] || ''
  const cats = []
  const cm = fm.match(/^categories:\s*\n((?:\s*-\s*.*\n?)+)/m)
  if (cm) for (const line of cm[1].split('\n')) {
    const t = line.match(/^\s*-\s*"?(.*?)"?\s*$/)
    if (t && t[1]) cats.push(t[1])
  }
  return { categories: cats, section: sec }
}

const counts = {}, fallback = [], empties = []
for (const name of readdirSync(DOCS)) {
  if (!name.endsWith('.md') || name === 'index.md') continue
  const full = join(DOCS, name)
  if (statSync(full).isDirectory()) continue
  const txt = readFileSync(full, 'utf8')
  const { categories, section } = frontmatter(txt)
  const slug = name.replace(/\.md$/, '')
  const id = resolveSection({ section, categories, slug })
  counts[id] = (counts[id] || 0) + 1
  if (id === 'wiki' && !section) fallback.push(name)
  const body = txt.replace(/^---\n[\s\S]*?\n---/, '').trim()
  if (body.replace(/\[.*?\]\(.*?\)|[#*_>`-]/g, '').trim().length < 40) empties.push(name)
}
console.log('section counts:', counts)
console.log('\nfallback -> wiki (', fallback.length, '):')
console.log(fallback.join('\n'))
console.log('\nnear-empty bodies (', empties.length, '):')
console.log(empties.join('\n'))
