---
title: "Mapdev:Main"
source_url: "https://springrts.com/wiki/Mapdev:Main"
categories:
  - "Map_Dev"
---
# Mapdev:Main

<div class="mw-parser-output">

## Map Development

Maps are the fields on which the battles are fought, made with the implicit contract that they shall not alter game mechanics. They are made up of images and text files which describe the environment and its features, such as height, colour, background, details features, atmosphere and lighting etc. These images and text files are then compressed into a 7zip archive for distribution.

|  |
|----|
| [<img src="/images/Screen00364.jpg" decoding="async" width="640" height="317" alt="Screen00364.jpg" />](/images/Screen00364.jpg) |

In-Game Screenshot {.wikitable}

## Beginners Tutorial

This beginners tutorial is split into three parts, the basic stuff, the more advanced basic stuff, and how to compile and create a map archive for distribution. It is intended to get you started, when you are comfortable with the concepts, please look over the technical documentation to further your knowledge.

- [Stage 1](/mapdev-tutorial-simple)
- [Stage 2](/mapdev-tutorial-intermediate)
- [Finalizing](/mapdev-tutorial-finalizing)

## Blueprint

Due to the amount of boiler plate files needed to create a fairly feature complete map, Jk has created a blueprint map to get things started

- <a href="https://github.com/jk3064/Map-Blueprint/archive/master.zip" class="external text" rel="nofollow">Link to blueprint zip</a>

## Technical Documentation

**General**

- [mapinfo.lua](/mapdev-mapinfo.lua)
- [set.lua](/mapdev-set.lua) - feature set
- [SMT format](/mapdev-smt-format)
- [SMF format](/mapdev-smf-format)
- [Gamedev:Archives](/gamedev-archives)
- Mapdev:sounds
- [Mapdev:performance](/mapdev-performance)
- [springignore.txt](/springignore.txt)

**Terrain Shading**

- [Mapdev:diffuse](/mapdev-diffuse)
- [Mapdev:detail](/mapdev-detail)
- [Mapdev:splatdetail](/mapdev-splatdetail)
- [Mapdev:splatdetailnormals](/mapdev-splatdetailnormals)
- [Mapdev:specular](/mapdev-specular)
- [Mapdev:normal](/mapdev-normal)
- [Mapdev:parallax](/mapdev-parallax)
- [Mapdev:skyreflectmod](/mapdev-skyreflectmod)
- [Mapdev:lightemission](/mapdev-lightemission)

**Terrain Features**

- [Mapdev:height](/mapdev-height)
- [Mapdev:metal](/mapdev-metal)
- [Mapdev:terraintype](/mapdev-terraintype)
- [Mapdev:grass](/mapdev-grass)
- [Mapdev:features](/mapdev-features)
- [Mapdev:water](/mapdev-water)
- Mapdev:borders
- [Mapdev:minimap](/mapdev-minimap)

**Environment**

- [Mapdev:skybox](/mapdev-skybox)
- Mapdev:lighting
- Mapdev:atmosphere

## Scripting

- Mapdev:MapOptions
- Mapdev:LuaShaders
- Mapdev:Mutators <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=21808" class="external text" rel="nofollow">forum discussion</a>

## Howto's

- Mapdev:Howto_voidwater/space
- Mapdev:Howto_spring_features_v1
- [Mapdev:Howto_skybox](/mapdev-howto-skybox)
- [Making a height map with Blender](/mapdev-howto-height-blender)

## Tools

A big list of tools used in developing spring games and assets:

- [Map,\_Game,\_And_Unit_Development_Programs](/map-game-and-unit-development-programs)

## Resources

- <a href="https://github.com/eronoobos/spring-metal-spot-resources" class="external text" rel="nofollow">Metal Spot Resources</a>

### Specific to Map Development

