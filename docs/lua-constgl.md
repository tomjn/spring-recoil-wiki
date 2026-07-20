---
title: "Lua ConstGL"
source_url: "https://springrts.com/wiki/Lua_ConstGL"
categories:
  - "Lua"
---
# Lua ConstGL

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua ConstGL

## Drawing Primitives

**GL.POINTS**\
**GL.LINES**\
**GL.LINE_LOOP**\
**GL.LINE_STRIP**\
**GL.TRIANGLES**\
**GL.TRIANGLE_STRIP**\
**GL.TRIANGLE_FAN**\
**GL.QUADS**\
**GL.QUAD_STRIP**\
**GL.POLYGON**\
**GL.PATCHES** Available for spring versions \>= 104.0.1-596 (maintenance).

## BlendingFactorDest

**GL.ZERO**\
**GL.ONE**\
**GL.SRC_COLOR**\
**GL.ONE_MINUS_SRC_COLOR**\
**GL.SRC_ALPHA**\
**GL.ONE_MINUS_SRC_ALPHA**\
**GL.DST_ALPHA**\
**GL.ONE_MINUS_DST_ALPHA**

## BlendingFactorSrc

**GL.ZERO**\
**GL.ONE**\
**GL.SRC_COLOR**\
**GL.ONE_MINUS_SRC_COLOR**\
**GL.SRC_ALPHA**\
**GL.ONE_MINUS_SRC_ALPHA**\
**GL.DST_ALPHA**\
**GL.ONE_MINUS_DST_ALPHA**\
**GL.DST_COLOR**\
**GL.ONE_MINUS_DST_COLOR**\
**GL.SRC_ALPHA_SATURATE**

## AlphaFunction and DepthFunction

**GL.NEVER**\
**GL.LESS**\
**GL.EQUAL**\
**GL.LEQUAL**\
**GL.GREATER**\
**GL.NOTEQUAL**\
**GL.GEQUAL**\
**GL.ALWAYS**

## LogicOp

**GL.CLEAR**\
**GL.AND**\
**GL.AND_REVERSE**\
**GL.COPY**\
**GL.AND_INVERTED**\
**GL.NOOP**\
**GL.XOR**\
**GL.OR**\
**GL.NOR**\
**GL.EQUIV**\
**GL.INVERT**\
**GL.OR_REVERSE**\
**GL.COPY_INVERTED**\
**GL.OR_INVERTED**\
**GL.NAND**\
**GL.SET**

## Culling

**GL.BACK**\
**GL.FRONT**\
**GL.FRONT_AND_BACK**

## PolygonMode

**GL.POINT**\
**GL.LINE**\
**GL.FILL**

## Clear Bits

**GL.DEPTH_BUFFER_BIT**\
**GL.ACCUM_BUFFER_BIT**\
**GL.STENCIL_BUFFER_BIT**\
**GL.COLOR_BUFFER_BIT**

## ShadeModel

**GL.FLAT**\
**GL.SMOOTH**

## MatrixMode

**GL.MODELVIEW**\
**GL.PROJECTION**\
**GL.TEXTURE**

## Texture Filtering

**GL.NEAREST**\
**GL.LINEAR**\
**GL.NEAREST_MIPMAP_NEAREST**\
**GL.LINEAR_MIPMAP_NEAREST**\
**GL.NEAREST_MIPMAP_LINEAR**\
**GL.LINEAR_MIPMAP_LINEAR**

## Texture Clamping

**GL.REPEAT**\
**GL.MIRRORED_REPEAT**\
**GL.CLAMP**\
**GL.CLAMP_TO_EDGE**\
**GL.CLAMP_TO_BORDER**

## Texture Environment

**GL.TEXTURE_ENV**\
**GL.TEXTURE_ENV_MODE**\
**GL.TEXTURE_ENV_COLOR**\
**GL.MODULATE**\
**GL.DECAL**\
**GL.BLEND**\
**GL.REPLACE**\

**GL_TEXTURE_FILTER_CONTROL**\
**GL_TEXTURE_LOD_BIAS**

## Texture Generation

**GL.TEXTURE_GEN_MODE**\
**GL.EYE_PLANE**\
**GL.OBJECT_PLANE**\
**GL.EYE_LINEAR**\
**GL.OBJECT_LINEAR**\
**GL.SPHERE_MAP**\
**GL.NORMAL_MAP**\
**GL.REFLECTION_MAP**\
**GL.S**\
**GL.T**\
**GL.R**\
**GL.Q**

## glPushAttrib() bits

