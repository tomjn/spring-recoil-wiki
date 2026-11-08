---
title: "User:Knorke/Sandbox1"
source_url: "https://springrts.com/wiki/User:Knorke/Sandbox1"
---
# User:Knorke/Sandbox1

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

### What this is

This page explains how to get started making scripts for spring.

### What this is not

This page does not explains how to make scripts for spring.

This page is not a Lua tutorial.

### Requirements

- having played spring game for some days
- text editor with synthax coloring
- copy of [SpringTutorialGame](/springtutorialgame)
- <a href="http://springfiles.com/spring/spring-maps/aliendesert" class="external text" rel="nofollow">some small map</a> because those load faster
- Spring set to [windowed mode](/springsettings.cfg#fullscreen) for easier switching between editor/game
- a very bit familiar with programing (variables, functions, loops, arrays = enough)
- read through [this tips page](/testingyourgame) once

### Wupget and friends

In Spring games there are 3 kinds of Lua scripts. Crude and simple explaination:

1.  gadgets: these are the "gameplay logic code."
2.  widgets: these are for interface.
3.  unit scripts: animate units & controll their weapons.

Making those 3 is not very different but widgets are the easiest to start with.

There is also 4) functionality provided by the engine.

**Also look at this:**

![Gadgets_widgets_and_friends.png](/images/Gadgets_widgets_and_friends.png)

All 4 are in a constant fight against each other.

### My first wupdget

The [SpringTutorialGame](/springtutorialgame) is simple and good for testing: You can use any other game but some block player widgets or are very confusing.

Create a txt file like this and there: Spring\LuaUI\Widgets\myfirstwidget.lua

and copypaste this text into it:

------------------------------------------------------------------------

function widget:GetInfo()\
  return {\
    name      = "my first widget",\
    desc      = "this is so awesome",\
    author    = "horse 3000",\
    date      = "2009",\
    license   = "GNU GPL, v2 or later",\
    layer     = -10,\
    enabled   = true\
  }\
end\

------------------------------------------------------------------------

For now it does not matter what excactly this does but here you can put informations about your widget.

What matters is that without such GetInfo() function Spring will not load the widget correctly. (Since it takes up screen-space it will be left out when code is posted. Of course it must still be there.)

Start spring.exe and press F11. The "widget menu" opens:

![Widget_F11menu.png](/images/Widget_F11menu.png)

It is likely already filled with some other widgets contained in the game. Find your new widget in the list. Click on it to turn it on and off: The name in list should go green or red accordingly.

If that works - congratulation: You made a new widget that does excactly nothing.

## "Hello unit" wupdget

Add the following at the end of myfirstwidget.lua:

function widget:UnitFinished(unitID, unitDefID, teamID)\
    Spring.Echo ("a new unit was finished! It belongs to team " .. teamID)  \
end\

UnitFinished(...) is a [callin function](/lua-callins) : Those are functions that the engine calls when certain events happen. Captain Obvious has already figured out: This function gets called when a new unit is finished.

Spring.Echo is used to output text to the chat/console. So this widget should tell when a new unit is made.

4\) Open the widget menu and disable then re-enable your widget: This will reload the widget. Now build some units to test it.

#### Finding errors and infolog.txt

For test add an error like this: Spring.Echo (100 + nil) and reload the widget. The widgets name is green but turns yellow as soon a unit is build: "nil" can not be used in math like that.

The error is also displayed in chat and [infolog.txt](/infolog.txt) In that logfile you can look up all errors even if they have disappeared from chat. Fix the error, reload the widget and it is green again. Oha.

FIXME: expand this

#### widget sees you and only you and your allies

Even if there is a bot/other player building stuff, the widget will not notify on all their new units if they are outside line of sight. That is because widgets are limited in what they can "see." The widget only sees what what the player who is running the widget can see, too. This is to prevent cheating.

### "Hello unit" 2 - with markers and advancement

change the widget to this and guess what it does:

function widget:UnitFinished(unitID, unitDefID, teamID)\
    local x,y,z = Spring.GetUnitPosition (unitID)\
    Spring.MarkerAddPoint (x,y,z, "a new unit! id=" .. unitID)\
end\

It adds a marker point on every new unit! Note how the unitID parameter from UnitFinished() is passed to GetUnitPosition()

#### unitIDs

Previous paragraph featured *unitID* variable. Every unit, feature or weapon projectile in spring has an ID number:

![Units_features_projectiles.png](/images/Units_features_projectiles.png)

There are never two units with the same unitID at the same time.

\#YOLO?

No YOLO: when a unit is destroyed its unitID might be reused later for a different unit.

## a boring counter widget

A counter that is increased when units are made:

local counter = 0\
function widget:UnitFinished (unitID, unitDefID, teamID)    \
    counter = counter +1\
    Spring.Echo ("now there are " .. counter .. " units")\
    if counter \> 10 then\
        Spring.Echo ("wow, more than 10 units!")\
    end\
