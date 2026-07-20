---
title: "Altaric's Lobby Client"
source_url: "https://springrts.com/wiki/Altaric's_Lobby_Client"
categories:
  - "Historical"
---
# Altaric's Lobby Client

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | This page contains outdated information, but is kept for historical reasons. |

Altaric's Lobby Client is an alternative lobby client developed by Altaric. Its features are added on top of the basic client, rather than as a complete reimplementation, so you can (for the most part) use it just like the basic client. Most of the additional features are contained in "AltaMod" tabs.

The client's nicest feature is a system of macros that makes hosting battles much easier. You can configure administration permissions for these macros for individual users, and even use them to run automated dedicated hosts.

The extra options are found in three places: the Options pane (accessible by clicking the Options button from the main window), the Battle Screen, and the Map Picker.

## Installation

Download it from: <a href="http://membres.lycos.fr/altaric2/TASpring_modified_client.zip" class="external text" rel="nofollow">here</a>.

Place all three files from the zip file to your TASpring directory. Then run the modified lobby client program. Creating a shortcut to it on your desktop or in your start menu would probably be a good idea.

## AltaMod Options

These options are divided into tabs, for easy reference.

### General

There's only one option here: "Open Links in Default Browser". Turning it on means that links will be opened in your system browser - IE, Firefox, Opera, whatever. Turning it off means that Altaric's Lobby Client will use its own internal web browser to open links.

### Sounds

This panel controls AltaMod's sound effects. The right column toggles on and off sound effects for specific events. All are self-explanatory.

### Chat Alert

This panel lets you configure "chat alerts", basic triggers that respond to chat events. The large text field is where you enter the text you want to search for. Each line specifies a single thing to search for. The "Activate" box turns chat alerts on and off.

The four boxes immediately below the Activate box configure the matching process. "Search in Names" allows you to specify whether or not the name of the user speaking should be searched. This lets you handle messages from specific users (or even users in specific clans) specially. Ring, Highlight, and Log specify the response to a matching chat alert. Ring plays an audio effect, Highlight recolors the text (using the color configured by clicking on the "color" box), and "Log" outputs the line to a file.

The three lower options allow you to configure where chat alerts are watched for. "Channels" watches for chat alerts in global chat channels, like \#main. "Privates" watches for chat alerts in private messages. "Battles" watches for chat alerts in battle chat.

### Banlist

A feature I'm sure we've all been waiting for, Banlist allows you to prevent disruptive players from joining your games. Tired of people who keep rejoining and spamming messages when you're trying to organize a game? Now you can just ban them from your games!

The "Activate Ban List" checkbox lets you toggle your banlist on and off. If it's off, it simply won't be enforced.

