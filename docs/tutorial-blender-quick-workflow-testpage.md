---
title: "Tutorial blender quick workflow testpage"
source_url: "https://springrts.com/wiki/Tutorial_blender_quick_workflow_testpage"
categories:
  - "Emmanuel"
---
# Tutorial blender quick workflow testpage

<div id="each-step-for-make-a-model-in-blender-and-export-in-.dae-format-to-blender-and-make-a-texture-for-it" class="section mw-parser-output">

## each step for make a model in blender and export in .dae format to blender and make a texture for it

required : blender2.65 paint.net or gimp springrts 0.91 or more

### blender basic usage :

#### blender default keys:

wheel mouse zoom midle mouse rotate view shift midle mouse move view keypad 0 camera keypad 1 3 7 orthogonal views keypad 5 perspective onn off left mouse click select right mouse click move cursor midle mouse click unselect when B or C key B box select C circle select (wheel for scale the circle) shift S snap P separate ctrl J join ctrl P parent alt P unparent G move S scale E extrud use local axe (piece axes) :double key the axe (G+z+z) or mode local than global scaling all else an axee :shift axe ( S+shift+z)

- ===the Windows in blender :===

<!-- -->

- views

3dview edit windows tabs : edit object modes (face edge vertice when edit), magnet to grid , wireframe color textured propreties seting windows uvmap uvamp window info add mesh save load files infolog windows

- "3D View" windows

z switch to wireframe or material mode show TAB switch to edit mode or object mode

- "info" windows

open save file export import /colladata(only selected to switch) add mesh plane cube circle UVsphere (F6 for edit the number of ring and segment and size) optionnaly :add lamp and camera for make render

- "properties" windows

tabs are: add material alow making uvmap colored (else use the same material dfor all pieces) add texture new, type:image or movie , coordinates:uv render for make picture or movies of the model object data : camera light edit

- "UVimage editor" windows

select an object in 3Dview TAB to edit mode select all A key in UV image editor open image select a image exponant of 2(1024),A key select all ,UVs / export uv layout with diferent name for each objects view/draw other objects in 3Dview windows back to object mode keep the previous piece selected and tab edit mode for the new (highlighted in UVimage editor you see in dark the other selected piece and must use scale move for all the piece can not colide on the same image this will only erxport the material color on the picture and the shapes of the faces

export model to springrts : export/colladata dae format (selection only) for springrts the model must have a main piece object where all other must be parented depending of the anim you want make in animDef lua later take care of the center of evry object because springrts will only considere them during anims

### texture uvmap :

- each piece must have a texture who will be merged in 2d editor

3dview ,edit mode , select all faces ,mesh/smart uv project , uvmap layer editor windows , UVs/export uv layer , open in gimp or paint.net , select transparent background , invert selection , copy , paste to main uvmap picture , select a the part to colorise , invert selection , copy ,paste on the color picture (same size) ,select all of the colored picture , paste on the main uvmap picture , redo for each diferent part to color

<div class="floatleft">

[<img src="/images/Blender_3D_View_F6.jpg" decoding="async" width="200" height="198" alt="Blender_3D_View_F6" />](/images/Blender_3D_View_F6.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_3D_View_Mesh_VUUnwrap_SmartUVProject.jpg" decoding="async" width="320" height="125" alt="Blender 3D View Mesh VUUnwrap SmartUVProject" />](/images/Blender_3D_View_Mesh_VUUnwrap_SmartUVProject.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_3D_View_Mesh_VUUnwrap.jpg" decoding="async" width="320" height="133" alt="Blender 3D View Mesh VUUnwrap" />](/images/Blender_3D_View_Mesh_VUUnwrap.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_3D_View_Object_Mode.jpg" decoding="async" width="320" height="62" alt="Blender 3D View Object Mode" />](/images/Blender_3D_View_Object_Mode.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_3D_View_Pivot_Point.jpg" decoding="async" width="320" height="61" alt="Blender 3D View Pivot Point" />](/images/Blender_3D_View_Pivot_Point.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_3D_View_Viewport_Shading.jpg" decoding="async" width="320" height="54" alt="Blender 3D View Viewport Shading" />](/images/Blender_3D_View_Viewport_Shading.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_Info_Add_Mesh_UV_Sphere.jpg" decoding="async" width="320" height="141" alt="Blender Info Add Mesh UV Sphere" />](/images/Blender_Info_Add_Mesh_UV_Sphere.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_info_File_Export_Colladata.jpg" decoding="async" width="320" height="259" alt="Blender info File Export Colladata" />](/images/Blender_info_File_Export_Colladata.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_info_File_Export_Colladata_Selection_Only.jpg" decoding="async" width="320" height="317" alt="Blender info File Export Colladata Selection Only" />](/images/Blender_info_File_Export_Colladata_Selection_Only.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_UV_Image_Editor_Image_Open_Image.jpg" decoding="async" width="320" height="165" alt="Blender UV Image Editor Image Open Image" />](/images/Blender_UV_Image_Editor_Image_Open_Image.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_UV_Image_Editor_UVs_Export_UV_Layout.jpg" decoding="async" width="320" height="172" alt="Blender UV Image Editor UVs Export UV Layout" />](/images/Blender_UV_Image_Editor_UVs_Export_UV_Layout.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_windows_3D_View.jpg" decoding="async" width="320" height="242" alt="Blender windows 3D View" />](/images/Blender_windows_3D_View.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_windows_info.jpg" decoding="async" width="320" height="109" alt="Blender windows info" />](/images/Blender_windows_info.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_windows_Properties.jpg" decoding="async" width="320" height="429" alt="Blender windows Properties" />](/images/Blender_windows_Properties.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_windows_UV_Image_Editor.jpg" decoding="async" width="320" height="224" alt="Blender windows UV Image Editor" />](/images/Blender_windows_UV_Image_Editor.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_3D_View_N_GLSL.jpg" decoding="async" width="320" height="293" alt="Blender 3D View N GLSL" />](/images/Blender_3D_View_N_GLSL.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_Properties_Textures_Texture_Coordinates_UV.jpg" decoding="async" width="320" height="708" alt="Blender Properties Textures Texture Coordinates UV" />](/images/Blender_Properties_Textures_Texture_Coordinates_UV.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_Properties_Textures_Texture_Open_Image.jpg" decoding="async" width="320" height="576" alt="Blender Properties Textures Texture Open Image" />](/images/Blender_Properties_Textures_Texture_Open_Image.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_Properties_Textures_Type.jpg" decoding="async" width="320" height="573" alt="Blender Properties Textures Type" />](/images/Blender_Properties_Textures_Type.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_Properties_Textures_New.jpg" decoding="async" width="320" height="200" alt="Blender Properties Textures New" />](/images/Blender_Properties_Textures_New.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_Properties_Material_New.jpg" decoding="async" width="320" height="167" alt="Blender Properties Material New" />](/images/Blender_Properties_Material_New.jpg)

</div>

<div class="floatright">

[<img src="/images/Blender_Properties_Material_Diffuse_Color.jpg" decoding="async" width="320" height="554" alt="Blender Properties Material Diffuse Color" />](/images/Blender_Properties_Material_Diffuse_Color.jpg)

</div>

\[\[ \|320px\|right\| \]\] \[\[ \|320px\|right\| \]\] \[\[ \|320px\|right\| \]\]

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Tutorial blender quick workflow testpage](https://springrts.com/wiki/Tutorial_blender_quick_workflow_testpage).*
