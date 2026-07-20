---
title: "CEG:Calls"
source_url: "https://springrts.com/wiki/CEG:Calls"
categories:
  - "CEG"
---
# CEG:Calls

<div id="ceg-calls" class="section mw-parser-output">

## CEG Calls

### Overview

There are four places where you can call a CEG: weapons, COB or LUS unit scripts, flying piece projectiles and synced Lua gadgets.

### Weapon CEGs

There are three weapon tags that can spawn CEGs:

- [cegTag](/gamedev-weapondefs#cegtag) - Spawns the CEG every frame at the weapon projectile's position and direction.
- [explosionGenerator](/gamedev-weapondefs#explosiongenerator) - Spawns the CEG when the weapon hits its target.
- [bounceExplosionGenerator](/gamedev-weapondefs#bounceexplosiongenerator) - For bouncing weapons only. Spawns the CEG when the weapon bounces.

### Calling CEGs from unit scripts

Calling a CEG from unit scripts requires two steps. First, in the unit's definition, you need to **define the order of the effects:**

For a .fbi unitdef use:

    [sfxtypes] {
      explosiongenerator0 = custom:ExplosionGeneratorName0;
      explosiongenerator1 = custom:ExplosionGeneratorName1;
      //and so on...
    }

For a .lua unitdef use:

    sfxtypes = {
      explosiongenerators = {
        "custom:ExplosionGeneratorName0",
        "custom:ExplosionGeneratorName1",
        --and so on...
      },
    },

(See [Gamedev:UnitDefs#SFXTypes](/gamedev-unitdefs#sfxtypes))

#### COB

To actually generate the explosion in a COB, you need to call [emit-sfx](/animation-cobconstants#emit-sfx):

    emit-sfx 1024 + ceg_num from pieceName;

Where ceg_num is the number of the explosion generator in the unit definition (the first one is 0, the next is 1, and so on). The CEG will have the position and direction of the piece you emit it from. For syntactic sugar you can use:

    #define MY_FIRST_AWESOME_CEG 1024 + 0
    emit-sfx MY_FIRST_AWESOME_CEG from pieceName;

In a COB script, you can call:

    set CEG_DAMAGE damage_value

Any `emit-sfx` instructions will then use that value for the "damage" (use the '['d' operator](/ceg-operators#damage-2827d2729) to access this value).

#### LUS

In a Lua unit script you generate the explosion using [Spring.UnitScript.EmitSfx](/animation-luacallouts#effects) e.g.:

    EmitSfx(pieceName, SFX.CEG + ceg_num)

Where ceg_num is the number of the explosion generator in the unit definition as before.

### Piece Projectiles

CEGs can be attached to piece projectiles which are created when a unit script calls [explode](/animation-cobconstants#explode) (COB) or [Explode](/animation-luacallouts#effects) (lua) with an argument of `COB.FALL`. See [Gamedev:UnitDefs#pieceExplosionGenerators](/gamedev-unitdefs#pieceexplosiongenerators).

### Synced Lua Gadget CEGs

The only method that lets you directly call a CEG by name, anywhere on the map. See [Spring.SpawnCEG](/lua-syncedctrl#other). Note that the damage parameter does not apply damage, but is used to set the ['d' operator](/ceg-operators#damage-2827d2729).

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [CEG:Calls](https://springrts.com/wiki/CEG:Calls).*
