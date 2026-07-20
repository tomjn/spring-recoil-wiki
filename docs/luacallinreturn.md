---
title: "LuaCallinReturn"
source_url: "https://springrts.com/wiki/LuaCallinReturn"
categories:
  - "Deprecated"
---
# LuaCallinReturn

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< LuaCallinReturn

## Engine Source

If you can understand Lua code well and wish to get the most up to date info, you can refer to: <a href="https://github.com/spring/spring/blob/106.0/cont/base/springcontent/LuaGadgets/actions.lua" class="external text" rel="nofollow">cont/base/springcontent/LuaGadgets/actions.lua</a> , <a href="https://github.com/spring/spring/blob/106.0/cont/LuaUI/widgets.lua" class="external text" rel="nofollow">cont/LuaUI/widgets.lua</a> and\
<a href="https://github.com/spring/spring/blob/106.0/cont/base/springcontent/LuaGadgets/gadgets.lua" class="external text" rel="nofollow">cont/base/springcontent/LuaGadgets/gadgets.lua</a>\
to see how widget/gadget call-ins are distributed, find call-in and widgetHandler function definitions, see how they are processed and what values should be returned from some call ins (are these the only files?)

## What is a callin anyway?

Call-ins are calls from the engine, into the gadget or widget script. In other words, these functions are called when a particular *event* happens. Some call-in functions can return values to the engine.

### Blocking events with return values

The call-in functions named ***Allow***XXX can block their event by returning *false*.\
For example *AllowUnitTransfer()*\
`return true` = allow transfer\
`return false` = deny transfer

## Commands, general-purpose:

Initialize() --\> none.\
called when widget/gadget gets (re-)loaded.

Shutdown() --\> none.

PlayerChanged --\> (playerID). gadget/widget: Use this to check whether a player has become spectator for instance.

LayoutButtons() --\> unknown, please document.

ConfigureLayout() --\> "command".

CommandNotify() --\> "id, params, options", where id = the CommandID

KeyPress() --\> "key, mods, isRepeat", where key = keymap, mods = SHIFT, etc.

KeyRelease() --\> "key"

MouseMove() --\> "x, y, dx, dy, button"

MousePress() --\> "x, y, button"\
button parameter values: left - 1, middle - 2, right - 3

New in version \>96.0 buttom param removed <a href="https://github.com/spring/spring/commit/4c104344e92256e33d79820e9012c5e1178e212b" class="external text" rel="nofollow">4c104344</a>

MouseRelease() --\> "x, y, button"\
Please note that in order to have Spring call MouseRelease, you need to have a MousePress call-in in the same widget that returns true.

MouseWheel() --\> "up, value"

IsAbove() --\> "x, y" where x,y = screen coordinates.

GetTooltip() --\> "x, y" where x,y = screen coordinates. Returns WorldTooltip.

AddConsoleLine() --\> "msg, priority"

MapDrawCmd() --\> "playerID, cmdType, px, py, pz, labeltext"

AllowCommand() --\> "unitID, unitDefID, unitTeam, cmdID, cmdParams, cmdOptions, cmdTag, synced"\
Synced only.

CommandFallback() --\> "unitID, unitDefID, unitTeam, cmdID, cmdParams, cmdOptions, cmdTag"

CommandsChanged() --\> unknown (none?)

AllowUnitCreation() --\> "unitDefID, builderID, builderTeam, x, y, z, facing"

AllowUnitTransfer() --\> "unitID, unitDefID, oldTeam, newTeam, capture"

AllowUnitBuildStep() --\> "builderID, builderTeam, unitID, unitDefID, part"

AllowFeatureCreation() --\> "featureDefID, teamID, x, y, z"

AllowFeatureBuildStep() --\> "builderID, builderTeam, featureID, featureDefID, part"\
Called just before a feature updates its build percentage. Returns a bool to allow the change.

AllowResourceLevel() --\> "teamID, res, level"

AllowResourceTransfer() --\> "teamID, res, level"

Update() --\> "dt"\
called every screenframe. dt is the time since the last screenframe

DefaultCommand() --\> "type,id"\
can return an [CMD](/lua-cmds) to change cursor and command. <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=26438" class="external text" rel="nofollow">example usage</a>

AllowDirectUnitControl(unitID, unitDefID, unitTeam, playerID) -\> allowFpsControl\
*return true* allows fps mode, *return false* blocks it.

## Unit-Specific:

UnitPreDamaged() --\> "unitID, unitDefID, unitTeam, damage, paralyzer, weaponDefID, attackerID, attackerDefID, attackerTeam" (prior to 94.0)

UnitPreDamaged() --\> "unitID, unitDefID, unitTeam, damage, paralyzer, weaponDefID, projectileID, attackerID, attackerDefID, attackerTeam" (as of 94.0)

