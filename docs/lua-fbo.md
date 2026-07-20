---
title: "Lua FBO"
source_url: "https://springrts.com/wiki/Lua_FBO"
section: "game-dev"
---
# Lua FBO

<div class="mw-parser-output">

## FBO

## FBO

**gl.CreateFBO**

     ( [ table initialization ] ) -> userdata fbo

     initialization table can contain:

       attachment ::= luaTex or RBO or nil or { luaTex [, num target [, num level ] ] }

       {
         depth   = attachment,
         stencil = attachment,
         color0  = attachment,
         color1  = attachment,
         color2  = attachment,
         ..
         color15 = attachment,
         drawbuffers = { GL_COLOR_ATTACHMENT0_EXT, GL_COLOR_ATTACHMENT3_EXT, ..}
       }

**gl.DeleteFBO** (This doesn't delete the attached objects!)

     ( fbo ) -> nil

**gl.IsValidFBO**

     ( fbo [, number target ] ) -> boolean valid [, number status ]

**gl.ActiveFBO**

     ( fbo [, number target ] [, boolean identities ] , lua_function, arg1, arg2, ... ) -> nil

**gl.UnsafeSetFBO** (Binds a FBO like gl.ActiveFBO() does, but you have to unbind it yourself!)

     ( nil [, number target = GL_FRAMEBUFFER_EXT ] ) -> nil (Bind default screenbuffer)
     ( fbo [, number target = fbo.target ] ) -> nil

**gl.RawBindFBO** (Replaces UnsafeSetFBO starting from 104.0.1-1003-gb3e02a6 maintenance)

     ( nil [, number target = GL_FRAMEBUFFER_EXT ] [, number rawFboId = 0] ) -> nil (Bind default or specified via rawFboId numeric id of FBO)
     ( fbo [, number target = fbo.target ] ) -> number previouslyBoundRawFboId

**gl.BlitFBO** needs GLEW_EXT_framebuffer_blit

     ( int x0Src,y0Src,x1Src,y1Src,
       int x0Dst,y0Dst,x1Dst,y1Dst
       [, number mask = GL_COLOR_BUFFER_BIT [, number filter = GL_NEAREST ] ] ) -> nil

     ( fboSrc , int x0Src,y0Src,x1Src,y1Src,
       fboDst , int x0Dst,y0Dst,x1Dst,y1Dst
       [, number mask = GL_COLOR_BUFFER_BIT [, number filter = GL_NEAREST ] ] ) -> nil

### Userdata FBO

      attachment ::= luaTex or RBO or nil or { luaTex or RBO [, num target [, num level ]] }

     write-only methods are:
       fbo.depth   = attachment
       fbo.stencil = attachment
       fbo.color0  = attachment
        ..
       fbo.color15 = attachment
       fbo.drawbuffers = { GL_COLOR_ATTACHMENT0_EXT, GL_COLOR_ATTACHMENT3_EXT, ..}
       fbo.readbuffer  = GL_COLOR_ATTACHMENT0_EXT

## RBO

**gl.CreateRBO**

     ( int xsize, int ysize,
       [ {
         target = GL_RENDERBUFFER_EXT,
         format = GL_RGBA,
         [samples = number],  any number here will result in creation of multisampled RBO (Added in 104.0.1-1015-g8e36ef2 maintenance)
       } ]) -> userdata rbo

**gl.DeleteRBO**

     ( rbo ) -> nil

### Userdata RBO

     read-only methods are:
       rbo.target  = number
       rbo.format  = number
       rbo.xsize   = number
       rbo.ysize   = number
       rbo.valid   = boolean
       rbo.samples = number  will return globalRendering->msaaLevel for multisampled RBO or 0 otherwise (Added in 104.0.1-1015-g8e36ef2 maintenance)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua FBO](https://springrts.com/wiki/Lua_FBO).*