Each line in the textbox should be the name of a player to ban. Note that names are case-sensitive, so make sure you get the spelling right! The easiest way to do this is to use the "Ban" button in the Battle [Player Control](#player-control) view. When a banned player tries to join one of your games, they'll get a message telling them that they're banned and they'll be immediately kicked.

### Admin

This is how you configure privileges for the ALC Macros. Each line in the textbox here should be a player name followed by a : followed by a number. That number is the maximum "rights level" that player has. For example, if I have:

\*:0 Altaric:2 egarwaen:5

In my admin tab, Altaric can use any macro that requires rights 2 or less, I can use anything that requires rights 5 or less, and anyone can use any rights 0 macro.

One of the first things you'll want to do before hosting a battle is add yourself to the admin list with a high rights value. This will let you use any macros.

### Friends and Foes

The Friends and Foes tabs allow you to build a list of players you consider to be "Friends" or "Foes". Each tab has a text field, which should hold a list of players, one per line. Note that case *does* matter here, so type carefully. Players you consider to be friends will be moved to the top of the client players list, and players you consider to be foes will be moved to the bottom.

### Rights

The Rights tab lets you configure the rights level associated with a particular macro. Users will then have to have at least this level of rights to execute this particular macro.

For a description of what each macro command does, please see [Macro Commands](#macro-commands).

## AltaMod Battle

Like the Option dialog contents, these commands are divided into tabs, for easy reference.

### Player Control

The same as the Player Control panel for the default lobby client, except it adds a ban button. This button adds the selected player to the banlist and immediately expels them from the current game.

### Team Balancer

This tab's great for those that prefer games with approximately balanced teams. It provides you with a list of teams, and the number of players and total rank of each. While this won't guarantee a fair game, it can be used to prevent the teams from being fantastically stacked.

### Rules

This tab lets you define some rules for the game. The "MOTD" button copies the MOTD from the next tab into the rules. The "Generate" button automatically generates a nice description of the rules based on the game parameters, including things like mod, map, wind/tidal energy levels, map size, and victory condition. The "Post" button is currently broken, but once it's fixed, it'll echo the rules to the in-game chat.

The .NoCost button lets you turn on the NoCost cheat from the start.

The min/max speed panel lets you set the minimum and maximum in-game speed. Any player can change the speed to anything between these two values. "Active" is the same as the old "Lock Speed" option, and prevents the speed from being set to anything but 1. "Script Lock" allows you to set a minimum speed and maximum speed to anything you want.

### MOTD

This tab lets you set a "Message of the Day" for your battle, which can easily be pasted into the [Rules](#rules) field using the MOTD button. The text field up at the top lets you specify a message to be sent to players when they join. You can choose to either send it in the in-battle chat or as a PM. A %n in the message will get expanded to the player's name, and a %r to their [Rights](#rights) level, as set in the [Admin](#admin) tab.

### Host Filters

This tab lets you set some filters to control who can play in the game. "Min CPU" is the minimum CPU speed, measured in MHz, that you want to allow into your game. Note that this is 1000 times the value given in the player list. "Min Rank" is a value from 1-5, and is the minimum player rank that will be permitted into your game. "bot listens to host only" makes it so that only the actual host can use [Macro Commands](#macro-commands).

### Other

This tab gives you a number of other miscellaneous information and options. The players in game list provides you with a list of the players currently in-game in an active game, which is possibly handy for a dedicated host. "Relay Chat" relays any chat from the Battle window into the in-game chat, but is currently broken.

## Map Picker

A much better map selection interface than the default one. This provides you with more information about your maps at a glance, including:

- A properly-proportioned minimap.
- The map's name, description, size, and number of starting positions.
- The map's gameplay parameters: gravity, tidal/wind power level, and metal level/extractor radius.

Note that you need to make the cache (using the "Make Cache" button) before you can use the map picker, and have to manually update the cache (using the "Update Cache" button) when you add or delete maps. When you first open the picker, you need to use the "Load Cache" button to load the map data.

The Map Cache is also used for the main battle screen. If the cache is valid, the lobby client will load the minimap from there instead of decompressing the map every time. This is significantly faster than the old way of doing things.

"Make Cache" completely erases and rebuilds the cache folder. This is necessary if you delete a map.

## / Commands

These commands can be used in any chat window, though you won't always be allowed to execute them. Many are the same as those used by the official client. These are mostly documented in the "Page 3" tab under the Help Button.

### /me

Performs an "action" instead of sending a chat message. Also found in the official client.

Example Usage: /me does a dance of shame.

### /join

Joins a chat channel. Also found in the official client.

Example Usage: /join \#noob - Join the channel designated for newbie questions.

### /part

Closes the current channel or private chat window. Also found in the official client.

### /channels

Displays a list of open channels. Also found in the official client.

### /rename

Changes the username of an account. Also found in the official client.

Example Usage: /rename Batman - Changes to my secret identity for crime-fighting purposes.

### /ring

This can only be used by the host of a battle. It's used to "ring" players to let them know, for example, that the battle's full and they should ready up so it can start. Also found in the official client.

Example Usage: /ring altaric - Play a sound on Altaric's computer so he knows to come back and join in the fun.

### /ping

Tells you the lag between you and the *lobby server*. This will *not* tell you the lag between you and the host of a game! Also found in the official client.

### /msg

Send a private message to a user. You can also double-click on their name in a user list to do this. Also found in the official client.

Example Usage: /msg Altaric Nice client, man! - Send Altaric a message of congratulation for all his hard work.

### /ignore

Stop receiving messages from a player. Prevents them from PMing you, and prevents you from seeing their text in chat channels. I believe these only last for one session, so they'll go away once you log out.

Example Usage: /ignore SomeLamer - Stop hearing anything SomeLamer says.

### /befriend

Adds someone to your [Friends](#friends-and-foes) list.

Example Usage: /befriend Altaric - Add Altaric to your friends list.

## Macro Commands

These commands can be used in the Battle Chat to control the 'bot' that AltaClient runs.

### !help

PMs you the contents of help.txt. This file must be located in the same directory as the Lobby Client program.

### !helpall

Prints the contents of help.txt to the Battle Chat. Like !help, this needs the file to be in the same directory as the Lobby Client program.

### !metal

Sets the starting metal level for the game. Takes one parameter, the level of metal.

Example Usage: !metal 1000 - Sets the starting metal level to 1000, a reasonable default for most mods.

### !energy

Sets the starting energy level for the game. Takes one parameter, the level of energy.

Example Usage: !energy 1000 - Sets the starting energy level to 1000, a reasonable default for most mods.

### !units

Sets the maximum number of units per player. Takes one parameter, the maximum number of units.

Example Usage: !units 500 - Sets the maximum number of units per player to 500, a reasonable default for most mods.

### !limit

Can be used to limit D-Gun or Metal Maker usage.

!limit dgun - Toggles "Limit D-Gun" on or off.

!limit mm - Toggles "Diminishing Metal Maker Returns" on or off.

### !gameend

Toggles whether or not a player is eliminated when their Commander dies. Takes one parameter - 0 for "Commander Dies, Game Continues" or 1 for "Commander Dies, Game Ends".

### !map

Sets the map for the game. Takes one parameter, the map name. This should be as the map's displayed in !listmaps.

Example Usage: !map Green Comet Basic - Sets the server to use the map Green Comet Basic.

### !rect

Draw start boxes on the map. There are two ways to use this command:

!rect reset - Erase all start boxes from the map.

!rect x1 y1 x2 y2 - Draw a start box from (x1, y1) to (x2, y2)

Most of the time, it's better to use [!corner](#21corner) or [!split](#21split).

### !position

Sets whether players are assigned to fixed starting locations, random starting locations, or can choose their starting location within a start box.

!position 0 or !position fixed - Fixed starting locations.

!position 1 or !position random - Random starting locations.

!position 2 or !position choose - Choose starting location.

Using [!split](#21split), [!corner](#21corner), or [!rect](#21rect) automatically sets the game to "Choose starting location". "[!rect](#21rect) reset" automatically sets the game to "Fixed starting locations".

### !split

Splits the map into three segments: a start box for team 1, an unoccupied middle area, and a start box for team 2. This is the most useful start option for most maps and player arrangements, as you'll generally want to start with a team of players on one side of the map facing off against a team of players on the other side of the map.

!split v p - Creates vertical (up-and-down) start boxes that extend p% of the way across the map. So !split v 10 would create two start boxes, at the east and west ends of the map, each stretching 10% of the way across the map. This is for East VS West maps.

!split h p - Exactly the same as above, but splits horizontally rather than vertically. This is for North VS South maps.

### !corner

Creates four square start boxes, one in each corner. Their width and height are specified as a single argument.

Example Usage: !corner 15 - Each of the four start boxes will be 15% of the map wide and 15% of the map tall.

### !start

Starts the game. All players must have readied up before this can be used!

### !force

Forces the game to start. This is exactly the same as the host hitting ctrl-enter in-game. Note that you'll need to alt-tab to use this, and Spring currently has a bad habit of crashing when you alt-tab, so it's not very useful right now.

### !kick

Kick a player from the game. Takes one argument, the name of the player to kick. Note that kicking the host of the game is impossible.

Example Usage: !kick egarwaen - Kicks me from a game.

### !ban

Kick a player from a game and ban them, adding them to the server's ban list. Note that banning the host of the game is impossible.

Example Usage: !ban egarwaen - Bans me from a game. Not sure why you'd want to.

### !closebattle

Closes the battle. Note that if this is used on a dedicated server, the owner of the server will need to manually re-open the battle.

### !exit

Ends the game. This makes the host exit the game.

### !changeright

Changes the rights needed to use a given command. Takes the command name and the new rights level. This effectively modifies the contents of the [Rights](#rights) tab. Be careful when using changeright on changeright, as you can render yourself unable to make further changes without the intervention of the host.

Example Usage: !changeright map 17 - You now require a rights level of 17 to use the map command.

### !welcome

Sets the message displayed to players when they join the battle. This is the same thing that you can set in the [MOTD](#motd) tab.

Example Usage: !welcome - Clears the welcome message. Example Usage: !welcome Hi, %n - Prints "Hi, egarwaen" when I join the game, or "Hi, Altaric" when Altaric joins.

### !welcometype

Sets the type of the welcome message to PM or chat. Using this command will toggle the welcome type. So if it's set to Chat, !welcometype will set it to PM, and if it's set to PM, !welcometype will set it to Chat.

### !mincpu

Sets the minimum CPU speed, in MHz, to allow in the game. Note that this is 1000 times the speed shown in the player list.

Example Usage: !mincpu 2210 - Don't allow anyone with a CPU less than 2.21 GHz into the game.

### !minrank

Sets the minimum rank of player to allow in the game.

Example Usage: !minrank 2 - Don't allow anyone below rank 2 into the game.

### !listmaps

Prints a list of maps available on the server. To avoid spamming everyone in a battle, this list gets PMed to you, so check your main window after typing this command.

### !lockspeed

Sets the locked game speed. Can be used in one of several ways:

!lockspeed n - locks the game at speed n.

!lockspeed min max - locks the game between the given minimum and maximum speeds.

Using lockspeed will toggle whether or not the game speed is locked.

### !rights

PMs you the contents of the [Admin](#admin) Tab.

### !cmdrights

PMs you the contents of the [Rights](#rights) Tab.

### !ghosted

Toggles the "Ghosted Buildings" setting. If this is on, once one of your units has seen an enemy structure, that structure will be permanently marked on your map.

### !ring

Lets you ring a player. This works the same way as the [/ring](#2fring) command, but it can be used by people other than the host if they have sufficient rights.

### !ally

Forcibly changes the alliance of a player. Use is !ally name ally. Note that the name is case-sensitive!

Example Usage: !ally egarwaen 3 - Force me on to team 3.

### !gameinfo

Displays the amount of time since the game began. May eventually display more information. Only usable in the lobby of an active game.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Altaric's Lobby Client](https://springrts.com/wiki/Altaric's_Lobby_Client).*
