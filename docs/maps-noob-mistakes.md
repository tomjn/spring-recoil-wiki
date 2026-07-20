---
title: "Maps:Noob Mistakes"
source_url: "https://springrts.com/wiki/Maps:Noob_Mistakes"
categories:
  - "Map_making"
---
# Maps:Noob Mistakes

<div class="mw-parser-output">

[Development](/development-main) \< [Map Development](/mapdev-main) \< Maps:Noob Mistakes

Everybody Keeps posting in the forum, and it's hard to figure out what exactly the n00b is doing wrong.

## Map n00b FAQ

**If The Character Combination :/ is included in the compilation batch script it doesn't work.**

Thats Wrong:

`D:\TA_Editors\MapConv\MapConv.exe -c 0.5 -x 400 -n 100 -o D:\TA_Editors\MapConv\maps\metal-islands.smf -t D:\TA_Editors\MapConv\maps\metal-islands_texturemap.bmp -m D:\TA_Editors\MapConv\maps\metal-islands_metalmap.bmp - ...`

Correct:

`MapConv.exe -c 0.5 -x 400 -n 100 -o metal-islands.smf -t metal-islands_texturemap.bmp -m metal-islands_metalmap.bmp -a metal-islands_heightmap.bmp -f metal-islands_featuremap.bmp -i`

Put the files next to mapconv.exe!

#### Do Not Rename Your SMT

MapConv takes the first part of the "-o mapname.smf" to determine the name of the smt file (namely mapname.smt), a reference to this "mapname.smt" is stored in the smf file as where to look for tile images. This means you can rename you smf and smd files, but are unable to rename the tile file.

#### Put water low enough

If you want to do a land only dry map, make sure your water isn't just below the ground, or else even the smallest crater will turn into a pond. Instead, use the **-x** and **-n** to put even your lowest ground far above water.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Maps:Noob Mistakes](https://springrts.com/wiki/Maps:Noob_Mistakes).*
