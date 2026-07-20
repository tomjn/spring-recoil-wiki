---
title: "Mapdev:skybox"
source_url: "https://springrts.com/wiki/Mapdev:skybox"
categories:
  - "Map_Dev"
---
# Mapdev:skybox

<div class="mw-parser-output">

## Sky Box

Is a cubemap projection of a skyline used to enhance the background of the map.

|  |  |
|:--:|----|
| [<img src="/images/Skyboxsimple.gif" decoding="async" width="292" height="219" alt="Skyboxsimple.gif" />](/images/Skyboxsimple.gif) | [<img src="/images/Cloudysunset.jpg" decoding="async" width="350" height="219" alt="Cloudysunset.jpg" />](/images/Cloudysunset.jpg) |
| Example cube cross before assembling to dds cubemap format | Ingame Result |

Example {.wikitable}

## Specification

### mapinfo.lua

The relevant sections of the mapinfo.lua file that effect the colour of the ground are in the [atmosphere subtable](/mapdev-mapinfo.lua#atmosphere)

    local mapinfo = {
       ...
       atmosphere = {
          ...
          skyBox = "",
          ...
       },
       ...
    }

### Image File

|               |                                                |
|---------------|------------------------------------------------|
| File Location | ./maps/                                        |
| File Format   | DXT1 compressed dds cubemap                    |
| Colour Depth  | 4bpp                                           |
| Channels      | RGB                                            |
| Resolution    | Powers of two, recommended higher than 512x512 |

## Additional Information

### Howto's

- [Mapdev:Howto_skybox](/mapdev-howto-skybox)
- <a href="http://judegodin.wordpress.com/2011/12/06/how-the-hell-do-i-make-a-cubemap/" class="external text" rel="nofollow">howto with 3dsmax</a>
- <a href="http://www.cgtextures.com/content.php?action=tutorial&amp;name=cubemaps" class="external text" rel="nofollow">cgtextures.com</a>
- <a href="http://wiki.polycount.net/CubeMap#Software" class="external text" rel="nofollow">polycount.net</a>
- <a href="http://en.wikipedia.org/wiki/Cube_mapping" class="external text" rel="nofollow">wikipedia</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:skybox](https://springrts.com/wiki/Mapdev:skybox).*
