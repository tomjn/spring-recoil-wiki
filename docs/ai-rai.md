---
title: "AI:RAI"
source_url: "https://springrts.com/wiki/AI:RAI"
categories:
  - "AI"
---
# AI:RAI

<div class="mw-parser-output">

<table class="wiki-infobox">
<tbody>
<tr>
<td colspan="2"><strong>RAI</strong></td>
</tr>
<tr>
<td>Developer</td>
<td>Reth</td>
</tr>
<tr>
<td>Version</td>
<td><strong>v0.601</strong></td>
</tr>
<tr>
<td>Mod Support</td>
<td>Supports Most Known Mods</td>
</tr>
<tr>
<td>Status</td>
<td><strong>Under Active Development</strong></td>
</tr>
<tr>
<td>License</td>
<td>GNU GPL</td>
</tr>
<tr>
<td>Interface</td>
<td>C</td>
</tr>
<tr>
<td>Wrapper</td>
<td>LegacyCpp</td>
</tr>
<tr>
<td colspan="2"> <strong><a href="/ai-skirmish-list">&lt;- Back to List of AIs</a></strong></td>
</tr>
</tbody>
</table>

The <a href="https://github.com/spring/spring/tree/develop/AI/Skirmish/RAI" class="external text" rel="nofollow">Source code</a> of RAI is integrated into spring.

### Forum thread

- <a href="http://taspring.clan-sy.com/phpbb/viewtopic.php?t=7924" class="external text" rel="nofollow">"RAI v0.601"</a>

### Older Version Downloads

- <a href="http://www.fileuniverse.com/?p=show&amp;a=it&amp;id=5296" class="external text" rel="nofollow">Windows</a>
- <a href="http://spring.jobjol.nl/show_file.php?id=949" class="external text" rel="nofollow">Linux 64bit</a>
- <a href="http://www.fileuniverse.com/?p=show&amp;a=it&amp;id=5398" class="external text" rel="nofollow">Source code</a>

Mods with incomplete support:

- BloX (transporters unsupported: can't figure out that guns are attached to the transporters to make a tank)
- 1944 & Epic Legions (requires a unique method of destroying parts of the enemy base)
- Fibre - units are controlled differently than RAI expected, AI-Events do not occur in the way that is expected
- more generally, any mod that does not have controllable mobile attack units

### How to compile on Linux

Recent versions of spring (0.77+) can compile it without any hassle, using both scons and cmake. A simple *scons* or *make* (if using cmake) will do.

For older versions of spring (0.76):

- download spring sources <a href="http://spring.clan-sy.com/dl/spring_0.76b1_src.tar.bz2" class="external text" rel="nofollow">here</a>, and extract it somewhere
- download RAI sources <a href="http://www.fileuniverse.com/spring/ai/RAI%20v0.553%20source.rar" class="external text" rel="nofollow">here</a>, and save it into the *{spring source}/AI/Global/* folder
- install the glew development package - on Ubuntu it's *sudo apt-get install libglew1.5-dev*
- open the project in CodeBlocks - there's a project file for CB provided in the RAI/CodeBlocks directory
- then edit the sources a bit to have them be more cross-platform friendly - atm they use a windows function to create folders.
  - in v0.553: RAI/Global.cpp, edit line 4 to say *\#include \<sys/stat.h\>* instead
  - for v0.600: this is RAI/RAI.cpp, line 10
  - in v0.553: RAI/Global.cpp, edit lines 157-158 to say:
    - mkdir( "AI/RAI", S_IRWXU \| S_IRWXG \| S_IROTH \| S_IXOTH );
    - mkdir( "AI/RAI/Metal", S_IRWXU \| S_IRWXG \| S_IROTH \| S_IXOTH );
  - for v0.600: this is RAI/RAI.cpp, lines 1086-1089
- at this point, it'll compile fine, but give some warnings about int floats. The problem is that it doesn't generate a .so somehow though, so some voodoo magic needs to be done
  - Go to project properties, and under Build Targets, enable 'auto generate extension'.
- now use clean the project, and recompile the whole thing. You *should* get a RAI.so in the CodeBlocks directory.
- to test, put the .so into *~/.spring/AI/Bot-libs/*, and since SpringLobby will see it right away, try a single player game.

### Version History

v0.601:

- Fixes

v0.600:

- terrain-map improvements (nearly complete universal map support)
- map-areas generated for each mobile unit-type defined by slope,elevation,hovering,floating capabilities
- units will, virtually, never attempt to make an impossible move (based on the starting terrain)
- factories will no longer be build in sectors/areas that give their units access to less than 20% of the map
- acid/lava and other harmful water maps are now properly detected and will not be built in or moved across (excluding units with hover/flying capabilities)
- KAI's metal-map class has been removed & replaced
- resource linking has been improved (expansion routes)
- the power-manager class has been improved
- early starting unit are monitored more closely to ensure that a starting base is build when possible

v0.551-v0.553 (spring v0.75b2-v0.76b1)

- Fixes

v0.55 (spring v0.75b2)

- Assault units now use basic attack groups
- Remembering enemy positions outside of LOS/Radar
- Restrict hovercraft on certain maps & mods
- Player given orders are now followed until completion
- Unit support added: nano turrets
- Basic building placement added: defenses
- Minor Changes/Fixes

v0.50 (spring v0.74b3)

- Basic hub support & improved build list detection
- Units will now use capture/resurrect/high trajectory and are more willing to reclaim
- Builders will now upgrade extractors/geos
- Expands a little more intelligently
- A bit quicker expansion, slowly seizing available (metal/geo spots)
- Minor Changes/Fixes

v0.40 (spring v0.74b2-v0.74b3)

- Minor Changes/Fixes

v0.355 (spring v0.74b1)

- Fixes

v0.350 (spring v0.73b1)

- Improvements to Building Decisions.
- Support for Water Units/Maps.
- Minor Changes/Fixes

v0.300 (spring v0.73b1)

- First Release

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:RAI](https://springrts.com/wiki/AI:RAI).*
