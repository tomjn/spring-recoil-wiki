---
title: "Hosting Spring/Springie"
source_url: "https://springrts.com/wiki/Hosting_Spring/Springie"
categories:
  - "Autohosts"
---
# Hosting Spring/Springie

<div class="mw-parser-output">

[Springie](/springie) is an Autohost for Spring, it creates a battleroom and starts automatically when enough people have joined. It also reacts to a number of chat commands.

## Requirements

- Spring
- Open UDP Port
- Springie

## Using

Springie is easy to use but you will need an open UDP port to be able to host a game. You can download it using the link at the end of the page, no install is required.

### Creating

After opening an UDP port, you need to create a new account for the bot and ask a GO (Game Operator) to put a bot flag on it. Now you only need to log in with Springie and configure the map and other settings!

***Note:** Spring changes Spring settings to 40 x 40 pixels and windowed mode, so if you want to play you will need to reconfigure it.*

### Commands

**HELP'**

- !help - lists the commands that are available to you
- !helpall - lists all commands (sorted by their level) - you may not be able to use all of them

**COMMUNICATION**

- !ring \[\<filters\>..\]- rings either all unready or specified users
- !say - allows you to talk between lobby and game (not needed if chat is enabled)
- !notify - Springie will notify you when game ends

**TEAM AND ALLY MANAGEMENT**

- !fix - fixes teamnumbers
- !fixcolors - fixes team colors (similar colors are changed)
- !random \[\<allycount\>\] - assigns people to \<allycount\> alliances (default: 2 alliances)
- !balance \[\<allycount\>\] - scans all ally combinations and randomly chose one which is balanced (eg regarding ranks) (warning: not tested for large teams, might take a long time)
- !cbalance \[\<allycount\>\] - assigns people to allycount random balanced alliances, attempting to put clanmates on the same alliance
- !ally \<allynum\> \[\<player\>..\] - forces ally number
- !team \<teamnum\> \[\<player\>..\] - forces team number
- !spec \<username\> - forces a player to become spectator
- !specafk - forces all AFK players to become spectators

**GAME CONTROL**

- !start - starts game (checks for duplicate team numbers and ally fairness)
- !forcestart - overrides ordinary !start checks (duplicate team numbers and ally fairness)
- !force - makes spring force start (ctrl+enter in-game)
- !exit - exits the game
- !manage \<minplayer\> \[\<maxplayers\>\] - automanage game for min to max players. If minplayers is 0, it won't manage. In this mode, Springie keeps alliances even, colors fixed, autorings and spec afk or even kicks them.

**VOTING**

- !voteforcestart - starts vote to execute !forcestart
- !voteforce - starts vote to force (in-game)
- !voteexit - starts vote to exit game
- !votekick \[\<filters\>\] - starts vote to kick player
- !votemap \[\<filters\>\] - starts vote for given map
- !voterehost \[\<filter\>\] - starts vote to rehost the game
- !votepreset \[\<presetname\>..\] - starts a vote to apply the given preset
- !voteboss \<name\> - sets \<name\> as a new boss, use without parameter to remove any current boss. If there is a boss on server, other non-admin people have their rights reduced
- !votekickspec - starts a vote to enables or disable automatic spectator kicking
- !votesetoptions \<name\>=\<value\>\[,\<name\>=\<value\>\] - starts a vote to apply the given option(s)
- !vote \<number\> - casts your vote (you must say it in battle window)
- !endvote - ends current poll

**BATTLE LOCKING**

- !lock - locks battle
- !unlock - unlocks battle
- !autolock \[\<players\>\] - sets desired number of players in game. If this number is reached, Springie will lock the server, and if someone leaves, it will unlock it again. !autolock without parameter disables auto locking.

**PRESETS**

- !listpresets \[\<presetname\>..\] - lists all the known presets (with name filtering)
- !presetdetails \[\<presetname\>..\] - shows the details of the given preset
- !preset \[\<presetname\>..\] - applies the given preset to current battle

**BOXES**

- !addbox \<left\> \<top\> \<width\> \<height\> \[\<number\>\] - adds a new box rectangle
- !clearbox \[\<number\>\] - removes a box (or removes all boxes if no number is specified)
- !split \<"h"/"v"\> \<percent\> - makes 2 boxes in h or v direction
- !corners \<"a"/"b"\> \<percent\> - makes 4 corners, a/b determines ordering

**MAPS**

- !listmaps \[\<filters\>\] - lists maps (can apply filtering)
- !map \<filters\> - changes map, and prints the new maplink in the battle
- !maplink - looks for map links on unknown files
- !dlmap \<mapname/dllid/url\> - downloads map to server. You can either specify map name or map id (from unknown files) or map URL

**MODS**

- !listmods \[\<filters\>\] - lists mods (can apply filtering)
- !modlink - looks for mod links on unknown files
- !dlmod \<modname/dllid/url\> - downloads mod to server. You can either specify mod name or mod id (from unknown files) or mod URL
- !rehost \[\<filter\>\] - rehosts game (optionally with new mod)
- !listoptions - lists all mod options
- !setoptions \<name\>=\<value\>\[,\<name\>=\<value\>\] - applies mod/map options

**ADMINISTERING**

- !admins - list privileged users
- !boss \<name\> - sets \<name\> as a new boss, use without parameter to remove any current boss. If there is a boss on server, other non-admin people have their rights reduced.
- !kick \<filters\> - kicks specified players from server (both game and lobby)
- !setlevel \<username\> \<level\> - sets rights level for given player
- !ban \<username\> \[\<duration\>\] \[\<reason\>...\] - bans user username for duration (in minutes) with given reason. Duration 0 = ban for 1000 years
- !unban \<username\> - unbans user
- !listbans - lists currently banned users
- !reload - reloads mod and map list
- !kickspec \[0\|1\] - enables or disables automatic spectator kicking
- !mincpuspeed \<GHz\> - sets minimum CPU for this host - players with CPU speed below this value are auto-kicked, 0 = no limit
- !setpassword \<newpassword\> - sets server password (needs !rehost to apply)
- !setminrank \<minrank\> - sets server minimum rank (needs !rehost to apply)
- !setmaxplayers \<maxplayers\> - sets server size (needs !rehost to apply)
- !setgametitle \<new title\> - sets server game title (needs !rehost to apply)
- !springie - displays basic springie information
- !cheats - enables/disables .cheats in game

**STATISTICS**

- !stats - lists various stats
- !smurfs - lists smurfs

## Links

- <a href="https://springrts.com/phpbb/viewtopic.php?t=7921" class="external text" rel="nofollow">Springie Topic</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Hosting Spring/Springie](https://springrts.com/wiki/Hosting_Spring/Springie).*
