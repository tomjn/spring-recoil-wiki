---
title: "Gamedev:WeaponMainDir"
source_url: "https://springrts.com/wiki/Gamedev:WeaponMainDir"
categories:
  - "Game_Dev"
---
# Gamedev:WeaponMainDir

<div id="weaponmaindir" class="section mw-parser-output">

## WeaponMainDir

[weaponMainDir](/gamedev-unitdefs#weaponmaindir) is a vector showing the direction of the weapon's aiming cone. [maxAngleDif](/gamedev-unitdefs#maxangledif) is the size of the aiming cone. With these tags you can limit the firing arc of weapons.

If you want to precisely choose the WeaponMainDir, you could run [Upspring](/upspring), create a new piece, move it around until the line, from the origin, to your piece, is along the line you want your weapon to fire, then write down the coordinate in WeaponMainDir. Keep in mind that [Upspring](/upspring) inverts the sign of the x and z axes.

### Example: forward firing gun

For instance, if you want your primary weapon to have a 90Â° fire arc forward, you'd write:

    weapons = {          
      {
        def = "Flamer",
        mainDir = "0 0 1", -- x:0 y:0 z:1 => that's forward!
        maxAngleDif = 90, -- 90Â° from side to side, or 45Â° from centre to each direction
      },
    }

### Example: two turrets on the sides of a unit

<div class="floatright">

[<img src="/images/Firing_arcs.gif" decoding="async" width="316" height="226" alt="Firing arcs.gif" />](/images/Firing_arcs.gif)

</div>

This unit that has one turret at left side and one turret at right side.

Each turret can rotate around 220Â°, a bit more then a semi circle which would be 180Â° This way each turret can only shot at its side. The firing arcs overlap at front and back so both turrets can fire there.

To achieve this effect, the [UnitDef's](/gamedev-unitdefs) weapon section looks like this:

    weapons = {          
      {
        def = [[Flamer]],
        mainDir = [[1 0 0]],
        maxAngleDif = 220,
      },
      {
        def = [[Flamer]],
        mainDir = [[-1 0 0]],
        maxAngleDif = 220,
      },
    }

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Gamedev:WeaponMainDir](https://springrts.com/wiki/Gamedev:WeaponMainDir).*
