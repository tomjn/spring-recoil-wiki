---
title: "CEG-Classes"
source_url: "https://springrts.com/wiki/CEG-Classes"
categories:
  - "Delete"
---
# CEG-Classes

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

**Source:** <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Projectiles/" class="external text" rel="nofollow">rts/Sim/Projectiles/</a> <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Projectiles/Unsynced/" class="external text" rel="nofollow">rts/Sim/Projectiles/Unsynced/</a>

## Common Properties

All classes have the following properties, although not all of them use them:

- pos (float3): The initial position of the spawner.
- useAirLos (bool): Whether the spawner uses air LoS to determine if it is visible. This may allow the spawner to be seen from a further distance than normal.
- alwaysVisible (bool): If true, the spawner is always visible, ignoring LoS.
- speed (float3): The initial speed of the spawner.

## CExpGenSpawner

This is the closest thing CEG has to a function call. Instead of creating a graphical effect on its own, it creates another CEG.

Properties:

- delay (int): How long to wait before spawning the CEG.
- dir (float3): The CEG will be called with this direction.
- damage (float): The CEG will be called with this damage. The CEG doesn't actually deal any damage, but you can use this as a parameter and read it using the 'd' operator.
- explosionGenerator (string): The name of the CEG you want to spawn.

Suggested Use:

- If you use a spawner a lot of times, you may want to make it a separate CEG to avoid having to copy-paste many times.
- This is the only way to truly delay a graphical effect.
- The spawned CEG still checks conditions, so if you want to, say, spawn an effect only if it is in water *and* doesn't hit a unit, you can give the CExpGenSpawner `nounit = 1;` and the spawned `CEG water = 1;`.
- This allows you to give a set of spawners the same (and possibly random) direction.
- You can animate an explosion flip-book style using delays and several bitmaps.

## CBitmapMuzzleFlame

This creates three rectangular textures at right angles to each other. The `frontTexture` has `dir` as its normal.

Properties:

- sideTexture (string)
- frontTexture (string)
- dir (float3)
- colorMap (string)
- size (float): The initial width of the muzzle flame.
- length (float): The initial length of the muzzle flame.
- sizeGrowth (float): By the end of its life, the muzzle flame grows to 1 + sizeGrowth times its initial size and length. The flame grows quickly at first and more slowly toward the end.
- ttl (int): How long the muzzle flame lasts.
- frontOffset (float): Where the frontTexture is along the length of the muzzle flame. 0 means it is in the back, 1 is in the front.

Suggested Use:

- Muzzle flames, obviously.
- You can use an upward-pointing CBitmapMuzzleFlame as a simple splash of water or dirt.
- Railgun trails.
- This is the only class that both obeys perspective and allows for a custom texture.

## CExploSpikeProjectile

This creates a glowy spike. Note that the spike is two sided, i.e., symmetric about the position of the spawner.

- length (float): The initial length of (half) of the spike (multiplied by dir).
- width (float): Half the initial width of of the spike. This is an absolute value.
- alpha (float): The starting alpha of the spike.
- alphaDecay (float): How quickly the alpha of the spike decreases.
- dir (float3): The direction of the spike. Not normalized.
- color (float3): The color of the spike.

Suggested Use:

- Anything glowy.
- For large, slow missiles, you can try using this as an extended engine flame. Set the width to something fairly large.
- Long and thin spikes will look spiky; meanwhile, shorter and wider spikes look more blobby.
- The colors of spikes add together, so if you have several spikes and all three color channels are non-zero, it will be white in the center.
- The length growth of the spike depends on the norm of the dir vector. The spike does not grow in width.

## CHeatCloudProjectile

Creates an expanding sprite. Simple but effective.

- heat (float)
- maxheat (float)
- heatFalloff (float)

This is really confusing way of representing alpha and alphaDecay. Basically alpha = heat/maxheat, and alphaDecay = heatFalloff/maxHeat.

