---
title: "Basic s3o unit making guide"
source_url: "https://springrts.com/wiki/Basic_s3o_unit_making_guide"
categories:
  - "3D_Models"
---
# Basic s3o unit making guide

<div class="mw-parser-output">

## What you need:

- The Model
- The UV map
- The Textures
- The Script
- [Upspring](/upspring)

## The Model

You can make it in any of the 3d modelling programs mentioned <a href="http://taspring.clan-sy.com/wiki/Map%2C_Mod%2C_And_Unit_Development_Programs#3d_Modeling" class="external text" rel="nofollow">here.</a>

Upspring will import .OBJ, and .3DS, (.3DO is supported as well but we are supposed to be working from scratch here and not converting old units).

Importing 3DS files will have some sort of hierarchy, but with all pieces at the same level you will have to re-arrange them into the correct order using cut-paste commands.

If I'm not mistaken, .OBJ files don't have hierarchy, so there is no distinction between parts of the unit.

So for using this format you must save each part of the unit in separate files and import them individually from UpSpring. You must have at least one existing object to import to, so create an "empty" object if needed, then import the pieces following the hierarchy, or you can manually arrange them later.

For moving object origins, move part using the move tool, and then use "Apply transformation" button in object tab.

Put the saved .S3O file in the "Objects3D" folder in your mod structure files.

**IMPORTANT** **All part names in s3o must be in lower case in UpSpring.**

This will avoid issues with the script.

## The UV map

Only one UV map image is allowed, so you must make all parts use the same UV map.

It's reported that the biggest texture size of the UV map is 2048x2048.

A guide on Skinning (UV mapping) can be found <a href="http://taspring.clan-sy.com/phpbb/viewtopic.php?t=3511" class="external text" rel="nofollow">here</a>.

**\*\*Added by TA 3D:** When you want to bring in UV coordinates, go to the Texture Mapping menu again and click on Import UV coordinates from model. Since the texture is flipped vertically you have to flip the UV coordinates. Only use 3ds files for this as obj files don't have UV coordinates. I hope this helps.**\*\***

**\*\*Added by Mehere101:** This may be out of date, using Blender 2.42 RC3 I can get UV coordinates exported into the OBJ file. Make sure that you are exporting to Wavefront OBJ, and that whatever exporter you have has the UV Mapping Box checked (In blender its off by default for some reason)**\*\***

You can import .3DS models already UV mapped into UpSpring.

(But in my tests the UV map results incorrectly displayed, please fix this part if you know how to do it right)

Another way of making the UV map is importing the model first to UpSpring, either by using one .3DS file or the separate .OBJ files method.

Once you have the model imported and in the right place, use "Export Model for UV mapping" in UpSpring.

Then UV map that .OBJ file with whatever UV mapping tool of your liking, save, and then import back the UV using the "load UV map from file".

## The Textures

Quote

"There are two textures for each model, texture1 is the standard skin texture but the alpha is used for teamcolor. Texture2 uses the green channel for reflectivity and the red channel for self illumination, blue is unused so far."

(In The GIMP, what is texture will show completely black, and what is teamcolor will show transparent, showing the texture under the alpha. Which is a bit awkward if you ask me.. as you wont be able to see what is supposed to be texture, but what wont. buh!)

The value of the alpha will blend with the texture, so you can make cool teamcolor/texture transitions ;) .

