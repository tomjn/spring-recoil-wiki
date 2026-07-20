---
title: "Mapdev:terraintype"
source_url: "https://springrts.com/wiki/Mapdev:terraintype"
categories:
  - "Map_Dev"
---
# Mapdev:terraintype

<div class="mw-parser-output">

## Terrain Types

Type Maps or terrain Types allow altering the speed of units, and the mount of deformation.

|  |
|----|
| (FIXME:  Example typemap) |
| Example Typemap |

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-caution.png"><img src="/images/Icon-caution.png" decoding="async" width="48" height="48" alt="Icon-caution.png" /></a></td>
<td>Caution</td>
</tr>
<tr>
<td>The use of type maps for unit speed adjustment is discouraged; due to the way units are automatically assigned to categories and the invisible nature of the type map it makes game play unpredictable.</td>
</tr>
</tbody>
</table>

Spring already provides speed alteration, with pathing optimisation based on terrain incline. Units will always take the "road" if its completely flat and have to travel a fair distance along otherwise uneven terrain.

Type maps use in deformation can show distinction between terrains like sand, rock, etc. This will suffer from edges between hardness levels having different heights after deformation, however it can be somewhat mitigated by making transitional typemaps with multiple hardness levels.

Use sparingly, with obvious visual indicators in the texture image.

## Specification

### mapinfo.lua

The relevant sections of the mapinfo.lua file are in the [terrainTypes subtable](/mapdev-mapinfo.lua#terraintypes)

    local mapinfo = {
       ...
       smf = {
            ....
            typemapTex = "",
            ....
        },
        ...
       terrainTypes = {
          [0] = {
             name = "Default",
             hardness = 1.0,
             receiveTracks = true,
             moveSpeeds = {
                tank  = 1.0,
                kbot  = 1.0,
                hover = 1.0,
                ship  = 1.0,
             },
          },
          [1]  = { 
             ...
          },
          ...
       },
       ...
    }

### Image File

An 8bpp greyscale image has 256 values for grey. each value represents a different terrain type, so you can have 256 different terrains, starting at zero(black)(default) to 255(white)

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>File Location</th>
<td>The metal map is an intermediary file compiled into the SMF file using <a href="/mapconv">MapConv</a> or <a href="/mapconvng">MapConvNG</a>, it can also be specified in the mapinfo.lua</td>
</tr>
<tr>
<th>File Format</th>
<td>Any that the Mapconv programs support</td>
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
<th>pixels = Spring Map Size * 32</th>
</tr>
&#10;<tr>
<td>2</td>
<td>64</td>
</tr>
<tr>
<td>4</td>
<td>128</td>
</tr>
<tr>
<td>6</td>
<td>192</td>
</tr>
<tr>
<td>...</td>
<td>...</td>
</tr>
<tr>
<td>32</td>
<td>1024</td>
</tr>
<tr>
<td colspan="2">* must be multiples of 2</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

## Forum Discussions

- <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=21669" class="external text" rel="nofollow">Typemap rant thread.</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:terraintype](https://springrts.com/wiki/Mapdev:terraintype).*
