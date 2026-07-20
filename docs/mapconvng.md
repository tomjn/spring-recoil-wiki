---
title: "MapConvNG"
source_url: "https://springrts.com/wiki/MapConvNG"
categories:
  - "Map_Tools"
---
# MapConvNG

<div class="mw-parser-output">

MapConvNG is a complete rewrite of [MapConv](/mapconv) to work flawlessly on linux and on windows. It also contains smfdecompiler.

## Download

Since 2019.10.01 it is part of the official spring build:

fetch it from <a href="https://springrts.com/dl/buildbot/default/develop/" class="external free" rel="nofollow">https://springrts.com/dl/buildbot/default/develop/</a>

## Sources

` git clone `<a href="git://github.com/spring/SpringMapConvNG.git" class="external free" rel="nofollow"><code>git://github.com/spring/SpringMapConvNG.git</code></a>` `

<a href="https://github.com/spring/SpringMapConvNG" class="external free" rel="nofollow">https://github.com/spring/SpringMapConvNG</a>

## Bugs

Please report bugs at <a href="https://springrts.com/mantis/" class="external free" rel="nofollow">https://springrts.com/mantis/</a>

## Reformatted Help Output

    Usage: 

    springMapConvNG [options] -t <texturemap> -o <output filename>

    General Options:
    -h          help
    -o <string>       output file name

    Map Options:
    -features <string>    features file
    -minimap <string> minimap image [1024x1024]
    -maxh <float>     white height value
    -minh <float>     black height value
    -noclamp        Disables height map clamping, explained below.
    -smooth         Smooth

    Texture Map Inputs:
    -h <string>       height map, [texture_x / 8 + 1, texture_y / 8 + 1]
    -m <string>       metal map, [texture_x / 16, texture_y / 16]
    -t <string>       texture map, Dimensions must be divisible by 1024
    -v <string>       vegetation map, [texture_x / 32, texture_y / 32]
    -z <string>       type map, [texture_x / 16, texture_y / 16]

    Compilation Options:
    -ct <integer>     compression type 1,2,3 or 4 explained below.
    -ccount <integer> compare_tilecount
    -th <float>       compression level

    Feature file:
    Each line is a feature instance and has the fields in the following order
    [tdfname] [xpos] [ypos] [zpos] [rotation yaxis]
    Please do not leave whitespaces at the end or it will give errors.
    If you specify less than -490000 as ypos , it will calculate ypos
    depending on terrain height

    noclamp:
    disables heightmap clamping to max-min values , you should avoid using that,
    cause you lose precision, if you want less high landscape use maxh and minh

    Compression Type:
    1: No compression 
    2: Fast compression , compare tile with last -ccount tiles , take first
       which difference is below -th
    3: Insane Compression: compare each tile with whole map , it is very SLOW,
       not recomended
    4: High quality Fast compression: Slightly slower than 2 , it searchs for
       less different tile in last -ccount tiles

## Important information

- Althought the color / diffuse texture resolution must be a multiple of 1024, bear in mind that in Spring each map unit corresponds to 512px. So an 8k image equals to a 16x16 map in game.
- Texture (diffuse), minimap, height and metal maps should be flipped vertically in an image editing program, there's no -i option in MapConvNG (as in the older and much slower MapConv)
- HDR and EXR images may also be used, ideal to keep the 16-bit quality of height maps. If you use Photoshop, check this free HDR input/output plugin: <a href="https://www.exr-io.com/" class="external free" rel="nofollow">https://www.exr-io.com/</a>
- In case you add a custom minimap of a non-square map, notice that the image is stretched out to fit the map proportion - so don't add black borders, just stretch it to 1024x1024 in your image editing program.

## Suggested Parameters

-ct 2 : Compression Type , 1 is no compression at all , 2 - Compresses but comparing with limited set of tiles , 3 - Compares with ALL tiles , it can take ages to compile , you've been warned!

-th 0.03 : Compression Level , Higher compresses more , but adds more artifacts, 0.03 is a good compromise

- If you use -ct 1 and your texture doesn't show up, try -ct 2 with -th 0.01

-smooth : Does a bit of gaussian blur on HDR heightmap , it is especially useful when loading 8 bit images

- after applying reduction to your heightmap in an image editing program, filtering artifacts might lead to spikes in your map in-game. Using -smooth usually works out this kind of issue

## Features \[featurefile\] parameter

Feature file is a simple text file, each line defines a feature with the space-separated fields: Name XPos YPos ZPos Orientation(Degrees)\
Follows an example:

`Rock1 6000 -500000 3000 0`\
`Rock2 4000 200 1000 180`

- Result:
  - Rock1 will be placed on terrain surface (numbers below -490000 are interpreted as "place on ground")
  - Rock2 will be placed precisely at 4000x200x1000

- To place a thermal vent, simply use 'GeoVent' as the feature name in a feature file.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [MapConvNG](https://springrts.com/wiki/MapConvNG).*
