---
title: "Project proposals"
source_url: "https://springrts.com/wiki/Project_proposals"
categories:
  - "GSoC"
---
# Project proposals

<div class="mw-parser-output">

This page contains project proposals for [Google Summer of Code](/google-summer-of-code) and some general project ideas.

Below is a list of project ideas by the developers.

## GSoC project proposals

### Limited play area

Estimated difficulty: **medium**

Spring uses a finite-world model, where the scene has distinct bounds that all actors must obey. Current Spring map formats have a hardcoded rectangle boundary geometry; they also provide very limited support for defining aesthetics of the surrounding environment outside the play area.

The new system should allow the map's developer to restrict the playable area to a subset of the global area, possibly adding support for multiple shapes and/or non rectangular shape restrictions.

The restriction shapes should be readable and changeable mid-game through the engine's Lua API. Proper handling of units which are suddenly off-map needs to be implemented.

**Details:** [GSoC_Limited_play_area](/gsoc-limited-play-area)

**Potential mentors:** abma, midknight

### Sensor handling redesign / simplification

Estimated difficulty: **high**

Currently there are a number of different "sensor" systems in the engine: LineOfSight, Radar, Sonar, and Seismic. Some sensors can be jammed, some cannot. Some respect terrain, and some are always circular in coverage.

A new sensor system should integrate the current LOS, Radar, Sonar, Seismic systems into a streamlined codebase, to reduce amount of code in each implementation, and it should add additional features which would then be available for all types, while improving efficiency where possible.

Preferably all this should also be faster than the current system or a compelling argument/experiment should be made that shows there cannot be a faster system with the same features.

**Details:** [GSoC_Sensor_handling_redesign](/gsoc-sensor-handling-redesign)

**Potential mentors:** abma, midnight

### Engine level abstraction of resources

Estimated difficulty: **medium to high**

The Spring engine has its roots in an older Real-Time Strategy title, where only two resources were incorporated into the game design. The current resource system is largely present in the codebase being hardcoded in a lot of critical places.

The old system needs to be replaced, the new one should be flexible enough to reproduce everything that the old system did and be able to imitate the behaviour of most common RTS game titles.

The engine's Lua API to fetch resources will have to be adapted to the new system, and new calls will have to be added to it.

**Details:** [GSoC_Engine_resource_abstraction](/gsoc-engine-resource-abstraction)

**Potential mentors:** abma, midnight

### Implementing a Scene Graph

Estimated difficulty: **high**

The Spring rendering engine uses a lot of FFP (fixed function pipeline) OpenGL functions. This model is becoming deprecated and is generally slower and less flexible than more modern approaches.

Under this proposal, the rendering code should get a complete overhaul and moved into a Scene Graph. Allowing to replace the old code optionally with shader based approaches, including techniques as normal/relief mapping or 100% GPU based rendering of particles.

**Details:** [GSoC_New_rendering_system](/gsoc-new-rendering-system)

**Potential mentors:** abma, jK, midnight

### New shadowmap techniques

Estimated difficulty: **high**

Currently Spring uses a single shadowtexture causing disturbed shadows when the viewrange increases. The proposal is to implement one of the newer techniques like cascaded shadowmaps (CSM), percentage-closer filtering (PCF) or variance shadowmaps (VSM). Support for transparent shadows is appreciated.

**Potential mentors:** jK

### Host change during a match

Estimated difficulty: **medium to high**

Spring's network model implies the existence of a server to host a battle. For various reasons the network link between host and clients can be interrupted. A system should be designed to allow manual and/or automatic switching of the game's host (possibly using an existing player after testing load handling capabilities).

**Details:** [GSoC_Reconnect_Host_change](/gsoc-reconnect-host-change)

**Potential mentors:** abma, koshi

## General ideas for new developers

These projects are interesting, but do not fit into the time schedule of GSoC.

### validAIs.lua

Estimated difficulty: **low to medium**

Not all [AI-bots](/ai-skirmish) work with every game. If an AI is added by the player into a game that it does not support, the player experience is unpleasant: Best case the AI simply does nothing, worst case the game hangs or crashes. This has been a common problem since years.

The solution could be a file included into games that contains a list of AIs known to support it. The lobby clients would read this file and block the user from adding unsupport AIs. This kind of whitelisting is already implemented for maps as [Validmaps.lua](/validmaps.lua), so it would be nice and consistent to follow the same logic.

<a href="http://springrts.com/mantis/view.php?id=2923" class="external free" rel="nofollow">http://springrts.com/mantis/view.php?id=2923</a>

### In source Lua-API documentation

Estimated difficulty: **low to medium**

write a tool, that creates html from in-source comments to document the lua api. For Example:

    /*-
    Prints a message
    @param msg
    */
    static int Echo(lua_State* L);

this should create the function in the lua-api-docs

Spring.Echo

(this is just a suggestion)

see also <a href="http://springrts.com/phpbb/viewtopic.php?f=73&amp;t=27771" class="external text" rel="nofollow">meeting minutes</a> (possible solution for in-source lua documentation)

### Port spring to ARM/Android

Estimated difficulty: **medium to very high**

Spring currently seems to not work on the ARM architecture as streflop currently doesn't support ARM. Also there will be possible compile/linker/sync errors that have to be fixed first to make it run flawlessly. Also its not clear if its possible if spring can be made syncing to x86 platforms because on some ARM processors no FPU available.

For a possible starting point see the [Spring on ARM](/spring-on-arm) page.

### 3D map format

Estimated difficulty: **very high**

The current map format is 2d only (with heightmaps), adding a real 3d map format would allow real bridges or some fancy maps.

<a href="http://code.google.com/p/recastnavigation/" class="external text" rel="nofollow">Recast navigation</a> could be used as pathfinder. This project is really difficult, as many / most parts of the engine have to be changed.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Project proposals](https://springrts.com/wiki/Project_proposals).*
