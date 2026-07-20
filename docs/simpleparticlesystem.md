---
title: "Simpleparticlesystem"
source_url: "https://springrts.com/wiki/Simpleparticlesystem"
categories:
  - "Delete"
---
# Simpleparticlesystem

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

**Propertiers for SimpleParticleSystem:**

- **float3 pos**\
  Position of the particle system emmiter.\
- **[AtlasedTexture](/gamedev-glossary) texture**\
  Texture for the particles.\
- **float3 emitVector**\
  Vector that describes the direction of the particles, this is then modified by the rotation propertiers.\
- **[CColorMap](/gamedev-glossary) colorMap**\
  Colormap describing the colors of the particles during their lifetime.\
- **float3 gravity**\
  Vector force applied to the particles every frame.\
- **float airdrag**\
  Constant multiplier on the particle each frame, a value of 1.0 means the particles will keep their current momentum, a value bellow 1 and they will slow down each frame.\
- **float particleLife**\
  Life of the particles in frames.\
- **float particleLifeSpread**\
  Random number between 0 and particleLifeSpread added to particleLife.\
- **int numParticles**\
  Number of particles that will be spawned.\
- **float particleSpeed**\
  Initial speed of the particles.\
- **float particleSpeedSpread**\
  Random number between 0 and particleSpeedSpread added to particleSpeed.\
- **float particleSize**\
  Size of the particles.\
- **float particleSizeSpread**\
  Random number between 0 and particleSizeSpread added to particleSize.\
- **float sizeGrowth**\
  Size added to particles each frame.\
- **float sizeMod**\
  Size frame multiplier.\
- **float emitRot**\
  Rotation in degree from emitVector that particles will be spawned from, a value of 90 will emmit particles in a plane perpendicular to the emitVector.\
- **float emitRotSpread**\
  Random number between 0 and emitRotSpread added to emitRot, a value of 180 will make the particles spawn in a full sphere.\
- **bool directional**\
  If the particles should be oriented to point at the direction of their velocity.\

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Simpleparticlesystem](https://springrts.com/wiki/Simpleparticlesystem).*
