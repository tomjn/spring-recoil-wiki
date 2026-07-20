---
title: "Modinfo.lua"
source_url: "https://springrts.com/wiki/Modinfo.lua"
categories:
  - "Gamedata"
---
# Modinfo.lua

<div class="mw-parser-output">

## Location

modinfo.lua is a file in the root directory of a Spring Game.

## Purpose

The purpose of this file is to define a Spring content package as a game or game content archive. It is read both by the multiplayer lobbies and the engine itself.

## Source

The engine source code which parses the data from this file is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/System/FileSystem/ArchiveScanner.cpp" class="external text" rel="nofollow">rts/System/FileSystem/ArchiveScanner.cpp</a>

## Details

The following tags are read, all are strings unless otherwise specified:

string [name](#name)  default: n/a Required

The name displayed in the lobby or via Spring.exe, [version](#version) is automatically appended. <a href="http://springrts.com/phpbb/viewtopic.php?f=14&amp;t=25927" class="external text" rel="nofollow">Don't put the version into the name!</a>

string [shortName](#shortname)  default: n/a 

A short representation of the package name, usually an acronym of the above.

string [version](#version)  default: n/a 

The version of this package. See [\#Further Reading](#further-reading) for more information.

string [mutator](#mutator)  default: n/a Required

Is the package an official release or a mutator?

string [game](#game)  default: n/a 

What game is this package based on? This is subtly different from the name attribute. Consider that a main game archive and a mutator would have the same game, but different name values.

string [shortGame](#shortgame)  default: n/a 

Again an acronym representing the above.

string [description](#description)  default: n/a 

A description of this content package.

int [modType](#modtype)  default: n/a 

What kind of content package is this? 1 for a game or mutator, 4 for a hidden base content file (prior to 104.0 this was 0), menu archives use 5. Maps use 3 in [mapinfo.lua](/mapdev-mapinfo.lua).

table [depend](#depend)  default: {} 

A table of other content packages, referenced by name + version, not their filename, which this package depends on. Spring will load them if they are present, or throw an error if they are missing. This is used by mutators to depend on main game file and by all games to depend on base content files. New games may particularly want to depend on 'Spring Cursors' (provided as cursors.sdz in the Spring base directory) if they do not yet have their own [custom cursors](/gamedev-mousecursors).

table [replace](#replace)  default: {} 

A table of content packages, again referenced by name + version, that this package is meant to replace. For example if you have a base content package with your game music, you may wish to replace it with an updated version later on without having to modify the modinfo.lua of all packages which depend on it. This is not usually used to update main game archives, however, as players may wish to continue playing a previous version.

## Examples

### Main Game file

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

    local modinfo = {
      name = "My Awesome Spring Game",
      shortName = "MASG",
      game = "My Awesome Spring Game",
      shortGame = "MASG",
      mutator = "Official",
      version = "v1.0",
      description =   "An awesome game I made with units",
      url =   "http://www.linktomyawesomegame.com/",
      modtype = 1,
    }

    return modinfo

</div>

### Mutator

A mutator depends on the main game file, but does not replace it, it will usually have a different name and shortName but the same game and shortGame values as the main game file. It should still have a modtype of 1.

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

    local modinfo = {
      name = "My Awesome Spring Game Mutator",
      shortName = "MASGM",
      game = "My Awesome Spring Game",
      shortGame = "MASG",
      mutator = "Double Speed Mutator",
      version = "v1.0",
      description =   "An awesome mutator I made for MASG",
      url =   "http://www.linktomyawesomegame.com/",
      modtype = 1,
      depend = {
        "My Awesome Spring Game v1.0",
      }
    }

    return modinfo

</div>

### Base Content

Base content is a hidden, unplayable content package which is depended on by your game. For example you might include music in a hidden content package so that it was not updated with the main game files. It must have a modtype of 4 (0 prior to 104.0). The following example is from springcontent.sdz, which is automatically loaded by Spring for all games.

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

    local modinfo = {
      name = "Spring content",
      version = "v1",
      description = "Mods can depend on this archive to get all the spring content",
      modtype = 4,
      depend = {
        "Spring Bitmaps v1"
      },
    }

    return modinfo

</div>

### Further Reading

Forum thread: <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=25927&amp;start=5" class="external text" rel="nofollow">Please fix:games contain version in "name" tag (modinfo.lua)</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Modinfo.lua](https://springrts.com/wiki/Modinfo.lua).*
