---
title: "Mapdev:grass"
source_url: "https://springrts.com/wiki/Mapdev:grass"
categories:
  - "Pages_with_broken_file_links"
  - "Map_Dev"
---
# Mapdev:grass

<div class="mw-parser-output">

## Grass

Grass is entirely optional, but can be customized via map parameters and adds a nice touch to your map.

|  |  |
|----|----|
| [<img src="/images/Mapdev-grass.png" decoding="async" width="256" height="256" alt="Mapdev-grass.png" />](/images/Mapdev-grass.png) | [<img src="/images/Mapdev-grass-example.png" decoding="async" width="451" height="256" alt="Mapdev-grass-example.png" />](/images/Mapdev-grass-example.png) |
| Example Grass Disribution | In Game Result |

## Specification

### mapinfo.lua

    local mapinfo = {
       ...
       smf = {
            ....
            grassmapTex = "",
            ....
       },
       ...
       resources = {
          ...
          grassBladeTex = "",
          grassShadingTex = "",
          ...
       },
       ...
       grass = {
          bladeWaveScale = 1.0,
          bladeWidth = 0.32,
          bladeHeight = 4.0,
          bladeAngle = 1.57,
          bladeColor = {0.59, 0.81, 0.57},
       },
       ...
    }

#### Blade Wave Scale

Defaults to 1. It specifies how much the blades will wave in the wind. Higher makes them wave more.

#### Blade Height

Default is 4. Defines the length of the blade of grass in elmos.

#### Blade Angle

Default is pi/4. It defines how much each blade of grass curves.

#### Blade Color

does nothing when blade texture is set.

### Distribution Image

Formerly [Feature](/mapdev-features) Map. Grass distribution is defined by blue pixels, the more blue the pixel is (the closer to blue 255 it is), the thicker grass will be at that location.

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>File Location</th>
<td>The distribution map is an intermediary file compiled into the SMF/SMT files using <a href="/mapconv">MapConv</a> or <a href="/mapconvng">MapConvNG</a>, it can also be specified in the mapinfo.lua</td>
</tr>
<tr>
<th>File Format</th>
<td>Any that Mapconv programs support</td>
</tr>
<tr>
<th>Colour Depth</th>
<td>8bpp</td>
</tr>
<tr>
<th>Channels</th>
<td>Greyscale</td>
</tr>
<tr>
<th>Resolution</th>
<td><table>
<tbody>
<tr>
<th>Spring Map Size<sup>*</sup></th>
<th>pixels = Spring Map Size * 16</th>
</tr>
&#10;<tr>
<td>2</td>
<td>32</td>
</tr>
<tr>
<td>4</td>
<td>64</td>
</tr>
<tr>
<td>6</td>
<td>96</td>
</tr>
<tr>
<td>...</td>
<td>...</td>
</tr>
<tr>
<td>32</td>
<td>512</td>
</tr>
<tr>
<td colspan="2">* must be multiples of 2</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

### Shading Image

- If a shading image is not present, the minimap will be used in its place.

|  |  |
|----|----|
| File Location | ./maps/ |
| File Format | PNG, TGA |
| Colour Depth | 8bpp |
| Channels | RGB |
| Resolution | Any, recommended powers of two, will be stretched over the terrain. |

|  |  |
|----|----|
| File:Grassmap Map example.jpegâ€Ž | [<img src="/images/Grassmap_Map_ingame.jpg" decoding="async" width="512" height="184" alt="â€Ž" />](/images/Grassmap_Map_ingame.jpg) |
| Example | Result |

### Blade Texture

Specify a texture for the individual grass blades. The grass blades go from top to bottom, vertically.

|               |                               |
|---------------|-------------------------------|
| File Location | ./maps/                       |
| File Format   | PNG, TGA                      |
| Colour Depth  | 8bpp                          |
| Channels      | RGB (alpha does nothing here) |
| Resolution    | Any                           |

|  |  |
|----|----|
| ![Grass_blade_tex_testing.png](/images/Grass_blade_tex_testing.png) | ![Grass_blade_tex_ingame.PNG](/images/Grass_blade_tex_ingame.png) |
| Example | Result |

## Forum Discussions

- <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=27585" class="external text" rel="nofollow">Try to keep perspective</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:grass](https://springrts.com/wiki/Mapdev:grass).*