end\

[Reload the widget](/testingyourgame#lua) and note how the counter gets reseted. That is how widgets roll: Their variables get cleared on reload.

#### boring counter widget with tables

Imagine you want a counter that stores for each factory how many units it has already produced. One variable will not be enought here but an array can store multiple things.

Arrays in Lua are tables. Read about tables: <a href="http://lua-users.org/wiki/TablesTutorial" class="external free" rel="nofollow">http://lua-users.org/wiki/TablesTutorial</a>

local buildCount = {}\
function widget:UnitFromFactory(unitID, unitDefID, unitTeam, factoryID, factoryDefID, userOrders)\
    --read from table how many units this factory already built\
    local n = buildCount\[factoryID\]\

    --was the entry empty?\
    if n == nil then                    \
        n = 0 --if yes, start counting from 0\
    end\
    n = n +1 --increase n by 1 (best comment ever)\
    Spring.Echo ("This was unit number " .. n .. " from factory " .. factoryID)\
    --store new buildCount for this factory\
    buildCount\[factoryID\] = n\
end\

UnitFromFactory is basically the same as UnitFinished, but has the usefull *factoryID* parameter. **Why the if n == nil?** In Lua everything not initialized is nil (=nothing) and nil can not be used in any math.

(n = n +1 is a math)

Btw a shorter version could be:

buildCount\[factoryID\] = (buildCount\[factoryID\] or 0) + 1

### I made enough "hello world" widgets. What now?

On [Lua_Scripting](/lua-main) the most important are the pages under **GameState** and **Client**

See these [pro-tips](/testingyourgame) to make testing less frustrating.

While widgets are initially easiest to make, soon there is a problem: widgets are for interface stuff.

That means widgets usually need to either...

- ...draw something on the screen. (for example the health of Commander)

and/or

- ...give orders to units. (for example make Commander automatically run away from danger)

Both graphics and the whole order-system can be bit tricky for starters. Without graphics and orders, the awesomeness potential of a widget is small.

**Pro tip:** gadgets can be awesome without either!

### go go gadgets time!

We learned widgets can only "look at" the gamestate or do things that players can do, for example ordering units to attack another unit.

On the other hand gadgets are scripts that are able to alter the state of the game. With gadgets it is possible to implent new game logic like jumpjets, drop pods, tech tree systems, etc.

Unlike widgets, gadgets must be [included in a game or in a map.](/gamedev-structure#luarules5c)

To do so it is best to unpack the game file into an [.sdd archive](/gamedev-archives)

Writing gadgets is similiar to widgets, except the getInfo() header and callin functions are prefixed with `gadget:xxx` instead of `widget:xxx`

#### synced & unsynced

Gadgets are split into a synced and into an unsynced part.

In simple terms that means the synced part is usually for controlling the game logic. The unsynced part is for drawig graphics.

For example look at this lava tide gadget:

![Beachbuggysuicidecult_lava_sync_unsync.gif](/images/Beachbuggysuicidecult_lava_sync_unsync.gif)

The **synced** part is responsible for *damaging/destroying the units* in the lava. It actually alters the gamestate.

The **unsynced** part is only for *drawing* the graphic of the lava. The graphic itself does not influence the gamestate in any way.

In code it looks like this:

if (gadgetHandler:IsSyncedCode()) then\
  --synced code\
  ..\
  damage all units that are underneath the lava tide level\
  ..\
else\
  --unsynced code\
  ..\
  drawing the lava with GL-api functions\
  ..\
end\

Of course that also means that some functions or callins can only be used in synced or unsynced part. For example the synced part can not draw anything and the unsynced part can not spawn units.

Sometimes it is nessecary to transfer some data/information "across the sync-unsynced border" - but the scope of variables is only in the part they were declared in. In lava-exampe that might be the current height of lava. How this still works is explained here: [LuaTutorials::InterCommunications](/luatutorials-intercommunications)

### Look at more examples

Common hint for learning spring Lua is: *"Look at some examples in other games."*

But a spring game usually has dozen of wupdgets and only a few are useful examples for beginners. Many scripts deal with some very specifique problem or are just way too long. Or one has to be familiar with the game to even understand what the script even does. Or if one wants to use the wupdget in ones own game, suddendly nothing works anymore because it depends on so many configs or other files.

Two simple examples are:

"Linked units" (hub dies, child-units explode too) <a href="http://springrts.com/phpbb/viewtopic.php?f=23&amp;t=25435" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=23&amp;t=25435</a>

"Moveable metal extractor" <a href="http://springrts.com/phpbb/viewtopic.php?f=14&amp;t=26877" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=14&amp;t=26877</a>

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Knorke/Sandbox1). Original page: [User:Knorke/Sandbox1](https://springrts.com/wiki/User:Knorke/Sandbox1).*
