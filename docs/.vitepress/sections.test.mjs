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
