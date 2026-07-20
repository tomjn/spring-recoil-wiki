---
title: "Chili:Example Hello World"
source_url: "https://springrts.com/wiki/Chili:Example_Hello_World"
categories:
  - "Libraries"
  - "Tutorial"
---
# Chili:Example Hello World

<div id="chili-hello-world" class="section mw-parser-output">

## Chili Hello World

This is the 'Hello World' example of a Chili widget, to accompany the [Chili Tutorial](/chili-tutorial).

function widget:GetInfo()

     return {
       name    = "Chili Hello World",
       desc    = "",
       author  = "",
       date    = "",
       license = "GNU GPL v2",
       layer   = 0,
       enabled = true
     }

end

local Chili, Screen0

local helloWorldWindow local helloWorldLabel

function widget:Initialize()

     if (not WG.Chili) then
       -- don't run if we can't find Chili
       widgetHandler:RemoveWidget()
       return
     end

     -- Get ready to use Chili
     Chili = WG.Chili
     Screen0 = Chili.Screen0

     -- Create the window
     helloWorldWindow = Chili.Window:New{
       parent = Screen0,
       x = '40%',
       y = '40%',
       width  = '20%',
       height = '20%',  
     }  

     -- Create some text inside the window
     helloWorldLabel = Chili.Label:New{
       parent = helloWorldWindow,
       width  = '100%',
       height = '100%',
       caption = "Hello world",
     }

end

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Chili:Example Hello World](https://springrts.com/wiki/Chili:Example_Hello_World).*
