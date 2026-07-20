---
title: "MakingMapsWithBluePrintAndMapConv"
source_url: "https://springrts.com/wiki/MakingMapsWithBluePrintAndMapConv"
categories:
  - "Delete"
---
# MakingMapsWithBluePrintAndMapConv

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

[Development](/development-main) \< MakingMapsWithBluePrintAndMapConv

## Getting Started (Tools)

**Blueprint: **<a href="https://github.com/jk3064/Map-Blueprint" class="external text" rel="nofollow">https://github.com/jk3064/Map-Blueprint</a> 

The only other tool really needed is "Mapconv". The other tools available are there simply to make your life easier. A list of common mapping tools are as follows:

Mapconv

SMFED **(Deprecated, no longer useful)**

Grout **(Deprecated, no longer useful unless texture was generated with L3dt utilizing tiles)**

SMD Creator **(Deprecated, no longer useful)**

Start Position Editor

Das Bruce's Mapconv frontend

These tools have been compiled into a zip available here: <a href="http://springfiles.com/spring/tools/mapping-tools" class="external text" rel="nofollow">http://springfiles.com/spring/tools/mapping-tools</a>

Keep in mind that mapconv is still being developed, so it may be necessary to update the included Mapconv to a later version, located here: <a href="http://springrts.com/phpbb/viewtopic.php?f=56&amp;t=21458" class="external text" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=56&amp;t=21458</a>

## The Components of a Map

- [Texture Map](/mapcomponents-texture)

<!-- -->

- [Heightmap](/mapcomponents-heightmap)

<!-- -->

- [Metal Map](/mapcomponents-metal-map)

<!-- -->

- [Feature Map](/mapcomponents-feature-map)

## Compiling a Map (MapConv)

### Texture Specifications

Texture map size is related in pixels and in spring map size. 2x2 MapSquares in spring are equal to 1024x1024 Pixels. Texture maps must be in multiples of 2. I.E. 2x2, 6x10, 12x16, 16x16, etc. No odd sizes are allowed (Example: 15x10).

Height Map dimensions are Texture Map size / 8 + 1 pixel. In other words, if your texture map is 8192x8192 (16x16), 8192 / 8 + 1 = 1025x1025

Metal Map dimensions are Texture Map size / 8 + 1 pixel. In other words, if your texture map is 8192x8192 (16x16), 8192 / 8 + 1 = 1025x1025

Feature Map dimensions are Texture Map size / 8. In other words, if your texture map is 8192x8192 (16x16), 8192 / 8 = 1024x1024

### Using MapConv

[MapConv](/mapconv) is a command line program that is generally started via a batch file .

Below is an example set of parameters given to mapconv:

**`MapConv -i -l -c 0 -x 101 -n 100 -o EvoRTS-Craggy_Creek-v01.smf -t terrain.png -a height6.png -m metal.png -f feature.png -z "nvdxt.exe -dxt1a -nmips 4 -Sinc -quality_highest -file"`**

Once compiled, you will get 2 new files: \<mapname.smt\> and \<mapname.smf\>

## Utilizing Blueprint

Unzip the blueprint archive into your Spring Maps folder.

