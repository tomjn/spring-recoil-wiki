---
title: "Lua Fonts"
source_url: "https://springrts.com/wiki/Lua_Fonts"
categories:
  - "Lua"
---
# Lua Fonts

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua Fonts

## Load/Delete

**gl.LoadFont**

     ( string fontfilename, number size = 14,
       number outlineWidth = 2, number outlineWeight = 15 ) -> userdata font

**gl.DeleteFont**

     ( userdata font ) -> nil

## Userdata Functions

**font:Print**

     (string "text", number x, number y [, number size [, string "options"] ] ) -> nil

 

     options are:
       horizontal alignment:
          'c' = center
          'r' = right
       vertical alignment:
          'a' = ascender (is a font specific value)
          't' = top (depends on text)
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

![fontlines.png](http://home.arcor.de/jkei/fontlines.png)

**font:SetTextColor**

     ( number r, number g, number b [, number a ] ) -> nil
     ( {r,g,b,a} ) -> nil

**font:SetOutlineColor**

     ( number r, number g, number b [, number a ] ) -> nil
     ( {r,g,b,a} ) -> nil

**font:SetAutoOutlineColor**

     ( boolean enable ) -> nil

**font:GetTextWidth**

     (string "text") -> number width  (in pixels, with a font size of 1.0)

**font:GetTextHeight**

     ( string "text" ) -> nil | number height, number descender, number numlines
     (height & descender in pixels, with a font size of 1.0)
     further descriptions here: GetTextHeight

**font:WrapText**

     ( string "text", number max_width [, number max_height [, number size ] ])
       -> nil | string wrappedText, number lines

**font:BindTexture**

     (  ) -> nil

**If you have multiple font:Print calls, then you can bunch them between a font:Begin() and font:End() to speedup the rendering.**\
**font:Begin**

     (  ) -> nil

**font:End**

     (  ) -> nil

## Userdata Properties (ReadOnly)

string **font.path**\
string **font.family**\
string **font.style**\
number **font.size**\
number **font.height** a.k.a. **font.lineheight**\
number **font.descender**\
number **font.outlinewidth**\
number **font.outlineweight**\
number **font.texturewidth**\
number **font.textureheight**

## Inlined ColorCodes

 Whole Spring FontRendering supports \`inlined colorcodes\`, there are 2 special chars to indicate those '`\255\$r\$g\$b`' & '`\b`':

    local black = "\255\001\001\001"
    local blue = "\255\001\001\255"
    local reset = "\b " -- !space after "\b " is necessary if you put it at the end of the string you want to print, otherwise the parsing will break
    font:Print(blue .. "bluetext" .. black .. "blacktext" .. reset .. blue .. "bluetext again" .. reset, 0, 0)

From 98.0 onwards inlined colorcodes reuse the currently set alpha value.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua Fonts](https://springrts.com/wiki/Lua_Fonts).*
