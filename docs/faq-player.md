---
title: "FAQ:player"
source_url: "https://springrts.com/wiki/FAQ:player"
categories:
  - "FAQ"
---
# FAQ:player

<div class="mw-parser-output">

This FAQ includes answers on questions every newbie is facing during gameplay. Feel free to update it by yourself if you solved the problem not mentioned below. Help new players!

## General

### After I'm finished driving a unit, where what used to be my mouse pointer is now a crosshair. Why?

This is a special 'view mode' that allows you to move around the screen much faster. It's good for viewing the battle or getting screenshots. Simply press on your third mouse button (usually the wheel) or 'backspace' to revert back to your mouse pointer.

### People are cheating! How do I stop it?!

Well currently, you can't. Only the host can "activate" the cheat codes. After that, any player can do almost all cheats. The best thing to do is just not play with the cheaters anymore.

### Well how do you cheat?

|  |  |
|----|----|
| Cheat Command | Effect |
| /cheat | Enable cheats (note: cheats don't work in multiplayer until the host types this) |
| /nocost | Instabuild (doesn't work on things already under construction, only on new ones) |
| /globallos | Allows you to see the entire map. |
| /team 0, /team 1, etc. | Change player |
| /give ARMCOM, /give 10 CORKROG, etc. | Place 1 or specified number of specified unit. Valid units are the internal names of units as specified in the unit definition. |

You can use auto-completion in the spring console if you don't remember the internal unit name. To do that type:

    "/give arm" and then press your TAB key 

A list of all matching units will be shown.

### This game is different than TA, the units HP and damage are not the same

First off, Spring is not TA. Spring is an engine, on which various games can be run, some of which are modifications of TA content. The games most closet to TA are:

- [XTA](/xta)
- [Balanced_Annihilation](/balanced-annihilation)

Some other games tried to reproduce TA gameplay more closely but are abandoned and no longer playable:

- [Basically OTA](/bota)
- <a href="http://spring.clan-sy.com/phpbb/viewtopic.php?f=14&amp;t=14613" class="external text" rel="nofollow">Hardcore Annihilation</a>

Other [Games](/games) have no connection to TA content or the TA universe.

### XTA? OTA? AA? OMFGLAMO? WTF do those abbreviations mean?

<a href="http://spring.clan-sy.com/phpbb/memberlist.php?mode=viewprofile&amp;u=145" class="external text" rel="nofollow">zwzsg</a> maintains a handy dandy FAQ about TA, and the abbreviations that relate to Spring too, of course. <a href="http://www.tauniverse.com/forum/showthread.php?t=27309" class="external text" rel="nofollow">Click here</a>.

### How do I ally or unally in game?

Type /ally \<teamID\> \[0\|1\] (this only works if the host allows changing allies midgame).

### Is there a way that I can play music directly through Spring, with alternating tracks for building/attacking like in the original Total Annihilation?

Some games have music. I do not know if it is the music from TA. This is a stupid question.

### How can I record and watch demos/replays?

See [replays](/spring-replays).

### How can I run Spring in windowed mode?

Open [SpringSettings](/springsettings) application, turn on Expert mode, select "Render quality / Video mode" page, uncheck "Run full-screen" checkbox and finally save your settings.

### Where can I see the time I played online?

Open any lobby client, connect to the TAServer, switch to chat, select appropriate channel (for TASClient it is \#local, for SpringLobby it is "Official Server") and type **/ingame** into the chat. The result will be in minutes. <a href="http://spring.clan-sy.com/phpbb/viewtopic.php?f=11&amp;t=17732" class="external text" rel="nofollow">Discuss this issue</a>.

### Can I run unpacked mod?

Yes, you can. Make sure your unpacked folder name ends with **.sdd**.

## Control

### What is with this weird right-click mode? I'm 'bout to break my keyboard.

Sorry, you'll just have to get used to it. As of now it can't be changed.

### Why is somebody else also controlling my units?

In the 'game lobby' there are two sets of teams. There are the 'Ids' and the 'teams'. If you are on the same 'Id', then you both get the same commander, and can control the same units (commonly referred to as comsharing). If you are on the same 'Team', then you both get different commanders and can't control each others units.

### Then why would I want to be on the same 'Id' as somebody?

Because it's fun to just drive around units and not have to worry about commanding (assuming that one of the people on the team is commanding). Most importantly, however, you can split tasks, such as base building, and troops management.

### But I don't have a third mouse button!

The key 'J' works in the same way as the 'middle mouse button' does. So where you would use ctrl + middle mouse button to change camera modes, ctrl + j does the same thing. Pressing J once will also switch you from 'crosshair mode' to 'pointer mode' and vice versa. Just use ctrl+F1/F2/F3/F4 to change camera mode.

### In-game Commands

See [UI_commands](/ui-commands)

### Can I kick people from my 'game lobby' or my game?

First of all, you have to be the host to kick. Use the good old "/kick playernamehere" command. Works in-game too, use it wisely.

### I hate driving around with the 'arrow keys'. Is there any way I can use the 'W-A-S-D' controls (the controls most First Person Shooters use) anymore?

Go into your Spring directory and edit the uikeys file. Keep in mind that 'S' is originally a 'hot-key' that will stop your units and that 'D' is a 'hot-key' for your commander's D-Gun. You might want to change those too.

### I can't go backwards when I am 'driving' a unit. Why not?

Only works with some units in some games.

### I'm in an Unreal Tournament kind of mood. How do I strafe?

You can only strafe in 'brawler type' aircraft, such as the brawler, rapier, and light gunships.

### Can I invert the mousewheel behaviour to make normal zoom control?

You have to set a negative zoom value. There are 2 choices for you:

1.  Set the value by using [SpringSettings](/springsettings) tool (UI Options tab \> Zoom).
2.  Directly edit [springrc](/springsettings.cfg) & adjust **ScrollWheelSpeed** value.

<a href="http://spring.clan-sy.com/phpbb/viewtopic.php?f=11&amp;t=8030" class="external text" rel="nofollow">Discuss this issue</a>.

### Can i change Ctrl+Z behaviour to select visible units on the screen only, not of the hole map?

Double click on a unit or adjust the desired behaviour by using SelectionEditor.exe tool at Spring root folder. <a href="http://springrts.com/phpbb/viewtopic.php?f=11&amp;t=17646" class="external text" rel="nofollow">Discuss this issue</a>.

### How can I add map markers and lines during a game?

On US keyboards, its the key to the left of the "1" key on your keyboard (known as *tilde*). Hold it down and draw with you left mouse button, or double click to add a marker with text. On other keyboards this may vary, on Swiss one it's the key to the left of backspace for example.

### How can I rotate buildings?

Use the \[ and \] keys.

### How can I customize mouse button click behaviour managing the minimap?

You have rather limited possibilities by now. Please, visit <a href="http://springrts.com/phpbb/viewtopic.php?f=1&amp;t=8096" class="external text" rel="nofollow">this thread</a> for info.

## Communication & Interchange

### How do I talk to my allies only?

You must type 'a:' before you speak, or press "Alt Enter" at the same time. Here's an example: a: Now I am talking to my allies only.

### How do I give somebody units or metal or energy?

Press the 'H' key. Then select the amount of metal and/or energy to share. Then select the receiving player and press OK. When sharing units, you must first select the units to share, then press 'H' key. Tick share units checkbox and choose a receiving player.

### How do I continually give somebody metal and/or energy after a certain point (i.e. Original TA commands +setshare..., +shareall)?

You'll notice that on your metal and energy bars (top of screen), there are two red bars. You have to put them wherever you want your metal and energy to be shared after.

## Troubleshooting

### Sometimes I can't write anything but numbers and some other symbols. Why is that?

This is most likely because of the Windows language bar change from which\
Spring doesn't recognize the characters written. Note that Default hotkeys in Windows XP for changing the language is Shift+Alt, which is similar to square build hotkeys in Spring!

### Help! After I'm finished driving a unit, the camera is all insane! This is nuts! How do I fix it?

Whoa now. Calm down. Just press ctrl + mouse button 3 to change camera modes. If your unit is destroyed in FPS mode, you will stay in FPS mode until you change camera modes. Also, the camera will stay in "free look" when FPS mode is disengaged, press middle-mouse or J to switch to normal scrolling.

### I've managed to get stuck in this weird camera mode and my perspective is all messed up. How do I switch to the overhead (OTA style) camera?

Shift+Backspace (or Shift+J or Shift+MiddleMouseClick) switches between the fps style, total war style and OTA style cameras. Use it to get your camera back to normal in this situation.

### I turned the shadows feature on; I still don't see shadows. What gives?

Try to enable *Reflective units* option in [SpringSettings](/springsettings). If it does not work for you, then, probably, your graphics card can't handle shadows, so Spring automatically turns them off.

### Sometimes when I play get "not sync" "delayed sync" errors

That's caused because of lag. One of the players in the game is having some lag issues. Ask him/her to free up its bandwidth for the game to use. Alternatively, you can use the pause key and wait till the connection gets more stable. Ping is the second number showed when you use the /info command ingame, values larger than ~1000ms are not usual in a normal game and are a signal of lag.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [FAQ:player](https://springrts.com/wiki/FAQ:player).*
