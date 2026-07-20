---
title: "Mapdev:Tutorial Intermediate"
source_url: "https://springrts.com/wiki/Mapdev:Tutorial_Intermediate"
categories:
  - "Map_Dev"
---
# Mapdev:Tutorial Intermediate

<div class="mw-parser-output">

## Beginners Tutorial Stage 2

We continue on from [stage 1](/mapdev-tutorial-simple) of the beginners tutorial to add finer detail for the landscape, specular highlights, features like trees, rocks etc. And change the lighting conditions.

## What you will need

- An image editor, such as <a href="http://www.gimp.org/" class="external text" rel="nofollow">GIMP</a> or <a href="http://www.adobe.com/products/photoshop.html" class="external text" rel="nofollow">Adobe Photoshop</a>, <a href="http://en.wikipedia.org/wiki/List_of_raster_graphics_editors#List" class="external text" rel="nofollow">etc</a>
- <a href="http://www.7-zip.org/" class="external text" rel="nofollow">7zip</a>
- <a href="http://springfiles.com/spring/other/mapdev-stage1-working-files" class="external text" rel="nofollow">The files</a> we used in the [first stage](/mapdev-tutorial-simple)
- [Spring Features](/spring-features) - <a href="http://springfiles.com/spring/tools/spring-features" class="external text" rel="nofollow">archive</a>

