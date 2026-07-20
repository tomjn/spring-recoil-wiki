---
title: "Lua UnitRendering"
source_url: "https://springrts.com/wiki/Lua_UnitRendering"
categories:
  - "Lua"
---
# Lua UnitRendering

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua UnitRendering

## Unit & Feature Rendering

New in version 101.0 These functions are now also duplicated for features i.e. Spring.FeatureRendering.X

**Spring.UnitRendering.SetLODCount**

     ( number unitID, int lodCount ) -> nil

**Spring.UnitRendering.SetLODLength** (\`lod\` is 1-indexed)

     ( number unitID, int lod, number lodLength ) -> nil

**Spring.UnitRendering.SetLODDistance** (same as SetLODLength(), but adjusted for 45deg FOV + 1024x768)

     (number unitID,  int lod, number lodDistance ) -> nil

**Spring.UnitRendering.SetPieceList** (displayList=nil reset to default)

     ( number unitID, int lod, int piece [, number displayList = nil ] ) -> nil

**Spring.UnitRendering.GetMaterial** (creates a material userdata)

     ( string MaterialType, table Material ) -> userdata Material

**Spring.UnitRendering.SetMaterial**

     ( number unitID, int lod, string MaterialType, userdata Material | table Material ) -> nil

**Spring.UnitRendering.SetMaterialLastLOD**

     ( number unitID, string MaterialType, int lastLOD ) -> nil

**Spring.UnitRendering.SetMaterialDisplayLists**

     ( number unitID, int lod, string MaterialType, preDisplayList, postDisplayList ) -> nil

**Spring.UnitRendering.SetUnitUniform** (unfinished)

     ( number unitID, string MaterialType, int lod, arg1, arg2, ... ) -> nil

## Debug

**Spring.UnitRendering.Debug** (prints some usefull debug informations)

     ( [ number unitID ] ) -> nil

## Lua's DrawXYZ-Callin

**Spring.UnitRendering.SetUnitLuaDraw** (enables the LuaRules' DrawUnit callin)

     ( number unitID, boolean enabled ) -> nil

**Spring.FeatureRendering.SetFeatureLuaDraw** (enables the LuaRules' DrawFeature callin)

     ( number featureID, boolean enabled ) -> nil

**Spring.UnitRendering.SetProjectileLuaDraw** (enables the LuaRules' DrawProjectile callin)

     ( number projectileID, boolean enabled ) -> nil

## MaterialTypes

    "alpha"
    "opaque"
    "alpha_reflect"
    "opaque_reflect"
    "shadow"

## Material UserData

none user accessible methods (yet)

## Material Table

Prior to 102.0:

     material = {
       ["order"  = number ,]
       ["culling" = number face ,]
       ["shader" = lua_shader | string "3do" | string "s3o" ,]
       (95.0: alias standard_shader)
       ["deferred_shader" = { vertex = ..., ... } ,]
       (new in 95.0, alias deferred. Deferred fragment shaders must *ONLY* write to gl_FragData[i] where
         i = {0 = normals, 1 = diffuse, 2 = specular, 3 = emissive, 4 = misc})

       ["texunits" = {
           [ [0] = { ["tex" = see gl.Texture ,]
                     ["enable" = boolean true ] }, ]
           [ [3] = see gl.Texture, ]
           (upto [15] and supports holes in it)
         } ,]

       ["texunit0" = see gl.Texture ,]
        ...
       ["texunit7" = see gl.Texture ,]

       ["prelist"   = lua_displaylist ,]
       ["postlist"  = lua_displaylist ,]
       ["usecamera" = boolean ,]
       ["cameraloc" = number uniformLocation,]
       ["cameraposloc" = number uniformLocation,]
       ["camerainvloc"  = number uniformLocation,]
       ["sunposloc"     = number uniformLocation,] (new in 0.83)
       ["shadowloc"       = number uniformLocation,]
       ["shadowparamsloc" = number uniformLocation,]
     }

Post 102.0:

Material tables are now expected to contain subtables defining the uniforms; instead of

      material = {shader = ..., cameraposloc = 123, texunits = ..., ...}

say

      material = {shader = ..., uniforms = {cameraposloc = 123, ...}, texunits = ..., ...}

For a material that has both types of shader, supply "standardshader", "deferredshader", "standarduniforms", and "deferreduniforms" as keys i.e:

      material = {standardshader = ..., standarduniforms = {...}, deferredshader = ..., deferredunifroms = { ... }, texunits = ..., ...}

New keys for these uniform subtables can be

        "viewmatrixloc"    // synonym for "cameraloc"
        "projmatrixloc"    // camera projection
        "viprmatrixloc"    // camera view-projection
        "viewmatrixinvloc" // synonym for "camerainvloc"
        "projmatrixinvloc" // camera inverse projection
        "viprmatrixinvloc" // camera inverse view-projection
        "shadowmatrixloc"  // synonym for "shadowloc"
        "cameradirloc"     // camera forward direction
        "sundirloc"        // synonym for "sunposloc"
        "rndvecloc"        // random 3-vector with length in [0, 1)
        "simframeloc"      // current simulation frame
        "visframeloc"      // current renderer frame

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua UnitRendering](https://springrts.com/wiki/Lua_UnitRendering).*
