---
title: "Gamedev:Glossary"
source_url: "https://springrts.com/wiki/Gamedev:Glossary"
categories:
  - "Game_Dev"
---
# Gamedev:Glossary

<div id="game-dev-glossary" class="section mw-parser-output">

## Game Dev Glossary

This page contains definitions of technical terms and acronyms associated with Spring game development.

### AtlasedTexture

An alias to a texture. This means the alias must be defined somewhere and pointing to to a real texture. For AtlasedTextures used in projectiles (like those spawned by explosiongenerator) they need to be defined in [resources.lua](/resources.lua) under the \[projectiletextures\].

A line defining a texture alias in [resources.lua](/resources.lua) looks like this:

`alias = "real_image.tga",`

Most spring supported image format can be used in AtlasedTextures, but not compressed dds.&#125;&#125;

### CColorMap

A collection of 2 or more RGBA colours. They can be expressed either as a string of decimal numbers, or pointing to an image file where each pixel will be used as a colour.

Example:

This gives a **ColorMap** with 2 colours, the first one blue and second one white:\
`colorMap = "1.0 0.0 0.0 1.0 1.0 1.0 1.0 1.0",`

Or it can be pointed to a bitmap file:\
`colorMap = "bitmap_file.tga",`

**ColorMaps** usually describe how the colours of an entity will shift during its lifetime, where the first colour will be used at the beginning and then cycle through all colours until the last one is used at the end of its lifetime.

### OTAism

Refers to a feature, bug or design quirk which traces its routes back to the early days of Spring when it was designed to reproduce <a href="http://en.wikipedia.org/wiki/Total_Annihilation" class="external text" rel="nofollow">Total Annihilation</a> gameplay.

### QTPFS

Quad-Tree Path-Finder System. A path finding algorithm based on a <a href="http://en.wikipedia.org/wiki/Quadtree" class="external text" rel="nofollow">Quadtree</a> data structure.

See also:

- [Screenshot of QTPFS in action](/images/Qtpfs0.png)
- [Another screenshot of QTPFS](/images/Qtpfs1.png)
- <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=27663" class="external text" rel="nofollow">Feedback on QTPFPS pathing (Forum)</a>

### springcontent.sdz

A base content package which is **always** loaded for all Spring games. It supplies many 'background' files that games generally won't need to overwrite (but may do so). It also supplies example gadgets in the `LuaGadgets/Gadgets/` directory which can be directly included by a game, most importantly:

- `unit_script.lua` - For running [LUS](/animation-luascripting) animation scripts
- `game_spawn.lua` - For spawning units on game start
- `game_end.lua` - For controlling game ends conditions

Example:

`return include("luagadgets/gadgets/unit_script.lua")` in `LuaRules/Gadgets/unit_script.lua`

as well as the base content gadget handler itself:

`VFS.Include("luagadgets/gadgets.lua",nil, VFS.BASE)` in `LuaRules/main.lua` and `LuaRules/draw.lua`

See also:

- <a href="https://github.com/spring/spring/blob/106.0/cont/base/springcontent" class="external text" rel="nofollow">cont/base/springcontent</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Gamedev:Glossary](https://springrts.com/wiki/Gamedev:Glossary).*
