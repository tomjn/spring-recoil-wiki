---
title: "CEG:Defs"
source_url: "https://springrts.com/wiki/CEG:Defs"
categories:
  - "CEG"
---
# CEG:Defs

<div id="ceg-definitions" class="section mw-parser-output">

## CEG Definitions

### Source

The engine source code which loads the tags from these files is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Projectiles/" class="external text" rel="nofollow">rts/Sim/Projectiles/</a>
- <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Projectiles/Unsynced/" class="external text" rel="nofollow">rts/Sim/Projectiles/Unsynced/</a>
- <a href="https://github.com/spring/spring/blob/106.0/rts/Rendering/GroundFlash.cpp" class="external text" rel="nofollow">rts/Rendering/GroundFlash.cpp</a>

### Data Types

CEGs use the following data types:

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

You can use [CEG:Operators](/ceg-operators) to define floats that are not fixed.

### CEG Textures

- Textures on CEG definitions are referenced by name.
- The list of available textures and their names should be in [resources.lua](/resources.lua)
- Texture definitions to be used in projectile classes should be placed within the `projectiletextures` category and textures to be used with [\#CSimpleGroundFlash](#csimplegroundflash) class should be placed within the `groundfx` category.
- Texture images are usually placed in the "bitmaps" subfolder.

### Overall Format

A CEG file contains one or more CEGs. Each CEG follows this format:

    return {
      ["ceg_name"] = {
        -- EXPLOSION LEVEL
        useDefaultExplosions = false,

        spawner1_name = {
          -- SPAWNER LEVEL
          class         = "CClassName",
          count              = 1,
          air                = true,
          ground             = true,
          water              = true,
          properties = {
            -- CLASS LEVEL
            },
          },
        },
        spawner2_name = {
          -- SPAWNER LEVEL
          -- each spawner follows the above format
        },
        groundflash = {
          -- groundflash is a special spawner name; it always generates a CStandardGroundFlash
          -- CStandardGroundFlash properties
        },
        -- other special spawner names exist, although their use is discouraged in favour of class="CSomeClass"
        -- see https://github.com/spring/spring/blob/develop/cont/base/springcontent/gamedata/explosion_alias.lua#L61
      },
    }

### Explosion Level Tags

