---
title: "Lua PathFinder"
source_url: "https://springrts.com/wiki/Lua_PathFinder"
categories:
  - "Lua"
---
# Lua PathFinder

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua PathFinder

### PathFinder

**Path.RequestPath**

     ( string "MoveTypeName" | number moveID,
       number start_x, number start_y, number start_z,
       number end_x,   number end_y,   number end_z
       [, number radius = 8 ]
     ) -> nil | pathObject path (see below)

### Path UserData Object

**Path:GetPathWayPoints**

     ( ) -> nil | {
        [1] = { x,y,z }, ...
      },{
        [1] = startIdxOfDetailedPath,
        [2] = startIdxOfDetailedEstimatedPath1,
        [3] = startIdxOfDetailedEstimatedPath2,
      }

GetPathWayPoints() returns 2 tables: 1 table with the waypoints and 1 table with 3 indices (in the waypoint table) when a new (more lazy) pathfinding algorithm begins. So the waypoint table contains 3 different levels of details.

**Path:Next**

     ( number pos_x, number pos_y, number pos_z,
       [, number radius = 0 ]
     ) -> nil | number x, number y, number z

Path:Next() returns the next waypoint in the path. Unlike GetPathWayPoints() in which the resolution of the waypoints decreases, Next updates the path so the resolution will increase as it approaches the target.

Note that *Path* in *Path:GetPathWayPoints* and *Path:Next* is not part of the command, but rather a reference to the path Object created by *Spring.RequestPath*. It must match the path Object (case sensitive).

### Further Reading

<a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=22953&amp;start=2" class="external text" rel="nofollow">a forum thread</a>

## PathNodeCosts

The following functions allow manipulating the cost of nodes visited by the pathfinding algorithm through numbered additive overlays (arrays). Only one overlay can be active at once, but as many as desired may be created with **InitPathNodeCostsArray**. The active layer is set by **SetPathNodeCosts**.\

NOTE: There are separate arrays for synced & unsynced! - don't ask when the unsynced one is used ... -

IMPORTANT: the size of a newly created layer can be arbitrary, but ideally should match the heightmap dimensions. **GetPathNodeCost** ALWAYS takes heightmap coordinates as arguments, which are internally converted to the resolution of the active node-overlay (if any).

**Path.InitPathNodeCostsArray**

     (number arrayID, number numNodesX, number numNodesZ) -> boolean success

**Path.FreePathNodeCostsArray**

     (number arrayID) -> boolean success

**Path.SetPathNodeCosts**

     (number arrayID) -> boolean success

**Path.GetPathNodeCosts** New in version 104.0

     (number arrayID) -> nil | table overlayCosts

**Path.SetPathNodeCost**

     (number arrayID, number nodeArrayIndex, number cost) -> boolean success

**Path.GetPathNodeCost**

     (number arrayID, number heightMapX, number heightMapZ) -> number nodeCost

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua PathFinder](https://springrts.com/wiki/Lua_PathFinder).*
