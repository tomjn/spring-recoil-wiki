---
title: "Gamedev:Archives"
source_url: "https://springrts.com/wiki/Gamedev:Archives"
categories:
  - "Game_Dev"
---
# Gamedev:Archives

<div class="mw-parser-output">

Spring supports reading from zlib zip and non-solid 7zip files. The filenames for these compression types must be .SDZ for zlib and .SD7 for 7zip respectively. They are standard files, just with different extensions for Spring. Here's a list of all filetypes supported by Spring; a higher read order means the contents of a file of that extension will take priority over files of a lower read order.

|  |  |  |  |
|----|----|----|----|
| Read Order | File Extension | Compression Method | Description |
| 1 | **SD7** | Non-Solid 7zip | A 7zip file with the extension changed to .SD7. 7zip compressed archives generally have the highest compression (and therefore lowest filesizes). Files of this type are read first. |
| 2 | **SDZ** | ZLIB ZIP | A zlib ZIP file with the extension changed to .SDZ. Maps and games alike can be stored in these files. These are read second. |
| 3 | **SDD** | uncompressed | A normal folder with the extension .sdd added. Used only during development because it is possible to test the game/map without having to unzip/zip it for every change. |

The best tools to use to view the contents of a compressed Spring file, and to pack and unpack the contents of such a file are:

- <a href="http://www.rarlabs.com" class="external text" rel="nofollow">WinRAR</a> to view, browse, extract, and pack SDZ files, or to browse SD7 files.
- <a href="http://www.7-zip.org/" class="external text" rel="nofollow">7zip</a> to view, browse, extract, and pack SD7 files.

For the internal file structure of a Spring package, see [Gamedev:Structure](/gamedev-structure).

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Gamedev:Archives](https://springrts.com/wiki/Gamedev:Archives).*
