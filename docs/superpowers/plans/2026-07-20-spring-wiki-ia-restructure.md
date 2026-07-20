# Spring / Recoil Wiki - Phase 2 IA Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the colon-prefix sidebar (which dumps 443 of 641 pages into one "General" bucket) with a metadata-driven ten-section information architecture, demote ~160 stale pages to an Archive, fix redlinks, flag outdated pages, and wire Recoil in as external references - all without changing a single page URL.

**Architecture:** A new pure-function resolver (`docs/.vitepress/sections.mjs`) maps each page to one of ten sections from its existing `categories:` frontmatter (with an optional per-page `section:` override and an ordered precedence rule). `config.mts` imports the resolver to build one global sidebar of collapsible section groups plus top-nav dropdowns and external links. All other work (landing pages, redlink fixes, outdated flags, Recoil cross-links) is post-processing edits to the committed `.md` files, which become the source of truth once `convert.mjs` is frozen (Task 0).

**Tech Stack:** VitePress 1.6.4, Node ESM (`type: module`), plain `node` scripts for tooling and tests (matches existing `tools/*.mjs`), `bun run docs:build` / `docs:dev`, `node tools/validate.mjs` as the Vue-compile gate.

**Spec:** `docs/superpowers/specs/2026-07-20-spring-wiki-ia-restructure-design.md`

---

## File Structure

- Create `docs/.vitepress/sections.mjs` - pure resolver: `SECTIONS` (ordered list of `{id,text}`), `CATEGORY_TO_SECTION` map, `resolveSection({categories, section, title, slug})`. One responsibility: decide a page's section. No filesystem, no VitePress imports, so it is unit-testable in isolation.
- Create `docs/.vitepress/sections.test.mjs` - node assertion script for the resolver (precedence, known pages, mapping completeness).
- Modify `docs/.vitepress/config.mts` - import the resolver; rewrite `buildSidebar()`; add `nav` dropdowns + external links; extend `socialLinks`. Extend frontmatter parsing to read `categories:` and `section:`.
- Create `tools/ia-report.mjs` - read-only analysis: for every root `.md`, print its resolved section and flag pages that fall to the `wiki` fallback (so overrides can be added). Also lists empty `Delete` stubs (byte threshold).
- Create `tools/redlink-triage.mjs` - read `tools/raw/convert-report.json`, scan committed `.md` for each unresolved target, classify resolvable (slug exists) vs dead, emit `tools/raw/redlink-actions.json`.
- Create `tools/apply-redlinks.mjs` - consume `redlink-actions.json`, rewrite `.md` links (unlink dead, repoint resolvable).
- Create `docs/.vitepress/theme/OutdatedNotice.vue` + `docs/.vitepress/theme/index.ts` - a small banner component rendered from an `outdated: true` frontmatter flag.
- Create landing pages: `docs/play.md`, `docs/games.md`, `docs/game-development.md`, `docs/map-development.md`, `docs/ai-development.md`, `docs/engine-development.md`, `docs/hosting.md`, `docs/reference.md`. Modify `docs/index.md` into a hub.
- Create `tools/flag-outdated.mjs` - detect self-dating pages ("as of 200x", explicit old-version language), add `outdated: true` frontmatter.

---

## Task 0: Freeze the pipeline (Step 0 from spec)

Regenerate the redlink report while regeneration is still idempotent, then stop touching `convert.mjs`. Every later task edits `.md` files that a `convert.mjs` re-run would clobber, so this must run first.

**Files:**
- Read/regenerate: `tools/raw/convert-report.json` (git-ignored output of `tools/convert.mjs`)

- [ ] **Step 1: Confirm a clean tree and the raw export exists**

Run: `git status --short && ls tools/raw | head`
Expected: no uncommitted changes on `phase-2-ia-restructure`; `tools/raw` contains the captured export (pages source + inventory). If `tools/raw` is empty, STOP - the report cannot be regenerated and redlink work (Task 6-7 inputs) must be deferred; tell the user.

- [ ] **Step 2: Regenerate pages + report**

Run: `node tools/convert.mjs`
Expected stdout ends with a line like `written=... empty=... collisions=... unresolvedTitles=... unresolvedRefs=...`. Note the `empty` and `unresolvedTitles` numbers.

