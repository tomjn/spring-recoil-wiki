---
title: "Lua SaveLoad"
source_url: "https://springrts.com/wiki/Lua_SaveLoad"
categories:
  - "Lua"
---
# Lua SaveLoad

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua SaveLoad

## Lua Save/Load support

### Motivation

Engine save/load has been broken/unstable for a very long time. I believe the major reasons for this were:

- In particular for loading too much special code paths were traversed, that were not used for anything else (e.g. creg_Serialize and creg_PostLoad functions in many classes);
- Each class was responsible for it's own saving and loading;
- The code for loading was spread out over many classes;
- Save/load using CREG was extremely slow.
- Savegames created using CREG were bound to be incompatible between different Spring versions because they relied inherently on the implementation details of every single class involved;
- The save/load system strived to be 100% perfect, saving every single detail.
- No clear way to save Lua states (without making Lua aware of it)

I realised we have a pretty decent and reasonably stable Lua interface. So why use this for save/load:

- The code has been tested in practice (it's used in widgets and gadgets);
- The interface is reasonably stable, so savegames can be compatible between different Spring versions;
- Not a single class needs special support for save/load, as save/load uses existing APIs.
- By simply using the standard call-in mechanism any gadgets can save some state if that is desired. The save/load gadget does not need to get special treatment at all.

<a href="http://springrts.com/phpbb/viewtopic.php?f=23&amp;t=21805" class="external text" rel="nofollow">Argh</a> and <a href="http://springrts.com/phpbb/viewtopic.php?f=23&amp;t=21836" class="external text" rel="nofollow">zwzsg</a> had this idea too and implement save/load using Lua only. This is a little bit hacky and it is slow when saving large amounts of data such as e.g. the modified terrain heightmap.

Hence Lua save/load brings engine support for Lua save/load :-)

### Idea

Instead of having the engine be responsible for serializing every bit of gamestate to disk, Lua save/load transfers most of the responsibility to the game (developer). The game developer can decide what objects and what properties are important to save, and ultimately a gadget could be created that could be drag 'n dropped in nearly any game. (Argh's and zwzsg's code would be useful for this.)

There are two new call-ins: Load and Save, that allow a Lua save/load system to seamlessly integrate with other interfaces of the engine (e.g. commandline, lobby). Load is called by the engine if it has been instructed to load a game. Save is called by the engine whenever the chat command '/save \<filename\>' or '/savegame' is given. Both get a userdatum as argument. Using the methods open, read and write on this userdatum the Lua code can read/write chunks of data.

At this moment existing code for reading and writing zip files has been re-used for Lua save/load, so savegames are simply renamed zip files (.ssf)

### Chat commands

- `/save [-y] <filename>`: Write a savegame to \<filename\>. The file is placed in the 'Saves' folder and the '.ssf' extension is automatically added. If -y is given the file is overwritten if it already exists. Filename cannot have spaces.
- `/savegame`: Write a savegame to 'Saves/QuickSave.ssf'.
- `/reloadgame`: Reload the savegame that was loaded when the engine was started. Useful for testing. Note that no cleanup is performed by the engine; i.e. Lua code should erase all units from the battlefield.

### Lua API documentation

Lua save/load brings two new call-ins:

#### _nil">**`Load`**` ( zip ) -> nil`

This **SYNCED** call-in is called after GamePreload and before GameStart. The single argument is a userdatum respresenting a zip file from which the game is being loaded.

On this userdatum the following methods are defined:

- `zip:open(filename)`: Opens a file within the zip file. Next calls to `zip:read` will read from this file.
- `zip:read(...)`: Reads data from the file that is currently open. Arguments and return values are similar to <a href="http://www.lua.org/pil/21.1.html" class="external text" rel="nofollow">io.read</a>, although only "\*all" and *num* are supported. The special case io.read(0) should work.

Note that currently loading multiplayer games is not supported: the Load call-in is only called on the client loading the game.

#### _nil">**`Save`**` ( zip ) -> nil`

This **UNSYNCED** call-in is called when a chat command '/save' or '/savegame' is received. The single argument is a userdatum representing the savegame zip file.

On this userdatum the following methods are defined:

- `zip:open(filename)`: Opens a new file within the zip file. Next calls to `zip:write` will write to this file.
- `zip:write(...)`: Writes data to the file that is currently open. Arguments are same as <a href="http://www.lua.org/pil/21.1.html" class="external text" rel="nofollow">io.write</a>.

Usually when this call-in is called you'd do something like this (pseudocode) in one savegame gadget:

     function gadget:Save(zip)
       zip:open("units.lua")
       for each unit do
         write some properties about the unit in zip, e.g. position, heading, health
       end
     end

Note that Spring writes files into this zip file too. Any files in the directory 'Spring' are reserved for use by the engine.

### Example gadgets

- Zero-K: <a href="https://github.com/ZeroK-RTS/Zero-K/blob/master/LuaRules/Gadgets/api_saveload.lua" class="external text" rel="nofollow">api_saveload.lua</a>
  - For an example of a gadget that interacts with this API gadget, see <a href="https://github.com/ZeroK-RTS/Zero-K/blob/master/LuaRules/Gadgets/start_unit_setup.lua" class="external text" rel="nofollow">start_unit_setup.lua</a>

If you have made a gadget that implements this interface, please add a link.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua SaveLoad](https://springrts.com/wiki/Lua_SaveLoad).*
