---
title: "Resources.lua"
source_url: "https://springrts.com/wiki/Resources.lua"
categories:
  - "Gamedata"
---
# Resources.lua

<div class="mw-parser-output">

## Location

`resources.lua` is a file in the `Gamedata/` directory of a Spring Game.\
`resources_map.lua` is a file in the `Gamedata/` directory of a Spring Map.

## Purpose

This file is used by a game to reference textures for use in [Custom Explosion Generators](/ceg-main), as well as various default explosions and other engine textures such as default trees and water etc. Maps have a corresponding file, `resources_map.lua` which behaves in the same way.

## Source

The engine source code which parses the data from this file is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Rendering/ProjectileDrawer.cpp" class="external text" rel="nofollow">rts/Rendering/ProjectileDrawer.cpp</a> (smoke, groundfx & projectiletextures) `resources_map.lua` is only read here.

<!-- -->

- <a href="https://github.com/spring/spring/blob/106.0/rts/Rendering/GroundDecalHandler.cpp" class="external text" rel="nofollow">rts/Rendering/GroundDecalHandler.cpp</a> (scars)
- <a href="https://github.com/spring/spring/blob/106.0/rts/Rendering/Env/AdvTreeGenerator.cpp" class="external text" rel="nofollow">rts/Rendering/Env/AdvTreeGenerator.cpp</a> (trees)
- <a href="https://github.com/spring/spring/blob/106.0/rts/Map/MapInfo.cpp" class="external text" rel="nofollow">rts/Map/MapInfo.cpp</a> (caustics & maps)

## Details

The engine loads textures from seven subtables within the `graphics` subtable of the returned resources table. Certain tables are automatically added by the engine if a game is not overriding them, they are numerical arrays whereas all others are key-value associative arrays. Engine defaults which are required to be present are included in the [\#Automatic](#automatic) example below.

- `caustics` - Textures used with bumpmapped water. Automatically added by the engine.\
- `smoke` - Textures used for engine default smoke. Automatically added by the engine.\
- `scars` - Textures used for the burn scars left on the map by weapon explosions. Automatically added by the engine.\
- `trees` - Textures for engine default trees.\
- `maps` - Base textures in case a map does not provide it's own.\
- `groundfx` - Game or Map specific textures for [CSimpleGroundFlash](/ceg-classes#csimplegroundflash) CEG's as well as engine default explosion [groundflash](/ceg-format#groundflash).\
- `projectiletextures` - Game or Map specific textures for the other [CEG-Classes](/ceg-classes) as well as engine defaults. This is the only table that is read from `resources_map.lua`\

## Example

### Automatic

The following example (which is becoming a <a href="http://en.wikipedia.org/wiki/De_facto_standard" class="external text" rel="nofollow">de facto standard</a>) sets out the engine default textures, and recursively adds any textures from the game's `Bitmaps/projectileTextures/` and `Bitmaps/groundFX/` directories, respectively. It will ignore any directories created by <a href="http://en.wikipedia.org/wiki/Apache_Subversion" class="external text" rel="nofollow">SVN</a>, and can be easily edited to filter out <a href="http://en.wikipedia.org/wiki/Git_(software)" class="external text" rel="nofollow">git</a> or any other version control software.

    local  resources = {
        graphics = {
          -- Spring Defaults
          trees = {
            bark           = 'Bark.bmp',
            leaf           = 'bleaf.bmp',
            gran1          = 'gran.bmp',
            gran2          = 'gran2.bmp',
            birch1         = 'birch1.bmp',
            birch2         = 'birch2.bmp',
            birch3         = 'birch3.bmp',
          },
          maps = {
            detailtex      = 'detailtex2.bmp',
            watertex       = 'ocean.jpg',
          },
          groundfx = {
            groundflash    = 'groundflash.tga',
            groundring     = 'groundring.tga',
            seismic        = 'circles.tga',
          },
          projectiletextures = {
            circularthingy = 'circularthingy.tga',
            laserend       = 'laserend.tga',
            laserfalloff   = 'laserfalloff.tga',
            randdots       = 'randdots.tga', 
            smoketrail     = 'smoketrail.tga',
            wake           = 'wake.tga',
            flare          = 'flare.tga',
            explo          = 'explo.tga',
            explofade      = 'explofade.tga',
            heatcloud      = 'explo.tga',
            flame          = 'flame.tga',
            muzzleside     = 'muzzleside.tga',
            muzzlefront    = 'muzzlefront.tga',
            largebeam      = 'largelaserfalloff.tga',
          },
        }
      }

    local VFSUtils = VFS.Include('gamedata/VFSUtils.lua')

    local function AutoAdd(subDir, map, filter)
      local dirList = RecursiveFileSearch("bitmaps/" .. subDir)
      for _, fullPath in ipairs(dirList) do
        local path, key, ext = fullPath:match("bitmaps/(.*/(.*)%.(.*))")
        if not fullPath:match("/%.svn") then
        local subTable = resources["graphics"][subDir] or {}
        resources["graphics"][subDir] = subTable
          if not filter or filter == ext then
            if not map then
              table.insert(subTable, path)
            else -- a mapped subtable
              subTable[key] = path
            end
          end
        end
      end
    end

    -- Add mod projectiletextures and groundfx
    AutoAdd("projectiletextures", true)
    AutoAdd("groundfx", true)

    return resources

### External

<a href="https://github.com/spring/spring/blob/106.0/cont/base/springcontent/gamedata/resources.lua" class="external text" rel="nofollow">cont/base/springcontent/gamedata/resources.lua</a> - Engine base content `resources.lua`

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Resources.lua](https://springrts.com/wiki/Resources.lua).*