(I've tested DDS format several times in The GIMP, using the export plugin, and have not been able to make these files work so far. Hopefully someone can add more information on this.). **\*\*Edit: I will do some digging to find out what the exact formats are that DDS is supposed to be saved as. TA 3D\*\***

UpSpring 1.3 has a built it texture builder that works great. Use bmps.

**\*\*Added by TA 3D:** Spring will use TGA and PNG files, but if you want the textures to work better and run more efficiently, use DDS files which is a native image format for videocards made by Nvidia. It works on any videocard, not just Nvidia's cards. NOTE: UpSpring makes the files flipped vertically so you will have to flip the UV coordinates in UpSpring. **Do not use any other format for making DDS files with UpSpring than bmp otherwise you will have problems. If you use anything else the alpha channel will screw it up. Note: The following images are png to conserve bandwith.** Here's an example of a DDS file I made for a model recently. Texture 1 Texture and Team color: Texture RGB-channels of the first dds texture file:

![fc1.png](http://www.majhost.com/gallery/3dbricks/TASPRING/fc1.png)

Team color-the alpha channel of the first dds texture file:

![fc2.png](http://www.majhost.com/gallery/3dbricks/TASPRING/fc2.png)

Texture 2 Reflectivity and Illumination: Reflection green-channel of the second dds texture file:

![fc3.png](http://www.majhost.com/gallery/3dbricks/TASPRING/fc3.png)

Illumination red-channel of the second dds texture file:

![fc4.png](http://www.majhost.com/gallery/3dbricks/TASPRING/fc4.png)

Upspring can make dds files using the S3O Texture Builder option under the Texture menu.

![menu.png](http://www.majhost.com/gallery/3dbricks/TASPRING/menu.png)

Making the first dds file.

![texture_builder.png](http://www.majhost.com/gallery/3dbricks/TASPRING/texture_builder.png)

And making the second.

![texture_builder2.png](http://www.majhost.com/gallery/3dbricks/TASPRING/texture_builder2.png)

When you want to bring in UV coordinates, go to the Texture Mapping menu again and click on Import UV coordinates from model. Since the texture is flipped vertically you have to flip the UV coordinates. If the Team color doesn't work try inverting the the Team color image using the invert box. I hope this helps. As soon as I have a working model, then I will post a pic of the above textures applied to it.**\*\***

Put the finished files in "unittextures" folder inside your mod structure.

some other words on the textures:

"alpha is a greyscale... black = no team color, white = all team colour... because Photoshop is dumb stick to 1% balck or 99% black... anything in between is "blended"... like transparency in the team colour mapped over the main texture..."

## The Script

A common script, see other wiki resources for information on what is new/changed in spring.

## The unit FBI file

In this file goes the usual information, plus one change:

the usual Objectname=UNITNAME;

must be Objectname=UNITNAME**.s3o**;

## Common Troubles

- The unit doesn't show up in game, although the "/give unitname" will work and you can see the selected base.

This is caused because the unit is underground. In the Model tab you must give your unit a center, collision sphere radius and heigth in UpSpring, you can use "estimate" which shall be fine.

- The unit texture is all black in game!

Read the texture section here. 3DOs cant be UV textured. Use .TGA format. Don't forget alpha.

- The UV seems wrong in game..

Flip the UV. In UpSpring go to, Texture Mapping\>Show UV Maps, then, edit\>Flip UVs.

- I get a "missing part" error, and the unit doesn't aim turrets or animate as indicated in the script.

See last lines in The Model part.

## Related Threads

<a href="http://taspring.clan-sy.com/phpbb/viewtopic.php?t=4519" class="external autonumber" rel="nofollow">[1]</a> <a href="http://taspring.clan-sy.com/phpbb/viewtopic.php?t=2660" class="external autonumber" rel="nofollow">[2]</a> <a href="http://taspring.clan-sy.com/phpbb/viewtopic.php?t=3766" class="external autonumber" rel="nofollow">[3]</a> <a href="http://taspring.clan-sy.com/phpbb/viewtopic.php?t=3641" class="external autonumber" rel="nofollow">[4]</a>

<a href="http://taspring.clan-sy.com/phpbb/viewtopic.php?t=4536" class="external text" rel="nofollow">Complementary information</a>

- Credits

Its all stolen from the above threads.

**extra notes:**

Texture filename can be anything; you allocate the texture to the model when you save it as a .s3o object

Object filename can be anything; the unit fbi/lua file you allocate which model to use.

Script filename must be the same name as the unit fbi/lua filename, unless you are using lua animation scripts, in which case you can use the script tag in the unitdef file.

*In the fbi/lua file:*

unitname is the name game refers to. ie. the one you type in the console to /give the unit.

name is the name that players will see.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Basic s3o unit making guide](https://springrts.com/wiki/Basic_s3o_unit_making_guide).*
