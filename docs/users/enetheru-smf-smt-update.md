---
title: "User:Enetheru:SMF-SMT Update"
source_url: "https://springrts.com/wiki/User:Enetheru:SMF-SMT_Update"
---
# User:Enetheru:SMF-SMT Update

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

Updating smf/smt to be easier to use, and more robust.

implement:

- SMT tiles larger than 32x32 pixels
- Rotation of SMT tiles
- Generation of ssmf textures from smt's
- Deprecate smf as a format in favour of smd/mapinfo.lua scripts
- Push tilemap based format to allow mixed tilesizes
- Add different compression modes for tiles as different uses have different needs. for instance normals dont work well in BC1(DXT1), ASTC appears the best of all worlds but is not highly supported by hardware at the moment.
- re-use of BigTex
- rotation of BigTex

## SMT tiles larger than 32x32 pixels

### Description

Inside the smt file there are loads of dxt1 compressed 32x32 pixel tiles. this proposal is to allow tiles of logical sizes upto the engine native 1024x1024 resolution(64,128,256,512). the file structure of smt and smf can allow this, but engine code needs to be developed to make it possible.

### Justification

For tile based workflows, tile sizes larger than 32x32 pixels are easier to work with for artists.

### Expected Impact

- Backwards compatible
- Not forwards compatible
- (minor)Possibility of smaller smf file size due to tilemap being smaller
- No change to load times
- No change to framerate

### Known code changes

- removal of SMALL_TILE_SIZE constant in favour of calculated constant.
- changes to the way tiles are loaded from the smt in groundtextures

## Rotation of smt tiles

### Description

### Justification

For tile based workflows rotating tiles allows you to use less source material to create a larger final result.

### Expected Impact

- Backwards compatible
- Not forwards compatible
- possibility of smaller smt file sizes due to more duplication of tile data.
- possible increased load time on tiles with rotated source tiles.
- no change to framerate

### Known Code Changes

- possible Version bump of smf to allow using the top three bits of tilemap references as rotation information.
- rotation code in the groundtexture loading phase

## Generation of ssmf textures from smt's

### Description

### Justification

to complete the tile based workflow all terrain shading needs to have the capability to be defined as tiles

### Expected Impact

- backwards compatible
- not forwards compatible
- slower map load times(to construct the image from tiles)

### Known Code Changes

## Deprecate smf as a format in favour of smd/mapinfo.lua scripts

### Description

SMF is just a concatenation of image files and some raw values, these can easily be represented as their individual parts and scripts. Indeed lots of the parts of smf are already scriptable in lua, this task would be to implement the remaining items and deprecate the smf format.

### Justification

Using smd/lua is easier to work with, faster to update.

### Expected Impact

- none

### Known Code Changes

## Push tilemap based format to allow mixed tilesizes

### Description

### Justification

### Expected Impact

### Known Code Changes

## Add ASTC compression as an option for smt tiles

### Description

### Justification

its basically **the** texture compression format for use in modern interactive graphics applications.

### Expected Impact

### Known Code Changes

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Enetheru:SMF-SMT_Update). Original page: [User:Enetheru:SMF-SMT Update](https://springrts.com/wiki/User:Enetheru:SMF-SMT_Update).*
