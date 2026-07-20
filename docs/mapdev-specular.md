---
title: "Mapdev:specular"
source_url: "https://springrts.com/wiki/Mapdev:specular"
categories:
  - "Map_Dev"
---
# Mapdev:specular

<div class="mw-parser-output">

## Specular

Gives you per-pixel control over the color and intensity of specular highlights anywhere on the map. You could eg. make all highlights red, or have them depend on the type of material that a pixel represents, or something more exotic. The alpha channel defines how "polished" the surface looks (glossiness), and the RGB color is the amount of light that gets reflected for each color channel.

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-caution.png"><img src="/images/Icon-caution.png" decoding="async" width="48" height="48" alt="Icon-caution.png" /></a></td>
<td>Caution</td>
</tr>
<tr>
<td>requires clients to have GLSL-spec hardware</td>
</tr>
</tbody>
</table>

|  |  |
|----|----|
| [<img src="/images/Mapdev-specular.jpg" decoding="async" width="256" height="256" alt="Mapdev-specular.jpg" />](/images/Mapdev-specular.jpg) | [<img src="/images/Mapdev-spec_with.jpg" decoding="async" width="451" height="233" alt="Mapdev-spec with.jpg" />](/images/Mapdev-spec_with.jpg) |
| Example Specular Texture | Ingame Result |

## Specification

### mapinfo.lua

The relevant sections of the [mapinfo.lua](/mapdev-mapinfo.lua)

- If specularTex points to a file that does not exist, you will get full unmoderated specularity based on whatever your map's lighting settings are

<!-- -->

    local mapinfo = {
       resources = {
          ...
          specularTex = "",
          ...
       },
       ...
       lighting = {
          ...
          groundSpecularColor = {0.1, 0.1, 0.1},
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
| Resolution | Any, recommended powers of two, will be stretched over the terrain. |

- The RGB channels will control the red, green, and blue contribution per highlight
- The Alpha channel (multiplied by 16) becomes the specular exponent. Or on other words controls the sharpness of the specular highlights, the higher the value the sharper the highlights.
- You have to set the RGB values to zero if you want no specular contribution
- If you omit the alpha channel, or have a fully opaque image, the specular exponent is at its max and the results are a very sharp specular highlights.

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-caution.png"><img src="/images/Icon-caution.png" decoding="async" width="48" height="48" alt="Icon-caution.png" /></a></td>
<td>Caution</td>
</tr>
<tr>
<td>If you set the alpha value of the specular texture to zero, or you will get the below result. Use almost zero instead.</td>
</tr>
</tbody>
</table>

|  |
|----|
| [<img src="/images/Mapdev-spec_alpha_issue.jpg" decoding="async" width="640" height="330" alt="Mapdev-spec alpha issue.jpg" />](/images/Mapdev-spec_alpha_issue.jpg) |

## Forum Discussion

- <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=21951" class="external text" rel="nofollow">Make Your Maps Shiny(er) With SSMF</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:specular](https://springrts.com/wiki/Mapdev:specular).*
