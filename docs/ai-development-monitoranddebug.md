---
title: "AI:Development:MonitorAndDebug"
source_url: "https://springrts.com/wiki/AI:Development:MonitorAndDebug"
categories:
  - "AI_Dev"
---
# AI:Development:MonitorAndDebug

<div class="mw-parser-output">

[AI Development](/ai-development) \< AI Development - Monitor and Debug

## How to monitor and debug your Skirmish AI

You will probably want to monitor what's is happening in the execution and need some form of debugging. This page describes a few options that can be implemented to monitor an AI.

All code examples are using the Java interface.

### Print a text message ingame

From the interface, you can request the "Game" object to "sendTextMessage".

    _Callback.getGame().sendTextMessage (...);

This will display a text message to all players just like when a player hits "enter", types something, then hits "enter" again.

Whatever is sent to that method will show up in the game's GUI but it will also end up logged in the engine's log file. In Linux, it will be: `~/.config/spring/infolog.txt`

### Write to the engine's log

You can access a "log" from the Interface and send messages to it.

    _Callback.getLog ().log (msg);

Doing this .. appears to have the exact same effect as the previous option...

### Write to a custom log

SpringRTS is built to run on a variety of different system (Linux, Windows and Mac), each with its own filesystems. Using the Interface you can obtain an appropriate path for the AI to create a log file:

    String logFilePath = _Callback.getDataDirs ().allocatePath ("PI_P" + _TeamID + ".txt", 
                                    true, true, false, false);

This would return a path like like: `/home/paulo/.config/spring/AI/Skirmish/PoucoInteligente/1/PI_P0.txt` which you can use to create a log file.

### Draw a window

An extremely powerfull option to have visibility over what's happening in the game in realtime is to draw whatever you want into another window. For example, create a JFrame window (Java) and draw into it a minimap of LineOfSight.

The existing AI zkgbai has code which can be learnt from (or reused) to create a new separate window and to draw a minimap into it.

The AI's class "LosManager" draws a minimap of the LineOfSight, creating an "Image" object:\
<a href="https://github.com/Anarchid/zkgbai/blob/master/src/zkgbai/los/LosManager.java" class="external free" rel="nofollow">https://github.com/Anarchid/zkgbai/blob/master/src/zkgbai/los/LosManager.java</a>\
The AI's class "DebugView" is the separate window itself and paints "Image" objects - the AI then creates a `new DebugView (...)` and hands it over the desired images (like a LOS minimap).\
<a href="https://github.com/Anarchid/zkgbai/blob/master/src/zkgbai/gui/DebugView.java" class="external free" rel="nofollow">https://github.com/Anarchid/zkgbai/blob/master/src/zkgbai/gui/DebugView.java</a>

### Runtime debugging with the JDK/IDE

TODO: Don't even know yet if this is possible or even how it interacts with the engine (will Spring crash or timeout waiting for a response from the Interface???).

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:Development:MonitorAndDebug](https://springrts.com/wiki/AI:Development:MonitorAndDebug).*
