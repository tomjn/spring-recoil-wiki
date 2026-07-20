---
title: "3DModels:Textures"
source_url: "https://springrts.com/wiki/3DModels:Textures"
categories:
  - "3D_Models"
---
# 3DModels:Textures

<div class="mw-parser-output">

[Development](/development-main) \< [Game Development](/gamedev-main) \< 3DModels:Textures

## Textures for S3O

S3O has some tricky bits. One of them is learning to use the right texture formats to achieve your goals. Luckily for would-be content developers, Spring is very forgiving about image file-types, and allows users to make use of the TGA, PNG, BMP and DDS image file formats.

S3Os that are being rendered with Spring's ARB shaders (i.e., the default rendering pipeline) have <u>two</u> textures, each of which is supposed to be RGBA, not just RGB- i.e., 32-bit, not 24-bit. The alpha channel, which something many new modelers / painters aren't familiar with, has specific uses. If you don't know what an alpha channel is, please Google it and read a bit before continuing with this lesson.

### Texture1

This texture is used to store the color values of the model (i.e., what people usually call the "skin") and the team-color values are stored in the alpha channel, as a grayscale, where white is pure team-color, black is none at all, and all gray values are in between. This is blended with the color values, reflective and glow values to arrive at a final color in the engine. Until you have more experience with graphics programming, it's enough to know that if you don't put any colors into your alpha channel, the model won't have team-color, and if you fill it with white, you will not see your colors at all.

### Texture2

This is the "secondary" texture, but it is probably the most important, in terms of your final quality.

This texture uses RGBA, just like Texture1, but it uses each color channel indepedently, due to the way the ARB shader works. If you haven't learned to view the Channels in your images yet, this is where you should start learning, right now. To get the most out of this area of Spring (or for that matter, practically any game engine these days) it's important to understand how to work with image channels for precise control over the color values of any given pixel.

Green values are reflectivity. The more green in a given pixel, the more reflective it will be.

Red values are glow. The more red in a given pixel, the more glow it will have, overriding the light levels in a scene. A white Texture1 pixel with a totally red Texture2 pixel will always be completely white, no matter what.

Blue values do not have a use, in the standard ARB shader. There are variants of the ARB shader available, where the blue value does various things. These derivative versions of Spring's ARB shader code are Open Source, so please ask around if you want to know more about these, people will be happy to share them with you.

The alpha channel is one bit, if you're using Spring's default ARB shader. Black pixels == "clear", and will not be rendered at all. White pixels are "solid". This can be used to create "holes" in your models, etc.

### Texture Formats For S3O

Spring supports PNG, JPG, TGA, DDS, and BMP.

TGA and PNG have no performance advantages, are rendered upside-down in [upspring](/upspring) (which makes it hard to see if the final model is correct, without running the engine), and take up full texture RAM on the GPU. Neither format is recommended, but they are easier for newbies to use.

DDS is the preferred image format, and is what UpSpring was designed to use.

### General Guidelines For DDS Textures

- It is recommended to use DXT5 or DXT3 compression for Texture 1, and DXT1 with alpha channel for Texture2
- Turn on mipmaps. You MUST make all of the mipmaps. Not one, not two, not four... all of them. This means when making a DDS, it may take a few moments to compress, especially if it's large. This is normal, do not be alarmed.
- If your texture is invisible ingame or is just plain black/white, make sure you have turned on Mipmaps, set a radius and height for your model in UpSpring, and not have pure black or white backgrounds (255,255,255)/(0,0,0), set them to anything other than those.
- DDS requires specific settings, in order to reduce compression artifacts and sharpen the mipmaps so that the resulting images look their best in Spring. This gives you much more control over quality than PNG or TGA, where the end-user's hardware determines what the mipmaps look like (which frequently will look a lot worse than DDS), but it requires some study.

<a href="http://developer.nvidia.com/object/photoshop_dds_plugins.html" class="external text" rel="nofollow">However, if you have a 32-bits Photoshop, you can just get the nVidia DDS Plugin from here</a>, and use <a href="http://www.wolfegames.com/TA_Section/Standard_DDS_Settings.7z" class="external text" rel="nofollow">Argh's DDS compression settings</a>, which work well with DXT1, DXT3 and DXT5, but are not optimized for DXT5 normalmaps. Due to their intricacy, normal maps are better left uncompressed, if you can afford the extra disk space.

If you use a newer Photoshop, especially a 64-bits version which's not compatible to the older nVidia release, make sure you <a href="http://fnordware.blogspot.com.br/2014/09/dds-plug-in-for-after-effects-and.html" class="external text" rel="nofollow">download and use this amazing open source plugin instead.</a>

You can find a more detailed guide of how to set up a .dae + .dds model in Spring [here.](/3dmodels-assimpworkflow)

## Textures - Assimp Model Formats (DAE,MDL,MD3 and others except OBJ)

Assimp is a library used by Spring to handle a large variety of common model formats. In general Assimp follows the same rules for textures as S3O models but there are some issues to be aware of - especially with regards to DDS textures.

