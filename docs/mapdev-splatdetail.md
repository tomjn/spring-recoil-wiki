---
title: "Mapdev:splatdetail"
source_url: "https://springrts.com/wiki/Mapdev:splatdetail"
categories:
  - "Map_Dev"
---
# Mapdev:splatdetail

<div class="mw-parser-output">

## Details

Splat Detail textures extend the default single detail texture that is applied uniformly over the entire map, by allowing the mapper to specify 4 different greyscale detail textures, and offers control of the strength, spatial distribution and tiling resolution of each detail texture.

Important: Splat Detail textures requires a specular texture [Mapdev:specular](/mapdev-specular) to exist and be defined in order to be enabled!

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-caution.png"><img src="/images/Icon-caution.png" decoding="async" width="48" height="48" alt="Icon-caution.png" /></a></td>
<td>Caution</td>
</tr>
<tr>
<td>requires clients to have GLSL-spec hardware</td>
</tr>
</tbody>
</table>

<table>
<caption>Example</caption>
<tbody>
<tr>
<td><a href="/images/Mapdev-splat-without.jpg"><img src="/images/Mapdev-splat-without.jpg" decoding="async" width="330" height="170" alt="Mapdev-splat-without.jpg" /></a></td>
<td><a href="/images/Mapdev-splat-with.jpg"><img src="/images/Mapdev-splat-with.jpg" decoding="async" width="330" height="170" alt="Mapdev-splat-with.jpg" /></a></td>
</tr>
<tr>
<td>Default Detail Map</td>
<td>Splat Detail Maps</td>
</tr>
<tr>
<td colspan="2"><em>* Click on images for higher res</em></td>
</tr>
</tbody>
</table>

## Specification

### mapinfo.lua

    local mapinfo = {
       ...
       resources = {
          ...
          splatDistrTex = "splatDistributionTex.tga",
          splatDetailTex = "splatDetailTex.tga",
          ...
       },
       ...
       splats = {
          texScales = {0.02, 0.02, 0.02, 0.02},
          texMults = {1.0, 1.0, 1.0, 1.0},
       },
       ...
    }

#### texScales

texScales offers a way to adjust the tiling resolution of each of the 4 splat detail textures. Values of 0.02 are the default values, lower values will increase the size of the textures on the ground, and higher values will decrease the tile size.

|  |
|----|
| [<img src="/images/Map_measure.png" decoding="async" width="512" height="512" alt="measuring stick" />](/images/Map_measure.png) |
| texScales |

#### texMults

texMults offers a quick way to adjust the strength at which each detail texture will be blended onto the map. Values of 1.0 are the default values, lower values will make the detail texture fainter, higher values make it more pronounced. This is very useful for fine-tuning the strengths after generating the splat distribution texture, which is time-consuming to manipulate in an image editor, and cant be increased above a certain value there.

### Distribution Image

|  |  |
|----|----|
| File Location | ./maps/ |
| File Format | PNG, TGA |
| Colour Depth | 8bpp |
| Channels | RGBA |
| Resolution | Any, recommended powers of two, will be stretched over the terrain. |

The RGBA Channels are individual greyscale distribution maps which define which detail textures to splat onto the ground. The intensity of the splatted textures is multipled by the pixel values for the corresponding channels.

|  |  |
|----|----|
| [<img src="/images/Mapdev-ddist.gif" decoding="async" width="256" height="256" alt="Mapdev-ddist.gif" />](/images/Mapdev-ddist.gif) | [<img src="/images/Mapdev-ddist.png" decoding="async" width="256" height="256" alt="Mapdev-ddist.png" />](/images/Mapdev-ddist.png) |
| Detail Distribution maps | Combined Result |

Example {.wikitable}

### Detail Image

|  |  |
|----|----|
| File Location | ./maps/ |
| File Format | PNG, TGA |
| Colour Depth | 8bpp |
| Channels | RGBA |
| Resolution | Any, recommended powers of two, will be tiled over the terrain. |

Each Channel represents a seperate greyscale image. The ground colour is multiplied by the pixel values of the channel. The intensity of the effect is also controlled per channel using the [texMults](/mapdev-mapinfo.lua#texmults) variables, low numbers = less effect.

|  |  |
|----|----|
| [<img src="/images/Mapdev-details.gif" decoding="async" width="256" height="256" alt="Mapdev-details.gif" />](/images/Mapdev-details.gif) | [<img src="/images/Mapdev-details.png" decoding="async" width="256" height="256" alt="Mapdev-details.png" />](/images/Mapdev-details.png) |
| Individual Detail Textures | Combined Result |

Example {.wikitable}

## Forum Discussion

- <a href="http://springrts.com/phpbb/viewtopic.php?f=56&amp;t=21565" class="external text" rel="nofollow">Detail texture resource thread</a>
- <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=22564" class="external text" rel="nofollow">Detail texture splatting is ready!</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:splatdetail](https://springrts.com/wiki/Mapdev:splatdetail).*
