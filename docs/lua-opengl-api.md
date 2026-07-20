---
title: "Lua OpenGL Api"
source_url: "https://springrts.com/wiki/Lua_OpenGL_Api"
categories:
  - "Lua"
---
# Lua OpenGL Api

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua OpenGL Api

## Spring

gl.[GetSun](#getsun) (  )\
return: number sunPosX, number sunPosY, number sunPosZ

or

gl.[GetSun](#getsun) ( string "pos" )\
return: number sunPosX, number sunPosY, number sunPosZ

or

gl.[GetSun](#getsun) ( string "shadowDensity" \[, string "unit" \] )\
return: number shadowDensity

or

gl.[GetSun](#getsun) ( string "diffuse" \[, string "unit" \] )\
return: nil \| number r, number g, number b

or

gl.[GetSun](#getsun) ( string "ambient" \[, string "unit" \] )\
return: nil \| number r, number g, number b

or

gl.[GetSun](#getsun) ( string "specular" \[, string "unit" \] )\
return: nil \| number r, number g, number b

gl.[GetAtmosphere](#getatmosphere) ( string name )\
return: number r, number g, number b

New in version 101.0\
See [Spring.SetAtmosphere](/lua-unsyncedctrl#sun) for details.

gl.[GetWaterRendering](#getwaterrendering) ( string name )\
return: nil \| number r, number g, number b \| string texName \| bool active

New in version 104.0\
See [Spring.SetWaterParams](/lua-unsyncedctrl#developers) for details.

gl.[GetMapRendering](#getmaprendering) ( string name )\
return: nil \| number r, number g, number b \| bool active

New in version 104.0\
See [Spring.SetMapRenderingParams](/lua-unsyncedctrl#developers) for details.

gl.[ConfigScreen](#configscreen) ( number screenWidth, number screenDistance )\
return: nil

Used for Unit LODs.

gl.[DrawMiniMap](#drawminimap) ( bool transform = true )\
return: nil

gl.[SlaveMiniMap](#slaveminimap) ( bool mode )\
return: nil

gl.[ConfigMiniMap](#configminimap) ( number intPX, number intPY, number intSX, number intSY )\
return: nil

gl.[GetViewSizes](#getviewsizes) (  )\
return: number x, number y

## Matrices & Viewport

gl.[Viewport](#viewport) ( number x, number y, number w, number h )\
return: nil

gl.[PushMatrix](#pushmatrix) (  )\
return: nil

gl.[PopMatrix](#popmatrix) (  )\
return: nil

gl.[Translate](#translate) ( number x, number y, number z )\
return: nil

gl.[Scale](#scale) ( number x, number y, number z )\
return: nil

gl.[Scale](#scale) ( number angle, number x, number y, number z )\
return: nil

gl.[Billboard](#billboard) (  )\
return: nil

Use this to draw 2d primitives in DrawWorld().

    To render a 2D billboarded quad in the gameworld at world position x,y,z, you do the following (at a minimum; I am skipping blending / depthtesting) here:
      gl.PushMatrix()
      gl.Texture(read what you need here)
      gl.Translate(x,y,z)
      gl.Billboard()            
      gl.TexRect(x1,y1,x2,y2)
      gl.PopMatrix()

gl.[MatrixMode](#matrixmode) ( number [mode](/lua-constgl#matrixmode) )\
return: nil

gl.[LoadIdentity](#loadidentity) (  )\
return: nil

gl.[LoadMatrix](#loadmatrix) ( 16 numbers or a <a href="https://github.com/spring/spring/blob/develop/rts/Lua/LuaOpenGLUtils.cpp#L60" class="external text" rel="nofollow">matrix name</a> )\
return: nil

gl.[MultMatrix](#multmatrix) ( ??? )\
return: ???

gl.[Ortho](#ortho) ( number left, number right, number bottom, number top, number near, number far )\
return: nil

gl.[Frustum](#frustum) ( number left, number right, number bottom, number top, number near, number far )\
return: nil

gl.[PushPopMatrix](#pushpopmatrix) ( ??? )\
return: ???

gl.[ClipPlane](#clipplane) ( number intPlane, bool enable \| number A, number B, number C, number D )\
return: nil

Note: intPlane can only be 1 or 2.

## Clear

gl.[Clear](#clear) ( GL.DEPTH_BUFFER_BIT \[, number cleardepth \] )\
return: nil

or

gl.[Clear](#clear) ( GL.STENCIL_BUFFER_BIT \[, number intClearStencil \] )\
return: nil

or

gl.[Clear](#clear) ( GL.COLOR_BUFFER_BIT \| GL.ACCUM_BUFFER_BIT \[, number r, number g, number b, number a \] )\
return: nil

gl.[SwapBuffers](#swapbuffers) (  )\
return: nil

New in version 104.0\
Available only in LuaMenu, meant for frame-limited LuaMenu's that want identical content in both buffers.

## ResetState/Matrices

gl.[ResetState](#resetstate) (  )\
return: nil

DON'T USE IT UNLESS YOU KNOW WHAT YOU ARE DOING! Each call-in has different default states, but this function resets all states to the states below no matter what!

      ShadeModel = GL.SMOOTH
      Scissor    = false
      Texture    = false
      Lighting    = false,
      ColorMask  = true, true, true, true
      DepthMask  = false
      DepthTest  = false  (GL.LEQUAL)
      Culling    = false  (GL.BACK)
      LogicOp    = false  (GL.INVERT)
      AlphaTest  = false  (GL.GREATER, 0.5f)
      Blending   = true (GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA)

gl.[ResetMatrices](#resetmatrices) (  )\
return: nil

      Resets GL.TEXTURE matrix stack
      Resets GL.MODELVIEW matrix stack
      Resets GL.PROJECTION matrix stack

## Draw Basics

gl.[BeginEnd](#beginend) ( number [GLType](/lua-constgl#drawing-primitives), function \[, arg1, ... \] )\
return: nil

gl.[Color](#color) ( number r, number g, number b \[, number a \] \| table colors = { number r, number g, number b \[, number a \] } )\
return: nil

gl.[Vertex](#vertex) ( table vertex = { number x, number y, \[, number z \[, number w \]\] } )\
return: nil

or

gl.[Vertex](#vertex) ( number x, number y )\
return: nil

or

gl.[Vertex](#vertex) ( number x, number y, number z )\
return: nil

or

gl.[Vertex](#vertex) ( number x, number y, number z, number w )\
return: nil

gl.[Normal](#normal) ( table normal = { number x, number y, number z } \| number x, number y, number z )\
return: nil

gl.[EdgeFlag](#edgeflag) ( bool enable )\
return: nil

gl.[Rect](#rect) ( number x1, number y1, number x2, number y2 )\
return: nil

gl.[TexRect](#texrect) ( number x1, number y1, number x2, number y2 \[, bool flip_s, bool flip_t \| number s1, number t1, number s2, number t2 \] )\
return: nil

Texture rect.

gl.[Shape](#shape) ( number [GLtype](/lua-constgl#drawing-primitives), table elements )\
return: nil

Elements contains:

       elements = {
         [1] = { v | vertex   = { number x, number y, number z },           <font color="#55ee99">required</font>
                 n | normal   = { number x, number y, number z },           <font color="#55ee99">optional</font>
                 t | texcoord = { number x, number y },                     <font color="#55ee99">optional</font>
                 c | color    = { number r, number g, number b, number a }  <font color="#55ee99">optional</font>
         },
         etc ...
       }

gl.[SecondaryColor](#secondarycolor) ( table color = { number r, number g, number b } \| number r, number g, number b )\
return: nil

gl.[FogCoord](#fogcoord) ( number value )\
return: nil

## Display Lists

Display Lists save given vertex attributes in a static buffer, so the GPU can directly read them (without the CPU). Display Lists are a lot faster (10-60x) than standard drawing with glShape/glBeginEnd, so try to use them when ever you can. If you want to learn more about them, g00gle is your friend ;)

gl.[CreateList](#createlist) ( function \[, arg1 \[, arg2 ... \]\] )\
return: number listID

gl.[CallList](#calllist) ( number listID )\
return: nil

gl.[DeleteList](#deletelist) ( number listID )\
return: nil

## Vertex Array Objects

 Only available in "develop" branch of spring (the future 105.0+). This is conceptually similar and serve as modern OpenGL replacement to deprecated Display Lists. 

gl.[CreateVertexArray](#createvertexarray) ( number numElements, number numIndices \[, bool persistentBuffer = false \] )\
return: number bufferID

    See what elements and indices are here: http://www.opengl-tutorial.org/intermediate-tutorials/tutorial-9-vbo-indexing/ 
    numElements and numIndices define the size of for elements and indices respectively. if indices are not going to be used, then set numIndices to 0
    Persistent buffers (persistentBuffer = true) are more efficient for dynamically/often updated geometry.

gl.[UpdateVertexArray](#updatevertexarray) ( number bufferID, number elementPos, number indexPos, table tbl \| function func )\
return: bool success

    {elementPos, indexPos} define starting element in {element, index} VBO corresponding to 1st element of the supplied vertex data
    4 elements table example:
      local verts = {
        p  = {0,0,0,1,  4,0,0,1,  4,4,0,1,  0,4,0,1},
        n  = {0,1,0  ,  0,1,0  ,  0,1,0  ,  0,1,0  },
        uv = {0,0,0,0,  1,0,0,0,  1,1,0,0,  0,1,0,0},
        c0 = {1,0,0,1,  0,1,0,1,  0,0,1,1,  1,1,1,0},
        i = {0, 1, 2, 2, 1, 3},            optional, use in case of indexed VBO
        c1 = {...} }

    Alternatively Lua func can use gl.Vertex/gl.Color/gl.Normal/gl.TexCoord to define vertices, similarly how it used to be done in gl.BeginEnd.Note there is no function yet to define indices.

gl.[RenderVertexArray](#rendervertexarray) ( number bufferID, number primType \[, number firstIndex = 0, number count = numElements \] )\
return: bool success

    primType can be GL.POINTS, GL.LINE_STRIP, GL.LINE_LOOP, GL.LINES, GL.LINE_STRIP_ADJACENCY, GL.LINES_ADJACENCY, GL.TRIANGLE_STRIP, GL.TRIANGLE_FAN, GL.TRIANGLES, GL.TRIANGLE_STRIP_ADJACENCY, GL.TRIANGLES_ADJACENCY and GL.PATCHES
    firstIndex specifies the starting index in the enabled arrays.
    count specifies the number of indices to be rendered.

gl.[DeleteVertexArray](#deletevertexarray) ( number bufferID )\
return: bool success

Releases previously allocated VAO

## Text

gl.[Text](#text) ( string "text", number x, number y, number size \[, string "options" \] )\
return: nil

      options are:
        horizontal alignment:
           'c' = center
           'r' = right
        vertical alignment:
           'a' = ascender
           't' = top
           'v' = vertical center
           'x' = baseline
           'b' = bottom
           'd' = descender
        decorations:
           'o' = black outline
           'O' = white outline
           's' = shadow
        other:
           'n' = don't round vertex coords to nearest integer (font may get blurry)

gl.[GetTextWidth](#gettextwidth) ( string "text" )\
return: number width

Width in pixels, with a font size of 1.0.

gl.[GetTextHeight](#gettextheight) ( string "text" )\
return: nil \| number height, number descender, number numlines

Height in pixels, with a font size of 1.0. Further descriptions here: [GetTextHeight](/gettextheight)

gl.[BeginText](#begintext) (  )\
return: nil

If you have multiple gl.Text calls, then you can bunch them between a gl.BeginText and gl.EndText to speedup the rendering.

gl.[EndText](#endtext) (  )\
return: nil

## Unit/Feature Draw Functions

gl.[Unit](#unit) ( number unitID \[, bool rawdraw, number intLOD \] )\
return: nil

Draws a unit - on default it uses LOD, with lod\<0 it is turned off, else it defines a specific level.

gl.[UnitRaw](#unitraw) ( number unitID \[, bool rawdraw, number intLOD \] )\
return: nil

Doesn't apply worldspace-\>unit transformation! only works if *rawdraw* is true.

gl.[UnitShape](#unitshape) ( number unitDefID, number teamID, bool rawState, bool toScreen, bool opaque )\
return: nil

New in version 101.0\
The three extra boolean arguments make it so that calling only these functions is enough to get correctly rendered models; pass in 'false' for the THIRD argument to get the fixed behavior, omit it or pass in 'true' \[default\] to render with your own custom state instead. The FOURTH argument should be 'true' if in DrawScreen and 'false' (default) if in DrawWorld; any transforms for these two functions \*MUST\* include a gl.LoadIdentity call when argument \#3 is false (whether they are used in DrawWorld or in DrawScreen) the FIFTH argument determines whether the model is drawn opaque ('true' \[default\]) or with translucency ('false'); only has an effect when argument \#3 is false.

gl.[UnitMultMatrix](#unitmultmatrix) ( number unitID )\
return: nil

world space -\> unit space

gl.[UnitPieceMultMatrix](#unitpiecemultmatrix) ( number unitID, number intPiece )\
return: nil

unit space -\> piece space

gl.[UnitPiece](#unitpiece) ( number unitID, number intPiece )\
return: nil

Draws the unit piece.

gl.[UnitPieceMatrix](#unitpiecematrix) ( number unitID, number intPiece )\
return: nil

Use gl.UnitPieceMultMatrix instead!

gl.[Feature](#feature) ( number featureID )\
return: nil

gl.[FeatureRaw](#featureraw) ( number featureID \[, bool rawdraw, number intLOD \] )\
return: nil

New in version 101.0

gl.[FeatureShape](#featureshape) ( number featureDefID, number teamID, bool custom, bool drawScreen, bool opaque )\
return: nil

gl.[FeatureMultMatrix](#featuremultmatrix) ( number featureID )\
return: nil

New in version 101.0\
world space -\> feature space

gl.[FeaturePieceMultMatrix](#featurepiecemultmatrix) ( number featureID, number intPiece )\
return: nil

New in version 101.0\
feature space -\> piece space

gl.[FeaturePiece](#featurepiece) ( number featureID, number intPiece )\
return: nil

New in version 101.0\
Draws the Feature piece.

gl.[FeaturePieceMatrix](#featurepiecematrix) ( number featureID, number intPiece )\
return: nil

New in version 101.0\
Use gl.FeaturePieceMultMatrix instead!

gl.[DrawListAtUnit](#drawlistatunit) ( number unitID, number listID \[, bool midPos, number scaleX, number scaleY, number scaleZ, number degrees, number rotX, number rotY, number rotZ \] )\
return: nil

gl.[DrawFuncAtUnit](#drawfuncatunit) ( number unitID, bool midPos, function \[, arg1, ... \] )\
return: nil

## States (Blending,AlphaTest...)

gl.[Blending](#blending) ( bool enable \| number [srcmode](/lua-constgl#blendingfactorsrc), number [dstmode](/lua-constgl#blendingfactordest) )\
return: nil

or

gl.[Blending](#blending) ( string mode )\
return: nil

Mode can be set to:

    "add"
     = GL.ONE, GL.ONE

     "alpha_add"
     = GL.SRC_ALPHA, GL.ONE

     "alpha"
     = GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA

     "reset"
     = GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA

     "color"
     = GL.SRC_COLOR, GL.ONE_MINUS_SRC_ALPHA

     "modulate"
     = GL.DST_COLOR, GL.ZERO

     "disable"
     = GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA

gl.[BlendEquation](#blendequation) ( number mode )\
return: nil

gl.[BlendFunc](#blendfunc) ( number [srcmode](/lua-constgl#blendingfactorsrc), number [dstmode](/lua-constgl#blendingfactordest) )\
return: nil

gl.[BlendEquationSeparate](#blendequationseparate) ( number modeRGB, number modeAlpha )\
return: nil

Needs openGL2.0!

gl.[BlendFuncSeparate](#blendfuncseparate) ( number [srcRGB](/lua-constgl#blendingfactorsrc), number \[Lua_ConstGL#BlendingFactorDest, number [srcAlpha](/lua-constgl#blendingfactorsrc), number [dstAlpha](/lua-constgl#blendingfactordest) )\
return: nil

Needs openGL2.0!

gl.[AlphaTest](#alphatest) ( bool enable \| number [func](/lua-constgl#alphafunction-and-depthfunction), number threshold )\
return: nil

gl.[DepthTest](#depthtest) ( bool enable \| number [func](/lua-constgl#alphafunction-and-depthfunction) )\
return: nil

gl.[Culling](#culling) ( bool enable \| number [face](/lua-constgl#culling) )\
return: nil

gl.[DepthClamp](#depthclamp) ( bool enable )\
return: nil

Not always available, needs GL.NV_depth_clamp!

gl.[DepthMask](#depthmask) ( bool enable )\
return: nil

gl.[ColorMask](#colormask) ( bool masked )\
return: nil

or

gl.[ColorMask](#colormask) ( bool r, bool g, bool b, bool a )\
return: nil

gl.[LogicOp](#logicop) ( bool enable \| number [func](/lua-constgl#logicop) )\
return: nil

gl.[Fog](#fog) ( bool enable )\
return: nil

gl.[Smoothing](#smoothing) ( bool enable \| number point, bool enable \| number line, bool enable \| number polygon )\
return: nil

Removed from version 104.0

gl.[EdgeFlag](#edgeflag) ( bool enable )\
return: nil

gl.[Scissor](#scissor) ( bool enable )\
return: nil

or

gl.[Scissor](#scissor) ( number intX, number intY, number intW, number intH )\
return: nil

gl.[LineStipple](#linestipple) ( string any )\
return: nil

Use springs default line stipple.

or

gl.[LineStipple](#linestipple) ( bool enable )\
return: nil

or

gl.[LineStipple](#linestipple) ( number intFactor, number pattern )\
return: nil

gl.[PolygonMode](#polygonmode) ( number [face](/lua-constgl#culling), number [mode](/lua-constgl#polygonmode) )\
return: nil

gl.[PolygonOffset](#polygonoffset) ( bool enable \| number factor, number units )\
return: nil

gl.[PushAttrib](#pushattrib) ( \[ number [attrib](/lua-constgl#glpushattrib2829-bits) \] )\
return: nil

gl.[PopAttrib](#popattrib) (  )\
return: nil

## Stencil

gl.[StencilTest](#stenciltest) ( bool enable )\
return: nil

gl.[StencilMask](#stencilmask) ( number mask )\
return: nil

gl.[StencilFunc](#stencilfunc) ( number func, number ref, number mask )\
return: nil

gl.[StencilOp](#stencilop) ( number fail, number zfail, number zpass )\
return: nil

gl.[StencilMaskSeparate](#stencilmaskseparate) ( number [face](/lua-constgl#culling), number mask )\
return: nil

Needs OpenGL2.0!

gl.[StencilFuncSeparate](#stencilfuncseparate) ( number [face](/lua-constgl#culling), number func, number ref, number mask )\
return: nil

Needs OpenGL2.0!

gl.[StencilOpSeparate](#stencilopseparate) ( number [face](/lua-constgl#culling), number fail, number zfail, number zpass )\
return: nil

Needs OpenGL2.0!

## LineWidth & PointSize

gl.[LineWidth](#linewidth) ( number width )\
return: nil

gl.[PointSize](#pointsize) ( number size )\
return: nil

Values != 1 can break severely on ATI cards, see <a href="http://springrts.com/mantis/view.php?id=2390" class="external free" rel="nofollow">http://springrts.com/mantis/view.php?id=2390</a>

gl.[PointSprite](#pointsprite) ( bool enable \[, bool coord_replace, bool coord_origin_upper \] )\
return: nil

Needs OpenGL2.0!

gl.[PointParameter](#pointparameter) ( number v1, number v2, number v3 \[, number sizeMin, number sizeMax, number sizeFade \] )\
return: nil

Needs OpenGL2.0!

## Textures

gl.[Texture](#texture) ( \[ number texNum, \] bool enable \| string name )\
return: nil \| bool loaded

This is the only call-out that is needed to load and draw any texture in a Lua script. All you have to do is pass it a valid path to a valid png and it will use that image for drawing any subsequent textured rectangles. This is shown in the last line of the following list of valid strings for the name parameter.

name may be:

1.  12

= unitDef 12 buildpic

%34:1 = unitDef 34 s3o tex2 (:0-\>tex1,:1-\>tex2)

%-102:0 = featureDef 102 s3o tex1

!56 = lua generated texture 56 (= return value of gl.CreateTexture)

\$units = 3do textureatlas tex1

\$units1 = 3do textureatlas tex1

\$units2 = 3do textureatlas tex2

\$shadow = shadowmap

\$specular = specular cube map (removed in the latest develop)

\$reflection = reflection cube map (can be mipmaped starting from 104.0.1-714-ga29177f. Set CubeTexGenerateMipMaps=1 in settings)

\$shading = ground shading texture

\$grass = grass shading texture

\$heightmap = heightmap, the height in elmos is in the R channel (needs HeightMapTexture=1 set in spring config)

\$minimap = minimap texture

\$map_reflection = same as "\$reflection" New in version 101.0

\$sky_reflection = defined for SSMF maps that have a skyReflectModTex New in version 101.0

\$detail = detail texture New in version 101.0

\$normals = auto generated normals texture, X normal component is in r,g and b channels, Z normal component is in the A channel. If you need Y you'll need to reconstruct it form X and Z. New in version 101.0

\$ssmf_normals = SSMF normals texture New in version 101.0

\$ssmf_specular = SSMF specular texture New in version 101.0

\$ssmf_splat_distr = SSMF splat distribution texture New in version 101.0

\$ssmf_splat_detail = SSMF splat detail texture New in version 101.0

\$ssmf_splat_normals = SSMF splat normals texture New in version 101.0, used as "\$ssmf_splat_normals" or "\$ssmf_splat_normals:X", 'X' can be a value between 0 and 3, defaults to 0 if ":X" is omitted

\$ssmf_emission = SSMF emission texture New in version 101.0

\$ssmf_parallax = SSMF parallax texture New in version 101.0

\$info = currently active info texture (los, airlos, radar, jammer)\
Note that textures contain no data until user switches to their respective modes and non-active textures are not updated in the background, so will go stale

\$info_losmap = los texture (L-view)

\$info_mtlmap = metal map texture (F4-view)

\$info_hgtmap = height map texture (F1-view)

\$info_blkmap = blocking map texture (F2-view)

\$map_gbuffer_normtex = contains the smoothed normals buffer of the map in view in world space coordinates (note that to get true normal vectors from it, you must multiply the vector by 2 and subtract 1) New in version 95

\$map_gbuffer_difftex = contains the diffuse texture buffer of the map in view New in version 95

\$map_gbuffer_spectex = contains the specular textures of the map in view New in version 95

\$map_gbuffer_emittex = for emissive materials (bloom would be the canonical use) New in version 95

\$map_gbuffer_misctex = for arbitrary shader data New in version 95

\$map_gbuffer_zvaltex = contains the depth values (z-buffer) of the map in view. New in version 95\
To translate this to world position coordinates, use:

     No clip control / clipspace for depth is [-1,1]
     vec4 worldpos= viewProjectionInv * vec4(vec3(gl_TexCoord[0].st, 
     texture2D( map_gbuffer_zvaltex,gl_TexCoord[0].st ).x) * 2.0 - 1.0, 1.0);

     Default if clip control is supported / clipspace for depth is [0,1].
     vec4 worldpos= viewProjectionInv * vec4(gl_TexCoord[0].st * 2.0 - 1.0, 
     texture2D( map_gbuffer_zvaltex,gl_TexCoord[0].st ).x, 1.0);

     worldpos.xyz = worldpos.xyz / worldpos.w; 

\$model_gbuffer_normtex = contains the smoothed normals buffer of the models in view in world space coordinates (note that to get true normal vectors from it, you must multiply the vector by 2 and subtract 1) New in version 95

\$model_gbuffer_difftex = contains the diffuse texture buffer of the models in view New in version 95

\$model_gbuffer_spectex = contains the specular textures of the models in view New in version 95

\$model_gbuffer_emittex = for emissive materials (bloom would be the canonical use) New in version 95

\$model_gbuffer_misctex = for arbitrary shader data New in version 95

\$model_gbuffer_zvaltex = contains the depth values (z-buffer) of the models in view. New in version 95

\${opt}:/LuaUI/images/image.png = load a texture from the VFS

      possible ${opt}'s are:
         'n' = nearest
         'l' = linear
         'a' = aniso
         'i' = invert
         'g' = greyed
         'c' = clamped
         'b' = border
         't%r,%g,%b' = tint
         'r%width,%height' = resize
      The above ${opt}'s are NOT available for .DDS textures! .dds will load faster than other image formats.

       example: ":iac:/LuaUI/images/image.png"
       example: ":cr16,16:/LuaUI/images/image.png"
       example2: ":t1.0,0.5,0:/LuaUI/images/image.png"  (orange tint)

gl.[CreateTexture](#createtexture) ( number intXSize, number intYSize \[, table texProps \] )\
return: string texture

texProps contains:

    texProps = {
        [target     = number,](like GL.TEXTURE_1D,GL.TEXTURE_2D,...)(Added support for GL_TEXTURE_2D_MULTISAMPLE in 104.0.1-1015-g8e36ef2 maintenance)
        [format     = number,]
        [min_filter = [[Lua_ConstGL#Texture_Filtering|number]],]
        [mag_filter = [[Lua_ConstGL#Texture_Filtering|number]],]
        [wrap_s     = [[Lua_ConstGL#Texture_Clamping|number]],]
        [wrap_t     = [[Lua_ConstGL#Texture_Clamping|number]],]
        [wrap_r     = [[Lua_ConstGL#Texture_Clamping|number]],]
        [aniso      = number,]
        [border     = boolean,]
        [fbo        = boolean,] (needs GLEW_EXT_framebuffer_object!)
        [fboDepth   = boolean,] (needs GLEW_EXT_framebuffer_object!)
        [samples    = number,] specify any number here and target = GL_TEXTURE_2D_MULTISAMPLE to create multisample texture (Added in 104.0.1-1015-g8e36ef2 maintenance)
      }

gl.[DeleteTexture](#deletetexture) ( string texture )\
return: bool deleted

gl.[DeleteTextureFBO](#deletetexturefbo) ( string texture )\
return: bool deleted

Needs GLEW_EXT_framebuffer_object!

gl.[TextureInfo](#textureinfo) ( string texture )\
return: nil \| table texInfo

texInfo contains:

     texInfo = {
          xsize = number,
          ysize = number,
          alpha = boolean, //not used yet
          type  = number,  //not used yet
        }

    The format of the texture string is the same as in gl.Texture().

gl.[MultiTexCoord](#multitexcoord) ( number x \[, number y \[, number z \[, number w \]\]\] \| table texCoords = { number x \[, number y \[, number z \[, number w \]\]\] } )\
return: nil

gl.[TexEnv](#texenv) ( number [target](/lua-constgl#texture-environment), number [pname](/lua-constgl#texture-environment), number [value](/lua-constgl#texture-environment) )\
return: nil

or

gl.[TexEnv](#texenv) ( number [target](/lua-constgl#texture-environment), number [pname](/lua-constgl#texture-environment), number var1, number var2, number var3 )\
return: nil

gl.[MultiTexEnv](#multitexenv) ( number texNum, number [target](/lua-constgl#texture-environment), number [pname](/lua-constgl#texture-environment), number [value](/lua-constgl#texture-environment) )\
return: nil

or

gl.[MultiTexEnv](#multitexenv) ( number texNum, number [target](/lua-constgl#texture-environment), number [pname](/lua-constgl#texture-environment), number var1, number var2, number var3 )\
return: nil

gl.[TexGen](#texgen) ( number [target](/lua-constgl#texture-generation), bool state )\
return: nil

or

gl.[TexGen](#texgen) ( number [target](/lua-constgl#texture-generation), number [pname](/lua-constgl#texture-environment), number [value](/lua-constgl#texture-environment) )\
return: nil

or

gl.[TexGen](#texgen) ( number [target](/lua-constgl#texture-generation), bool [pname](/lua-constgl#texture-environment), number var1, number var2, number var3 )\
return: nil

gl.[MultiTexGen](#multitexgen) ( number intTexNum, number [target](/lua-constgl#texture-generation), bool state )\
return: nil

or

gl.[MultiTexGen](#multitexgen) ( number intTexNum, number [target](/lua-constgl#texture-generation), number [pname](/lua-constgl#texture-environment), number [value](/lua-constgl#texture-environment) )\
return: nil

or

gl.[MultiTexGen](#multitexgen) ( number intTexNum, number [target](/lua-constgl#texture-generation), number [pname](/lua-constgl#texture-environment), number var1, number var2, number var3 )\
return: nil

gl.[CopyToTexture](#copytotexture) ( string texture, number intXOff, number intYOff, number intX, number intY, number intW, number intH \[, number target, number level \] )\
return: nil

gl.[RenderToTexture](#rendertotexture) ( string fbotexture, function lua_func )\
return: nil

Needs GLEW_EXT_framebuffer_object!

gl.[GenerateMipmap](#generatemipmap) ( string texture )\
return: bool created

Needs glGenerateMipmapEXT!

    The following are primarily intended to be used in conjunction with
         gl.{Unit,Feature}(objID, ..., raw=true)
         gl.{Unit,Feature}Shape(defID, ..., raw=true)
    and apply a model's default textures; easier than gl.Texture("$%...")

gl.[UnitTextures](#unittextures) ( number unitID, bool enable )\
return: bool enabled

gl.[UnitShapeTextures](#unitshapetextures) ( number unitDefID, bool enable )\
return: bool enabled

gl.[FeatureTextures](#featuretextures) ( number featureID, bool enable )\
return: bool enabled

gl.[FeatureShapeTextures](#featureshapetextures) ( number featureDefID, bool enable )\
return: bool enabled

## PixelReadback

gl.[SaveImage](#saveimage) ( number x, number y, number w, number h, string filename \[, table imgProps = { alpha=bool, yflip=bool, grayscale16bit=bool, readbuffer=number } \] )\
return: nil \| bool success

grayscale16bit is New in version 99.0 and allows to save single color 16bit PNG\

readbuffer is New in version 104+ and allows to choose the attachment of MRT FBO, use GL_COLOR_ATTACHMENT0_EXT and further as index

gl.[ReadPixels](#readpixels) ( number x, number y, number w, number h \[, number format = GL.RGBA \] )\
return: nil \| number r \[, g \[, b \[, a {rbracket

{rbracket&#125;&#125;{rbracket&#125;&#125; \| table readPixels = { { { 1 = number r, 2 = number g, 3 = number b, 4 = number a}, ... }, ... }

\|info = This reads back pixels from the final rendered screen. E.g. you can make a screenshot by grabbing the whole view. &#125;&#125;

## Lights

gl.[Lighting](#lighting) ( bool enable )\
return: nil

gl.[ShadeModel](#shademodel) ( number [mode](/lua-constgl#shademodel) )\
return: nil

gl.[Light](#light) ( number intLight, bool enable )\
return: nil

or

gl.[Light](#light) ( number intLight, number [pname](/lua-constgl#light-specification), number param )\
return: nil

or

gl.[Light](#light) ( number intLight, number [pname](/lua-constgl#light-specification), number param1, number param2, number param3 )\
return: nil

gl.[Material](#material) ( table material )\
return: nil

material contains:

    material = {
        ambient   = {number r, number g, number b[, number a]},
        diffuse   = {number r, number g, number b[, number a]},
        ambidiff  = {number r, number g, number b[, number a]},
        emission  = {number r, number g, number b[, number a]},
        specular  = {number r, number g, number b[, number a]},
        shininess = number specularExponent
      }

## Hardware relevant

gl.[HasExtension](#hasextension) ( string extname )\
return: bool hasExtension

gl.[GetNumber](#getnumber) ( number ext, number intCount )\
return: number number1 \[, number number2, number number3, ... \#count \]

gl.[GetString](#getstring) ( number ext )\
return: string extString

## DrawGroundPrimitives

gl.[DrawGroundCircle](#drawgroundcircle) ( number x, number y, number z, number radius, number divs \[, number slope \] )\
return: nil

Note: Number divs is the number of sides the circle will have. The higher the smoother the circle (and more GPU intensive).

gl.[DrawGroundQuad](#drawgroundquad) ( number x1, number z1, number x2, number z2 \[, bool useNorm \[, number tu1, number tv1, number tu2, number tv2 \] \| \[ bool useTextureCoord \] \] )\
return: nil

Note: x1, z1, x2 & z2 are rounded, so don't use it for very small or moving objects. x and z correspond to the coordinates displayed by the tooltip.\
Also note: useNorm does nothing!

## Queries

gl.[CreateQuery](#createquery) (  )\
return: nil \| userdata query

Needs \>=OpengGL2.0!

gl.[DeleteQuery](#deletequery) ( userdata query )\
return: nil

Needs \>=OpengGL2.0!

gl.[RunQuery](#runquery) ( userdata query, function func, arg1, arg2, ... )\
return: nil

Needs \>=OpengGL2.0!

gl.[GetQuery](#getquery) ( userdata query )\
return: nil \| number renderedFragments

## Extended

gl.[ActiveTexture](#activetexture) ( number intTexNum, function func \[, arg1, ... \] )\
return: nil

gl.[GetGlobalTexNames](#getglobaltexnames) (  )\
return: table texNames = { \[1\] = string texture, etc ... }

gl.[GetGlobalTexCoords](#getglobaltexcoords) ( string 3doTextureName )\
return: number xstart, number ystart, number xend, number yend

Gets the texcoord of a 3do texture in the 3do texture atlas.

gl.[UnsafeState](#unsafestate) ( number state \[, bool disable_state \], bool func, arg1, arg2, ... )\
return: nil

Calls glEnable(state) or glDisable(state) (if disable_state==true) and\
then calls the lua_function and afterwards reverts the state.

gl.[GetShadowMapParams](#getshadowmapparams) (  )\
return: number xmid, number ymid, number p17, number p18

gl.[GetMatrixData](#getmatrixdata) ( GL.PROJECTION \[, number intI )\
return: nil \| number number1, etc... \| number Matrix\[i\]

or

gl.[GetMatrixData](#getmatrixdata) ( GL.MODELVIEW \[, number intI )\
return: nil \| number number1, etc... \| number Matrix\[i\]

or

gl.[GetMatrixData](#getmatrixdata) ( GL.TEXTURE \[, number intI )\
return: nil \| number number1, etc... \| number Matrix\[i\]

or

gl.[GetMatrixData](#getmatrixdata) ( string "shadow" )\
return: nil \| number number1, etc...

or

gl.[GetMatrixData](#getmatrixdata) ( string "camera" )\
return: nil \| number number1, etc...

gl.[GetMatrixData](#getmatrixdata) ( string "caminv" )\
return: nil \| number number1, etc...

or

gl.[GetMatrixData](#getmatrixdata) ( string "camprj" )\
return: nil \| number number1, etc...

or

gl.[GetMatrixData](#getmatrixdata) ( string "billboard" )\
return: nil \| number number1, etc...

gl.[Flush](#flush) (  )\
return: nil

gl.[Finish](#finish) (  )\
return: nil

## Shaders (GLSL)

     Lua_GLSL_Api

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua OpenGL Api](https://springrts.com/wiki/Lua_OpenGL_Api).*
