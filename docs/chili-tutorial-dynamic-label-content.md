---
title: "Chili:Tutorial Dynamic Label Content"
source_url: "https://springrts.com/wiki/Chili:Tutorial_Dynamic_Label_Content"
categories:
  - "Libraries"
---
# Chili:Tutorial Dynamic Label Content

<div id="dynamic-label-updating" class="section mw-parser-output">

## Dynamic label updating

### Preparation

Having windows with labels on screen is a fun thing. Although you probably want to change the contents of those labels if some event happens ingame. For this tutorial we are going to change a label everytime a unit gets destroyed.

as before we are going to establish a basic structure for our code. However we are going to need 4 scripts now.

     
    - LuaRules\Gadgets\Includes\messages.lua
    - LuaRules\Gadgets\Includes\utilities.lua
    - LuaRules\Gadgets\units_destroyed_counter.lua
    - LuaUI\widgets\gui_chili_unitdestroyedwindow.lua

In the messages.lua we are going to put global constants that will prefix interface messages between the engine rules code and the widget ui code. Utilities.lua will contain handy utitliy functions like tokenizing strings or array debug code. Units_destroyed_counter.lua will be used as engine rule code to keep track of the amount of units destroyed. Gui_chili_unitdestroyedwindow.lua will contain the code to display the amount of units destroyed.

### Units_destroyed_counter.lua

We will start this page the same way as we did with hello world.

    function gadget:GetInfo()
        return {
            name      = "units destroyed counter",
            desc      = "Keeps track of the destroyed units in game (including unfinished units, 
                                that timeout)",
            author    = "Sunspot",
            date      = "2011-06-19",
            license   = "GNU GPL v2",
            layer     = -50,
            enabled   = true
        }
    end

    -- INCLUDES
    VFS.Include("LuaRules/Gadgets/Includes/utilities.lua")
    VFS.Include("LuaRules/Gadgets/Includes/messagetypes.lua")

    -- CONSTANTS
    local DEBUG = true

    -- MEMBERS
    local unitDestroyedCounter = 0

    -- SPEEDUPS
    local Echo         = Spring.Echo

As you see 2 of the scripts mentioned earlier will be included in this script in the Includes section. I'll elaborate on them later but for now just put them there. In the Constants section I created a DEBUG constant, this constant will be your friend in later development. Especially if you have to give support to users (ofcourse it's the users fault !) if the code doesn't work anymore. In the Members section we have unitDestroyedCounter this counter will keep track of the destroyed units thru the entire lifetime of the script. Synced control section speaks for itselfs we cache the Spring.Echo function because we probably gonna use it a lot and we need to think about performance.

