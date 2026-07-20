---
title: "Trouble-shooting s3o units"
source_url: "https://springrts.com/wiki/Trouble-shooting_s3o_units"
categories:
  - "3D_Models"
---
# Trouble-shooting s3o units

<div class="mw-parser-output">

This page assumes you have a working knowledge of Spring unit creation, and will address some common pitfalls in creating s30 units.

## Invisible Unit

**Problem:** Unit spawns projectiles, engine flare, and other fx, as well as functioning correctly, but the model is invisible at any view distance.

**Check:**

- That your s3o has both a radius and height set in [upspring](/upspring).

### Not even emited effects are visible

Make sure the model offset is centered and above ground in [upspring](/upspring).

## Disappearing Unit

**Problem:** Unit operates correctly, including being visible at low zoom levels, but disappears at higher zoom levels, often leaving a small grey blob. Example: ![problemga6.jpg](http://img54.imageshack.us/img54/1278/problemga6.jpg)

**Check:**

- The reduction to grey blob is done by the LOD (Level Of Detail) process in spring. For 3do units, this nicely scales down a full 3d unit to a sprite as you scale out. For s3o, this doesn't work as nicely. There are two things you can do:
  - 1: Make sure your unit has a radius that reflect the model size accurately. The view distance at which LOD kicks in is proportional to unit radius.
  - 2: Make sure your LOD setting in Spring is high enough to actually display the unit correctly.

## Messed up unit texture

**Problem:** Unit looks normal in Upspring but in the game the textures is messed up.

**Solution:** in Upspring, open this menu: Texture Mapping -\> Show UV mapping -\> Edit -\> Flip UV

This will make the model look strange in Upspring but ingame it will actually look normal.

## Unit orientation is wrong

**Problem**: Unit drives sidewards or backwards.

**Solution:** In Upspring rotate your model like this: ![767px-UnitInUpspring_4views.jpg](/images/UnitInUpspring_4views.jpg)

## Model is all white

**Problem**: The unit is all white.

**Solution:** Check if the .s3o has a texture assigned to it and if that texture exists. Upspring usually deletes texture assigment on loading a .s3o, so you have to reassign the texture every time you edit the model.

## Model is all black

**Problem**: The unit is all black. Turning off shadows fixes it.

**Solution:** Normals on model are wrong. Invert the normals in [Upspring](/upspring)

## Model is all blue or another solid color

**Problem**: The unit is completly covered in team color.

**Solution:** No alpha channel on texture, add one.

## Edges supposed to be rounded/smooth are angular

**Problem**: On cylinders, spheres, cones etc. hard edges are visible.

**Solution:** Try the advice from this thread: <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=27122" class="external text" rel="nofollow">round edges on models</a>

## Spawning the unit crashes the engine (pre 85.0)

**Problem**: If the unit is spawned, Spring crashes. It works fine with a different .s3o file.

**Solution:** Check if the .s3o has a texture assigned to it and if that texture exists. Upspring usually deletes texture assigment on loading a .s3o, so you have to reassign the texture every time you edit the model.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Trouble-shooting s3o units](https://springrts.com/wiki/Trouble-shooting_s3o_units).*