![mapcontainer.jpg](http://www.evolutionrts.info/random/mapcontainer.jpg)

You will notice a new folder called "mapcontainer.sdd". The .sdd ending on the folder name is very important for testing as \<foldername\>.sdd tells spring to load map files from that folder. This way you can work on your maps without having to zip them up over and over again.

### mapcontainer.sdd

Inside the map container folder you have the following file/folder structure.

<div>

**`LuaGaia`**

</div>

<div>

**`mapconfig`**

</div>

<div>

**`maphelper`**

</div>

<div>

**`maps`**

</div>

<div>

**`mapinfo.lua`**

</div>

<div>

**`mapoptions.lua`**

</div>

<div>

</div>

Now, copy your compiled map files (the `.smt` and `.smf` files) into the "maps" folder.

## Texture Splatting using SSMF

SSMF mapping is adding detail textures all over the map based upon specified distribution areas. This will make your map infinitely more detailed and beautiful.

Adding SSMF to a map consists of the following steps:

- [Distribution Map](/ssmf-distribution-map)

<!-- -->

- [Detail Textures](/ssmf-detail-textures)

<!-- -->

- [Specular Map](/ssmf-specular-map)

<!-- -->

- [Grass Shading Map](/ssmf-grass-shading-map)

<!-- -->

- [Normal Map](/ssmf-normal-map)

## Placing Features

As previously mentioned, features can now be placed via LUA based upon a coordinate system that looks similar to this:

<div>

`local features = { `

</div>

<div>

`unitlist = {`

</div>

<div>

`},`

</div>

<div>

`buildinglist = {`

</div>

<div>

`},`

</div>

<div>

`objectlist = {`

</div>

<div>

`{ name = 'btreeclo_4', x = 7760, z = 112, rot = "0" },`

</div>

<div>

`{ name = 'btreea_3', x = 2520, z = 6904, rot = "0" },`

</div>

<div>

`{ name = 'btreeblo_5', x = 7736, z = 536, rot = "0" },`

</div>

<div>

`{ name = 'btreeclo_1', x = 2504, z = 7112, rot = "0" },`

</div>

<div>

`{ name = 'geovent', x = 177, z = 192, rot = "0" },`

</div>

<div>

`},`

</div>

<div>

`}`

</div>

<div>

`return features`

</div>

<div>

</div>

<div>

Of course, features can be placed by editing the set.lua file in a text editor, but that would take an extremely long time. Enter FeaturePlacer.

</div>

<div>

</div>

### Feature Placer

- [Feature Placer](/map-making-feature-placer)

## Configuring Map Parameters (Mapinfo.lua)

Admittedly, the default values used in blueprint mapinfo are awful. It may be wise for you to download another map that has used blueprint and copy and paste it's mapinfo contents into yours. However, you are also free to use the default or use the provided example.

In time, the mapinfo tags will be documented and this will like to that page. As it is the tags and values are pretty easy to figure out for the most part.

### MapInfo.lua

- [MapInfo.lua](/mapdev-mapinfo.lua)

## Skyboxes

- [Notes about skyboxes](/mapdev-howto-skybox) notes on a prerendered sky box or cube map.

## Mutators

Mutators are files that add new content to exiting game files. "<a href="http://springfiles.com/spring/tools/spring-features" class="external text" rel="nofollow">Spring Features</a>" is an example of a mutator.

This section needs a proper description.

<a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=21808" class="external text" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=21808</a>

## Archiving a Map

<div>

Spring reads two different archive formats, 7zip and zip. Both archives are named sd7 and sdz, respectively. 7zip files are made by The 7zip archive program, available at <a href="http://www.7-zip.org/" class="external text" rel="nofollow">http://www.7-zip.org/</a>

</div>

<div>

</div>

<div>

Navigate to your mapcontainer.sdd folder and zip it's contents into either a .7z file or .zip (7zip format is **HIGHLY RECOMMENDED**!), usually naming schemes follow the actual mapname (\<mapname.sd7\>, such as EvoRTS-Craggy_Creek-v08.sd7

</div>

<div>

</div>

<div>

![examplearchivewith7zip.jpg](http://www.evolutionrts.info/random/examplearchivewith7zip.jpg)\

</div>

<div>

</div>

<div>

Once completed, copy the sd7/sdz file to your maps folder. At this point, be sure to remove the .sdd ending from your mapcontainer.sdd folder (or change the map name/version contained withing), otherwise you might get sync errors because spring is reading from the wrong archive source.

</div>

## Tools

- [Frostregen's SpringMapEdit](/maps-springmapedit). 3D editing, Compiles and import SM2 directly. Beginner friendly but still powerful.
- [MapConv](/mapconv) Map converter program, compiles maps.
- [MapConvNG](/mapconvng) Rewrite of MapConv that works on linux / 64 bit.
- [Maps:Map Designer](/maps-map-designer) **(Outdated, Deprecated)** Hugh's 3D map designer. Splatting, heightmap editing, splat painting, SM3
- <a href="http://www.springfiles.com/show_file.php?id=1679" class="external text" rel="nofollow">Starting position creator</a>: Or you can always find out the hard way which x/y coordinates are good by starting spring and having a look at the mouse cursor coordinates.
- <a href="http://code.google.com/p/conflictterra/source/browse/games/CT/luaui/widgets/tp_coordinate_help.lua" class="external text" rel="nofollow">Coordinate Helper widget</a> A small widget that helps you with finding coordinates ie for start positions. Every time you put down a marker it will log its position in [Infolog.txt](/infolog.txt) and also in MAPNAME_coordinates.txt Helpfull if you need to get lots of map coordinates and do not want to write them down by hand. (it writes SpawnResource in front of the coordinates but you can ignore or edit the widget)

## SSMF Mapmaking Tutorial (Using JK's Blueprint)

**\*A Note to wiki Editors\***

`The below listed tutorial needs to be pulled apart and separated into proper pages following an outline, making it much easier for future addition and proper documentation separation.`

[Creating a Map using Blueprint](/creating-a-map-using-blueprint)

## Minimal template

While JK's Blueprint is very useful for advanced map architects it can be bit confusing if one wants a minimal barebone template with defaults.

JK's template is still useful starting point. Extract it, then delete everything except mapinfo.lua and everything in maps folder (except your .smf and .smt files). Next copy paste following to mapinfo.lua (not the most minimal but minimal enough):

    local mapinfo = {
       name        = "MyMap",
       shortname   = "",
       description = "",
       author      = "",
       version     = "",
       modtype     = 3, --// 3=map

       teams = {
          [0] = {startPos = {x = 8, z = 8&#125;&#125;,
          [1] = {startPos = {x = 16, z = 16&#125;&#125;,   
       },
    }
    return mapinfo

In summary: maps folder with .smf.and .smt files and single mapinfo.lua file. You should be now able to test your map immediately (if files are placed to mapcontainer.sdd).

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [MakingMapsWithBluePrintAndMapConv](https://springrts.com/wiki/MakingMapsWithBluePrintAndMapConv).*