- [ ] **Step 3: Verify regeneration was idempotent (no silent content drift)**

Run: `git status --short docs`
Expected: empty output. If files changed, the committed import and a fresh convert disagree - STOP and report the diff to the user before proceeding (do not commit the drift).

- [ ] **Step 4: Verify the report landed**

Run: `node -e "const r=require('./tools/raw/convert-report.json');console.log('unresolvedTitles',r.unresolvedCount,'topN',r.topUnresolved.length)"`
Expected: prints counts; `topUnresolved` is a non-empty array of `[title, count]`.

- [ ] **Step 5: Validate + build the untouched site as a baseline**

Run: `node tools/validate.mjs && bun run docs:build`
Expected: validate prints `bad=0`; build completes without error. This is the green baseline every later task must preserve.

- [ ] **Step 6: Commit the baseline note**

`convert.mjs` is now frozen. Record that decision so future contributors do not re-run it over hand-edits.

```bash
git add docs/superpowers/plans/2026-07-20-spring-wiki-ia-restructure.md
git commit -m "docs: add phase 2 implementation plan; freeze convert.mjs as reference-only

convert-report.json regenerated; validate bad=0, build green. From here the committed docs/*.md are the source of truth - do not re-run convert.mjs over phase-2 edits."
```

---

## Task 1: Section resolver + mapping + tests

Pure logic, so it gets a real test. Precedence rules are the error-prone part; the test locks them.

**Files:**
- Create: `docs/.vitepress/sections.mjs`
- Test: `docs/.vitepress/sections.test.mjs`

- [ ] **Step 1: Write the resolver**

```js
// docs/.vitepress/sections.mjs
// Pure section-resolution logic. No fs, no vitepress imports - unit-testable.

// Ordered: earlier sections win when a page matches more than one.
// Archive is intentionally first so stale tags always demote a page.
export const SECTIONS = [
  { id: 'archive',     text: 'Archive' },
  { id: 'games',       text: 'Games' },
  { id: 'map-dev',     text: 'Map Development' },
  { id: 'ai-dev',      text: 'AI Development' },
  { id: 'game-dev',    text: 'Game Development' },
  { id: 'engine-dev',  text: 'Engine Development' },
  { id: 'hosting',     text: 'Hosting and Servers' },
  { id: 'play',        text: 'Play' },
  { id: 'reference',   text: 'Reference' },
  { id: 'wiki',        text: 'Wiki and Project' },
]

// Display order in the sidebar (Archive demoted to the bottom, Wiki above it).
export const SIDEBAR_ORDER = [
  'play', 'games', 'game-dev', 'map-dev', 'ai-dev',
  'engine-dev', 'hosting', 'reference', 'wiki', 'archive',
]

// Normalize a category tag to a lookup key: lowercase, collapse _ and spaces.
export function normTag(tag) {
  return String(tag).trim().toLowerCase().replace(/[\s_]+/g, '-')
}

// category key -> section id. Keys are normTag() output.
export const CATEGORY_TO_SECTION = {
  // archive (precedence 1)
  'delete': 'archive', 'deprecated': 'archive', 'historical': 'archive',
  'clans': 'archive', 'emmanuel': 'archive',
  // games
  'games': 'games', 'mods': 'games', 'balanced-annihilation': 'games',
  'xta': 'games', 'czta': 'games', 'nota': 'games',
  'expand-and-exterminate': 'games',
  // map development
  'map-dev': 'map-dev', 'map-making': 'map-dev', 'map-tools': 'map-dev', 'maps': 'map-dev',
  // ai development
  'ai': 'ai-dev', 'ai-dev': 'ai-dev', 'aiinterface': 'ai-dev', 'aiwrapper': 'ai-dev',
  // game development
  'game-dev': 'game-dev', 'lua': 'game-dev', 'animation': 'game-dev',
  '3d-models': 'game-dev', 'ceg': 'game-dev', 'shaders': 'game-dev',
  'chili': 'game-dev', 'units': 'game-dev', 'weapons': 'game-dev', 'libraries': 'game-dev',
  // engine development
  'engine-dev': 'engine-dev', 'development': 'engine-dev', 'gsoc': 'engine-dev',
  'buildbot': 'engine-dev', 'linux': 'engine-dev', 'compiling': 'engine-dev',
  // hosting
  'lobby': 'hosting', 'download-systems': 'hosting', 'autohosts': 'hosting', 'spads': 'hosting',
  // play
  'strategy': 'play', 'playing': 'play', 'faq': 'play',
  // reference
  'gamedata': 'reference',
  // wiki/meta
  'help': 'wiki', 'spring': 'wiki', 'content': 'wiki', 'review': 'wiki', 'forum': 'wiki',
}

const RANK = Object.fromEntries(SECTIONS.map((s, i) => [s.id, i]))

// Resolve a page to a section id.
//   section  - explicit per-page override (highest priority) or ''
//   categories - array of raw tag strings from frontmatter
//   slug     - filename without .md (used for the reference filename heuristic)
export function resolveSection({ section, categories = [], slug = '' } = {}) {
  if (section && RANK[section] !== undefined) return section
  // Filename heuristic: config-file docs -> Reference (only if no stronger match).
  const isConfigFile = /\.(lua|txt|cfg)$/i.test(slug)
  let best = null
  for (const raw of categories) {
    const id = CATEGORY_TO_SECTION[normTag(raw)]
    if (!id) continue
    if (best === null || RANK[id] < RANK[best]) best = id
  }
  if (best !== null) return best
  if (isConfigFile) return 'reference'
  return 'wiki' // fallback
}
```

