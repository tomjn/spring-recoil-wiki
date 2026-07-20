---
title: "Chili:Tutorial Hello World"
source_url: "https://springrts.com/wiki/Chili:Tutorial_Hello_World"
categories:
  - "Libraries"
---
# Chili:Tutorial Hello World

<div id="hello-world" class="section mw-parser-output">

## Hello World

As in every first baby steps in a framework we are going to get hello world to work. First we are going to need to make a script file in the widgets directory. It's usually a good idea to keep the chili implemented files seperate from the other script files in naming convention.

Create a file gui_chili_helloworld.lua and copy following basic structure.

     -- INCLUDES
     -- CONSTANTS
     -- SYNCED CONTROLS
     -- CHILI CONTROLS
     -- MEMBERS
     -- SCRIPT FUNCTIONS
     -- WIDGET CODE

As in every widget code you will need the basic info part telling about the widget. Who made it what it serves for and who the author is etc... Next you will also need the code for initializing the widget. For this example, we are going to need a few Chili controls. We have need for the Chili, Window and Label control. That makes the script look like this now.

     function widget:GetInfo()
        return {
            name        = "helloworld",
            desc        = "hello world tutorial",
            author      = "Sunspot",
            date        = "2011-06-19",
            license         = "GNU GPL v2",
            layer       = 1,
            enabled     = true
        }
     end
     
     -- INCLUDES
     -- CONSTANTS
     -- SYNCED CONTROLS
     -- CHILI CONTROLS
     local Chili
      
     -- MEMBERS
     -- SCRIPT FUNCTIONS
     -- WIDGET CODE

     function widget:Initialize()   
        if (not WG.Chili) then
            widgetHandler:RemoveWidget()
            return
        end
        
        Chili      = WG.Chili
        local screen0 = Chili.Screen0
     end

Before trying out the widget, you should also create an empty file lockluaui.txt in your GameData folder ([/wiki/Category:Gamedata](/categories/gamedata)). This forces spring to load luaui.lua from the game archive instead of user's local.

Now everything you need to start creating windows and labels will be initialised and we can go on to the gritty fun stuff. We are going to use a label to contain the hello world string. This Label will then be put on a Window wich on his turn will be put on the gamescreen. You see what I'm going for, everything in Chili is nested on eachother like lego building blocks. The resulting script will look like this now.

     function widget:GetInfo()
        return {
            name        = "helloworld",
            desc        = "hello world tutorial",
            author      = "Sunspot",
            date        = "2011-06-19",
            license         = "GNU GPL v2",
            layer       = 1,
            enabled     = true
        }
     end
     -- INCLUDES
     -- CONSTANTS
     -- SYNCED CONTROLS
     -- CHILI CONTROLS
     local Chili
     
     -- MEMBERS
     local helloWorldLabel
     local helloWorldWindow
     
     -- SCRIPT FUNCTIONS
     -- WIDGET CODE
     function widget:Initialize()   
        if (not WG.Chili) then
            widgetHandler:RemoveWidget()
            return
        end
        
        Chili      = WG.Chili
        local screen0 = Chili.Screen0

        helloWorldWindow = Chili.Window:New{
            x = '50%',
            y = '50%',  
            dockable = true,
            parent = screen0,
            caption = "my hello world window",
            clientWidth = 500,
            clientHeight = 40,
            backgroundColor = {0.8,0.8,0.8,0.9},
        }   
        
        helloWorldLabel = Chili.Label:New{
            x = '50%',
            y = '50%',
            width = 12,
            parent = helloWorldWindow,
            caption = "Hello world",
            fontsize = 13,
            textColor = {1,1,1,1},
        }
     end

This would give you , your first Chili UI achievement. A hello world window in Spring. This wouldn't be a good tutorial if their wouldn't be some explaination to the code. First of all we create the window, followed by creating the label. We nest the label on the window and the window on the screen. I've only included a few basic parameters but they fit in the scope of this tutorial.

**`x`, `y`** : These are your basic x and y coords where you want the object to come on the main screen you can use absolute values , or relative percentage values. The percentage values are put as a string, the absolute once as integers. You can also use negeative integers, which means you will align from the right instead of the left.

**`dockable`** : boolean value that states if you will be able to dock or undock this window, sofar I only saw this work if you also include the public domain gui_chili_docking.lua script in the widget directory

**`parent`** : The Chili object where the window will be nested on.

**`caption`** : Windows can have a title, you put this title here as a string

**`backgroundColor`** : R, G, B, A values for the background of your window

**`clientWidth`** : \<not sure yet what this does, but it seems to have to be there\>

**`clientHeight`** : \<not sure yet what this does, but it seems to have to be there\>

**`width`** : width of your object, kinda obvious, although if the width is smaller then the text of your label your label will be abbrivated with ... . take note that you can also use percentage values here as a string to define the width fe "20%"

**`fontsize`** : size of your label font

**`textColor`** : R, G, B, A values for your font

That means if you resize the parent the anchored object will move and resize along. Using these kinda implies that x and y are invalidated. But I didn't see much change with or without x and y.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Chili:Tutorial Hello World](https://springrts.com/wiki/Chili:Tutorial_Hello_World).*
