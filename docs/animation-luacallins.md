---
title: "Animation-LuaCallins"
source_url: "https://springrts.com/wiki/Animation-LuaCallins"
categories:
  - "Animation"
  - "Lua"
---
# Animation-LuaCallins

<div class="mw-parser-output">

## Introduction

Call-ins are calls from the engine, into the unit script. In other words, these functions are called, if they are defined, when a particular *event* happens.

For Lua unit scripts, a new call-in mechanism has been implemented, which is faster than the regular call-in mechanism used for widgets and gadgets.

Types for arguments are only shown where they're ambiguous. For a number of (common) arguments, the types are:

- unitID: number
- piece: number
- axis: number (1 = x axis, 2 = y axis, 3 = z axis)
- heading/pitch: number (radians)

## Generic

**script.Create** ( ) -\> nil

This is called just after the unit script has been created.

**script.StartMoving** ( ) -\> nil\
**script.StopMoving** ( ) -\> nil

These are called whenever the unit starts or stops moving. Typical use for them is to trigger wheels to start spinning, animate treads, or start/stop a walking animation. Since 95.0 they are only run when a unit transitions from zero to non-zero speed or vice versa, and no longer during in-place rotations.

**script.ChangeHeading** ( number deltaHeading ) -\> nil

New in version 104.0 Called when the unit changes heading.

**script.StartSkidding** ( ) -\> nil\
**script.StopSkidding** ( ) -\> nil

New in version 104.0 Called when a (ground) unit reacts to an impulse. The start-skidding threshold ('sqSkidSpeedMult') is configurable via [MoveCtrl.SetGroundMoveTypeData](/lua-movectrl#movetype-controlling)

**script.Killed** ( number recentDamage, number maxHealth ) -\> number corpseType

This is called when the unit is killed. The severity of the kill may be calculated as severity=recentDamage/maxHealth *(\*100 so that it's in percent, no? at least that is how severity was expressed in Cob/bos, I think. Of course there's no reason to emulate that, just pointing it out for people "converting")*. Typically, this function would play a death animation for the unit, and finally return a corpse type.

**script.WindChanged** ( number heading, number strength ) -\> nil

This is called for wind generators whenever the wind direction or strength changes.

**script.ExtractionRateChanged** ( number rate ) -\> nil

Called for metal extractors each time their extraction rate (metal per second) changes.

**script.setSFXoccupy** ( number curTerrainType ) -\> nil

Called when terrain type changes. Terrain type is calculated with the following rules (in this order):

- If unit is being transported -\> curTerrainType = 0
- If ground height \< -5 and unit is always upright -\> curTerrainType = 2
- If ground height \< -5 and unit is not always upright -\> curTerrainType = 1
- If ground height \< 0 and unit is always upright -\> curTerrainType = 1
- Otherwise -\> curTerrainType = 4

Where is curTerrainType = 3 ? :-)

Candidate to be changed to something saner later on.

**script.MoveRate** ( number curRate ) -\> nil

Called only for certain types of aircraft (those which use *CTAAirMoveType*.) The move rate is determined by the following rules (in this order):

- If the aircraft is landing or taking off -\> curRate = 1
- Otherwise -\> curRate = floor(curSpeed / maxSpeed \* 3), clamped to be in the range \[0, 2\]

**script.QueryLandingPads** ( ) -\> { number piece1, number piece2, ... }

Called one time for units with landing pads. Should return a table with pieces which should be used as landing pads. The number of pieces returned also determines the number of pads, so for Lua unit scripts there is no QueryLandingPadCount.

**script.Activate** ( ) -\> nil\
**script.Deactivate** ( ) -\> nil

Exact situation these are called depends a lot on the unit type. Factories are activated when they open their yard and deactivated when they close it. Aircraft are activated when they take off and deactivated when the land. Any unit that can be turned on or off is activated when it's turned on and deactivated when it's turned off. On *script.SetUnitValue(COB.ACTIVATION, ...)* one of these call-ins may be called too.

## Weapons

Weapon functions come in two variants.

- Separate function with numeric weapon number suffix. (e.g. *script.AimWeapon<u>1</u>(heading, pitch)*)
- Combined function which gets weapon number as second argument. (e.g. *script.AimWeapon(<u>weaponNum</u>, heading, pitch)*)

Only the first variant is listed here, so whenever you see a function whose name ends with a numeric one ("1"), you should either replace it with the actual weapon number, or you can write a single combined function that takes a *weaponNum* argument. For each script, all functions should use the same variant. Either all using name suffix, or all using combined functions.

**script.QueryWeapon1** ( ) -\> number piece\
**script.AimFromWeapon1** ( ) -\> number piece\
**script.AimWeapon1** ( heading, pitch ) -\> boolean\
**script.AimShield1** ( ) -\> boolean

