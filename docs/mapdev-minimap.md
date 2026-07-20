---
title: "Mapdev:minimap"
source_url: "https://springrts.com/wiki/Mapdev:minimap"
categories:
  - "Map_Dev"
---
# Mapdev:minimap

<div class="mw-parser-output">

## Mini-Map

It is traditionally a simplified top down view of the battlefield, it can also be an arbitrary image. It is used in the lobby when viewing and selecting maps.

|  |  |
|----|----|
| [<img src="/images/Mapdev-diffuse.jpg" decoding="async" width="256" height="256" alt="Mapdev-diffuse.jpg" />](/images/Mapdev-diffuse.jpg) | [<img src="/images/Minimap_example.jpg" decoding="async" width="400" height="256" alt="Minimap example.jpg" />](/images/Minimap_example.jpg) |
| Example Minimap | Example of use |

Example {.wikitable}

## Specification

### mapinfo.lua

    local mapinfo = {
       ...
       smf = {
          ...
          minimapTex = "",
          ...
       },
       ...
    }

### Image File

- The mini map will update when the terrain is terraformed to reflect the changes.
- The mini map is used as the grass shading map if a grass shading map hasn't been specified.

|  |  |
|----|----|
| File Location | This image is an intermediary file compiled into the SMF file using [MapConv](/mapconv) or [MapConvNG](/mapconvng), it can also be specified in the mapinfo.lua |
| File Format | Any that Mapconv programs can use |
| Colour Depth | 8bpp |
| Channels | RGB |
| Resolution | 1024x1024 |

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:minimap](https://springrts.com/wiki/Mapdev:minimap).*
