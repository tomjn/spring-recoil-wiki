---
title: "Lua MoveCtrl"
source_url: "https://springrts.com/wiki/Lua_MoveCtrl"
categories:
  - "Lua"
---
# Lua MoveCtrl

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua MoveCtrl

## ScriptMoveType

### Enable/Disable

**Spring.MoveCtrl.Enable**

     ( number unitID ) -> nil

**Spring.MoveCtrl.Disable**

     ( number unitID ) -> nil

### Tags

**Spring.MoveCtrl.SetTag**

     ( number unitID, number tag ) -> nil

**Spring.MoveCtrl.GetTag**

     ( number unitID ) -> nil

**Spring.MoveCtrl.SetProgressState**

     ( number unitID, number state | "done" | "active" | "failed" ) -> nil

### Physics

**Spring.MoveCtrl.SetGravity**

     ( number unitID, number gravity ) -> nil

N.B. gravity here is a multiplier to Game.gravity

**Spring.MoveCtrl.SetDrag**

     ( number unitID, number drag ) -> nil

**Spring.MoveCtrl.SetGroundOffset**

     ( number unitID, number offset ) -> nil

**Spring.MoveCtrl.SetWindFactor**

     ( number unitID, number windFactor ) -> nil

**Spring.MoveCtrl.SetPhysics**

     ( number unitID,
       number posX, number posY, number posZ,
       number velX, number velY, number velZ,
       number rotX, number rotY, number rotZ ) -> nil 

**Spring.MoveCtrl.SetPosition**

     ( number unitID,
       number posX, number posY, number posZ ) -> nil

**Spring.MoveCtrl.SetVelocity**

     ( number unitID,
       number velX, number velY, number velZ ) -> nil

**Spring.MoveCtrl.SetRelativeVelocity**

     ( number unitID,
       number relvelX, number relvelY, number relvelZ ) -> nil

**Spring.MoveCtrl.SetRotation**

     ( number unitID,
       number rotX, number rotY, number rotZ ) -> nil

**Spring.MoveCtrl.SetRotationVelocity**

     ( number unitID,
       number rotVelX, number rotVelY, number rotVelZ ) -> nil

**Spring.MoveCtrl.SetRotationOffset**

     ( number unitID,
       number rotOffX, number rotOffY, number rotOffZ ) -> nil

**Spring.MoveCtrl.SetHeading**

     ( number unitID, number heading ) -> nil

### Options

**Spring.MoveCtrl.SetNoBlocking**

     ( number unitID, boolean noblock ) -> nil

**Spring.MoveCtrl.SetLimits**

     ( number unitID,
       number minX, number minY, number minZ,
       number maxX, number maxY, number maxZ ) -> nil 

**Spring.MoveCtrl.SetTrackSlope**

     ( number unitID, boolean trackslope ) -> nil

**Spring.MoveCtrl.SetTrackGround**

     ( number unitID, boolean noblock ) -> nil

**Spring.MoveCtrl.SetExtrapolate**

     ( number unitID, boolean on ) -> nil

**Spring.MoveCtrl.SetShotStop** Currently a no-op

     ( number unitID, boolean shotstop ) -> nil

**Spring.MoveCtrl.SetSlopeStop** Currently a no-op

     ( number unitID, boolean slopestop ) -> nil

**Spring.MoveCtrl.SetCollideStop**

     ( number unitID, boolean collidestop ) -> nil

Enable both SetCollideStop and SetTrackGround to enable MoveCtrlNotify(unitID, unitDefID, unitTeam, data) call-in, data was supposed to indicate the type of notification but currently never has a value other than 1 (where 1 means "unit hit the ground")

## MoveType-Controlling

**Spring.MoveCtrl.SetMoveDef** New in version 94.0

     ( number unitID, number moveDefID | string moveDefName ) -> boolean success

NOTE: string moveDefName needs to be in **lowercase**, notwithstanding the fact that it may be in another case in the movedef table. 

    NOTE: all Set*MoveTypeData functions support the following number keys:
    maxSpeed
    maxWantedSpeed
    repairBelowHealth

**Spring.MoveCtrl.SetAirMoveTypeData** New in version 0.81

     ( number unitID, string key, value  ) -> nil
     ( number unitID, table values ) -> nil
     supported keys:
     numbers:
       maxSpeed
       maxWantedSpeed
       repairBelowHealth
       wantedHeight
       myGravity
       maxBank
       maxPitch
       turnRadius
       maxAcc
       maxAileron
       maxElevator
       maxRudder
       waterline
       attackSafetyDistance       -- since 100.0 : fighters abort dive toward target if within attackSafetyDistance and try to climb back to normal altitude while still moving toward target  
       maneuverBlockTime          -- since 104.0.1+(FIXME) : number of frames aircraft will try to keep flying straight past the target after firing 
     booleans:
       collide
       useSmoothMesh
     NOTE: not all keys and not all values may work correctly.
     Example usage

**Spring.MoveCtrl.SetGroundMoveTypeData** New in version 0.81

     ( number unitID, string key, value  ) -> nil
     ( number unitID, table values ) -> nil
     supported keys:
     numbers:
       baseTurnRate
       turnRate
       accRate
       decRate
       maxSpeed
       maxWantedSpeed
       repairBelowHealth
       maxReverseDist
       maxReverseSpeed
       minReverseAngle
       requestedSpeed
       requestedTurnRate
       sqSkidSpeedMult
       waterline
     booleans:
       floatOnWater
       pushResistant
     NOTE: not all keys and not all values may work correctly.
     Example usage

New in version 101.0 maxReverseDist & minReverseAngle keys

New in version 104.0 sqSkidSpeedMult, pushResistant & waterline keys

**Spring.MoveCtrl.SetGunshipMoveTypeData** New in version 0.81

     ( number unitID, string key, value  ) -> nil
     ( number unitID, table values ) -> nil
     supported keys:
     numbers:
       maxSpeed
       maxWantedSpeed
       repairBelowHealth
       wantedHeight
       turnRate
       accRate
       decRate
       altitudeRate
       currentBank
       currentPitch
       waterline
     booleans:
       collide
       useSmoothMesh
       bankingAllowed
       dontLand
       airStrafe
     NOTE: not all keys and not all values may work correctly.
     Example usage

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua MoveCtrl](https://springrts.com/wiki/Lua_MoveCtrl).*
