# Spring / Recoil Wiki - Phase 2 IA Restructure (design)

Date: 2026-07-20
Status: approved structure, pending spec review
Scope: reorganize navigation/IA of the imported Spring wiki (769 pages), prune, fix redlinks, flag outdated content, wire in Recoil as an external reference. This is a restructure, not a content rewrite and not a re-import.

## Context

The repo is the live VitePress rebuild of the dead springrts.com MediaWiki (https://tomjn.github.io/spring-recoil-wiki/). Phase 1 (faithful mechanical import of 769 pages + 718 images) is done and deployed. The source wiki is dead and must never be re-scraped or synced; content is public domain and each page keeps its source-URL footer.

Today the sidebar (`docs/.vitepress/config.mts`, `buildSidebar()`) groups root pages by the text before the first colon in the page title. Of 641 root pages, 443 have no colon and collapse into one undifferentiated "General" bucket. Case and punctuation differences also scatter related pages (e.g. `LINUX:SetupSpringie`, `Linux:Packaging`, `Linux Page` land in three buckets). That is the core navigation failure this phase fixes.

## Decisions (locked with the user)

1. Metadata-driven, URLs frozen. All 641 files stay where they are; page URLs never change, so no redlinks or external inbound links break. Only the grouping logic and curated landing/nav content change.
2. Section assignment via a category->section mapping table (Approach 1). Resolve each page's section from its existing `categories:` frontmatter through an ordered mapping table, with an optional per-page `section:` frontmatter override for stragglers and case/dupe fixes. ~95% automatic. 612/641 root pages already carry `categories:` frontmatter.
3. Stale pages go to a demoted Archive section. Pages tagged `Deprecated` (88), `Historical` (47), or `Delete` (25) are kept (files and URLs preserved for the public-domain record) but moved out of primary navigation into a collapsed Archive section at the bottom. Genuinely-empty `Delete` stubs are distinguished from `Historical` pages that carry real content.
4. Recoil = external references only. No Recoil content is mirrored or authored here. Add nav + social links to recoilengine.org, the Recoil GitHub (`beyond-all-reason/RecoilEngine`), and Discord (`https://discord.gg/GUpRg6Wz3e`), plus targeted "modern Recoil equivalent" cross-reference notes on key hub pages where an equivalent exists.
5. Modernize = flag now, rewrite later. This pass only detects and marks obviously-dated pages with a lightweight banner/badge (and a Recoil cross-link where relevant). No prose rewriting; content rewrites are a separate future workstream.
6. Nav bar carries both. Top nav shows the content sections as dropdowns and the external Recoil/Discord/GitHub links. The sidebar lists pages within the active section.

## Source-of-truth transition (sequencing constraint)

`tools/convert.mjs` regenerates all pages from `tools/raw/` and writes the redlink report to `tools/raw/convert-report.json` (git-ignored). Once phase-2 hand-edits begin, re-running `convert.mjs` would clobber them. Therefore:

- Step 0 (before any hand-edit): re-run `convert.mjs` once to regenerate `convert-report.json`; verify `node tools/validate.mjs` reports `bad=0`, run `bun run docs:build`, and confirm `git status` shows no unintended page diffs (regeneration must be idempotent against the committed import).
- After Step 0, `convert.mjs` is frozen as reference/reproducibility only. The committed `.md` files become the living source of truth. Every later phase-2 change is a post-processing edit to `.md` files or to `config.mts`, never a pipeline change.

## Information architecture

Ten sidebar sections, resolved from `categories:` via the mapping table. Counts approximate.

1. Play - install, setup, requirements, FAQ, strategy and tactics guides, unit/gameplay guides, keyboard. Bundles getting-started and strategy (~70). Tags: Strategy, Playing, FAQ.
2. Games - the playable games/mods catalog plus per-game docs (BA, XTA, NOTA, Kernel Panic, Evo, CZTA, ...). (~120). Tags: Games, Mods, Balanced_Annihilation, Xta, CZTA, per-game.
3. Game Development - making a game, internally sub-grouped: Units/weapons/defs; Lua scripting and widgets; Modeling and animation; Effects and shaders; UI (Chili). (~150). Tags: Game_Dev, Lua, Animation, 3D_Models, CEG, Shaders, Chili, Units, Weapons.
4. Map Development - Mapdev, SSMF, SM3, MapConv, map tutorials, map components. (~75). Tags: Map_Dev, Map_making, Map_Tools, Maps.
5. AI Development - AI, AIInterface, AIWrapper, skirmish AIs. (~55). Tags: AI, AI_Dev.
6. Engine Development - building Spring, buildbot, coding standards, GSoC, sync/profiling internals. (~55). Tags: Engine_Dev, Development, GSoC, Buildbot, Libraries, Linux (build).
7. Hosting and Servers - lobby servers, autohosts (SPADS/Springie/Uberserver), Rapid, download systems, lobby clients. (~40). Tags: Lobby, Download_Systems, autohosts.
8. Reference - config/file-format reference (`*.lua`/`*.txt`/`*.cfg`), glossary, changelog, release notes, engine settings. (~40). Tags: Gamedata plus filename heuristic.
9. Wiki and Project - about this wiki, conventions, `help/`, `project/`. (~25). Tags: Help, Spring (meta), `project/*`.
10. Archive (demoted, collapsed, bottom) - Deprecated / Historical / empty-Delete stubs. (~160). Tags: Deprecated, Historical, Delete.

### Section precedence (multi-tag pages, first match wins)

1. Archive - if tagged Delete | Deprecated | Historical (archival always wins).
2. Games - if tagged a game name | Games | Mods.
3. Dev sections - Map_Dev > (AI_Dev | AI) > (Game_Dev | Lua | Animation | 3D_Models | CEG | Shaders | Chili | Units | Weapons) > Engine_Dev.
4. Hosting - Lobby | Download_Systems.
5. Play - Strategy | Playing | FAQ.
6. Reference - filename heuristic (`*.lua`/`*.txt`/`*.cfg`) or Gamedata.
7. Fallback - per-page `section:` override, else "Wiki and Project".

The per-page `section:` frontmatter override takes precedence over the table for any page where it is set. This is the explicit escape hatch for the LINUX/Linux case dupes and any cross-namespace oddity.

### Landing pages

- Each of sections 1-8 gets a short curated landing/index page: intro, a hand-picked "start here" list, and a link to the auto-generated full page list.
- The homepage (`index.md`) becomes a real hub linking the eight primary sections (Archive and Wiki-and-Project are reachable but not promoted).

### Navigation

- Top nav: content-section dropdowns (Play, Games, Develop [Game/Map/AI/Engine], Hosting, Reference) plus external links (Recoil dropdown -> recoilengine.org, Recoil GitHub, Discord).
- `socialLinks`: Discord, wiki GitHub, Recoil GitHub.
- Sidebar: pages of the active section, grouped (Game Development shows its internal sub-groups).

## Redlinks (goal 3)

Input: `convert-report.json` `topUnresolved`/`unresolvedCount` from Step 0. Each unresolved target is triaged:
- Genuine dead link (page never existed): unlink (leave text, drop link).
- Resolvable (target exists under a different slug/case): fix the link.
No new pages are created to satisfy redlinks. Because links live in the committed `.md` files (source of truth post Step 0), fixes are applied as `.md` edits, not in `convert.mjs`.

## Modernize flag (goal 4)

- Detect obviously-dated pages (self-dating language, e.g. "as of 2007", plus Deprecated/Historical tags already surfaced).
- Add a lightweight, reusable "may be outdated" marker (a small banner/badge component or a standard frontmatter flag the theme renders), and a Recoil cross-link where a modern equivalent exists.
- No prose rewriting this pass.

## Recoil cross-referencing (goal 5)

- External links in nav/social (above).
- A reusable cross-reference note ("Recoil, the maintained Spring fork, documents this at ...") applied to a targeted set of hub pages (engine dev, Lua, map dev, game dev landing pages, key outdated pages), not a blind 641-page sweep.

## Out of scope (this phase)

- Physical file/folder moves or URL changes (deferred; possible future pass with a redirect map).
- Any re-scrape, re-import, or sync tooling.
- Prose rewriting/modernization of page bodies.
- Authoring or mirroring Recoil content.
- Regressing phase-1 fixes: base-path `transformHtml`, `markdown.attrs.disable`, image-on-disk keying, two-pass pandoc, span stripping.

## Verification

- `node tools/validate.mjs` reports `bad=0`.
- `bun run docs:build` succeeds.
- `git status` after Step 0 shows no unintended regeneration diffs.
- Spot-check: the previously-443-page "General" bucket is gone; every section resolves; Archive holds the ~160 tagged pages; nav shows section dropdowns + external links; a sample of fixed redlinks resolve or are cleanly unlinked.

## Open items for the plan

- Exact category->section mapping table contents (enumerate every observed tag).
- Whether the "may be outdated" marker is a Vue component or a themed frontmatter flag.
- Which specific hub pages receive Recoil cross-reference notes.
- Empty-stub detection rule (byte/line threshold) for separating empty Delete stubs from Historical content.
