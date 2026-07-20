---
title: "CEG:Main"
source_url: "https://springrts.com/wiki/CEG:Main"
categories:
  - "CEG"
---
# CEG:Main

<div id="ceg-main-page" class="section mw-parser-output">

## CEG Main Page

### Introduction

CEG stands for Custom Explosion Generator, a scripting language for creating graphical effects. These are most commonly used to draw a graphical effect when a weapon hits a target, but can also be called from COB and Lua.

### Files Needed

The actual CEGs are defined in .tdf or .lua files in `effects/` (preferred) or `gamedata/explosions/` (old standard). You will also need a [resources.lua](/resources.lua) in `gamedata/` to define textures, as well as the actual textures in `bitmaps/`. Finally, you need the weapon, unit, COB, and or Lua files that you are calling the CEGs from.

### Further information

For details on CEG definition files, how to call a CEG and more advanced features see:

- [CEG:Defs](/ceg-defs)
- [CEG:Calls](/ceg-calls)
- [CEG:Operators](/ceg-operators)
- [CEG:Miscellaneous](/ceg-miscellaneous)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [CEG:Main](https://springrts.com/wiki/CEG:Main).*
