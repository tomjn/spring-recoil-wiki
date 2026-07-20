---
title: "Animation-CobLuaDifferences"
source_url: "https://springrts.com/wiki/Animation-CobLuaDifferences"
categories:
  - "Animation"
---
# Animation-CobLuaDifferences

<div class="mw-parser-output">

## Overview of differences between COB unit scripts and Lua unit scripts

This is only of interest if you plan to port your COB scripts to Lua:

- Units of measurement: Lua uses elmos and radians consistently.
- Coordinate system: In Lua, coordinate system is same as world coordinate system, with all rotations right-handed. In COB, the moves along the x-axis and rotations around the z-axis have a different sign.
- In Lua, *Killed* gets recentDamage and maxHealth as separate arguments. In COB, you get only the ratio recentDamage/maxHealth\*100.
- Where COB uses *SetMaxReloadTime*, Lua uses *GetMaxReloadTime*.
- Where COB uses *QueryLandingPadCount* and *QueryLandingPad*, Lua uses *QueryLandingPad**s***
- The x and z arguments to *HitByWeapon*, *HitByWeaponId* and *RockUnit* are given in (x, z) order in Lua, and the opposite order in COB.
- *BeginTransport* and *EndTransport* take the height of the unit in COB and the unitID in Lua. (Use 'local height = Spring.GetUnitHeight(unitID)' to get the height.)
- *TransportDrop* gets PACKXZ(x,z) in COB; in Lua, it gets the entire vector (x, y, z) as three arguments.
- Where COB uses *SetSpeed* and *SetDirection*, Lua uses *WindChanged* and *ExtractionRateChanged*.
- Lua does not have *Go* (this is called for activated extractors immediately after each *SetSpeed* call.)

## Which one is better? Lua or COB unitscripts?

If you are starting a new project and wonder what script language to use, look at this list:\
**data types:**\
COB: - only basic variables.\
Lua: + arrays, strings and tables.\
This is quite important as it allows for easier creation of advanced scripts.\

**availability of examples, documentation**\
COB: + is/was used in Total Annihilation. Lots of third party units were made for that game and maybe you can reuse some scripts.\
COB: - unclear legal status of these scripts\
COB: - Outside of the TA community, there are no tutorials and it is unknown.\
Lua: + is also used in projects outside Spring, so it has more tutorials.\
Lua: + The documentation on Spring specific Lua will probably get better, COB not.\

**Interaction with the rest of Spring**\
COB: - Typically only basic stuff, but there is a messy way of interacting with gadgets which must be written in a way to support COB interaction.\
Lua: + can use all the other Lua functions Spring has to offer.\
Lua: + game logic (gadgets) is written in Lua, too. So you need to know Lua anyway.

**Ease of use**\
COB: - Requires recompiling the script with a compiler after each change.\
COB: - This compiler appears to be pretty buggy.\
COB: - Compiled scripts are not readable for human eyes, but can be decompiled.\
Lua: + A text editor is all you need. Many editors support Lua syntax highlighting.\
Lua: + Scripts are not compiled so it is easy to look at the scripts of other games for examples.\

**Script performance**\
COB: + Faster for simple scripts that have no interaction with gadgets.\
COB: - Slower when interacting with gadgets, trickier to code such interaction.\
Lua: - Slower threading engine.\
Lua: + Faster when interacting with gadgets.\

### Conclusion

Unless you already have lots of complex unit scripts by porting TA content, Lua is always better.\
Contra to popular belief, COB is actually not easier to learn.

## Hints

- COB & LUS (LuaUnitScripts) can be reloaded ingame via `/reloadcob %unitdefname`, also LUS get reloaded with `/luarules reload`, too.

## Avoid writting "COB-style" Lua scripts

See <a href="http://springrts.com/phpbb/viewtopic.php?f=23&amp;t=25960" class="external text" rel="nofollow">this thread</a> for an example on how you can improve your copy&paste hackjob script.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Animation-CobLuaDifferences](https://springrts.com/wiki/Animation-CobLuaDifferences).*
