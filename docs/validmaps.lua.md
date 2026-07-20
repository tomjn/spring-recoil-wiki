---
title: "Validmaps.lua"
source_url: "https://springrts.com/wiki/Validmaps.lua"
categories:
  - "Game_Dev"
---
# Validmaps.lua

## Location

`validmaps.lua` is a file in the root folder of a Spring game.

## Purpose

A game can use `validmaps.lua` to declare a whitelist of maps; lobbies then show only those maps in their selection menu. Returning an empty table means any map is valid. It can be combined with LuaRules to set up multiplayer scenarios and tutorials.

To restrict the map pool, the file builds and returns a table of allowed map names. All returned names must be playable.

## Simple example

The simplest form just returns a table of map names:

    return {
       "DesertCliffsV1",
       "Eye_Of_Horus_v2",
    }

**Note:** use map names as returned by [Game.mapName](/lua-constgame).

## Filtering example

Maps can be filtered programmatically using the engine's map callouts:

    -- Spring.GetMapList() -> { 'map1.smf', 'map2.smf', 'map3.sm3', ... }
    --
    -- Spring.GetMapInfo('map1') -> {
    --   author = 'string', desc = 'string',
    --   mapX = number, mapY = number,
    --   tidal = number, gravity = number, metal = number,
    --   windMin = number, windMax = number, extractorRadius = number,
    --   startPos = { [1] = { x = number, z = number }, ... },
    -- }

    local mapList = Spring.GetMapList()
    local validMaps = {}
    for _, mapName in ipairs(mapList) do
      if mapName:lower():find('metal') then
        local mapInfo = Spring.GetMapInfo(mapName)
        if mapInfo.mapX >= (16 * 512) and mapInfo.mapY >= (8 * 512) then
          validMaps[#validMaps + 1] = mapName
        end
      end
    end
    return validMaps   -- an empty table means ALL maps are valid

---

*Imported from the springrts.com wiki (public domain). Original page: [Validmaps.lua](https://springrts.com/wiki/Validmaps.lua).*