- [ ] **Step 2: Write the failing test**

```js
// docs/.vitepress/sections.test.mjs
import assert from 'node:assert/strict'
import { resolveSection, CATEGORY_TO_SECTION, SECTIONS } from './sections.mjs'

const ids = new Set(SECTIONS.map(s => s.id))

// Every mapping target is a real section id.
for (const [tag, id] of Object.entries(CATEGORY_TO_SECTION)) {
  assert.ok(ids.has(id), `mapping ${tag} -> unknown section ${id}`)
}

// Precedence: archive tag beats a content tag.
assert.equal(resolveSection({ categories: ['Lua', 'Deprecated'] }), 'archive')
// Map dev beats game dev.
assert.equal(resolveSection({ categories: ['Game_Dev', 'Map_Dev'] }), 'map-dev')
// Explicit override wins over everything.
assert.equal(resolveSection({ section: 'play', categories: ['Deprecated'] }), 'play')
// Reference filename heuristic applies only without a stronger tag.
assert.equal(resolveSection({ categories: [], slug: 'armordefs.lua' }), 'reference')
assert.equal(resolveSection({ categories: ['Lua'], slug: 'armordefs.lua' }), 'game-dev')
// Unknown/empty -> wiki fallback.
assert.equal(resolveSection({ categories: ['SomethingUnmapped'] }), 'wiki')
// Case/space-insensitive tag matching (the LINUX vs Linux problem).
assert.equal(resolveSection({ categories: ['LINUX'] }), 'engine-dev')
assert.equal(resolveSection({ categories: ['Balanced_Annihilation'] }), 'games')

console.log('sections.test.mjs: all assertions passed')
```

- [ ] **Step 3: Run it - expect PASS (logic and test written together)**

Run: `node docs/.vitepress/sections.test.mjs`
Expected: `sections.test.mjs: all assertions passed`. If any assertion throws, fix `sections.mjs` (not the test) until green.

- [ ] **Step 4: Commit**

```bash
git add docs/.vitepress/sections.mjs docs/.vitepress/sections.test.mjs
git commit -m "feat: add metadata-driven section resolver + tests"
```

---

## Task 2: Measure real assignment, add overrides for stragglers

Before wiring into the sidebar, run the resolver over every real page to see where pages land and which fall to the `wiki` fallback. Fallback pages get a `section:` override or a new mapping entry.

**Files:**
- Create: `tools/ia-report.mjs`
- Modify: individual `docs/*.md` (add `section:` frontmatter to stragglers), and/or `docs/.vitepress/sections.mjs` (add mapping entries)

- [ ] **Step 1: Write the analysis script**

