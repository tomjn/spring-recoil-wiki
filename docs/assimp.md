---
title: "Assimp"
source_url: "https://springrts.com/wiki/Assimp"
categories:
  - "3D_Models"
---
# Assimp

<div class="mw-parser-output">

[Development](/development-main) \< [Game Development](/gamedev-main) \< Assimp

## Assimp

Open Asset Import Library (short name: Assimp) is used in Spring for loading a number of common and well supported model formats (.3ds, .dae, .lwo, .blend - currently .obj is parsed by a different code path).

What Spring supports in its Assimp renderer:

- extended metafile (`%modelfilename%.lua` next to the modefile)
- still uses tex1 & tex2 texture system of S3O (same shader as S3O)
- 2nd texcoord
- loading of the texture filepaths from the model (don't have to be in `unittextures/`)
- when texture filepaths aren't included in the model, it searches for `%modelfilename%.*` & `%modelfilename%2.*` in `unittextures/`
- special modelpieces \`SpringHeight\` & \`SpringRadius\` Removed from version 101.0
- New in version 102.0 auto-normalize normals and tangents for all AssImp-loaded models
- New in version 95.0 allow modellers to work around <a href="http://springrts.com/mantis/view.php?id=3552" class="external text" rel="nofollow">#3552</a> (differing axes conventions between software) by recognizing a number of new piece-table keys as follows

For the root piece: Removed from version 104.0

- "xaxis" = float3, "yaxis" = float3, "zaxis" = float3 (determine global orientation of model)

For all pieces: Removed from version 104.0

- "rotAxisSigns" = float3 (determines direction of script-applied rotations around each axis)
- "rotAxisMap" = number (currently can only be 0=XYZ or 3=XZY, determines coordinate conversion)

## Assimp Textures

See [3DModels:Textures (Assimp Section)](/3dmodels-textures#textures-assimp-model-formats-28dae2cmdl2cmd3-and-others-except-obj29)

## Standard Workflow

The following Workflow is provided for a standard 3D Modeling package using the Z = forward, Y = upwards convention, like Maya, Modo or Lightwave. You can also use Blender to export models for ASSIMP, as covered in the next section.

- [3DModels:AssimpWorkflow](/3dmodels-assimpworkflow)
- [3DModels:AssimpMetadata](/3dmodels-assimpmetadata)

## Blender Workflow Tutorial

This is a stub containing a simple outline of a Blender workflow.

1.  Open an existing Blender model or import a different format through the File menu (File \> Import). You can import s3o models - complete with materials - using the <a href="https://github.com/sanguinariojoe/blender_s3o_import" class="external text" rel="nofollow">s3o import</a> plugin.
2.  Compose your model by making a series of rigid pieces, and parenting them to one another (ctrl+P). These will be imported as \`pieces\` into Spring.
3.  It is preferred to apply all scale transforms, because uneven transforms will not be tolerated by Spring. You can keep rotations, though.
4.  Blender is Z-up and Spring is Y-up. Spring will import Blender models as Z-up. If you want to fix that, add a root piece to your model, and rotate its children 90 degrees, such that their local Y-axis points up.
5.  Make sure you have a lamp in your scene while in this mode or your model will be dark. You can delete it before export.
6.  If you want to animate the model using the animation exporter <a href="https://github.com/Anarchid/blender2lus" class="external text" rel="nofollow">addon</a> later, set the rotation mode for all your pieces to be Euler ZXY.
7.  Applying texture:
    1.  In the UV/Image editor, click the image icon (Tooltip: Browse Image to be linked) to select your texture. If it's not there, click on Image \> Open Image to browse for it.
    2.  In the 3D View, select (right-click) your object and hit Tab to enter Mesh Mode. You can select multiple objects if you want to unwrap the entire model without going piece-by-piece.
    3.  Hit A to select all your faces.
    4.  In the 3D View, hit A to select all the faces there and select your image with the image icon. Assuming there's a UVMap, you should see your texture.
    5.  If you don't see any faces you'll need to add the UVMap to a new texture:
        1.  In the Properties view click on Textures (checkerboard icon).
        2.  Click on Add New Texture (plus icon).
        3.  Select Type = Image or Movie.
        4.  Under Image, click on the image icon and choose your image file.
        5.  Under Mapping, select Coordinates = UV.
        6.  Under Influence \> Diffuse, check Color and make sure it's 1.00.
    6.  To add a normalmap:
        1.  Repeat steps 5.5.1 to 5.5.5.
        2.  Under Image Sampling, check Normal Map.
        3.  Under Influence \> Geometry, check Normal. Make sure it.s 1.00.
    7.  You'll need to do this for each piece.
8.  Piece hierarchy:
    1.  Select piece A, hold shift and select piece B. Hit Ctrl+P and it will make piece A a child of piece B.
9.  Setting piece origins:
    1.  Select a piece.
    2.  Place the 3D cursor where you want the origin to be (left-click).
    3.  Click on Object \> Transform \> Origin to 3D Cursor.
    4.  You can now rotate your pieces:
        1.  Click on the dropdown "Pivot Center for Rotation/Scaling" and select Individual Origins.
        2.  Rotate.
    5.  Do this for all your pieces.
10. Preparing for Spring (this may or may not apply depending on how assimp handles your model.):
    1.  Ensure that the scales for each object in your scene are uniform (that is, x, y, and z scales are equal to each other). A quick way to ensure that is select all (a) and apply scale (ctrl+a -\> scale).
11. Save your model.
12. Select all the pieces of your model, ignore the lamp.
13. Click on File \> Export \> Collada.
14. Check "Export Only Selected" and export.
15. The dae file will be used as your object.

Don't hesitate to google for answers if you bump into questions with how to use Blender itself. It's a powerful piece of software with a lot of tutorials on how to use - the scope of this article is not teaching how to use Blender, but only how to use Blender for making Spring models.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Assimp](https://springrts.com/wiki/Assimp).*
