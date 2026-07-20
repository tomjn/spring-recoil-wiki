---
title: "Mapdev:skyreflectmod"
source_url: "https://springrts.com/wiki/Mapdev:skyreflectmod"
categories:
  - "Map_Dev"
---
# Mapdev:skyreflectmod

<div class="mw-parser-output">

## Sky Reflection Modifier Texture

Sets the weight for mixing the diffuse texture colour with the reflected colour of the sky. This occurs before any other shading calculations use the diffuse colour.

This can be used to suggest a surface composed of reflective materials, such as ice or crystals.

|  |  |
|----|----|
| [<img src="/images/Skyreflectmod_without_example.png" decoding="async" width="300" height="300" alt="Skyreflectmod without example.png" />](/images/Skyreflectmod_without_example.png) | [<img src="/images/Skyreflectmod_with_example.png" decoding="async" width="300" height="300" alt="Skyreflectmod with example.png" />](/images/Skyreflectmod_with_example.png) |
| Without Sky Reflection Modifier Map | With Sky Reflection Modifier Map |

Example {.wikitable}

## Specification

### mapinfo.lua

The relevant sections of the [mapinfo.lua](/mapdev-mapinfo.lua)

    local mapinfo = {
       ...
       resources = {
          ...
          skyReflectModTex = "skyreflectmod.png",
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
| Channels | RGB |
| Resolution | Any, recommended powers of two, will be stretched over the terrain. Should be the same size as the [Mapdev:specular](/mapdev-specular) image |

    Modifies the diffuse colours as follows:
    diffuseColor.r = diffuseColor.r * (1 - skyReflectModTex.r) +
                       reflectionColor.r * skyReflectModTex.r
    diffuseColor.g = diffuseColor.g * (1 - skyReflectModTex.g) +
                       reflectionColor.g * skyReflectModTex.g
    diffuseColor.b = diffuseColor.b * (1 - skyReflectModTex.b) +
                       reflectionColor.b * skyReflectModTex.b

    Equivalent to the GLSL code: (diffuseColor is a vector)
    diffuseColor = mix(diffuseColor, reflectionColor, skyReflectModTex)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:skyreflectmod](https://springrts.com/wiki/Mapdev:skyreflectmod).*