- size (float): The initial radius of the heatcloud.
- sizeGrowth (float): The heatcloud grows by this amount every frame.
- sizemod (float): The size of the heatcloud is multiplied by 1 - sizemod.
- sizemodmod (float): Each frame, sizemod is multiplied by sizemodmod.
- texture (string): The texture used for the heatcloud.

Suggested Use:

- As the main background to an explosion.

## CSimpleParticleSystem

Creates a sprite that can undergo complex motion. Probably the most versatile class. Since there are a lot of properties, I'll group them:

### Initial Velocity Properties

- emitVector (float3): The basic direction in which the particle is emitted.

Protip:\
When spawning CEGs via EmitSfx you can make the particles go into the direction of the emiting piece with: `emitvector = dir,` This is usefull for eg fire coming out of a gun barrel.

- emitRot (float): At what angle to emit the particle relative to emitVector. 0 means that the particle will be emitted in emitVector's direction; 180 will emit the particle in the opposite direction. 90 will emit the particle in a random direction perpendicular to emitVector, which is good for creating rings.
- emitRotSpread (float): For each particle, a random number between 0 and emitRotSpread is added to the emitRot.
- emitMul (float3): Scales the initial particle velocity; for this property, +y is considered to be in the direction of emitVector. Good if you want to create an egg-shaped explosion.
- particleSpeed (float): The particle's initial speed.
- particleSpeedSpread (float): For each particle, a random number between 0 and particleSpeedSpread is added to the particleSpeed .

### Movement Properties

- gravity (float3): This will be added to the particle's velocity every frame.
- airdrag (float): The particle's velocity is multiplied by this every frame.

### Size Properties

- particleSize (float): The initial size of the particle.
- particleSizeSpread (float): For each particle, a random number between 0 and particleSizeSpread is added to the particleSize.
- sizeGrowth (float): How much the particle grows each frame.
- sizeMod (float): The size of the particle is multiplied by this each frame.

### Visual Properties

- directional (bool): If true, the particle will point in the direction it is moving.
- texture (string): The texture to use for the particle.
- colorMap (string): The colormap to use for the particle.

### Life Properties

- numParticles (int): How many particles to create. This is not the same as `count`; if you spawn multiple particles using `count`, any [CEG-Operators](/ceg-operators) will be reevaluated for each particle, whereas if you use `numParticles` they will not be. However, the spread properties are evaluated separately for each particle regardless of which one you use.
- particleLife (float): How long each particle lasts.
- particleLifeSpread (float); For each particle, a random number between 0 and particleLifeSpread is added to the particleLife .

Suggested Use:

- This is probably the most versatile class.
- Anything moving that is not doing so at constant velocity.
- If you want something that expands (or shrinks) to some size then stops, set sizeMod to something less than 1, and sizeGrowth to something positive. The particle will grow to a size equal to sizeGrowth/ (1 - sizeMod) and stop. The smaller sizeMod is, the faster it will reach this size.

## CSpherePartSpawner

Draws an expanding sphere.

Properties:

- alpha (float): The alpha of the sphere.
- ttl (int): How long the sphere lasts.
- expansionSpeed (float): How quickly the sphere expands.
- color (float3): The color of the sphere.

Suggested Use:

- Looks like a shockwave.

## CSimpleGroundFlash

Draws an expanding ground texture.

Properties:

- size (float): The radius of the particle.
- sizeGrowth (float): How much the particle grows each frame.
- ttl (int): How long the particle lasts.
- texture (string): The texture to use for the particle.
- colorMap (string): The colormap to use for the particle.

Suggested Use:

- A short groundflash (~8 frames) is good for any explosion that gives off light. You can also use a longer groundflash to suggest the ground is glowing from heat.

## CEG Textures

- Textures on CEG definitions are referenced by name.
- The list of available textures and their names should be on a "resources.tdf" or "resources.lua" file that's usually placed on the "gamedata" subfolder.
- Texture definitions to be used in projectile classes should be placed within the "projectiletextures" category and textures to be used with "CSimpleGroundFlash" class should be placed within the "groundfx" category.
- Texture images are usually placed in the "bitmaps" subfolder.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [CEG-Classes](https://springrts.com/wiki/CEG-Classes).*
