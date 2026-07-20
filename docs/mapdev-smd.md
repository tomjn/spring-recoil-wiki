---
title: "Mapdev:SMD"
source_url: "https://springrts.com/wiki/Mapdev:SMD"
categories:
  - "Deprecated"
  - "Map_Dev"
---
# Mapdev:SMD

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | Use of SMD is deprecated, use [mapinfo.lua](/mapdev-mapinfo.lua) instead! |

This page should only be used when dealing with old maps. new maps use [mapinfo.lua](/mapdev-mapinfo.lua)

## Spring Map Definition (smd) Reference

variables are organised as such: type [name](#name)  default: ? range: \[valid range\] Required

FIXME: 

### Source

The engine source code which reads this file from the map is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Map/MapInfo.cpp" class="external text" rel="nofollow">rts/Map/MapInfo.cpp</a>
- <a href="https://github.com/spring/spring/blob/106.0/rts/Map/MapParser.cpp" class="external text" rel="nofollow">rts/Map/MapParser.cpp</a>

## General Formatting

- All lines must end in a semicolon.
- Sections begin with a keyword wrapped in square brackets, and are wrapped in curly brackets
- Blank lines are allowed
- Comments are preceded by // anything following a comment marker is ignored
- Whitespace is ignored so you can tabulate your SMD to help the overall readability, and to show where sections begin and end.
- The names are not case sensitive

<!-- -->

    // Example (this is a comment)
    [MAP]
    {
       ...
       // this is a comment
       [subsection]
       {
          ...
          ThisIsAValue = something;
          AnotherValue = somethingelse; // another comment
          ...
       }
       ...
    }

## Sections

### MAP

The map section describes the basic options of the map.

    [MAP]
    {
       // properties
       Description = "mountainous whatever";
       AutoShowMetal = 1;
       DefaultOptions = 1;
       DetailTex = detailtex.bmp;
       ExtractorRadius = 400;
       Gravity = 130;
       MapHardness = 100;
       MaxMetal = 0.03;
       TidalStrength = 20;
       voidwater = 0;
       notdeformable = 0;
       SpecularTex = speculartex.tga;
       SplatDistrTex = splatdist.tga;
       SplatDetailTex = splattex.tga;
       GrassBladeTex = grassbladetex.tga;
       GrassShadingTex = grassshading.bmp;

       // subsections
       [SMF]
       {
          ...
       }
       [ATMOSPHERE]
       {
          ...
       }
       [WATER]
       {
          ...
       }
       [LIGHT]
       {
          ...
       }
       [TEAMx]
       {
          ...
       }
       [TERRAINTYPEx]
       {
          ...
       }
       [GRASS]
       {
          ...
       }
       [SPLATS]
       {
          ...
       }
    }

string [Description](#description)  default: ? Required

The description of the map that shows in the multiplayer battleroom

bool [AutoShowMetal](#autoshowmetal)  default: 1 range: \[0 

Defines wether the metal map (F4 mode) is shown automatically when a mex is queued for placement

bool [DefaultOptions](#defaultoptions)  default: ? range: \[0 

FIXME: 

string [DetailTex](#detailtex)  default: ? 

Specifies the detail texture for the map, for examples and a library, see this sticky thread: \[<a href="http://springrts.com/phpbb/viewtopic.php?f=56&amp;t=21565" class="external autonumber" rel="nofollow">[1]</a>\]

float [ExtractorRadius](#extractorradius)  default: 500 range: \[0-max\] 

The radius of effect that a single extractor will extract from. If two radii intersect, both extractors will suffer from reduced output

float [Gravity](#gravity)  default: 130 range: \[0.0-max\] 

The force of gravity in units/sec^2

float [MapHardness](#maphardness)  default: 100 

Defines how much a map will deform from impacts. Higher values mean less deformation, negative values will result in negative deformation (really funny looking)

float [MaxMetal](#maxmetal)  default: 0.02 range: \[0.0-max\] 

How much metal a map square with the maximum metal value gives

float [TidalStrength](#tidalstrength)  default: 0 range: \[0,max\] 

The amount of energy which will be given by tidal generators

bool [voidwater](#voidwater)  default: 0 range: \[0 

Voidwater means there will be no water plane, and all parts of the map under water will be completely transparent, to show the skybox through the map. For example, check Apophis_v2 : <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=20684&amp;hilit=apophis" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=20684&amp;hilit=apophis</a>

bool [notdeformable](#notdeformable)  default: 0 range: \[0 

Setting it to 1 means that no explosions can deform the map

string [SpecularTex](#speculartex)  default: ? 

FIXME: 

string [SplatDistrTex](#splatdistrtex)  default: ? 

FIXME: 

string [SplatDetailTex](#splatdetailtex)  default: ? 

FIXME: 

string [GrassBladeTex](#grassbladetex)  default: ? 

Specifies the texture to be used on the grass blades themselves. Green-yellow gradients make for some interesting effects. Defaults to the internally generated blade texture

string [GrassShadingTex](#grassshadingtex)  default: ? 

Specifies the color variation of the grass across the map. This defaults to the minimap, so the grass color can match the map color

### SMF

    [MAP]
    {
       ...
       [SMF]
       {
          MinHeight = -100;
          MaxHeight = 100;
       }
       ...
    }

float [MinHeight](#minheight)  default: 0 

Overrides the minimum map height specified while compiling. Compile time height used if undefined

float [MaxHeight](#maxheight)  default: 0 

Overrides the maximum map height specified while compiling. Compile time height used if undefined

### ATMOSPHERE

    [MAP]
    {
       ...
       [ATMOSPHERE]
       {
          CloudColor = 0.9 0.9 0.9;
          CloudDensity = 0.25;
          FogColor = 0.7 0.7 0.8;
          FogStart = 0.48;
          MinWind = 1;
          MaxWind = 25;
          SkyBox = nebulus.dds;
          SkyColor = 0.1 0.15 0.7;
          SunColor = 1.0 1.0 1.0;
       }
       ...
    }

rgb [CloudColor](#cloudcolor)  default: 1.0 1.0 1.0 

The color of the clouds. The values are in the order Red, Green, Blue

float [CloudDensity](#clouddensity)  default: 0.5 range: \[0.0-max\] 

The number of clouds in the sky. A percentage in decimal form, 0.0 to 1.0.

rgb [FogColor](#fogcolor)  default: 0.7 0.7 0.8 

The color of the fog and the infinite plane below the world. The values are in the order Red, Green, Blue. However, giving values higher than 1.0 will give brighter fog and less than 0.0 will give darker

float [FogStart](#fogstart)  default: 0.1 

The distance from the camera at which the fog will start

float [MinWind](#minwind)  default: 5.0 range: \[0.0-max\] 

The minimum amount of energy the wind on the map will give

float [MaxWind](#maxwind)  default: 25.0 range: \[0.0-max\] 

The maximum amount of energy the wind on the map will give

string [SkyBox](#skybox)  default: ? 

Specify a .dds skybox (also called skycube) for examples and resources see: \[<a href="http://springrts.com/phpbb/viewtopic.php?f=56&amp;t=11009" class="external autonumber" rel="nofollow">[2]</a>\]

rgb [SkyColor](#skycolor)  default: 0.1 0.15 0.7 

The color of the sky itself. The values are in the order Red, Green, Blue

rgb [SunColor](#suncolor)  default: 1 1 1 

The color of the sun in the sky. The values are in the order Red, Green, Blue. This will also effect the size of the star. As the values increase (including over 1.0), the disc will get bigger; the inverse is also true

### LIGHT

    [MAP]
    {
       ...
       [LIGHT]
       {
          GroundAmbientColor=0.6 0.6 0.6;
          GroundSunColor=0.9 0.9 0.9;
          GroundShadowDensity=0.6;
          GroundSpecularColor=0 0 0;
          UnitAmbientColor=0.6 0.6 0.6;
          UnitSunColor=0.93 0.93 0.93;
          UnitShadowDensity=0.8;
          UnitSpecularColor=0 0 0;
          SunDir=2 1 1;
       }
       ...
    }

rgb [GroundAmbientColor](#groundambientcolor)  default: 0.5 0.5 0.5 

The ambient (non-sun-lit) color of ground, grass, trees and other features. The values are in the order Red, Green, Blue

rgb [GroundSunColor](#groundsuncolor)  default: 0.5 0.5 0.5 

The color of ground where it is fully sun lit (added to GroundAmbientColor). The values are in the order Red, Green, Blue

float [GroundShadowDensity](#groundshadowdensity)  default: 0.8 

How far from the non shadowed to the ambient color stuff in shadow will go

rgb [GroundSpecularColor](#groundspecularcolor)  default: 0.1 0.1 0.1 

FIXME: 

rgb [UnitAmbientColor](#unitambientcolor)  default: 0.4 0.4 0.4 

The ambient (non-sun-lit) color of units and corpses. The values are in the order Red, Green, Blue

rgb [UnitSunColor](#unitsuncolor)  default: ? 

The color of units where they is fully sun lit (added to UnitAmbientColor). The color of units where they is fully sun lit (added to UnitAmbientColor). The values are in the order Red, Green, Blue

float [UnitShadowDensity](#unitshadowdensity)  default: 0.8 

How far from the non shadowed to the ambient color stuff in shadow will go

rgb [UnitSpecularColor](#unitspecularcolor)  default: 0.7 0.7 0.7 

FIXME: 

float\[3\] [SunDir](#sundir)  default: 0.0 1.0 2.0 

The direction of the sun, which is normalized by Spring. The Y-axis is up

### WATER

    [MAP]
    {
       ...
       [WATER]
       {
          // basic options
          WaterSurfaceColor=0.3 0.3 0.4;
          WaterBaseColor=0.4 0.6 0.8;
          WaterAbsorb=0.004 0.004 0.002;
          WaterMinColor=0.1 0.1 0.3;
          WaterPlaneColor= 0.1 0.1 0.3;
          WaterDamage=0;

          // bump mapped Water Settings
          WaterSurfaceAlpha = 0.55;
          WaterDiffuseColor = 0.55 0.4 0.3;
          WaterSpecularColor = 0.55 0.4 0.3;
          WaterSpecularPower = 2.0;
          WaterSpecularFactor = 0.3;
          WaterAmbientFactor = 1.3;
          WaterDiffuseFactor = 0.3;
          WaterFresnelMin = 0.3;
          WaterFresnelMax = 0.8;
          WaterFresnelPower = 4;
          WaterReflectionDistortion = 0.1;
          WaterBlurBase = 2;
          WaterBlurExponent = 2;
          WaterPerlinStartFreq = 8;
          WaterPerlinLacunarity = 3;
          WaterPerlinAmplitude= 0.9
       }
       ...
    }

rgb [WaterSurfaceColor](#watersurfacecolor)  default: 0.75 0.8 0.85 

The color of the water surface. The values are in the order Red, Green, Blue. Mostly affects the colors of the reflections off the top of the water. Has no effect on bump mapped water!

rgb [WaterBaseColor](#waterbasecolor)  default: 0.0 0.0 0.0 

The color of the water just beneath the surface plane. This is the starting color from which deeper waters will absorb more color. The values are in the order Red, Green, Blue

rgb [WaterAbsorb](#waterabsorb)  default: 0.0 0.0 0.0 

How fast different colors (RGB in order) are absorbed by the water. Can be used to make the water look murky at deeper sections and so on. How this works: the waterabsorb value for the color channel gets multiplied by the depth of the water at a point, and this product gets subtracted from WaterBaseColor, until WaterMinColor is reached. Example: WaterAbsorb is 0.01, for the red channel, and we want to know how much red will be left in the water at a Spring elevation of -100, since 0.01\*100= 1 , at this depth, there will be no more red component in the water, unless WaterMinColor is higher than 0 on the red channel

rgb [WaterMinColor](#watermincolor)  default: 0.0 0.0 0.0 

The smallest values the water will go down to due to WaterAbsorb

rgb [WaterPlaneColor](#waterplanecolor)  default: 0.0 0.4 0.0 

This set the color of the groundplane under the water outside the map boundaries

float [WaterDamage](#waterdamage)  default: 0.0 

Number of hit points per game frame (30 frames per second) a unit will be damaged if it is in the water

float [WaterSurfaceAlpha](#watersurfacealpha)  default: 0.55 

Transparency of the water surface. 0 meaning almost fully transparent water plane(low amount of reflections visible), and 1 being nearly opaque (massive amount of reflections)

rgb [WaterDiffuseColor](#waterdiffusecolor)  default: ? 

This specifies the diffuse color of the water body. WARNING: use of this tag disables the effect of WaterAbsorb , in fact, this tag does nothing but disable WaterAbsorb. Avoid

rgb [WaterSpecularColor](#waterspecularcolor)  default: 0.5 0.5 0.5 

FIXME: 

float [WaterSpecularPower](#waterspecularpower)  default: 20 

use of this tag disables the effect of WaterAbsorb

float [WaterSpecularFactor](#waterspecularfactor)  default: 1.0 

FIXME: 

float [WaterAmbientFactor](#waterambientfactor)  default: 1.0 

FIXME: 

float [WaterDiffuseFactor](#waterdiffusefactor)  default: 1.0 

FIXME: 

float [WaterFresnelMin](#waterfresnelmin)  default: 0.2 

FIXME: 

float [WaterFresnelMax](#waterfresnelmax)  default: 0.3 

FIXME: 

float [WaterFresnelPower](#waterfresnelpower)  default: 4.0 

FIXME: 

float [WaterReflectionDistortion](#waterreflectiondistortion)  default: 1.0 

How much the surface should distort reflections that are cause by waves not being level: ergo it adds more choppyness to your reflections sensible from 0 to 20

float [WaterBlurBase](#waterblurbase)  default: 2.0 

Something to do with blur, but it just seems to cause banding with values under 2 and corruption with values above 10

float [WaterBlurExponent](#waterblurexponent)  default: 1.5 

How much reflections on water surface should be blurred together with the water surface, lower values meaning clearer reflections, (0.2-5) Warning: above 5 seems to cause water corruption

float [WaterPerlinStartFreq](#waterperlinstartfreq)  default: 8 

Wave sizes, smaller = big waves, sensible: \[1,20\] (influence the wave sizes)

float [WaterPerlinLacunarity](#waterperlinlacunarity)  default: ? 

Defines the size of the perlin waves, small values being big waves (\[0.2,5\] is sensible)

float [WaterPerlinAmplitude](#waterperlinamplitude)  default: ? 

Base stillness of water surface, 0 is dead still, 1 is 'windy' .This doesnt affect the bump texture depth, besides the fact that this disables the bump texture when set to 0

### TEAMx

Is used to describe the starting positions of the players.

    [MAP]
    {
       ...
       [TEAM0]
       {
          StartPosX=730;
          StartPosZ=821;
       }
       [TEAM1]
       {
          ...
       }
       [TEAMn]
       {
           ...
       }
       ...
    }

int [StartPosX](#startposx)  default: ? range: \[0-map width\] 

The X (east-west in the TA camera) coordinates on the map where the player will start

int [StartPosZ](#startposz)  default: ? range: \[0-map length\] 

The Z (north-south in the TA camera) coordinates on the map where the player will start

### TERRAINTYPEx

Used to define different terrain types that exist on the map. The value starts at 0 and goes on for as many terrain types as you have, where X is the type number. Which terrain type goes where on the map is determined by the typemap when compiling the map. For example, if the typemap has an area of red 128, then the corresponding terraintype tag is \[TERRAINTYPE128\]

    [MAP]
    {
       ...
       [TERRAINTYPE0]
       {
          name = my terrain type;
          hardness = 1;
          recievetracks = 0;
          tankmovespeed = 1;
          kbotmovespeed = 1;
          hovermovespeed = 1;
          shipmovespeed = 1;
       }
       [TERRAINTYPE1]
       {
          ...
       }
       [TERRAINTYPEn]
       {
          ...
       }
       ...
    }

string [name](#name)  default: ? 

A label for the terrain type

float [hardness](#hardness)  default: 1.0 range: \[0.001-max\] 

Used as a multiplier against the \[MAP\].MapHardness value. Can be used to make a particular terrain type softer or harder. A value of '1' will make it as hard as MapHardness, and 0.5 will make it half as hard

bool [recievetracks](#recievetracks)  default: 1 range: \[0 

Effects whether track decals will be placed on the ground from moving vehicles

float [tankmovespeed](#tankmovespeed)  default: 1.0 

Speed multiplier for tanks when travelling on the parent terrain type. A value of '1' is normal speed, 0.5 will make them travel at half speed on the parent terrain type. **All move speeds are clamped to \[0,2\]**

float [kbotmovespeed](#kbotmovespeed)  default: 1.0 

Speed multiplier for Kbots when travelling on the parent terrain type. A value of '1' is normal speed, 0.5 will make them travel at half speed on the parent terrain type

float [hovermovespeed](#hovermovespeed)  default: 1.0 

Speed multiplier for hovercraft when travelling on the parent terrain type. A value of '1' is normal speed, 0.5 will make them travel at half speed on the parent terrain type

float [shipmovespeed](#shipmovespeed)  default: 1.0 

Speed multiplier for Ship when travelling on the parent terrain type. A value of '1' is normal speed, 0.5 will make them travel at half speed on the parent terrain type

### GRASS

    [MAP]
    {
       ...
       [GRASS]
       {
          GrassBladeWaveScale = 1.0;
          GrassBladeWidth = 0.32;
          GrassBladeHeight = 4;
          GrassBladeAngle = 1.57;
       }
       ...
    }

float [GrassBladeWaveScale](#grassbladewavescale)  default: 1.0 

Specifies how much the wind should effect grass blade movement, as well as the amplitude of the grass motion. Setting it to 0 will stop grass animation

float [GrassBladeWidth](#grassbladewidth)  default: 0.32 

Specifies the width of each blade of grass

float [GrassBladeHeight](#grassbladeheight)  default: 4.0 

Specifies the length of each blade of grass

float [GrassBladeAngle](#grassbladeangle)  default: 1.57 

Unit is radians. Specifies the curvature of each blade of grass. Zero means a completely straight blades of grass

### SPLATS

    [MAP]
    {
       ...
       [SPLATS]
       {
          SplatTexScales = 1.0 1.0 1.0 1.0;
          SplatTexMults = 1.0 1.0 1.0 1.0;
       }
       ...
    }

float\[3\] [SplatTexScales](#splattexscales)  default: ? 

FIXME: 

float\[3\] [SplatTexMults](#splattexmults)  default: ? 

FIXME: 

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:SMD](https://springrts.com/wiki/Mapdev:SMD).*
