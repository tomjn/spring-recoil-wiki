---
title: "Gamedev:UnitDefs"
source_url: "https://springrts.com/wiki/Gamedev:UnitDefs"
categories:
  - "Game_Dev"
---
# Gamedev:UnitDefs

<div class="mw-parser-output">

[Development](/gamedev-main) \< [Gamedev:Main](/gamedev-main) \< Gamedev:UnitDefs

## Location

UnitDef files are .lua files stored in the `Units/` directory of a Spring Game.

## Purpose

UnitDef files have one purpose; to define the properties of units. They are the main description file for what attributes your unit should have and how it should behave.

## Source

The engine source code which loads the tags from these files is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Units/UnitDef.cpp" class="external text" rel="nofollow">rts/Sim/Units/UnitDef.cpp</a>

The engine source which reads the [\#sounds](#sounds) subtable can be found here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Units/UnitDefHandler.cpp" class="external text" rel="nofollow">rts/Sim/Units/UnitDefHandler.cpp</a>

## Data Types

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

## Details

There follows a comprehensive (certain deprecated tags are not present) list of the tags available, their data type, default value and a brief description of what they do. Bear in mind that the source code linked above is the ultimate reference when dealing with these tags.

In lua tables keys (i.e. the tags) should be lower case, here they are represented in camelCase for readability. In your files you may use the `lowerkeys` function on your final table to ensure the keys are properly cased.

It is usual to name the returned UnitDef table the internal `unitName` desired for the unit.

### General

string [name](#name)  default: "" lua: humanName 

This is simply the name of the unit as it appears to the player.

string [description](#description)  default: name lua: tooltip 

This is the tooltip description of the unit seen by the player. It defaults to the [name](#name) of the unit.

string [buildPic](#buildpic)  default: "" lua: buildPicName 

The filename of the image to be used as the build picture, assumes `Unitpics/` directory (see [Gamedev:Buildpics](/gamedev-buildpics)).

string [objectName](#objectname)  default: "" lua: modelname 

The filename of the 3D model file for this unit, assumes `Objects3D/` directory.

string [script](#script)  default: unitName + ".cob" lua: scriptName 

The filename of the animation script file for this unit, assumes `Scripts/` directory. Default assumes .cob file but [LUS](/animation-luascripting) should be preferred.

float [maxDamage](#maxdamage)  default: 0.0 lua: health 

The base 'hitpoints' the unit will have.

float [autoHeal](#autoheal)  default: 0.0 

How much health the unit will regain every second.

float [idleAutoHeal](#idleautoheal)  default: 10.0 

How much health the unit will regain every second whilst it is idle.

int [idleTime](#idletime)  default: 600 

The time in [frames](/gamedev-unitsofmeasurement) taken until a unit is considered to be idle.

float [buildCostMetal](#buildcostmetal)  default: 1.0 lua: metalCost 

The amount of metal resource the unit costs to build. Cannot be below `1.0`.

float [buildCostEnergy](#buildcostenergy)  default: 0.0 lua: energyCost 

The amount of energy resource the unit costs to build.

float [buildTime](#buildtime)  default: 0.0 

The time taken to build the unit, in conjunction with the [workerTime](#workertime) of the constructor. In [Resource Frames](/gamedev-unitsofmeasurement#time), `Time to build = (buildTime / workerTime)`. Defaults to `0.0` but cannot actually be below `1.0`.

float [mass](#mass)  default: buildCostMetal 

The mass of the unit, used in weapon impulse calculations. Cannot be less than `1.0`.

bool [reclaimable](#reclaimable)  default: true 

Can the unit be reclaimed by a builder?

bool [capturable](#capturable)  default: true 

Can a unit be stolen by a builder using the capture command?

bool [repairable](#repairable)  default: true 

Can the unit be repaired by a builder?

float [maxRepairSpeed](#maxrepairspeed)  default: 1e20 

The maximum cumulative speed at which this unit type can repair a single target.

string [iconType](#icontype)  default: "default" 

The name of the radar icon type this unit should use (see [Icontypes.lua](/icontypes.lua)).

string [corpse](#corpse)  default: "" lua: wreckName 

The name of the feature this unit should leave behind as a wreck when it dies (see [Gamedev:FeatureDefs](/gamedev-featuredefs)).

string [explodeAs](#explodeas)  default: "" 

The name of the weapon this unit should explode as when it is killed (see [Gamedev:WeaponDefs](/gamedev-weapondefs)).

string [selfDestructAs](#selfdestructas)  default: "" 

The name of the weapon this unit should explode as when it self destructs (see [Gamedev:WeaponDefs](/gamedev-weapondefs)). Also used as the [kamikaze](#kamikaze) weapon.

### Resources

float [harvestStorage](#harveststorage)  default: 0.0 New in version 97.0; ATTENTION: unfinished implementation, can be set in UnitDefs but it can't be read in-game

How much of the metal resource a unit can store when used as an engine-assisted resource 'harvester'. See also [Spring.GetUnitHarvestStorage](/lua-syncedread#unit-informations) and [Spring.SetUnitHarvestStorage](/lua-syncedctrl#unit-resourcing) callouts.

float [metalStorage](#metalstorage)  default: 0.0 

The amount of the metal resource storage the unit contributes.

float [energyStorage](#energystorage)  default: 0.0 

The amount of the energy resource storage the unit contributes.

float [extractsMetal](#extractsmetal)  default: 0.0 

The amount of the metal resource the unit extracts from the ground. The amount extracted depends on the metal map defined in the map itself. Works only for structures.

float [windGenerator](#windgenerator)  default: 0.0 

The maximum amount of the energy resource the unit generates which is dependant on the map wind. Works only for structures. If wind speed is higher than this, the unit will still only produce this much. If wind speed is less, it will produce as much as windspeed is.

float [tidalGenerator](#tidalgenerator)  default: 0.0 

The amount of the energy resource the unit generates which is dependant on the maps tidal power. Clearly, this only works on water structures.

float [metalUse](#metaluse)  default: 0.0 lua: metalUpkeep 

The amount of the metal resource the unit consumes per game 'tick' when activated.

float [energyUse](#energyuse)  default: 0.0 lua: energyUpkeep 

The amount of the energy resource the unit consumes per game 'tick' when activated.

float [metalMake](#metalmake)  default: 0.0 

The amount of the metal resource the unit generates unconditionally per game 'tick'.

float [energyMake](#energymake)  default: 0.0 

The amount of the energy resource the unit generates unconditionally per game 'tick'.

float [makesMetal](#makesmetal)  default: 0.0 

The amount of the energy resource the unit turns into the metal resource per game 'tick'.

### Sensors

bool [onOffable](#onoffable)  default: false 

Does the unit have an on/off button? Currently the activation status tied to this button also turns sensors (other than LOS) on and off.

bool [activateWhenBuilt](#activatewhenbuilt)  default: false 

Should the unit's activation status be on or off when it is created?

float [sightDistance](#sightdistance)  default: 0.0 lua: losRadius 

The radius of the units sight (LOS is circular in Spring).

float [airSightDistance](#airsightdistance)  default: 1.5 \* sightDistance lua: airLosRadius 

How far away the unit can see aircraft (and some FX).

float [losEmitHeight](#losemitheight)  default: 20.0 lua: losHeight New in version 83.0

How high up the unit is the point used to calculate it's LOS vs. the terrain?

float [radarEmitHeight](#radaremitheight)  default: 20.0 lua: radarHeight New in version 83.0

How high up the unit is the point used to calculate it's radar vs. the terrain?

int [radarDistance](#radardistance)  default: 0 lua: radarRadius 

The radius of the units radar.

int [sonarDistance](#sonardistance)  default: 0 lua: sonarRadius 

The radius of the units sonar.

int [radarDistanceJam](#radardistancejam)  default: 0 lua: jammerRadius 

The radius of the units radar jamming.

int [sonarDistanceJam](#sonardistancejam)  default: 0 lua: sonarJamRadius 

The radius of the units sonar jamming.

bool [stealth](#stealth)  default: false 

Is the unit undetectable by radar?

bool [sonarStealth](#sonarstealth)  default: false 

Is the unit undetectable by sonar?

int [seismicDistance](#seismicdistance)  default: 0 lua: seismicRadius 

The radius of the unit's seismic (movement) sensor.

float [seismicSignature](#seismicsignature)  default: 0 for units with [floater](#floater), [canHover](#canhover) or [canFly](#canfly), otherwise sqrt(mass / 100.0) 

How fast the seismic ring expands in [elmos](/gamedev-unitsofmeasurement) per frame. Each ping always lasts 15 [frames](/gamedev-unitsofmeasurement), so this also determines the maximum radius of the seismic ring.

#### Cloaking

For units with [canCloak](#cancloak) = true: float [cloakCost](#cloakcost)  default: 0.0 

The energy cost per tick to cloak the unit while it is stationary.

float [cloakCostMoving](#cloakcostmoving)  default: cloakCost 

The energy cost per tick to cloak the unit while it is moving.

bool [initCloaked](#initcloaked)  default: false lua: startCloaked 

Is the unit cloaked as soon as it is created?

float [minCloakDistance](#mincloakdistance)  default: 0.0 

The minimum distance (radius) which the unit must be from any enemy units to remain cloaked.

bool [decloakSpherical](#decloakspherical)  default: true 

Does [minCloakDistance](#mincloakdistance) apply in 3D or only 2D? i.e. can aircraft flying above the unit decloak it?

bool [decloakOnFire](#decloakonfire)  default: true 

Does the unit decloak when it fires a weapon?

int [cloakTimeout](#cloaktimeout)  default: 128 

The minimum time, in [frames](/gamedev-unitsofmeasurement), between a decloak and subsequent re-cloak.

### Commands

bool [canMove](#canmove)  default: false 

Can the unit be issued Move orders?

bool [canAttack](#canattack)  default: true 

Can the unit be issued Attack orders?

bool [canFight](#canfight)  default: true 

Can the unit be issued Fight orders?

bool [canPatrol](#canpatrol)  default: true 

Can the unit be issued Patrol orders?

bool [canGuard](#canguard)  default: true 

Can the unit be issued Guard orders?

bool [canCloak](#cancloak)  default: false 

Can the unit be issued Cloak orders?

bool [canRepeat](#canrepeat)  default: true 

Can the unit be issued Repeat orders?

bool [canSelfDestruct](#canselfdestruct)  default: true lua: canSelfD 

Can the unit be issued a self destruct order?

int [moveState](#movestate)  default: -1 for mobile units, 1 for structures 

The initial movement state for the unit. Can be -1 - Inherits from factory, 0 - Hold Position, 1 - Manoeuvre or 2 - Roam.

int [fireState](#firestate)  default: -1 for units with [noAutoFire](#noautofire) = false, 2 otherwise 

The initial firing state for the unit. Can be -1 - Inherits from factory, 0 - Hold Fire, 1 - Return Fire or 2 - Fire At Will. Since 104.0 there is an additional value 3 - Fire At Neutral.

bool [noAutoFire](#noautofire)  default: false lua: canFireControl 

Controls whether or not the unit has a fire state button.

bool [canManualFire](#canmanualfire)  default: false 

description = Can the unit be issued ManualFire commands? A ManualFire command will fire any weapons with the [commandfire](/gamedev-weapondefs#commandfire) tag.

#### Builder Commands

bool [canRestore](#canrestore)  default: builder && [terraformSpeed](#terraformspeed) \> 0 

Can the unit be issued restore terrain commands? For builders only.

bool [canRepair](#canrepair)  default: builder && [repairSpeed](#repairspeed) \> 0 

Can the unit be issued repair commands? For builders only.

bool [canReclaim](#canreclaim)  default: builder && [reclaimSpeed](#reclaimspeed) \> 0 

Can the unit be issued reclaim commands? For builders only.

bool [canResurrect](#canresurrect)  default: builder && [resurrectSpeed](#resurrectspeed) \> 0 

Can the unit be issued resurrection commands? For builders only.

bool [canCapture](#cancapture)  default: builder && [captureSpeed](#capturespeed) \> 0 

Can the unit be issued capture commands? For builders only.

### Builder

bool [builder](#builder)  default: false lua: isBuilder 

Is the unit a builder?

float [buildDistance](#builddistance)  default: 128.0 

How far away from itself the unit can build, measured to the centre of the unit being built. The minimum value is `38.0`.

bool [buildRange3D](#buildrange3d)  default: false 

Does the builders [buildDistance](#builddistance) apply in all 3 dimensions or only 2?

float [workerTime](#workertime)  default: 0.0 lua: buildSpeed 

How fast the builder builds, used in conjunction with the [buildTime](#buildtime) of the unit being built. Effectively, `Time to build = buildTime / workerTime`. If this value is \<= `0.0` then [builder](#builder) is set to false.

float [repairSpeed](#repairspeed)  default: workerTime 

How fast the builder can repair other units.

float [reclaimSpeed](#reclaimspeed)  default: workerTime 

How fast the builder can reclaim other units and features.

float [resurrectSpeed](#resurrectspeed)  default: workerTime 

How fast the builder can resurrect corpse features back into living units.

float [captureSpeed](#capturespeed)  default: workerTime 

How fast the builder can capture other units.

float [terraformSpeed](#terraformspeed)  default: workerTime 

How fast the builder levels and restores terrain.

bool [canAssist](#canassist)  default: builder 

Can the builder assist other constructions?

bool [canBeAssisted](#canbeassisted)  default: true 

Can the builder be assisted by other builders?

bool [canSelfRepair](#canselfrepair)  default: false 

Can the builder repair itself?

bool [showNanoSpray](#shownanospray)  default: true 

Does the builder emit OTA-style nanospray whilst constructing?

float\[3\] [nanoColor](#nanocolor)  default: {0.2, 0.7, 0.2} aka green 

The RGB colour of a builders' emitted nano particles if [showNanoSpray](#shownanospray) = true. Also controls the RBG colour of a unit's own nanoframe if [showNanoFrame](#shownanoframe) = true.

bool [fullHealthFactory](#fullhealthfactory)  default: ? 

If `true`, units are repaired before they are allowed to leave the factory i.e. units from this factory will be healed back to 100% health if they are damaged during construction.

bool [isAirbase](#isairbase)  default: false Removed in 101.0 in favour of more flexible lua custom commands

Is this unit an airbase? Aircraft may land and repair on units which are airbases.

### Movement & Placement

int [footprintX](#footprintx)  default: 1 

How wide the unit is in footprint units, left to right. 1 footprint unit = 16 [elmos](/gamedev-unitsofmeasurement). Cannot be below `1`. For mobile units this should be the same as the [footprintX](/movedefs.lua#footprintx) of its [movementClass](#movementclass). Also used for obstacle avoidance.

int [footprintZ](#footprintz)  default: 1 

How wide the unit is in footprint units, top to bottom. 1 footprint unit = 16 [elmos](/gamedev-unitsofmeasurement). Cannot be below `1`. For mobile units this should be the same as the [footprintZ](/movedefs.lua#footprintz) of its [movementClass](#movementclass). Also used for obstacle avoidance.

string [yardmap](#yardmap)  default: "" 

Used to determine a structure from a mobile unit. A string of characters which defines in detail each 'footprint square' of the structure. Each footprint square may be: `y` - 'Yard' - Always open, unblocking, `c` - 'Construction' - Open and unblocking only while constructing (for factories, controlled via `COB.YARD_OPEN` see [Animation-LuaCallouts#Other](/animation-luacallouts#other)), `i` - 'Inversed Construction' - Closed and blocking only while constructing (for factories, controlled via `COB.YARD_OPEN` see [Animation-LuaCallouts#Other](/animation-luacallouts#other)) (New in version 89.0), `g` - 'Geothermal' - Flags that the unit must be placed over a [geoThermal](/gamedev-featuredefs#geothermal) feature, does not actually count as a square, `h` - 'High Resolution' - Indicates that the yardmap will use double resolution with four times as many characters. Must be the **first** character, and does not count as a square itself (New in version 93.0), `o` - 'Obstacle' - Always closed, blocking, all other chars are treated the same way. Tip: 'Draw' out the yardmap over multiple lines. As of 89.0 all whitespace characters are ignored, including newlines.

int [buildingMask](#buildingmask)  default: 1 

<a href="http://en.wikipedia.org/wiki/Mask_(computing)" class="external text" rel="nofollow">Bitmask</a> representing the types of ground that this structure can be built on. Each digit of binary that is set to one means that a ground square with the corresponding digit set via [Spring.SetSquareBuildingMask](/lua-syncedctrl#ground) can be built on.

bool [levelGround](#levelground)  default: false 

For structures. Does the constructor have to level the ground underneath the build area before beginning to build the structure?

string [movementClass](#movementclass)  default: "" lua: moveDef.name 

The name of the movement type a mobile, non aircraft, unit should use. See [Movedefs.lua](/movedefs.lua).

bool [canHover](#canhover)  default: false Removed in 95.0

Is the unit a hovercraft? Hovercraft can cross water of any depth without a speed penalty. Hover's must also have `HOVER` within the name of their [movementClass](#movementclass) (see [Movedefs.lua](/movedefs.lua)).

bool [floater](#floater)  default: false if a [moveClass](#moveclass) is defined, if not true if [waterline](#waterline) = true, false otherwise 

When a mobile unit is crossing water, or a structure is placed on water, does it float on top of the water or crawl / lay on the sea bed?

bool [upright](#upright)  default: false 

Does the unit follow the terrain or always remain upright? Generally used for walkers.

float [maxSlope](#maxslope)  default: 0.0 lua: maxHeightDif 

The maximum slope a building can be placed on. Mobile unit's use the [maxSlope](/movedefs.lua#maxslope) set in their [movementClass](#movementclass). The value is in degrees and is clamped between `0.0` and `89.0`. This value is converted to a "maximum allowed height difference" (call it M), which involves a hard-coded constant. When a building gets placed, the height of each of its footprint squares is compared to a reference height (calculated for the build position). If the difference exceeds M for any square, that build position is rejected. The value readable from lua has been changed from that in the unitdef and reflects the internal engine value.

float [minWaterDepth](#minwaterdepth)  default: -10e6 

The minimum depth of water a building can be placed on. Mobile unit's use the [minWaterDepth](/movedefs.lua#minwaterdepth) set in their [movementClass](#movementclass).

float [maxWaterDepth](#maxwaterdepth)  default: 10e6 

The maximum depth of water a building can be placed on. Mobile unit's use the [maxWaterDepth](/movedefs.lua#maxwaterdepth) set in their [movementClass](#movementclass).

float [waterline](#waterline)  default: 0.0 

How low in the water does a ship sit? Higher values means the ship is lower in the water.

float [minCollisionSpeed](#mincollisionspeed)  default: 1.0 

The minimum net impact speed that will cause a unit to be damaged by collisions with another unit.

bool [pushResistant](#pushresistant)  default: false 

Can the unit be pushed around by other units? Turning it on doesn't remove all pushing but is a marked improvement.

float [maxVelocity](#maxvelocity)  default: 0.0 lua: speed 

The maximum speed attainable by the unit in [elmos](/gamedev-unitsofmeasurement) per frame. If the value is -ve, the absolute value is used.

float [maxReverseVelocity](#maxreversevelocity)  default: 0.0 lua: rSpeed New in version 99.0

The maximum speed attainable by the unit in reverse in [elmos](/gamedev-unitsofmeasurement) per frame. If the value is -ve, the absolute value is used.

float [acceleration](#acceleration)  default: 0.5 lua: maxAcc 

The acceleration of the unit, in [elmos](/gamedev-unitsofmeasurement) per frame<sup>2</sup>. If the value is -ve, the absolute value is used.

float [brakeRate](#brakerate)  default: acceleration lua: maxDec 

The deceleration of the unit, in [elmos](/gamedev-unitsofmeasurement) per frame<sup>2</sup>. If the value is -ve, the absolute value is used. For units with [canFly](#canfly) = true this is multiplied by `0.1`. Prior to 95.0 this was scaled by 0.1 for aircraft and the default was 3x acceleration.

float [myGravity](#mygravity)  default: 0.4 

As Spring aircraft are slower than real aircraft this tag allows to lower gravity to compensate. Multiplies against map gravity for aircraft, replaces map gravity for ground vehicles if non-zero.

float [turnRate](#turnrate)  default: 0.0 

How fast the unit can turn. `degrees per seconds = 0.16 * turnRate`.

bool [turnInPlace](#turninplace)  default: true 

Does the unit turn on the spot (like a person or tank) or must it be moving forwards to turn (like a car).

float [turnInPlaceSpeedLimit](#turninplacespeedlimit)  default: A complex formula based on [turnRate](#turnrate) and [maxVelocity](#maxvelocity) 

For units with [turnInPlace](#turninplace) = false, this defines the minimum speed it will slow down to (the speed at which the turn is actually performed can be higher depending on the angular difference and [turnRate](#turnrate)).

float [turnInPlaceAngleLimit](#turninplaceanglelimit)  default: 0.0 New in version 86.0

For units with [turnInPlace](#turninplace) = true, defines the maximum angle (in degrees) of a turn above which it starts to brake.

bool [blocking](#blocking)  default: true 

Does the unit block the movement of other units? (Mines, i.e. non-mobile units with the [kamikaze](#kamikaze) tag default to `false`).

float [crushResistance](#crushresistance)  default: mass New in version 85.0

How resistant is the unit to being crushed? Any [**MoveClass**](/movedefs.lua) with a [crushStrength](/movedefs.lua#crushstrength) greater than this will crush the unit - IFF this has been enabled via [Spring.SetUnitBlocking](/lua-syncedctrl#unit-control) and the collider impulse exceeds that of the colidee.

### Flanking

int [flankingBonusMode](#flankingbonusmode)  default: flankingBonus.defaultMode set in [Modrules.lua](/modrules.lua) 

The mode of operation of Spring's inbuilt flanking system. Can be `0` - No flanking bonus. Mode `1` builds up the ability to move over time, and swings to face attacks, but does not respect the way the unit is facing. Mode `2` also can swing, but moves with the unit as it turns. Mode `3` stays with the unit as it turns and otherwise doesn't move, the ideal mode to simulate something such as tank armour.

float\[3\] [flankingBonusDir](#flankingbonusdir)  default: {0.0, 0.0, 1.0} 

This is the direction vector where the armour is facing; i.e. where the least damage is applied. The default is straight forwards.

float [flankingBonusMax](#flankingbonusmax)  default: 1.9 

The maximum multiplier to the damage dealt, when a unit is hit from the opposite direction to [flankingBonusDir](#flankingbonusdir).

float [flankingBonusMin](#flankingbonusmin)  default: 0.9 

The minimum multiplier to the damage dealt, when a unit is hit from the same direction as [flankingBonusDir](#flankingbonusdir).

float [flankingBonusMobilityAdd](#flankingbonusmobilityadd)  default: 0.01 

This defines the ability of [flankingBonusDir](#flankingbonusdir) to move over time. Its value is added to the mobility every [SlowUpdate](/gamedev-unitsofmeasurement). When the unit is attacked, the build up mobility value is multiplied by a vector facing the attack, which is added to [flankingBonusDir](#flankingbonusdir).

### Aircraft

bool [canFly](#canfly)  default: false 

Can the unit fly, i.e. is it an aircraft?

bool [canSubmerge](#cansubmerge)  default: false 

Can the aircraft land underwater?

bool [factoryHeadingTakeoff](#factoryheadingtakeoff)  default: true 

Controls the take-off behaviour of aircraft with [hoverAttack](#hoverattack) = true. `true` means planes start matching their heading right after taking off from the pad, `false` means they maintain the heading of the pad until reaching [cruiseAlt](#cruisealt).

bool [collide](#collide)  default: true 

Does the unit collide with other aircraft, or can it occupy the same space?

bool [hoverAttack](#hoverattack)  default: false 

Controls whether the aircraft flys and attacks like a fighter/bomber or a helicopter/gunship.

bool [airStrafe](#airstrafe)  default: true 

For aircraft with [hoverAttack](#hoverattack) = true, controls if the unit strafes side to side while attacking or remains stationary.

float [cruiseAlt](#cruisealt)  default: 0.0 lua: wantedHeight 

The altitude in [elmos](/gamedev-unitsofmeasurement) which the unit attempts to fly at while cruising.

float [airHoverFactor](#airhoverfactor)  default: -1.0 lua: dlHoverFactor 

For aircraft with [hoverAttack](#hoverattack) = true, less then `0` means it can land and \>= `0` indicates how much the unit will move during hovering on the spot.

bool [bankingAllowed](#bankingallowed)  default: true 

For aircraft with [hoverAttack](#hoverattack) = true, controls whether or not the unit banks when moving turning.

bool [useSmoothMesh](#usesmoothmesh)  default: true 

Does the aircraft follow the real map terrain or the special smoothed out navigation mesh generated by Spring specifically for aircraft?} Can become problematic for construction aircrafts, building in canyons.

float [maxFuel](#maxfuel)  default: 0.0 Removed in 101.0 in favour of more flexible lua custom commands

The maximum flight time in seconds before aircraft must return to an airbase to refuel.

float [refuelTime](#refueltime)  default: 5.0 Removed in 101.0 in favour of more flexible lua custom commands

The time in seconds required to refuel the aircraft at an airbase.

float [minAirbasePower](#minairbasepower)  default: 0.0 Removed in 101.0 in favour of more flexible lua custom commands

The minimum [workerTime](#workertime) an airbase must have to repair / refuel this aircraft.

bool [canLoopbackAttack](#canloopbackattack)  default: false 

Can the aircraft perform an <a href="http://en.wikipedia.org/wiki/Immelmann_turn" class="external text" rel="nofollow">Immelmann turn</a>?

#### Advanced Air Tags

The following set of tags are not well understood and using non-default values can lead to undesired flight behaviours.\

float [wingDrag](#wingdrag)  default: 0.07 

The drag caused by the aircraft's wing. Clamped between `0.0` and `1.0`.

float [wingAngle](#wingangle)  default: 0.08 

The angle between the front and the wing plane.

float [frontToSpeed](#fronttospeed)  default: 0.1 

How far nose can be unaligned to speed vector before accelleration is applied.

float [speedToFront](#speedtofront)  default: 0.07 

Rate for the nose to align to new (true) direction change. Values above 0.1 may lead to cumulative speedup issues.

float [crashDrag](#crashdrag)  default: 0.005 

The drag used when crashing. Clamped between `0.0` and `1.0`.

float [maxBank](#maxbank)  default: 0.8 

The maximum roll (z-axis rotation) the aircraft can achieve.

float [maxPitch](#maxpitch)  default: 0.45 

The maximum pitch (x-axis rotation) the aircraft tries to keep.

float [turnRadius](#turnradius)  default: 500.0 

Hint to Spring unit AI about the required turning radius.

float [verticalSpeed](#verticalspeed)  default: 3.0 

The speed of takeoff and landing, at least for gunships ([hoverAttack](#hoverattack) = true).

float [maxAileron](#maxaileron)  default: 0.015 

The maximum turn speed around the roll (z) axis.

float [maxElevator](#maxelevator)  default: 0.01 

The maximum turn speed around the pitch (x) axis.

float [maxRudder](#maxrudder)  default: 0.004 

The maximum turn speed around the yaw (y) axis.

float [maxAcc](#maxacc)  default: 0.065 

The maximum acceleration or 'engine power' of the aircraft.

float [attackSafetyDistance](#attacksafetydistance)  default: 0 Exists only in version 99.0

Fighters abort dive toward target if within attackSafetyDistance and try to climb back to normal altitude while still moving toward target. It's disabled by default. Set to half of the minimum weapon range to avoid collisions, enemy fire, AOE damage. If set to greater than the weapon range, the unit will fly over the target like a bomber. This tag was removed in version 100.0 and changed to a [Spring.SetMoveTypeData](/lua-movectrl#movetype-controlling) key.

#### Flares

The following set of tags are rarely used and are hardcoded to only work vs. missile weapons. The texture is hardcoded to be `flareprojectiletexture` defined in [Resources.lua](/resources.lua).\

bool [canDropFlare](#candropflare)  default: false 

Can this aircraft drop flares to distract missile weapons?

float [flareReload](#flarereload)  default: 5.0 lua: flareReloadTime 

The time in seconds between successive flare drops.

float [flareDelay](#flaredelay)  default: 0.3 

The delay between detecting an incoming missile and launching flares. Multiplied by a random number between 1 and 16.

float [flareEfficiency](#flareefficiency)  default: 0.5 

The probability that an incoming missile will target the flare instead of the aircraft.

float\[3\] [flareDropVector](#flaredropvector)  default: {0.0, 0.0, 0.0} 

The direction vector which flares are emitted in.

int [flareTime](#flaretime)  default: 3 

The lifetime of a dropped flare in [frames](/gamedev-unitsofmeasurement).

int [flareSalvoSize](#flaresalvosize)  default: 4 

How many flares are dropped at once?

int [flareSalvoDelay](#flaresalvodelay)  default: 0 

The delay in [frames](/gamedev-unitsofmeasurement) between the release of each individual flare in a burst.

### Transports

int [transportSize](#transportsize)  default: 0 

The size of units that the transport can pick up, in terms of the passengers [footprintX](#footprintx).

int [minTransportSize](#mintransportsize)  default: 0 

The smallest size of unit that the transport can pick up, in terms of the passengers [footprintX](#footprintx).

int [transportCapacity](#transportcapacity)  default: 0 

The total number of units that the transport can pick up, with each unit multiplied by it's [footprintX](#footprintx) size. Prior to 101.0 if this tag is not present, then any Script.AttachUnit and Script.DropUnit call in the animation script will be ignored (See [Animation-LuaCallouts#Other](/animation-luacallouts#other)), in successive versions all units can use [Spring.UnitAttach](/lua-syncedctrl#unit-control) et al regardless of this tag.

float [transportMass](#transportmass)  default: 100000.0 

The total cumulative [mass](#mass) of passengers the transport can carry.

float [minTransportMass](#mintransportmass)  default: 0.0 

The minimum [mass](#mass) passenger the transport can carry.

float [loadingRadius](#loadingradius)  default: 220.0 

How far away in [elmos](/gamedev-unitsofmeasurement) can the transporter pick up and drop units?

float [unloadSpread](#unloadspread)  default: 5.0 

How spread out the passengers are when unloaded. Is multiplied by the passengers radius.

bool [isFirePlatform](#isfireplatform)  default: false 

Can transported units still aim and shoot while loaded by this transport?

bool [holdSteady](#holdsteady)  default: false 

If `true` - passengers are slaved to orientation of transporter attachment piece, if `false` - passengers are slaved to orientation of transporter body.

bool [releaseHeld](#releaseheld)  default: false 

Does the transporter unload it's passengers when it dies?

bool [cantBeTransported](#cantbetransported)  default: false for mobile units, true for structures 

Controls if a unit is transportable at all or not. If `false` it is overridden by [Modrules.lua](/modrules.lua) `transportability` subtable tags.

bool [transportByEnemy](#transportbyenemy)  default: true 

Controls if a unit can be transported by an enemy transport. i.e. can it be kidnapped.

int [transportUnloadMethod](#transportunloadmethod)  default: 0 

For air transports. Can be `0` - Land to unload individually, `1` - Flyover drop (i.e. Parachute), or `2` - Land and flood unload all passengers. Can be used on ground transports with mixed results.

float [fallSpeed](#fallspeed)  default: 0.2 

For air transports with [transportUnloadMethod](#transportunloadmethod) = 1. The speed in [elmos](/gamedev-unitsofmeasurement) per second which units will fall at when released from the transport.

float [unitFallSpeed](#unitfallspeed)  default: 0.0 

Allows you to override [fallSpeed](#fallspeed) for an individual passenger.

### Categories

string [category](#category)  default: "" 

The category tag is a string of separate words, each representing a category of units. There is a maximum of 32 categories. The primary purpose of categories is weapon targeting (See [\#weapons](#weapons)). Be aware that if no category is set, by default the unit will not be targetable due to [onlyTargetCategory](#onlytargetcategory) defaulting to a null string also.

string [noChaseCategory](#nochasecategory)  default: "" 

The unit will still target enemies with a matching [category](#category), but will not chase after it if it moves out of weapon range.

### Decals

bool [leaveTracks](#leavetracks)  default: false 

Does the unit leave a track mark decal behind it when it moves? For mobile units.

string [trackType](#tracktype)  default: "stdTank" 

The filename of the image, without extension, assumed to be in `Bitmaps/Tracks/`, to be used as the track decal. The red channel of the image controls the brightness and the green channel the alpha (how visible it is) of the track. Blue channel is unused.

float [trackWidth](#trackwidth)  default: 32.0 

The width of the track decal left on the ground, in [elmos](/gamedev-unitsofmeasurement).

float [trackOffset](#trackoffset)  default: 0.0 

How far back in [elmos](/gamedev-unitsofmeasurement) the track should be drawn from the centre of the unit.

float [trackStrength](#trackstrength)  default: 32.0 

How visible or 'deep' the track mark should be. Also used to determine how long the decal should last.

float [trackStretch](#trackstretch)  default: 1.0 

How much the track is stretched in the forward direction compared to the sides (i.e. used to change aspect ratio).

bool [useBuildingGroundDecal](#usebuildinggrounddecal)  default: false 

For structures, do they display a ground decal on the terrain under their model?

string [buildingGroundDecalType](#buildinggrounddecaltype)  default: "" 

The filename of the image to be used as ground decal. Assumed to be in `Unittextures/`.

int [buildingGroundDecalSizeX](#buildinggrounddecalsizex)  default: 4 

How wide the decal is left to right, in footprint units.

int [buildingGroundDecalSizeY](#buildinggrounddecalsizey)  default: 4 

How wide the decal is top to bottom, in footprint units.

float [buildingGroundDecalDecaySpeed](#buildinggrounddecaldecayspeed)  default: 0.1 

A measure of how quickly the decal should fade out if the structure dies. Essentially this value is multiplied by the time since death and subtracted from the original alpha until the decal is fully transparent.

### Collision Volumes

For a deeper explanation of these tags, see [Gamedev:CollisionVolumes](/gamedev-collisionvolumes). Note that all collision checks first do a pre-check with the unit *radius* before doing the colvol checks. Ergo the unit *radius* must be larger or equal to the colvol!

bool [usePieceCollisionVolumes](#usepiececollisionvolumes)  default: false lua: collisionVolume.defaultToPieceTree 

When turned on the model and UnitDef collision volumes are ignored and Spring generates a bounding box volume for each piece of the unit model. These volumes can be manipulated or replaced by [Spring.SetUnitPieceCollisionVolumeData](/lua-syncedctrl#unit-control). Increases the performance cost of collision calculations.

bool [useFootPrintCollisionVolume](#usefootprintcollisionvolume)  default: false lua: .collisionVolume.defaultToFootprint New in version 92.0

Replaces any defined collision volume with a box with dimensions equal to the object's footprint (this also overrides any custom scaling and/or offsets).

The following three tags can instead be replaced with a [\#collisionVolume](#collisionvolume) subtable:

string [collisionVolumeType](#collisionvolumetype)  default: "s" lua: collisionVolume.type 

What shape should the unit's collision volume be? Can be "box", "sphere or a cylinder aligned to an axis; "cylX", "cylY", "cylZ".

float\[3\] [collisionVolumeScales](#collisionvolumescales)  default: {0.0, 0.0, 0.0} lua: collisionVolume.scale{X\|Y\|Z} 

The lengths of the collision volume in each of the three axes. Note that non-spherical ellipsoids and elliptical cylinders are not supported.

float\[3\] [collisionVolumeOffsets](#collisionvolumeoffsets)  default: {0.0, 0.0, 0.0} lua: collisionVolume.offset{X\|Y\|Z} 

The offset from the unit centre to the hit volume centre in each axis.

The following tags have now been removed from the engine:

int [collisionVolumeTest](#collisionvolumetest)  default: 0 Removed in 90.0 (Now always continuous)

The type of test used to detect collisions. Can be `0` (discrete) or `1` (continuous). Use the latter for catching high speed projectiles which may otherwise 'skip through' small collision volumes, but beware of the increased performance cost.

float\[3\] [modelCenterOffset](#modelcenteroffset)  default: {0.0, 0.0, 0.0} Removed in 89.0 (Now set via lua)

How far from the model's defined centre should the centre of the unit be?

### Selection Volumes

Introduced in 104.0, units may now have custom selection volumes in exactly the same way as collision volumes were already defined.

bool [usePieceSelectionVolumes](#usepieceselectionvolumes)  default: false lua: .selectionVolume.defaultToPieceTree New in version 104.0

When turned on the model and UnitDef selection volumes are ignored and Spring generates a bounding box volume for each piece of the unit model (the same volumes are used for collision and selection). These volumes can be manipulated or replaced by [Spring.SetUnitPieceColisionVolumeData](/lua-syncedctrl#unit-control). Increases the performance cost of selection calculations.

bool [useFootPrintSelectionVolume](#usefootprintselectionvolume)  default: false lua: .selectionVolume.defaultToFootprint New in version 104.0

Replaces any defined selection volume with a box with dimensions equal to the object's footprint (this also overrides any custom scaling and/or offsets).

The following three tags can instead be replaced with a [\#selectionVolume](#selectionvolume) subtable:

string [selectionVolumeType](#selectionvolumetype)  default: "s" lua: collisionVolume.type New in version 104.0

What shape should the unit's selection volume be? Can be "box", "sphere or a cylinder aligned to an axis; "cylX", "cylY", "cylZ".

float\[3\] [selectionVolumeScales](#selectionvolumescales)  default: {0.0, 0.0, 0.0} lua: .selectionVolume.scale{X\|Y\|Z} New in version 104.0

The lengths of the selection volume in each of the three axes. Note that non-spherical ellipsoids and elliptical cylinders are not supported.

float\[3\] [selectionVolumeOffsets](#selectionvolumeoffsets)  default: {0.0, 0.0, 0.0} lua: .selectionVolume.offset{X\|Y\|Z} New in version 104.0

The offset from the unit centre to the selection volume centre in each axis.

### Attack Behaviours

int [highTrajectory](#hightrajectory)  default: 0 lua: highTrajectoryType 

Can the unit fire it's (ballistic) weapons in a high trajectory arc? Can be `0` - Low trajectory only, `1` - High trajectory only, or `2` - Toggle button.

bool [kamikaze](#kamikaze)  default: false lua: canKamikaze 

Does the unit attack its target by blowing itself up?

float [kamikazeDistance](#kamikazedistance)  default: 0.0 lua: kamikazeDist 

How close to the target, in [elmos](/gamedev-unitsofmeasurement), the unit must get before detonating. Measured in 3D, not 2D.

bool [kamikazeUseLOS](#kamikazeuselos)  default: false 

Does the target unit have to be in LOS when detonating or only within [kamikazeDistance](#kamikazedistance).

bool [strafeToAttack](#strafetoattack)  default: false 

Should the unit move sideways when it can't shoot?

### Other

string [decoyFor](#decoyfor)  default: "" 

The UnitDef name (not human [name](#name)) which this unit is a decoy for.

int [selfDestructCountdown](#selfdestructcountdown)  default: 5 lua: selfDCountdown 

The length in seconds taken between issuing self destruct order and the unit exploding.

float [damageModifier](#damagemodifier)  default: 1.0 lua: armoredMultiple 

The multiplier applied to weapon damage when the units ARMORED status (See [Lua_ConstCOB](/lua-constcob)) is turned on.

bool [isTargetingUpgrade](#istargetingupgrade)  default: false lua: targFac 

Does the unit upgrade the targeting so that units shoot accurately at enemy units which are in radar but not in LOS.

bool [isFeature](#isfeature)  default: false 

Does the unit immediately die into it's [corpse](#corpse) feature when built? Used mainly for making walls.

bool [hideDamage](#hidedamage)  default: false 

Should the units current health be invisible to enemy players?

bool [showPlayerName](#showplayername)  default: false 

Should the unit display it's controlling player as its name instead of [name](#name). Generally used for commander or hero units.

bool [showNanoFrame](#shownanoframe)  default: true 

Does the unit show an OTA-style nanoframe whilst being constructed?

int [unitRestricted](#unitrestricted)  default: MAX_UNITS lua: maxThisUnit 

How many of this unit type may a player control at once? Defaults to being the maximum amount of units controllable. Is overridden by lobby unit restrictions.

float [power](#power)  default: [buildCostMetal](#buildcostmetal) + ([buildCostEnergy](#buildcostenergy) / 60.0) 

The relative power of the unit. Used in weapon targeting priority and experience gain calculations.

## Sub Tables

### collisionVolume

The `collisionVolume` subtable of a UnitDef replaces the older individual [collisionVolumeType](#collisionvolumetype), [collisionVolumeScales](#collisionvolumescales) and [collisionVolumeOffsets](#collisionvolumeoffsets) tags.

string [type](#type)  default: "s" lua: .collisionVolume.type 

What shape should the unit's collision volume be? Can be "box", "sphere" or a "cylinder".

string [axis](#axis)  default: "z" 

Which axis does the unit's collision volume lie along? Can be "x", "y" or "z".

float\[3\] [scales](#scales)  default: {0.0, 0.0, 0.0} lua: .collisionVolume.scale{X\|Y\|Z} 

The lengths of the collision volume in each of the three axes. Note that non-spherical ellipsoids and elliptical cylinders are not supported.

float\[3\] [offsets](#offsets)  default: {0.0, 0.0, 0.0} lua: .collisionVolume.offset{X\|Y\|Z} 

The offset from the unit centre to the hit volume centre in each axis.

### selectionVolume

The `selectionVolume` subtable of a UnitDef can replace the individual [selectionVolumeType](#selectionvolumetype), [selectionVolumeScales](#selectionvolumescales) and [selectionVolumeOffsets](#selectionvolumeoffsets) tags.

string [type](#type)  default: "s" lua: .selectionVolume.type 

What shape should the unit's selection volume be? Can be "box", "sphere" or a "cylinder".

string [axis](#axis)  default: "z" 

Which axis does the unit's selection volume lie along? Can be "x", "y" or "z".

float\[3\] [scales](#scales)  default: {0.0, 0.0, 0.0} lua: .selectionVolume.scale{X\|Y\|Z} 

The lengths of the selection volume in each of the three axes. Note that non-spherical ellipsoids and elliptical cylinders are not supported.

float\[3\] [offsets](#offsets)  default: {0.0, 0.0, 0.0} lua: .selectionVolume.offset{X\|Y\|Z} 

The offset from the unit centre to the selection volume centre in each axis.

### weapons

The `weapons` subtable of a UnitDef tells Spring which weapons the unit has. It is a simple array (number indexed table) of `weaponName`s (not the human readable `name`!).

The following additional tags are associated with this subtable:

string [name](#name)  default: "" 

The `weaponName` of the weapon (See [Gamedev:WeaponDefs](/gamedev-weapondefs)). If using the weapondefs_post.lua provided by [springcontent.sdz](/gamedev-glossary), you may include the WeaponDef tables within the UnitDef as the `weaponDefs` subtable, and refer to them with `def` rather than `name`. This can be a useful way to organise definitions if units do not generally share weapons.

string [badTargetCategory](#badtargetcategory)  default: "" 

A string of unit [category](#category) entries which this weapon prefers to avoid targeting. i.e. given two units which *can* be targeted, any unit whose [category](#category) matches any entry in this tag, will be targeted last. (See [\#Categories](#categories))

string [onlyTargetCategory](#onlytargetcategory)  default: "" 

A string of unit [category](#category) entries which this weapon can target. i.e. any unit whose [category](#category) does not match any entry in this tag, cannot be targeted by this weapon. (See [\#Categories](#categories))

int [slaveTo](#slaveto)  default: 0 

The number of the weapon which this weapon is slaved to. A slaved weapon can only target what it's master is targeting. Weapon numbers start at `1` and correspond to the index of the weapon within the subtable.

float\[3\] [mainDir](#maindir)  default: {0.0, 0.0, 1.0} i.e. forwards 

A vector representing the firing direction of this weapon if it has a limited firing arc. Used in conjunction with [maxAngleDif](#maxangledif) (See [Gamedev:WeaponMainDir](/gamedev-weaponmaindir)).

float [maxAngleDif](#maxangledif)  default: 360.0 

How wide this weapons limited firing arc is in degrees. Symmetrical about [mainDir](#maindir) i.e. `180.0` is 90 degree freedom either way (See [Gamedev:WeaponMainDir](/gamedev-weaponmaindir)).

float [fuelUsage](#fuelusage)  default: 0.0 

How much fuel in seconds is deducted from the units initial [maxFuel](#maxfuel) when this weapon fires.

### buildOptions

The `buildOptions` subtable of a UnitDef tells Spring which other units the unit can build (in the case of a builder) or produce (in the case of a factory). It is a simple array (number indexed table) of `unitName`s (not the human readable [name](#name)!).

There are no additional tags specific to this subtable.

### SFXTypes

The `SFXTypes` subtable of a UnitDef tells Spring which [CEG](/ceg-main) effects are associated with the unit. It consists of two further subtables, with no additional tags specific to them.

#### explosionGenerators

The `explosionGenerators` subtable of `SFXTypes` tells Spring which [CEGs](/ceg-main) the unit's script can call, via the `EmitSFX()` callout (See [Animation-LuaCallouts#Effects](/animation-luacallouts#effects)). It is a simple array (number indexed table) of CEG names, prefaced by the string `"custom:"`.

#### pieceExplosionGenerators

New in version 83.0

The `pieceExplosionGenerators` subtable of `SFXTypes` tells Spring which [CEGs](/ceg-main) the unit's script can pick at random to attach to a flying unit piece, created from the `Explode()` callout (See [Animation-LuaCallouts#Effects](/animation-luacallouts#effects)). It is a simple array (number indexed table) of CEG names, with no prefix.

Forum thread (with examples): <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=27554" class="external text" rel="nofollow">pieceExplosionGenerators</a>

### sounds

The `sounds` subtable of a UnitDef tells Spring which sound files to play when the unit triggers various events.

Files are assumed to be in the `Sounds/` directory; accepted formats are .wav and .ogg, the former being assumed if no extension is given.

Sounds can be defined in one of three ways:

1.  Each event can be used as though it were a `string` tag referring to the filename.
2.  Each event can be the name of a subtable, which is a simple array containing the filenames. One sound is picked at random from the list each time the event occurs.
3.  Each event can be the name of a subtable, which is a simple array containing further tables, which contain the following tags:

string [file](#file)  default: "" 

The filename of the sound to play.

float [volume](#volume)  default: 1.0 

The default volume of the sound.

Spring checks any referenced sound filename to see if a SoundItem has been created, which allows greater control over how it is played (See [Sounds.lua](/sounds.lua)).

#### sounds Example

For clarification, here is an example of all three methods:

    sounds = {
      -- Method 1
      ok = 'oksound', -- .wav appended
      -- Method 2
      arrived = {
        'arrived1.wav',
        'arrived2.wav',
      },
      -- Method 3
      select = {
        { file = 'selsound1.ogg', volume = 2.0 },
        { file = 'selsound2.ogg', volume = 2.5 },
      },
    }

#### sounds Events

The events called by the engine are as follows:

- **`ok`**

Unit is issued a command.

- **`select`**

Unit is selected by the player.

- **`arrived`**

Unit has arrived at its destination. Mobile ground units only.

- **`build`**

Unit begins building. Called for both factories and mobile construction units.

- **`activate`**

Unit is activated, i.e. Is turned on. Also called when a mobile ground unit starts moving.

- **`deactivate`**

Unit deactivates, i.e. Is turned off.

- **`cant`**

Unit cannot carry out this order. Loaded but not currently called by the engine.

- **`underattack`**

Unit gets attacked. Loaded but not currently called by the engine.

### customParams

The `customParams` subtable of a UnitDef allows the game designer to give their units custom attributes, which can then be accessed via lua gadgets and widgets. It is a map (key-value pair indexed table) of strings. When accessing these attributes in lua the strings can be turned back into numbers, bools or even tables. This gives great control to game designers to essentially implement their own behaviour tags.

There are no additional tags specific to this subtable

## Examples

MC:L implements OO with inheritance (base classes in <a href="http://sourceforge.net/p/mwspring/code/HEAD/tree/Gamedata/unitdefs_pre.lua#l36" class="external text" rel="nofollow">unitdefs_pre.lua</a>)

<a href="http://imolarpg.dyndns.org/trac/balatest/browser/trunk/units/" class="external text" rel="nofollow">'Balanced Annihilation' UnitDefs</a>

<a href="http://code.google.com/p/conflictterra/source/browse/#svn/games/CT/units/" class="external text" rel="nofollow">'Conflict Terra' UnitDefs</a>

<a href="https://github.com/EvolutionRTS/Evolution-RTS/tree/master/units/" class="external text" rel="nofollow">'Evolution RTS' UnitDefs</a>

<a href="https://github.com/imperialwinter/swiw.sdd/tree/master/units/" class="external text" rel="nofollow">'Imperial Winter' UnitDefs</a>

<a href="http://code.google.com/p/journeywar/source/browse/#svn/trunk/units/" class="external text" rel="nofollow">'Journeywar' UnitDefs</a>

<a href="http://sourceforge.net/p/mwspring/code/HEAD/tree/units/" class="external text" rel="nofollow">'MechCommander: Legacy' UnitDefs</a>

<a href="https://github.com/spring1944/spring1944/tree/master/units/" class="external text" rel="nofollow">'Spring: 1944' UnitDefs</a>

<a href="http://code.google.com/p/springtutorialgame/source/browse/#svn/trunk/SpringTutorialGame.sdd/units/" class="external text" rel="nofollow">'Spring Tutorial Game' UnitDefs</a>

<a href="http://code.google.com/p/xta-springrts/source/browse/#svn/trunk/units/" class="external text" rel="nofollow">'XTA' UnitDefs</a>

<a href="https://github.com/ZeroK-RTS/Zero-K/tree/master/units/" class="external text" rel="nofollow">'ZeroK' UnitDefs</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Gamedev:UnitDefs](https://springrts.com/wiki/Gamedev:UnitDefs).*
