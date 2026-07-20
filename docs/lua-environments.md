---
title: "Lua:Environments"
source_url: "https://springrts.com/wiki/Lua:Environments"
categories:
  - "Lua"
---
# Lua:Environments

<div class="mw-parser-output">

## Environments

Here is an exhaustive list of the different lua environments within Spring, roughly in execution order as a game is loaded.

### LuaMenu

Source: <a href="https://github.com/spring/spring/blob/106.0/rts/Lua/LuaMenu.cpp" class="external text" rel="nofollow">rts/Lua/LuaMenu.cpp</a>

Introduced in 104.0, a stripped down environment that starts before the game is loaded and persists through reload.

### LuaParser

Source: <a href="https://github.com/spring/spring/blob/106.0/rts/Lua/LuaParser.cpp" class="external text" rel="nofollow">rts/Lua/LuaParser.cpp</a>

Minimal environment used to parse and load definition files.

### LuaIntro

Source: <a href="https://github.com/spring/spring/blob/106.0/rts/Lua/LuaIntro.cpp" class="external text" rel="nofollow">rts/Lua/LuaIntro.cpp</a>

Introduced in 95.0, to allow visual customisation of the loading process.

### LuaRules (synced)

Source: <a href="https://github.com/spring/spring/blob/106.0/rts/Lua/LuaHandle.cpp" class="external text" rel="nofollow">rts/Lua/LuaHandle.cpp</a>

Source: <a href="https://github.com/spring/spring/blob/106.0/rts/Lua/LuaHandleSynced.cpp#L305" class="external text" rel="nofollow">rts/Lua/LuaHandleSynced.cpp#L305</a>

The main environment for synced game-controlling mechanics ("gadgets").

### LuaRules (unsynced)

Source: <a href="https://github.com/spring/spring/blob/106.0/rts/Lua/LuaHandle.cpp" class="external text" rel="nofollow">rts/Lua/LuaHandle.cpp</a>

Source: <a href="https://github.com/spring/spring/blob/106.0/rts/Lua/LuaHandleSynced.cpp#L57" class="external text" rel="nofollow">rts/Lua/LuaHandleSynced.cpp#L57</a>

The main environment for unsynced game effects, rendering, UI etc. ("gadgets")

### LuaGaia (synced)

Source: <a href="https://github.com/spring/spring/blob/106.0/rts/Lua/LuaGaia.cpp" class="external text" rel="nofollow">rts/Lua/LuaGaia.cpp</a>

As LuaRules (synced) but for maps.

### LuaGaia (unsynced)

Source: <a href="https://github.com/spring/spring/blob/106.0/rts/Lua/LuaGaia.cpp" class="external text" rel="nofollow">rts/Lua/LuaGaia.cpp</a>

As LuaRules (unsynced) but for maps.

### LuaUI

The main environment for toggleable UI elements and controls ("widgets").

## Interfaces

The following table demonstrates which interfaces are available to each environment.

<table>
<colgroup>
<col>
<col>
<col>
<col>
<col>
<col>
<col>
</colgroup>
<tbody>
<tr>
<td></td>
<td>LuaMenu</td>
<td>LuaIntro</td>
<td>LuaParser</td>
<td>LuaRules/Gaia<br />
(synced)</td>
<td>LuaRules/Gaia<br />
(unsynced)</td>
<td>LuaUI</td>
</tr>
<tr>
<td><a href="/lua-constgame">Lua_ConstGame</a></td>
<td>-</td>
<td>+</td>
<td>-</td>
<td>+</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-constengine">Lua_ConstEngine</a></td>
<td>+</td>
<td>+</td>
<td>+</td>
<td>+</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-constplatform">Lua_ConstPlatform</a></td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-unitdefs">Lua_UnitDefs</a></td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-weapondefs">Lua_WeaponDefs</a></td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-featuredefs">Lua_FeatureDefs</a></td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-constcob">Lua_ConstCOB</a></td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><a href="/lua-cmds">Lua_CMDs</a></td>
<td>-</td>
<td>+</td>
<td>-</td>
<td>+</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-unsyncedread">Lua_UnsyncedRead</a></td>
<td>+***</td>
<td>+***</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-unsyncedctrl">Lua_UnsyncedCtrl</a></td>
<td>+***</td>
<td>+***</td>
<td>-</td>
<td>+</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-syncedread">Lua_SyncedRead</a></td>
<td>-</td>
<td>+***</td>
<td>-</td>
<td>+</td>
<td>+</td>
<td>+**</td>
</tr>
<tr>
<td><a href="/lua-syncedctrl">Lua_SyncedCtrl</a></td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><a href="/lua-movectrl">Lua_MoveCtrl</a></td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td><a href="/lua-pathfinder">Lua_PathFinder</a></td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-opengl-api">Lua_OpenGL_Api</a></td>
<td>+***</td>
<td>+***</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-glsl-api">Lua_GLSL_Api</a></td>
<td>+***</td>
<td>+***</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-fbo-and-rbo">Lua_FBO_and_RBO</a></td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-unitrendering">Lua_UnitRendering</a></td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>-</td>
</tr>
<tr>
<td><a href="/lua-fonts">Lua_Fonts</a></td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-constgl">Lua_ConstGL</a></td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-vfs">Lua_VFS</a></td>
<td>+</td>
<td>+</td>
<td>+</td>
<td>+*</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-scream">Lua_Scream</a></td>
<td>+</td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-bitops">Lua_BitOps</a></td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-mathextra">Lua_MathExtra</a></td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+</td>
<td>+</td>
<td>+</td>
</tr>
<tr>
<td><a href="/lua-socket">Lua_Socket</a></td>
<td>+</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>+</td>
</tr>
</tbody>
</table>

|        |                                                          |
|:------:|:---------------------------------------------------------|
|   \*   | only VFS.ZIP_ONLY                                        |
|  \*\*  | with special LOS handling and decoy unit handling        |
| \*\*\* | stripped down environment with certain functions removed |

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua:Environments](https://springrts.com/wiki/Lua:Environments).*
