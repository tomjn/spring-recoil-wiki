---
title: "Lua Beginners FAQ"
source_url: "https://springrts.com/wiki/Lua_Beginners_FAQ"
categories:
  - "Lua"
---
# Lua Beginners FAQ

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua Beginners FAQ

This page is an introduction to using Lua in Spring - it only tries to answer general questions, for more specific Questions please ask in the forum.

## Where should I start?

You can start by reading general Lua tutorials <a href="http://lua-users.org/wiki/LuaTutorial" class="external text" rel="nofollow">here</a>.

After that, you could look at the example widget [here](/lua-tutorial-gettingstarted), and try to add some functionality of your own!

Once you're a pro, have a look at the game repos [here](/gamedev-publicrepos), especially their /luaui/Widgets and /luarules/gadgets dirs.

## Where can I find help?

You can find documentation of Springs Lua API on the [Lua_Scripting](/lua-main) page. Discussion of lua coding takes place on the [lobby](/read-me-first) in \#moddev and \#lua, and there is also a <a href="https://springrts.com/phpbb/viewforum.php?f=23" class="external text" rel="nofollow">Lua sub-forum</a>.

## How do I open ".lua" files?

Any text editor is enough. On Windows i.e. use <a href="http://notepad-plus.sourceforge.net/uk/site.htm" class="external text" rel="nofollow">Notepad++</a>. There are also IDEs able to work with Lua, such as Eclipse, if you look for them.

## What is a call-in? And a call-out?

Call-ins are functions defined in your script that Spring calls when a determined event takes place. For example, the widget:Initialize() call-in is run by Spring when the widget is loaded. Call-outs are functions defined in Spring you can run at whichever moment you desire. For example, when you call Spring.GetUnitTeam(unitID), the engine returns the teamID of the unit identified by "unitID".

## What is the difference between unsynced and synced lua code?

Synced code is code that runs, identically and at the same time, on every connected client. In practice, this means code which controls the game state. Unsynced code is code that will run differently (or maybe not at all) on each connected client. Typically, this means the user interface.

For example, lua code to make units explode if they fell down a cliff would need to be synced. But, code that warned a player when one of their own units was getting near a cliff edge, would need to be unsynced.

## What is the difference between LuaUI, LuaRules, widgets and gadgets?

Spring allows various [Lua Environments](/lua-environments), each with differing functionality. Inside each Lua environment, developers can write addons, which are self-contained pieces of code. There are:

- **LuaUI**: Used for unsynced GUI related code. Addons in here are often called widgets. Clients can (if the game permits it) control which widgets are running. Widgets contain only unsynced code. They can be bundled inside the game, or loaded from the users "Spring/LuaUI/Wigets" directory.
- **LuaRules**: Addons in here are often called gadgets. Clients cannot choose which gadgets run. Gadgets can include both synced and unsynced code, and must be bundled inside the game.

Intended for mappers, there is also LuaGaia, which behaves like LuaRules but is separated from it. To see which of the lua environoments has access to which data/functionality, see [Lua:Environments#Interfaces](/lua-environments#interfaces) and [Lua:Callins](/lua-callins).

## What can't Lua do in the current version of Spring?

Springs Lua interface is very powerful. To work out if some idea is possible you need to ask

- When do I need the engine to tell me something has happened? Check against [Callins](/lua-callins).
- What information will I need to know about the game state? Check against [Lua_SyncedRead](/lua-syncedread) (synced) and [Lua_UnsyncedRead](/lua-unsyncedread) (unsynced).
- What do I then need to do about it? Check against [Lua_SyncedCtrl](/lua-syncedctrl) (synced) and[Lua_UnsyncedCtrl](/lua-unsyncedctrl) (unsynced).

Sometimes you need special functionality, like disk access or OpenGL calls, in which case check against [Interfaces](/lua-main#interfaces).

For completeness, some examples of things you (currently) can't do:

- control the ground LOS - but you can set the los status of units!
- add custom parameters to CEG definitions.

## Complex Lifecycles

Due to the complexity of the simulation, spring scripts are burdened with the curse of complex lifecyles very similar to <a href="https://en.wikipedia.org/wiki/Object_lifetime" class="external free" rel="nofollow">https://en.wikipedia.org/wiki/Object_lifetime</a> in programing.

This means, you can not rely on any information about the simulation being valid after as little as 1 frame has passed. Units may have been captured, destroyed or created in this time. Terrain may have been altered.

People usually combat this by creating large amounts of protective boiler plate, checking if a unit still exists, is still on the same team, etc. every time a unitscript, gadget or widget wakes up.

## Where can I find/edit examples?

You can find some easy example widgets [here](/lua-tutorial-gettingstarted). The best source of more complicated examples is inside games themselves, in the LuaUI/Widgets and Luarules/gadgets directories. See [Gamedev:PublicRepos](/gamedev-publicrepos) for a list of repositories.

To make your own widgets, simply place individual .lua files into your Spring/LuaUI/Widgets dir (create the dir if it is not present. Case-sensitive!!!). Game repositories can be checked out into a folder named "SomeAwesomeGame.sdd", placed in your "/Spring/games" dir; this shoudl give a local copy of the game, recognized by Spring, where you can edit files. Make sure to check the licenses before doing this!

## Can I reload a script without restarting Spring?

Yes, you can type "/luaui reload" to reload widgets, and if you have "cheats" enabled you can also "/luarules reload" to reload gadgets.

## Why does the print function seem to do nothing?

Its output is displayed in stdout. If you have no easy way to see it, you can Spring.Echo("some text") which prints to the ingame chat and infolog.txt.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua Beginners FAQ](https://springrts.com/wiki/Lua_Beginners_FAQ).*
