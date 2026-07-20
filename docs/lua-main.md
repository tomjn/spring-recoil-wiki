---
title: "Lua:Main"
source_url: "https://springrts.com/wiki/Lua:Main"
categories:
  - "Lua"
---
# Lua:Main

> **Recoil:** Spring's maintained fork documents this at [recoilengine.org](https://recoilengine.org/). Where this page and the Recoil docs disagree, prefer Recoil for current engine behaviour.

<div class="mw-parser-output">

[Development](/development-main) \< Lua:Main

## Lua FAQ

Lua scripting is the primary way for developers to customize their games and add new features. Most aspects of the Spring engine can be controlled and extensively modified through the Lua API.

[Introduction to Lua in Spring](/lua-beginners-faq)\
[Easy widget examples](/lua-tutorial-gettingstarted)

## Interfaces (last update: 104)

[Lua:Environments](/lua-environments) (Details the available environments and shows which interfaces are loaded by each)

[Lua:Callins](/lua-callins) (Entry points to lua addons)

<div style="margin-left:12px">

System\
[Lua_System](/lua-system)\

Const\
[Lua_ConstGame](/lua-constgame) (holds game relevant constants)\
[Lua_ConstEngine](/lua-constengine) (version & buildflags)\
[Lua_ConstPlatform](/lua-constplatform) (Current OS, video driver etc)\
[Lua_ConstCOB](/lua-constcob) (COB, Explode, EmitSfx)\
[Lua_CMDs](/lua-cmds) (documents all CMDs and CMDTYPEs)\

Defs\
[Lua_UnitDefs](/lua-unitdefs)\
[Lua_WeaponDefs](/lua-weapondefs)\
[Lua_FeatureDefs](/lua-featuredefs)\

GameState\
[Lua_SyncedCtrl](/lua-syncedctrl)\
[Lua_SyncedRead](/lua-syncedread)\
[Lua_SaveLoad](/lua-saveload) (engine-assisted Lua save/load)\

Client\
[Lua_UnsyncedCtrl](/lua-unsyncedctrl)\
[Lua_UnsyncedRead](/lua-unsyncedread)\
[Lua_Lobby](/lua-lobby)\

OpenGL\
[Lua_OpenGL_Api](/lua-opengl-api)\
[Lua_GLSL_Api](/lua-glsl-api) (OpenGL Shading Language)\
[Lua_FBO_and_RBO](/lua-fbo-and-rbo) (Framebuffer and Renderbuffer Objects)\
[Lua_UnitRendering](/lua-unitrendering) (manage unit LODs and materials)\
[Lua_ConstGL](/lua-constgl) (some OpenGL constants)\
[Lua_Fonts](/lua-fonts)\

Unit Physics\
[Lua_MoveCtrl](/lua-movectrl) (changes the physics of single units)\
[Lua_PathFinder](/lua-pathfinder)\

Engine\
[Lua_VFS](/lua-vfs) (used to access files in the virtual filesystem, e.g. modfiles)\
[Lua_Scream](/lua-scream)\
[Lua_BitOps](/lua-bitops)\
[Lua_MathExtra](/lua-mathextra)\
[Lua_Socket](/lua-socket)\

</div>

## Tutorials

- [Easy example widgets](/lua-tutorial-gettingstarted)
- [LuaTutorials::InterCommunications](/luatutorials-intercommunications) (i.e. synced \<-\> unsynced communications)
- [Lua animation UnitScript examples](/animation-luaexamples)

## Other useful information

- [Lua libraries](/lua-libraries)
- [Lua performance tips](/lua-performance)
- [UI_commands](/ui-commands)
- [Unit animation scripting with Lua](/animation-luascripting)
- <a href="https://github.com/spring/spring/tree/develop/rts/Lua#Source_Code" class="external text" rel="nofollow">Source code for Lua API</a>

## Official Lua documentation

<a href="http://www.lua.org/pil/" class="external text" rel="nofollow">'Programming in Lua' book online</a>\
<a href="http://www.lua.org/manual/5.1/" class="external text" rel="nofollow">Lua 5.1 Reference manual</a>\
<a href="http://lua-users.org/wiki/TutorialDirectory" class="external text" rel="nofollow">Lua tutorials</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua:Main](https://springrts.com/wiki/Lua:Main).*
