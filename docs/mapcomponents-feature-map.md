---
title: "Mapcomponents: feature map"
source_url: "https://springrts.com/wiki/Mapcomponents:_feature_map"
categories:
  - "Delete"
---
# Mapcomponents: feature map

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

Thankfully, features can now be placed via LUA, ingame and in realtime using [FeaturePlacer](/map-making-feature-placer).

## Feature Map

**`Feature Map dimensions are Texture Map size / 8. In other words, if your texture map is 8192x8192 (16x16), 8192 / 8 = 1024x1024`**

Feature maps used to be quite complicated, but all that changed with the advent of Smoth's FeaturePlacer (short featuremap history below).

Now featuremaps are use simply for the purpose of placing grass. Grass coverage is defined by blue pixels on the feature map. The more blue the pixel is (the closer to blue 255 it is), the thicker grass will be at that location. Grass is entirely optional, but can be customized via map parameters and adds a nice touch to your map.

Example Feature Map:

[<img src="/images/Examplefeature.jpg" decoding="async" width="512" height="512" alt="Examplefeature.jpg" />](/images/Examplefeature.jpg)

### A brief history of featuremaps

Feature maps were (and still are) a single RGB image where features such as grass, geothermal vents and trees, as well as structures, etc were "placed" using pixels on the image. This method was extremely imprecise and involved recompiling the map many times in order to simply move a tree from one location to another.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapcomponents: feature map](https://springrts.com/wiki/Mapcomponents:_feature_map).*
