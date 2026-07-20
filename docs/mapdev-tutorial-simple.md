---
title: "Mapdev:Tutorial Simple"
source_url: "https://springrts.com/wiki/Mapdev:Tutorial_Simple"
categories:
  - "Map_Dev"
---
# Mapdev:Tutorial Simple

<div class="mw-parser-output">

## Beginners Tutorial Stage 1

This beginners tutorial is aimed at getting you from nothing, to something simple which you can build upon.

- We'll start with the height map, defining the structure of the terrain
- Then the metalmap, a resource scheme built into the spring engine
- The diffuse texture, defining the colour of the terrain
- The minimap, for when selecting the map in the game lobby
- The grass map, for that extra flourish of detail
- Finally set up the start positions

## What you will need

- An image editor, such as <a href="http://www.gimp.org/" class="external text" rel="nofollow">GIMP</a> or <a href="http://www.adobe.com/products/photoshop.html" class="external text" rel="nofollow">Adobe Photoshop</a>, <a href="http://en.wikipedia.org/wiki/List_of_raster_graphics_editors#List" class="external text" rel="nofollow">etc</a>
- <a href="http://www.7-zip.org/" class="external text" rel="nofollow">7zip</a>
- Windows - [MapConv](/mapconv), Linux - [MapConvNG](/mapconvng)
- a copy of the map blueprint <a href="https://github.com/jk3064/Map-Blueprint/archive/master.zip" class="external text" rel="nofollow">archive</a>