Next up we will have to init the gadget and create the method to increase the counter everytime a unit gets destroyed. Not really all that difficult but then raises the question how are we going to notify the widget this counter increased ... cause thats an entire other script. Well the sollution is to let the engine send a message. Here is how.

    function gadget:GetInfo()
        return {
            name      = "units destroyed counter",
            desc      = "Keeps track of the destroyed units in game (including unfinished units, 
                                that timeout)",
            author    = "Sunspot",
            date      = "2011-06-19",
            license   = "GNU GPL v2",
            layer     = -50,
            enabled   = true
        }
    end

    -- SYNCED ONLY
    if (not gadgetHandler:IsSyncedCode()) then
        return
    end

    -- INCLUDES
    VFS.Include("LuaRules/Gadgets/Includes/utilities.lua")
    VFS.Include("LuaRules/Gadgets/Includes/messagetypes.lua")

    -- CONSTANTS
    local DEBUG = true

    -- MEMBERS
    local unitDestroyedCounter = 0

    -- SPEEDUPS
    local Echo         = Spring.Echo

    function gadget:GameStart()
        unitDestroyedCounter = 0
    end
        
    function gadget:UnitDestroyed(unitID, unitDefID, teamID, attackerID)
        unitDestroyedCounter = unitDestroyedCounter + 1
        if DEBUG then Echo("Sending message type " .. UNITDESTROYEDUPDATE .. " 
                   params ", unitDestroyedCounter) end
        MessageDispatcher(UNITDESTROYEDUPDATE .. "-" .. unitDestroyedCounter) 
    end 

Few things to notice here I've added a new constant that we will use to send messages out the MessageDispatcher. Also since we are sending data that each client needs to recieve we have to do everything synced. We make sure of that by making the gadget work with synced code. Next we call the GameStart method to initialise the unitDestroyedCounter. It's not really needed because we allready initalised it to 0 at variable creation, but it's never a bad habit to do so. The UnitDestroyed method gives you some variables to work with like the unit that got destroyed , what team he belonged to and the unit who killed it. All nice params to work with but not needed in this tutorial, we will just increase the unitDestroyedCounter with one and send a message out. Notice the format of the message, it start with the prefix of the type of message thats a constant in the messages.lua include followed by the parameters separated by "-". What sign you use to seperate isn't important as long as it does not appear in your regular text and parameters. In fact there is nothing wrong in making it a constant in messages.lua either. For readability of the tutorial however I didn't.

### messages.lua

A simple and easy file where we keep our message constants in this case the UNITDESTROYEDUPDATE one.

    UNITDESTROYEDUPDATE = "UNITDESTROYEDUPDATE " --format: UNITDESTROYEDUPDATE-(unitDestroyedCounter)

### utilities.lua

Make this file your standard file for all little utilities that you will probably use often in your developing adventures in Spring. Let me start you off, with the following two methods that will be very handy, and one of them even needed in the tutorial

    function to_string(data, indent)      
        local str = ""        
        if(indent == nil) then          
            indent = 0      
        end          
        local indenter = "    "      
        -- Check the type      
        if(type(data) == "string") then          
            str = str .. (indenter):rep(indent) .. data .. "\n"      
        elseif(type(data) == "number") then          
            str = str .. (indenter):rep(indent) .. data .. "\n"      
        elseif(type(data) == "boolean") then          
            if(data == true) then              
                str = str .. "true"          
            else              
                str = str .. "false"          
            end      
        elseif(type(data) == "table") then          
            local i, v          
            for i, v in pairs(data) do              
            -- Check for a table in a table              
                if(type(v) == "table") then                  
                    str = str .. (indenter):rep(indent) .. i .. ":\n"              
                            str = str .. to_string(v, indent + 2)              
                else                  
                    str = str .. (indenter):rep(indent) .. i .. ": " ..  to_string(v, 0)             
                end          
            end          
        elseif(type(data) == "function") then                  
            str = str .. (indenter):rep(indent) .. 'function' .. "\n"      
        else          
            echo(1, "Error: unknown data type: %s", type(data))      
        end        
        return str  
    end  

    function split(pString, pPattern)
        local tableIndex = 1
        local Table = {} -- NOTE: use {n = 0} in Lua-5.0
        local fpat = "(.-)" .. pPattern
        local last_end = 1
        local s, e, cap = pString:find(fpat, 1)
        while s do
            if s ~= 1 or cap ~= "" then
                Table[tableIndex] = cap
                tableIndex = tableIndex + 1
            end
            last_end = e+1
            s, e, cap = pString:find(fpat, last_end)
        end
        if last_end <= #pString then
            cap = pString:sub(last_end)
            Table[tableIndex] = cap
            tableIndex = tableIndex + 1
        end
        return Table
    end

the to_string method, will be very helpfull once you start debugging arrays. with it you can get a text representation of your array vars. The split method is what I think is a decent regular language split method. Unfourtunatly I didn't find any stringtokenizer method as java has. So it will have to do

### gui_chili_unitdestroyedwindow.lua

This is our gui script that puts the destroyedcounter on the screen and updates it. It will need a way to recieve the messages send by the rules script, interpret them and then update the screen. Don't worry it's not as hard as it sounds. Look here.

    function widget:GetInfo()
        return {
            name        = "unit destroyed window",
            desc        = "window to keep the unitdestroyed counter",
            author      = "Sunspot",
            date        = "2011-06-19",
            license         = "GNU GPL v2",
            layer       = 2,
            enabled     = true  --  loaded by default?
        }
    end

    -- INCLUDES
    VFS.Include("LuaRules/Gadgets/Includes/utilities.lua")
    VFS.Include("LuaRules/Gadgets/Includes/messagetypes.lua")

    -- CONSTANTS
    local DEBUG = true
    local LOCALPLAYER = Spring.GetMyPlayerID()

    -- MEMBERS
    local Chili
    local unitsDestroyedLabel
    local unitsDestroyedWindow

    -- SCRIPT FUNCTIONS
    function doUnitDestroyedUpdate(value)
        if DEBUG then Spring.Echo("changing unitsdestroyed to " .. value) end
        unitsDestroyedLabel:SetCaption(value)
    end

    function widget:Initialize()
        if (not WG.Chili) then
            widgetHandler:RemoveWidget()
            return
        end

        Chili = WG.Chili
        local screen0 = Chili.Screen0
        
        unitsDestroyedWindow = Chili.Window:New{
            x = '50%',
            y = '50%',  
            dockable = true,
            parent = screen0,
            caption = "units destroyed",
            draggable = true,
            resizable = false,
            dragUseGrip = true,
            clientWidth = 100,
            clientHeight = 20,
            backgroundColor = {0.8,0.8,0.8,0.9},
        }
        
        unitsDestroyedLabel = Chili.Label:New{
            x = "50%",
            y = '50%',
            parent = unitsDestroyedWindow,
            caption = 0,
            fontsize = 13,
            autosize = false,
            textColor = {1,1,1,1},
        }   
    end

    function widget:RecvLuaMsg(msg, playerID)
        if (playerID ~= LOCALPLAYER) then return end
        
        local tokens = split(msg,"-");
        if(tokens[1] == UNITDESTROYEDUPDATE)then
            if DEBUG then Spring.Echo("unitdestroyed msg recieved : " .. msg) end      
            doUnitDestroyedUpdate(tokens[2])
        end
    end

Let me walk you thru this. First of all a new constant, you need to know who you are ... strange I know ... but if you don't you will have problems in the RecvLuaMsg method. Everytime some script throws the SendLuaMsg method, you'll trigger this method. This will happen for every player since, every player threw the msg due to the sync code. You are only interested in your own messages so you put in the check "if (playerID ~= LOCALPLAYER) then return end". Once you have determined the msg is for you, you need to learn how read it. As we discussed earlier , there isn't a tokenizer method, but we can use the split method we put in our utilities script. The first token will be the messagetype, while every following token are the paramters. In case of different type of messages being send, you first check what message type and next you do the action for the message. In our case we make an update to the label unit destroyed.

The label update is nothing special but due take note about this. The Chili framework will provide you with methods to update stuff. You could have done in this case for example

    --Disclaimer don't use this
    unitsDestroyedLabel.value = "new value"
    unitsDestroyedWindow:RemoveChild(unitsDestroyedLabel)
    unitsDestroyedWindow:AddChild(unitsDestroyedLabel)

This would refresh the window with a changed label but why go the long way around. The Label class has a handy method SetCaption(x) that will , update your label and refresh it, from within the framework

And there we have it , you have learned how to send messages from engine rule code to widget ui code and learned how to update Chili objects !

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Chili:Tutorial Dynamic Label Content](https://springrts.com/wiki/Chili:Tutorial_Dynamic_Label_Content).*
