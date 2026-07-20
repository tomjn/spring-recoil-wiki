import { defineConfig } from 'vitepress'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { SECTIONS, SIDEBAR_ORDER, resolveSection } from './sections.mjs'

const DOCS = new URL('..', import.meta.url).pathname

// ---- walk docs for content markdown ----
function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || name === 'public') continue
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) walk(full, out)
    else if (name.endsWith('.md') && name !== 'index.md') out.push(full)
  }
  return out
}

// read frontmatter title + categories + section override without a YAML dep
function frontmatterOf(file: string): { title: string; categories: string[]; section: string } {
  let txt = ''
  try { txt = readFileSync(file, 'utf8') } catch { return { title: '', categories: [], section: '' } }
  const fmMatch = txt.match(/^---\n([\s\S]*?)\n---/)
  const fm = fmMatch ? fmMatch[1] : ''
  const title = (fm.match(/^title:\s*"?(.*?)"?\s*$/m) || [])[1] || ''
  const section = (fm.match(/^section:\s*"?([^"\n]+)"?/m) || [])[1] || ''
  const categories: string[] = []
  const cm = fm.match(/^categories:\s*\n((?:[ \t]*-[ \t]*.*\n?)+)/m)
  if (cm) for (const line of cm[1].split('\n')) {
    const t = line.match(/^\s*-\s*"?(.*?)"?\s*$/)
    if (t && t[1]) categories.push(t[1])
  }
  return { title, categories, section }
}

type Item = { text: string; link: string }
function byText(items: Item[]) { return items.sort((a, b) => a.text.localeCompare(b.text)) }

function buildSidebar() {
  const files = walk(DOCS)
  const DISPLAY: { id: string; text: string }[] = [
    ...SIDEBAR_ORDER.filter(x => x !== 'archive').map(x => ({ id: x, text: '' })),
    { id: 'categories', text: 'Categories' },
    { id: 'archive', text: 'Archive' },
    { id: 'templates', text: 'Templates' },
  ]
  const textOf = Object.fromEntries(SECTIONS.map(s => [s.id, s.text]))
  const buckets: Record<string, Item[]> = {}
  for (const g of DISPLAY) buckets[g.id] = []
  for (const file of files) {
    const rel = relative(DOCS, file).replace(/\\/g, '/')
    const link = '/' + rel.replace(/\.md$/, '')
    const { title, categories, section } = frontmatterOf(file)
    const slug = rel.replace(/\.md$/, '')
    // help/ and project/ subtrees are always meta; templates/ and categories/ are directory-scoped
    const top = rel.includes('/') ? rel.split('/')[0] : ''
    let id: string
    if (top === 'templates') id = 'templates'
    else if (top === 'categories') id = 'categories'
    else if (top === 'help' || top === 'project') id = 'wiki'
    else id = resolveSection({ section, categories, slug })
    buckets[id].push({ text: title || rel, link })
  }
  return DISPLAY
    .filter(g => buckets[g.id].length)
    .map(g => ({
      text: g.text || textOf[g.id],
      collapsed: true,
      items: byText(buckets[g.id]),
    }))
}

export default defineConfig({
  lang: 'en-US',
  title: 'Spring / Recoil Wiki',
  description: 'Community documentation for the Spring and Recoil RTS engines.',
  base: '/spring-recoil-wiki/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    // Imported wiki content contains literal { } (Lua tables, config) that must not be
    // parsed as markdown-it-attrs attribute syntax (produces invalid duplicate attributes).
    attrs: { disable: true },
  },
  // VitePress prepends `base` to markdown links/images but NOT to href/src inside raw HTML
  // (infobox/table links, images). Prepend it here so those don't 404 on the deployed site.
  transformHtml(code) {
    const base = '/spring-recoil-wiki/';
    return code.replace(
      /\b(href|src)="\/(?!\/)(?!spring-recoil-wiki\/)([^"]*)"/g,
      (_m, attr, path) => `${attr}="${base}${path}"`,
    );
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Play', link: '/play' },
      { text: 'Games', link: '/games' },
      {
        text: 'Develop',
        items: [
          { text: 'Game Development', link: '/game-development' },
          { text: 'Map Development', link: '/map-development' },
          { text: 'AI Development', link: '/ai-development' },
          { text: 'Engine Development', link: '/engine-development' },
        ],
      },
      { text: 'Hosting', link: '/hosting' },
      { text: 'Reference', link: '/reference' },
      {
        text: 'Recoil',
        items: [
          { text: 'Recoil Engine site', link: 'https://recoilengine.org/' },
          { text: 'Recoil on GitHub', link: 'https://github.com/beyond-all-reason/RecoilEngine/' },
          { text: 'Community Discord', link: 'https://discord.gg/GUpRg6Wz3e' },
        ],
      },
    ],
    sidebar: buildSidebar(),
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/GUpRg6Wz3e' },
      { icon: 'github', link: 'https://github.com/tomjn/spring-recoil-wiki' },
      { icon: 'github', link: 'https://github.com/beyond-all-reason/RecoilEngine/', ariaLabel: 'Recoil Engine on GitHub' },
    ],
    footer: {
      message: 'Content imported from the springrts.com wiki by its contributors. See each page\'s source link.',
      copyright: 'Community-maintained. Not affiliated with springrts.com.',
    },
  },
})
