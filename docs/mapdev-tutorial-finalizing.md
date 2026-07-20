---
title: "Mapdev:Tutorial Finalizing"
source_url: "https://springrts.com/wiki/Mapdev:Tutorial_Finalizing"
categories:
  - "Map_Dev"
---
# Mapdev:Tutorial Finalizing

<div class="mw-parser-output">

## Finalizing

This page describes how to compile some of the texture files into the smf smt files, test your map, archive the map using 7zip and upload to springfiles.com

## Review

Following stage one of the beginners tutorial you will have some intermediary files ready to convert into the SMF and SMT map format:

- heightmap.png
- metalmap.png
- diffuse.png
- mini.bmp
- grassmap.png

There is also the [terrain type](/mapdev-terraintype) map but thats not covered in these tutorials

## Compiling the smf and smt files

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>springMapConvNG (Windows/Linux)</th>
<td><ol>
<li>Open up the terminal and navigate to your working directory</li>
<li><p>Generate the mymapname.smf and mymapname.smt files by runing mapconv with these options:</p>
<pre><code>springMapConvNG -t diffuse.png -h heightmap.png -m metalmap.png
-v grassmap.png -minimap mini.bmp -ct 1 -o mymapname</code></pre></li>
<li>Copy the smf and smt files to the ./mymapname.sdd/maps/ directory (Do not rename!)</li>
</ol></td>
</tr>
<tr>
<th>smf_tools (Windows/Linux)</th>
<td><ol>
<li>Open up the terminal and navigate to your working directory</li>
<li><p>Generate the mymapname.smt and mymapname.smt.csv (tilemap) with this command:</p>
<pre><code>smt_convert -vf --smt -o mymapname.smt --tilesize 32x32 diffuse.png</code></pre></li>
<li><p>Generate the mymapname.smf file with this command:</p>
<pre><code>smf_cc -vf --height height.png --metal metal.png --map mymapname.smt.csv --grassmap grassmap.png --minimap minimap.png mymapname.smt</code></pre></li>
<li>Copy the smf and smt files to the ./mymapname.sdd/maps/ directory (Do not rename!)</li>
</ol></td>
</tr>
<tr>
<th>MapConv (Windows)</th>
<td><ol>
<li>In mapconv directory: right click, new file, mymapname.bat</li>
<li><p>Edit in text editor, put in these options:</p>
<pre><code>MapConv -i -c 0 -x 256 -n 10 -o mymapname.smf -t diffuse.png -a 
heightmap.png -m metalmap.png -v grassmap.png</code></pre></li>
<li><p>Depending on the desired quality add:</p>
<pre><code>Fastest compile, lowest quality:
&#10; -z &quot;nvdxt.exe -dxt1a -nmips 4 -quick -file&quot;
&#10;Medium speed, good quality: (CUDA version, requires nvidia 8 or higher series gfx card)
&#10; -q
&#10;Slow, great quality: (Nothing)
&#10;Slower, best possible quality:
&#10;-z &quot;nvdxt.exe -dxt1a -nmips 4 -Sinc -quality_highest -file&quot;</code></pre></li>
<li>Make sure mini.bmp is in the same directory as the mymapname.bat</li>
<li>Generate the mymapname.smf and mymapname.smt files by executing mymapname.bat file</li>
<li>Copy the smf and smt files to the ./mymapname.sdd/maps/ directory (Do not rename!)</li>
</ol></td>
</tr>
<tr>
<th>Mac</th>
<td>FIXME: </td>
</tr>
</tbody>
</table>

## Testing the map

Copying the sdd directory to your spring maps folder will allow spring to recognise it as a map, this way you can tweak parameters and test things before archiving it for distribution.

## Archiving

Archiving the map creates a single file with smaller overall size for easy distribution.

1.  Create a new 7zip archive containing the contents of the sdd folder.(see below for platform specific instructions)
2.  Copy the archive to maps folder to test

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-caution.png"><img src="/images/Icon-caution.png" decoding="async" width="48" height="48" alt="Icon-caution.png" /></a></td>
<td>Caution</td>
</tr>
<tr>
<td>Make sure that you have not created the archive with the "solid archive" option, or spring will not recognise it.</td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>Linux</th>
<td><ol>
<li>Open a terminal and navigate to your sdd directory</li>
<li>Run the following command:</li>
</ol>
<code>7z a -ms=off mymapname.sd7 *</code></td>
</tr>
<tr>
<th>Windows</th>
<td><a href="/images/Examplearchivewith7zip.jpg"><img src="/images/Examplearchivewith7zip.jpg" decoding="async" width="512" height="331" alt="Examplearchivewith7zip.jpg" /></a></td>
</tr>
<tr>
<th>Mac</th>
<td>FIXME: </td>
</tr>
</tbody>
</table>

## Uploading to springfiles.com

1.  Head on over to <a href="http://www.springfiles.com" class="external text" rel="nofollow">springfiles.com</a> and create an account
2.  Select upload from the main horizontal menu
3.  Fill out as much as you can
4.  Post to <a href="http://springrts.com/phpbb/viewforum.php?f=13" class="external text" rel="nofollow">map creation</a> subforum with something like "\[new map\]" in the subject line so as to increase visibiity.

## Congratulations

Your map is set free into the wilds of the internet. We sincerely hope its well loved.

Please browse the [Map Development](/mapdev-main) wiki pages for more ways to make awesome maps. Please help us make this wiki as comprehensive as possible, if you see something missing don't hesitate to jump in and add it.

Additionally, now you have gotten into maps, perhaps other areas of spring development may interest you. Check out the [Game development](/gamedev-main) pages.

For help and discussions please visit the <a href="http://springrts.com/phpbb/viewforum.php?f=13" class="external text" rel="nofollow">forums</a>

Good Luck.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:Tutorial Finalizing](https://springrts.com/wiki/Mapdev:Tutorial_Finalizing).*
