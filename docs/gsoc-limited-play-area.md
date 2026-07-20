---
title: "GSoC Limited play area"
source_url: "https://springrts.com/wiki/GSoC_Limited_play_area"
categories:
  - "GSoC"
---
# GSoC Limited play area

<div id="gsoc-idea-limited-play-area" class="section mw-parser-output">

## GSoC idea: Limited play area

### Why

Current spring map formats have a hardcoded rectangle geometry. They also provide very limited support for defining aesthetics of the surrounding environment outside the play area.

### What

The new system should allow the map to restrict the playable area to a subset of the global area, possibly adding support for multiple shapes and/or non-rectangular shape restrictions.

The restriction shapes should be readable and changeable mid-game through the engine's Lua API. Proper handling of units which are suddenly off-map needs to be implemented.

### Required skills

- Knowledge of C++
- Knowledge of Lua/C API bindings

### Difficulty

Estimated: medium

### Technical details

Most of the current code is based on the assumption that the map's top left is always at (0, 0) and bottom right at (width, height). The most difficult part will be identifying all places that check for point-in-map condition and determining whether they should be converted to the new limited map area or left as-is (e.g. for drawing).

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [GSoC Limited play area](https://springrts.com/wiki/GSoC_Limited_play_area).*
