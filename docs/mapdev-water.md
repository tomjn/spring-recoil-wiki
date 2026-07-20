---
title: "Mapdev:water"
source_url: "https://springrts.com/wiki/Mapdev:water"
categories:
  - "Map_Dev"
---
# Mapdev:water

<div class="mw-parser-output">

## Water

The 'water' engine feature can be used for more than just water, it can be Lava, Slime, and completely invisible for maps in space.

Water is always at zero elevation, the terrain is positioned above and below the water using the `minHeight` and `maxHeight` values(see [Mapdev:height](/mapdev-height)).

Shading of the water is split into two parts; the surface of the water and the surface of the ground under the water

Water has five different rendering modes which can be set ingame by the command:

    /water

0.  basic
1.  reflective
2.  dynamic
3.  reflective&refractive
4.  bumpmapped

The relevant soure code <a href="https://github.com/spring/spring/tree/bfc21aada48a6a606b039819ba55017fe3d4f29d/rts/Rendering/Env" class="external text" rel="nofollow">files</a>

## Specifications

Now because of the various graphical modes, and some options being shared, I've split this into sections.

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

### Options that are always relevant

    local mapinfo = {
       ...
       tidalStrength = 0,
       voidWater = false,
       ...
       water = {
          damage =  0.0,

          absorb    = {0.0, 0.0, 0.0},
          baseColor = {0.0, 0.0, 0.0},
          minColor  = {0.0, 0.0, 0.0},

          forceRendering = false,

          planeColor = {0.0, 0.4, 0.0},
        },
       ...
    }

float [tidalStrength](#tidalstrength)  default: ? 

FIXME: 

bool [voidWater](#voidwater)  default: false 

If true, the water will not be drawn. Also the terrain under the water will not be drawn.

float [damage](#damage)  default: ? 

FIXME: 

float3 [absorb](#absorb)  default: ? 

Used to calculate the colour of the terrain under the water, see below.

float3 [baseCcolor](#baseccolor)  default: ? 

Used to calculate the colour of the terrain under the water, see below.

float3 [minColor](#mincolor)  default: ? 

Used to calculate the colour of the terrain under the water, see below.

The absorb, baseColor and minColor variables are used to alter the colour of the terrain under the water as defined in a glsl shader, see <a href="https://github.com/spring/spring/blob/a71c17d710cc387c484e876971881837ecb0ff10/cont/base/springcontent/shaders/GLSL/SMFFragProg.glsl" class="external text" rel="nofollow">line 163</a>.

bool [forceRendering](#forcerendering)  default: false 

If false, and the minimum height of the terrain is above 1.0, then the water will not be drawn.

float3 [planeColor](#planecolor)  default: {0.0, 0.4, 0.0} 

sets the colour of the horizon water plane, to prevent it from being drawn at all you must comment out this line.

### Basic

|  |
|----|
| [<img src="/images/Water_basic_example.jpg" decoding="async" width="400" height="300" alt="Water basic example.jpg" />](/images/Water_basic_example.jpg) |

Example {.wikitable}

    local mapinfo = {
       ...
       water = {
          repeatX = 0.0,
          repeatY = 0.0,

          --texture = "",
       },
       ...
    }

float [repeatX](#repeatx)  default: 0 

control the texture repetition

float [repeatY](#repeaty)  default: 0 

control the texture repetition

string [texture](#texture)  default: 0 

the texture image to use, searches the ./maps/ directory of the map archive.

### Reflective

|  |
|----|
| FIXME: need to place an image here |

Example {.wikitable}

    local mapinfo = {
       ...
       water = {
          surfaceColor  = {0.75, 0.8, 0.85},
       },
       ...
    }

FIXME: ?

float3f [surfaceColor](#surfacecolor)  default: {0.0, 0.0, 0.0} 

Effects the reflected colour.

### Dynamic

|  |
|----|
| [<img src="/images/Water_dynamic_example.jpg" decoding="async" width="400" height="300" alt="Water dynamic example.jpg" />](/images/Water_dynamic_example.jpg) |

Example {.wikitable}

    local mapinfo = {
       ...
       water = {
          surfaceColor  = {0.75, 0.8, 0.85},
          --foamTexture =   "",
       },
       ...
    }

float3f [surfaceColor](#surfacecolor)  default: {0.0, 0.0, 0.0} 

Effects the reflected colour.

FIXME: ?

### Reflective and Refractive

From what i can tell, this mode is basically the same as the reflective mode, except that it distorts(refracts the light) of objects under the surface.

|  |
|----|
| [<img src="/images/Water_refractive_example.jpg" decoding="async" width="400" height="300" alt="Water refractive example.jpg" />](/images/Water_refractive_example.jpg) |

Example {.wikitable}

    local mapinfo = {
       ...
       water = {
          surfaceColor  = {0.75, 0.8, 0.85},
       },
       ...
    }

float3f [surfaceColor](#surfacecolor)  default: {0.0, 0.0, 0.0} 

Effects the reflected colour.

### Bump Mapped

|  |
|----|
| FIXME: need to place an image here |

Example {.wikitable}

    local mapinfo = {
       ...
       water = {
          ambientFactor  = 1.0,
          diffuseFactor  = 1.0,
          specularFactor = 1.0,
          specularPower  = 20.0,

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

          --foamTexture =   "",
          --normalTexture = "",
          --caustics = {
          --   "",
          --   "",
          --},
          numTiles = 1,
          hasWaterPlane = true,

       },
       ...
    }

FIXME: ?

## Forum Discussions

- <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=28264" class="external text" rel="nofollow">chockolate rain</a> map discussion apparrently has soemthing in it i wanted to keep for later.. cant remember though...
- [water height](/water-height-mapconv-vs.-heightmap)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:water](https://springrts.com/wiki/Mapdev:water).*