Weapon support. The return value of QueryWeapon and AimFromWeapon determines the pieces which will be used for aiming: typically e.g. the barrel for QueryWeapon and the turret for AimFromWeapon. AimWeapon is then called to allow the script to turn the weapons in the target direction, which is passed as the heading and pitch argument (in radians). Only if AimWeapon returns true, the weapon is actually fired. AimWeapon is called repeatedly, at a rate determined by the [fireTolerance](/gamedev-weapondefs#firetolerance) tag.

**script.FireWeapon1** ( ) -\> nil\
**script.Shot1** ( ) -\> nil\
**script.EndBurst1** ( ) -\> nil

If after aiming the unit actually fires it's weapon, FireWeapon is called once at the beginning of the salvo. Shot is called just before each projectile is fired. RockUnit (see below) is called just after all projectiles for that frame have been fired. At the end of the salvo, EndBurst is called.

Of these call-ins, FireWeapon is the more generic one and Shot and EndBurst are more specialized. FireWeapon is usually used to play a recoil animation or emit some smoke near the weapon's barrel using EmitSfx.

**script.BlockShot1** ( targetUnitID, boolean userTarget ) -\> boolean

Allows you to block a weapon from shooting. TargetUnitID may be nil: in this case the unit has a ground-attack order.

**script.TargetWeight1** ( targetUnitID ) -\> number

Allows you to tweak the priority of the target for this particular weapon. The target priority is multiplied by the return value of this function. Lower priority targets are targeted first, so return a value smaller than 1 to prioritize a target, or return a value larger than 1 to avoid a target.

The exact behavior of specific values shouldn't be relied upon.

**script.RockUnit** ( x, z ) -\> nil

A bit like the weapon-specific FireWeapon function, although this is called after any weapon fires. As argument it gets a two dimensional vector in the direction the unit just fired. This may be used to â€œrockâ€? the unit as a whole a bit as part of the firing animation. Note though that this vector is in world space, so for a truly realistic rock direction it needs to be rotated according to the unit's current heading.

**script.HitByWeapon** ( x, z, weaponDefID, damage ) -\> nil \| number newDamage

This is called if a unit has been hit by a weapon. (x, z) is the direction from which the projectile came in unit space (the reverse direction of the impulse, to be exact.) It also gets the weaponDefID of the weapon which is dealing the damage, and the amount of damage. If HitByWeapon returns a number, this number will replace the damage value calculated by the engine.

Note: Pre Spring 95, this call-in runs just before the LuaRules UnitPreDamaged callin (see also [LuaCallinReturn](/luacallinreturn)). If HitByWeapon overrides the damage, UnitPreDamaged will see the new damage value, and may override again the damage value. Starting Spring 95, it is run after UnitPreDamaged.

## Builders and factories

**script.StartBuilding** ( heading, pitch ) -\> nil\
**script.StartBuilding** ( ) -\> nil\
**script.StopBuilding** ( ) -\> nil

These notify the script when a builder or factory starts or stops building.

The first variant (with heading and pitch arguments) is called for builders. For factories, the second variant is used. In this case the heading and pitch are not necessary, because the factory script specifies the build location itself using QueryBuildInfo.

BTW, don't forget to set INBUILDSTANCE to 1 to start building! For lua script, that is

      function script.StartBuilding(heading, pitch)
        SetUnitValue(COB.INBUILDSTANCE, 1)
      end

      function script.StopBuilding()
        SetUnitValue(COB.INBUILDSTANCE, 0)
      end

**script.QueryBuildInfo** ( ) -\> number piece

For factories only. Should return the piece to which the unit which is going to be build will be attached while it's being build.

**script.QueryNanopiece** ( ) -\> number piece

Called each time a nano particle is to be created. Should return the piece at which the particle will be spawned. This may be used to iterate through a few pieces, to simulate the factory/builder having multiple nanolathes.

N.B. As of 92.0 the results are cached and the function is called 31 times only. Deprecated in favour of Spring.SetUnitNanoPieces, which disables this callin when used.

### Example of what is needed to create a Mobile Builder

    local nanoPieces = {[0] = nanopoint1}
    local SIG_AIM = 2

    -- Add this to create()
    Spring.SetUnitNanoPieces(unitID, nanoPieces)
    --

    function RestoreAfterDelay()
        SetSignalMask(SIG_AIM)
        if building == false then
            Sleep(2000)
        end
    end

    function script.StopBuilding()
        SetUnitValue(COB.INBUILDSTANCE, 0)
        building = false
        StartThread(RestoreAfterDelay)
        Signal(SIG_AIM)
        SetSignalMask(SIG_AIM)
    end

    function script.StartBuilding(heading, pitch)
        Signal(SIG_AIM)
        SetUnitValue(COB.INBUILDSTANCE, 1)
        building = true
    end

    function script.QueryNanoPiece()
        local nano = nanoPieces[nanoNum]
        return nano
    end
     

## Transports

There are some different code paths inside Spring related to transports, each (unfortunately) also associated with a different set of unit script call-ins.

This table shows for the three different [transportUnloadMethod](/gamedev-unitdefs#transportunloadmethod) for both air transports and ground transports which callins are used and roughly when and how often they are called. Refer to the documentation below for a description of the call-ins.

The entire behavior around transports should be considered subject to change; it is obvious it is far from a perfect design currently.

<table>
<colgroup>
<col>
<col>
<col>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th></th>
<th>Load</th>
<th>UnloadLand (0)</th>
<th>UnloadDrop (1)</th>
<th>UnloadLandFlood (2)</th>
</tr>
&#10;<tr>
<td></td>
<td></td>
<td>default unload</td>
<td>fly over and drop unit</td>
<td>land, then release all units at once</td>
</tr>
<tr>
<td>air</td>
<td>BeginTransport (each)<br />
QueryTransport (each)</td>
<td>EndTransport (last)</td>
<td>EndTransport (each)</td>
<td>StartUnload (first)<br />
TransportDrop (each)<br />
EndTransport (last)</td>
</tr>
<tr>
<td>ground</td>
<td>TransportPickup (each)</td>
<td>TransportDrop (each)</td>
<td>TransportDrop (each)</td>
<td>TransportDrop (each)<br />
EndTransport (last)</td>
</tr>
</tbody>
</table>

### Air transports

**script.BeginTransport** ( passengerID ) -\> nil\
**script.QueryTransport** ( passengerID ) -\> number piece

For an air transport, if any one unit is picked up, these two are called in succession and the passenger is attached to the piece returned by the second one.

**script.StartUnload** ( ) -\> nil

Only called in UnloadLandFlood behavior. Signals the start of an unload cycle.

**script.TransportDrop** ( passengerID, x, y, z ) -\> nil

Only called in UnloadLandFlood behavior. Called when a passenger will be unloaded. Contrary to ground transports, Spring will detach the passenger after the call.

**script.EndTransport** ( ) -\> nil

In UnloadLand and UnloadLandFlood behaviors, these are called one time after all units are unloaded. (The transport is empty.) For the UnloadDrop behavior, this is called for every unit that is unloaded.

#### Example of what is needed for an air Transport

    -- This assumes that the name of the piece where you want to attach the unit is "link"
    function script.BeginTransport(passengerID)
        local unitHeight = Spring.GetUnitHeight(passengerID) -- This moves the unit down so that it appears as though the top of it is attached to where the link piece was set (usually underneath the transport)
        Move(link, y_axis, -unitHeight, 500)
    end

    function script.QueryTransport()
        return link
    end

    function script.EndTransport(passengerID)
        Move(link, y_axis, 0, 500) -- Once transport is complete, move the link piece back to where it was originally
    end
     

### Ground transports

**script.TransportPickup** ( passengerID ) -\> nil

Called when a passenger should be loaded into the transport. This should eventually call AttachUnit to actually attach the unit. Assuming the transport is in range of the next passenger, this will be called again for the next passenger 16 frames later, *unless* the script enters the BUSY state: then Spring will not move on to the next passenger until the script leaves the BUSY state.

**script.TransportDrop** ( passengerID, x, y, z ) -\> nil

Called when a passenger should be unloaded. This should eventually call DetachUnit to actually detach the unit, *unless* the used unload method is UnloadLandFlood, in which case Spring will actually detach the unit after the call.

**script.EndTransport** ( ) -\> nil

Only called in UnloadLandFlood behavior, after the last unit has been unloaded.

### Passenger

**script.Falling** ( ) -\> nil

For a unit dropped from an UnloadDrop transport, this is called every frame to inform the script the unit is still falling. It may be used to show a parachute for example.

**script.Landed** ( ) -\> nil

This is called one time after the unit reached the ground. May be used to hide a parachute for example.

## Internal

These call-ins are NOT available to Lua unit scripts. They are called by the engine however, but always 'intercepted' by the framework gadget. For completeness (or if you are poking at the gadget), they are listed here anyway.

**script.MoveFinished** ( piece, axis ) -\> nil\
**script.TurnFinished** ( piece, axis ) -\> nil

Called when a move or turn finished. The framework gadget uses this to resume the coroutines which are waiting for the particular move or turn to be finished.

**script.Destroy** ( ) -\> nil

Called right before the unit's script is destroyed. This may happen if the unit is being destroyed, but also if the unit's script is being replaced by another script. The framework gadget uses this to stop all threads and remove the unit from some internal data structures.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Animation-LuaCallins](https://springrts.com/wiki/Animation-LuaCallins).*
