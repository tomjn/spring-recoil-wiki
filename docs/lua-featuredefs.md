---
title: "Lua FeatureDefs"
source_url: "https://springrts.com/wiki/Lua_FeatureDefs"
categories:
  - "Lua"
---
# Lua FeatureDefs

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua FeatureDefs

The FeatureDefs\[\] table holds all information about the features used in a game.

Works the same way as [Lua_UnitDefs](/lua-unitdefs) except the tables are called **FeatureDefs\[\]** and **FeatureDefNames\[\]**

## Looping

Note: Its entries are metatables, so you can't use the pairs() iterator on them, use this instead:

      for id,featureDef in pairs(FeatureDefs) do
        for name,param in featureDef:pairs() do
          Spring.Echo(name,param)
        end
      end

## Example

In key = value form, where FeatureDefs\[featureDefID\].key==value, with subtables at the end.

        autoreclaim = true,
        blocking = true,
        burnable = false,
        deathFeatureID = 2,
        destructable = true,
        drawType = 0,
        drawTypeString = "model",
        energy = 0,
        floating = false,
        geoThermal = false,
        height = 0,
        id = 1,
        mass = 4205.400390625,
        maxHealth = 16290,
        maxx = -10000,
        maxy = -10000,
        maxz = -10000,
        metal = 6441,
        midx = 0,
        midy = 0,
        midz = 0,
        minx = 10000,
        miny = 10000,
        minz = 10000,
        modelname = "objects3d/AAFUS_DEAD.s3o",
        name = "aafus_dead",
        noSelect = true,
        radius = 0,
        reclaimTime = 38646,
        reclaimable = true,
        resurrectable = -1,
        smokeTime = 300,
        tooltip = "Advanced Fusion Reactor Wreckage",
        upright = false,
        xsize = 10,
        zsize = 8,
        collisionVolume = {
            boundingRadius = 5.8736290375751e-026,
            defaultToFootPrint = false,
            defaultToPieceTree = false,
            defaultToSphere = false,
            offsetX = 0,
            offsetY = 1,
            offsetZ = 6.3954851782821e-026,
            scaleX = 6.1349811206651e-026,
            scaleY = 1.9340968033141e-038,
            scaleZ = 6.3955048998047e-026,
            type = "ellipsoid",
        },
        customParams = {
            ...
        },

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua FeatureDefs](https://springrts.com/wiki/Lua_FeatureDefs).*
