---
title: "Mapdev:height"
source_url: "https://springrts.com/wiki/Mapdev:height"
categories:
  - "Map_Dev"
---
# Mapdev:height

<div class="mw-parser-output">

## Height

The height of the terrain is generally defined with a greyscale displacement map with black representing the lowest point on the terrain and white the highest. The height of the terrain can also be modified in game via lua scripting.

|  |  |
|----|----|
| [<img src="/images/Mapdev-height.png" decoding="async" width="256" height="256" alt="Mapdev-height.png" />](/images/Mapdev-height.png) | [<img src="/images/Mapdev-height-example.png" decoding="async" width="455" height="256" alt="Mapdev-height-example.png" />](/images/Mapdev-height-example.png) |
| Example Height Map | Ingame Result |

Example {.wikitable}

## Specification

### mapinfo.lua

- [Mapdev:mapinfo.lua](/mapdev-mapinfo.lua)

<!-- -->

    local mapinfo = {
       ...
       smf = {
          minHeight = 1000,
          maxHeight = -300,
          ...
       },
       ...
    }

#### minHeight and maxHeight

Any values below zero are underwater, see [Mapdev:water](/mapdev-water)

### Image File

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>File Location</th>
<td>The height map is an intermediary file compiled into the SMF/SMT files using <a href="/mapconv">MapConv</a> or <a href="/mapconvng">MapConvNG</a>.</td>
</tr>
<tr>
<th>File Format</th>
<td>Any that the Mapconv programs support</td>
</tr>
<tr>
<th>Colour Depth</th>
<td>16bpp recommended, however 8bpp will work.</td>
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
<th>pixels = Spring Map Size * 64 + 1</th>
</tr>
&#10;<tr>
<td>2</td>
<td>129</td>
</tr>
<tr>
<td>4</td>
<td>257</td>
</tr>
<tr>
<td>6</td>
<td>385</td>
</tr>
<tr>
<td>...</td>
<td>...</td>
</tr>
<tr>
<td>32</td>
<td>2049</td>
</tr>
<tr>
<td colspan="2">* must be multiples of 2</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### 8 vs 16 bpp

These two images show the differences in prescision that the bit depth of the image makes. The effect has been exaggerated here for clarity.

|  |  |
|----|----|
| [<img src="/images/8bpp.png" decoding="async" width="256" height="208" alt="8bpp.png" />](/images/8bpp.png) | [<img src="/images/16bpp.png" decoding="async" width="256" height="208" alt="16bpp.png" />](/images/16bpp.png) |
| 8bpp | 16bpp |

#### +1 pixel

When each pixel represents a vertex you need one extra pixel than the number of quads you are attempting to represent

|  |
|----|
| [<img src="/images/Height_texture_map_vertex_example.png" decoding="async" width="384" height="216" alt="Example" />](/images/Height_texture_map_vertex_example.png) |

Representation {.wikitable style="text-align: center;"}

## Additional Information

### ROAM terrain engine

- Official ROAM <a href="http://www.cognigraph.com/ROAM_homepage/" class="external text" rel="nofollow">page</a>
- Gamasutra has a nice <a href="http://www.gamasutra.com/view/feature/3188/realtime_dynamic_level_of_detail_.php" class="external text" rel="nofollow">article</a> on ROAM
- various other <a href="http://vterrain.org/LOD/Implementations/" class="external text" rel="nofollow">implementations</a> of LOD terrain

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:height](https://springrts.com/wiki/Mapdev:height).*
