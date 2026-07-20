---
title: "Sidedata.lua"
source_url: "https://springrts.com/wiki/Sidedata.lua"
categories:
  - "Gamedata"
---
# Sidedata.lua

<div class="mw-parser-output">

## Location

`sidedata.lua` is a file in the `Gamedata/` directory of a Spring Game.

## Purpose

This file defines the playable factions/races/sides in a game. (ie ARM & CORE, Terran, Protoss, USA, Bananas,...)

## Source

The engine source code which parses the data from this file is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Misc/SideParser.cpp" class="external text" rel="nofollow">rts/Sim/Misc/SideParser.cpp</a>

## Details

Each faction can have two properties:\

- `name` (displayed in lobby)\
- `startUnit` (must be read by <a href="http://springrts.com/phpbb/viewtopic.php?f=67&amp;t=21883&amp;p=417021" class="external text" rel="nofollow">a gadget to actually spawn the start unit</a>)\

These values are available to lua via `Spring.GetSideData` (See [Lua_SyncedRead](/lua-syncedread#sides2ffactions)):

    local sideName, startUnit = Spring.GetSideData(sideID)

## Example

### Single Faction

    local sideData = {
      {
        name = 'AwesomeDudes',
        startunit = 'awesomedudebase',
      },
    }
    return sideData

### Multiple Factions

    local sideData = {
      {
        name = 'NKG',
        startunit = 'bflagship2',
      },
      {
        name = 'Drone',
        startunit = 'kdroneengineer',
      },
      ...
    }
    return sideData

## Faction Icons

Faction icons are not defined in this file but just read from the `Sidepics/` directory.

(NB: Some widgets, such as advanced playerlist, may complain about missing faction icon if they are not present)

Can be .bmp and maybe other formats. Filename is same as Faction name ie for above examples: `AwesomeDudes.bmp NKG.bmp Drone.bmp`

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Sidedata.lua](https://springrts.com/wiki/Sidedata.lua).*
