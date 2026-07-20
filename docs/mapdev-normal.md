---
title: "Mapdev:normal"
source_url: "https://springrts.com/wiki/Mapdev:normal"
categories:
  - "Map_Dev"
---
# Mapdev:normal

<div class="mw-parser-output">

## Normal Texture

Gives the terrain a normal map. This can be used to suggest small surface details while keeping terrain flat. The RGB channels determine the XYZ of the new surface normal (in tangent space), while the alpha channel determines how much of the original surface normal is kept.

<a href="https://code.google.com/p/gimp-normalmap/" class="external text" rel="nofollow">This GIMP plugin</a> provides various ways to convert heightmaps into normal maps.

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-caution.png"><img src="/images/Icon-caution.png" decoding="async" width="48" height="48" alt="Icon-caution.png" /></a></td>
<td>Caution</td>
</tr>
<tr>
<td>Requires clients to have GLSL-spec hardware</td>
</tr>
</tbody>
</table>

|  |  |
|----|----|
| FIXME:  needs image file | FIXME:  needs image file |
| Without Normal Map | With Normal Map |

Example {.wikitable}

## Important Info

- The normal map effect will \*not\* be shown unless you have a specular map defined. It can be as simple as a full-black with full-black alpha image, TGA 32-bit format is recommended.\
- If you want to merge two normal maps, for instance, one for the terrain and one for the resources (metal, geo vents), it's not as simple as it might sound if you want to do it properly. You can read about it in detail <a href="http://wiki.polycount.com/wiki/Normal_map" class="external text" rel="nofollow">here</a>. The "Whiteout" technique is recommended, there is a Photoshop action available for it <a href="https://polycount.com/discussion/163801/udn-and-whiteout-normal-map-blending-photoshop-actions" class="external text" rel="nofollow">here</a>\

## Specification

### mapinfo.lua

The relevant sections of the [mapinfo.lua](/mapdev-mapinfo.lua)

    local mapinfo = {
       ...
       resources = {
          ...
          detailNormalTex = "normal.png",
          ...
       },
       ...
    }

### Image File

|  |  |
|----|----|
| File Location | ./maps/ |
| File Format | PNG, TGA |
| Colour Depth | 8bpp |
| Channels | RGBA |
| Resolution | Any, recommended powers of two, will be stretched over the terrain. |

    Modifies the shading normal as follows

    shadingNormal.xyz = NORMALIZE(terrainNormal.xyz * (1 - detailNormalTex.a) 
                                   + detailNormalTex.rgb)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:normal](https://springrts.com/wiki/Mapdev:normal).*
