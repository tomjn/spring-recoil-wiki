---
title: "Gamedev:UnitsOfMeasurement"
source_url: "https://springrts.com/wiki/Gamedev:UnitsOfMeasurement"
categories:
  - "Game_Dev"
---
# Gamedev:UnitsOfMeasurement

<div id="units-of-measurement" class="section mw-parser-output">

## Units of Measurement

### Overview

This page is copied from the <a href="http://trac.caspring.org/wiki/UnitsOfMeasurement" class="external text" rel="nofollow">CA wiki</a>. It is a list of the many and varied units of measurement Spring Game developers have to deal with. Fortunately, all of the [COB](/animation-coboverview) based units can be ignored if you are using [LUS](/animation-luascripting).

### Base Units

#### Time

- **Seconds (s)**
- **Frames (f)** - There are 30 frames in a second.
- **Resource Frames** - These occur every 32 frames.
- **SlowUpdate** - These occur every 16 frames.

#### Linear

- **Elmo** - Fundamental linear unit of Spring.
- **Footprint Unit** - This is equal to 16 elmos. Note that in Upspring or when building a unit in game you actually see two squares per side on a footprint square. Used in UnitDef and FeatureDef `footPrint{X,Z}` tags. (See [Gamedev:UnitDefs](/gamedev-unitdefs#movement-26-placement) and [Gamedev:FeatureDefs](/gamedev-featuredefs))
- **COB linear unit (clu)** - 1 clu is 1/216 elmo. Scriptor can automatically converts to COB units based on a constant that you set (default: 2.5 elmos).
- **Map Size** - This appears to be 512 elmos; thus a 16x16 map is about 8192 elmos on a side.

#### Angular

- **Degrees**
- **COB angular unit (cau)** - There are 65536 cau in a circle, which means there are 182.044... cau per degree. Scriptor automatically converts to cau based on a constant that you set (default converts from degrees).
- **1/45055 circle** - Used for `accuracy` and `sprayAngle` (see [Gamedev:WeaponDefs](/gamedev-weapondefs)).
- **Radians (rad)** - There are 2 \* pi radians in a circle. Used in lua.

### Derived Units

#### Velocity, Acceleration

- **Elmo / Second (elmo/s)** - Used for weapon velocity.
- **Elmo / Second<sup>2</sup> (elmo/s<sup>2</sup>)** - Used for weapon acceleration, map gravity. "Default" gravity is 130.
- **Elmo / Frame (elmo/f)** - Used for unit velocity.
- **Elmo / Frame<sup>2</sup> (elmo/f<sup>2</sup>)** - Used for unit acceleration.
- **COB linear units / Second (clu/s)** - Used for COB move statement speed. Always positive even if the movement is in a negative direction.

#### Angular Velocity, Angular Acceleration

- **COB angular units/Second (cau/s)** - Used for weapon turn rate; COB turn and spin speed. Always positive even if the movement is in a negative direction.
- **COB angular units/ Frame (cau/f)** - Used for unit turn rate. (Actually uses 65535 in a circle instead of 65536, but that's not enough to matter in most cases.)
- **COB angular units/ Frame-Second (cau/(f\*s))** - Used for COB spin acceleration. Note that COB acceleration is signed, unlike COB speed; if you want a negative spin, you need negative acceleration.

### Coordinates System

![Untitled-1.png](/images/Untitled-1.png)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Gamedev:UnitsOfMeasurement](https://springrts.com/wiki/Gamedev:UnitsOfMeasurement).*
