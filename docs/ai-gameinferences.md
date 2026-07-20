---
title: "AI:GameInferences"
source_url: "https://springrts.com/wiki/AI:GameInferences"
categories:
  - "AI_Dev"
---
# AI:GameInferences

<div class="mw-parser-output">

## Useful inferences derivable from the game's data

### Description

This page describes how to infer (derive logical conclusions from permisses) some useful information to get started. For example: try to infer where the opponent might have started.

## Infer spawn positions

An important first step right at the start of the game is to infer where the opponent(s) might have started.\
A forum thread about it: <a href="http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=32662" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=32662</a>\

There are a few methods of varying reliability but, unfortunately, none appears to be absolutely reliable:

- **Enable cheats, even if only temporarily**\
- **Parse the startup script**\
- **Try to parse the map's raw data files**\
- **Assume symetric starting positions**\

### Enable cheats

The Java OOInterface allows the enabling and disabling of cheats (not sure about the other interfaces - someone update this). After cheating is enable, querying for all opponents' units will respond with all enemy units even if they are out of sight or radar.\

    Cheats cheats = _OOAICallback.getCheats();
    cheats.setEnabled (true); //Enables cheats and sends a message to all players warning the AI is cheating.
    cheats.setEventsEnabled (true); //Enables this AI receiving events for also the other player, like the "unitFinished" event.

Note - at the very beggining of the game (as in frame 0) the enemy might not yet have spawned (your initial unit might have spawned first). It's necessary to wait a few frames before trying to get this info reliably. (SpringRTS runs at 30 simulation steps per second)\

Note - this method does not work in all conditions. As far as I've read somewhere, cheating will only work when the AI is playing someone in the same host machine and, if any cheating is done with someone else in the game, it will desync the running simulation between the running machines. There is a method that can be used to query that:

    bool whetherCheatingWillDesyncTheGame = cheats.isOnlyPassive();

### Parse the startup script

The lobbies create an instruction script that is passed to SpringRTS when the lobby invokes it. On start, the SpringRTS engine will then parse that script for instructions on what maps to load, etc., and which starting positions to use. In Linux, that script should be in: ~/.config/spring/script.txt.\

In the startup script you can find parameters like:

       startpostype=3;

       [TEAM0]
       {
          StartPosX=284;
          StartPosZ=256;
       }

See the source code for a mapping of what each startpostype means: <a href="https://github.com/spring/spring/blob/64733de8b60dfba3533ed2374cc426c2bfb6addb/rts/Game/GameSetup.h#L65" class="external free" rel="nofollow">https://github.com/spring/spring/blob/64733de8b60dfba3533ed2374cc426c2bfb6addb/rts/Game/GameSetup.h#L65</a>\

If "choose in game" option was chosen, the script should have a definition of a rectangle of where each player could have chosen its start position:

    startrecttop
     startrectbottom
    startrectleft
    startrectright

### Try to parse the map's raw data files

According to user Silentwings, some maps have a mapinfo.lua specifications file with the information on the starting positions on the map. However, not all maps have that file, and each mod/game can override that behaviour anyway.

### Assume symetric starting positions

As a final last resort, a weak assumption can be made that in a 1v1 match the opponent will start in the symetrical opposite position of the map.\

Example: if the AI starts top left, at position (250; 250), it can make a weak assumption that the opponent will have started roughly at (MaxX-250; MaxZ-250).

## Infer map traversability

How to infer where in the map each unit can pass through. Usually a submarine won't be able to go inland and a tank won't be able to climb mountains.\
TODO\
<a href="http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=32665" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=32665</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:GameInferences](https://springrts.com/wiki/AI:GameInferences).*
