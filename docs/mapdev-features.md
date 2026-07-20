---
title: "Mapdev:features"
source_url: "https://springrts.com/wiki/Mapdev:features"
categories:
  - "Map_Dev"
---
# Mapdev:features

<div class="mw-parser-output">

## Features

Map features are the bits and bobs that give maps more bling, such as rocks, trees, etc.

|  |
|----|
| [<img src="/images/Mapdev-features-with.jpg" decoding="async" width="640" height="481" alt="Mapdev-features-with.jpg" />](/images/Mapdev-features-with.jpg) |

Example {.wikitable}

## Specification

### Feature List

All features on a map are listed in the [set.lua](/mapdev-set.lua)

### Feature

The features themselves are complex enough to warrant their own set of pages.

## Additional Information

- **[Spring Features](/spring-features)** is a mod archive filled with useful objects.
- **[FeaturePlacer](/map-making-feature-placer)** is an ingame tool to help with adding features to your map.

## History

### Feature Map

Feature maps are a single RGB image where features such as grass, geothermal vents and trees, as well as structures, etc were "placed" using pixels on the image. This method was extremely imprecise and involved recompiling the map many times in order to simply move a tree from one location to another. They are still used for the purpose of placing [grass](/mapdev-grass)

|  |  |
|----|----|
| [<img src="/images/Mapdev-grass.png" decoding="async" width="256" height="256" alt="Mapdev-grass.png" />](/images/Mapdev-grass.png) | [<img src="/images/Mapdev-grass-example.png" decoding="async" width="451" height="256" alt="Mapdev-grass-example.png" />](/images/Mapdev-grass-example.png) |
| Example Feature Map | Ingame Result |

#### Specification

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>File Location</th>
<td>The feature map is an intermediary file compiled into the SMF/SMT files using <a href="/mapconv">MapConv</a> or <a href="/mapconvng">MapConvNG</a>.</td>
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
<td>RGB</td>
</tr>
<tr>
<th>Resolution</th>
<td><table>
<tbody>
<tr>
<th>Spring Map Size<sup>*</sup></th>
<th>pixels = Spring Map Size * 64</th>
</tr>
&#10;<tr>
<td>2</td>
<td>128</td>
</tr>
<tr>
<td>4</td>
<td>256</td>
</tr>
<tr>
<td>6</td>
<td>284</td>
</tr>
<tr>
<td>...</td>
<td>...</td>
</tr>
<tr>
<td>32</td>
<td>2048</td>
</tr>
<tr>
<td colspan="2">* must be multiples of 2</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:features](https://springrts.com/wiki/Mapdev:features).*
