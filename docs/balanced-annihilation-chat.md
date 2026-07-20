---
title: "Balanced Annihilation:Chat"
source_url: "https://springrts.com/wiki/Balanced_Annihilation:Chat"
categories:
  - "Deprecated"
  - "Balanced_Annihilation"
---
# Balanced Annihilation:Chat

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

**[\<--Back to Balanced Annihilation](/balanced-annihilation)**

## Chat, Cheats, and Text Commands

Pressing ENTER will bring up a "say:" prompt which you can use to communicate with other players or issue "Text Commands".\
-To send a message to all who are connected, type your message and press ENTER.\
-To send a message only to your allies, preface your message with "a:".\
-To send a message to any spectators, type "s:"\
-To send a message to a certain player, type "/w \<playername\>"\
Press ENTER to send it. There are also keybindings for all/ally/spec chat messaging:

    Enter -> send to <send type>

    Ctrl+Enter -> send to All (and sets <send type> to all)

    Alt+Enter -> send to Allies (and sets <send type> to allies)

    Shift+Enter -> send to Spectators (and sets <send type> to spectators)

To enter a Text Command, simply type the command and press ENTER.

### Basic Text Commands

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>Command</th>
<th>Effect</th>
</tr>
&#10;<tr>
<td>/info #</td>
<td>Shows you what colour each player is, its CPU usage percentage and their ping delay in the bottom right corner of the screen. This is on by default. Arguments:
<ol>
<li>Sorts by allies</li>
<li>Sorts by TeamID</li>
<li>Sorts by name</li>
<li>Sorts by CPU Usage</li>
<li>Sorts by Ping</li>
</ol></td>
</tr>
<tr>
<td>/clock</td>
<td>Shows you the elapsed game time in minutes and seconds in the upper right corner of the screen. This is on by default.</td>
</tr>
<tr>
<td>/fps</td>
<td>Shows FPS counter in the upper right corner of the screen.</td>
</tr>
<tr>
<td>/gameinfo</td>
<td>Shows game information. Game version, actual game speed, commander ends, gravity, tidal, min wind, max wind, map size, map name and mod name.</td>
</tr>
<tr>
<td>/kick &lt;name&gt;</td>
<td>Kicks a player, only works for hosts.</td>
</tr>
<tr>
<td>/kickbynum #</td>
<td>Kicks a player, only works for hosts.</td>
</tr>
<tr>
<td>/take</td>
<td>Places all allied units that are owned by players who have lost connection to the server under your control. It is generally considered polite to consult with any still-connected allies before doing this. In a Commander Dies, Game Ends game, a player only loses once they have lost <em>all</em> their Commanders, and this mechanism will give them a second one.</td>
</tr>
<tr>
<td>/setmaxspeed #</td>
<td>Changes the maximum speed multiplier (default is 3.0)</td>
</tr>
<tr>
<td>/setminspeed #</td>
<td>Changes the minimum speed multiplier (default is 0.3)</td>
</tr>
<tr>
<td>/spectator</td>
<td>Resigns from the game and goes to spectator mode.</td>
</tr>
<tr>
<td>/nospectatorchat [0|1]</td>
<td>Toggles spectator chat on/off, optional true/false parameters can be put in the end, for example: ".nospectatorchat 1", otherwise it will toggle it on/off. Only works for hosts.</td>
</tr>
</tbody>
</table>

