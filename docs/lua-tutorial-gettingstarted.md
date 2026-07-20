---
title: "Lua:Tutorial GettingStarted"
source_url: "https://springrts.com/wiki/Lua:Tutorial_GettingStarted"
categories:
  - "Lua"
---
# Lua:Tutorial GettingStarted

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua:Tutorial GettingStarted

Here are some examples of small widgets, with useful code to get you started!

To play with each example, place the code into a "my_new_widget_name.lua" file in your Spring/LuaUI/widgets dir (create it if not already present) and run Spring with any game. Your widget should then appear ingame!

To see many more examples, check out the LuaUI/widgets directory of the games in [PublicRepos](/gamedev-publicrepos).

Note that every widget (and gadget) must include a GetInfo() callin, but all other callins are optional.

## Example 1

The "hello world" example, with a ticking clock.

    function widget:GetInfo()
       return {
          name         = "Name as shown in widget list",
          desc         = "Description as normally shown in tooltip",
          author       = "It could be you!",
          date         = "now",
          license      = "PD", -- should be compatible with Spring
          layer        = 0,
          enabled      = true
       }
    end

    local helloWorld = "I STARTED LOOK AT ME JIM!"
    local toggle

    function widget:Initialize()
       Spring.Echo(helloWorld)
    end

    function widget:Update()
       if (toggle == true) then
          Spring.Echo("TOCK")
          toggle = false
       else
          Spring.Echo("TICK")
          toggle = true
       end
    end

## Example 2

How to make stuff happen when units do stuff.

    function widget:GetInfo()
       return {
          name         = "Unit Announcer",
          desc         = "Units are proud to be alive",
          author       = "Some guy",
          date         = "I don't know why we include dates",
          license      = "GPLv2 or later",
          layer        = 0,
          enabled      = true
       }
    end

    local machoUnits = {}

    function widget:UnitCreated(unitID, unitDefID, unitTeam, builderID)
      Spring.Echo("HELLO")

      local humanName = UnitDefs[unitDefID].humanName
      local numWeapons = #UnitDefs[unitDefID].weapons
      local plural = numWeapons~=1 and "s" or ""

      Spring.Echo("I am unit " .. unitID .. ". I am a " .. humanName .. ".")
      Spring.Echo("I have " .. numWeapons .. " weapon" .. plural .. ".")
      if numWeapons>0 then
        machoUnits[unitID] = true
      end
    end

    function widget:UnitDestroyed(unitID, unitDefID, unitTeam, attackerID, attackerDefID, attackerTeam)
      machoUnits[unitID] = nil
    end 

    function widget:UnitDamaged(unitID, unitDefID, unitTeam, damage, paralyzer, weaponDefID, projectileID, attackerID, attackerDefID, attackerTeam)
      if machoUnits[unitID] then return end

      local n = math.random(3,10)
      local ow = "O"
      for i=1,n do
        ow = ow .. "W"
      end
      Spring.Echo(ow)
    end

## Example 3

Something actually useful.

    function widget:GetInfo()
      return {
        name      = "Stop means Stop",
        desc      = "Cancels Self D orders when unit is given a stop command",
        author    = "enotseulB",
        date      = "GPL v2 or later",
        license   = "Feb 2015",
        layer     = 0,
        enabled   = true  
      }
    end

    local CMD_STOP = CMD.STOP

    function widget:UnitCommand(unitID, unitDefID, teamID, cmdID, cmdParams, cmdOptions)
        if cmdID ~= CMD_STOP then return end
        if not unitID then return end
        if teamID ~= Spring.GetMyTeamID() then return end

        if (Spring.GetUnitSelfDTime(unitID) > 0) then
            Spring.GiveOrderToUnit(unitID, CMD.SELFD, {}, {})
        end 
    end

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua:Tutorial GettingStarted](https://springrts.com/wiki/Lua:Tutorial_GettingStarted).*
