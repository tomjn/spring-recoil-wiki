---
title: "Chili:Examples"
source_url: "https://springrts.com/wiki/Chili:Examples"
categories:
  - "Libraries"
---
# Chili:Examples

<div class="mw-parser-output">

[Wiki](/main-page) \< [Chili](/chili) \< Examples Of Chili

## Chili Widgets

A few small examples of Chili widgets, some of which were used in the Chili tutorial are the following:

[1. Hello World](/chili-example-hello-world)

[2. Dynamically update a label](/chili-example-2)

[3. Command and Build commands in a chili window](/chili-example-3)

Some self-contained examples of functional Chili widgets, from real games:

- <a href="https://github.com/SpringCabal/Gravitas/blob/master/LuaUI/Widgets/ui_quitbutton.lua" class="external text" rel="nofollow">Quit Button</a> - a button that quits the game
- <a href="http://imolarpg.dyndns.org/trac/balatest/browser/branches/BAR/luaui/widgets/bgu_replay_speed_control.lua" class="external text" rel="nofollow">Replay Speed Control</a> - a panel of pressable buttons to control the speed of watching a replay
- <a href="https://github.com/SpringCabal/Area-17/blob/master/LuaUI/Widgets/ui_health.lua" class="external text" rel="nofollow">Player Health Bar</a> - a health bar that hovers above a players character (made for an rpg/puzzle game)

You can find many more examples, including much more complex ones, in the games below.

## Chili GUIs

A Chili GUI is typically built out of many different widgets, each of which uses Chili to create part of the GUI and also the Lua functions to implement that part of the GUI.

Chili is used by many Spring games, although not all. Newer games often use Chili, some older games pre-date Chili and use GUIs written directly in OpenGL. In theory, a game could have a GUI containing some Chili widgets and some non-Chili widgets, but in practice most games that adopt Chili make all or almost all of their GUI using Chili.

Games with small examples of Chili GUIs, which are good sources of simple example widgets, are

- <a href="https://github.com/SpringCabal/Gravitas/tree/master/LuaUI/Widgets" class="external text" rel="nofollow">Gravitas</a>
- <a href="https://github.com/SpringCabal/Area-17/tree/master/LuaUI/Widgets" class="external text" rel="nofollow">Area-17</a>

Note that these links are to the LuaUI directory of the game, in which the gui widgets can usually be found prefixed with `gui_`.

You can find working examples of full scale Chili GUIs in

- <a href="https://github.com/ZeroK-RTS/Zero-K/tree/master/LuaUI/Widgets" class="external text" rel="nofollow">Zero-K</a>
- <a href="https://github.com/EvolutionRTS/Evolution-RTS/tree/master/LuaUI/Widgets_Evo" class="external text" rel="nofollow">Evolution RTS</a> (partially)
- <a href="http://imolarpg.dyndns.org/trac/balatest/browser/branches/BAR/luaui/widgets" class="external text" rel="nofollow">BAR</a>

and in other games with [Public Repos](/gamedev-publicrepos). You can see many of these GUIs on the [Screenshots](/chili-screenshots) page.

Although there are many Chili widgets that can be used in any game, there is currently no whole 'game-agnostic' minimal Chili GUI, although it would be great if someone would make one ;)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Chili:Examples](https://springrts.com/wiki/Chili:Examples).*
