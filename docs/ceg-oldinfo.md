---
title: "CEG-OldInfo"
source_url: "https://springrts.com/wiki/CEG-OldInfo"
categories:
  - "Delete"
---
# CEG-OldInfo

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

## Custom explosion generators

Source: <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Projectiles" class="external text" rel="nofollow">rts/Sim/Projectiles</a>

### What are they?

Custom explosions are small explosion scripts read from gamedata/explosions/\*.tdf. The explosion script specifies which particles/projectiles have to be created when the explosion happens, and their initial properties (position,speed,...)

### Explosion script definition

The explosion script directly specifies which C++ projectile classes have to be created, and also which properties the projectiles should have.

The explosion script is structured like this:

    [ExplosionScriptName]
    {
        [projectile scriptname] // this specifies the class of the projectile
        {
            [properties]
            {
                size = 40;
                sizeGrowth = -2;
                pos = -30 r60, r30, -30 r60; // These codes are explained below
                speed=0.75 r-1.5, 1.7 r1.6, 0.75 r-1.5;
            }
            underwater=0; // should this projectile be created when underwater?
            air=0;        // should this projectile be created when in air?
            water=1;      // should this projectile be created on water?
            ground=1;     // should this projectile be created when on ground?

           unit=0;   // only spawn if the explosion hit a unit?
            nounit=1; // only spawn if the explosion did not hit a unit?

           count=10; // number of projectiles of this type

           useAirLos=0;
            alwaysVisible=0;
        }
    .. other projectiles types can follow here ..
    }

Defaults for air/underwater/ground/water are zero. Default of count is 1.

### Projectile properties

To begin, you should run

    spring /p      (or "spring -p" on linux) 

to let spring export "projectiles.txt", which contains all the classes you can use in an explosion script. At the time of writing, this would contain [projectiles.txt](/projectiles.txt)

The items listed in "properties" are directly mapped to the class properties in projectiles.txt The properties are specified with a bit of a cryptic syntax. You can use extra commands in them (r,d,i). For example this:

    pos = -30 r60, r30, -30 r60; 

The x coordinate (specified with -30 r60) will be:

    x = -30 + (Random value between 0 and 60);

Commands:

    rX: add a number  between 0 and X
    iX: multiply the projectile index with X and add it. See the example for this below.
    dX: multiply the damage with X and add it.

## Explosion script examples

This is an example of a script that makes 10 smoke projectiles (yeah they should have been called particles, but they are handled by spring using the projectile system)

     [ARM_HLT_Expl]
     {
        [smoke]
        {
            [properties]
            {
                // age increase per frame, when age >= 1  the particle is destroyed
                ageSpeed=0.04;

                size = 40;
                sizeGrowth = -2;
                pos = -30 r60, r30, -30 r60;
                speed=0.75 r-1.5, 1.7 r1.6, 0.75 r-1.5;
            }
            water=1;
            ground=1;
            count=10;
        }
     }

This particular script would be linked to with "explosiongenerator=custom:ARM_HLT_Expl;"

Here is an example that uses the index (i) command in the properties:

    [heatcloud]
    {
        [properties]
        {
            pos = 0, i20, 0;
            heat = 10;
            maxheat=10;
            heatFalloff=1;
            size = 30;
        }
        ground=1;
        count=10;
    }

This script creates a tower of heatcloud projectile. The first projectile gets y=0, the second y=20, y=40, y=60, .. and finally y=180

### How to link a custom explosion to a weapon

The weapon definitions needs to have this in it:

    explosiongenerator = custom:ExplosionScriptName;

The explosion definition for ExplosionScriptName would be one of the TDF files in gamedata/explosions/

You can also link the weapons for self-destruct and normal destruct to an explosion script.

For an exlplosion generator when a projectile bounces, there is also:

    bounceexplosiongenerator = custom:ExplosionScriptName;

### Adding ground flashes

The ground flash is currently not an actual projectile, so it's specified in a different way:

    [ARM_HLT_Expl]
    {
         .. projectiles definitions ..

       [groundflash]
        {
            flashSize = 100;   // flash size
            flashAlpha = 1;    // initial alpha of the flash
            circleGrowth = 60; // size increase/frame
            circleAlpha = 1;   // initial alpha of the ring
            ttl = 10;          // number of frames
            color = 0,0,1;    // color RGB
        }
    }

## Projectile classes usable in explosion generators

[bitmapmuzzleflame](/bitmapmuzzleflame)\
dirt\
[explspike](/explspike)\
[heatcloud](/heatcloud)\
smoke\
smoke2\
gfx\
[CSpherePartSpawner](/cspherepartspawner)\
[simpleparticlesystem](/simpleparticlesystem)\

## Keywords

These are keywords that can be used in the explosiongenerator script to give a propertier a special value.

- **dir**\
  This can only be used on a float3 vector. This will be the direction vector if the event that created this explosiongenerator can be described with a direction. For weapon impacts, its the direction of the impact (the travel direction of the projectile when it explodes). For script emmited explosiongenerators it is the direction of the piece that emmits it.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [CEG-OldInfo](https://springrts.com/wiki/CEG-OldInfo).*
