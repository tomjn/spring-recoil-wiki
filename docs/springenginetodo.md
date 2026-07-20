---
title: "SpringEngineTODO"
source_url: "https://springrts.com/wiki/SpringEngineTODO"
---
# SpringEngineTODO

<div class="mw-parser-output">

A collection of ideas which could improve Spring. Before starting anything, please ask in the forum <a href="http://springrts.com/phpbb/viewforum.php?f=60" class="external text" rel="nofollow">developement-forum</a> so that you go in the right direction.

- Get a **stable OS X version** working. Contact the developers on the forums for this, as there are people who build and run it successfully. Still need proper packaging and maintaining,
  - Requires: C/C++, CMake and MacOS
  - Time: \< 1 month
  - Level of difficulty: Medium
  - More information at [/wiki/Spring_on_MacOSX](/spring-on-macosx)

<!-- -->

- clean up, sanitize, and implement a **consistent error handling** scheme in the engine
- add **general serializing** to the engine, which touches the following:
  - Implement saving/loading. There are a lot of direct LoadSave() functions in the game code, but the easier way would probably to finish the serialization in the class registration type interfaces (rts/System/creg), so everything can be serialized automatically.
    - Requires: C/C++
    - Time: ~3 months
    - Level of difficulty: medium - hard
  - [Implement re-sync](/syncing-system). After a sync problem is detected, and a re-sync of the random seed does not fix it the game would pause and use the rsync to adjust game state (current plan if for float3 data) to resync. After using rsync on it should be able to continue normally until the next sync error is detected.
    - Requires: C/C++, network programming
    - Time: ~3\< months
    - Level of difficulty: Hard

<!-- -->

- Implement a **general sensor system** replacing the radars, as described in <a href="http://taspring.clan-sy.com/phpbb/viewtopic.php?t=6105" class="external free" rel="nofollow">http://taspring.clan-sy.com/phpbb/viewtopic.php?t=6105</a>
  - Requires: C/C++, 3D/2D math (Lua knowledge not required, but prefered)
  - Time: ~2 months
  - Level of difficulty: Medium

<!-- -->

- **Abstracting the resource system** to allow more than two resources (metal/energy)
  - Requires: C/C++ (Lua knowledge not required, but prefered)
  - Time: ~1-3 months
  - Level of difficulty: Easy-Medium

<!-- -->

- **Exposing more Spring functions to the Lua world** (command AIs, move types) or/and small frameworks
  - Requires: basic C/C++, Lua
  - Time: ~1-3\< months (depends on the goal)
  - Level of difficulty: Easy-medium

<!-- -->

- Implement **MD5 as a model format or add other model formats**.
  - Requires: C/C++, 3D math (Lua knowledge not required, but prefered)
  - Time: ~1-3 months
  - Level of difficulty: Medium

<!-- -->

- Add **p2p/round-robin for hosting** (so host exit does not stop the game)
  - Requires: C/C++, network programming
  - Time: ~3\< months
  - Level of difficulty: Medium

<!-- -->

- **Fix bugs**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [SpringEngineTODO](https://springrts.com/wiki/SpringEngineTODO).*
