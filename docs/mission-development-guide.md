---
title: "Mission development Guide"
source_url: "https://springrts.com/wiki/Mission_development_Guide"
categories:
  - "Deprecated"
---
# Mission development Guide

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

### Getting started

First download this <a href="http://spring.unknown-files.net/file/2945/Blank_Lua_file_/" class="external text" rel="nofollow">template</a>

Then open it up in notepad and save it as a txt file

Load up spring from spring.exe in your spring folder. Now choose mission builder from the list.

Push enter and type: .cheat

                       .nocost

These will allow you to build your mission a lot faster

Now build up a friendly base with all the units you want, and an enemy base with all the units you want for them.

Then select all of the players units and base, then push enter and type: .savesel 0

Now do the same thing for the enemy, but type: .savesel 1

Lastly push enter and type: .savefeatures

Once you save the units, quit Now open up the file **infolog** thats in spring folder.

It'll have the code for loading the units in there. Don't open up spring again before you copy it out or you'll lose everything.

You should see lines like this

units.Load("CORAK", float3(15400, 85, 2450), 0, false)

units.Load("CORAK", float3(12650, 40, 2054), 0, false)

units.Load("CORAK", float3(13444, 60, 2045, 0, false)

Now cut out the unit loading code paste it into the Template:Setup() function

It should look like this:

-- Create a bunch of units for this simple mission function Blank:Setup()

units.Load("arm_solar_collector", float3(472.0, 45.2, 280.0), 0, false)

units.Load("arm_metal_extractor", float3(328.0, 40.7, 360.0), 0, false)

units.Load("arm_commander", float3(469.7, 42.5, 441.7), 0, false)

units.Load("arm_wind_generator", float3(288.0, 40.1, 2768.0), 1, false)

units.Load("arm_light_laser_tower", float3(1920.0, 44.4, 2176.0), 1, false)

units.Load("arm_light_laser_tower", float3(1776.0, 43.9, 2208.0), 1, false)

units.Load("arm_vehicle_plant", float3(528.0, 74.0, 3664.0), 1, false)

Now to test it

Push Ctrl+H and find Blank, then replace it with the name you want for your mission.

To change this txt file back to lua:

Go to save as

Change the name to "whatever.lua" without the qutoes

Then change the type to "All Files"

Place in the startscript folder

If it opens and all the units spawn, then you are ready to start making your mission.

### Using the Update function as a trigger

Now open up your txt to start scripting

The setup function only runs once, the first frame when the game starts and never again. That's where you want to put in all the code for loading the starting units and bases

At center of your mission script is the update function. It gets called by the game 30 times per second. You call all the other functions from this function. A lot of the missions run on a time counter.

EX.

------------------------------------------------------------------------

-- This function is executed every simulated frame (30 times/sec) function Blank:Update()

       -- Perform initialization 
       if self.state == 0 then 
           self.state = 1 
           self:Setup() 
           
           print("Welcome") 
       end 
       
       -- Run SlowUpdate once every second 
       if math.mod(gs.frameNum, 30) == 0 then 
           self:SlowUpdate() 
       end 

       -- Do some stuff a bit later 
        if gs.frameNum == 30*10 then 
      print("Their moving to attack us ") 
        end 
        if gs.frameNum == 30*20 then 
           self:SetupDelayed() 
        end 
        if gs.frameNum == 30*60 then 
           self:MoveTanks() 
        end 
        if gs.frameNum == 30*75 then 
           self:Airsupport() 
        end 

end

------------------------------------------------------------------------

The parts at the top are functions that get called in the Update() function after x amount of time.

10 seconds in the game it prints a message.

SetupDelayed() gets called after 20 seconds.

MoveTanks() is called after 60 sec

Airsupport() is called after 75 sec

### Indepth look at the MoveTanks() function

Below is the code for MoveTanks(). It loads a bunch of units near the edge of the map where the enemy base is and tells them to move to a point on the map. You get the load unit code for them the same way you do for loading the starting units in the setup function.

------------------------------------------------------------------------

function Blank:MoveTanks()

       local unitList = {
           units.Load("ARMSTUMP", float3(4294.4, 119.7, 569.2), 1, false),
       units.Load("ARMSTUMP", float3(4375.3, 121.6, 555.5), 1, false),
       units.Load("ARMSTUMP", float3(4424.2, 126.5, 621.0), 1, false),
       units.Load("ARMSTUMP", float3(4498.7, 119.6, 509.9), 1, false),
       units.Load("ARMSAM", float3(4294.2, 115.2, 449.7), 1, false),
       units.Load("ARMSTUMP", float3(4555.6, 118.8, 486.7), 1, false),
       units.Load("ARMSTUMP", float3(4612.9, 118.8, 471.7), 1, false),
       units.Load("ARMSTUMP", float3(4298.7, 117.6, 515.2), 1, false),
       units.Load("ARMSAM", float3(4332.7, 114.1, 335.6), 1, false),
       units.Load("ARMSTUMP", float3(4345.2, 116.9, 497.9), 1, false),
       units.Load("ARMSTUMP", float3(4445.7, 120.3, 506.3), 1, false),
       units.Load("ARMSAM", float3(4472.5, 114.1, 391.7), 1, false),
       units.Load("ARMSAM", float3(4571.3, 115.2, 358.5), 1, false),
       units.Load("ARMSTUMP", float3(4472.8, 115.6, 450.8), 1, false),
       units.Load("ARMSAM", float3(4260.4, 114.1, 396.6), 1, false),
       units.Load("ARMBULL", float3(4579.6, 117.6, 427.1), 1, false)
       }
       local c = Command()
       c.id = Command.MOVE
       c:AddParam(4284)
       c:AddParam(132)
       c:AddParam(3886)
       for i = 1, table.getn(unitList) do
      unitList[i]:GiveCommand(c)
       end

end

------------------------------------------------------------------------

### Details for commands

---=

    }
       local c = Command()
       c.id = Command.MOVE
       c:AddParam(4284)
       c:AddParam(132)
       c:AddParam(3886)
       for i = 1, table.getn(unitList) do
      unitList[i]:GiveCommand(c)
       end

