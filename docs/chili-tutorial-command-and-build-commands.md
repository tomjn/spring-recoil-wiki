---
title: "Chili:Tutorial Command and Build Commands"
source_url: "https://springrts.com/wiki/Chili:Tutorial_Command_and_Build_Commands"
categories:
  - "Libraries"
---
# Chili:Tutorial Command and Build Commands

<div id="commands-and-build-bar" class="section mw-parser-output">

## Commands and Build bar

### Preparation

We are stepping it up a notch. We can all agree that the stock GUI for commands and building isn't really all that great. Good thing is we can improve on this. Following is not a perfect sollution since it doesn't handle pagination, but it will get you a long way getting you started for advanced stuff. For this tutorial you will only need one lua script but it will have quite a bit of content.

     
    - LuaUI\widgets\gui_chili_commandwindow.lua

### File header

You open up with the regular info and imports that you are going to use thru the script.

    function widget:GetInfo()
        return {
            name        = "command list window",
            desc        = "ChiliUi window that contains all the commands a unit has",
            author      = "Sunspot",
            date        = "2011-06-15",
            license     = "GNU GPL v2",
            layer       = math.huge,
            enabled     = true,
            handler     = true,
        }
    end
    -- INCLUDES
    VFS.Include("LuaRules/Gadgets/Includes/utilities.lua")

    -- CONSTANTS
    local MAXBUTTONSONROW = 4
    local COMMANDSTOEXCLUDE = {"TimeWait","DeathWait","SquadWait","GatherWait","Load units"}
    local Chili

    -- MEMBERS
    local x
    local y
    local commandWindow
    local stateCommandWindow
    local buildCommandWindow
    local updateRequired = true

    -- CONTROLS
    local spGetActiveCommand    = Spring.GetActiveCommand
    local spGetActiveCmdDesc    = Spring.GetActiveCmdDesc
    local spGetSelectedUnits    = Spring.GetSelectedUnits
    local spSendCommands        = Spring.SendCommands

You'll notice a lot of variables and controls. They will all get a place during the further script design and explained in detail. Notice as well that this widgets GetInfo has an extra option (handler = true). This is needed so Spring.SendCommands can execute. It's a common mistake to omit that option with all consequences and frustrations that follow.

### initializing the widget

What we are going to do, is remove the stock command bar and build bar ui together with the left bottom tooltip. Next we are going to define 3 simple Chili Controls to seperate the command, status command and build commands in. To keep those controls nicely together we merge them in one window. Following code will do this. I'll explain it more in detail since it has a few important parts.

    local function CleanStockUi()
        widgetHandler:ConfigLayoutHandler(DummyHandler)
        Spring.ForceLayoutUpdate()
        spSendCommands({"tooltip 0"})
        spSendCommands("resbar 0")
        spSendCommands({"console 0"})
        spSendCommands({"clock 0"})
        spSendCommands({"fps 0"})
        spSendCommands({"info 0"})
        spSendCommands({"speed 0"})
    end

    function widget:Initialize()
        CleanStockUi()
        
        if (not WG.Chili) then
            widgetHandler:RemoveWidget()
            return
        end

        Chili = WG.Chili
        local screen0 = Chili.Screen0
            
        commandWindow = Chili.Control:New{
            x = 0,
            y = 0,
            width = "100%",
            height = "40%",
            xstep = 1,
            ystep = 1,
            draggable = false,
            resizable = false,
            dragUseGrip = false,        
            children = {},
        }

        stateCommandWindow = Chili.Control:New{
            x = 0,
            y = "40%",
            width = "100%",
            height = "20%",
            xstep = 1,
            ystep = 1,
            draggable = false,
            resizable = false,
            dragUseGrip = false,        
            children = {},
        }   

        buildCommandWindow = Chili.Control:New{
            x = 0,
            y = "60%",
            width = "100%",
            height = "40%",
            xstep = 1,
            ystep = 1,
            draggable = false,
            resizable = false,
            dragUseGrip = false,        
            children = {},
        }       
        
        window0 = Chili.Window:New{
            x = '50%',
            y = '15%',  
            dockable = true,
            parent = screen0,
            caption = "",
            draggable = true,
            resizable = true,
            dragUseGrip = true,
            clientWidth = 400,
            clientHeight = 200,
            backgroundColor = {0,0,0,1},
            skinName  = "DarkGlass",        
            children = {commandWindow,stateCommandWindow,buildCommandWindow},
        }
        
    end

    function widget:Shutdown()
      widgetHandler:ConfigLayoutHandler(nil)
      Spring.ForceLayoutUpdate()
      spSendCommands({"tooltip 1"})
      spSendCommands("resbar 1")
      spSendCommands({"console 1"})
      spSendCommands({"clock 1"})
      spSendCommands({"fps 1"})
      spSendCommands({"info 1"})
      spSendCommands({"speed 1"})
    end

