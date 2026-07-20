---
title: "Script.txt"
source_url: "https://springrts.com/wiki/Script.txt"
categories:
  - "Development"
---
# Script.txt

<div class="mw-parser-output">

## Script.txt

Start script file for Spring Engine.

Lobbies create it for spring, usually found in `~/.spring/script.txt` on Linux/MacOSX.

On Windows it can be found mostly in `My Documents\My Games\Spring\script.txt` or next to spring.exe.

### Structure

See <a href="https://github.com/spring/spring/blob/106.0/doc/StartScriptFormat.txt" class="external text" rel="nofollow">doc/StartScriptFormat.txt</a> for a more detailed example.

Spring 97.0 added `GAME/MUTATOR{0..9}` so you can load arbitrary mutator archives before the game. Additionally since 97.0 `GAME/GameID` is the only seed of the synced random generator, so you can define the `GameID` in a luaAI battle startscript and you will always get a syncing match.

Since 99.0 `GAME/Gametype` can be a [rapid](/rapid) tag, and demo recording can be disabled by setting `GAME/RecordDemo` to 0

Since 102.0 `GAME/SaveFile` can be specified in start script in order to start from a (lua) save (.slsf).

Overview of the structure:

    [GAME]
    {
      // game attributes
      [MUTATOR0]
      {
        // mutator attributes
      }
      [AI0]
      {
        // AI attributes
      }
      [PLAYER0]
      {
        // player attributes
      }
      [TEAM0]
      {
        // team attributes
      }
      [ALLYTEAM0]
      {
        // ally team attributes
      }
      [RESTRICT]
      {
        // restrictions
      }
      [MODOPTIONS]
      {
        // values for the options defined in Modoptions.lua
      }
      [MAPOPTIONS]
      {
        // values for the options defined in Mapoptions.lua
      }
    }

## Examples

### minimal functional startscript

Based on <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=32893&amp;p=566971#p566953" class="external text" rel="nofollow">these two posts:</a>

    [GAME]
    {
        MapName=DeltaSiegeDry;
        GameType=Balanced Annihilation V8.10;
        IsHost=1;
        [PLAYER0]
        {
            Team=0;
        }
        [TEAM0]
        {
            TeamLeader=0;
            AllyTeam=0;
        }
        [ALLYTEAM0]
        {
        }
    }

### More examples

startscripts used for pre-defined offline matches vs AI in different team configurations - <a href="https://code.google.com/p/springtanks/source/browse/#svn%2Ftrunk%2FMissions" class="external free" rel="nofollow">https://code.google.com/p/springtanks/source/browse/#svn%2Ftrunk%2FMissions</a>

## Generating startscripts

It is possible to use for example Springlobby to setup a game via the Singleplayer tab.

The temporary file that gets generated can be copied for further use.

### Converting Lua tables to script.txt format

<a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=32643" class="external text" rel="nofollow">lua table -&gt; script.txt generator</a> - thread with two examples

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Script.txt](https://springrts.com/wiki/Script.txt).*