end

------------------------------------------------------------------------

The commands are:

        Command.STOP
        Command.WAIT
        Command.MOVE
        Command.FIGHT
        Command.ATTACK
        Command.AREA_ATTACK
        Command.GUARD
        Command.LOAD_UNITS
        Command.UNLOAD_UNITS

---

    c:AddParam(4284)
       c:AddParam(132)
       c:AddParam(3886)

These are points on the map, they show up in the bottom left corner of the screen while playing

------------------------------------------------------------------------

### Using groups

You can refer to a group of guys later on, somewhere else in the script if you have given them a name. For example. ---=

self.panzer1 = {

           units.Load("ARMSTUMP", float3(2054.0, 109.4, 594.0), 1, false),
          units.Load("ARMMART", float3(2271.0, 108.2, 606.0), 1, false),
      units.Load("ARMMART", float3(2303.0, 108.2, 574.0), 1, false),
      units.Load("ARMYORK", float3(2065.0, 108.2, 480.0), 1, false),
          units.Load("ARMMART", float3(2207.0, 109.1, 638.0), 1, false),
          units.Load("ARMYORK", float3(2113.0, 108.2, 528.0), 1, false),
          units.Load("ARMYORK", float3(2113.0, 107.0, 480.0), 1, false),
          units.Load("ARMSTUMP", float3(2126.0, 111.4, 606.0), 1, false),
          units.Load("ARMMART", float3(2239.0, 108.2, 638.0), 1, false),
          units.Load("ARMSTUMP", float3(2094.0, 110.5, 606.0), 1, false),
          units.Load("ARMBULL", float3(2250.0, 108.2, 503.0), 1, false),
          units.Load("ARMSTUMP", float3(2136.0, 113.8, 638.0), 1, false),
          units.Load("ARMSTUMP", float3(2168.0, 111.4, 638.0), 1, false),
          units.Load("ARMSTUMP", float3(2022.0, 111.1, 594.0), 1, false),
          units.Load("ARMMART", float3(2239.0, 108.2, 606.0), 1, false),
          units.Load("ARMYORK", float3(2065.0, 108.2, 528.0), 1, false),
          units.Load("ARMMART", float3(2207.0, 108.2, 606.0), 1, false),
          units.Load("ARMMART", float3(2207.0, 108.2, 574.0), 1, false),
          units.Load("ARMMART", float3(2239.0, 108.2, 574.0), 1, false),
          units.Load("ARMMART", float3(2271.0, 108.2, 574.0), 1, false),
          units.Load("ARMYORK", float3(2161.0, 108.2, 528.0), 1, false),
          units.Load("ARMYORK", float3(2161.0, 108.2, 480.0), 1, false),
          units.Load("ARMMART", float3(2303.0, 109.4, 606.0), 1, false),
          units.Load("ARMSTUMP", float3(2077.0, 113.0, 652.0), 1, false),
          units.Load("ARMSTUMP", float3(2109.0, 115.2, 652.0), 1, false)
       }

Then order them around like this

local c = Command()

       c.id = Command.PATROL
       c:AddParam(4645)
       c:AddParam(140)
       c:AddParam(8926)
       for i = 1, table.getn(self.panzer1) do
      self.panzer1[i]:GiveCommand(c)
       end

### Credits

Wrote by Gamer17

Got everything from:

smartie and Thor

More info at this wiki Mission development

Ask any questions at this tread <a href="https://springrts.com/phpbb/viewtopic.php?t=10501&amp;postdays=0&amp;postorder=asc&amp;start=0" class="external free" rel="nofollow">https://springrts.com/phpbb/viewtopic.php?t=10501&amp;postdays=0&amp;postorder=asc&amp;start=0</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mission development Guide](https://springrts.com/wiki/Mission_development_Guide).*
