---
title: "GSoC New rendering system"
source_url: "https://springrts.com/wiki/GSoC_New_rendering_system"
categories:
  - "GSoC"
---
# GSoC New rendering system

<div id="gsoc-idea-new-rendering-system" class="section mw-parser-output">

## GSoC idea: New Rendering System

### Why

Spring rendering engine includes many fixed function pipeline OpenGL functions. This rendering system is becoming deprecated and is generally slower and less flexible than more modern approaches.

### What

Under this proposal, the rendering code should get a complete overhaul and moved into a Scene Graph. Allowing to replace the old code optionally with shader based approaches, including techniques as normal/relief mapping or 100% GPU based rendering of particles.

### Required skills

- Knowledge of C++
- Knowledge of OpenGL 2.0 API
- Knowledge of GLSL

### Difficulty

Estimated: high

### Technical details

- Refactor C++ code and classes
- Create new GLSL shaders and integrate some from Lua scripts
- Add threading to renderer
- Remove all direct OpenGL calls from synced (sim) code.
- Push more work onto GPU and use DMA transfers (VBOs) while retaining OpenGL 1.4 code path for intel chipsets
- Reduce/refactor the amount of code paths used for rendering different world objects and model types.
- Use more class overriding for new rendering code (instead of branching)
- OpenGL ES 2.0 compatibility should be aimed at where possible.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [GSoC New rendering system](https://springrts.com/wiki/GSoC_New_rendering_system).*
