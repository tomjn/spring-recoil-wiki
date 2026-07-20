---
title: "Chili:Hiding The Default GUI"
source_url: "https://springrts.com/wiki/Chili:Hiding_The_Default_GUI"
categories:
  - "Libraries"
---
# Chili:Hiding The Default GUI

<div class="mw-parser-output">

[Wiki](/main-page) \< [Chili](/chili) \< Hiding Springs Default GUI

## Hiding the default GUI

Many games, and all games using Chili, choose to remove Springs basic 'default' GUI. This can be done with the following widget - you may need to edit it slightly to match your game and your widget/addon handler.

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

    function widget:GetInfo()
      return {
        name      = "Hides the default interface",
        desc      = "",
        author    = "gajop, Bluestone",
        date      = "",
        license   = "GPL-v2",
        layer     = math.huge;
        enabled   = true,
        
        hidden    = true; -- don't show in the widget selector
        api       = true; -- load before all others?
      }
    end

    function widget:Initialize()
      RegisterGlobal("LayoutButtons", DummyLayoutHandler)

      Spring.SendCommands("Console 0")
      Spring.SendCommands("ResBar 0")
      Spring.SendCommands("ToolTip 0")
      Spring.SendCommands("Clock 0")
      Spring.SendCommands("Info 0")
      Spring.SendCommands("Fps 0")

      gl.SlaveMiniMap(true)
      gl.ConfigMiniMap(-1,-1,-1,-1)
    end

    local function DummyLayoutHandler(xIcons, yIcons, cmdCount, commands)
      handler.commands   = commands
      handler.commands.n = cmdCount
      handler:CommandsChanged()
      return "", xIcons, yIcons, {}, {}, {}, {}, {}, {}, {}, {}
    end

    function widget:GameSetup()
      -- sets status instantly to ready & hides the pre-game UI
      -- you might want/need to change this part & integrate it into your spawning gadget!
      return true, true 
    end

</div>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Chili:Hiding The Default GUI](https://springrts.com/wiki/Chili:Hiding_The_Default_GUI).*