**GL.CURRENT_BIT**\
**GL.POINT_BIT**\
**GL.LINE_BIT**\
**GL.POLYGON_BIT**\
**GL.POLYGON_STIPPLE_BIT**\
**GL.PIXEL_MODE_BIT**\
**GL.LIGHTING_BIT**\
**GL.FOG_BIT**\
**GL.DEPTH_BUFFER_BIT**\
**GL.ACCUM_BUFFER_BIT**\
**GL.STENCIL_BUFFER_BIT**\
**GL.VIEWPORT_BIT**\
**GL.TRANSFORM_BIT**\
**GL.ENABLE_BIT**\
**GL.COLOR_BUFFER_BIT**\
**GL.HINT_BIT**\
**GL.EVAL_BIT**\
**GL.LIST_BIT**\
**GL.TEXTURE_BIT**\
**GL.SCISSOR_BIT**\
**GL.ALL_ATTRIB_BITS**

## glHint() targets

**GL.FOG_HINT**\
**GL.LINE_SMOOTH_HINT**\
**GL.POINT_SMOOTH_HINT**\
**GL.POLYGON_SMOOTH_HINT**\
**GL.PERSPECTIVE_CORRECTION_HINT**

## glHint() modes

**GL.DONT_CARE**\
**GL.FASTEST**\
**GL.NICEST**

## Light Specification

**GL.AMBIENT**\
**GL.DIFFUSE**\
**GL.SPECULAR**\
**GL.POSITION**\
**GL.SPOT_DIRECTION**\
**GL.SPOT_EXPONENT**\
**GL.SPOT_CUTOFF**\
**GL.CONSTANT_ATTENUATION**\
**GL.LINEAR_ATTENUATION**\
**GL.QUADRATIC_ATTENUATION**

## Shader types

Available for spring versions \>= 104.0.1-596 (maintenance).\
**GL.VERTEX_SHADER**\
**GL.TESS_CONTROL_SHADER**\
**GL.TESS_EVALUATION_SHADER**\
**GL.GEOMETRY_SHADER**\
**GL.FRAGMENT_SHADER**\

## Geometry shader parameters

Available for spring versions \>= 104.0.1-596 (maintenance).\
**GL.GEOMETRY_INPUT_TYPE**\
**GL.GEOMETRY_OUTPUT_TYPE**\
**GL.GEOMETRY_VERTICES_OUT**\

## Tesselation control shader parameters

Available for spring versions \>= 104.0.1-596 (maintenance).\
**GL.PATCH_VERTICES**\
**GL.PATCH_DEFAULT_OUTER_LEVEL**\
**GL.PATCH_DEFAULT_INNER_LEVEL**\

## Usefull, but not included constants

### Texture Formats

     GL_RGBA16F_ARB = 0x881A
     GL_RGBA32F_ARB = 0x8814
     GL_DEPTH_COMPONENT   = 0x1902
     GL_DEPTH_COMPONENT16 = 0x81A5
     GL_DEPTH_COMPONENT24 = 0x81A6
     GL_DEPTH_COMPONENT32 = 0x81A7

### RBO Formats

     GL_RGB             = 0x1907
     GL_RGBA            = 0x1908
     GL_DEPTH_COMPONENT = 0x1902
     GL_STENCIL_INDEX   = 0x1901

### FBO Targets

     GL_FRAMEBUFFER_EXT      = 0x8D40
     GL_READ_FRAMEBUFFER_EXT = 0x8CA8
     GL_DRAW_FRAMEBUFFER_EXT = 0x8CA9

### FBO Status

     GL_FRAMEBUFFER_COMPLETE_EXT                        = 0x8CD5
     GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT_EXT           = 0x8CD6
     GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT_EXT   = 0x8CD7
     GL_FRAMEBUFFER_INCOMPLETE_DUPLICATE_ATTACHMENT_EXT = 0x8CD8
     GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS_EXT           = 0x8CD9
     GL_FRAMEBUFFER_INCOMPLETE_FORMATS_EXT              = 0x8CDA
     GL_FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER_EXT          = 0x8CDB
     GL_FRAMEBUFFER_INCOMPLETE_READ_BUFFER_EXT          = 0x8CDC
     GL_FRAMEBUFFER_UNSUPPORTED_EXT                     = 0x8CDD
     GL_FRAMEBUFFER_STATUS_ERROR_EXT                    = 0x8CDE

### FBO Attachments

     GL_COLOR_ATTACHMENT0_EXT  = 0x8CE0
     ..
     GL_COLOR_ATTACHMENT15_EXT = 0x8CEF
     GL_DEPTH_ATTACHMENT_EXT   = 0x8D00
     GL_STENCIL_ATTACHMENT_EXT = 0x8D20

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua ConstGL](https://springrts.com/wiki/Lua_ConstGL).*