UnitDamaged() --\> "unitID, unitDefID, unitTeam, damage, paralyzer, weaponDefID, projectileID, attackerID, attackerDefID, attackerTeam" (as of 95.0)\
Can overwrite the taken damage by returning a new number value.\

As of 88.0 for both UnitDamaged and UnitPreDamaged:

        weaponDefID -1 --> debris collision
        weaponDefID -2 --> ground collision
        weaponDefID -3 --> object collision
        weaponDefID -4 --> fire damage
        weaponDefID -5 --> water damage
        weaponDefID -6 --> kill damage
        weaponDefID -7 --> crush damage

As of 96.0 {Unit,Feature}{Pre}Damaged events receive the 'attacker' ID when object is crushed

UnitExperience() --\> "unitID, unitDefID, unitTeam, experience, oldExperience"\
Spring.SetExperienceGrade must be called first to determine how often it is called

UnitCreated() --\> "unitID, unitDefID, teamID, builderID"\
Unit started being built (it's in wireframe mode)

UnitFinished() --\> "unitID, unitDefID, teamID"

UnitFromFactory() --\> "unitID, unitDefID, unitTeam, factID, factDefID, userOrders"

UnitDestroyed() --\> "unitID, unitDefID, teamID, attackerID, attackerDefID, attackerTeamID"

UnitTaken() --\> "unitID, unitDefID, unitTeam, newTeam"\
Unit still belongs to old team

UnitGiven() --\> "unitID, unitDefID, unitTeam, oldTeam"\
Unit now belongs to new team

UnitIdle() --\> "unitID, unitDefID, teamID"\
No commands in this unit's queue. Beware, might be fired while 'guarding'.

UnitCommand() --\> "unitID, unitDefID, unitTeam, cmdID, cmdOpts, cmdParams, cmdTag" (cmdTag only available from version 95.0)

UnitSeismicPing() --\> "x, y, z, strength"

UnitEnteredRadar() --\> "unitID, unitTeam"

UnitEnteredLos() --\> "unitID, teamID"

UnitLeftRadar() --\> "unitID, unitTeam"

UnitLeftLos() --\> "unitID, unitDefID, teamID"

UnitLoaded() --\> "unitID, unitDefID, unitTeam, transportID, transportTeam"

UnitUnloaded() --\> "unitID, unitDefID, teamID, transportID"

UnitCloaked() --\> "unitID, unitDefID, teamID"

UnitDecloaked)--\> "unitID, unitDefID, teamID"