```js
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
  // body size after frontmatter, for empty-Delete-stub detection
  const body = txt.replace(/^---\n[\s\S]*?\n---/, '').trim()
  if (body.replace(/\[.*?\]\(.*?\)|[#*_>`-]/g, '').trim().length < 40) empties.push(name)
}
console.log('section counts:', counts)
console.log('\nfallback -> wiki (', fallback.length, '):')
console.log(fallback.join('\n'))
console.log('\nnear-empty bodies (', empties.length, '):')
console.log(empties.join('\n'))
```

- [ ] **Step 2: Run it and read the fallback list**

Run: `node tools/ia-report.mjs`
Expected: a `section counts` object, a `fallback -> wiki` list, and a `near-empty bodies` list. Sanity check counts roughly match the spec estimates (games ~120, game-dev ~150, archive ~160). A `wiki` count far above ~25 means tags are unmapped.

- [ ] **Step 3: Resolve fallback pages**

For each page in the fallback list, decide: does an existing tag just need a mapping entry (add it to `CATEGORY_TO_SECTION` in `sections.mjs`), or is the page genuinely cross-namespace (add `section: <id>` to that file's frontmatter)? Example override edit:

```diff
 ---
 title: "LINUX:SetupSpringie"
 source_url: "https://springrts.com/wiki/LINUX:SetupSpringie"
 categories:
   - "Linux"
+section: "hosting"
 ---
