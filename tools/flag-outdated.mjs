import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
const DOCS = new URL('../docs/', import.meta.url).pathname
const RX = /as of 200\d|in 200\d|spring 0\.7|spring 0\.8|\bTASClient\b|last updated.*200\d/i
let flagged = 0
for (const name of readdirSync(DOCS)) {
  if (!name.endsWith('.md') || name === 'index.md') continue
  const full = join(DOCS, name)
  let txt = readFileSync(full, 'utf8')
  if (!RX.test(txt)) continue
  if (/^outdated:/m.test(txt)) continue
  txt = txt.replace(/^---\n/, '---\noutdated: true\n')
  writeFileSync(full, txt); flagged++
}
console.log('flagged', flagged)
