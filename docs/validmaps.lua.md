---
title: "Validmaps.lua"
source_url: "https://springrts.com/wiki/Validmaps.lua"
categories:
  - "Game_Dev"
---
# Validmaps.lua

<div class="mw-parser-output">

## Location

validmaps.lua is a file in the root folder of a Spring game.

## Purpose

from /wiki/The_Talking_Changelog

    Valid maps are listed in the mod's "ValidMaps.lua" file
    A valid map count of 0 means that any map can be used with the mod
    This can be used in concert with LuaRules to setup multi-player scenarios and tutorials

Basically this means that a Spring game can create a whitelist of maps and the lobbies will only display these maps in their selection menu. In the end it depends on the lobby how maps are listed. All map names that are returned are playabe.

To block a certain map, validmaps.lua has to loop through all maps to build a table of mapnames, not inserting the unwanted map, and then return that table.\
**=\>**is it that correct? Or is there an easy way, ie returning a second table of unvalid maps or is there an unvalidmaps.lua?

## Source

**=\>**don't know, please add

## Simple Example

Just returning a table of map names is the easiest example:

    return {
       "DesertCliffsV1",
       "Eye_Of_Horus_v2",
    }

**Note:** Use mapnames as returned by [Game.mapName](/lua-constgame)

### Example to filter maps by various aspects

<a href="http://code.google.com/p/zero-k/source/browse/trunk/mods/zk/ValidMaps.lua" class="external free" rel="nofollow">http://code.google.com/p/zero-k/source/browse/trunk/mods/zk/ValidMaps.lua</a> by det If I understand this correctly this not a working example (it is disabled with *if (false)* anyway) but more a reference:

    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    --
    --  ValidMaps.lua
    --
    --  This file can be added to a mod to dictate which maps
    --  can (and can not) be used with it. The map information
    --  is the map's default information, and is done before
    --  MapOptions.lua can be used by maps.
    --
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    --
    -- Map specific call-outs:
    --
    --   Spring.GetMapList() -> { 'map1.smf', 'map2.smf', 'map3.sm3', etc... }
    --
    --   Spring.GetMapInfo('map1') -> {
    --     author  = 'string',
    --     desc    = 'string',
    --     mapX    = number,
    --     mapY    = number,
    --     tidal   = number,
    --     gravity = number,
    --     metal   = number,
    --     windMin = number,
    --     windMax = number,
    --     extractorRadius = number,
    --     startPos = {
    --       [1] = { x = number, z = number },
    --       [2] = { x = number, z = number },
    --       [3] = { x = number, z = number },
    --       etc ...
    --     },
    --   }
    --
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    --
    --  Example filtering code
    --

    if (false) then
      local mapList = Spring.GetMapList()
      local validMaps = {}
      for _, mapName in ipairs(mapList) do
        if (mapName:lower():find('metal')) then
          local mapInfo = Spring.GetMapInfo(mapName)
          local minX = (16 * 512)
          local minY = (8  * 512)
          if ((mapInfo.mapX >= minX) and
              (mapInfo.mapY >= minY)) then
            validMaps[#validMaps + 1] = mapName
          end
        end
      end
      if (#validMaps == 0) then
        return { 'FAKEMAP' }
      else
        return validMaps
      end
    end

    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------

    return {}  --  returning an empty table means  *ALL MAPS*  are valid
               --  for *NO MAPS*, return a fake map name, ex: { 'FakeMap' }

    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------

### Working exampe

**=\>**would be nice to have one\

    --this validmaps.lua:
    --blocks all "speedmetal" variants by name
    --only allows square sized maps
    --also allows the map "Derpa Derp"
    EXAMPLE SCRIPT

## Compatible Lobbies

**=\>**What lobbies read and support this?\
**TASClient** - yes (?) Satirik: *just fixed it in tasclient* <a href="http://springrts.com/phpbb/viewtopic.php?f=11&amp;t=19495" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=11&amp;t=19495</a>\
**Spring Lobby** - No, \_koshi\_: *yeah, we actually can build a list of valid maps, it's just not used in the frontend*\
**zeroK Lobby** - ?\
**Alpha Lobby** - ?\

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Validmaps.lua](https://springrts.com/wiki/Validmaps.lua).*
