# spring-recoil-wiki

An independent, community-maintained rebuild of the [springrts.com wiki](https://springrts.com/wiki/) for the **Spring** and **Recoil** RTS engines, published with [VitePress](https://vitepress.dev/) to GitHub Pages.

Live site: https://tomjn.github.io/spring-recoil-wiki/

## Why

The original MediaWiki is neglected, poorly structured, full of broken links, and gated behind anti-bot software. This is a portable, searchable, better-organised replacement. It is a **one-time import** with no ongoing sync to the source, which is considered dead.

## Content licensing

The source wiki released its content into the public domain (see its `Spring:Copyrights` page). Each imported page links back to its original source for provenance. Site code is MIT (see `LICENSE`).

## Local development

```sh
bun install
bun run docs:dev      # local dev server
bun run docs:build    # production build to docs/.vitepress/dist
bun run docs:preview  # preview the production build
```

## How the import worked

The `tools/` directory holds the one-time import pipeline. It ran against the live wiki's MediaWiki API through an authenticated, Anubis-cleared browser session, then converted the rendered HTML to Markdown locally.

- `tools/convert.mjs` — HTML → Markdown (pandoc) with link/image rewriting, category reconstruction and provenance footers.
- `tools/mirror-media.mjs` — downloads all uploaded images into `docs/public/images/`.
- `tools/raw/` — bulky intermediate export (git-ignored; reproducible from the scripts).

The converted Markdown (`docs/`) and mirrored images (`docs/public/images/`) are committed; the raw export is not.
