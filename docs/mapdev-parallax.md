---
title: "Mapdev:parallax"
source_url: "https://springrts.com/wiki/Mapdev:parallax"
categories:
  - "Map_Dev"
---
# Mapdev:parallax

<div class="mw-parser-output">

## Parallax Texture

modifies the diffuse, normal, and specular TEXTURE COORDINATES before sampling is done

FIXME:  description as to why you want to use Parallax textures.

|  |  |
|----|----|
| FIXME:  needs image file | FIXME:  needs image file |
| Without Parallax Map | With Parallax Map |

Example {.wikitable}

## Specification

### mapinfo.lua

The relevant sections of the [mapinfo.lua](/mapdev-mapinfo.lua)

    local mapinfo = {
       ...
       resources = {
          ...
          parallaxHeightTex = "parallax.png",
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

FIXME:  needs cleaning.

    height, scale, and bias parameters are packed
    as follows to produce a texel offset-factor f

    h = (parallaxHeightTex.r * 65280 + parallaxHeightTex.g * 256) / 65536
    s = (parallaxHeightTex.b)
    b = (parallaxHeightTex.a - 0.5)
    f = h * s + b

## Forum Discussions

- <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=29108" class="external text" rel="nofollow">Parallax Maps?</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:parallax](https://springrts.com/wiki/Mapdev:parallax).*
