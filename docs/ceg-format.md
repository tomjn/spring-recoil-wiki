---
title: "CEG-Format"
source_url: "https://springrts.com/wiki/CEG-Format"
categories:
  - "Delete"
---
# CEG-Format

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

**Source:** <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Projectiles" class="external text" rel="nofollow">rts/Sim/Projectiles</a>

## Overall Format

A CEG file contains one or more CEGs. Each CEG follows this format:

    [ceg_name] {
      useDefaultExplosions = 0;
      [spawner_name_0] {
         class=CClassName;
         [properties] {
           property0 = value0;
           property1 = value1;
           //and so on...
         }
         condition0 = 1;
         condition1 = 0;
         count = 1;
      }

      [spawner_name_1] {
         //each spawner follows that format
      }

      [groundflash] {
         //groundflash is a special name; it always generates a groundflash
         flashsize=16;
         flashalpha=1;
         circlegrowth=1;
         circlealpha=0;
         ttl=8;
         color=1,1,1;
      }
    }

### useDefaultExplosions

If this is set, the CEG will use the default explosion (based on damage and area of effect) in addition to any spawners you define. The default explosions are sometimes very heavy in performance, especially for large damage values.

The basedamage is min((damage/20), areaofeffect\*1.5)\*(damage\>500?1:2)

This means :

basedamage\*0.6 smoke projectiles

min(20, basedamage\*0.8) dist projectiles

random(6)+3+basedamage/25 debris projectiles

sqrt(basedamage)+8 explospike projectiles

1 standardgroundflash

1 spherepartprojectile

### Spawners

A CEG can contain any number of spawners. The name of the spawners don't really matter, as long as it's not "groundflash", which has a special meaning. You can think of each spawner as being one component of the overall explosion.

#### Class

Each spawner has a class that determines what kind of graphical effect it creates. Spring has a number of standard classes that you can choose from. See [CEG-Classes](/ceg-classes) for details.

#### Properties

Depending on what class a spawner is, it will have a set of properties that allow you to fine-tune what the spawner displays. Again, see [CEG-Classes](/ceg-classes) for details.

#### Conditions

These determine under what conditions the spawner will run. The available conditions are "air" (at least 20 elmos above ground/sea level), "water", "underwater", "ground", "unit" (hits a unit), and "nounit" (doesn't hit a unit). If you set the condition to true (e.g., "water = 1;"), the spawner will run if the explosion takes place under that condition. If you set more than one condition, the spawner will run if *any* of them are true. If you want a spawner to run only if two or more conditions are *all* true, you have to do a little trick with the CExpGenSpawner class.

#### Count

The count determines the number of times the spawner will run.

### groundflash

If you name a spawner "groundflash," it will always generate a groundflash. A groundflash has the following properties:

- flashsize (float): The radius of the groundflash.
- flashalpha (float in \[0, 1\]): How transparent the groundflash is. Generally, the higher, the brighter.
- circlegrowth (float): A groundflash can have an additional circle that expands outwards. This controls how fast the circle grows.
- circlealpha (float in \[0, 1\]): How transparent the circle is.
- ttl (int): How long the groundflash lasts.
- color (float3): The color of the groundflash.

Suggested Use: A short groundflash (~8 frames) is good for any explosion that gives off light. You can also use a longer groundflash to suggest the ground is glowing from heat.

### Data Types

CEGs use the following data types:

- float: Most properties are floats. e.g. \`0.123\`
- int: Used for counts and ttls. e.g. \`1234\`
- bool: Use for conditions, and some properties. e.g. \`true\`, \`1\`, \`false\`
- float3: Used for vectors and colors. The components are floats, separated by commas. You can also use the keyword `dir`, which represents the direction fed to the CEG. e.g. "0.1 , 1.2 , 3.4", "dir"
- string: Used for colormaps and texture names. In .lua you delimit a string by quotes; in .tdf you do not. Color maps consist of 2 or more groups of 4 numbers, each group representing a RGBA color. Textures are the names you define in gamedata/resources.tdf or gamedata/resources.lua. e.g. "1.0 0.0 0.0 1 0 0 1.0 1" (are gradient from red to blue)

You can use [CEG-Operators](/ceg-operators) to define floats that are not fixed.

### Units

All distances are in elmos; all time is in frames.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [CEG-Format](https://springrts.com/wiki/CEG-Format).*