```

Re-run `node tools/ia-report.mjs` after each batch until the `wiki` count is only genuine meta pages (about/conventions/help). Do not force every page to zero-fallback; `wiki` is a valid home for true meta pages.

- [ ] **Step 4: Re-run the resolver test (mappings may have changed)**

Run: `node docs/.vitepress/sections.test.mjs`
Expected: still passes. If you added a mapping whose target id is wrong, the completeness assertion catches it.

- [ ] **Step 5: Commit**

```bash
git add tools/ia-report.mjs docs/.vitepress/sections.mjs
git add docs/*.md   # only the files you added section: overrides to
git commit -m "feat: add IA report tool; assign straggler pages to sections"
```

---

## Task 3: Wire the resolver into the sidebar

Replace colon-prefix grouping in `buildSidebar()` with resolver-driven grouping. One global sidebar, sections in `SIDEBAR_ORDER`, Archive collapsed at the bottom.

**Files:**
- Modify: `docs/.vitepress/config.mts` (`titleOf`/`walk`/`buildSidebar`)

- [ ] **Step 1: Extend frontmatter reading and rewrite `buildSidebar`**

Replace the current `titleOf` + `buildSidebar` region (config.mts lines 7-63) with:

```ts
import { SECTIONS, SIDEBAR_ORDER, resolveSection } from './sections.mjs'

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
  const buckets: Record<string, Item[]> = {}
  for (const id of SIDEBAR_ORDER) buckets[id] = []
  for (const file of files) {
    const rel = relative(DOCS, file).replace(/\\/g, '/')
    const link = '/' + rel.replace(/\.md$/, '')
    const { title, categories, section } = frontmatterOf(file)
    const slug = rel.replace(/\.md$/, '')
    // help/ and project/ subtrees are always meta
    const top = rel.includes('/') ? rel.split('/')[0] : ''
    const id = (top === 'help' || top === 'project' || top === 'categories')
      ? 'wiki'
      : resolveSection({ section, categories, slug })
    buckets[id].push({ text: title || rel, link })
  }
  const textOf = Object.fromEntries(SECTIONS.map(s => [s.id, s.text]))
  return SIDEBAR_ORDER
    .filter(id => buckets[id].length)
    .map(id => ({
      text: textOf[id],
      collapsed: true,
      items: byText(buckets[id]),
    }))
}
```

Keep the existing `walk()` and `DOCS` definitions. Remove the now-unused `group()`/`main`/colon-prefix logic.

- [ ] **Step 2: Build and eyeball the sidebar**

Run: `bun run docs:build`
Expected: build succeeds. Then `bun run docs:dev` and confirm in the browser: ten (or fewer, if a section is empty) top-level groups, no 443-item "General" bucket, Archive at the bottom.

- [ ] **Step 3: Validate unchanged (no page content touched)**

Run: `node tools/validate.mjs`
Expected: `bad=0`.

- [ ] **Step 4: Commit**

```bash
git add docs/.vitepress/config.mts
git commit -m "feat: group sidebar by resolved section instead of colon prefix"
```

---

## Task 4: Top nav dropdowns + external Recoil/Discord links

**Files:**
- Modify: `docs/.vitepress/config.mts` (`themeConfig.nav`, `socialLinks`)

- [ ] **Step 1: Replace the `nav` and `socialLinks` blocks**

```ts
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
```

```ts
socialLinks: [
  { icon: 'discord', link: 'https://discord.gg/GUpRg6Wz3e' },
  { icon: 'github', link: 'https://github.com/tomjn/spring-recoil-wiki' },
  { icon: 'github', link: 'https://github.com/beyond-all-reason/RecoilEngine/', ariaLabel: 'Recoil Engine on GitHub' },
],
```

- [ ] **Step 2: Build and verify nav**

Run: `bun run docs:build`
Expected: success. In `docs:dev`, confirm the Develop and Recoil dropdowns render and external links open the right sites in a new context.

- [ ] **Step 3: Commit**

```bash
git add docs/.vitepress/config.mts
git commit -m "feat: add section nav dropdowns and external Recoil/Discord links"
```

---

## Task 5: Section landing pages + homepage hub

Give each of the eight primary sections a curated entry page, and turn `index.md` into a hub. These pages are new content (URLs that did not exist in the import), so they do not collide with anything.

**Files:**
- Create: `docs/play.md`, `docs/games.md`, `docs/game-development.md`, `docs/map-development.md`, `docs/ai-development.md`, `docs/engine-development.md`, `docs/hosting.md`, `docs/reference.md`
- Modify: `docs/index.md`

- [ ] **Step 1: Write one landing page (template), then repeat per section**

Each landing page: a `section:` frontmatter so the resolver files the landing page into its own sidebar group, a one-paragraph intro, a curated "Start here" list of 5-10 hand-picked existing pages, and a Recoil cross-link where relevant. Example:

```markdown
---
title: "Game Development"
section: "game-dev"
---
# Game Development

Making a game (a "mod") for the Spring engine: units, weapons, models, animation, effects, UI, and Lua scripting. Modern development happens on [Recoil](https://recoilengine.org/); much below still applies, but check the [Recoil docs](https://recoilengine.org/) for current APIs.

## Start here
- [The Complete Guide To Making A Spring Game](/the-complete-guide-to-making-a-spring-game)
- [Gamedev:Main](/gamedev-main)
- [Gamedev:UnitDefs](/gamedev-unitdefs)
- [Gamedev:WeaponDefs](/gamedev-weapondefs)
- [Lua Scripting](/lua-main)
- [Chili (UI)](/chili)
- [CEG effects](/ceg-main)

## All Game Development pages
See the **Game Development** group in the sidebar for the full list.
```

Pick the "Start here" links from real slugs (verify each with `ls docs | grep <slug>`; every link must resolve). Repeat for the other seven sections, using their strongest hub pages.

- [ ] **Step 2: Rewrite `index.md` as a hub**

Point at the eight sections. Keep it short; link `/play`, `/games`, `/game-development`, `/map-development`, `/ai-development`, `/engine-development`, `/hosting`, `/reference`, plus a line linking Recoil externally.

- [ ] **Step 3: Build + validate**

Run: `node tools/validate.mjs && bun run docs:build`
Expected: `bad=0`, build succeeds, no dead-link errors for the new landing links (they resolve to real slugs).

- [ ] **Step 4: Commit**

```bash
git add docs/play.md docs/games.md docs/game-development.md docs/map-development.md docs/ai-development.md docs/engine-development.md docs/hosting.md docs/reference.md docs/index.md
git commit -m "feat: add curated section landing pages and homepage hub"
```

---

## Task 6: Redlink triage and fixes

Use `convert-report.json` (from Task 0) to classify unresolved links and fix them in the committed `.md` files.

**Files:**
- Create: `tools/redlink-triage.mjs`, `tools/apply-redlinks.mjs`
- Modify: various `docs/*.md` (link fixes)

- [ ] **Step 1: Write the triage script**

```js
// tools/redlink-triage.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const DOCS = new URL('../docs/', import.meta.url).pathname
const report = JSON.parse(readFileSync(new URL('./raw/convert-report.json', import.meta.url)))

// set of existing slugs
const slugs = new Set(
  readdirSync(DOCS).filter(n => n.endsWith('.md')).map(n => '/' + n.replace(/\.md$/, '')),
)
function slugify(title) {
  return '/' + title.toLowerCase().replace(/[:_\s]+/g, '-').replace(/[^a-z0-9/-]/g, '').replace(/-+/g, '-')
}

const actions = { resolvable: [], dead: [] }
for (const [title, count] of report.topUnresolved) {
  const guess = slugify(title)
  if (slugs.has(guess)) actions.resolvable.push({ title, to: guess, count })
  else actions.dead.push({ title, count })
}
writeFileSync(new URL('./raw/redlink-actions.json', import.meta.url), JSON.stringify(actions, null, 2))
console.log('resolvable', actions.resolvable.length, 'dead', actions.dead.length)
```

- [ ] **Step 2: Run and review**

Run: `node tools/redlink-triage.mjs`
Expected: prints counts and writes `tools/raw/redlink-actions.json`. Open it; sanity-check a few `resolvable` guesses actually point at the right page and a few `dead` ones are genuinely nonexistent. Hand-correct any wrong `resolvable` guess in the JSON before applying.

- [ ] **Step 3: Write the apply script**

```js
// tools/apply-redlinks.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const DOCS = new URL('../docs/', import.meta.url).pathname
const actions = JSON.parse(readFileSync(new URL('./raw/redlink-actions.json', import.meta.url)))

// Build a title -> action map. Links in pages look like [text](/some-slug) OR
// dead ones were already dropped at import; here we repoint any /wrong-slug we can fix.
const repoint = new Map(actions.resolvable.map(a => [a.title, a.to]))
let files = 0, edits = 0
for (const name of readdirSync(DOCS)) {
  if (!name.endsWith('.md')) continue
  const full = join(DOCS, name)
  let txt = readFileSync(full, 'utf8'), before = txt
  for (const [title, to] of repoint) {
    // repoint markdown links whose target slug matches the naive slugify of the title
    const wrong = '/' + title.toLowerCase().replace(/[:_\s]+/g, '-').replace(/[^a-z0-9/-]/g, '')
    if (wrong !== to) txt = txt.split(`](${wrong})`).join(`](${to})`)
  }
  if (txt !== before) { writeFileSync(full, txt); files++; edits++ }
}
console.log('files changed', files)
```

Note: the import already dropped genuine dead links (`res.unlink` in `convert.mjs`), so most `dead` entries need no action - they are plain text. `apply-redlinks.mjs` only repoints resolvable slug mismatches. If review in Step 2 shows the `dead` list contains links still rendered as links, extend this script to unlink them; otherwise leave them.

- [ ] **Step 4: Apply, validate, build**

Run: `node tools/apply-redlinks.mjs && node tools/validate.mjs && bun run docs:build`
Expected: reports files changed; `bad=0`; build succeeds.

- [ ] **Step 5: Commit**

```bash
git add tools/redlink-triage.mjs tools/apply-redlinks.mjs docs
git commit -m "fix: repoint resolvable redlinks from convert report"
```

---

## Task 7: Outdated-content flag

A themed banner rendered from an `outdated: true` frontmatter flag, plus a detector that sets it on self-dating pages.

**Files:**
- Create: `docs/.vitepress/theme/OutdatedNotice.vue`, `docs/.vitepress/theme/index.ts`
- Create: `tools/flag-outdated.mjs`
- Modify: `docs/.vitepress/config.mts` (only if a theme dir did not exist before - VitePress auto-loads `theme/index.ts`)

- [ ] **Step 1: Component + theme registration**

```vue
<!-- docs/.vitepress/theme/OutdatedNotice.vue -->
<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>
<template>
  <div v-if="frontmatter.outdated" class="outdated-notice">
    This page describes an older version of Spring and may be out of date. For the
    maintained engine see <a href="https://recoilengine.org/">Recoil</a>.
  </div>
</template>
<style>
.outdated-notice {
  border: 1px solid var(--vp-c-warning-1, #d97706);
  background: var(--vp-c-warning-soft, #fff7ed);
  padding: 0.6rem 0.9rem; border-radius: 6px; margin: 0 0 1rem; font-size: 0.9rem;
}
</style>
```

```ts
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import OutdatedNotice from './OutdatedNotice.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(OutdatedNotice),
    })
  },
}
```

- [ ] **Step 2: Detector script**

```js
// tools/flag-outdated.mjs
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
```

- [ ] **Step 3: Run, review a sample, build**

Run: `node tools/flag-outdated.mjs`
Expected: prints a flagged count (dozens, not hundreds - if hundreds, tighten `RX`). Spot-check 3 flagged pages are genuinely dated. Then `node tools/validate.mjs && bun run docs:build`; expect `bad=0` and the banner visible on a flagged page in `docs:dev`.

- [ ] **Step 4: Commit**

```bash
git add docs/.vitepress/theme tools/flag-outdated.mjs docs
git commit -m "feat: flag obviously-dated pages with an outdated notice + Recoil pointer"
```

---

## Task 8: Recoil cross-reference notes on hub pages

Targeted, not a sweep: add a short Recoil pointer to the strongest hub pages where a modern equivalent exists.

**Files:**
- Modify: a curated set of hub `docs/*.md` (e.g. `gamedev-main.md`, `lua-main.md`, `mapdev-main.md`, `development-main.md`, `building-spring-on-linux.md`, and the like)

- [ ] **Step 1: Define the reusable note and the target list**

Note text (adapt the deep link per page where a specific Recoil doc exists, else link the site root):

```markdown
> **Recoil:** Spring's maintained fork documents this at [recoilengine.org](https://recoilengine.org/). Where this page and the Recoil docs disagree, prefer Recoil for current engine behaviour.
```

Target list: the `Main`/landing hub of each dev area plus install/build pages. Verify each slug with `ls docs | grep <slug>` before editing.

- [ ] **Step 2: Insert the note under the H1 of each target page**

For each target, place the blockquote immediately after the top `# Heading` line. Keep edits surgical - one blockquote, nothing else.

- [ ] **Step 3: Build + validate**

Run: `node tools/validate.mjs && bun run docs:build`
Expected: `bad=0`, build succeeds.

- [ ] **Step 4: Commit**

```bash
git add docs
git commit -m "docs: add Recoil cross-reference notes to key hub pages"
```

---

## Task 9: Final verification

- [ ] **Step 1: Full gate**

Run: `node docs/.vitepress/sections.test.mjs && node tools/validate.mjs && bun run docs:build`
Expected: resolver test passes; `bad=0`; build succeeds.

- [ ] **Step 2: IA sanity report**

Run: `node tools/ia-report.mjs`
Expected: no oversized `wiki` fallback; section counts roughly match spec estimates; Archive ~160.

- [ ] **Step 3: Manual spot check in `docs:dev`**

Confirm: the old 443-page "General" bucket is gone; every sidebar section resolves; Archive is collapsed at the bottom; nav shows Develop + Recoil dropdowns; external links point at recoilengine.org / RecoilEngine GitHub / Discord; a flagged page shows the outdated banner; a couple of previously-broken links now resolve.

- [ ] **Step 4: Open the PR (only after user approval)**

Per user preference, confirm the PR description with the user first, then open against `main` and paste the full PR URL in chat.

---

## Self-Review notes

- Spec coverage: goal 1 (IA/nav) -> Tasks 1-5; goal 2 (prune) -> Archive via resolver precedence + near-empty detection in Task 2/`ia-report`; goal 3 (redlinks) -> Task 6; goal 4 (flag outdated) -> Task 7; goal 5 (Recoil) -> Tasks 4 + 8. Source-of-truth freeze -> Task 0.
- Type consistency: `resolveSection({ section, categories, slug })` signature is identical in `sections.mjs`, `sections.test.mjs`, `ia-report.mjs`, and `config.mts`. Section ids match between `SECTIONS`, `SIDEBAR_ORDER`, and `CATEGORY_TO_SECTION`.
- Known data-dependent steps (mapping completeness, override list, redlink review, outdated regex tuning) are explicit review loops with real scripts, not placeholders - they require reading actual output and adjusting, which is expected for a restructure over imported data.
