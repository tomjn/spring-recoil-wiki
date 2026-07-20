---
title: "Armordefs.lua"
source_url: "https://springrts.com/wiki/Armordefs.lua"
categories:
  - "Gamedata"
---
# Armordefs.lua

<div class="mw-parser-output">

This file sorts units into different armor classes. Weapons can deal different amount of damage to different armor classes.

## Location

`armordefs.lua` is a file in the `Gamedata/` directory of a Spring Game.

## Source

The engine source code which parses the data from this file is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Misc/DamageArrayHandler.cpp" class="external text" rel="nofollow">rts/Sim/Misc/DamageArrayHandler.cpp</a>

## Details

By default a damage class named "default" exists and every unit is in it. So if all your weapons only deal "default" damage then this file is not needed.

## Example

    local armorDefs = {
        tanks = {
            "supertank",
            "megatank",
        },

        infantry = {
            "dude",
        },
    }

    --NOTE: only needed for <95.0 (before engine was expecting a cryptic format)
    if not(Game) or not(Game.version) then
      for categoryName, categoryTable in pairs(armorDefs) do
        local t = {}
        for _, unitName in pairs(categoryTable) do
          t[unitName] = 1
        end
        armorDefs[categoryName] = t
      end
    end

    return armorDefs

## Weapon Example

Goes with above example, a weapon that deals 60 damage to infantry but only 5 damage to tanks:

    ...
    damage = {
        infantry = 60,
        tanks = 5,
    },
    ...

## Shields

In engine versions =\< 96.0 the damage dealt to shields is the weapon's *default* value. This <a href="https://springrts.com/mantis/view.php?id=4450" class="external text" rel="nofollow">changed</a> in v98.0

Putting a shield into an armor class is analogical to units, ie. the armorDefs entry is its weaponDef name:

    armorDefs = {
      units = { "shieldbot" },
      shields = { "shieldbot_shield" }
    }

Then in some damage table:

    damage = {
      default = 123,
      units = 456,
      shields = 789
    }

## Links to more Examples

<a href="http://code.google.com/p/zero-k/source/browse/trunk/mods/zk/gamedata/armordefs.lua" class="external text" rel="nofollow">zero-K</a>\
Contains scripting to take into account various things like EMP damage.

<a href="http://code.google.com/p/springtutorialgame/source/browse/trunk/SpringTutorialGame.sdd/Gamedata/armordefs.lua%7CSpring" class="external text" rel="nofollow">Tutorial Game</a>\
Uses default damage class, except for one unit that is "armored."

<a href="http://sourceforge.net/p/mwspring/code/899/tree/Gamedata/armordefs.lua" class="external text" rel="nofollow">MechCommander: Legacy</a>\
Automatically assigns units to an armor class based on [UnitDef](/gamedev-unitdefs) tags and custom params.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Armordefs.lua](https://springrts.com/wiki/Armordefs.lua).*
