---
title: "S3o using blender"
source_url: "https://springrts.com/wiki/S3o_using_blender"
categories:
  - "3D_Models"
---
# S3o using blender

<div class="mw-parser-output">

## motivation

This guide helps you to create a '.s3o' unit for spring using:

- 'blender' - for 3d moddeling
- 'gimp' - for texturing (or similar tools for 2d art)

## The Tools

First download/install blender, then install a blender-compatible python version. The command shell window for blender will tell you which version of python it was compiled with, get specifically that version of python. Finally download the exporter for blender, found at \[1\].

Once all is installed you can either work from scratch or start working based on a template \[2\]. If you start from scratch, have a look at \[1\] to meet all requirements for the exporter script, such as naming conventions and necessary empties.

## Editing and Exporting

The parenting system of blender is used to find the chain of children for exporting. Each child must have a unique name which can later be used for rigging.

Important: the model MUST have exactly two textures:

- 1\. texture RGBA32 where:
  - RGB is used for coloring and A is used for team-coloring

<!-- -->

- 2\. texture RGBA32 where:
  - R for glow
  - G for reflectivity
  - B 'unassigned' (mod dependent)
  - A for transparency (standard ARB shader supports only 1 bit that is: either render the pixel, or not)

### Notes on working with the Template

Everything should be properly configured for export, with necessary empties etc present. If objects are hidden from view for better editing, press ALT+H to unhide all objects.

When you start working on the base mesh, remember not to delete the object itself. Go into Edit Mode, select all vertices and delete them. Then add primitives/vertices/... to your empty mesh of the still-valid base object.

After meshing out your model, remember to check whether you need to move/scale the empties that you see in the node viewer. The cubic empty sets the ground midpoint of the object, the arrow empty is used for height purposes and the spheric empty defines the model's boundary box.

## Notes on the export step

The active selection does not influence the exporter therefore you don't need to select any object (still you can) to make a valid export. The exporter will loop over all objects in the scene automatically.

Please note that the template you can download from \[2\] also includes a modified exporter script for blender that allows it to export the objects even while cameras and light setups are present in the scene for preview-rendering.

## Deployment & Testing

Copy the '.s3o' in the folder:

- /mods/modname/objects3d/

While textures go into:

- /mods/modname/unittextures/

As your first model is a unit replacement, don't forget to modify the unitname.fbi (in case of the 'armsolar' replacement: use armsolar.fbi) and add your model there.

- /mods/modname/units/armsolar.fbi

WARNING: **when using .s3o you have to add a suffix, else spring will crash!**

Open the '/mods/modname/units/armsolar.fbi' and you will see:

### units/armsolar.fbi: Valid for 3do

    [UNITINFO] {
     unitname=armsolar;
     name=Solar Collector;
     description=Produces Energy;
     acceleration=0;
     activateWhenBuilt=1;
     ...

we have to modify this in order to make it s3o aware with:

### units/armsolar.fbi: Valid for s3o

    [UNITINFO] {
     unitname=armsolar.s3o;
     name=Solar Collector;
     description=Produces Energy;
     acceleration=0;
     activateWhenBuilt=1;
     ...

## Links

- \[1\] <a href="http://springrts.com/phpbb/viewtopic.php?f=9&amp;t=17026" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=9&amp;t=17026</a>
- \[2\] <a href="http://www.lastlog.de/misc/s3o-template.zip" class="external free" rel="nofollow">http://www.lastlog.de/misc/s3o-template.zip</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [S3o using blender](https://springrts.com/wiki/S3o_using_blender).*
