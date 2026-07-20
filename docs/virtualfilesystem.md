---
title: "VirtualFileSystem"
source_url: "https://springrts.com/wiki/VirtualFileSystem"
categories:
  - "Game_Dev"
---
# VirtualFileSystem

<div class="mw-parser-output">

[Development](/development-main) \< VirtualFileSystem

## VFS

The Virtual File System is an unified layer to access (read-only) the different archives used at runtime. So you can access map, game & config files via the same interface.

### Archive Hierarchy

When loading a new archive (sdz, sd7, sdd) it overrides existing file references in the VFS, so the order archives are loaded is very important. So here it is (in reverse):

1.  raw file system (only for unsynced data)
2.  map
    1.  map archive itself
    2.  map dependencies
    3.  maphelper.sdz (engine supplied)
3.  game
    1.  game archive itself
    2.  game dependencies
    3.  springcontent.sdz (engine supplied)
        1.  bitmaps.sdz (engine supplied)

(top most are checked first when accessing a file -\> map overrides game files!)

### Extra Informations

Spring's VFS is **lowercase** only. Also it is **extremely** recommended to use linux style path separators, e.g. "foo/bar.txt" and not "foo\bar.txt".

## Engine Read Files

The engine access a few files directly, most of them are lua files which access other files themselves. Here the list of files that must exist in the VFS (some of them don't have to be in the game/map archive cause there are fallback solutions in springcontent.sdz & maphelper.sdz):

- ./
  - anims/
    - [cursornormal.bmp/png](/gamedev-mousecursors)
  - gamedata/
    - defs.lua
    - explosions.lua
    - explosion_alias.lua
    - [icontypes.lua](/icontypes.lua)
    - [messages.lua](/messages.lua)
    - [modrules.lua](/modrules.lua)
    - [resources.lua](/resources.lua)
    - [resources_map.lua](/resources.lua)
    - [sidedata.lua](/sidedata.lua)
    - [sounds.lua](/sounds.lua)
  - luagaia/
    - main.lua
    - draw.lua
  - luarules/
    - main.lua
    - draw.lua
  - luaui/
    - main.lua
  - shaders/
    - ?
  - luaai.lua
  - [mapinfo.lua](/mapdev-mapinfo.lua)
  - mapoptions.lua
  - [modinfo.lua](/modinfo.lua)
  - [modoptions.lua](/modoptions.lua)
  - [validmaps.lua](/validmaps.lua)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [VirtualFileSystem](https://springrts.com/wiki/VirtualFileSystem).*
