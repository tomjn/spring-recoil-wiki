---
title: "Mapdev:WikiGuide"
source_url: "https://springrts.com/wiki/Mapdev:WikiGuide"
categories:
  - "Map_Dev"
---
# Mapdev:WikiGuide

<div class="mw-parser-output">

## Style and format guide for mapdev wiki pages

### Technical Pages

the structure of a technical page should be thus:

- title
- short description of the pages content
- pretty Images
- Specification

this means the exact format for text, images, file locations, naming, etc

- (optional)implementation

engine details on how its put into the game if relevant, also if there are multiple ways to use the information, most of the time i expect this section will be removed

- (optional)History

relevant history as to why the feature is how it is, i expect this section to be removed in most cases

- (optional)additional Information

for curiosity's sake if someone has more information on the subject they wish to add, such as with the terrain additional information regarding ROAM algorithms, etc.. i expect this section to be removed in most cases

- (optional)forum discussion

forum links relating to the feature that are useful

### Howto's

Should attempt to deal with one thing at a time, and not try to be a "how to make the best map ever" type thing, keep it focused on one thing, keep it neat.

### Common Problems

if the description and solution to the problem can be fit into a couple of paragraphs, there is no need to make a new page for it, just chuck it under the heading on the main page.

## Page Elements

### Infobox

use the infobox template for tips and cautions

    eg.

    &#123;&#123;Tip|blah blah blah&#125;&#125;

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-tip.png"><img src="/images/Icon-tip.png" decoding="async" width="48" height="48" alt="Icon-tip.png" /></a></td>
<td>Tip</td>
</tr>
<tr>
<td>blah blah blah</td>
</tr>
</tbody>
</table>

    &#123;&#123;Caution|blah blah blah&#125;&#125;

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-caution.png"><img src="/images/Icon-caution.png" decoding="async" width="48" height="48" alt="Icon-caution.png" /></a></td>
<td>Caution</td>
</tr>
<tr>
<td>blah blah blah</td>
</tr>
</tbody>
</table>

### FIXME

Wherever there is information missing that needs adding use &#123;&#123;{FIXME&#125;&#125;} tags

    &#123;&#123;FIXME&#125;&#125;

Later people can use this page to know what needs work

### Example Image

    <center>
    {| class="wikitable"
    |+ Example
    | [[File:imagename.jpg]] || [[File:imagename.png]]
    |-
    ! Example Image !! Ingame Result
    |}</center>

|  |  |
|----|----|
| (link image here with max height 256) | (link image here with max height 256) |
| Example Image | Ingame Result |

Example {.wikitable}

### Image Spec

    {| class="wikitable" width="100%"
    ! width="15%" | File Location
    | file path relative to root of map folder
    |-
    ! File Format
    | What file format can be used.
    |-
    ! Colour Depth
    | bits per pixel
    |-
    ! Channels
    | what colour channels
    |-
    ! Resolution
    | Either an exact value, a description or below.
    <center>
    {| class="wikitable" style="text-align: center;"
    !Spring Map Size<sup>*</sup>
    !pixels = Spring Map Size * 512
    |-
    | 2
    | 1024
    |-
    | 4
    | 2048
    |-
    | 6
    | 3072
    |-
    | ...
    | ...
    |-
    | 32
    | 16 384
    |-
    | style="text-align: left;font-style:italic" colspan=2 | * must be multiples of 2
    |}</center>
    |}

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>File Location</th>
<td>file path relative to root of map folder</td>
</tr>
<tr>
<th>File Format</th>
<td>What file format can be used.</td>
</tr>
<tr>
<th>Colour Depth</th>
<td>bits per pixel</td>
</tr>
<tr>
<th>Channels</th>
<td>what colour channels</td>
</tr>
<tr>
<th>Resolution</th>
<td>Either an exact value, a description or below.
<table>
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

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:WikiGuide](https://springrts.com/wiki/Mapdev:WikiGuide).*