Assimp supports a metadata file (\<modelname\>.lua or \<modelname\>.\<model extension\>.lua) in the same directory as your model. The file should return a lua table that will be hereafter refered to simply as 'metadata'.

**Note 1:** It's important to know that there are 2 seperate texture loading processes. DDS textures are passed directly from Spring to the nv_dds library (NVIDIA DDS Library). All other Assimp textures are handled by Spring's S30Texture and Bitmap classes which perform loading and editing tasks via the DevIL library. For content developers the primary distinction is that DDS images cannot be modified by Spring and as a consequence *the metadata properties invertteamcolor and fliptextures have no effect on DDS.*

**Note 2:** Unlike S3O models the Assimp loader allows you to define relative paths to your texture in the metadata using the string keys tex1 and tex2.

**Issue 1:** DDS has different coordinates (y-axis flip) from other textures because it was designed for DirectX which is backwards from OpenGL and normal image orientation. Assimp can flip textures for you using fliptextures=true/false in your metadata. By default this value is false. This key has no effect on DDS however (See Note 1).

**Issue 2:** S3O textures use the alpha channel of tex1 for teamcolor however it treats opaque (0 alpha) as full teamcolor. This makes a normal JPG/PNG appear entirely as teamcolor and makes those textures hard to edit in normal tools. Assimp tries to correct this issue by inverting teamcolor automatically so "normal" textures work as expected. If you took a texture from an existing Spring model or created your texture following any existing S3O texture guide then it will be incorrect in Assimp UNLESS you create a metadata file with an invertteamcolor=false telling Assimp to leave it alone. If you create a texture/model from any other source it will just work. As far as Assimp (and common sense) is concerned existing Spring textures are busted and you should probably just invert your alpha channel in an image editor prior to moving content from S3O to Assimp. *Be aware that DDS are not automatically inverted (or controlled by inverteamcolor) so PNG/JPG and DDS textures may be the inverse of each other for teamcolor (See Note 1)*. If you convert PNG-\>DDS your models may turn red until you invert your alpha in an image editor.

**Issue 3:** Spring does not currently support per-node/per-piece textures or other multitexture arrangements. Your textures must be per-model and follow the rules for S3O (see above).

## Textures- 3DO (i.e., OTA game ports)

Textures are stored in the **UnitTextures** directory of your game. They may be Windows .BMP format at 24 bit color depth, or a Targa .TGA file in 32 bit (alpha layer) color depth.

## Rules for textures

OTA mods using 3DO models store their textures in a Texture Atlas. This is a single 2048 / 2048 image that is built by Spring automatically from the small images used as tiles in OTA. Thus, the total size of all of your 3DO textures cannot exceed 2048 / 2048. This is rarely a problem, if you're just porting an OTA mod.

### Logo Textures / Team Color

In the case of logo textures, you must edit the file **teamtex.txt** in the **UnitTextures/tatex** directory (or in your game / mod, as it will overwrite Spring's values).

Just add the name of your texture to the list, without the "00". For example, if you wanted to add ArmLogo00.bmp to the team color list, you would put ArmLogo in the teamtex.txt file. The image must have only values in the Red, Blue and Alpha channels, to function correctly as teamcolor- the Green channel should be left black. So the resulting image will look "purple". If you are not experienced working with color channels, ask somebody for help, or read some tutorials.

### Reflections

To make a texture reflect its environment, you must create a Targa file with an alpha layer with a program such as the <a href="http://gimp-win.sourceforge.net/stable.html" class="external text" rel="nofollow">GIMP</a> or <a href="http://www.adobe.com/products/tryadobe/main.jsp#product=39" class="external text" rel="nofollow">Photoshop</a>.

The procedure is the same as making team-color textures, but with two twists:

1\. <u>Don't</u> name the file in the **teamtex.txt** file.

2\. You can use all four channels- RGBA, for full colors and alpha- and the alpha layer's white / black values determine how reflective the object is. If white, that area is totally reflective. If black, it will not reflect the world at all. It should be noted that some image editors have trouble setting alpha layers to 100% and cause Spring to display the image as completely black, hence it is suggested you make it about 99%.

### Conversion from .GAF

In Total Annihilation textures were stored in /Textures/\*.gaf. If you're porting an old TA mods, there will be hundreds of textures to convert to Spring format. There is an easy way to automatically extract all the texture from all the .gaf into well named .bmp: Download <a href="http://www.planetannihilation.com/bsr/downloads/GAFDump.zip" class="external text" rel="nofollow">GAF Dump</a>. Then run GAFDump.exe, from inside the folder your textures are, and with the **-b** commandline option.

To save yourself some more trouble, we strongly suggest that you use 3DOBleacher to remove all of the "shading" versions of the textures from the mod you're porting, as well. This will save a huge amount of space on the Texture Atlas and the final results will look a lot more professional in Spring. 3DOBleacher requires some reading and a lot of work to set up, however.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [3DModels:Textures](https://springrts.com/wiki/3DModels:Textures).*
