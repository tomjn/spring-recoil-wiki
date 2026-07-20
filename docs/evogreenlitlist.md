---
title: "EvoGreenlitList"
source_url: "https://springrts.com/wiki/EvoGreenlitList"
categories:
  - "Historical"
---
# EvoGreenlitList

<div class="mw-parser-output">

List of most urgent problems currently preventing players from playing evo.

## Current

### engine detection

For ~~unknown reasons~~ <a href="http://code.google.com/p/springweblobby/wiki/EvoSteamBugs" class="external free" rel="nofollow">http://code.google.com/p/springweblobby/wiki/EvoSteamBugs</a> **often does not work.**

"stops at 100%"

"nothing happens"

or errors like <a href="http://springrts.com/phpbb/viewtopic.php?f=64&amp;p=556182#p556131" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=64&amp;p=556182#p556131</a>

## Addressed/Fixed

### Maps

#### Solved

A limited maplist was introduced, unsynced players are auto-specced.

The maps from maplist were added in the steam distribution in the operation dubbed "Preload", as well as the engine and pool/packages with the game. --

Too much random map changes. Too much downloading, too much unsync = no games start.

Some commonly chosen maps are unplayable (space maps etc)

Solve: **Maplist** on ALL hosts.

Best only put ONE map so that players do not have to download much and can just play. Map could be: <a href="http://springfiles.com/spring/spring-maps/eye-horus-v2" class="external free" rel="nofollow">http://springfiles.com/spring/spring-maps/eye-horus-v2</a>

Progress: unsynced players are specced and can not delay gamestart but does not seem to help so much

### Singleplayer

#### Solved

Preload. --

Does not work with fresh install because there are no files.

One must first join a MP to download engine,map,mod.

Solve: **Download files on login** or something.

### empty room, use !lock

#### Solved

Springie seems to work correctly now. --

The common solution to select an empty autohost and then lock the room does not work:

Players need to be manually to use !lock command. The empty hosts are impossible to find because players randomly join&leave all the time. Even if you join an empty host, hardly does one have enough time to type !lock before another player joins.

### Bots, AIs

#### Solved

Bot filter specific to evo was created. --

Needs **filter** for add-bot menu. Only evo-compatible bots must be listed. AAI is too often choosen because top of list but it does not work.

Solve: If nessecarly hard-coded hack in lobby might be needed? (real solution like implenting validAI.lua probally no time)

CarRepairer: Actually the REAL real solution is to remove AIs from the engine, which should have been done years ago like widgets. That would solve it for future versions only so a validAI list would be needed now of course.

The evo-AIs reportedly "do nothing."\
Under investigation at: <a href="http://springrts.com/phpbb/viewtopic.php?p=556029#p556029" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?p=556029#p556029</a>\
Possible quick fix: play on metal maps (Trololo, Trench_Linked).\

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [EvoGreenlitList](https://springrts.com/wiki/EvoGreenlitList).*
