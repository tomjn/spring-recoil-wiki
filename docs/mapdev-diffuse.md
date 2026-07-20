---
title: "Mapdev:diffuse"
source_url: "https://springrts.com/wiki/Mapdev:diffuse"
categories:
  - "Map_Dev"
---
# Mapdev:diffuse

<div class="mw-parser-output">

## Diffuse

The colour of the terrain, then modified with the lighting values in mapinfo.lua

|  |  |
|----|----|
| [<img src="/images/Mapdev-diffuse.jpg" decoding="async" width="256" height="256" alt="Mapdev-diffuse.jpg" />](/images/Mapdev-diffuse.jpg) | [<img src="/images/Mapdev-diffuse-example.png" decoding="async" width="455" height="256" alt="Mapdev-diffuse-example.png" />](/images/Mapdev-diffuse-example.png) |
| Example Diffuse Map | Ingame Result |

Example {.wikitable}

## Specification

### mapinfo.lua

The relevant sections of the mapinfo.lua file that effect the colour of the ground are in the [Lighting subtable](/mapdev-mapinfo.lua#lighting)

    local mapinfo = {
       ...
       lighting = {
          ...
          --// ground lighting
          groundAmbientColor  = {0.5, 0.5, 0.5},
          groundDiffuseColor  = {0.5, 0.5, 0.5},
          groundSpecularColor = {0.1, 0.1, 0.1},
          groundShadowDensity = 0.8,
          ...
       },
       ...
    }

### Image File

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>File Location</th>
<td>The diffuse texture is chopped into 32x32 pixel tiles compressed using DXT1 and compiled into the smt using <a href="/mapconv">MapConv</a> or <a href="/mapconvng">MapConvNG</a>.</td>
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
<td>RGBA</td>
</tr>
<tr>
<th>Resolution</th>
<td><table>
<tbody>
<tr>
<th>Spring Map Size<sup>*</sup></th>
<th>pixels = Spring Map Size * 512</th>
</tr>
&#10;<tr>
<td>2</td>
<td>1024</td>
</tr>
<tr>
<td>4</td>
<td>2048</td>
</tr>
<tr>
<td>6</td>
<td>3072</td>
</tr>
<tr>
<td>...</td>
<td>...</td>
</tr>
<tr>
<td>32</td>
<td>16 384</td>
</tr>
<tr>
<td colspan="2">* must be multiples of 2</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

### Compression

The DXT1 compression is lossy, but in a consistent manner. all 32x32 tiles will have exactly the same size. To reduce the number of tiles saved in tile file(SMT) you can align graphical elements to a 32x32 pixel grid. MapConv can detect that a tile is repeated and reference it only once. This means that any repetition of the diffuse image, so long as it is aligned to a 32x32 pixel grid will result in a reduction in size.

- Use tiled textures that are multiples of 32x32 in dimensions.
- Place features like geovents and metal spots on a 32x32 grid.
- Repeat as much as possible on a 32x32 pixel grid.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:diffuse](https://springrts.com/wiki/Mapdev:diffuse).*
