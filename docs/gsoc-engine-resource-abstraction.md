---
title: "GSoC Engine resource abstraction"
source_url: "https://springrts.com/wiki/GSoC_Engine_resource_abstraction"
categories:
  - "GSoC"
---
# GSoC Engine resource abstraction

<div id="gsoc-idea-engine-level-abstraction-of-resources" class="section mw-parser-output">

## GSoC idea: Engine level abstraction of resources

### Why

Current hardcoded resource system generates defects and can produce effects which are hard to workaround for game designers which aren't willing to use it.

### What

The old system needs to be replaced, the new one should be flexible enough to reproduce everything that the old system did and be able to imitate the behaviour of most common RTS game titles.

The engine's Lua API to fetch resources will have to be adapted to the new system and new calls will have to be added to modify its state.

### Required skills

- Knowledge of C++
- Knowledge of Lua/C API bindings

### Difficulty

Estimated: medium to hard

### Technical details

- The new system should completely supersede the current
- Sync check should be adapted to hash the new resource system
- Hardcoded assumptions such as cost-based targeting should be removed completely and replaced with something better

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [GSoC Engine resource abstraction](https://springrts.com/wiki/GSoC_Engine_resource_abstraction).*
