---
title: "Animation-CobCallins"
source_url: "https://springrts.com/wiki/Animation-CobCallins"
categories:
  - "Animation"
---
# Animation-CobCallins

<div class="mw-parser-output">

## Source

Some (but not all) are listed near the end of this file: <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Units/Scripts/CobInstance.cpp" class="external text" rel="nofollow">rts/Sim/Units/Scripts/CobInstance.cpp</a>

## Purpose

Callins have two purposes:

First, they allow a script to be notified when an event happens, such as the unit being created or destroyed.

Second, they allow the engine to get information from the script. Sometimes this is accomplished through a return value, but usually this is done by setting one of the arguments to a function to the requested value.

## Callins

### General

- Create(): Called when the unit is created. "Created" means when the unit's nanoframe is created; if you want to wait until the unit is actually finished, you'll have to use something like

<!-- -->

    while(GET BUILD_PERCENT_LEFT) sleep 250; 

- Activate()/Deactivate(): Called when the unit is turned on/off.
- Killed(severity, corpsetype): Called when the unit is killed. Severity indicates how many percent of the unit's hit points were dealt by the final blow. Corpsetype basically indicates the number of times the unit and its corpses are destroyed; for example, corpsetype = 3 acts as if the unit is destroyed, the corpse is destroyed, and the corpse's corpse is destroyed. If it runs out of corpses nothing is left behind. Set corpsetype to the desired value.

### Movement

- StartMoving()/StopMoving(): Called when the unit starts/stops moving. This includes rotation, so don't be surprised if StartMoving() sometimes gets called when a unit starts aiming at a target.
- SetSFXOccupy(terraintype): Supposedly called when the unit changes terrain type, although it didn't work last time I tried it? Maybe I was using it wrong. terraintype: 0 = transported, 1 = sea, 2 = deep sea (greater than 5 water depth and unit is upright), 4 = land.
- MoveRate\[0...3\](): Appears to be the aircraft equivalent of SetSFXOccupy. MoveRate3 doesn't appear to actually be used. MoveRate1 is called when the aircraft takes off or lands. If the aircraft is not taking off or landing, MoveRate0 is called when the aircraft drops below 1/3 maximum speed, MoveRate2 is called when the aircraft exceeds 2/3 maximum speed, and MoveRate1 is called when the aircraft enters within 1/3-2/3 maximum speed. I don't know if this actually works.
- SetDirection(heading): Used only for wind generators. Gives the direction of the wind.
- SetSpeed(speed): Used for wind generators, tidals, and mexes. Basically more resources = higher speed.

Comments:

- MoveRate0 ... Moverate3 only work with gunship type of aircraft:

<a href="http://springrts.com/phpbb/viewtopic.php?f=14&amp;t=26890&amp;hilit=Moverate0" class="external text" rel="nofollow">Forum thread</a>

- SetSFXOccupy(terraintype) for aircraft: terraintype = 4 when flying over land and 1 when flying over water. (I used "get IN_WATER" to find out when unit is submerged).

### Weapons

For weapons, X means either the number of the weapon, or "Primary", "Secondary", or "Tertiary" (don't put "Weapon" for these). I recommend using numbers, since it's cleaner and you can use more than three weapons that way.

- AimWeaponX(heading, pitch): Called every ~0.5s when the unit is aiming the weapon at a target. This is used to turn a unit's turrets toward the target. Return 1 when the weapon is ready to fire. Alternately, return 0 if you don't want the weapon to fire (you can use this to disable weapons).
- AimFromWeaponX(piecenum): You should set piecenum to a piece of the model; LOS is traced from the here to the target to see if the weapon can fire.
- FireWeaponX(): Called whenever the trigger is pulled on a weapon. This occurs before the *first* shot in a burst/projectile salvo (only).
- ShotX(zero): Called before every shot a weapon fires. This includes burst and projectile tags. This happens after FireWeaponX(), even for the first shot. There's one input argument which is 0, because of a typo in the source.
- QueryWeaponX(piecenum): You should set piecenum to a piece of the model. The shot starts from this piece of the model; this is called for this purpose after FireWeaponX() and ShotX(). LOS is also traced from here to the target to see if a weapon can fire. Make sure this is a piece on the weapon's turret. Not doing this right can cause headaches; example: <a href="http://trac.caspring.org/wiki/GunsJammingOnShips" class="external free" rel="nofollow">http://trac.caspring.org/wiki/GunsJammingOnShips</a>
- EndBurstX(): Called after the last shot in a burst.
- BlockShotX(in unitID, out block, in usertarget)
- TargetWeightX(unitID, weightMod)
- RockUnit(anglex, anglez): Called when the unit fires. Use it to rock the unit on firing, although there are other ways to do this. The angles returned are in unit space, and are multiplied by 500.
- HitByWeapon(anglex, anglez): Called when the unit is hit by a weapon. Angles are in unit space and multiplied by 500.
- HitByWeaponID(anglex, anglez, weapondefid, damage): Called when the unit is hit by a weapon. Angles are in unit space and multiplied by 500.
- SetMaxReloadTime(time): Called on unit creation. time is the time in ms that it takes the slowest-firing weapon to reload.

### Construction

- StartBuilding(): Called when the unit starts building.
- StopBuilding(): Called when the unit stops building.
- QueryNanoPiece(piecenum): You should set piecenum to the piece you want the nanospray to come from.
- QueryBuildInfo(piecenum): For factories. You should set piecenum to the piece you want the unit to be built on.

### Transportation

- Falling(): Used for airdropping units?
- Landed(): Used for airdropping units?
- QueryTransport(piecenum): You should set piecenum to the piece you want the transported unit to be attached to.
- BeginTransport(): Called when an air transport picks up a unit.
- EndTransport(): Called when an air transport becomes empty.
- TransportPickup(): Called when a land transport picks up a unit.
- TransportDrop(): Called when a land transport becomes empty.
- StartUnload(): Called when the transport starts the unloading process.

### Landing Pads

- QueryLandingPadCount(count): You should set count to the number of landing pads. However, it doesn't seem to be actually necessary to do this unless you want more than 16 pads.
- QueryLandingPad(piecenum1, piecenum2, piecenum3...): Set each piecenum to a different landing pad piece.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Animation-CobCallins](https://springrts.com/wiki/Animation-CobCallins).*