### Cheat Codes

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>Cheat Command</th>
<th>Effect</th>
</tr>
&#10;<tr>
<td><strong>/cheat</strong></td>
<td><strong>enable cheats - Cheats don't work in multiplayer until the host types this</strong></td>
</tr>
<tr>
<td>/nocost</td>
<td>Insta-build; everything is built immediatly. (doesn't work on things already under construction, only on new ones)</td>
</tr>
<tr>
<td>/team #</td>
<td>Change player</td>
</tr>
<tr>
<td>/give [amount] &lt;unitName&gt; [team] @x,y,z</td>
<td>Place 1 or specified number of specified unit. Valid units are the internal names of units as specified in the unit definition. Use the "all" switch to get ALL the units in the current mod. Putting a number after the unit name will give those units to the specified team. some examples:
<ul>
<li>/give ARMCOM - gives you one ARMCOM</li>
<li>/give 10 CORKROG 3 - gives team 3 10 CORKROGs</li>
<li>/give all - gives one of every unit available</li>
</ul></td>
</tr>
<tr>
<td>/atm</td>
<td>gain 1000 extra energy and metal.</td>
</tr>
<tr>
<td>/godmode [0|1]</td>
<td>If set to 1, everybody (including specs) can control and view all units.</td>
</tr>
</tbody>
</table>

### Graphic Settings

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>Command</th>
<th>Effect</th>
</tr>
&#10;<tr>
<td>/advshading [0|1]</td>
<td>Disables/enables advanced shading (reflective units, more?).</td>
</tr>
<tr>
<td>/grounddecals [0|1]</td>
<td>Disables/enables ground decals (immune to tab complete?).</td>
</tr>
<tr>
<td>/maxparticles #</td>
<td>Sets maximum amount of particles. Accepted values are between 1000 and 20000.</td>
</tr>
<tr>
<td>/shadows [0|1] #</td>
<td>Sets shadows to on or off, supports a second argument for shadow quality (1024, 2048, 4096 or 8192). Note that shadows are a massive performance hit</td>
</tr>
<tr>
<td>/vsync [0|1]</td>
<td>Disables/enables vsync.</td>
</tr>
<tr>
<td>/water #</td>
<td>Sets water quality:
<ol start="0">
<li>Basic water, no performance hit.</li>
<li>Reflective, Pretty, not a too large performance hit.</li>
<li>Dynamic, Very pretty, MASSIVE performance hit and buggy on some hardware.</li>
<li>Reflective + Refractive, Prettier than reflective and pretty much the same performance hit, slightly buggy on some hardware.</li>
<li>Bump-mapped water, very low impact like basic water, very pretty and realistic at average ranges. Has shore waves and some basic effects for impacts/movement through the water.</li>
</ol></td>
</tr>
</tbody>
</table>

### Misc

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<th>Command</th>
<th>Effect</th>
</tr>
&#10;<tr>
<td>/cmdcolors &lt;filename&gt;</td>
<td>Loads specified cmdcolors.txt.</td>
</tr>
<tr>
<td>/ctrlpanel &lt;filename&gt;</td>
<td>Loads specified ctrlpanel.txt</td>
</tr>
<tr>
<td>/luaui</td>
<td>Access LuaUI commands provided by widgets. Use /luaui reload if LuaUI crashes. You can also use disable/enable arguments.</td>
</tr>
<tr>
<td>/echo &lt;text&gt;</td>
<td>Prints a message to the console.</td>
</tr>
<tr>
<td>/say &lt;text&gt;</td>
<td>Specifies that you want to say something to the other players, useful for telling them how to do something with a / command without running it yourself. For example /say /luaui reload.</td>
</tr>
<tr>
<td>/specfullview #</td>
<td>Sets spectator viewing and selection options:
<ol start="0">
<li>No special abilities.</li>
<li>view-all.</li>
<li>select-all.</li>
<li>view-all and select-all.</li>
</ol></td>
</tr>
<tr>
<td>/volume #</td>
<td>Sets volume, accepted values are between 0 and 1.</td>
</tr>
</tbody>
</table>

### Keybindings

|  |  |
|----|----|
| Command | Effect |
| /bind \<keyset\> \<action\> | Binds a key or key combination. |
| /unbind \<keyset\> \<action\> | Unbinds a key or key combination. |
| /unbindaction \<action\> | Unbinds all keybinds that uses \<action\>. |
| /unbindkeyset \<keyset\> | Unbinds all bindings that uses \<keyset\>. |
| /unbindall | Unbinds all keys except the chat keybinding. |
| /keysym \<name\> \<keycode\> | Adds a custom key symbol, The defaults can not be overridden. Name must start with a letter, and only contain letters, numbers, and '\_' |
| /keyset \<name\> \<keyset\> | Specifies a named keyset. Name must start with a letter, and only contain letters, numbers, and '\_'. Named keysets may be accessed by prepending the '&' character to the name. |
| /fakemeta \<keysym\> | Assigns an auxiliary key for the meta modifier ("space" is a good choice. Use fakemeta none to disable this feature |

**[\<--Back to Balanced Annihilation](/balanced-annihilation)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Balanced Annihilation:Chat](https://springrts.com/wiki/Balanced_Annihilation:Chat).*