UnitMoveFailed() --\> "unitID, unitDefID, unitTeam"\
Only called for unitDefIDs registered via [Script.SetWatchUnit](/lua-system#synced) since 85.0

StockpileChanged() --\> "unitID, unitDefID, unitTeam, weaponNum, oldCount, newCount"

UnitEnteredWater() --\> "unitID, unitDefID, teamID" (as of 95.0)

UnitEnteredAir() --\> "unitID, unitDefID, teamID" (as of 95.0)

UnitLeftWater() --\> "unitID, unitDefID, teamID" (as of 95.0)

UnitLeftAir() --\> "unitID, unitDefID, teamID" (as of 95.0)

ShieldPreDamaged() --\> "proID, shieldEmitterWeaponNum, shieldCarrierUnitID, boolBounceProjectile, beamEmitterWaponNumber, beamCarrierUnitID, startx, starty, startz, hitx, hity, hitz"

UnitUnitCollision(colliderID, collideeID) -- needs SetWatchUnit enabled for both parties

AllowWeaponTargetCheck(attackerID, attackerWeaponNum, attackerWeaponDefID)\
Only called for weaponDefIDs registered via [Script.SetWatchWeapon](/lua-system#synced) since 92.0

AllowWeaponTarget(attackerID, targetID, attackerWeaponNum, attackerWeaponDefID, defaultPriority)

    --> return "targetAllowed, targetPriority"

defaultPriority new in 89.0\

Only called for weaponDefIDs registered via [Script.SetWatchWeapon](/lua-system#synced) since 92.0

DrawShield(number unitID, number weaponID) --\> boolean

*true* (\<-?) skips Spring's own drawing of shield \<weaponID\> owned by unit \<unitID\>

<a href="https://github.com/spring/spring/commit/7bbfd9464d4f74c12163ea0740c8c60d1ba978f1" class="external text" rel="nofollow">maybe new in 86.0+</a>

## Feature-Specific:

FeatureCreated() --\> "featureID, allyTeam"

FeatureDestroyed() --\> "featureID, allyTeam"

TerraformComplete() --\> "unitID, unitDefID, unitTeam, buildUnitID, buildUnitDefID, buildUnitTeam"

UnitCmdDone() --\> "unitID, unitDefID, unitTeam, cmdID, cmdTag, cmdParams, cmdOptions" cmdParams and cmdOptions are only available from version 95.0

UnitFeatureCollision(colliderID, collideeID, crushKilled) -- needs SetWatchUnit for first and SetWatchFeature for second party

New in version 95.0 FeatureDamaged() --\> "featureID, featureDefID, featureTeam, damage, weaponDefID, projectileID, attackerID, attackerDefID, attackerTeam"

New in version 95.0 FeaturePreDamaged() --\> "featureID, featureDefID, featureTeam, damage, weaponDefID, projectileID, attackerID, attackerDefID, attackerTeam"

`--> return newDamage, impulseMult (=0)`

## Drawing:

Inside these functions, you can use the [Lua OpenGL Api](/lua-opengl-api) to draw graphics.

- DrawGenesis() --\> none. Don't render here.

<!-- -->

    Spring draws the sky, the map, some water types, and unit selection.

- DrawWorldPreUnit() --\> none.

<!-- -->

    Spring draws units, features, some water types, cloaked units, and the sun.

- DrawWorld() --\> none.

<!-- -->

    Spring draws command queues, 'map stuff', and map marks.

Each unit might also have a DrawUnit call, [enabled here.](/lua-unitrendering)

DrawUnit(unitID,DrawMode)\
With enum DrawMode {\
notDrawing = 0,\
normalDraw = 1,\
shadowDraw = 2,\
reflectionDraw = 3,\
refractionDraw = 4\
};

DrawFeature(featureID, DrawMode)\

DrawShield(unitID, weaponID, DrawMode)\

DrawProjectile(projectileID, DrawMode)\

DrawScreenEffects() --\> "vsx, vsy" where vsx, vsy are screen coords.

DrawScreen() --\> none.

DrawInMiniMap() --\> "sx, sy" where sx,sy are values relative to the minimap's position and scale.

DrawWorldShadow() --\> none.

DrawWorldReflection() --\> none.

DrawWorldRefraction() --\> none.

DrawLoadScreen() --\> none. New in version 95.0

Only available to LuaIntro, draws custom load screens.

## Game Events:

GameID() --\> "gameID" New in version 89.0

Explosion() --\> "weaponID, px, py, pz, ownerID"\
Only called for weaponDefIDs registered via Script.SetWatchWeapon\
return true to hide the weapon's CEG

ShockFront() --\> "power, dx, dy, dz" Not yet implemented!

GameFrame() --\> "frameNum"

CobCallback() --\> unknown, marked FIXME.

GroupChanged() --\> "groupID" where groupID is the value of Group whose table value changed.

WorldTooltip() --\> "ttType, data1, data2, data3" special, should be documented in detail. Not yet implemented!

GamePreload() --\> none.

GameStart() --\> none.

GameProgress() --\> "serverFrameNum" ( called every 60 frames, calculating delta between GameFrame and GameProgress can give an ETA about catching up with simulation ) Not yet implemented!

GameOver() --\> "\[ \[1\] = allyTeamID1, \[2\] = allyTeamID2, ... \]", a list of winning allyteams, if empty the game result was undecided ( like when dropping from an host ) Will return nil in pre 0.83.x

TeamDied() --\> "TeamID" where TeamID = the team that has been eliminated.

AllowStartPosition() --\>

      number clampedPos.x, number clampedPos.y, number clampedPos.z,
      number playerID,
      number readyState,
      number rawPickPos.x, number rawPickPos.y, number rawPickPos.z

FIXME: apparently the above is incorrect and parameters are AllowStartPosition(playerID, teamID, readyState, cx, cy, cz, rx, ry, rz)

clampedPos = coordinates clamped into startbox, rawPickPos = where player tried to start

New in version 95.0 the default 'failed to choose' start-position is now just (0,0,0), not (0,-500,0)

readyState can be any one of:

       PLAYER_RDYSTATE_UPDATED = 0 -- player picked a position
       PLAYER_RDYSTATE_READIED = 1 -- player clicked ready
       PLAYER_RDYSTATE_FORCED = 2 -- game was force-started (player did not click ready)
       PLAYER_RDYSTATE_FAILED = 3

GameSetup() --\> string "state", boolean "ready", table "playerStates"\
return success, newReady

GamePaused() --\> "playerID, paused"

PlayerAdded() --\> "playerID"

PlayerRemoved() --\> "playerID, reason"

## Projectiles:

ProjectileCreated() --\> "proID, proOwnerID, weaponDefID"\
Only called for weaponDefIDs registered via Script.SetWatchWeapon

ProjectileDestroyed() --\> "proID"\
Only called for weaponDefIDs registered via Script.SetWatchWeapon

AllowWeaponInterceptTarget --\> "number interceptorUnitID, number interceptorWeaponID, number targetProjectileID" returns boolean\
Only called for weaponDefIDs registered via Script.SetWatchWeapon

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [LuaCallinReturn](https://springrts.com/wiki/LuaCallinReturn).*
