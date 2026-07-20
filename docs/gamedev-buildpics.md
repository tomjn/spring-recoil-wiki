---
title: "Gamedev:Buildpics"
source_url: "https://springrts.com/wiki/Gamedev:Buildpics"
categories:
  - "Game_Dev"
---
# Gamedev:Buildpics

<div class="mw-parser-output">

The buildpic is the small picture of a unit which appears in the build menu of its constructor. Commonly it is 96x96 pixels in size, and it must always be located in the `Unitpics/` directory.

Spring supports multiple image formats for buildpics. These formats are **PCX**, **JPG**, **BMP**, **DDS** and **PNG**. By default, Spring will try to load **unitname.dds**, where unitname is the short name of your unit, if it isn't found it tries to load the next image format depending on its priority (see below). To override this and use a different (DevIL supported) image format, use the [buildPic](/gamedev-unitdefs#buildpic) UnitDef tag.

Here's a detailed list of the formats supported:

<div data-align="center">

<table>
<colgroup>
<col>
<col>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>Priority</th>
<th>File Extension</th>
<th>Color Depth</th>
<th>Description</th>
</tr>
&#10;<tr>
<td>1</td>
<td><strong>DDS</strong></td>
<td>24-bit (16.7 million colors)<br />
Slightly Lossy (compression)</td>
<td>Nvidia's DirectX-enabled .dds format. This is how the maps in Spring are stored. It offers compression, but it can be lossy. It is also difficult to work with. Other formats are still recommended.</td>
</tr>
<tr>
<td>2</td>
<td><strong>PNG</strong></td>
<td>24-bit (16.7 million colors)<br />
Non-Lossy</td>
<td>New non-lossy, but still small in filesize, standard and with support for alpha channels. It is now recommended for use in Spring.</td>
</tr>
<tr>
<td>3</td>
<td><strong>PCX</strong></td>
<td>8-bit (256 colors)<br />
Lossy (palette)</td>
<td>A PCX file. You're not limited to the Total Annihilation palette, but only 256 colors pcx are supported. Quickest to use if you're converting TA units since it's what TA uses but not recommended for use in Spring.</td>
</tr>
<tr>
<td>4</td>
<td><strong>BMP</strong></td>
<td>24-bit (16.7 million colors)<br />
Non-Lossy</td>
<td>A standard Windows bitmap file. Recommended because of the high color depth and no loss due to compression or palette. However, BMP files are notorious for having large filesizes.</td>
</tr>
<tr>
<td>none</td>
<td><strong>JPG</strong></td>
<td>24-bit (16.7 million colors)<br />
Lossy (compression)</td>
<td>A standard JPEG file. Excessive compression is not recommended since it will reduce quality, but much smaller than BMP</td>
</tr>
</tbody>
</table>

</div>

Although JPG will lose some quality compared to BMP its file size is drastically smaller even on the lowest compression settings, this will drastically reduce the size of your mod especially if it has a large number of units. Also it has been noted that since spring loads things on the fly large buildpic files can create lag when you first select a factory or construction unit.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Gamedev:Buildpics](https://springrts.com/wiki/Gamedev:Buildpics).*
