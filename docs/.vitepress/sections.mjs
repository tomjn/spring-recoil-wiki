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
  'administration': 'hosting',
  // play
  'strategy': 'play', 'playing': 'play', 'faq': 'play',
  // reference
  'gamedata': 'reference', 'releases': 'reference',
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
  const cats = Array.isArray(categories) ? categories : []
  let best = null
  for (const raw of cats) {
    const id = CATEGORY_TO_SECTION[normTag(raw)]
    if (!id) continue
    if (best === null || RANK[id] < RANK[best]) best = id
  }
  if (best !== null) return best
  if (isConfigFile) return 'reference'
  return 'wiki' // fallback
}
