---
title: "SetMoveTypeDataExample"
source_url: "https://springrts.com/wiki/SetMoveTypeDataExample"
categories:
  - "Lua"
---
# SetMoveTypeDataExample

<div class="mw-parser-output">

    function gadget:GetInfo()
      return {
        name      = "FlashTurnRate",
        desc      = "Adds an option for flashes and friends to turn faster but go slower",
        author    = "Baczek",
        date      = "26 Dec 2009",
        license   = "GNU GPL, v2 or later",
        layer     = 0,
        enabled   = true  --  loaded by default?
      }
    end

    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------

    if (not gadgetHandler:IsSyncedCode()) then
      return
    end

    local EditUnitCmdDesc = Spring.EditUnitCmdDesc
    local FindUnitCmdDesc = Spring.FindUnitCmdDesc
    local InsertUnitCmdDesc = Spring.InsertUnitCmdDesc
    local GiveOrderToUnit = Spring.GiveOrderToUnit
    local SetUnitNeutral = Spring.SetUnitNeutral
    local GetUnitMoveTypeData = Spring.GetUnitMoveTypeData
    local SetGroundMoveTypeData = Spring.MoveCtrl.SetGroundMoveTypeData
    local SetGunshipMoveTypeData = Spring.MoveCtrl.SetGunshipMoveTypeData

    local FLASH = {
      [UnitDefNames["armflash"].id] = true,
      [UnitDefNames["corgator"].id] = true,
      [UnitDefNames["armatlas"].id] = true,
    }

    local flashList = {}

    local CMD_SET_TR = 34581

    local turnCmd = {
          id      = CMD_SET_TR,
          name    = "flashTurnRate",
          action  = "flashTurnRate",
          type    = CMDTYPE.ICON_MODE,
          tooltip = "Changes the turn rate of the Flash",
          params  = { '0', '  Lo  ', '  Hi  '}
    }

    function gadget:UnitCreated(unitID, unitDefID, unitTeam, builderID)
      if FLASH[unitDefID] then
        InsertUnitCmdDesc(unitID, 500, turnCmd)
        local tr = UnitDefs[unitDefID].turnRate
        local ms = UnitDefs[unitDefID].speed
        flashList[unitID] = {orgturnrate=tr, orgspeed=ms}
      end
    end

    function gadget:UnitDestroyed(unitID, unitDefID, unitTeam)
      flashList[unitID] = nil
    end

    function gadget:AllowCommand(unitID, unitDefID, teamID, cmdID, cmdParams, cmdOptions)
      if FLASH[unitDefID] then
        if (cmdID == CMD_SET_TR) then 
          local mt = GetUnitMoveTypeData(unitID)
          Spring.Echo("turnRate="..tostring(mt.turnRate))
          if mt.name ~= "ground" and mt.name ~= "gunship" then return false end
          local cmdDescID = FindUnitCmdDesc(unitID, CMD_SET_TR)
          Spring.Echo("cmdparams[1]=" .. tostring(cmdParams[1]))
          if mt.name == "ground" then 
            SetGroundMoveTypeData(unitID, {
                    turnRate=(1+cmdParams[1]) * flashList[unitID].orgturnrate,
                    maxSpeed=flashList[unitID].orgspeed / (1+cmdParams[1])
            })
          elseif mt.name == "gunship" then
            -- setting maxSpeed on gunships should automatically adjust
            -- brakeDistance
            SetGunshipMoveTypeData(unitID, {
                    turnRate=(1+cmdParams[1]) * flashList[unitID].orgturnrate,
                    maxSpeed=flashList[unitID].orgspeed / (1+cmdParams[1])
            })
          end
          turnCmd.params[1] = cmdParams[1]
          EditUnitCmdDesc(unitID, cmdDescID, turnCmd)
          turnCmd.params[1] = 1
          return false
        end
      end
      return true
    end

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [SetMoveTypeDataExample](https://springrts.com/wiki/SetMoveTypeDataExample).*
