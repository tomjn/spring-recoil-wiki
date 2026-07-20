---
title: "SM3 FAQ"
source_url: "https://springrts.com/wiki/SM3_FAQ"
categories:
  - "Deprecated"
---
# SM3 FAQ

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

[Development](/development-main) \< [Map Development](/mapdev-main) \< SM3 FAQ

## Frequently Asked Questions on SM3

### What is DevIL

DevIL is the Image Loading library that spring uses. <a href="http://openil.sf.net/" class="external free" rel="nofollow">http://openil.sf.net/</a>

DevIL supports loading of bmp, dds, gif, jpg, png, pcx, psd, psp, tga, raw, pal, tif, pal, sgi, hdr among others.

### "Map Size (x) should be equal to GameAreaW and GameAreaH"?

For the map to load you need to add these two variables to your .sm3:\
GameAreaW=xxx;\
GameAreaH=xxx;\
The map size(note, not the heightmap size which is map 1 pixel) width/height goes here.

### How do I use external textures?

Create a modinfo.tdf textfile in your mapname.sdd. It should contain:

\[MOD\]\
{\
Name=mapname;\
Description=your description here;\
ModType=0;\

NumDependencies=1;\
Depend0=texturefilename.sd7;\
}\

This will tell Spring to look in the directory where your map is located(eg. \maps\\ for the textures you have specified in the SM3. Example:

\[Rock\]\
{\
TileSize=60;\
File=textures/rock/rock.jpg;\
Bumpmap=textures/rock/rock_normal.jpg;\
}\

Which would tell Spring that your texture is at texturefilename.sd7/textures/rock/rock.jpg.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [SM3 FAQ](https://springrts.com/wiki/SM3_FAQ).*
