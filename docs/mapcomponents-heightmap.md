---
title: "Mapcomponents: heightmap"
source_url: "https://springrts.com/wiki/Mapcomponents:_heightmap"
categories:
  - "Delete"
---
# Mapcomponents: heightmap

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

## Heightmap

**`Height Maps are Texture Map size / 8 + 1 pixel. In other words, if your texture map is 8192x8192 (16x16), 8192 / 8 + 1 = 1025x1025`**

You will need a good image editing program to make heightmaps. Many of the aforementioned terrain generation programs will also generate heightmaps as well, but you can draw them by hand. They can be either 8bit or 16bit greyscale PNG. If you have photoshop or the gimp, you can use these programs to help you create your heightmap.

Here is an example of a 16bit heightmap:

[<img src="/images/Heightmapexample.png" decoding="async" width="512" height="512" alt="Heightmapexample.png" />](/images/Heightmapexample.png)

Heightmaps work upon the idea of height according to color values. Black is the lowest, white is the heighest. In spring mapping, the waterline is defined by a negative height value. In other words, you define the heights of the map,  anything below 0 is under water. So on this heightmap, you might use -50 for the lowest value and 300 for the highest height value. The aforementioned tool "Mapconv Gui (a.k.a Das Bruce's MapConv Gui) has a waterline calculator that will help you calculate the correct waterline for your map.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapcomponents: heightmap](https://springrts.com/wiki/Mapcomponents:_heightmap).*
