---
title: "TestingYourGame"
source_url: "https://springrts.com/wiki/TestingYourGame"
categories:
  - "Game_Dev"
---
# TestingYourGame

<div id="about-this-page" class="section mw-parser-output">

## About this page

Commands or tricks useful during spring modding. Only add things average player does not know, ex not "F4 shows metalmap."

### General

- Start spring.exe directly to quickly test games or maps.

<!-- -->

- To see some general info like game name, spring version: Press **i** or type **/gameinfo**

<!-- -->

- Instead of packing your WIP game or map, use an .sdd folder: [Gamedev:Structure#.sdd_directories](/gamedev-structure#sdd-directories)

<!-- -->

- In windowed mode it is easier to switch being playing and editing. See [Springsettings.cfg#Fullscreen](/springsettings.cfg#fullscreen)

### Console

- The chat is the console. It is also logged to [Infolog.txt](/infolog.txt)

<!-- -->

- See [UI_commands](/ui-commands) how to use the console.

<!-- -->

- Most commands require to type **/cheats** to enable cheating.

### Resources

**/atm** - get 1000m,1000e (still needs storage)

### Spawn or destroy a unit or feature

**/give \[amount\] \<objectName \| 'all'\> \[team\] \[@x, y, z\]**

Example: **/give supertank** - This spawns one "supertank"

Can have parameters: **/give 25 supertank 3 @1000,100,750**

This spawns 25 "supertank" units to team 3 at coordinates 1000,100,750

**/destroy** - kill selected units

### Lua

**/luarules reload** - reloads gadgets

**/luaui reload** - reloads widgets. Click an widget twice in widget menu to reload only this one.

**/luagaia reload** - reloads gaia gadgets

### See unitIDs

Use widget such as <a href="http://springrts.com/phpbb/viewtopic.php?f=23&amp;t=25029&amp;p=467318&amp;hilit=unitids#p467318" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=23&amp;t=25029&amp;p=467318&amp;hilit=unitids#p467318</a> to see unitIDs above units.

### Widget menu

Hotkey: F11

In default widget menu:

- green name = running widget
- yellow name = widget crashed or disabled itself
- red name = disabled widget
- White stars left and right of name = Widget is contained in game.
- No stars = local widget (user added)

### Collision volumes

See [Gamedev:CollisionVolumes#How_to_see_them_ingame](/gamedev-collisionvolumes#how-to-see-them-ingame)

### Performance

Type **/fps** for framerate. Type **/debug** for various info. (default hotkey: alt+b)

### Teams/players, vision

**/info** for a list.

**/team X** to change team. For example **/team 2** to controll units of team 2.

**/spec** - become spectator

**/globallos** - full vision (see the whole map)

**/godmode** - controll all teams. Generally you will want to combine with /spec or /globallos

**/sharedialog** (default hotkey: h) - give selected units to other teams.

### Unit scripts

**/reloadcob** - COB scripts **/luarules reload** - LUS

### CEG, particle effects

Type **/reloadcegs** to reload from files.

### Weapons

FPS-mode lists weapons of unit + status. Can be useful to see why a unit is not firing to its weapon.

### Various

- **/wiremap** - Can see units under terrain

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [TestingYourGame](https://springrts.com/wiki/TestingYourGame).*
