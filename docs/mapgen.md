---
title: "Mapgen"
source_url: "https://springrts.com/wiki/Mapgen"
categories:
  - "Development"
---
# Mapgen

<div class="mw-parser-output">

Spring 92.0 will contain a simple map generator. To test it, spring has to be started with a script.txt which contains the line:

    [GAME]
    MapSeed=123;

Where 123 can be replaced with any number to generate another map. MapName should not be present in script.txt

The generated map will be fairly generic map, aimed at TA-like mods. It currently takes into account the amount of players and the allies.

Future work will add lua bindings, allowing maps to be generated from lua. This way, mods could supply their own map generator.

for details see:

- <a href="https://github.com/spring/spring/commit/974e5b42c5bcde30a704218448aa288764642d55" class="external text" rel="nofollow">974e5b42</a>
- <a href="https://github.com/MadrMan/spring/commits/mapgen" class="external free" rel="nofollow">https://github.com/MadrMan/spring/commits/mapgen</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapgen](https://springrts.com/wiki/Mapgen).*
