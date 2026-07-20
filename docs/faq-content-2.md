---
title: "FAQ:content"
source_url: "https://springrts.com/wiki/FAQ:content"
categories:
  - "Deprecated"
---
# FAQ:content

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

## Content

### Do Spring maps need a "ground"?

Spring maps do require a ground. However, the ground texture can be set to be 'transparent' below 0, allowing a map to look like asteroids lost in space. However, technically the game still plays mostly as a 2D RTS, it is not a true three dimensionnal battlefield.

### You stated that Spring uses the TA unit format.

Spring does support the Total Annihilation unit format. However, there is also a new format dubbed '.s3o' which uses a UV mapped texture instead of 3do's per face texturing system, as well as other improvements.

### Does Spring have a limited number of weapons?

No. Unlike Total Annihilation, Spring's weapon IDs are unlimited. Meaning it is possible to add as many third-party units as you want. However, the current model format limits 16 weapons to each unit. And the texture space is limited, which proved to be the bottleneck for most 'let's add as many old third party TA races into spring' projects.

### Does Spring have a limited number of unique units?

No. Unit IDs, like weapon IDs, are unlimited.

### Do units have a maximum of 3 unique weapons?

Total Annihilation had a limitation that permitted a maximum of 3 unique weapons per unit. Spring currently has a way to have 16 weapons per unit. (Replace Primary, Secondary, Tertiary by 1 2 3 ...16). More can be made possible by modifying the source if there's a sufficient demand by mod makers.

### I'm curious as to the per-unit polygon limit.

The engine itself does not have a polygon count limit. The limit is that of the processing power of today's computers. Since Spring requires a 3D card, the maximum polygon count per unit is many, many times higher than Total Annihilation's; tricounts of \>1000 on Peewee equivalents are perfectly viable. This isn't an excuse to waste polies, though!

### Are units able to perform basic terraforming?

Yes, support for terraforming is possible with [Lua Scripting](/lua-main), such as in the [Complete Annihilation](/complete-annihilation) mod. Alternatively, all construction units can restore ground, and certain weapons (especially explosive ones) can be used to deform the ground.

### Is tunnel building possible?

Subterranean areas of any sort is impossible. However, it is possible to heavily deform the ground with explosives... Which is great fun!

### Is the ground's water retention editable?

No. Water level is always set 0, so pieces of map under 0, whether there started under 0, or that started over 0 then were dug/explosed to under 0, are always filled with water.

### Does Spring have a limit on the number of races?

Spring has no limit on the total number of sides/races.

### What are the sizes of the biggest and smallest units?

Static units (buildings, defenses, etc.) have no size limitations in the engine. Technically, neither do mobile units, but units with a footprint larger than 4x4 "squares" (an arbitrary size standard created by Cavedog) might have problems pathfinding.

### What is the maximum possible sea depth?

For all practical purposes, it is unlimited. The depth values are stored as "float variables", so it is doubtful that maps would ever be made which even come close to approaching the limit.

### Does Spring support campaigns?

Basic Map scripting has been implemented, using a Lua scripting engine. From that, it would be possible to make a basic campaign, but for ease of use a better way of selecting scripts and an improved Single player menu is needed.

### How big are the Spring files?

Spring is as small as however much content is included with it. The "essential" files are only several megabytes large. Content (such units and mostly, maps) add considerable size to the Spring download. Currently, the file size is roughly 30 MB.

### How does Spring render sound effects?

Sound is rendered 3D, meaning that the volume and direction (assuming a multi-speaker setup) vary with the location of the camera from the sound "emitter". What this translates into gameplay terms means that the closer you are to a unit making a sound or motion, the louder the sound is. Additionally, the sound is heard differently depending on which way the camera is facing relative to units making sound.

### Does Spring have ambient sound?

There is no ambient sound, and we haven't planned on adding it thus far.

### Is there an AI or a "skirmish" mode?

We have created an interface for artificial intelligences (AIs), and several have been developed. Information on these can be found at the [AIs](/ai-skirmish-list) wiki page.

### Is a "possess" or a FPS option present?

Yes, it is possible to fully control a unit from the first person view. It is more of a gimmick, but it still allows for a nice diversion once in a while. Press 'C' to toggle "First Person Shooter Mode".

### How do I create maps?

See the [Map development](/mapdev-main) page for all the map info.

### How do I create units/mods?

See the [Mod and Unit development](/gamedev-main#mod-devlopement) page on creating units/ mods.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [FAQ:content](https://springrts.com/wiki/FAQ:content).*
