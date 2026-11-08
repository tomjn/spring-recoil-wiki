---
title: "User:Enetheru/Map Features"
source_url: "https://springrts.com/wiki/User:Enetheru/Map_Features"
---
# User:Enetheru/Map Features

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

seriously dammit I cant seem to categorise/organise the various models/animations etc inmy mind so that I can start on docs for them..

afaik, and this is arbitrary, there are CEG's, Features, Units, Buildings, but they are all basically the same thing, some have more detail than others..

so if we lump them under one heading like maps, whats the simplest, and then how can we extend that simple idea?

- Static Model multiple pieces
- textures
- Corpses
- animation scripts
- particles
- Shaders

And in what capacity can they be used in game?

- map feature
- effect
- unit
- building

### Static Map Feature

mapcontainer.sdd/\
   features/\
      feature.lua\
   objects3d/\
      model.obj\
      model_heirarchy.lua\
   unittextures/\
      textures.png\

- [feature.lua](/gamedev-featuredefs)
- model_heirarchy.lua

## Scale

there is a 1:1 ratio for the obj model values to the pixel values of the ground texture. in other words, a 2x2 map that has a texture resolution of 1024x1024 can contain a model that is 1024x1024 dimensions. From my experience, objects need to have dimensions of at least 8^3 otherwise they are too small to be noticed and not worth the trouble.

- the arm commander has a height of 64
- trees are between 32 and 96 in height with the average height at 64.
- rocks and boulders have good sizes at between 16 and 48
- if you take that a house with roof has a good height at 32, then 16 per story, and you get the rough dimensions of 5 units equals 1m. and is a good rule of thumb for making units.

sometimes however it is useful to exaggerate the size of an object, such as grass. to provide a more interesting look.

## caveats

- the tex1 image needs to have a completely black alpha channel so that team colours do not override the diffuse values.
- the UV coordinates need to be mirrored on the V axis(y)(only when not using dds textures)
- rotations clockwise (positive integer only) \[0-65536\] = \[0-360\] degrees
- see also [Trouble-shooting_s3o_units](/trouble-shooting-s3o-units)
- not animatable/scriptable. features are designed to be static. if more complexity is required perhaps units or buildings are a better fit.

## textures

- the more objects in a map that have the same texture atlas the better, it reduces texture context switches and helps performance.
- compiling the dds textures use `nvcompress -bc2 imagename`

## basic defaults

I want to create a table of defaults, for energy/metal/reclaimtime/mass/etc so that new features can be copy pasta'd etc. and i can put presets in my script.

things like:

dimensions of feature(x,y,z) type of feature(grass/shrub/tree/rock

### Trees

- Height between 32 and 64
- crush resistance between 20 and 60 (height \* 1.25 - 20)
- damage between 20-80 (height \* 1.875 - 40)
- 1 metal
- energy between 10-50 (height \* 1.25 - 30)
- reclaim time 44-204 (energy + metal \* 4)

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Enetheru/Map_Features). Original page: [User:Enetheru/Map Features](https://springrts.com/wiki/User:Enetheru/Map_Features).*
