---
title: "3DModels:AssimpWorkflow"
source_url: "https://springrts.com/wiki/3DModels:AssimpWorkflow"
categories:
  - "3D_Models"
---
# 3DModels:AssimpWorkflow

<div class="mw-parser-output">

## Standard Assimp Workflow

This Workflow is provided for a standard 3D Modeling package using the Z = forward, Y = upwards convention, like Maya, Modo or Lightwave. You can also use Blender for ASSIMP, but it won't be covered here. Bear in mind that the default DAE/FBX exporter from Maya might present issues with the texture overriding options of the model .lua script (version tested: Maya 2017). 3rd-Party DAE exporters from Maya might suit you best.

I. In the 3D Modeling Package:

1.  Create your models as usual, after making sure all separate pieces share a single UV set. There shouldn't be more than one UV set in the file. All packages have a way to merge multiple UV sets as needed, bear in mind that in some of them you need to combine all objects first.
2.  To set the separate pieces pivot points, *don't use your modeling package's set pivot functionality*, it'll usually reset it to the world's origin (0,0,0) upon save to .dae. Instead, add an empty object / locator, move it to where you want the pivot to be, and parent the actual mesh to that object.
3.  Remember Spring uses a quite unique coordinates system, which probably won't correspond to your 3D Apps for rotation of pieces.

II\. In Photoshop:

1.  Install the DDS export/import plugin ([Other image file formats](/3dmodels-assimpworkflow#other-file-formats)). If you have an older Photoshop, you can use nVidia's older 32-bit release. If you use a newer Photoshop (tested on CC.2017) make sure you download this amazing open source plugin <a href="http://fnordware.blogspot.com.br/2014/09/dds-plug-in-for-after-effects-and.html" class="external text" rel="nofollow">here</a>
2.  With the main (diffuse) texture opened, select the areas of the UV you want to have team color on. Select \> Save Selection, click ok. A new 'Alpha 1' channel will be created and accessible from Photoshop's 'Channels' panel, usually docked as a tab next to 'Layers'.
3.  Use 'Levels' (Ctrl+L) to make sure you have no pure black or white in the Alpha Channel. First select the Alpha Channel from the Channels tab of the Layer panel. In the 'Output Levels' box (at the bottom) set the left field to 5 and the right field to 250.
4.  Click 'Save As', select DDS file format. Make sure to keep 'Alpha Channels' selected
5.  In the 'DDS Options' panel, select Format 'DXT5' (for main/team texture), keep 'Mipmap' and the Alpha Channel enabled (usually 'Alpha 1'). No need to mess with anything else, defaults are fine. Save the texture to your mod's 'unittextures' folder.
6.  Now it's time to create your 2nd texture. *If you don't, the model will show all transparent in-game and you'll keep scratching your head.* A quick way to do that, if you don't want to spend time properly separating the channels, is to turn the RGB image into grayscale (Image \> Adjust \> Hue Saturation, set Saturation to 0). Now select the Alpha Channel again, hit D (default colors) then Ctrl+Delete (Fill layer with bg color, white in this case).
7.  Save the 2nd texture as DDS to your mod's 'unittextures' folder too, this time using DXT1 format, with Alpha selected.

III\. In Spring:

1.  Place your spanking new DDS textures in the '\unittextures' folder of your game/mod
2.  In your unit's .lua file (the UnitDef one), set object = "3dmeshname.dae", replacing the filename with your own model name of course. You need to add the .dae extension for Spring to load this file instead of searching for an .s3o file
    1.  Attention: For the FeatureDef property of the UnitDef, its inner 'object' value shouldn't take the extension, or else Spring will fail loading it. Also make sure the corpse property is set to that same value. Eg.:

<!-- -->

           corpse = "3dmeshname",
            featuredefs = {
                dead = {
                    object = "3dmeshname",
                }
            }

1.  Place your .dae file in the objects3d folder
2.  Add a new .lua file to the objects3d folder, in our case "3dmeshname.dae.lua"
3.  Add the following code to it, editing the field values as needed. \`tex2\` is commented out, but your 2nd unit texture (for reflectivity/glow/clipping) may also be defined here.

<!-- -->

       model = {
              radius = 25.0,
              height = 40,
              tex1 = "3dmeshname_tex.dds",
              tex2 = "3dmeshname_tex2.dds",
              midpos = {0,0,0},
        }
        return model

Done. Go test your new unit model and texture in-game.

## Other File Formats

DDS is a native nVidia format, it holds all mipmaps and has many great image compression algorithms. Bear in mind that the image packed inside DDS can't be altered (like "flipped vertically") through commands in the model configuration .lua file. If you don't want to use DDS for any reason, like not having support in your image app, make sure to use TARGA (.TGA) 32-bits. That's because, although ASSIMP also supports JPG, PNG, and BMP, the first has no support for alpha channels and the other two, for optmization reasons, may embed the alpha channel in a non-standard way. In Photoshop, until version CS6, PNG and BMP saved their alpha channels separately, after that version and up to the latest (CC.2017 at the time of this writing) it embeds the alpha information in the RGB channels. TARGA format always saves the alpha channel separately, as expected by ASSIMP.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [3DModels:AssimpWorkflow](https://springrts.com/wiki/3DModels:AssimpWorkflow).*
