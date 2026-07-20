---
title: "Mapdev:mapinfo.lua"
source_url: "https://springrts.com/wiki/Mapdev:mapinfo.lua"
categories:
  - "Map_Dev"
---
# Mapdev:mapinfo.lua

<div class="mw-parser-output">

## mapinfo.lua Reference

This file is the primary configuration file for maps, list many things including resources, attributes, ad properties.

### Source

The engine source code which reads this file from the map is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Map/MapInfo.cpp" class="external text" rel="nofollow">rts/Map/MapInfo.cpp</a>
- <a href="https://github.com/spring/spring/blob/106.0/rts/Map/MapParser.cpp" class="external text" rel="nofollow">rts/Map/MapParser.cpp</a>

### Example

Can be found in the <a href="https://github.com/jk3064/Map-Blueprint/archive/master.zip" class="external text" rel="nofollow">map blueprint</a>

## File Location

relative to the root directory of the map

./mapinfo.lua

## Formatting

check <a href="http://www.lua.org/docs.html" class="external text" rel="nofollow">Lua Documentation</a> for syntax etc.

In this wiki page, variables are organised as such: type [VariableName](#variablename)  default: value range: \[valid range\] Required

Description

### Data Types

int  
An integer number. eg. 5

float  
A number with decimals. eg 1.023

bool  
A value which can be true or false. eg true

string  
Text, or more precisely a string of alphanumeric characters. eg "string of characters"

rgb  
Three float components, representing red, green and blue components, ranged from 0.0 to 1.0. eg {0.0, 0.0, 0.0} 

float3  
Three float components, eg {0.0, 0.0, 0.0} 

float4  
Four float components, eg {0.0, 0.0, 0.0, 0.0} 

## Sections

### mapinfo

    local mapinfo = {
       name        = "MyMap",
       shortname   = "",
       description = "",
       author      = "",
       version     = "1.0",
       --mutator   = "deployment";
       mapfile     = "maps/mymap.smf", -- // location of smf/sm3 file
       modtype     = 3, --// 1=primary, 0=hidden, 3=map
       depend      = {"Map Helper v1"},
       replace     = {},

       --startpic   = "", --// deprecated
       --StartMusic = "", --// deprecated

       maphardness     = 100,
       notDeformable   = false,
       gravity         = 130,
       tidalStrength   = 0,
       maxMetal        = 0.02,
       extractorRadius = 500.0,
       voidWater       = false,
       voidGround      = false,
       autoShowMetal   = true,

       smf = {
          ...
       },

       sound = {
          ...
       },

       resources = {
          ...
       },

       splats = {
          ...
       },

       atmosphere = {
          ...
       },

       grass = {
          ...
       },

       lighting = {
          ...
       },

       water = {
          ...
       },

       teams = {
          ...
       },

       terrainTypes = {
          ...
       },

       custom = {
          ...
       },
    }

string [name](#name)  default: none Required

Name of the map

string [shortname](#shortname)  default: ? Required

maps will not show in the map list without a valid shortname(not sure on its requirements)

string [description](#description)  default: name 

The description of the map that shows in the multiplayer battleroom

string [author](#author)  default: "" 

Author of the map

string [version](#version)  default: ? 

version, appended to name

string [mutator](#mutator)  default: ? 

FIXME: 

string [mapfile](#mapfile)  default: ? 

location of smf/sm3 file

int [modtype](#modtype)  default: ? range: \[013\] Required

1=primary, 0=hidden, 3=map

type [depend](#depend)  default: ? Required

FIXME: 

type [replace](#replace)  default: ? 

FIXME: 

float [maphardness](#maphardness)  default: 100.0 

Defines how much a map will deform from impacts. Higher values mean less deformation, negative values will result in negative deformation (really funny looking)

bool [notDeformable](#notdeformable)  default: false 

Setting it to 1 means that no explosions can deform the map.

float [gravity](#gravity)  default: 130.0 range: \[0.001-max\] 

As you would expect, affects ballistics and how far units fly after an explosion. The force of gravity in units/sec^2

float [tidalStrength](#tidalstrength)  default: 0.0 range: \[0.0-max\] 

The amount of energy which will be given by tidal generators.

float [maxMetal](#maxmetal)  default: 0.02 range: \[0.0-max\] 

How much metal a map square with the maximum metal value gives.

float [extractorRadius](#extractorradius)  default: 500 range: \[0.0-max\] 

The radius of effect that a single extractor will extract from. If two radii intersect, both extractors will suffer from reduced output.

bool [voidWater](#voidwater)  default: false 

Voidwater means there will be no water plane, and all parts of the map under water will be completely transparent, to show the skybox through the map. For example, check <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=20684&amp;hilit=apophis" class="external text" rel="nofollow">Apophis_v2</a>. Additionally for this to work, the `mapinfo.water.planeColor` variable must not be specified in the mapinfo.lua file, delete or comment it out if it exists.

bool [voidGround](#voidground)  default: false New in 92.0

Allows portions of the ground to be invisible if the map was compiled with a diffuse image that has an alpha channel. The terrain still exists, its just transparent..

float [voidAlphaMin](#voidalphamin)  default: 0.9 

Controls what alpha level the transparency trigger..

bool [autoShowMetal](#autoshowmetal)  default: true 

Defines whether the metal map (F4 mode) is shown automatically when a mex is queued for placement.

### smf

    local mapinfo = {
       ...
       smf = {
          minHeight = 1000,
          maxHeight = -300,
          minimapTex = "",
          smtFileName0 = "",
          smtFileName1 = "",
          smtFileName.. = "",
          smtFileNameN = "",
       },
       ...
    }

float [minHeight](#minheight)  default: 0.0 

Overrides the minimum map height specified while compiling. Compile time height used if undefined

float [maxHeight](#maxheight)  default: 0.0 

Overrides the maximum map height specified while compiling. Compile time height used if undefined

string [minimapTex](#minimaptex)  default: ? New in 99.0

Overrides the minimap with an image of your choice, smf used if undefined or invalid

string [metalmapTex](#metalmaptex)  default: ? New in 99.0

Overrides the metalmap with an image of your choice, smf used if undefined or invalid

string [typemapTex](#typemaptex)  default: ? New in 99.0

Overrides the typemap with an image of your choice, smf used if undefined or invalid

string [grassmapTex](#grassmaptex)  default: ? New in 99.0

Overrides the grassmap with an image of your choice, smf used if undefined or invalid

string \[\[#smtFileName\[N\]\|smtFileName\[N\]\]\]  default: ? 

FIXME: 

### sound

    local mapinfo = {
       ...
       sound = {
          preset = "default",

          passfilter = {
             ...
          },

          reverb = {
             ...
          },
       },
       ...
    }

string [preset](#preset)  default: "default" 

Sets the \_reverb\_ preset (= echo parameters), passfilter (the direct sound) is unchanged. To get a list of all possible presets check: <a href="https://github.com/spring/spring/blob/master/rts/System/Sound/OpenAL/EFXPresets.cpp" class="external text" rel="nofollow">EFXPresets.cpp</a>

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<td rowspan="2"><a href="/images/Icon-tip.png"><img src="/images/Icon-tip.png" decoding="async" width="48" height="48" alt="Icon-tip.png" /></a></td>
<td>Tip</td>
</tr>
<tr>
<td>You can change the preset at runtime via:
<ul>
<li>/tset UseEFX [1|0]</li>
<li>/tset snd_eaxpreset preset_name (may change to a real cmd in the future)</li>
<li>/tset snd_filter %gainlf %gainhf (may " " " " " " " " )</li>
</ul></td>
</tr>
</tbody>
</table>

#### passfilter

Note, you likely want to set these tags due to the fact that they are \_not\_ set by \`preset\`! So if you want to create a muffled sound you need to use them.

    local mapinfo = {
       ...
       sound = {
          ...
          passfilter = {
             gainlf = 1.0,
             gainhf = 1.0,
          },
          ...
       },
       ...
    }

float [gainlf](#gainlf)  default: ? 

FIXME: 

float [gainhf](#gainhf)  default: ? 

FIXME: 

#### reverb

Normally you just want use the \`preset\` tag but you can use handtweak a preset if wanted with the following tags. To know their function & ranges check the official OpenAL1.1 SDK document.

    local mapinfo = {
       ...
       sound = {
          ...
          reverb = {         
             --density
             --diffusion
             --gain
             --gainhf
             --gainlf
             --decaytime
             --decayhflimit
             --decayhfratio
             --decaylfratio
             --reflectionsgain
             --reflectionsdelay
             --reflectionspan
             --latereverbgain
             --latereverbdelay
             --latereverbpan
             --echotime
             --echodepth
             --modtime
             --moddepth
             --airabsorptiongainhf
             --hfreference
             --lfreference
             --roomrollofffactor
          },
       },
       ...
    }

### resources

    local mapinfo = {
       ...
       resources = {
          grassBladeTex = "",
          grassShadingTex = "",
          detailTex = "",
          specularTex = "",
          splatDetailTex = "",
          splatDistrTex = "",
          skyReflectModTex = "",
          detailNormalTex = "",
          lightEmissionTex = "",
          parallaxHeightTex = "",
       },
       ...
    }

string [grassBladeTex](#grassbladetex)  default: ? 

Specifies the texture to be used on the grass blades themselves. Green-yellow gradients make for some interesting effects. Defaults to the internally generated blade texture. More Information: [Mapdev:grass](/mapdev-grass)

string [grassShadingTex](#grassshadingtex)  default: ? 

Specifies the color variation of the grass across the map. This defaults to the minimap, so the grass color can match the map color. More Information: [Mapdev:grass](/mapdev-grass)

string [detailTex](#detailtex)  default: ? 

Specifies the detail texture for the map. More Information: [Mapdev:detail](/mapdev-detail)

string [specularTex](#speculartex)  default: ? 

More Information: [Mapdev:specular](/mapdev-specular)

string [splatDetailTex](#splatdetailtex)  default: ? 

More Information: [Mapdev:splatdetail](/mapdev-splatdetail)

string [splatDistrTex](#splatdistrtex)  default: ? 

More Information: [Mapdev:splatdetail](/mapdev-splatdetail)

string [skyReflectModTex](#skyreflectmodtex)  default: ? 

More Information: [Mapdev:skyreflectmod](/mapdev-skyreflectmod)

string [detailNormalTex](#detailnormaltex)  default: ? 

More Information: [Mapdev:normal](/mapdev-normal)

string [lightEmissionTex](#lightemissiontex)  default: ? 

More Information: [Mapdev:lightemission](/mapdev-lightemission)

string [parallaxHeightTex](#parallaxheighttex)  default: ? 

More Information: [Mapdev:parallax](/mapdev-parallax)

### splats

    local mapinfo = {
       ...
       splats = {
          texScales = {0.02, 0.02, 0.02, 0.02},
          texMults  = {1.0, 1.0, 1.0, 1.0},
       },
       ...
    }

float\[4\] [texScales](#texscales)  default: {0.2, 0.2, 0.2, 0.2} 

Scale value for the splat texture in the RGBA channels respectively.

float\[4\] [texMults](#texmults)  default: {1.0, 1.0, 1.0, 1.0} 

Value for the splat texture in the RGBA channels respectively.

### atmosphere

    local mapinfo = {
       ...
       atmosphere = {
          minWind      = 5.0,
          maxWind      = 25.0,

          fogStart     = 0.1,
          fogEnd       = 1.0,
          fogColor     = {0.7, 0.7, 0.8},

          sunColor     = {1.0, 1.0, 1.0},
          skyColor     = {0.1, 0.15, 0.7},
          skyDir       = {0.0, 0.0, -1.0},
          skyBox       = "",

          cloudDensity = 0.5,
          cloudColor   = {1.0, 1.0, 1.0},
       },
       ...
    }

float [minWind](#minwind)  default: 5.0 range: \[0.0-max\] 

The minimum amount of energy the wind on the map will give. is clamped to maxwind

float [maxWind](#maxwind)  default: 25.0 range: \[0.0-max\] 

The maximum amount of energy the wind on the map will give

float [fogStart](#fogstart)  default: 0.1 

The distance from the camera at which the fog will start. `viewRange * fogStart`

float [fogEnd](#fogend)  default: 1.0 

The distance from the camera that fog is opaque. `viewRange * fogEnd`}

rgb [fogColor](#fogcolor)  default: {0.7, 0.7, 0.8} 

The color of the fog and the infinite plane below the world. The values are in the order Red, Green, Blue. However, giving values higher than 1.0 will give brighter fog and less than 0.0 will give darker

rgb [sunColor](#suncolor)  default: {1.0, 1.0, 1.0} 

The color of the sun in the sky. The values are in the order Red, Green, Blue. This will also effect the size of the star. As the values increase (including over 1.0), the disc will get bigger; the inverse is also true

rgb [skyColor](#skycolor)  default: {0.1, 0.15, 0.7} 

The color of the sky itself. The values are in the order Red, Green, Blue

float\[3\] [skyDir](#skydir)  default: {0.0, 0.0, -1.0} 

Is normalised vector

string [skyBox](#skybox)  default: ? 

Specify a .dds skybox (also called skycube) for examples and resources see this <a href="http://springrts.com/phpbb/viewtopic.php?f=56&amp;t=11009" class="external text" rel="nofollow">thread</a>

float [cloudDensity](#clouddensity)  default: 0.5 range: \[0.0-max\] 

The amount of clouds in the sky

rgb [cloudColor](#cloudcolor)  default: {1.0, 1.0, 1.0} 

The color of the clouds

### grass

The shader for grass color at <a href="https://github.com/spring/spring/blob/266b51ad4c0301103e269a13f8e72f9c26511b4e/cont/base/springcontent/shaders/GLSL/GrassFragProg.glsl#L48" class="external free" rel="nofollow">https://github.com/spring/spring/blob/266b51ad4c0301103e269a13f8e72f9c26511b4e/cont/base/springcontent/shaders/GLSL/GrassFragProg.glsl#L48</a> samples grassBladeTex, and multiplies it with grassShadingTex (which defaults to minimap)

    local mapinfo = {
       ...
       grass = {
          bladeWaveScale = 1.0,
          bladeWidth  = 0.32,
          bladeHeight = 4.0,
          bladeAngle  = 1.57,
          bladeColor  = {0.59, 0.81, 0.57},
          maxStrawsPerTurf = 150,
       },
       ...
    }

float [bladeWaveScale](#bladewavescale)  default: 1.0 

Specifies how much the wind should effect grass blade movement, as well as the amplitude of the grass motion. Setting it to 0 will stop grass animation

float [bladeWidth](#bladewidth)  default: 0.32 

Specifies the width of each blade of grass

float [bladeHeight](#bladeheight)  default: 4.0 

Specifies the length of each blade of grass

float [bladeAngle](#bladeangle)  default: 1.57 

Specifies the curvature of each blade of grass. Unit is radians. 0 means completely straight blades of grass

int [maxStrawsPerTurf](#maxstrawsperturf)  default: 150 

The maximum number of grass blades per 'turf', A turf is approximately 32x32 elmos.

rgb [bladeColor](#bladecolor)  default: {0.59, 0.81, 0.57} 

does nothing when \`grassBladeTex\` is set

### Lighting

    local mapinfo = {
       ...
       lighting = {
          --// dynsun
          sunStartAngle = 0.0,
          sunOrbitTime  = 1440.0,
          sunDir        = {0.0, 1.0, 2.0, 1e9},

          --// unit & ground lighting
          groundAmbientColor  = {0.5, 0.5, 0.5},
          groundDiffuseColor  = {0.5, 0.5, 0.5},
          groundSpecularColor = {0.1, 0.1, 0.1},
          groundShadowDensity = 0.8,
          unitAmbientColor    = {0.4, 0.4, 0.4},
          unitDiffuseColor    = {0.7, 0.7, 0.7},
          unitSpecularColor   = {0.7, 0.7, 0.7},
          unitShadowDensity   = 0.8,
          
          specularExponent    = 100.0,
       },
       ...
    }

float [sunStartAngle](#sunstartangle)  default: 0.0 

FIXME: 

float [sunOrbitTime](#sunorbittime)  default: 1440.0 

FIXME: 

float\[3\] [sunDir](#sundir)  default: {0.0, 1.0, 2.0} 

The direction of the sun, which is normalized by Spring. The Y-axis is up

rgb [groundAmbientColor](#groundambientcolor)  default: {0.5, 0.5, 0.5} 

The ambient (non-sun-lit) color of ground, grass, trees and other features. The values are in the order Red, Green, Blue

rgb [groundDiffuseColor](#grounddiffusecolor)  default: {0.5, 05, 0.5} 

The color of ground where it is fully sun lit (added to GroundAmbientColor). The values are in the order Red, Green, Blue

rgb [groundSpecularColor](#groundspecularcolor)  default: {0.1, 0.1, 0.1} 

and its effect when a specular map is present?

float [groundShadowDensity](#groundshadowdensity)  default: 0.8 

How far from the non shadowed to the ambient color stuff in shadow will go.

float [unitAmbientColor](#unitambientcolor)  default: {0.4, 0.4, 0.4} 

The ambient (non-sun-lit) color of units and corpses

rgb [unitDiffuseColor](#unitdiffusecolor)  default: {0.7, 0.7, 0.7} 

The color of units where they is fully sun lit (added to UnitAmbientColor). The color of units where they is fully sun lit (added to UnitAmbientColor)

rgb [unitSpecularColor](#unitspecularcolor)  default: unitDiffuseColor 

FIXME: 

float [unitShadowDensity](#unitshadowdensity)  default: 0.8 

How far from the non shadowed to the ambient color stuff in shadow will go

float [specularExponent](#specularexponent)  default: 100 

FIXME: 

### water

    local mapinfo = {
       ...
       water = {
          damage =  0.0,

          repeatX = 0.0,
          repeatY = 0.0,

          absorb    = {0.0, 0.0, 0.0},
          baseColor = {0.0, 0.0, 0.0},
          minColor  = {0.0, 0.0, 0.0},

          ambientFactor  = 1.0,
          diffuseFactor  = 1.0,
          specularFactor = 1.0,
          specularPower  = 20.0,

          planeColor = {0.0, 0.4, 0.0},

          surfaceColor  = {0.75, 0.8, 0.85},
          surfaceAlpha  = 0.55,
          diffuseColor  = {1.0, 1.0, 1.0},
          specularColor = {0.5, 0.5, 0.5},

          fresnelMin   = 0.2,
          fresnelMax   = 0.8,
          fresnelPower = 4.0,

          reflectionDistortion = 1.0,

          blurBase      = 2.0,
          blurExponent = 1.5,

          perlinStartFreq  =  8.0,
          perlinLacunarity = 3.0,
          perlinAmplitude  =  0.9,
          windSpeed = 1.0, --// does nothing yet

          shoreWaves = true,
          forceRendering = false,

          --// undefined == load them from resources.lua!
          --texture =       "",
          --foamTexture =   "",
          --normalTexture = "",
          --caustics = {
          --   "",
          --   "",
          --},

       },
       ...
    }

float [damage](#damage)  default: 0.0 

Number of hit points per game frame (30 frames per second) a unit will be damaged if it is in the water. As of 95.0 by default damage is also applied to hovercraft units. i wonder if this can be made to give life...?

float [repeatX](#repeatx)  default: 0.0 

effects the filing frequency of the watertexture. E.g. how many times the watertexture (default ocean.jpg) will be repeated across the size of the entire map. Only affects basic water. Sane ranges\[1-32\]

float [repeatY](#repeaty)  default: 0.0 

effects the filing frequency of the watertexture. E.g. how many times the watertexture (default ocean.jpg) will be repeated across the size of the entire map. Only affects basic water. Sane ranges\[1-32\]

rgb [absorb](#absorb)  default: {0.0, 0.0, 0.0} 

How fast different colors (RGB in order) are absorbed by the water. Can be used to make the water look murky at deeper sections and so on. How this works: the waterabsorb value for the color channel gets multiplied by the depth of the water at a point, and this product gets subtracted from WaterBaseColor, until WaterMinColor is reached. Example: WaterAbsorb is 0.01, for the red channel, and we want to know how much red will be left in the water at a Spring elevation of -100, since 0.01\*100= 1 , at this depth, there will be no more red component in the water, unless WaterMinColor is higher than 0 on the red channel

rgb [baseColor](#basecolor)  default: {0.0, 0.0, 0.0} 

The color of the water just beneath the surface plane. This is the starting color from which deeper waters will absorb more color. The values are in the order Red, Green, Blue

rgb [minColor](#mincolor)  default: {0.0, 0.0, 0.0} 

The smallest values the water will go down to due to WaterAbsorb

float [ambientFactor](#ambientfactor)  default: 1.0 

How much ambient (undirected) light (ambientColor) the water surface has

float [diffuseFactor](#diffusefactor)  default: 1.0 

How much diffuse (sun lit, diffuseColor) color will be applied to the water surface

float [specularFactor](#specularfactor)  default: 1.0 

Specifies how much light is reflected from the sun, sane range \[0-5\]

float [specularPower](#specularpower)  default: 20.0 

Specifies how 'polished' the surface of the water is. Small values provide wide, large reflections of the sun (specularcolor), large values provide more pointlike reflections, sane range \[1-256\]

rgb [planeColor](#planecolor)  default: {0.0, 0.4, 0.0} 

This sets the color of the groundplane under the water outside the map boundaries

rgb [surfaceColor](#surfacecolor)  default: {0.75, 0.8, 0.85} 

The color of the water surface. Mostly affects the colors of the reflections off the top of the water. Has no effect on bump mapped water!

float [surfaceAlpha](#surfacealpha)  default: 0.55 

Transparency of the water surface. 0 meaning almost fully transparent water plane(low amount of reflections visible), and 1 being nearly opaque (massive amount of reflections)

rgb [diffuseColor](#diffusecolor)  default: value 

This specifies the diffuse color of the water body. WARNING: use of this tag disables the effect of WaterAbsorb , in fact, this tag does nothing but disable WaterAbsorb. Avoid

rgb [specularColor](#specularcolor)  default: lighting.groundDiffuseColor 

This will be the color of specular reflections coming from the sun only on the water surface

float [fresnelMin](#fresnelmin)  default: 0.2 

This defines the minimum amount of light the water surface will reflect when looking vertically down on it \[0-1\]. Small values will make the water very transparent (non-reflective) when looking straight down on it. Large values will make the water reflect a lot even when looking straight down.

float [fresnelMax](#fresnelmax)  default: 0.8 

This defines the maximum amount of light the water surface will reflect when looking horizontally (parallel to the water plane) across it \[0-1\]. Small values will make the water very transparent (non-reflective) even when looking straight across it. Large values will make the water reflect a lot when looking across.

float [fresnelPower](#fresnelpower)  default: 4.0 

This is how quickly the water reflectivity goes from fresnelmin to fresnelmax depending on the angle of incidence across the water. <a href="https://github.com/spring/spring/blob/a8cf33ad1d2ac775e6008cd04baa7e859d1f23ec/cont/base/springcontent/shaders/GLSL/bumpWaterFS.glsl#L288" class="external text" rel="nofollow">reflColor.a = FresnelMin + FresnelMax * pow(angle, FresnelPower);</a>

float [reflectionDistortion](#reflectiondistortion)  default: 1.0 

How much the surface should distort reflections that are cause by waves not being level: ergo it adds more choppyness to your reflections sensible from 0 to 20

float [blurBase](#blurbase)  default: 2.0 

Something to do with blur, but it just seems to cause banding with values under 2 and corruption with values above 10

float [blurExponent](#blurexponent)  default: 1.5 

How much reflections on water surface should be blurred together with the water surface, lower values meaning clearer reflections, (0.2-5) Warning: above 5 seems to cause water corruption

float [perlinStartFreq](#perlinstartfreq)  default: 8.0 

Wave sizes, smaller = big waves, sensible: \[1,20\] (influence the wave sizes)

float [perlinLacunarity](#perlinlacunarity)  default: 3.0 

Defines the size of the perlin waves, small values being big waves (\[0.2,5\] is sensible)

float [perlinAmplitude](#perlinamplitude)  default: 0.9 

Base stillness of water surface, 0 is dead still, 1 is 'windy' .This doesnt affect the bump texture depth, besides the fact that this disables the bump texture when set to 0

float [windSpeed](#windspeed)  default: 1.0 

does nothing yet

bool [shoreWaves](#shorewaves)  default: true 

FIXME: 

bool [forceRendering](#forcerendering)  default: true 

FIXME: 

will have to ask about those undefined tags

### teams

    local mapinfo = {
       ...
       teams = {
          [0] = {startPos = {x = 2033, z = 852&#125;&#125;,
          [1] = {startPos = {x = 10134, z = 852&#125;&#125;,
          [2] = {startPos = {x = 0, z = 0&#125;&#125;,
          [3] = {startPos = {x = 0, z = 0&#125;&#125;,
          ...
       },
       ...
    }

Holds an array of start positions

### terrainTypes

    local mapinfo = {
       ...
       terrainTypes = {
          [0] = {
             name = "Default",
             hardness = 1.0,
             receiveTracks = true,
             moveSpeeds = {
                tank  = 1.0,
                kbot  = 1.0,
                hover = 1.0,
                ship  = 1.0,
             },
          },
          [1]  = { 
             ...
          },
          ...
       },
       ...
    }

Holds an array of start types where each element contains:

string [name](#name)  default: ? 

A label for the terrain type

float [hardness](#hardness)  default: 1.0 range: \[0.001-max\] 

Used as a multiplier against the mapinfo.mapHardness value. Can be used to make a particular terrain type softer or harder. A value of '1' will make it as hard as MapHardness, and 0.5 will make it half as hard

bool [receiveTracks](#receivetracks)  default: true 

Effects whether track decals will be placed on the ground from moving vehicles

float [moveSpeeds.tank](#movespeedstank)  default: 1.0 range: \[0.0-max\] 

Speed multiplier for tanks when travelling on the parent terrain type. A value of '1.0' is normal speed, 0.5 will make them travel at half speed on the parent terrain type

float [moveSpeeds.kbot](#movespeedskbot)  default: 1.0 range: \[0.0-max\] 

Speed multiplier for kbots when travelling on the parent terrain type. A value of '1.0' is normal speed, 0.5 will make them travel at half speed on the parent terrain type

float [moveSpeeds.hover](#movespeedshover)  default: 1.0 range: \[0.0-max\] 

Speed multiplier for hovercraft when travelling on the parent terrain type. A value of '1.0' is normal speed, 0.5 will make them travel at half speed on the parent terrain type

float [moveSpeeds.ship](#movespeedsship)  default: 1 range: \[0.0-max\] 

Speed multiplier for ships when travelling on the parent terrain type. A value of '1.0' is normal speed, 0.5 will make them travel at half speed on the parent terrain type

### custom

    local mapinfo = {
       ...
       custom = {
          fog = {
             color    = {0.26, 0.30, 0.41},
             height   = "80%", --// allows either absolue sizes or in percent of map's MaxHeight
             fogatten = 0.003,
          },
          precipitation = {
             density   = 30000,
             size      = 1.5,
             speed     = 50,
             windscale = 1.2,
             texture   = 'LuaGaia/effects/snowflake.png',
          },

       },
       ...
    }

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:mapinfo.lua](https://springrts.com/wiki/Mapdev:mapinfo.lua).*
