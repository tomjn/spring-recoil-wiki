---
title: "Animation:LuaExamples"
source_url: "https://springrts.com/wiki/Animation:LuaExamples"
categories:
  - "Animation"
---
# Animation:LuaExamples

<div id="lus-script-examples" class="section mw-parser-output">

## LUS Script Examples

### How to use

- `FIXME` - Indicates a section of code you will need to tweak to suit your own unit / model
- `TODO` - Indicates an optional section of code is missing that you may wish to pad out e.g. with an animation

### Script Scaffolds

#### Tank

    -- FIXME: how fast you want the turret to traverse and elevate, in degrees/sec?
    local TRAVERSE_SPEED = math.rad(60)
    local ELEVATE_SPEED = math.rad(30)

    -- FIXME: This should be whatever piece name you want for the emit point of weapon 1
    local flare1 = piece "flare1"
    -- FIXME: This should be whatever piece name you want for the main turret, controlling heading
    local turret = piece "turret"
    -- FIXME: This should be whatever piece name you want for the main turret sleeve or mantlet, controlling pitch
    local sleeve = piece "sleeve"

    -- called each time the weapon fires to set the emission point
    function script.QueryWeapon(weaponID)
        return flare1
    end

    -- called each time the weapon aims to animate the aiming
    function script.AimWeapon(weaponID, heading, pitch)
        Signal(2^weaponID)
        SetSignalMask(2^weaponID)
        Turn(turret, y_axis, heading, TRAVERSE_SPEED)
        Turn(sleeve, x-axis, pitch, ELEVATE_SPEED)
        WaitForTurn(turret, y_axis)
        WaitForTurn(sleeve, x_axis)
        return true
    end

    -- called each time the weapon aims to determine the origin of the aiming
    function script.AimFromWeapon(weaponID)
        return turret
    end

    -- called each time the weapon fires
    function script.FireWeapon(weaponID)
        -- TODO: any firing animations here, rocking, emit fx etc
    end

#### Air Transport

    -- FIXME: This should be whatever piece name you want to attach to in your model
    local attachPiece = piece "attach"

    -- called for each unit loaded, returns the attaching piece
    function script.QueryTransport(passengerID)
        return attachPiece
    end

    -- called for each unit loaded to animate the load process
    function script.BeginTransport(passengerID)
        -- TODO: any loading animations here
    end

    --how this is called depends on /wiki/Gamedev:UnitDefs#transportUnloadMethod
    -- 0 (Default) called once on the last unit dropped
    -- 1 called for each unit dropped in mid-air
    -- 2 called for the last unit dropped
    function script.EndTransport(passengerID)
        -- TODO: relevant end of transport sequence animations
    end

    -- Only called if transportUnloadMethod = 2
    function script.TransportDrop(passengerID, x,y,z)
        -- TODO: animation to unload each individual passenger on the ground
    end

#### Builder

    local nanoPieces = {}
    -- FIXME: this example has 2 nano pieces to alternate between
    for i = 1, 2 do 
         -- FIXME: the pieces are named nanoPiece1 and nanoPiece2 in the model
        nanoPieces[i] = piece("nanoPiece" .. i)
    end
    Spring.SetUnitNanoPieces(unitID, nanoPieces)

    function script.StartBuilding(heading, pitch)
        -- TODO: This is where you would add your unpack / point towards animation
        SetUnitValue(COB.INBUILDSTANCE, true)
    end
    function script.StopBuilding()
        -- TODO: This is where you would add your pack-up animation
        SetUnitValue(COB.INBUILDSTANCE, false)
    end

#### Factory

    local nanoPieces = {}
    -- FIXME: this example has 2 nano pieces to alternate between
    for i = 1, 2 do 
         -- FIXME: the pieces are named nanoPiece1 and nanoPiece2 in the model
        nanoPieces[i] = piece("nanoPiece" .. i)
    end
    Spring.SetUnitNanoPieces(unitID, nanoPieces)

    function script.QueryBuildInfo()
        -- FIXME: the pad piece is named buildPad in the model
        return piece("buildPad")
    end

    local function OpenCloseAnim(open)
        Signal(1) -- Kill any other copies of this thread
        SetSignalMask(1) -- Allow this thread to be killed by fresh copies
        if open then
            -- TODO: This is where you would add your opening up anim
        else
            -- TODO: This is where you would add your closing up anim
        end
        SetUnitValue(COB.YARD_OPEN, open)
        SetUnitValue(COB.BUGGER_OFF, open)
        SetUnitValue(COB.INBUILDSTANCE, open)
    end

    -- Called when factory yard opens
    function script.Activate()
        -- OpenCloseAnim must be threaded to call Sleep() or WaitFor functions
        StartThread(OpenCloseAnim, true)
    end

    -- Called when factory yard closes
    function script.Deactivate()
        -- OpenCloseAnim must be threaded to call Sleep() or WaitFor functions
        StartThread(OpenCloseAnim, false)
    end

    function script.StartBuilding()
        -- TODO: You can run any animation that continues throughout the build process here e.g. spin pad
    end

    function script.StopBuilding()
        -- TODO: You can run any animation that signifies the end of the build process here
    end

#### Wind Generator

    -- FIXME: Assumes model has pieces named 'tower' and 'blades'
    local tower, blades = piece("tower", "blades")

    function script.WindChanged (number heading, number strength)
      -- Turn the tower to face the wind at 30deg/s
      Turn(tower, y_axis, heading, math.rad(30))
      -- Spin the turbine blades relative to wind strength
      -- FIXME: Here I set rotational speed to half of strength
      Spin(blades, z_axis, strength * 0.5)
    end

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Animation:LuaExamples](https://springrts.com/wiki/Animation:LuaExamples).*
