---
title: "Mapdev:SMT format"
source_url: "https://springrts.com/wiki/Mapdev:SMT_format"
categories:
  - "Map_Dev"
---
# Mapdev:SMT format

<div id="smtspring-tile-file-reference" class="section mw-parser-output">

## SMT(Spring Tile File) Reference

SMT is a binary format

- <a href="https://github.com/spring/spring/tree/master/rts/Map/SMF" class="external text" rel="nofollow">Relevant code</a>

### File location

maparchive.sd7/maps/filename.smt

### Data Map

|       |          |                                   |
|-------|----------|-----------------------------------|
| Bytes | Type     | Description                       |
| 16    | `char[]` | Magic number; "spring tilefile\0" |
| 4     | `int`    | Version; 1                        |
| 4     | `int`    | Number of tiles                   |
| 4     | `int`    | Size of the tiles; 32             |
| 4     | `int`    | Compression Type; 1(DXT1)         |

Header {.wikitable width="100%"}

|       |          |                                                          |
|-------|----------|----------------------------------------------------------|
| Bytes | Type     | Description                                              |
| 680\* | `char[]` | Raw DXT1 compressed 32x32 pixel tiles with 4 mip levels. |

+ Tiles {.wikitable width="100%"}

- 
- 
- 

\* dxt1 compression is consistent at 8 Bytes per 4x4 block of pixels. so for 4 mip levels (32x32, 16x16, 8x8, 4x4) we get 512 + 128 + 32 + 8 = 680 Bytes.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:SMT format](https://springrts.com/wiki/Mapdev:SMT_format).*
