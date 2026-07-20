---
title: "AI:Development:TheMaps"
source_url: "https://springrts.com/wiki/AI:Development:TheMaps"
categories:
  - "AI_Dev"
---
# AI:Development:TheMaps

<div class="mw-parser-output">

[AI Development](/ai-development) \< AI Development - The maps

## The maps provided by the AI Interface

The SpringRTS engine has a 3 Dimensional game area (x; y; z) but it works by mapping the dimensions X and Z (the ones we see when looking from above) into several bi-demensional "maps", each representing a different game mechanic. This page describes how the Interface exposes those maps to the AI.

### Maps available

The game area is broken down into (at least) these maps:

- HeightMap - map of terrain heights.
- SlopeMap - TODO
- CornersHeightMap - TODO (complicated...)
- LosMap - map of where in the game area you have visibility (Line of Sight).
- RadarMap - map of where in the game area you have radar coverage.
- JammerMap - map of where in the game area you have radar-jamming coverage.
- ResourceMapRaw - map of where in the game area there is metal and/or other resources.

Additionally, there's the game area which is where the units will exist, but is not "mapped" - units will be at position (x; y; z) in the game area but no map for it exists.

### Interface exposure

Each of the maps is bi-demensional (x; z), representing the dimensions "x" and "z" of the game area (x; y; z). However, the Interface exposes each map as a **list** of values.

    List<float> heightMap = _Callback.getMap().getHeightMap();

This list will contain each row (dimension X) sequentially (Z0, Z1, Z2, ...). Therefore, each position `(x;z)` of each map will exist in the list at the index `(x + z * {map's width})`.

### Granularities

The game areas are large battlefields and the engine does not map them unit by unit. Instead it breaks down the game area in blocks - "granularity" (<a href="http://en.wikipedia.org/wiki/Granularity" class="external free" rel="nofollow">http://en.wikipedia.org/wiki/Granularity</a>) - creating maps much smaller than the game area. Additionally, each map has a different granularity and, thus, a different size.

The map HeightMap should be considered the main map and the sizes of all other maps (as described in the documentation) are relative to the size of that map.

- HeightMap - main map (ex: 256x256)
- Game area - the game area will be the HeightMap \* 8 (ex: 2048x2048)
- SlopeMap - 1/2 the size of the HeightMap (ex: 128x128)
- CornersHeightMap - TODO (complicated...)
- LosMap - size is variable per mod: see below
- RadarMap - 1/8 the size of the HeightMap (ex: 32x32)
- JammerMap - 1/8 the size of the HeightMap (ex: 32x32)
- ResourceMapRaw - 1/2 the size of the HeightMap (ex: 128x128)

### LosMap

The map of Line-of-sight has a granularity that is specified per game ("mod"). Each "mod" will specify the property LosMipLevel:

    int losMipLevel = _Callback.getMod().getLosMipLevel();

Raising 2 to the "power" of LosMipLevel will give the relation of the size of LosMap to the HeightMap.\
Ex:\

1.  LosMipLevel=0 \| 2^0 = **1** \| Size of the LosMap = size of HeightMap \* 1/**1**
2.  LosMipLevel=1 \| 2^1 = **2** \| Size of the LosMap = size of HeightMap \* 1/**2**
3.  LosMipLevel=2 \| 2^2 = **4** \| Size of the LosMap = size of HeightMap \* 1/**4**

<a href="http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=32674" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=32674</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:Development:TheMaps](https://springrts.com/wiki/AI:Development:TheMaps).*
