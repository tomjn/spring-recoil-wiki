---
title: "Movedefs.lua"
source_url: "https://springrts.com/wiki/Movedefs.lua"
categories:
  - "Gamedata"
---
# Movedefs.lua

<div id="movedefs.lua" class="section mw-parser-output">

## Movedefs.lua

### Location

`movedefs.lua` is a file in the `Gamedata/` directory of a Spring Game.

### Purpose

This file defines **MoveClasses** which are used to determine pathing for units.

### Source

The engine source code which parses the data from this file is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/MoveTypes/MoveDefHandler.cpp" class="external text" rel="nofollow">rts/Sim/MoveTypes/MoveDefHandler.cpp</a>

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

### Details

A mobile unit is assigned a **MoveClass** using the [movementClass](/gamedev-unitdefs#movementclass) tag. The engine determines the unit's pathfinding based on the properties of the **MoveClass**, so analogous properties (e.g. [footprintX](/gamedev-unitdefs#footprintx)) in the [UnitDef](/gamedev-unitdefs) should be the same for optimal behaviour.

All **MoveClasses** must belong to one of four possible types. A **MoveClass** is assigned a type simply by including it within the name string e.g. `Tank_MyMoveClassName`. Types are used in **[TypeMaps](/mapdev-terraintype)** of Spring maps, which allow mappers to set per-type speed multipliers.

#### Types

- `Bot` - A ground based **MoveClass**. The default type if no matching type string is found.
- `Tank` - A ground based **MoveClass**. Identical to `Bot` other than interaction with **TypeMaps**.
- `Ship` or `Boat` - Are synonyms. All ships / boat **MoveClasses** must belong to this type to behave as ships.
- `Hover` - All hovercraft **MoveClasses** (traverse any depth of water without speed reduction) must belong to this class.

### MoveClass Tags

string [name](#name)  default: "" 

The name of the **MoveClass**. Usually passed by the sub-table variable name rather than using this tag (See [\#Example](#example)). Prior to 9.50 this had to contain "tank", "hover", "ship" or "boat" respectively for non-Bot types. This is now set using [speedModClass](#speedmodclass).

int [speedModClass](#speedmodclass)  default: 1 New in version 95.0

Determines the speed modifier class used (See [Mapdev:terraintype](/mapdev-terraintype)). Accepted values are `0` = Tank, `1` = KBot, `2` = Hover, `3` = Ship.

int [footprintX](#footprintx)  default: 1 

How wide the **MoveClass** is in footprint units, left to right. 1 footprint unit = 16 [elmos](/gamedev-unitsofmeasurement). Cannot be below `1`. For mobile units this should be the same as the [footprintX](/gamedev-unitdefs#footprintx) of its [UnitDef](/gamedev-unitdefs).

int [footprintZ](#footprintz)  default: footprintX 

How wide the **MoveClass** is in footprint units, top to bottom. 1 footprint unit = 16 [elmos](/gamedev-unitsofmeasurement). Cannot be below `1`. For mobile units this should be the same as the [footprintZ](/gamedev-unitdefs#footprintz) of its [UnitDef](/gamedev-unitdefs).

float [crushStrength](#crushstrength)  default: 10.0 

Power of a unit with this **MoveClass** to crush features and units. Any features with a [crushResistance](/gamedev-featuredefs#crushresistance) less than this value will be crushed on contact. Any units with crushing enabled via [Spring.SetUnitBlocking](/lua-syncedctrl#unit-control)), in an impact where collider impulse exceeds collidee impulse and whose [crushResistance](/gamedev-unitdefs#crushresistance) is less than this value will also be crushed.

float [maxSlope](#maxslope)  default: 60.0 (15.0 for hover types) 

The maximum steepness of slope a unit with this **MoveClass** can climb in degrees. For further details see [\#How_slope_is_determined](#how-slope-is-determined).

float [slopeMod](#slopemod)  default: 4.0 / (maxSlope + 0.001) 

How much a slope will slow a unit, `0` means no slowdown.

bool [avoidMobilesOnPath](#avoidmobilesonpath)  default: true 

Do the units attempt to avoid other mobile units when pathing?

- Pro: groups moving without a ctrl-order clump much less
- Contra: groups moving with a ctrl-order are less organized

bool [allowTerrainCollisions](#allowterraincollisions)  default: true New in version 96.0

Disable this to improve handling of large (\>4 x 4) footprint units (See <a href="http://springrts.com/mantis/view.php?id=4217" class="external text" rel="nofollow">#4217</a> ).

bool [allowRawMovement](#allowrawmovement)  default: false New in version 104.0

Enables native "raw move" (straight-line path) support (See also [Spring.SetUnitMoveGoal](/lua-syncedctrl) and <a href="http://springrts.com/mantis/view.php?id=4412" class="external text" rel="nofollow">#4412</a> ).

#### Heat Tags

These tags are used in unit avoidance.

bool [heatMapping](#heatmapping)  default: false 

This enables/disables generation and usage of path heats.

float [heatMod](#heatmod)  default: 0.0042 

The pathfinder cost modifier that is multiplied by the heat of the current square.

int [heatProduced](#heatproduced)  default: 30 

How much heat to place on a square if a path goes through it. `heat set = max(currentSquareHeat, heatProduced)`.

#### Flow Field Tags

These tags are used in unit avoidance.

bool [flowMapping](#flowmapping)  default: true 

This enables/disables <a href="https://leifnode.com/2013/12/flow-field-pathfinding/" class="external text" rel="nofollow">flow field mapping</a>.

float [flowMod](#flowmod)  default: 1.0 

Multiplied by the objects [mass](/gamedev-unitdefs#mass) for the y-component (up) of the flow vector. No idea what effect this has.

#### Tank & Bot-Only Tags

float [depthMod](#depthmod)  default: 0.1 

How much water will slow amphibious units. The deeper the water, the slower the movement.Replaced with a subtable in Spring 86.x

float [maxWaterDepth](#maxwaterdepth)  default: 0.0 

The maximum depth of water in [elmos](/gamedev-unitsofmeasurement) the unit can wade through.

#### Ship-Only Tags

float [minWaterDepth](#minwaterdepth)  default: 10.0 

The minimum depth of water in [elmos](/gamedev-unitsofmeasurement) the ship requires to float in.

bool [subMarine](#submarine)  default: false 

Is the ship a submarine; can it move underneath other ships?

### Sub Tables

#### depthModParams

Only read for `Bot` and `Tank` **MoveClasses**, the depthModParams group contains several sub-tags. Depthmod is a system for changing the speed of units depending on how deep they are underwater.

` `

          new formula is given by
            if h < depthModParams.minHeight: 1.0
            if h > depthModParams.maxHeight: 0.0
            else:
              depthScale = MAX(0.01, MIN(depthModParams.maxScale, (a * h * h) + (b * h) + c))
              depthMod = 1 / depthScale
          where
            h = unit's absolute height below water surface
            a = depthModParams.quadraticCoeff
            b = depthModParams.linearCoeff
            c = depthModParams.constantCoeff

float [minHeight](#minheight)  default: 0.0 

The minimum depth where the depthMod curve applies. If the unit is shallower than the minHeight, no change in speed occurs.

float [maxHeight](#maxheight)  default: MAX_FLOAT 

The maximum depth where the depthMod curve applies. If the unit is deeper than the maxHeight, the unit is immobilized.

The following tags control the behavior of the unit within the active portion of the curve (depth is greater than [minHeight](#minheight) but less than [maxHeight](#maxheight)). It would be best to simply open up your graphing program of choice and use the provided formula, but if you're scared of graphs you should read the descriptions below:

float [maxScale](#maxscale)  default: MAX_FLOAT 

This is the cap on how severe the depth effect can be. For example, lets say that you use a maxScale value of 2. If a unit is at the depth where its scale reaches the max (usually near its maximum depth; with a maxScale value of 2), the slowest it will go is half of its maximum speed. In other words, (maxVelocity / maxScale). Therefore, as another example, a value of 4 would cause the unit's maximum speed (near the units maximum depth) to be 25% of it's maxVelocity.

float [quadraticCoeff](#quadraticcoeff)  default: 0.0 

The application of the speed-divider effect is modelled as a quadratic. This is the "depth-squared" component of that. That is, a value set here will be applied exponentially as the unit gets deeper, therefore it is best to use very small numbers for this tag.

float [linearCoeff](#linearcoeff)  default: depthMod 

The application of the speed-divider effect is modelled as a quadratic. This component makes divisor increase linearly with the depth of the unit. So with a value of 0.1, for example, a unit would go from 1/2 speed to 1/3 speed and 1/3 speed to 1/4 speed each time it goes 10 units deeper.

float [constantCoeff](#constantcoeff)  default: 1.0 

The application of the speed-divider effect is modelled as a quadratic. This is the constant component of the divisor. If you want a gradual decrease of speed and your [minHeight](#minheight) = 0 (the waterline) then this value **must** be 1. Using less than 1 will cause the unit to go *faster* as it hits the water, and using greater than 1 will cause the unit to abruptly slow down the moment it gets its feet wet. If you're not using [minHeight](#minheight) = 0, you'll have to adjust this value accordingly to get a smooth application of the depthMod divider.

#### speedModMults

New in version 86.0

These previously hard-coded variables allow control over how the pathfinder (default only, not [QTPFS](/gamedev-glossary), see [Modrules.lua](/modrules.lua)) calculates the cost for a **MoveClass** for squares containing mobile units, if and only if [avoidMobilesOnPath](#avoidmobilesonpath) = true.

float [mobileBusyMult](#mobilebusymult)  default: 0.1 

The cost multiplier for mobile units which are 'Busy'; Not currently being built and with a non-empty command queue, but not moving on a path. Clamped to values above `0.01`.

float [mobileIdleMult](#mobileidlemult)  default: 0.35 

The cost multiplier for mobile units which are 'Idle'; Either currently being built or with an empty command queue. Clamped to values above `0.01`.

float [mobileMoveMult](#mobilemovemult)  default: 0.65 

The cost multiplier for mobile units which are 'Moving'; Trying to follow their own path. Clamped to values above `0.01`.

### How slope is determined

Spring doesn't represent terrain slopes in degrees, internally it uses `(1.0 - the terrain normal's y-component)` so the slope of vertical faces is `1` and that of horizontal ones `0`. A unit's `maxSlope` value (which is in degrees in its movedef) is converted so that the "can we go here?" (ie "`maxSlope > terrainSlope`?") comparisons are meaningful, the formula is `1.0 - cos(DEG2RAD(maxSlope * 1.5))`. If you want to know the terrain angle in degrees, compute `RAD2DEG(arccos(1.0 - terrainSlope))`. For a bot with a `maxSlope` of 36 degrees (~0.41221 in "Spring format"), the maximum tolerable terrain angle is approximately

`RAD2DEG(arccos(1.0 - 0.41221))`

or 54 degrees. If `maxSlope` was `30`, the MTTA would be 45, and if it was `60` (the highest sensible value due to that 1.5 scalar and the absence of overhanging cliffs) the bot could mount any terrain. In other words you do not need the long mathematical derivation, just remember that `maxTerrainAngle = maxSlope * 1.5`

--kloot, Thu Jul 31, 2008

### Code to check your movdefs

<a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=24866" class="external text" rel="nofollow">A resource to check movedefs</a> that game developers have used for years and find it quite useful.

### Example

#### External Examples

<a href="http://imolarpg.dyndns.org/trac/balatest/browser/trunk/gamedata/movedefs.lua" class="external text" rel="nofollow">'Balanced Annihilation' movedefs.lua</a>

<a href="http://spring1944.svn.sourceforge.net/viewvc/spring1944/trunk/S44Main.sdd/gamedata/movedefs.lua?&amp;view=markup" class="external text" rel="nofollow">'Spring: 1944' movedefs.lua</a>

<a href="http://code.google.com/p/springtutorialgame/source/browse/trunk/SpringTutorialGame.sdd/Gamedata/movedefs.lua" class="external text" rel="nofollow">'Spring Tutorial Game' movedefs.lua</a>

<a href="http://code.google.com/p/zero-k/source/browse/trunk/mods/zk/gamedata/movedefs.lua" class="external text" rel="nofollow">'ZeroK' movedefs.lua</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Movedefs.lua](https://springrts.com/wiki/Movedefs.lua).*
