---
title: "Mapdev:metal"
source_url: "https://springrts.com/wiki/Mapdev:metal"
categories:
  - "Map_Dev"
---
# Mapdev:metal

<div class="mw-parser-output">

## Metal

Metal maps are used for the built in resourcing scheme (Metal/Energy), they define metal areas on a battlefield based upon the values in the red channel of the metal map.

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-caution.png"><img src="/images/Icon-caution.png" decoding="async" width="48" height="48" alt="Icon-caution.png" /></a></td>
<td>Caution</td>
</tr>
<tr>
<td>There are several games for Spring which use their own resourcing system. If you are creating a map for one of those games a metal map may not be necessary, however it is always nice if you can make your maps as compatible with other games as possible, but this is a choice left entirely up to you.</td>
</tr>
</tbody>
</table>

|  |  |
|----|----|
| [<img src="/images/Mapdev-metal.png" decoding="async" width="256" height="256" alt="Mapdev-metal.png" />](/images/Mapdev-metal.png) | [<img src="/images/Mapdev-metal-example.png" decoding="async" width="455" height="256" alt="Mapdev-metal-example.png" />](/images/Mapdev-metal-example.png) |
| Example Metal Map | Ingame Result |

Example {.wikitable}

## Specification

### mapinfo.lua

- [mapinfo.lua](/mapdev-mapinfo.lua)

<!-- -->

    mapinfo ={
       ...
       maxMetal        = 0.02,
       extractorRadius = 500.0,
       autoShowMetal   = true,
       ...
       smf = {
            ....
            metalmapTex = "",
            ....
        },
        ...
    }

### Image File

- The red value of pixel corresponds to the metal value.

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>File Location</th>
<td>The metal map is an intermediary file compiled into the SMF file using <a href="/mapconv">MapConv</a> or <a href="/mapconvng">MapConvNG</a>, it can also be specified in the mapinfo.lua.</td>
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
<td>256</td>
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

## Additional Information

### Patch Technique

If you do want perfect metal patches, use a 6x6 pixel pencil in your image editor with a red value of 255. This combined with setting the "MaxMetal" tag in the definitions to 1, will result in a perfect 2.0 metal generation per patch (using Balanaced Annihilation values). The game use isn't the point however. The fact is that if you can predict how much each spot will output (typically), using the "MaxMetal" parameter, you can easily scale the values up and down. As an example of another extreme, Evolution RTS dictates that all metal patches will output 0.5 metal regardless of the map settings. So whether you need to put a lot of thought into your metal map values depends entirely upon the game for which you are creating the map.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:metal](https://springrts.com/wiki/Mapdev:metal).*