bool [useDefaultExplosions](#usedefaultexplosions)  default: false 

If this is set, the CEG will use the default explosion (based on damage and area of effect) in addition to any spawners you define. The default explosions are sometimes very performance heavy, especially for large damage values (leading to higher particle counts).

### Spawner Level Tags

A CEG can contain any number of spawners. The name of the spawners don't really matter, as long as it's not `groundflash`, which has a special meaning. You can think of each spawner as being one component of the overall explosion.

string [class](#class)  default: spawner_name 

Each spawner has a class that determines what kind of graphical effect it creates. Spring has a number of standard classes that you can choose from. Currently available classes are:

- [CExpGenSpawner](#cexpgenspawner)
- [CBitmapMuzzleFlame](#cbitmapmuzzleflame)
- [CExploSpikeProjectile](#cexplospikeprojectile)
- [CHeatCloudProjectile](#cheatcloudprojectile)
- [CSimpleParticleSystem](#csimpleparticlesystem)
- [CSpherePartSpawner](#cspherepartspawner)
- [CSimpleGroundFlash](#csimplegroundflash)
- [CStandardGroundFlash](#cstandardgroundflash)

int [count](#count)  default: 1 

The count determines the number of times the spawner will run.

#### Visibility Conditions

These determine under what conditions the spawner will run. If you set the condition to true, the spawner will run if the explosion takes place under that condition. If you set more than one condition, the spawner will run if *any* of them are true. If you want a spawner to run only if two or more conditions are *all* true, you have to do a little trick with the [\#CExpGenSpawner](#cexpgenspawner) class as explained in "suggested use".

bool [air](#air)  default: false 

The CEG will run if at least 20 [elmos](/gamedev-unitsofmeasurement) above ground/sea level.

bool [water](#water)  default: false 

The CEG will run if in water to a depth of -5 [elmos](/gamedev-unitsofmeasurement).

bool [underwater](#underwater)  default: false 

The CEG will run if under water deeper than 5 [elmos](/gamedev-unitsofmeasurement).

bool [ground](#ground)  default: false 

The CEG will run if less than 20 [elmos](/gamedev-unitsofmeasurement) above ground.

bool [unit](#unit)  default: false 

The CEG will run if the weapon hits a unit.

bool [nounit](#nounit)  default: false 

The CEG will run if the weapon does not hit a unit.

### Class Level Tags

#### Common Properties

All classes have the following properties, although not all of them use them:

bool [alwaysVisible](#alwaysvisible)  default: false 

If true, the spawner is always visible, ignoring LoS. Note that prior to 98.0 this did not work correctly.

bool [useAirLos](#useairlos)  default: false 

Whether the spawner uses air LoS to determine if it is visible. This may allow the spawner to be seen from a further distance than normal.

float\[3\] [pos](#pos)  default: {0.0, 0.0, 0.0} 

The initial position vector of the spawner.

float\[3\] [speed](#speed)  default: {0.0, 0.0, 0.0} 

The initial speed vector of the spawner.

float\[3\] [dir](#dir)  default: ? 

The initial direction vector of the spawner.

#### CExpGenSpawner

This is the closest thing CEG has to a function call. Instead of creating a graphical effect on its own, it creates another CEG.

##### Suggested Use

- If you use a spawner a lot of times, you may want to make it a separate CEG to avoid having to copy-paste many times.
- This is the only way to truly delay a graphical effect.
- The spawned CEG still checks conditions, so if you want to, say, spawn an effect only if it is in water *and* doesn't hit a unit, you can give the CExpGenSpawner `nounit = 1;` and the spawned `CEG water = 1;`.
- This allows you to give a set of spawners the same (and possibly random) direction.
- You can animate an explosion flip-book style using delays and several bitmaps.

##### Properties

int [delay](#delay)  default: 1 

How long to wait (in frames?) before spawning the CEG.

float [damage](#damage)  default: 0.0 

The CEG will be called with this damage. The CEG doesn't actually deal any damage, but you can use this as a parameter and read it using the ['d' operator](/ceg-operators#damage-2827d2729).

string [explosionGenerator](#explosiongenerator)  default: "" 

The name of the CEG you want to spawn.

#### CBitmapMuzzleFlame

This creates three rectangular textures at right angles to each other. The [frontTexture](#fronttexture) has [dir](#dir) as its normal.

##### Suggested Use

- Muzzle flames, obviously.
- You can use an upward-pointing CBitmapMuzzleFlame as a simple splash of water or dirt.
- Railgun trails.
- This is the only class that both obeys perspective and allows for a custom texture.

##### Properties

string [sideTexture](#sidetexture)  default: "" 

Texture as viewed from the side.

string [frontTexture](#fronttexture)  default: "" 

Texture as viewed from the front.

string [colorMap](#colormap)  default: "" 

See [CColorMap](/gamedev-glossary).

float [size](#size)  default: 0.0 

The initial width of the muzzle flame.

float [length](#length)  default: 0.0 

The initial length of the muzzle flame.

float [sizeGrowth](#sizegrowth)  default: 0.0 

By the end of its life, the muzzle flame grows to `1 + sizeGrowth` times its initial [size](#size) and [length](#length). The flame grows quickly at first and more slowly toward the end.

int [ttl](#ttl)  default: 0 

How long the muzzle flame lasts.

float [frontOffset](#frontoffset)  default: 0.0 

Where the frontTexture is along the length of the muzzle flame. `0` means it is in the back, `1` is in the front.

#### CExploSpikeProjectile

This creates a glowy spike. Note that the spike is two sided, i.e., symmetric about the position of the spawner.

##### Suggested Use

- Anything glowy.
- For large, slow missiles, you can try using this as an extended engine flame. Set the width to something fairly large.
- Long and thin spikes will look spiky; meanwhile, shorter and wider spikes look more blobby.
- The colors of spikes add together, so if you have several spikes and all three color channels are non-zero, it will be white in the center.
- The length growth of the spike depends on the norm of the dir vector. The spike does not grow in width.

##### Properties

float [length](#length)  default: 0.0 

The initial length of (half) of the spike (multiplied by [dir](#dir)).

float [lengthGrowth](#lengthgrowth)  default: dir.Length() \* (0.5 + RandFloat() \* 0.4) 

How much the length increases by per update.

float [width](#width)  default: 0.0 

Half the initial width of of the spike. This is an absolute value.

float [alpha](#alpha)  default: 0.0 

The starting alpha of the spike.

float [alphaDecay](#alphadecay)  default: 0.0 

How quickly the alpha of the spike decreases.

rgb [color](#color)  default: {1.0, 0.8, 0.5} 

The color of the spike.

#### CHeatCloudProjectile

Creates an expanding sprite. Simple but effective.

##### Suggested Use

- As the main background to an explosion.

##### Properties

float [heat](#heat)  default: 0.0 

Used in alpha calculations. See [heatFalloff](#heatfalloff).

float [maxheat](#maxheat)  default: 0.0 

Used in alpha calculations. See [heatFalloff](#heatfalloff).

float [heatFalloff](#heatfalloff)  default: 0.0 

This is really confusing way of representing alpha and alphaDecay. Basically `alpha = `[heat](#heat)`/`[maxheat](#maxheat), and `alphaDecay = `[heatFalloff](#heatfalloff)`/`[maxHeat](#maxheat).

float [size](#size)  default: 0.0 

The initial radius of the heatcloud.

float [sizeGrowth](#sizegrowth)  default: 0.0 

The heatcloud grows by this amount every frame.

float [sizeMod](#sizemod)  default: 0.0 

The size of the heatcloud is multiplied by `1 - sizeMod`.

float [sizeModMod](#sizemodmod)  default: 0.0 

Each frame, [sizeMod](#sizemod) is multiplied by [sizeModMod](#sizemodmod).

string [texture](#texture)  default: "heatcloud" as referenced in [resources.lua](/resources.lua) 

The texture used for the heatcloud.

#### CSimpleParticleSystem

Creates a sprite that can undergo complex motion. Probably the most versatile class.

##### Suggested Use

- Anything moving that is not doing so at constant velocity.
- If you want something that expands (or shrinks) to some size then stops, set [sizeMod](#sizemod) to something less than `1`, and [sizeGrowth](#sizegrowth) to something positive. The particle will grow to a size equal to `sizeGrowth / (1 - sizeMod)` and stop. The smaller [sizeMod](#sizemod) is, the faster it will reach this size.

##### Properties

###### Initial Velocity Properties

float\[3\] [emitVector](#emitvector)  default: {0.0, 0.0, 0.0} 

The initial direction vector in which the particle is emitted. When spawning CEGs via EmitSfx you can make the particles go into the direction of the emiting piece with [emitvector](#emitvector) = dir. This is useful for e.g. fire coming out of a gun barrel.

float [emitRot](#emitrot)  default: 0.0 

At what angle to emit the particle relative to [emitVector](#emitvector). `0` means that the particle will be emitted in [emitVector](#emitvector)'s direction; `180` will emit the particle in the opposite direction. `90` will emit the particle in a random direction perpendicular to [emitVector](#emitvector), which is good for creating rings.

float [emitRotSpread](#emitrotspread)  default: 0.0 

For each particle, a random number between `0` and [emitRotSpread](#emitrotspread) is added to the [emitRot](#emitrot).

float\[3\] [emitMul](#emitmul)  default: {1.0, 1.0, 1.0} 

Scales the initial particle velocity; for this property, +y is considered to be in the direction of [emitVector](#emitvector). Good if you want to create an egg-shaped explosion.

float [particleSpeed](#particlespeed)  default: 0.0 

The particle's initial speed.

float [particleSpeedSpread](#particlespeedspread)  default: 0.0 

For each particle, a random number between `0` and [particleSpeedSpread](#particlespeedspread) is added to the [particleSpeed](#particlespeed).

###### Movement Properties

float\[3\] [gravity](#gravity)  default: {0.0, 0.0, 0.0} 

This will be added to the particle's velocity every frame.

float [airdrag](#airdrag)  default: 0.0 

The particle's velocity is multiplied by this every frame.

###### Size Properties

float [particleSize](#particlesize)  default: 0.0 

The initial size of the particle.

float [particleSizeSpread](#particlesizespread)  default: 0.0 

For each particle, a random number between `0` and [particleSizeSpread](#particlesizespread) is added to the [particleSize](#particlesize).

float [sizeGrowth](#sizegrowth)  default: 0.0 

How much the particle grows each frame.

float [sizeMod](#sizemod)  default: 0.0 

The size of the particle is multiplied by this each frame.

###### Visual Properties

bool [directional](#directional)  default: false 

If true, the particle will point in the direction it is moving.

string [texture](#texture)  default: "" 

The texture to use for the particle.

string [colorMap](#colormap)  default: "" 

See [CColorMap](/gamedev-glossary).

###### Life Properties

int [numParticles](#numparticles)  default: 0 

How many particles to create. This is not the same as `count`; if you spawn multiple particles using `count`, any [CEG:Operators](/ceg-operators) will be re-evaluated for each particle, whereas if you use [numParticles](#numparticles) they will not be. However, the spread properties are evaluated separately for each particle regardless of which one you use.

float [particleLife](#particlelife)  default: 0.0 

How long each particle lasts.

float [particleLifeSpread](#particlelifespread)  default: 0.0 

For each particle, a random number between `0` and [particleLifeSpread](#particlelifespread) is added to the [particleLife](#particlelife).

#### CSpherePartSpawner

Draws an expanding sphere.

##### Suggested Use

- Looks like a shockwave.

##### Properties

float [alpha](#alpha)  default: 0.0 

The alpha of the sphere.

int [ttl](#ttl)  default: 0 

Time to live, in frames(?).

float [expansionSpeed](#expansionspeed)  default: 0.0 

How quickly the sphere expands.

rgb [color](#color)  default: {0.0, 0.0, 0.0} 

The color of the sphere.

#### CSimpleGroundFlash

Draws an expanding ground texture.

##### Suggested Use

- A short groundflash (~8 frames) is good for any explosion that gives off light. You can also use a longer groundflash to suggest the ground is glowing from heat.

##### Properties

float [size](#size)  default: 0.0 

The radius of the particle.

float [sizeGrowth](#sizegrowth)  default: 0.0 

How much the particle grows each frame.

int [ttl](#ttl)  default: 0 

Time to live, in frames(?).

string [texture](#texture)  default: "" 

The texture to use for the particle.

string [colorMap](#colormap)  default: "" 

See [CColorMap](/gamedev-glossary).

#### CStandardGroundFlash

If you name a spawner "groundflash," it will always generate a standard groundflash.

##### Suggested Use

A short groundflash (~8 frames) is good for any explosion that gives off light. You can also use a longer groundflash to suggest the ground is glowing from heat.

##### Properties

float [flashSize](#flashsize)  default: 0.0 

The radius of the groundflash.

float [flashAlpha](#flashalpha)  default: 0.0 range: \[0, 1\] 

How transparent the groundflash is. Generally the higher the brighter.

float [circleGrowth](#circlegrowth)  default: 0.0 

A groundflash can have an additional circle that expands outwards. This controls how fast the circle grows.

float [circleAlpha](#circlealpha)  default: 0.0 range: \[0, 1\] 

How transparent the circle is.

int [ttl](#ttl)  default: 0 

How long the groundflash lasts.

rgb [color](#color)  default: {1.0, 1.0, 0.8} 

The color of the groundflash.

#### CSmokeProjectile2

( FIXME:  newly added to wiki. someone cross-check then remove this note )

Particles that begin with a hard-coded yellow-red colorfade and then fade to monochrom. (shades of grey)

Movement is influenced by the random wind. Finer details of visual and position update are best explained by looking at the formulas in `CSmokeProjectile2::Update() & CSmokeProjectile2::Draw()`

##### Suggested Use

Smoke. Smokestacks, rocket exhaust, burning wreckage,...

For a nicer stream of smoke spawn it frequently over multiple frames, otherwise it looks rather bland.

##### Properties

float [color](#color)  default: 0.5 

How dark the final monochrom color of a particle is. 0 is black.

(Use \>1 for slightly bugged funnies, like slightly non-monochrome colors or interessting black/white changes.)

float [size](#size)  default: 0.0 

Size of a particle.

float [ageSpeed](#agespeed)  default: 0.5 

How fast the particle ages. Every frame: `age += ageSpeed` The particle is deleted at `if (age > 1)`

float [glowFalloff](#glowfalloff)  default: 0.0 

How fast the particle fades to monochrom.

float3 [wantedPos](#wantedpos)  default: "0,0,0" 

In which direction the smoke tends to drift. Less effective in y-coordinate and influenced by random wind.

float3 [speed](#speed)  default: "0,0,0" 

`wantedPos += speed;` How fast and in which vector the particles move.

hardcoded [texture](#texture)  default: randomly chosen. 

Particles randomly pick one of the smoke textures (bitmaps\smoke) and remain with it until death.

#### CSmokeProjectile

Monochrome particles that fade out. A more "primitive" version of CSmokeProjectile2. No hardcoded red-yellow start but it misses wantedPos to tweak the look a bit more detailed.

##### Suggested Use

Smoke. For a nicer stream of smoke spawn it frequently over multiple frames, otherwise it looks rather bland.

##### Properties

float [color](#color)  default: 0.5 

Brightness of the particle. 0 is black.

float [size](#size)  default: 0.0 

Size of a particle

float [ageSpeed](#agespeed)  default: 0.5 

How fast the particle ages. Every frame: `age += ageSpeed` The particle is deleted at `if (age > 1)`

float3 [speed](#speed)  default: "0,0,0" 

`pos += speed;` How fast and in which vector the particles move.

hardcoded [texture](#texture)  default: randomly chosen. 

Particles randomly pick one of the smoke textures (bitmaps\smoke) and remain with it until death.

### Examples

<a href="http://imolarpg.dyndns.org/trac/balatest/browser/trunk/gamedata/explosions" class="external text" rel="nofollow">'Balanced Annihilation' CEGs</a> (TDF format)

<a href="http://code.google.com/p/conflictterra/source/browse/#svn%2Fgames%2FCT%2Fgamedata%2Fexplosions" class="external text" rel="nofollow">'Conflict Terra' CEGs</a>

<a href="https://github.com/EvolutionRTS/Evolution-RTS/tree/master/Gamedata/explosions" class="external text" rel="nofollow">'Evolution RTS' CEGs</a>

<a href="https://github.com/imperialwinter/swiw.sdd/tree/master/gamedata/explosions" class="external text" rel="nofollow">'Imperial Winter' CEGs</a> (TDF format)

<a href="http://code.google.com/p/journeywar/source/browse/#svn%2Ftrunk%2Fgamedata%2Fexplosions" class="external text" rel="nofollow">'Journeywar' CEGs</a>

<a href="http://sourceforge.net/p/mwspring/code/HEAD/tree/effects/" class="external text" rel="nofollow">'MechCommander: Legacy' CEGs</a> (TDF format)

<a href="https://github.com/spring1944/spring1944/tree/master/effects" class="external text" rel="nofollow">'Spring: 1944' CEGs</a> (TDF format)

<a href="http://code.google.com/p/springtutorialgame/source/browse/#svn%2Ftrunk%2FSpringTutorialGame.sdd%2FGamedata%2Fexplosions" class="external text" rel="nofollow">'Spring Tutorial Game' CEGs</a>

<a href="http://code.google.com/p/xta-springrts/source/browse/#svn%2Ftrunk%2Fgamedata%2Fexplosions" class="external text" rel="nofollow">'XTA' CEGs</a> (TDF format)

<a href="https://github.com/ZeroK-RTS/Zero-K/tree/master/effects" class="external text" rel="nofollow">'ZeroK' CEGs</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [CEG:Defs](https://springrts.com/wiki/CEG:Defs).*
