---
title: "Ren'Py"
source_url: "https://springrts.com/wiki/Ren'Py"
categories:
  - "Game_Dev"
---
# Ren'Py

<div class="mw-parser-output">

**Ren'Py** is an open source visual novel engine, available <a href="http://www.renpy.org/" class="external text" rel="nofollow">here</a>. It can be used in conjunction with Spring to provide a singleplayer experience with narrative, dialogue, images and videos.

## Using Ren'Py with Spring

Without the use of sockets, Ren'Py and Spring can best communicate in the following way:

### Ren'Py to Spring

Python can read a Spring startscript and modify it, say using <a href="http://docs.python.org/2/library/string.html#formatstrings" class="external text" rel="nofollow">str.format</a> or the older <a href="http://docs.python.org/2/library/stdtypes.html#string-formatting" class="external text" rel="nofollow">% (modulo) operator</a>. In this way, any arbitrary game, per-player or per-team information can be made available to Spring at runtime. It is also theoretically possible for Python to modify the contents of an .sdz or .sdd archive directly, but this is not recommended.

### Spring to Ren'Py

A widget or gadget can write a Python file with any information to be communicated to Ren'Py, which it can then import using the <a href="http://docs.python.org/2/library/functions.html#execfile" class="external text" rel="nofollow">execfile</a> function. Bear in mind that because Spring is limited in which directories its Lua can write files to, Ren'Py will need to know where the Spring datadir is.

### Examples

<a href="https://github.com/KingRaptor/springpy" class="external text" rel="nofollow">SpringPy</a> is a code example for Spring-Ren'Py communication. You can check out the whole repo and open/run the Ren'Py project with the Ren'Py SDK.

- <a href="https://github.com/KingRaptor/springpy/blob/master/game/script.rpy" class="external text" rel="nofollow">Example script.rpy</a>
- <a href="https://github.com/KingRaptor/springpy/blob/master/spring/script_pytest.txt" class="external text" rel="nofollow">Example startscript</a>
- <a href="https://github.com/KingRaptor/springpy/blob/master/spring/LuaUI/Widgets/api_shared_functions.lua" class="external text" rel="nofollow">Widget to write Python dictionaries and module files</a>
- <a href="https://github.com/KingRaptor/springpy/blob/master/spring/LuaUI/Widgets/dbg_test.lua" class="external text" rel="nofollow">Test widget</a>: writes data required by sample code on widget:Initialize()

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Ren'Py](https://springrts.com/wiki/Ren'Py).*
