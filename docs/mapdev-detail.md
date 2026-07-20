---
title: "Mapdev:detail"
source_url: "https://springrts.com/wiki/Mapdev:detail"
categories:
  - "Map_Dev"
---
# Mapdev:detail

<div class="mw-parser-output">

## Details

FIXME:  Needs description here

<table>
<caption>Example</caption>
<tbody>
<tr>
<td>FIXME:  needs image</td>
<td><a href="/images/Mapdev-splat-without.jpg"><img src="/images/Mapdev-splat-without.jpg" decoding="async" width="330" height="170" alt="Mapdev-splat-without.jpg" /></a></td>
</tr>
<tr>
<td>Example Detail Texture</td>
<td>Ingame Result</td>
</tr>
<tr>
<td colspan="2"><em>* Click on images for higher res</em></td>
</tr>
</tbody>
</table>

## Specification

### mapinfo.lua

    local mapinfo = {
       ...
       resources = {
          ...
          detailTex = "",
          ...
       },
       ...
    }

### Image File

|  |  |
|----|----|
| File Location | ./maps/ |
| File Format | PNG, TGA, BMP, DDS New in version 99.0 |
| Colour Depth | 8bpp |
| Channels | RGB |
| Resolution | Any powers of two, eg. 256, 512, 1024... |

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:detail](https://springrts.com/wiki/Mapdev:detail).*
