---
title: "Mapcomponents: metal map"
source_url: "https://springrts.com/wiki/Mapcomponents:_metal_map"
categories:
  - "Delete"
---
# Mapcomponents: metal map

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

## Metal Map

**`Metal Map dimensions are Texture Map size / 8 + 1 pixel. In other words, if your texture map is 8192x8192 (16x16), 8192 / 8 + 1 = 1025x1025`**

In Spring, metal maps are used for the built in resourcing scheme (Metal/Energy). You do not have to use this scheme. In fact, there are several games for Spring who use their own resourcing systems added on using Lua. If you are creating this map for one of those games, a metal map is not strictly necessary (in other words you can just us a black image), however, it is always nice if you can make your maps as compatible with other games as possible, but this is a choice left entirely up to you.

Metalmaps show metal areas on a map based upon the amount of red on the image (make sure red is the only color used!). On this map you can see that the "Patch Technique" is used, which is pretty common among spring maps, but you are not limited to using this scheme.

If you do want perfect metal patches, use a 6x6 pixel pencil in your image editor with a red value of 255. This combined with setting the "MaxMetal" tag in the definitions to 1, will result in a perfect 2.0 metal generation per patch (using Balanaced Annihilation values). The game use isn't the point however. The fact is that if you can predict how much each spot will output (typically), using the "MaxMetal" parameter, you can easily scale the values up and down. As an example of another extreme, Evolution RTS dictates that all metal patches will output 0.5 metal regardless of the map settings. So whether you need to put a lot of thought into your metal map values depends entirely upon the game for which you are creating the map.

Example Metal Map:

[<img src="/images/Examplemetal.jpg" decoding="async" width="512" height="512" alt="Examplemetal.jpg" />](/images/Examplemetal.jpg)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapcomponents: metal map](https://springrts.com/wiki/Mapcomponents:_metal_map).*
