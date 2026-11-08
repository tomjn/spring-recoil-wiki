---
title: "User:Smoth"
source_url: "https://springrts.com/wiki/User:Smoth"
---
# User:Smoth

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

<a href="https://www.youtube.com/watch?v=ShNUz8dXTIY" class="external free" rel="nofollow">https://www.youtube.com/watch?v=ShNUz8dXTIY</a> ^ gimp texturing in a similar style to my own for those who are poor and DON'T have a pegleg and a cutlas. \[09:09:47\] \<\[LCC\]jK\> truth is there are only 2 facts: synced can never READ unsynced data, and unsynced can never WRITE synced data \[09:10:02\] \<\[LCC\]jK\> everything else is allowed

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/ShNUz8dXTIY" title="M203 {Speed texture in Blender 3D and GIMP}" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

Plans for game developer restructure:\
3 sections, beginer, intermediate and advanced.

Game creation:\

Beginner:(1 star)

1.  focus on how does I get my game in spring
2.  how can I alter what is already there
3.  stay within knorkes beginner game, we want to have the user in a sort of sandbox.
4.  think mutator

Intermediate:(2 stars)

1.  focus on creating your own content and using it in game
2.  introduce them into existing resources lua/models/art
3.  most tutorials will be located here.
4.  think mod

Advanced:(3 stars)

1.  person is experience programmer or familiar with spring already.
2.  no tutorials, just informational links, this person wants information not how tos.

Map creation:

1.  pretty much just a big dump of all the map related resources for now.

**Notes for SimpleParticleSystem:**

- **float3 pos**\
  Origon point for your particle system.
- **[AtlasedTexture](/gamedev-glossary) texture**\
  Texture for the particles, defined in resources.tdf.
- **float3 emitVector**\
  Use DIR to have it acquire a direction, this will utilize a poly on your object that you choose as an emitter.\
  \
  See my notes on vectors to understand how to use the vectors of this:\
  *i.e. 0,1,0 is straight up*
- **[CColorMap](/gamedev-glossary) colorMap**\
  This will give your system a range of colors spread over time.\
  it has 4 parts:\
  RED, GREEN, BLUE, ALPHA\
  \
  note:\
  For additive blend use values that are low like: 0.1 or 0.05\
  For overlay use 1.0\
  see notes on overlay versus additive blend.
- **float3 gravity**\
  Gravity applied along a vector.\
  \
  For example, if you want your particles to fall after being emmited.\
  Emitvector would be: 0,1,0\
  and gravity would need to be 0,-1,0\
  This would result in particles falling straight down.
- **float airdrag**\
  Constant multiplier on the particle each frame, a value of 1.0 means the particles will keep their current momentum, a value bellow 1 and they will slow down each frame.
- **float particleLife**\
  Life of the particles in frames.
- **float particleLifeSpread**\
  Random number between 0 and particleLifeSpread added to particleLife.
- **int numParticles**\
  Number of particles that will be spawned.
- **float particleSpeed**\
  Initial speed of the particles.
- **float particleSpeedSpread**\
  Random number between 0 and particleSpeedSpread added to particleSpeed.
- **float particleSize**\
  Size of the particles.
- **float particleSizeSpread**\
  Random number between 0 and particleSizeSpread added to particleSize.
- **float sizeGrowth**\
  Size added to particles each frame.
- **float sizeMod**\
  Size frame multiplier.
- **float emitRot**\
  Rotation in degree from emitVector that particles will be spawned from, a value of 90 will emmit particles in a plane perpendicular to the emitVector.
- **float emitRotSpread**\
  Random number between 0 and emitRotSpread added to emitRot, a value of 180 will make the particles spawn in a full sphere.
- **bool directional**\
  If the particles should be oriented to point at the direction of their velocity.

**Notes vectors:**

- Vectors are directional systems represented by a 3d graph here: [<img src="/images/Untitled-1.png" class="mw-file-element" decoding="async" width="500" height="384" />](/images/Untitled-1.png)\
  See how each vector points along it's own line?\
  We have 6 possible directions:\

X = right\
-X = left\
Z = Front\
-Z = Rear\
Y = Up\
-Y = Down

WORK IN PROGRESS!

**Notes Additive blend versus overlay blend:** WORK IN PROGRESS!

- ADDTITIVE
- OVERLAY

IsShield=1; // if 1 mean the weapon is a shield and not a weapon shieldrepulser=1; // 0=destroy projectile,1=repulse (bounce) projectile smartshield=1; // 1=shield doesnt affect allies weapons exteriorshield=1; // 1=shield doesnt affect weapons fired from within shield visibleshield=1; // 1=see a visible shell representing the shield visibleshieldrepulse=1; // 1=see a beam showing when shield repulses something shieldenergyuse=10; // how much energy the shield use when repulsing/destroying something shieldforce=1000; // how hard shield can accelerate some sort of projectiles away shieldradius=30; // size of shield effect shieldmaxspeed=1100; // maximum speed the shield can push some sort of projectiles away shieldpower=300; // how much power the shield can store, power is drained by the affected weapons damage, 0=infinite shieldpowerregen=5; // how fast the shield regenerates power shieldpowerregenenergy=10; // how much energy the shield uses when regenerating power shieldintercepttype=2; // which types of weapon the shield can affect (bitfield) //interceptedbyshieldtype=; // which types of shields can affect this weapon, if (shieldInterceptType & interceptedByShieldType) is not zero the shield can affect the weapon, default 1 for plasma, 2 for laser, 4 for missiles, 0 for other shieldgoodcolor=0.0 0.05 0.75; // color of shield when power is full shieldbadcolor=0.6 0.05 0.75; // color of shield when power is empty shieldalpha=1; // how visible the shield shell is with visibleshield=1

## SMOTHS SVN STUFFS!

### Credentials

This is a limited acess account to allow people to go in and read/test code bits. I am not officially releasing ANYTHING in this svn. Just that it is here for people to read and try things out for the betterment of the community.

**User: tester**

**Pass: rageflame**

### Spring TD

I have no idea WHAT is in here, just a bunch of stuff from the old spring towerdefense project. I am not sure if it even works. it is a largely untested/unmaintained vaporware wasteland.

<a href="https://venture2.projectlocker.com/GundamRTSdevs/Spring_TD/svn" class="external free" rel="nofollow">https://venture2.projectlocker.com/GundamRTSdevs/Spring_TD/svn</a>

### my halloween thing

just a bunch of stuff from a while back was mostly just trying out some ideas. Another lua testbed where I played with some ideas. Not all code is complete or actually properly done/functional. Some more recent chili tinkering. Nothing big yet just a bunch of random stuff.

<a href="https://venture2.projectlocker.com/GundamRTSdevs/Halloween/svn" class="external free" rel="nofollow">https://venture2.projectlocker.com/GundamRTSdevs/Halloween/svn</a>

### My test bed for my next project

contains several sdds, they just get them all.

<a href="https://venture2.projectlocker.com/GundamRTSdevs/RTSCore/svn" class="external free" rel="nofollow">https://venture2.projectlocker.com/GundamRTSdevs/RTSCore/svn</a>

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Smoth). Original page: [User:Smoth](https://springrts.com/wiki/User:Smoth).*