You'll find on top here the CleanStockUi() local function. This is a helper function I made to clean up nearly all of the stock ui delivered with spring. The DummyLayout is a handler that can be found in layouts.lua delivered with spring. You'll notice in a lot of mods that people write their own LayoutHandler, I did so to at first. But after some discover work I found the DummyLayout written by the spring devs and it's clearly better to use theirs. I got rid of most stock stuff, except the minimap, that seems to serve a special function or the command is unknown to me to get rid of.

Now with the stock ui gone we create 3 chili controls and group them in one seperate window. We also make sure the 3 controls resize together with the group window by using relative Y coordinates. Put resize on false except the group window. Last we put the shutdown method to clean up everything we have done incase something goes wrong.

### On unit selection ... load the commands

Once you select one or more units the commands in the controls need to be refreshed, following code will do this for you.

    function widget:CommandsChanged()
        if DEBUG then Spring.Echo("commandChanged called") end
        updateRequired = true
    end

    function widget:DrawScreen()
        if updateRequired then
            updateRequired = false
            loadPanel()
        end
    end

These widget commands serve to detect if commands are changed and if they are they will flag that on the next redraw the panel (being the 3 controls in our case) needs to be redrawn. I'm told this is the standard way of doing things and quite frankly it works , so this is once again just copy paste code you'll find in most chili scripts.

    function loadPanel()
        resetWindow(commandWindow)
        resetWindow(stateCommandWindow)
        resetWindow(buildCommandWindow)
        local commands = Spring.GetActiveCmdDescs()
        commands = filterUnwanted(commands)
        table.sort(commands,function(x,y) return x.action < y.action end)
        for cmdid, cmd in pairs(commands) do
            rowcount = createMyButton(commands[cmdid]) 
        end
    end

    function resetWindow(container)
        container:ClearChildren()
        container.xstep = 1
        container.ystep = 1
    end

    function filterUnwanted(commands)
        local uniqueList = {}
        if DEBUG then Spring.Echo("Total commands ", #commands) end
        if not(#commands == 0)then
            j = 1
            for _, cmd in ipairs(commands) do
                if DEBUG then Spring.Echo("Adding command ", cmd.action) end
                if not table.contains(COMMANDSTOEXCLUDE,cmd.action) then
                    uniqueList[j] = cmd
                    j = j + 1
                end
            end
        end
        return uniqueList
    end

We start of by resetting the old contents of the controls. Each control has also an x and y variable to keep track where the next object will come, since we removed everything well we reset these as well.

you'll notice an array COMMANDSTOEXCLUDE that we initialised at the start of the script. We use this to remove commands , that are not appropriate for the mod you are making. You will also see a method table.contains, this is a method I created myself and is contained in utilities.lua. It has following code, I'm not sure if it's really performant or if there is a better way but it works.

    function table.contains(table, element)   
        for i=1, #table do     
            if table[i] == element then       
                return true     
            end   
        end   
        return false 
    end

With Spring.GetActiveCmdDescs()

    we grab all the commands that are currently active in the selection.  Then we filter the unwanted commands out of that list and we sort them by actionname.  This to keep most of the commands on the same place when we select multiple units with different commands.  This not to confuse the players who are going to use your gui.  It's just sane design.  Following we loop over the commands and create buttons for them in all the windows.  The real juicy part of the script

### Forging the buttons

You could do several things with buttons, put images on them, let them cycle images for state commands or just plain old text. For this tutorial I'll show you how to put text buttons for state and regular commands. And put images on build commands. We can put most of this code in one method.

    function createMyButton(cmd)
        if(type(cmd) == 'table')then
            buttontext, container, isState, isBuild, texture = findButtonData(cmd)

            local result = container.xstep % MAXBUTTONSONROW
            container.xstep = container.xstep + 1
            local increaseRow = false
            if(result==0)then
                result = MAXBUTTONSONROW
                increaseRow = true
            end 

            
            local color = {0,0,0,1}
            local button = Chili.Button:New {
                parent = container,
                x = 80 * (result-1),
                y = 38 * (container.ystep-1),
                padding = {5, 5, 5, 5},
                margin = {0, 0, 0, 0},
                minWidth = 40,
                minHeight = 40,
                caption = buttontext,
                isDisabled = false,
                cmdid = cmd.id,
                OnMouseDown = {ClickFunc},
            }
            
            if texture then
                if DEBUG then Spring.Echo("texture",texture) end
                button:Resize(80,80)
                image= Chili.Image:New {
                    width="100%";
                    height="90%";
                    y="6%";
                    keepAspect = true,  --isState;
                    file = texture;
                    parent = button;
                }       
            end
            
            if(increaseRow)then
                container.ystep = container.ystep+1
            end     
        end
    end

The button creation method , recieves a cmd from the cmd array we filtered earlier. Now for some reason the last command isn't an array but just a number so we'll have to write a check for that, not to crash our script. next we will need information from the given command. We have to determine if it's a regular command, state command or build command. It is also important to know what the content of the button will be, for state commands we want to know the text of the state we are in, for build icons we want buildpics. The buildpic to use is basicly the name of the unit file with a \#- in front. You can see in the findButtonData we concatanate this and put it in the texture var. We return all that info back to the createbutton method.

After we have all the info we use a bit of XY math to determine where the button will be put. I'm not going to deep into this cause I suck at math explainations. But you'll figure it out do take notice of the constant MAXBUTTONSONROW, we intitialised this at the start of the script. The following part is where we create the button. The captiontext is the text you will see on the button. There is also one more important part. OnMouseDown = {ClickFunc} , this tells what method has to be performed once you go onMouseDown on the button. Think of it as a onActionPerformed of a JAVA button. Here is the code that gets executed once you press it

    function ClickFunc(chiliButton, x, y, button, mods) 
        local index = Spring.GetCmdDescIndex(chiliButton.cmdid)
        if (index) then
            local left, right = (button == 1), (button == 3)
            local alt, ctrl, meta, shift = mods.alt, mods.ctrl, mods.meta, mods.shift

            if DEBUG then Spring.Echo("active command set to ", chiliButton.cmdid) end
            Spring.SetActiveCommand(index, button, left, right, alt, ctrl, meta, shift)
        end
    end

Basicly we get the current mouseState and then decide if an alt, shift or ctrl button is pressed as well, then we decide if the left or right button is pressed and set the next active command that should occure. The command to be exectued is set on the button when we created it in cmdid. Carrying on from the createbutton method, you'll see that we check if a texture was returned from the cmd info method earlier. This would mean we have a build command, and if so you'll see we attach an image to the button. The last line is still a bit of XY math to determine if next time we'll have to switch to another row by increasing the Y on the current container, who was given to the createbutton method when we called it.

### Final script

    function widget:GetInfo()
        return {
            name        = "command list window",
            desc        = "ChiliUi window that contains all the commands a unit has",
            author      = "Sunspot",
            date        = "2011-06-15",
            license     = "GNU GPL v2",
            layer       = math.huge,
            enabled     = true,
            handler     = true,
        }
    end
    -- INCLUDES
    VFS.Include("LuaRules/Gadgets/Includes/utilities.lua")

    -- CONSTANTS
    local MAXBUTTONSONROW = 3
    local COMMANDSTOEXCLUDE = {"timewait","deathwait","squadwait","gatherwait","loadonto","nextmenu","prevmenu"}
    local Chili

    -- MEMBERS
    local x
    local y
    local imageDir = 'LuaUI/Images/commands/'
    local commandWindow
    local stateCommandWindow
    local buildCommandWindow
    local updateRequired = true

    -- CONTROLS
    local spGetActiveCommand    = Spring.GetActiveCommand
    local spGetActiveCmdDesc    = Spring.GetActiveCmdDesc
    local spGetSelectedUnits    = Spring.GetSelectedUnits
    local spSendCommands        = Spring.SendCommands

    -- SCRIPT FUNCTIONS
    function LayoutHandler(xIcons, yIcons, cmdCount, commands)
        widgetHandler.commands   = commands
        widgetHandler.commands.n = cmdCount
        widgetHandler:CommandsChanged()
        local reParamsCmds = {}
        local customCmds = {}

        return "", xIcons, yIcons, {}, customCmds, {}, {}, {}, {}, reParamsCmds, {[1337]=9001}
    end

    function ClickFunc(chiliButton, x, y, button, mods) 
        local index = Spring.GetCmdDescIndex(chiliButton.cmdid)
        if (index) then
            local left, right = (button == 1), (button == 3)
            local alt, ctrl, meta, shift = mods.alt, mods.ctrl, mods.meta, mods.shift

            if DEBUG then Spring.Echo("active command set to ", chiliButton.cmdid) end
            Spring.SetActiveCommand(index, button, left, right, alt, ctrl, meta, shift)
        end
    end

    -- Returns the caption, parent container and commandtype of the button  
    function findButtonData(cmd)
        local isState = (cmd.type == CMDTYPE.ICON_MODE and #cmd.params > 1)
        local isBuild = (cmd.id < 0) 
        local buttontext = ""
        local container
        local texture = nil
        if not isState and not isBuild then
            buttontext = cmd.name
            container = commandWindow
        elseif isState then
            local indexChoice = cmd.params[1] + 2
            buttontext = cmd.params[indexChoice]
            container = stateCommandWindow
        else
            container = buildCommandWindow
            texture = '#'..-cmd.id
        end
        return buttontext, container, isState, isBuild, texture 
    end

    function createMyButton(cmd)
        if(type(cmd) == 'table')then
            buttontext, container, isState, isBuild, texture = findButtonData(cmd)

            local result = container.xstep % MAXBUTTONSONROW
            container.xstep = container.xstep + 1
            local increaseRow = false
            if(result==0)then
                result = MAXBUTTONSONROW
                increaseRow = true
            end 

            
            local color = {0,0,0,1}
            local button = Chili.Button:New {
                parent = container,
                x = 80 * (result-1),
                y = 38 * (container.ystep-1),
                padding = {5, 5, 5, 5},
                margin = {0, 0, 0, 0},
                minWidth = 40,
                minHeight = 40,
                caption = buttontext,
                isDisabled = false,
                cmdid = cmd.id,
                OnMouseDown = {ClickFunc},
            }
            
            if texture then
                if DEBUG then Spring.Echo("texture",texture) end
                button:Resize(80,80)
                image= Chili.Image:New {
                    width="100%";
                    height="90%";
                    y="6%";
                    keepAspect = true,  --isState;
                    file = texture;
                    parent = button;
                }       
            end
            
            if(increaseRow)then
                container.ystep = container.ystep+1
            end     
        end
    end

    function filterUnwanted(commands)
        local uniqueList = {}
        if DEBUG then Spring.Echo("Total commands ", #commands) end
        if not(#commands == 0)then
            j = 1
            for _, cmd in ipairs(commands) do
                if DEBUG then Spring.Echo("Adding command ", cmd.action) end
                if not table.contains(COMMANDSTOEXCLUDE,cmd.action) then
                    uniqueList[j] = cmd
                    j = j + 1
                end
            end
        end
        return uniqueList
    end

    function resetWindow(container)
        container:ClearChildren()
        container.xstep = 1
        container.ystep = 1
    end

    function loadPanel()
        resetWindow(commandWindow)
        resetWindow(stateCommandWindow)
        resetWindow(buildCommandWindow)
        local commands = Spring.GetActiveCmdDescs()
        commands = filterUnwanted(commands)
        table.sort(commands,function(x,y) return x.action < y.action end)
        for cmdid, cmd in pairs(commands) do
            rowcount = createMyButton(commands[cmdid]) 
        end
    end

    -- WIDGET CODE
    function widget:Initialize()
        widgetHandler:ConfigLayoutHandler(LayoutHandler)
        Spring.ForceLayoutUpdate()
        spSendCommands({"tooltip 0"})
        
        if (not WG.Chili) then
            widgetHandler:RemoveWidget()
            return
        end

        Chili = WG.Chili
        local screen0 = Chili.Screen0
            
        commandWindow = Chili.Control:New{
            x = 0,
            y = 0,
            width = "100%",
            height = "40%",
            xstep = 1,
            ystep = 1,
            draggable = false,
            resizable = false,
            dragUseGrip = false,        
            children = {},
        }

        stateCommandWindow = Chili.Control:New{
            x = 0,
            y = "40%",
            width = "100%",
            height = "20%",
            xstep = 1,
            ystep = 1,
            draggable = false,
            resizable = false,
            dragUseGrip = false,        
            children = {},
        }   

        buildCommandWindow = Chili.Control:New{
            x = 0,
            y = "60%",
            width = "100%",
            height = "40%",
            xstep = 1,
            ystep = 1,
            draggable = false,
            resizable = false,
            dragUseGrip = false,        
            children = {},
        }       
        
        window0 = Chili.Window:New{
            x = '50%',
            y = '15%',  
            dockable = true,
            parent = screen0,
            caption = "",
            draggable = true,
            resizable = true,
            dragUseGrip = true,
            clientWidth = 400,
            clientHeight = 200,
            backgroundColor = {0,0,0,1},
            skinName  = "DarkGlass",        
            children = {commandWindow,stateCommandWindow,buildCommandWindow},
        }
        
    end

    function widget:CommandsChanged()
        if DEBUG then Spring.Echo("commandChanged called") end
        updateRequired = true
    end

    function widget:DrawScreen()
        if updateRequired then
            updateRequired = false
            loadPanel()
        end
    end

    function widget:Shutdown()
      widgetHandler:ConfigLayoutHandler(nil)
      Spring.ForceLayoutUpdate()
      spSendCommands({"tooltip 1"})
    end

There we have it, maybe a bit complicated but it's completly possible to remove the nasty stock ui and build your own fancy chili UI. I hope these last 3 tutorials where usefull and you will build some very fine chili gui's

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Chili:Tutorial Command and Build Commands](https://springrts.com/wiki/Chili:Tutorial_Command_and_Build_Commands).*
