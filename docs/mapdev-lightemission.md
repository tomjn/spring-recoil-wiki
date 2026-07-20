---
title: "Mapdev:lightemission"
source_url: "https://springrts.com/wiki/Mapdev:lightemission"
categories:
  - "Map_Dev"
---
# Mapdev:lightemission

<div class="mw-parser-output">

## Light Emission Texture

Adds colour to a fragment (pixel). The colour added is the RGB colour of the emission texture, while the alpha of the emission texture determines the amount of the original colour that remains.

Can be used for accentuation. For example, metal spots in shadowed regions

|  |  |
|----|----|
| [<img src="/images/Map_without_light_emission.jpg" decoding="async" width="300" height="169" alt="Map without light emission" />](/images/Map_without_light_emission.jpg) | [<img src="/images/Map_with_light_emission.jpg" decoding="async" width="300" height="169" alt="Map with light emission" />](/images/Map_with_light_emission.jpg) |
| Without Light Emission Texture | With Light Emission Texture |

Example {.wikitable}

## Specification

### mapinfo.lua

The relevant sections of the [mapinfo.lua](/mapdev-mapinfo.lua)

    local mapinfo = {
       ...
       resources = {
          ...
          lightEmissionTex = "light_emission.png",
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
| Resolution | Any, recommended powers of two, will be stretched over the terrain. Should be the same size as the [Mapdev:specular](/mapdev-specular) image |

    Modifies the fragment color as follows
     
    fragmentColor.rgb = fragmentColor.rgb * (1 - lightEmissionTex.a) + lightEmissionTex.rgb

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:lightemission](https://springrts.com/wiki/Mapdev:lightemission).*
