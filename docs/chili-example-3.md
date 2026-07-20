---
title: "Chili:Example 3"
source_url: "https://springrts.com/wiki/Chili:Example_3"
categories:
  - "Libraries"
  - "Tutorial"
---
# Chili:Example 3

<div id="chili-buildorder-menu" class="section mw-parser-output">

## Chili build/order menu

This is a very basic menu that displays a button for each command currently available.

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

    function widget:GetInfo()
        return {
            name    = "Command Menu",
            desc    = "Shows a button for each order that can currently be given",
            author  = "Turnips",
            date    = "2016",
            license = "GNU GPL v2 or later",
            layer   = math.pi,
            enabled = true,
            handler = true,
        }
    end

    local Chili, window, orderGrid, buildGrid
    local updateRequired

    -----------------------
    -- buttons

    local ignoreCMDs = {
        timewait=true,
        deathwait=true,
        squadwait=true,
        gatherwait=true,
        loadonto=true,
    }

    function ActionCommand(self, x, y, button, mods) 
        local index = Spring.GetCmdDescIndex(self.cmdID)
        if index then
            local left, right = (button == 1), (button == 3)
            local alt, ctrl, meta, shift = mods.alt, mods.ctrl, mods.meta, mods.shift
            Spring.SetActiveCommand(index, button, left, right, alt, ctrl, meta, shift)
        end
    end

    function OrderButton(cmd)
        local button = Chili.Button:New{
            name = "orderButton_" .. cmd.action,
            cmdID = cmd.id,
            caption = cmd.name,
            padding = {0,0,0,0},
            margin = {0,0,0,0},
            OnMouseUp = {ActionCommand},
        }
        orderGrid:AddChild(button)
    end

    function StateButton(cmd)
        local button = Chili.Button:New{
            name = "stateButton_" .. cmd.action,
            cmdID = cmd.id,
            caption = cmd.params[cmd.params[1] + 2],
            padding = {0,0,0,0},
            margin = {0,0,0,0},
            OnMouseUp = {ActionCommand},
        }
        stateGrid:AddChild(button)
    end

    function UnitButton(cmd)
        local uDID = -cmd.id
        local unitDef = UnitDefs[uDID] 
        local name = unitDef.name
        
        local image = Chili.Image:New{
            name   = "unitImage_" .. name,
            height = '100%', 
            width = '100%',
            file   = '#'..unitDef.id,
            -- flip = false,
        }
        local button = Chili.Button:New{
            name = "unitButton_" .. name,
            cmdID = cmd.id,
            caption = "",
            children = {image},
            padding = {0,0,0,0},
            margin = {0,0,0,0},
            OnMouseUp = {ActionCommand},
        }
        buildGrid:AddChild(button)
    end

    function ParseCmd(cmd)
        if UnitDefNames[cmd.name] then
            -- unit
            UnitButton(cmd)
        elseif #cmd.params > 1 then
            -- state
            StateButton(cmd)
        else
            -- order
            OrderButton(cmd)
        end
    end

    function ParseCmds()
        -- clean out the grids & repopulate
        buildGrid:ClearChildren()
        orderGrid:ClearChildren()
        stateGrid:ClearChildren()
        
        local cmds = Spring.GetActiveCmdDescs()
        local haveCmd = false
        for _,cmd in ipairs(cmds) do
            if cmd.name ~= '' and not (ignoreCMDs[cmd.name] or ignoreCMDs[cmd.action]) then
                haveCmd = true
                ParseCmd(cmd)
            end
        end
        
        if haveCmd and window.hidden then window:Show() elseif not haveCmd and window.visible then window:Hide() end
    end

    -----------------------
    -- callins

    function LayoutHandler(xIcons, yIcons, cmdCount, commands)
        -- its really better not to think about this bit
        -- you may need to change widgetHandler to plain handler, dependent on your games lua internals
        widgetHandler.commands   = commands
        widgetHandler.commands.n = cmdCount
        widgetHandler:CommandsChanged()
        local reParamsCmds = {}
        local customCmds = {}

        return "", xIcons, yIcons, {}, customCmds, {}, {}, {}, {}, reParamsCmds, {[1337]=9001}
    end

    function widget:Initialize()
        widgetHandler:ConfigLayoutHandler(LayoutHandler)
        Spring.ForceLayoutUpdate()
        
        if not WG.Chili then
            widgetHandler:RemoveWidget()
            return
        end

        Chili = WG.Chili
        
        stateGrid = Chili.Grid:New{
            name = "stateGrid",
            x = '0%',
            y = '0%',
            width = '100%',
            height = '15%',
            rows = 3,
            columns = 3,        
            padding = {0,0,0,0},
        }

        orderGrid = Chili.Grid:New{
            name = "orderGrid",
            x = '0%',
            y = '15%',
            width = '100%',
            height = '25%',
            rows = 5,
            columns = 3,        
            padding = {0,0,0,0},
        }
            
        buildGrid = Chili.Grid:New{
            name = "buildGrid",
            x = '0%',
            y = '40%',
            width = '100%',
            height = '60%',
            rows = 6,
            columns = 5,        
            padding = {0,0,0,0},
        }

        window = Chili.Window:New{
            name = "window",
            parent = Chili.Screen0,
            x = '0%',
            y = '25%', 
            height = '65%',
            width = '30%',
            children = {stateGrid, orderGrid, buildGrid},
        }
        
        window:Hide()
    end

    function widget:CommandsChanged()
        updateRequired = true -- the active cmd descs haven't changed yet; wait until the next widget:Update
    end

    function widget:Update()
        if updateRequired then
            ParseCmds()
            updateRequired = false
        end
    end

    function widget:Shutdown()
        widgetHandler:ConfigLayoutHandler(nil)
        Spring.ForceLayoutUpdate()
    end

</div>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Chili:Example 3](https://springrts.com/wiki/Chili:Example_3).*
