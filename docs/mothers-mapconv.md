---
title: "Mothers MapConv"
source_url: "https://springrts.com/wiki/Mothers_MapConv"
categories:
  - "Deprecated"
  - "Map_Tools"
---
# Mothers MapConv

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | Mothers Mapconv is deprecated, use [MapConvNG](/mapconvng) instead! |

Download: <a href="http://springfiles.com/spring/tools/mapconv-no-scanlines-hack" class="external free" rel="nofollow">http://springfiles.com/spring/tools/mapconv-no-scanlines-hack</a>

The usage is the same as in [MapConv](/mapconv), with the following exceptions: All features (including GeoVent/Tree/Grass) are now on their own FeatureMap. This is a 24bit bmp specified with the -f \<featuremapname.bmp\> flag. *It should be 1/8th the resolution of your map.* (i.e. 1 pixel smaller in each direction then your heightmap)

Tree's and GeoVents are placed on the green layer.

- 255 Places a GeoVent
- 200-215 Places tree types 1-16

MapConv will try to place these features in the exact spot you place them, it will then go into crackhead mode if it cannot.

Grass is the blue layer. The blue value maps to a 'pseudo-density' of the grass. The 'grass' map in the engine is very very low resolution, so be aware that you will not get nice linear results. 255=full grass, 0=no grass.

The red layer places 'Arbitrary Features,' aka wreckages. One pixel of red equals one feature. Red '255' gives you a feature of the first arbitrary type, 254 the second, 253 the third, and so on.

### Using Mapconv

ok now you have your 4 maps, copy them into mothersmapconv folder

now you have to get mapconv to work. You can edit the .bat file or do this: goto start-\> run and type "cmd" this will open a dospromt for those that don't knwo dos, use cd.. to go up one level cd "mapname" to change folder and "d:" to go to your D drive navigate to the mapconv folder.

Then you need to type "mapconv" follwoed by a list of parameters

This is a list taken from mothers mapconv help:

USAGE:

     mapconv  [-l] [-i] [-c <compression>] -x <max height> -n <min height> [-o 
     <Output file>] [-e <tile file>] [-y <Typemap file>] -m <Metalmap file> -a 
     <Heightmap file> -t <Texture file> [--] [-v] [-h]

Where:

     -l,  --lowpass
       Lowpass filters the heightmap

     -i,  --invert
       Inverts the height map vertically (not the height values but the height map 
       (uhm someone rewrite this))

     -c <compression>,  --compress <compression>
       (value required)  How much we should try to compress the texture file. 
       Default value 0.8 . (lower=higher quality, larger file)

     -x <max height>,  --maxheight <max height>
       (required)  (value required)  What altitude in spring the max(0xffff) level 
       of the height map should represent

     -n <min height>,  --minheight <min height>
       (required)  (value required)  What altitude in spring the min(0) level of 
       the height map should represent

     -o <Output file>,  --outfile <Output file>
       (value required)  The name of the created map

     -e <tile file>,  --externaltilefile <tile file>
       (value required)  External tile file that will be used for finding tiles, 
       tiles not found in this will be added in a new tile file

     -y <Typemap file>,  --typemap <Typemap file>
       (value required)  Type map to use, uses the red channel to decide type, 
       types are defined in the .smd, if this argument is skipped the map will be 
       all type 0

     -m <Metalmap file>,  --metalmap <Metalmap file>
       (required)  (value required)  Metal map to use, red channel is amount of 
       metal, green=255 is where to place geos (one pixel=one geo). Is resized to 
       fit the mapsize

     -a <Heightmap file>,  --heightmap <Heightmap file>
       (required)  (value required)  Input heightmap to use for the map, this 
       should be in 16 bit raw format (.raw extension) or an image file. Must be 
       xsize*128 1 x ysize*128 1 in size.

     -t <Texture file>,  --intex <Texture file>
       (required)  (value required)  Input bitmap to use for the map. Must be 
       xsize*1024 x ysize*1024 in size. (xsize,ysize integers determined from this 
       file)

     --,  --ignore_rest
       Ignores the rest of the labeled arguments following this flag.

     -v,  --version
       Displays version information and exits.

     -h,  --help
       Displays usage information and exits.

This is an example of a command to convert your map (mame is crossroads) I allways use the -i parameter else the texture map gets applied wrong

mapconv.exe -i -f w_crossroadsf.bmp -x 300 -n 50 -m w_crossroadsm.bmp -a w_crossroadsh.bmp -t w_crossroads.bmp -o w_crossroads.smf

If you run this you will see 2 new files in the mapconv folder yourmapname.smf and yourmapname.smt You still need an extra file; yourmapname.smd A smd file contains all things like wind speeds max metal sun direction map description, starting positions etc. You can take a smd file from another map and edit or use Maelstorms SMD creator: <a href="https://springrts.com/phpbb/viewtopic.php?t=2420" class="external free" rel="nofollow">https://springrts.com/phpbb/viewtopic.php?t=2420</a>

Now put these 3 files in a folder called "maps", download 7-zip <a href="http://www.7-zip.org" class="external text" rel="nofollow">here</a>, open it and navigate to the maps folder then right-click on it and do add to archive. Just let it make a zip file, and later rename it to yourmapname.sd7 (you have to edit the extension)

Put this file in your spring maps folder and you're ready to test it!

I'm gonna cleanup this tutorial alter and add alot more stuff but if you aren't bothered too much because of all the typo's this should teach you how to make your first map

cheers!

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mothers MapConv](https://springrts.com/wiki/Mothers_MapConv).*
