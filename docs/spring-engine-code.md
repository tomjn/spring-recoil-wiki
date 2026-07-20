---
title: "Spring Engine Code"
source_url: "https://springrts.com/wiki/Spring_Engine_Code"
categories:
  - "Engine_Dev"
---
# Spring Engine Code

<div class="mw-parser-output">

To get people somewhat started into the mass of spring engine code, here is a small "walkthrough" of the game process. Another good way of learning the code is building it in debug mode, setting a breakpoint at some place, and running spring. When it breaks on that point you'll be able to see full call stack which is very educational.

1.  Application entry point (Main.cpp)
    1.  Window is created
    2.  VFS is initialized (VFSHandler.cpp)
    3.  Game setup:
        1.  if there is a start script (like [script.txt](/script.txt)) this is used to initialize the global gameSetup (in GameSetup.cpp)
        2.  CPreGame is created
            1.  if it's a client: CPreGame either waits for a start script.txt i
            2.  if it's a server: CPreGame uses the given start script (if one) or shows the list of startup CScript classes such as Commanders or Global AI
        3.  CGame is created
            1.  CGame::CGame() will load all game data such as the map, unit models, textures, features
    4.  Main window message loop starts
        1.  Drawing
        2.  Game_Update

## Game Update

1.  update the networking, and when a message for a new frame arrives start update the game. This might seem weird, but because all game simulations have to be synced, it shouldn't run the game further until the server is ready.
    1.  unit handler update
    2.  feature update
    3.  projectile handler update
    4.  ...

## Scripts

A single script is chosen by CPreGame, and is run once a frame. This is not the same as the script.txt which only provides initialization data, typically to communicate from the lobby to spring.exe. For a lobby-game, the script is hard-coded as "Commanders", which gives each team a commander.

The current loaded script is specified by Game/StartScripts/ScriptHandler.cpp : CScriptHandler::Instance-\>chosenScript

## Mods

The mod selection takes place in PreGame.cpp.

The mod is loaded by multiple files, such as Sim/Units/UnitDefHandler.cpp , which are called from Game.cpp, in the constructor:

    unitDefHandler=new CUnitDefHandler();

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Spring Engine Code](https://springrts.com/wiki/Spring_Engine_Code).*
