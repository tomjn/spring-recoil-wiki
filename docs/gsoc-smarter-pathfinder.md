---
title: "GSoC Smarter pathfinder"
source_url: "https://springrts.com/wiki/GSoC_Smarter_pathfinder"
categories:
  - "Deprecated"
  - "GSoC"
---
# GSoC Smarter pathfinder

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | deprecated: kloot is already working on this |

## GSoC idea: Smarter pathfinder

### Why

Current pathfinder is rather inflexible and inefficient.

### What

Spring's pathfinder uses a 2d grid and is somewhat limited in functionality. A partial/full rewrite should be introduced to add support for navigating using more than 8 primary directions and selectively ignore certain unit types for performance reasons.

Spring's Lua API should be extended to allow game developers to push new nodes/links and be able to alter or delete existing ones. (for pathfinder-aware tunnels/teleporting/etc.)

Preferably this all should also be faster then the current system, or a compelling argument/experiment should be made that shows there can not be a faster system with the same features.

### Required skills

- Knowledge of graphs and pathfinding (particularly navigation graphs)
- Knowledge of C++
- Knowledge of Lua API/C bindings

### Difficulty

Estimated: hard

### Technical details

The pathfinder is one of the better encapsulated subsystems in spring; generally, there will only be minor changes required in the rest of the engine, if any. There's a lot of algorithmic work to do under the hood, though:

- Cooperative pathfinding exists in a very scant form and could be greatly improved
- Navigation mesh could be introduced for better paths and faster searches - at the cost of generating the mesh and updating it online due to terrain modification

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [GSoC Smarter pathfinder](https://springrts.com/wiki/GSoC_Smarter_pathfinder).*
