---
title: "LuaLifecycle"
source_url: "https://springrts.com/wiki/LuaLifecycle"
---
# LuaLifecycle

<div class="mw-parser-output">

This is work in Progress: Its goal is to collect and present all that missing information in the other articles, that lead to look ups in the source code.

## Pre-Load

Spring takes your game either as a folder with the ending .sdd or as a zipped file distributed- either traditionally or via rapid, in a series of small files, stored in the rapid (/home/picasso/.spring/rapid/repos.springrts.com) folder in your spring installation. Spring will compute a hash over those files and folders. If they are altered in name, value or existence, spring will not sync these games up. You will not go to war today. You can sync a .sdd folder with zipped games, by adding a springignore.txt which is similar to a .gitignore.

You can not add external widgets to a sdd folder and make it work. (TODO Validate)

The nature of this hash, enforces something else. With all content static, you can not store any values "inside" your game. You can store values as config values within the spring installation. You can load textfiles from external folders reachable to spring. But you cant change what makes the game.

## On-Load

Spring will load your game and then present the loaded files within the game-code as reachable via the VFS (Virtual File System). Some files can be altered and reloaded for development purposes. This includes the synced lua (/luarules reload) - which is equivalent to starting a new game, synced script wise. UI-Files can be altered and reloaded, and already existing files at the start can be re-used. (/luaui reload). You can not add new widgets to the folder. Depending on wether the game allows userWidgets (ModOptions), all already existing widgets in the external /LuaUI/GAMENAME/folder will be reloaded. In this folder, settings for the User-LuaUI can be stored persistently.

During engine development some mistakes were made, regarding naming during load. Meaning, a map can have the same lua-rules and luaui folder, to implement map specific content and this content is loaded into the same namespace, as regular widgets (/luaui) and and gadgets (/luarules). This can lead to naming collisions and not working widgets / synced game parts, depending on the map. The usual way to avoid this, is to rename your luaui and luarules (TODO Check) folder and assume that all gadgets /widgets loaded into the default folder are Map based or other external widgets.

For a example of such a architectural separation look at

<a href="https://github.com/beyond-all-reason/Beyond-All-Reason/tree/master/luaui" class="external free" rel="nofollow">https://github.com/beyond-all-reason/Beyond-All-Reason/tree/master/luaui</a>

other games have a exclude map lua function, that refuses to load non-game lua.

## On-LuaIntro

## On-LuaUI load

Depending on how the widgets are loaded and what framework they use, subtle different lua-sntax rules may apply. This means that lua functions in those widgets will have to be declared to be used in parsing order.

## On-LuaRules/Synced load

## On-Victory

## On-GameEnd

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [LuaLifecycle](https://springrts.com/wiki/LuaLifecycle).*
