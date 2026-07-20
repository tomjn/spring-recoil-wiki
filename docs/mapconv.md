---
title: "MapConv"
source_url: "https://springrts.com/wiki/MapConv"
categories:
  - "Map_Tools"
---
# MapConv

<div class="mw-parser-output">

**Linux users, use:** [MapConvNG](/mapconvng)

Some Mapconv Information <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=20849" class="external text" rel="nofollow">1</a>,<a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=13655" class="external text" rel="nofollow">2</a>

map decompiler <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=18562" class="external text" rel="nofollow">1</a>

## Mapconv

A cross platform map compiler for spring

- <a href="http://springrts.com/phpbb/viewtopic.php?f=56&amp;t=21458" class="external text" rel="nofollow">Forum thread</a> for news and releases

## Windows download

- In 2021, on windows, use the GUI version here: <a href="https://github.com/Beherith/springrts_smf_compiler" class="external text" rel="nofollow">PyMapConv</a>

\- Beherith

## Source Code

**<a href="http://github.com/spring/MapConv" class="external text" rel="nofollow">MapConv</a> at github**

### Getting the Source

    git clone git://github.com/spring/MapConv.git

## Documentation

### Example Usage

**Fastest compile, lowest quality:**

MapConv -i -c 0 -x 250 -n 25 -o Zion_v1.smf -t t.bmp -a h.raw -m m.bmp -f f.bmp -z "nvdxt.exe -dxt1a -nmips 4 -quick -file"

**Medium speed, good quality:** (CUDA version, requires nvidia 8 or higher series gfx card)

MapConv -i -c 0 -x 250 -n 25 -o Zion_v1.smf -t t.bmp -a h.raw -m m.bmp -f f.bmp -q

**Slow, great quality:**

MapConv -i -c 0 -x 250 -n 25 -o Zion_v1.smf -t t.bmp -a h.raw -m m.bmp -f f.bmp

**Slower, best possible quality:**

MapConv -i -c 0 -x 250 -n 25 -o Zion_v1.smf -t t.bmp -a h.raw -m m.bmp -f f.bmp -z "nvdxt.exe -dxt1a -nmips 4 -Sinc -quality_highest -file"

### --help output

    $ mapconv -h

    USAGE: 

       mapconv  [-j <feature list file>] [-f <featuremap image>] [-l] [-i] [-z
                <texcompress program>] [-c <compression>] -x <max height> -n
                <min height> [-o <output .smf>] [-e <tile file>] [-g <Geovent
                image>] [-y <typemap image>] -m <metalmap image> -a <heightmap
                file> -t <texturemap file> [--] [-v] [-h]

    Where: 

       -j <feature list file>,  --featurelist <feature list file>
         (value required)  A file with the name of one feature on each line.
         (Default: fs.txt). See README.txt for details.

       -f <featuremap image>,  --featuremap <featuremap image>
         (value required)  Feature placement file, xsize by ysize. See
         README.txt for details.

       -l,  --lowpass
         Lowpass filters the heightmap

       -i,  --invert
         Flip the height map image upside-down on reading.

       -z <texcompress program>,  --texcompress <texcompress program>
         (value required)  Name of companion program texcompress from current
         working directory.

       -c <compression>,  --compress <compression>
         (value required)  How much we should try to compress the texture map.
         Default 0.8, lower -> higher quality, larger files.

       -x <max height>,  --maxheight <max height>
         (required)  (value required)  What altitude in spring the max(0xff or
         0xffff) level of the height map represents.

       -n <min height>,  --minheight <min height>
         (required)  (value required)  What altitude in spring the min(0) level
         of the height map represents.

       -o <output .smf>,  --outfile <output .smf>
         (value required)  The name of the created map file. Should end in
         .smf. A tilefile (extension .smt) is also created.

       -e <tile file>,  --externaltilefile <tile file>
         (value required)  External tile file that will be used for finding
         tiles. Tiles not found in this will be saved in a new tile file.

       -g <Geovent image>,  --geoventfile <Geovent image>
         (value required)  The decal for geothermal vents; appears on the
         compiled map at each vent. (Default: geovent.bmp).

       -y <typemap image>,  --typemap <typemap image>
         (value required)  Type map to use, uses the red channel to decide
         type. types are defined in the .smd, if this argument is skipped the
         map will be all type 0

       -m <metalmap image>,  --metalmap <metalmap image>
         (required)  (value required)  Metal map to use, red channel is amount
         of metal. Resized to xsize / 2 by ysize / 2.

       -a <heightmap file>,  --heightmap <heightmap file>
         (required)  (value required)  Input heightmap to use for the map, this
         should be in 16 bit raw format (.raw extension) or an image file. Must
         be xsize*64+1 by ysize*64+1.

       -t <texturemap file>,  --intex <texturemap file>
         (required)  (value required)  Input bitmap to use for the map. Sides
         must be multiple of 1024 long. xsize, ysize determined from this file:
         xsize = intex width / 8, ysize = height / 8.

       --,  --ignore_rest
         Ignores the rest of the labeled arguments following this flag.

       -v,  --version
         Displays version information and exits.

       -h,  --help
         Displays usage information and exits.

       Converts a series of image files to a Spring map. This just creates the
       .smf and .smt files. You also need to write a .smd file using a text
       editor.

## Links

- <a href="http://code.google.com/p/mapc/" class="external free" rel="nofollow">http://code.google.com/p/mapc/</a>
- <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=18533" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=18533</a>

#### MapConv Parameters Explained

**`MapConv`** - Invoking the MapConv program (MapConv.exe)

**`-i`** - Inverts the heightmap (Always use -i, otherwise your heightmap will be flipped producing undesierable results)

**`-l`** - Lowpass option. Lowpass applies a blurring to the heightmap to smooth out rough edges and make pathing easier. If you are using a 16bit heightmap you will probably not want to use lowpass, however, many experienced mappers still use lowpass even on 16bit heightmaps due to the fact that lowpass smoothing will, in most cases, make it easier for the pathfinder to do it's job.

**`-c # (-c 0)`** - Compression level. **Deprecated, never use any other value than 0.**

**`-x # (-x 101)`** - Map maximum height. **Deprecated. Map levels can be set in the map's parameters via LUA which is a much better method.**

**`-n # (-n 100)`** - Map minimum height. **Deprecated. Map levels can be set in the map's parameters via LUA which is a much better method.**

**`-o <Mapname> (-o EvoRTS-Craggy_Creek-v01.smf`*`)` ***- -o stands for "Output Filename". Generally this is the name of your map, but realistically it can be anything as you can change the name of the map via the Map's LUA parameters. **Once compiled, NEVER rename the .smt file!**

**`-t <Filename> (t terrain.png)` **- Name of the Texture map file. **Must be in the same directory as MapConv!**

**`-a <Filename> (-a height6.png)`** - Name of the Height map file. **Must be in the same directory as MapConv!**

**`-m <Filename> (-m metal.png)`** - Name of the Metal map file. **Must be in the same directory as MapConv!**

**`-f <Filename> (-f feature.png)`** - Name of the Feature map file. **Must be in the same directory as MapConv!**

**`-z <Parameters> (-z "nvdxt.exe -dxt1a -nmips 4 -Sinc -quality_highest -file")`**- -z invokes nvdxt.exe which is a helper program that breaks the texture map into DDS tiles. The parameters listed tell nvdxt.exe how much to compress the tiles or how high of quality to strive for. There is never any reason to change the parameters from the example.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [MapConv](https://springrts.com/wiki/MapConv).*
