---
title: "Animation-LuaCallouts"
source_url: "https://springrts.com/wiki/Animation-LuaCallouts"
categories:
  - "Animation"
  - "Lua"
---
# Animation-LuaCallouts

<div class="mw-parser-output">

## Introduction

The new callouts are defined in the Spring.UnitScript table.

Types for arguments are only shown where they're ambiguous. For a number of (common) arguments, the types are:

- unitID: number
- piece: number
- axis: number (1 = x axis, 2 = y axis, 3 = z axis)
- destination: number ([elmos](/gamedev-unitsofmeasurement) (linear), [radians](/gamedev-unitsofmeasurement) (angular))
- speed: number ([elmos](/gamedev-unitsofmeasurement) per second (linear), [radians](/gamedev-unitsofmeasurement) per second (angular))
- accel/decel: number ([radians](/gamedev-unitsofmeasurement) per second per frame)

You may also get the unit's "type" or def, which is the tag of each unit.lua file - and also what you use to spawn a certain unit using a console command. Both the UnitDefs global table and the unitDefID unit instance identifier are available in your lua animation script, so you can simply do:

        Spring.Echo(UnitDefs[unitDefID].name)

## Animation

**Spring.UnitScript.SetPieceVisibility** ( piece, boolean visible ) -\> nil\
**Spring.UnitScript.Show** ( piece ) -\> nil\
**Spring.UnitScript.Hide** ( piece ) -\> nil

These may be used to show/hide pieces of the unit's model.

**Spring.UnitScript.Move** ( piece, axis, destination\[, speed\] ) -\> nil

Move piece along axis to the destination position. If speed is given, the piece isn't moved immediately, but will move there at the desired speed. The X axis is mirrored compared to BOS/COB scripts, to match the direction of the X axis in Spring world space.

**Spring.UnitScript.Turn** ( piece, axis, destination\[, speed\] ) -\> nil

Turn piece around axis to the destination angle. If speed is given, the piece isn't rotated immediately, but will turn at the desired angular velocity. Angles are in radians. Always uses the shortest angular towards destination degree, and if at exactly 180 degrees opposite, will go counter-clockwise.

**Spring.UnitScript.Spin** ( piece, axis, speed\[, accel\] ) -\> nil

Makes piece spin around axis at the desired angular velocity. If accel is given, the piece does not start at this velocity at once, but will accelerate to it. Both negative and positive angular velocities are supported. Accel should always be positive, even if speed is negative.

Beware gimbal lock: <a href="http://en.wikipedia.org/wiki/Gimbal_lock" class="external free" rel="nofollow">http://en.wikipedia.org/wiki/Gimbal_lock</a>

**Spring.UnitScript.StopSpin** ( piece, axis\[, decel\] ) -\> nil

Stops a piece from spinning around the given axis. If decel is given, the piece does not stop at once, but will decelerate to it. Decel should always be positive. This function is similar to Spin(piece, axis, 0, decel), however, StopSpin also frees up the animation record.

**Spring.UnitScript.IsInTurn** (number piece, number axis) -\> boolean\
**Spring.UnitScript.IsInMove** (number piece, number axis) -\> boolean\
**Spring.UnitScript.IsInSpin** (number piece, number axis) -\> boolean

Returns true if such an animation exists, false otherwise.

**Spring.UnitScript.GetPieceTranslation** ( piece ) -\> number x, y, z\
**Spring.UnitScript.GetPieceRotation** ( piece ) -\> number x, y, z

Get the current translation/rotation of a piece. The returned numbers match the values passed into Move and Turn.

**Spring.UnitScript.GetPiecePosDir** ( piece ) -\> number px, py, pz, dx, dy, dz

Get the piece's position (px, py, pz) and direction (dx, dy, dz) in **unit space**. This is quite similar to *Spring.GetUnitPiecePosDir*, however that function returns in **world space**.

## Threads

**Spring.UnitScript.StartThread** ( function fun, ... ) -\> nil

Starts a new (animation) thread, which will execute the function 'fun'. All arguments except the function to run are passed as-is as arguments to 'fun'. [COB-Threads](/animation-cobthreads) has a decent description on COB threads, which are mimicked here in Lua using coroutines.

**Spring.UnitScript.SetSignalMask** ( number mask ) -\> nil\
**Spring.UnitScript.Signal** ( number signal ) -\> nil

These two support functions offer a powerful way to kill running threads. SetSignalMask assigns a mask to the currently running thread (any new threads started by this one will inherit the signal mask). Signal immediately stops all threads of this unit for which the bitwise and of mask and signal is not zero.

<a href="http://springrts.com/phpbb/viewtopic.php?f=14&amp;t=26274&amp;start=2%7C" class="external text" rel="nofollow">What signal will stop which threads?</a>

**Spring.UnitScript.WaitForMove** ( piece, axis ) -\> nil\
**Spring.UnitScript.WaitForTurn** ( piece, axis ) -\> nil

Waits until the piece has stopped moving along / turning around the axis. If the piece is not animating, this functions return at once. You can not wait for a spin, because a spin does never finish.

**Spring.UnitScript.Sleep** ( number milliseconds ) -\> nil

Waits a number of milliseconds before returning.

## Effects

**Spring.UnitScript.EmitSfx** ( piece, number id ) -\> nil

Emits a [CEG](/ceg-main) effect or weapon from the given piece. The id is based on one of the effect or weapon ids defined in the units unitdef.\

If the piece has no geometry, then the sfx is emitted in the +z direction from the origin of the piece.

If the piece has 1 vertex, the emit dir is the vector from the origin to the the position of the first vertex the emit position is the origin of the piece.

If there is more than one vertex in the piece, then the emit vector is the vector pointing from v\[0\] to v\[1\], and the emit position is v\[0\].