There are a multitude of other tools you can use to make maps, however for the purposes of this beginners tutorial, these are the only ones you will need. Check the [tools](/mapdev-main#tools) section for more information.

## Download

- <a href="http://springfiles.com/spring/other/mapdev-stage1-working-files" class="external text" rel="nofollow">Download</a> the working files
- <a href="http://springfiles.com/spring/spring-maps/mapdev-stage1" class="external text" rel="nofollow">Download</a> the completed map archive

## Preparation

1.  Extract the mapcontainer.sdd folder from the blueprint archive into your working directory.

    Your directory structure should look like this:

        working directory
          |-mapcontainer.sdd/
            |-LuaGaia/
            |-mapconfig/
            |-maphelper/
            |-maps/
            |-mapinfo.lua
            |-mapoptions.lua

2.  Rename the mapcontainer.sdd folder to the name of your map, eg. mymap.sdd

3.  Edit the following variables in the mapinfo.lua file, ignore the rest for now.
    - name
    - shortname
    - description
    - author
    - version (just put like v1 or something in here)

## Create Height map

For this tutorial we will be creating a 4x4 size map, which is relatively small. Typically maps will be 8x8 (for a 1v1) or larger, but entirely depends on the game you are targeting.

1.  Check the [height](/mapdev-height) page to get our image dimensions. In our case a 4x4 map yields a image resolution of 257x257 pixels
2.  Create a 257x257 greyscale image using your image editor
3.  Draw the terrain
4.  Save the image to your working directory, call it heightmap.png

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-tip.png"><img src="/images/Icon-tip.png" decoding="async" width="48" height="48" alt="Icon-tip.png" /></a></td>
<td>Tip</td>
</tr>
<tr>
<td>Black represents the lowest elevation on the map, white represents the highest, in between lies all the shades of grey. Hard edges in the image will be cliffs, and smooth gradients will be ramps.</td>
</tr>
</tbody>
</table>

|  |  |
|----|----|
| [<img src="/images/Mapdev-height.png" decoding="async" width="256" height="256" alt="Mapdev-height.png" />](/images/Mapdev-height.png) | [<img src="/images/Mapdev-height-example.png" decoding="async" width="455" height="256" alt="Mapdev-height-example.png" />](/images/Mapdev-height-example.png) |
| Example Height Map | Ingame Result |

Example {.wikitable}

### Edit mapinfo.lua

1.  Open the mapinfo.lua file in a text editor

2.  Change the `minHeight` and `maxHeight` variables to `10` and `256` respectively\
    These values control the overall height of the terrain, and will be unique to your map. After loading up the map in game you may want to revisit and tweak these values to get the best result.\
    The resulting portion of code should appear like this:

        local mapinfo = {
           ...
           smf = {
              minHeight = 10,
              maxHeight = 256,
              ...
           },
           ...
        }

## Create Metal Map

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-caution.png"><img src="/images/Icon-caution.png" decoding="async" width="48" height="48" alt="Icon-caution.png" /></a></td>
<td>Caution</td>
</tr>
<tr>
<td>There are several games for Spring which use their own resourcing system. If you are creating a map for one of those games, a metal map may not be necessary, however it is always nice if you can make your maps as compatible with other games as possible, but this is a choice left entirely up to you.</td>
</tr>
</tbody>
</table>

1.  Check the [metal](/mapdev-metal) page to get our image dimensions. In our case a 4x4 map yields an image resolution of 128x128 pixels
2.  Create a 128x128 RGB image using your image editor
3.  Paint the whole image black
4.  Paint full red spots 6 or so pixels in diameter on the places where you want metal to appear in game.
5.  Save the image to your working directory, call it metalmap.png

|  |  |
|----|----|
| [<img src="/images/Mapdev-metal.png" decoding="async" width="256" height="256" alt="Mapdev-metal.png" />](/images/Mapdev-metal.png) | [<img src="/images/Mapdev-metal-example.png" decoding="async" width="455" height="256" alt="Mapdev-metal-example.png" />](/images/Mapdev-metal-example.png) |
| Example Metal Map | Ingame Result |

Example {.wikitable}

### Edit mapinfo.lua

1.  Open the mapinfo.lua file in a text editor

2.  Change the `maxMetal ` and the `extractorRadius` variables to `6.0` and `32.0` respectively\
    These variables control the maximum amount of metal that a metal extractor can extract at full capacity, and the radius that a metal extractor will be able to draw from.\
    The resulting portion of code will appear thus:

        local mapinfo = {
           ...
           maxMetal = 6.0,
           extractorRadius = 32.0,
           ...
        }

## Create Diffuse Texture

1.  Check the [diffuse](/mapdev-diffuse) page to get our image dimensions. In our case a 4x4 map yields an image resolution of 2048x2048 pixels
2.  Create a 2048x2048 RGB image using your image editor
3.  Paint your ground colour in such a way that it compliments the height of the terrain, and metal spots.
4.  Save the image to your working directory, call it diffuse.png

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-tip.png"><img src="/images/Icon-tip.png" decoding="async" width="48" height="48" alt="Icon-tip.png" /></a></td>
<td>Tip</td>
</tr>
<tr>
<td>It may be useful to use the heightmap.png and metalmap.png images as a starting points, scaling them up to size, and then painting over the top.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-caution.png"><img src="/images/Icon-caution.png" decoding="async" width="48" height="48" alt="Icon-caution.png" /></a></td>
<td>Caution</td>
</tr>
<tr>
<td>The larger the map the greater the file size this texture will be, a 4x4 map at 2048x2048 the diffuse texture image is already at 5.4mb, imagine a 32x32 size map, it would be in the hundreds of megabytes. Working with large textures is difficult, and requires good hardware.</td>
</tr>
</tbody>
</table>

|  |  |
|----|----|
| [<img src="/images/Mapdev-diffuse.jpg" decoding="async" width="256" height="256" alt="Mapdev-diffuse.jpg" />](/images/Mapdev-diffuse.jpg) | [<img src="/images/Mapdev-diffuse-example.png" decoding="async" width="455" height="256" alt="Mapdev-diffuse-example.png" />](/images/Mapdev-diffuse-example.png) |
| Example Diffuse Map | Ingame Result |

Example {.wikitable}

## Create Mini Map

The [mini-map](/mapdev-minimap) is a thumbnail image of the the whole map displayed in lobbies when selecting maps.

1.  Load up your diffuse.png image
2.  Scale the image to exactly 1024x1024 pixels
3.  Save the image to your working directory, call it mini.png

## Create Grass Map

Grass adds additional depth to your map, giving it a little bit extra.

1.  Check the [grass](/mapdev-grass) page to get our image dimensions. In our case a 4x4 map yields a image resolution of 64x64 pixels
2.  Create a 64x64 RGB image using your image editor
3.  Paint the image fully black to begin with
4.  Paint varying strengths of blue for where you want the grass to show up.
5.  Save the image to your working directory, call it grassmap.png

|  |  |
|----|----|
| [<img src="/images/Mapdev-grass.png" decoding="async" width="256" height="256" alt="Mapdev-grass.png" />](/images/Mapdev-grass.png) | [<img src="/images/Mapdev-grass-example.png" decoding="async" width="455" height="258" alt="Mapdev-grass-example.png" />](/images/Mapdev-grass-example.png) |
| Grass map | In Game Result |

Example {.wikitable}

## Define Start Positions

considering the small size of the map we will only define two teams

1.  Open the mapinfo.lua file in a text editor

2.  Locate the teams subtable and delete the lines for teams 2 and 3

3.  Edit the `x` and `z` coordinate for each team to define their start location\
    The coordinates for spring relate 1:1 with the pixels in the diffuse map. Starting at the top left of the image at (0,0). `x` increases horizontally to the right, `z` increases vertically downwards.\
    The code should look similar to this:

        local mapinfo = {
          ...
          teams = {
            [0] = {startPos = {x = 256, z = 1024&#125;&#125;,
            [1] = {startPos = {x = 1792, z = 1024&#125;&#125;,
          },
          ...
        }

|  |
|----|
| [<img src="/images/Mapdev-coords.png" decoding="async" width="256" height="256" alt="Mapdev-coords.png" />](/images/Mapdev-coords.png) |
| Coordinates |

## Review

From the tutorial we have learned how to make the:

- Height map
- Diffuse texture
- Metal map
- Mini map
- Grass map
- Start locations

Your directory structure should look similar to this:

    working directory
      |-mymapname.sdd/
      | |-LuaGaia/
      | |-mapconfig/
      | |-maphelper/
      | |-maps/
      | |-mapinfo.lua
      | |-mapoptions.lua
      |-grassmap.png
      |-heightmap.png
      |-metalmap.png
      |-diffuse.png
      |-minimap.png

Now we need to get the map loaded into the game

## Finalizing

Continue to [this page](/mapdev-tutorial-finalizing) to compile, test and archive your map for distribution.

## I want more

Continue to [stage two](/mapdev-tutorial-intermediate)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:Tutorial Simple](https://springrts.com/wiki/Mapdev:Tutorial_Simple).*
