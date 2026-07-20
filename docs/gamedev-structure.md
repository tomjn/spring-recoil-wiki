---
title: "Gamedev:Structure"
source_url: "https://springrts.com/wiki/Gamedev:Structure"
categories:
  - "Game_Dev"
---
# Gamedev:Structure

<div id="game-structure" class="section mw-parser-output">

## Game Structure

### .sd7 or .sdz

A mod is presented as an [sd7](/gamedev-archives) or sdz file. This is just a zip file of the individual files comprising the game.

You can unzip the sd7 or sdz file by renaming it to .zip, and using a zip tool to unzip it.

sd7 / sdz files are created using 7zip.

### .sdd directories

You can avoid using the archives altogether by storing the whole mod directory structure in an .sdd directory. This is useful for game development because the changes you make are visible without any additional step.

On Linux one can also symlink the development directories from the Spring's mod directory:

     ln -s ~/projects/caspring/games/zk ~/.spring/games/zk.sdd

### Directory Structure

#### **`root of game folder`**

[Modinfo.lua](/modinfo.lua) and can also contain [Modoptions.lua](/modoptions.lua), [LuaAI.lua](/ai-development-lang-lua), and [springignore.txt](/springignore.txt)

#### **`anims\`**\

image files for [mouse cursors](/gamedev-mousecursors)

#### **`bitmaps\`**\

##### **`bitmaps\loadpictures`**\

pictures that will be displayed when the game loads.

##### **`bitmaps\tracks`**\

images that are used for the [unit tracks](/gamedev-unitdefs#decals)

#### **`features\`**\

.lua [FeatureDef](/gamedev-featuredefs) files

Corpse and map-static feature definitions. The corpse files are similar to [UnitDefs](/gamedev-unitdefs) but usually contain a less data, such as what model to use as the wreckage, how much metal the wreck will give if reclaimed, etc. Some games choose to subsume these into the [UnitDef](/gamedev-unitdefs) instead of having separate files.Subfolders are allowed.

#### **`gamedata\`**\

[Various files](/categories/gamedata) that control global things or setup graphic & sound resources.

#### **`icons\`**\

images for [unit symbols and radar icons](/icontypes.lua)

#### **`LuaRules\`**\

various files to make Lua scripts work such as gadget handler

##### **`LuaRules\Gadgets`**\

[Lua gadgets](/lua-main): scripts that control the gameplay

##### **`LuaRules\Configs`**\

config files read by Lua gadgets

#### **`LuaUI\`**\

##### **`LuaUI\widgets`**\

[Lua widget](/lua-main): scripts that make up the user interface or do other unsynced things

#### **`objects3d\`**\

.3do, [.s3o](/about-s3o) or [Assimp](/assimp) compatible 3D model files

This contains the actual 3D model that units and features use in-game. Most units have a variety of different pieces that are put together in a hierarchy type form (for instance, a tank has a hull, a turret attached to that, and a barrel attached to that). The [model](/gamedev-unitdefs#model) tag determines what model is used.

#### **`scripts\`**\

[.lua](/animation-luascripting) or [.cob](/animation-coboverview) animation script files

This contains all of the animation scripting for the units. Scripts work by calling on pieces of the unit's model to do things, such as rotate a turret to aim at a target, or emit smoke when the unit is damaged. The pieces named in the script file must reflect actual parts of the unit's.

#### **`sidepics\`**\

[Faction icons](/sidedata.lua) read by lobby etc.

#### **`sounds\`**\

[sound files](/sounds.lua)

#### **`units\`**\

.lua [UnitDef](/gamedev-unitdefs) files

Contains most of the active data that a unit uses, such as its health, a list of which weapons it has, speed, metal/energy cost, whether it is a construction unit or not, so on and so forth. Subfolders are allowed.

#### **`unitpics\`**\

.dds or .png [buildmenu pictures](/gamedev-buildpics)

Unit pictures are those little thumbnails which show up in the build menus of units in-game. They're just a little graphical representation of the unit so people know what they're building when they click it. Assigned via the [buildpic](/gamedev-unitdefs#buildpic) tag.

#### **`unittextures\`**\

.dds, .tga or .png image [texture](/3dmodels-textures) files.

Image files which are stretched over the unit. Texture 1 contains the diffuse and team colour and texture 2 controls reflectivity, specular, glow and 1-bit transparency. Subfolders are allowed.

#### **`weapons\`**\

.lua [WeaponDef](/gamedev-weapondefs) files

Most units have weapons. The characteristics of these weapons, from its behaviour to how it acts in the air, is determined in the weapon file. Some games choose to subsume these into the [UnitDef](/gamedev-unitdefs) instead of having separate files. Subfolders are allowed.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Gamedev:Structure](https://springrts.com/wiki/Gamedev:Structure).*