There are a multitude of other tools you can use to make maps, however for the purposes of this beginners tutorial, these are the only ones you will need. Check the [tools](/mapdev-main#tools) section for more information.

## Download

- <a href="http://springfiles.com/spring/other/mapdev-stage2-working-files" class="external text" rel="nofollow">Download</a> the finished working files
- <a href="http://springfiles.com/spring/spring-maps/mapdev-stage2" class="external text" rel="nofollow">Download</a> the completed map archive

## Map Features

Map features are the extra bits and bobs added to a map that give it extra bling eg. bushes, trees, houses, rocks etc. You can bundle them with your map, or you can create a dependency to external archives like [Spring Features](/spring-features). For this tutorial we will be depending on spring features.

<table>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-tip.png"><img src="/images/Icon-tip.png" decoding="async" width="48" height="48" alt="Icon-tip.png" /></a></td>
<td>Tip</td>
</tr>
<tr>
<td>There is not a simple, solid, mature way to cover your map with features yet. Provided here are instructions for the simplest method, but its very time consuming and tedious. There are better methods that yield good results, you can find them listed in the <a href="/mapdev-features">features</a> page.</td>
</tr>
</tbody>
</table>

|  |  |
|----|----|
| [<img src="/images/Mapdev-features-without.jpg" decoding="async" width="341" height="256" alt="Mapdev-features-without.jpg" />](/images/Mapdev-features-without.jpg) | [<img src="/images/Mapdev-features-with.jpg" decoding="async" width="341" height="256" alt="Mapdev-features-with.jpg" />](/images/Mapdev-features-with.jpg) |
| Without Features | With Features |

Example {.wikitable}

1.  move the downloaded [Spring Features](/spring-features) archive to your spring games folder

2.  Edit your mapinfo.lua file to include spring features as a dependency

         depend      = {"Map Helper v1","Spring Features 1.0"},

3.  Edit the ./mymap.sdd/mapconfig/featureplacer/set.lua file

4.  Under the `objectlist` subtable, add lines like the one below to place a feature

        { name = 'name', x = 0 , z = 0 , rot = "0"},

    - The names of the features are specified in the feature folder within the map spring features archive
    - Coordinate system is the same as when placing the start positions:
    - `rot` is the rotation around the `y` axis.

    eg.

           objectlist = {
              { name = 'name', x = 0 , z = 0 , rot = "0"},
              { name = 'name', x = 0 , z = 0 , rot = "0"},
              { name = 'name', x = 0 , z = 0 , rot = "0"},
              { name = 'name', x = 0 , z = 0 , rot = "0"},
           },

|  |
|----|
| [<img src="/images/Mapdev-coords.png" decoding="async" width="256" height="256" alt="Mapdev-coords.png" />](/images/Mapdev-coords.png) |

## Specular Map

The [specular](/mapdev-specular) map defines how shiny and the colour of the shine that the terrain is, it is useful for ice & snow, polished rock, metal, or wet ground types. The Specular map can be any size, and is stretched over the terrain.

|  |  |
|----|----|
| [<img src="/images/Mapdev-spec_without.jpg" decoding="async" width="320" height="165" alt="Mapdev-spec without.jpg" />](/images/Mapdev-spec_without.jpg) | [<img src="/images/Mapdev-spec_with.jpg" decoding="async" width="320" height="165" alt="Mapdev-spec with.jpg" />](/images/Mapdev-spec_with.jpg) |
| Without Specular Map | With Specular Map |

Example {.wikitable}

1.  Create a 1024x1024 RGB image
2.  Paint it such that only the areas you wish to be shiny have colour,
3.  Save the image to your working directory as spec_color.png
    |  |
    |----|
    | [<img src="/images/Mapdev-spec_color.jpg" decoding="async" width="256" height="256" alt="Mapdev-spec color.jpg" />](/images/Mapdev-spec_color.jpg) |
    | Example Specular Color Map |

    Example {.wikitable}
4.  Create another 1024x1024 greyscale image
5.  Paint it such that black is matt finish ie. light will be reflected no matter the viewing angle, and white is reflective finish ie light gets reflected at increasingly sharper viewing angle. you will probably want to keep it mostly grey to white.
    <table>
    <tbody>
    <tr>
    <td rowspan="2"><a href="/images/Icon-caution.png"><img src="/images/Icon-caution.png" decoding="async" width="48" height="48" alt="Icon-caution.png" /></a></td>
    <td>Caution</td>
    </tr>
    <tr>
    <td>Be careful not to have any fully black pixels, as it will cause artifacts when the specular highlights are multiplied.</td>
    </tr>
    </tbody>
    </table>
6.  Save the image to your working directory as spec_exp.png
    |  |
    |----|
    | [<img src="/images/Mapdev-spec_exp.jpg" decoding="async" width="256" height="256" alt="Mapdev-spec exp.jpg" />](/images/Mapdev-spec_exp.jpg) |
    | Example Specular Exponent Map |

    Example {.wikitable}
7.  Combine the two images into one 1024x1024 RGBA image
8.  Save the result as "working directory"/mymapname.sdd/maps/specular.png

## Detail

[Detail maps](/mapdev-detail) make the ground look great even when you are really close to it.

<table>
<caption>Example</caption>
<tbody>
<tr>
<td><a href="/images/Mapdev-splat-without.jpg"><img src="/images/Mapdev-splat-without.jpg" decoding="async" width="330" height="170" alt="Mapdev-splat-without.jpg" /></a></td>
<td><a href="/images/Mapdev-splat-with.jpg"><img src="/images/Mapdev-splat-with.jpg" decoding="async" width="330" height="170" alt="Mapdev-splat-with.jpg" /></a></td>
</tr>
<tr>
<td>Default Single Detail Map</td>
<td>Multiple Detail Maps</td>
</tr>
<tr>
<td colspan="2"><em>* Click on images for higher res</em></td>
</tr>
</tbody>
</table>

### Creating the details map

1.  Collect 4 detail textures that you would like to apply to your terrain and save them to your working directory. The detail textures will need to be tilable, and of the same resolution, resize them if necessary.
2.  Save the detail textures to your working directory as detail_1.png (detail_2.png etc.)
3.  Combine the 4 detail textures into an RGBA image.
4.  Save the combined result to "working directory"/mymap.sdd/maps/details.png

|  |  |
|----|----|
| [<img src="/images/Mapdev-details.gif" decoding="async" width="256" height="256" alt="Mapdev-details.gif" />](/images/Mapdev-details.gif) | [<img src="/images/Mapdev-details.png" decoding="async" width="256" height="256" alt="Mapdev-details.png" />](/images/Mapdev-details.png) |
| Individual Detail Textures | Combined Result |

Example {.wikitable}

### Creating the details distribution map

4.  For each of the four detail textures:
    1.  Create an 512x512 greyscale image
    2.  Paint where you would like the detail texture to show, white for full strength, black for zero strength.
    3.  Save the image to your working directory as detail_1_dist.png (detail_2_dist.png etc.)
5.  Combine the 4 detail distribution maps into one RGBA image
6.  Save the result to "working directory"/mymap.sdd/maps/details_dist.png

|  |  |
|----|----|
| [<img src="/images/Mapdev-ddist.gif" decoding="async" width="256" height="256" alt="Mapdev-ddist.gif" />](/images/Mapdev-ddist.gif) | [<img src="/images/Mapdev-ddist.png" decoding="async" width="256" height="256" alt="Mapdev-ddist.png" />](/images/Mapdev-ddist.png) |
| Detail Distribution maps | Combined Result |

Example {.wikitable}

### Edit mapinfo.lua

1.  Open mapinfo.lua in a text editor
2.  Tweak the `texScales` and `texMults` values to achieve a good look.

<!-- -->

       splats = {
          texScales = {0.02, 0.02, 0.01, 0.02},
          texMults  = {1.0, 0.7, 0.4, 1.0},
       },

|  |
|----|
| [<img src="/images/Map_measure.png" decoding="async" width="512" height="512" alt="Map measure.png" />](/images/Map_measure.png) |
| Splat Scales Illustrated |

## Lighting

could be fun to explain link to Mapdev:lighting

|  |  |
|----|----|
| FIXME: (Code goes here) | FIXME: (example image goes here) |
| FIXME: (Code goes here) | FIXME: (example image goes here) |
| FIXME: (Code goes here) | FIXME: (example image goes here) |
| Example lighting variables | In game result |

Examples {.wikitable}

## Review

From this tutorial you have been able to really increase the detail level of your map using: features, specular highlights, detail splatting and lighting.

Working directory should look something similar to this:

    working directory
      |-mymapname.sdd/
      | |-features/
      | |-LuaGaia/
      | |-mapconfig/
      | | |-featureplacer/
      | | | |-set.lua
      | |-maphelper/
      | |-maps/
      | | |-ddist.png
      | | |-details.png
      | | |-mapdev-stage2.smf
      | | |-mapdev-stage2.smt
      | | |-specular.png
      | |-objects3d/
      | |-unittextures/
      | |-mapinfo.lua
      | |-mapoptions.lua
      |-ddist1.png
      |-ddist2.png
      |-ddist3.png
      |-ddist4.png
      |-detail_1.png
      |-detail_2.png
      |-detail_3.png
      |-detail_4.png
      |-diffuse.png
      |-grasmap.png
      |-heightmap.png
      |-metalmap.png
      |-minimap.png
      |-spec_color.png
      |-spec_exp.png

## Finalizing

Continue to [this page](/mapdev-tutorial-finalizing) to compile and archive your map for play

## I Want More

This concludes the Beginners tutorial, there are loads more things you can do with maps so have a look through the [documentation](/mapdev-main) and think out of the box

FIXME: (show pictures of novel concepts, like bridges, scripted terrain, map borders etc.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:Tutorial Intermediate](https://springrts.com/wiki/Mapdev:Tutorial_Intermediate).*
