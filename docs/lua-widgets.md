---
title: "Lua Widgets"
source_url: "https://springrts.com/wiki/Lua_Widgets"
categories:
  - "Lua"
---
# Lua Widgets

<div class="mw-parser-output">

### General

**[LuaUI Widget Directory](/lua-widgetdirectory)** - A list of LuaUI widgets\

**[Lua Scripting and Development](/lua-main)** - Look here to get started with making your own Lua widgets and gadgets\

**<a href="http://springrts.com/phpbb/viewforum.php?f=23" class="external text" rel="nofollow">Spring Lua Forum</a>** - Browse and discuss published widgets, or publish your own\

### Introduction: What's a "Widget"?

LuaUI widgets are files containing Lua code that you can run while playing a Spring game in order to assist you with unit management, provide you with valuable information, or otherwise supplement the basic Spring user interface. They are easy to install, easy to run and manage ingame, and relatively easy to write should you choose to learn how to do so. \|}

### Getting Widgets

Widget code and files are quite often released as posts in the **<a href="http://springrts.com/phpbb/viewforum.php?f=23&amp;sid=83343bd3a47bc826fc973e4bd6a15f04" class="external text" rel="nofollow">Spring Lua Forum</a>**.

It is also highly recommended that you visit the wiki's **[LuaUI Widget Directory](/lua-widgetdirectory)**, which contains a list of many widgets, along with mod compatibility information and possible additional installation instructions.

### Installing Widgets

Widget files have the extension .lua, but only contain plain text. To install widgets you've downloaded, just move the .lua file to the LuaUI\Widgets folder in your Spring installation directory. **Mods like BA ver\>9.47 or Evolution RTS explicitly disable widgets from this path.** Please refer to the mod's manual for details. Sometimes, a widget file may come in a zip archive, or be bundled with other dependent files. These files will need to be unarchived, then moved to their proper respective folders in the LuaUI folder. Look for a help or readme file included in the package, or read any installation instructions listed with the widget at the **[LuaUI Widget Directory](/lua-widgetdirectory)**.

### Using Widgets

**NOTE:** Before you can use widgets, you MUST make sure that you have checked the "Enable LuaUI widgets" box in [SpringSettings](/springsettings).

To list/manage all available widgets, press F11 while ingame. Each widget is listed by name and sorted alphabetically, and mod included widgets appear first on the list with their names surrounded by asterisks. You may click on each widget name to enable/disable that widget. **Green** widgets are currently running, **red** widgets are currently disabled and **orange** widgets have malfunctioned or turned themselves off.

To rearrange the Lua widgets, press Ctrl-F11 while ingame. To escape Lua tweaking mode, just hit Esc.

In the case that you begin to see Lua errors and/or your user interface inexplicably crashes or becomes "messed up", you can use the command **/luaui reload** in order to restart the Lua user interface. If for any reason you wish to shutdown the Lua user interface while ingame, you may issue the command **/luaui disable**.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua Widgets](https://springrts.com/wiki/Lua_Widgets).*
