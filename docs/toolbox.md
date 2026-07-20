---
title: "ToolBox"
source_url: "https://springrts.com/wiki/ToolBox"
categories:
  - "Game_Dev"
---
# ToolBox

<div class="mw-parser-output">

## What is it?

A bunch of handy game and map dev tools bundled into one package, accessed through a handy [Chili](/chili)-driven GUI with [Chili](/chili) already included in the package.

## How do I use it?

Open up the sdd, open up modinfo.lua, set your mod as a dependency.

Run spring.exe and choose ToolBox.

(Mappers can run it stand-alone without a dependency. You may have to clear / edit ArchiveCache.lua if you switch to dev-ing another mod with it - Alternatively make it into an sdz/7 and it should be rechecked each time it is loaded).

Most of the tools are accessible through the menu (Spanner then ToolBox) some are accessible through F11 directly.

## Where do I get it?

Automatically packaged .zip files are available on <a href="https://github.com/gajop/Toolbox" class="external text" rel="nofollow">github</a> but you will have to collect the submodules (i.e. Chili) seperately:

- <a href="https://github.com/gajop/Toolbox/archive/master.zip" class="external text" rel="nofollow">ToolBox ZIP</a>
- <a href="https://github.com/gajop/chiliui/archive/master.zip" class="external text" rel="nofollow">Chili ZIP</a> Extract this into ToolBox.sdd, not into your game

Instead it is better to get it using git directly:

    git clone --recursive https://github.com/gajop/Toolbox.git 

(--recursive call will pick up submodules)

## What tools does it give me?

So far it includes:

- <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=24882" class="external text" rel="nofollow">Boxxy</a> - For tweaking unit collision volumes
- <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=25104" class="external text" rel="nofollow">Animator (aka Unit Poser)</a> - For animating units
- <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=24499" class="external text" rel="nofollow">CEG Spawner - For testing CEG's in game</a>
- Water Configure - For tweaking map water settings
- Widget Profiler - For profiling your widgets

## Who is responsible for this abomination?

In no particular order:

- knorke - Made Boxxy, Unit Poser
- CarRepairer - Made CEG Spawner, made all the Chili GUIs for the tools and the menu
- FLOZi - Had the idea of using a dependency and badgered Car into making it happen
- jK - For Chili and the water config and profiler widgets (and for reminding me about lockluaui.txt)
- Tobi - For LUS
- gajop - Updates to Chili and creating scenario & map editor on the basis of ToolBox

## Suggestions welcome

So far FBI2Lua, buildpic generator, feature placer have been suggested

Discussion, questions etc: <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=27268" class="external text" rel="nofollow">ToolBox thread on forum</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [ToolBox](https://springrts.com/wiki/ToolBox).*