|  |  |  |  |
|----|----|----|----|
| Tool | Windows | Linux | MacOS |
| [MapConv](/mapconv) | Yes |  |  |
| [MapConvNG](/mapconvng) | Yes | Yes |  |
| [Mapdeconv](/mapdeconv) | Yes |  |  |
| [smf_decompiler](/smf-decompiler) | Yes | Yes | Yes |
| Start Position Editor | <a href="http://springfiles.com/spring/tools/mapping-tools" class="external text" rel="nofollow">Yes</a> |  |  |
| Das Bruce's Mapconv Frontend | <a href="http://springfiles.com/spring/tools/mapping-tools" class="external text" rel="nofollow">Yes</a> |  |  |
| FrostRegen's [SpringMapEdit](/maps-springmapedit) | yes | yes | yes |
| <a href="https://github.com/enetheru/smf_tools/releases" class="external text" rel="nofollow">Enetheru's smf_tools</a> |  | yes |  |

Tools vs Platform {.wikitable}

### Spring Add-Ons

- [FeaturePlacer](/map-making-feature-placer)
- <a href="http://springfiles.com/spring/tools/spring-features" class="external text" rel="nofollow">Spring Features V1.0</a>
- <a href="http://imolarpg.dyndns.org/stuff/nobiax_spring_dnts/nobiax_spring_dnts.7z" class="external text" rel="nofollow">Nobiax DNTS pack for Spring</a>

## Common Problems

### Pink Map

Renaming the SMT file and not defining the new name in mapinfo.lua will result in a map with a pink texture. Also don't put any spaces in the name.

### Map doesn't show in spring after compressing with 7zip

The most likely cause is that it was compressed using the solid archive option.

FIXME: Add windows and MacOS solutions.

For linux the option `-ms=off` needs to be given on the command line. eg.

` 7z a -ms=off myarchivename.sd7 dem files I want to archive`

### Flipped Images

Heightmap images compiled into map files are inverted. It is necessary to use the -i parameter of Mapconv to vertically flip the image so that it matches the texture.

### smt name defined in smf

The SMT file name is hardcoded in the SMF, and renaming the SMT used to cause pink map issues, but the SMT can now be manually defined in mapinfo.lua thereby bypassing the entire issue altogether.

## Map Development Wiki

- [Mapdev Wiki Guide](/mapdev-wikiguide)

## Deprecated but not Deleted

We plan on integrating any and all useful knowledge from these pages into the rest of the wiki, they are kept here so that they are not hidden away.

### Full Guides For Map Making (Outdated)

The guides listed below are outdated and scheduled for archival.

- [aGorm's map creating Guide](/tutorial-createmaps-fnordia-et-al)
- [aGorms Ultimate Map Making Guide(unfinished)](/tutorial-mapmakingguide-agorm)
- [IceXuicks Map creating Guide](/tutorial-mapdesignhelp-icexuick)
- <a href="http://springrts.com/phpbb/viewtopic.php?t=3941" class="external text" rel="nofollow">Forboding Angel's map creating Tutorial</a>
- [Another tutorial from a designing point of view](/tutorial-basicmapmaking-maelstrom)
- [A Complete Map Making Tutorial (under construction)](/tutorial-completemapmaking-wannes)
- [Runecrafter's Map Tutorial](/tutorial-mapmaking-runecrafter)
- <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=15390" class="external text" rel="nofollow">Beherith's map creating tutorial using the World in Conflict map editor</a>

### Specific Guides (Extremely Outdated!)

The linked pages below are scheduled for archival.

- Spring Map Definition(smd) reference
- [Everything about Compiling your map](/maps-compiling)
- [Some things about map balance](/mapsbalance)
- [Map sizes in pixels](/mapsizes) and memory information about map sizes
- [RogerN's height map tutorial](/tutorial-heightmapwithpovray-rogern)
- [Basic howto: create map texture with Povray](/tutorial-mapwithpovray-tinnut)

[Spring_Features](/spring-features) is an Archive which contains Stones, rocks, trees, and can be used for your map.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:Main](https://springrts.com/wiki/Mapdev:Main).*