Example:

    --get the id of the CEG effects:
    local smokecloud = SFX.CEG   --the first effect from the list in the unitdef
    local smokecloud2 = SFX.CEG +1   --the second effect from the list in the unitdef
    local fire = SFX.CEG +2   --the third effect from the list in the unitdef
    --get the id of the emiter piece:
    local turret = piece "turret"
    EmitSfx(turret, smokecloud)   --emit the first effect

**Spring.UnitScript.ShowFlare** ( number piece ) -\> nil

Same as COB's show \_inside\_ FireWeaponX.

**Spring.UnitScript.Explode** ( piece, number flags ) -\> nil

Explodes a piece, optionally creating a particle which flies off. Typically used inside Killed. Explode does not hide the piece by itself; if using it outside Killed you may want to Hide the piece immediately after. The flags may be any combination of:

- **SFX.NONE**: do nothing after creating a heatcloud. Other flags have no effect, except NO_HEATCLOUD. If that is given too, the call is a no-op.
- **SFX.SHATTER**: shatter the piece in many fragments. Only the NO_HEATCLOUD flag has any effect if this is present.
- **SFX.EXPLODE** \| **SFX.EXPLODE_ON_HIT**: the piece that flies of should explode when it hits something.
- **SFX.FALL**: the piece should be affected by gravity (this is currently always forced on by Spring, to prevent pieces that float in air indefinitely).
- **SFX.SMOKE**: leave smoke trail.
- **SFX.FIRE**: the piece is on fire when it flies off.
- **SFX.NO_CEG_TRAIL**: disable a CEG trail, if present.
- **SFX.NO_HEATCLOUD**: suppress the heat cloud that's shown by default.

## Other

**Spring.UnitScript.AttachUnit** ( piece, passengerID ) -\> nil\
**Spring.UnitScript.DropUnit** ( passengerID ) -\> nil

Attaches or detaches another unit (a passenger, as this is designed for transports) to this unit. For AttachUnit, piece specifies the attachment point. Attaching to piece `-1` makes the passenger unit enter a void state whereby it will never:

1.  take damage, even from Lua (but can be killed by Lua)
2.  be rendered through any engine path (nor their icons)
3.  be intersect-able by either synced or unsynced rays
4.  block any other objects from existing on top of them
5.  be selectable

**Spring.UnitScript.GetUnitValue** ( ... ) -\> number \| number, number \| bool\
**Spring.UnitScript.SetUnitValue** ( ... ) -\> nil

This may be used instead of COB's get and set codes. It is recommended however, to use dedicated Lua functions (e.g. Spring.GetUnitHealth(unitID) instead of GetUnitValue(4)): these functions should be considered a relic of the past. As of 97.0 SetUnitValue now accepts lua booleans as well as numbers to set the value.

Note that these are identical to Spring.GetUnitCOBValue and Spring.SetUnitCOBValue (see also [Lua_SyncedCtrl#Lua_to_COB](/lua-syncedctrl#lua-to-cob) for the signature of those functions), except that an unitID argument shouldn't be passed to the versions in the Spring.UnitScript table.

**Spring.UnitScript.GetLongestReloadTime** ( unitID ) -\> number reloadTime

Returns max(reload time) of all the unit's weapons in milliseconds. This utility function exists to aid in porting BOS scripts, which have a SetMaxReloadTime call-in that is called immediately after Create.

## Internal

You generally shouldn't need any of the following call-outs, they are provided by the engine to allow the Lua framework to do it's work.

**Spring.UnitScript.CreateScript** ( unitID, table callIns ) -\> nil

This deletes the unit's current script (whether it's a COB or Lua script doesn't matter), and sets it up with a brand new Lua unit script, initially registering the call-ins given in the table as (string, function) pairs.

**Spring.UnitScript.UpdateCallIn** ( unitID, string name\[, function callIn\] ) -\> nil

This updates a single call-in for the unit's current **Lua** unit script. If the unit does not currently have a Lua unit script, an error is raised. If the callIn argument is not given (or nil), the call-in with the given name is removed.

**Spring.UnitScript.CallAsUnit** ( unitID, function fun, ... ) -\> nil

As none of the call-outs takes a unitID, the engine needs to know the *active unit* when one of those is called. Using this function another function can be called with the active unit set arbitrarily.

**Spring.UnitScript.SetDeathScriptFinished** ( \[number wreckLevel\] )

Tells Spring the Killed script finished, and which wreckLevel to use. If wreckLevel is not given no wreck is created. May only be called after Killed has been called. DO NOT USE, the framework handles this transparently (it passes the return value of Killed into this function.)

## Localized functions for less typing

In unitscript enviroment some of the **Spring.UnitScript.xxxxx()** functions are already localized\*. So unless doing anything special, you can save keystrokes:

     Show (piece)

instead of the longer:

     Spring.UnitScript.Show (piece)

'Localization:' Localization is a important way to speed up lua scripts. Every time a variable or function in Lua is used, the Lua-VM has to search for this function first, find it and then put it to use. This slows your script down, especially if a function is called repeatedly (e.g. in a loop). To Avoid such searches, Lua allows you to localize 64 variables or functions per script.

        for i=1,128, 1 do

        x,y,z= Spring.GetUnitPosition(unitID)

        end

- This function is searched and found 128 Times in the table Spring, where it resides

local fastVersionOfTheSameFunction=Spring.GetUnitPosition

        for i=1,128, 1 do

        x,y,z= fastVersionOfTheSameFunction(unitID)

        end

- This function is near instantaneously found and thus faster

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Animation-LuaCallouts](https://springrts.com/wiki/Animation-LuaCallouts).*
