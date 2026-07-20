---
title: "Bitmapmuzzleflame"
source_url: "https://springrts.com/wiki/Bitmapmuzzleflame"
categories:
  - "Delete"
---
# Bitmapmuzzleflame

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

Bitmapmuzzleflame is a simple projectile useful for making a muzzleflame with two textures, one as the muzzleflame seen from the sides and one as seen from the front.

**Propertiers for Bitmapmuzzleflame:**

- **[AtlasedTexture](/gamedev-glossary) sideTexture**\
  Defines the texture for the sides of the flame.\
- **[AtlasedTexture](/gamedev-glossary) frontTexture**\
  Defines the texture for the muzzleflame as seen from the front.\
- **float3 dir**\
  Direction of the flame.\
- **[CColorMap](/gamedev-glossary) colorMap**\
  Colormap describing the colors during the flame lifetime.\
- **float size**\
  Initial hight and width of flame.\
- **float length**\
  Initial length of the flame, this is the size in the direction the flame is pointing.\
- **float sizeGrowth**\
  This is how much the flame will grow during its lifetime. A value of 0 means the flame will stay the same size during its entire lifetime. A value of 1 means that it will have grown to double its size when its life end. The growth curve is exponential, faster in the beginning and slower at the end.\
- **int ttl**\
  How many frames the flame will be visible.\
- **float frontOffset**\
  Offset for the front texture in percent of length. 0 means the front will at the beginning of the flame, 0.5 in the middle, and 1 at the end.\

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Bitmapmuzzleflame](https://springrts.com/wiki/Bitmapmuzzleflame).*
