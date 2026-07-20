---
title: "Deprecated Lua GL"
source_url: "https://springrts.com/wiki/Deprecated_Lua_GL"
---
# Deprecated Lua GL

<div class="mw-parser-output">

- gl.Lighting
- gl.ShadeModel
- gl.Fog
- gl.AlphaTest
- gl.LineStipple
- gl.Material
- gl.LineWidth
- gl.PointSize
- gl.PointSprite
- gl.PointParameter
- gl.TexEnv
- gl.MultiTexEnv
- gl.TexGen
- gl.MultiTexGen
- gl.Shape
- gl.MultiTexCoord
- gl.SecondaryColor
- gl.FogCoord
- gl.EdgeFlag
- gl.DrawListAtUnit
- gl.Light
- gl.ClipPlane
- gl.CreateList
- gl.CallList
- gl.DeleteList
- gl.GetGlobalTexNames
- gl.GetGlobalTexCoords

The following calls are emulated for convenience:

- gl.Color
- gl.Vertex
- gl.TexCoord
- gl.Normal

<!-- -->

- gl.BeginEnd will be probably removed, to discourage creation of JIT temporary VAO/VBO

Potentially matrix functions like Push/Pop/Mode will be removed as well.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Deprecated Lua GL](https://springrts.com/wiki/Deprecated_Lua_GL).*
