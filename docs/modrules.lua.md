---
title: "Modrules.lua"
source_url: "https://springrts.com/wiki/Modrules.lua"
categories:
  - "Gamedata"
---
# Modrules.lua

<div class="mw-parser-output">

## Location

`modrules.lua` is a file in the `Gamedata/` directory of a Spring game.

## Purpose

This file controls various global parameters of the game, for example how fast units gain experience, what unit types can be transported, how fine grained the LOS system is, etc.

## Source

The engine source code which parses the data from this file is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Misc/ModInfo.cpp" class="external text" rel="nofollow">rts/Sim/Misc/ModInfo.cpp</a>

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

`Modrules.lua` is divided into several sub-tables containing tags specific to each section, as follows:

### capture

float [energyCostFactor](#energycostfactor)  default: 0.0 

How much of the original energy cost it requires to capture something.

### construction

bool [constructionDecay](#constructiondecay)  default: true 

Do uncompleted building frames begin to decay if no builder is working on them?

float [constructionDecayTime](#constructiondecaytime)  default: 6.66 

The time in seconds before abandoned building frames begin to decay.

float [constructionDecaySpeed](#constructiondecayspeed)  default: 0.03 

How fast build progress decays for abandoned building frames. Note that the rate is inversely proportional to the [buildtime](/gamedev-unitdefs#buildtime) i.e. a building with a larger [buildtime](/gamedev-unitdefs#buildtime) will decay more slowly for a given value of this tag than a building with a shorter [buildtime](/gamedev-unitdefs#buildtime).

### experience

float [experienceMult](#experiencemult)  default: 1.0 

Controls the amount of experience gained by units engaging in combat. The formulae used are: `xp for damage = 0.1 * experienceMult * damage / target_HP * target_power / attacker_power` `xp for kill = 0.1 * experienceMult * target_power / attacker_power`. Where [power](/gamedev-unitdefs#power) can be set by the UnitDef tag.

float [powerScale](#powerscale)  default: 1.0 

Controls how gaining experience changes the relative [power](/gamedev-unitdefs#power) of the unit. The formula used is `Power multiplier = powerScale * (1 + xp / (xp + 1))`.

float [healthScale](#healthscale)  default: 0.7 

Controls how gaining experience increases the [maxDamage](/gamedev-unitdefs#maxdamage) (total hitpoints) of the unit. The formula used is `Health multiplier = healthScale * (1 + xp / (xp + 1))`.

float [reloadScale](#reloadscale)  default: 0.4 

Controls how gaining experience decreases the [reloadTime](/gamedev-unitdefs#reloadtime) of the unit's weapons. The formula used is `Rate of fire multiplier = reloadScale * (1 + xp / (xp + 1))`.

### featureLOS

int [featureVisibility](#featurevisibility)  default: 3 

Controls the visibility of features. Can be `0` - no default LOS for features, `1` - Gaia features always visible, `2` - allyteam & Gaia features always visible, or `3` - all features always visible.

### fireAtDead

bool [fireAtKilled](#fireatkilled)  default: false 

Will units continue to target and fire on enemies which are running their `Killed()` animation? (See [Animation-LuaCallins#Generic](/animation-luacallins#generic))

bool [fireAtCrashing](#fireatcrashing)  default: false 

Will units continue to target and fire on enemy aircraft which are in the 'crashing' state? (See [Lua_SyncedCtrl#Unit_Control](/lua-syncedctrl#unit-control))

### flankingBonus

int [defaultMode](#defaultmode)  default: 1 

The default [flankingBonusMode](/gamedev-unitdefs#flankingbonusmode) for units. Can be `0` - No flanking bonus. Mode `1` builds up the ability to move over time, and swings to face attacks, but does not respect the way the unit is facing. Mode `2` also can swing, but moves with the unit as it turns. Mode `3` stays with the unit as it turns and otherwise doesn't move, the ideal mode to simulate something such as tank armour.

### los

int [losMipLevel](#losmiplevel)  default: 1 

Controls the resolution of the LOS calculations. A higher value means lower resolution but increased performance. An increase by one level means half the resolution of the LOS map in both x and y direction. Must be between `0` and `6` inclusive.

float [losMul](#losmul)  default: 1.0 Removed from version 101.0

Multiplies all unit's [sightDistance](/gamedev-unitdefs#sightdistance) by this value. Generally speaking you should always use the default.

int [airMipLevel](#airmiplevel)  default: 1 

Controls the resolution of the LOS vs. aircraft calculations. A higher value means lower resolution but increased performance. An increase by one level means half the resolution of the air-LOS map in both x and y direction. Must be between `0` and `30` inclusive. <a href="http://springrts.com/mantis/view.php?id=4031#c11709" class="external autonumber" rel="nofollow">[1]</a> - jK describe for you what the value means.

float [airLosMul](#airlosmul)  default: 1.0 Removed from version 101.0

Multiplies all unit's [airSightDistance](/gamedev-unitdefs#airsightdistance) by this value. Generally speaking you should always use the default.

int [radarMipLevel](#radarmiplevel)  default: 2 

Controls the resolution of the radar. See description of airMipLevel for details.

### movement

bool [allowAirPlanesToLeaveMap](#allowairplanestoleavemap)  default: true 

Are (gunship) aircraft allowed to fly outside the bounds of the map?

bool [allowAircraftToHitGround](#allowaircrafttohitground)  default: true New in version 90.0

Are aircraft allowed to hit the ground whilst manoeuvring?

bool [allowPushingEnemyUnits](#allowpushingenemyunits)  default: false New in version 83.0

Can enemy ground units push each other during collisions?

bool [allowCrushingAlliedUnits](#allowcrushingalliedunits)  default: false New in version 85.0

Can allied ground units crush each other during collisions? Units still have to be explicitly set as crushable using the `crushable` parameter of [Spring.SetUnitBlocking](/lua-syncedctrl#unit-control).

bool [allowUnitCollisionDamage](#allowunitcollisiondamage)  default: false New in version 85.0

Do unit-unit (skidding) collisions cause damage?

bool [allowUnitCollisionOverlap](#allowunitcollisionoverlap)  default: true New in version 89.0

Can mobile units collision volumes overlap one another? Allows unit movement like <a href="http://www.youtube.com/watch?v=mRtePUdVk2o" class="external text" rel="nofollow">this (video)</a> at the cost of more 'clumping'.

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/mRtePUdVk2o" title="Flash Dance - Part II" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

bool [allowGroundUnitGravity](#allowgroundunitgravity)  default: true New in version 92.0

Allows fast moving mobile units to 'catch air' as they move over terrain.

bool [allowHoverUnitStrafing](#allowhoverunitstrafing)  default: true if using QTPFS pathfinder New in version 92.0

Allows hovercraft units to slide in turns.

bool [useClassicGroundMoveType](#useclassicgroundmovetype)  default: false New in version 89.0 Removed from version 102.0

A ticket back to unit movement circa 2009: no reversing, no [turninplace](/gamedev-unitdefs#turninplace) = false, no smooth collision handling, no nothing. For comparison of pathfinding code.

### paralyze

bool [paralyzeOnMaxHealth](#paralyzeonmaxhealth)  default: true 

Are units paralyzed when the level of emp is greater than their current health or their maximum health?

### reclaim

int [multiReclaim](#multireclaim)  default: 0 

Can multiple units reclaim a feature or only one? `0` implies the latter, all other values the former.

int [reclaimMethod](#reclaimmethod)  default: 1 

Controls how features are reclaimed. Can be `0` - gradual reclaim, `1` - all reclaimed at end, any other positive value `n` - reclaim in `n` chunks.

int [unitMethod](#unitmethod)  default: 1 

Controls how units are reclaimed. Can be `0` - gradual reclaim, `1` - all reclaimed at end, any other positive value `n` - reclaim in `n` chunks.

float [featureEnergyCostFactor](#featureenergycostfactor)  default: 0.0 

How much energy should reclaiming a feature cost? Multiplier against the fraction of the features' [metal](/gamedev-featuredefs#metal) content reclaimed.

float [unitEnergyCostFactor](#unitenergycostfactor)  default: 0.0 

How much energy should reclaiming a unit cost? Multiplier against the fraction of the unit's [buildCostEnergy](/gamedev-unitdefs#buildcostenergy) reclaimed.

float [unitEfficiency](#unitefficiency)  default: 1.0 

How much metal should reclaiming a unit return? Multiplier against the unit's [buildCostMetal](/gamedev-unitdefs#buildcostmetal).

bool [allowEnemies](#allowenemies)  default: true 

Can enemy units be reclaimed?

bool [allowAllies](#allowallies)  default: true 

Can allied units be reclaimed?

### repair

float [energyCostFactor](#energycostfactor)  default: 0.0 

How much of the original energy cost it requires to repair something.

### resurrect

float [energyCostFactor](#energycostfactor)  default: 0.5 

How much of the original energy cost it requires to resurrect something.

### sensors

bool [requireSonarUnderWater](#requiresonarunderwater)  default: true 

If `true` then when underwater, units only get LOS if they also have sonar.

bool [alwaysVisibleOverridesCloaked](#alwaysvisibleoverridescloaked)  default: false New in version 101.0

If `true` then units will be visible even when cloaked (probably?).

bool [separateJammers](#separatejammers)  default: true New in version 101.0

When `true` each allyTeam only jams their own units.

### system

int [pathFinderSystem](#pathfindersystem)  default: 0 New in version 85.0

Which pathfinder does the game use? Can be `0` - The legacy default pathfinder, `1` - Quad-Tree Pathfinder System ([QTPFS](/gamedev-glossary)) or `-1` - disabled.

float [pathFinderUpdateRate](#pathfinderupdaterate)  default: 0.007 New in version 98.0

Controls how often the pathfinder updates; larger values means more rapid updates.

float [pathFinderRawDistMult](#pathfinderrawdistmult)  default: 1.25 New in version 105.+ BAR

Engine does raw move with a limited distance, this multiplier adjusts that

bool [allowTake](#allowtake)  default: true New in version 103.0

Enables and disables the /take [UI command](/ui-commands).

### transportability

bool [transportAir](#transportair)  default: false 

Can aircraft be transported?

bool [transportShip](#transportship)  default: false 

Can ships be transported?

bool [transportHover](#transporthover)  default: false 

Can hovercraft be transported?

bool [transportGround](#transportground)  default: true 

Can ground units be transported?

bool [targetableTransportedUnits](#targetabletransportedunits)  default: false New in version 89.0

Can transported units be targeted by weapons? `true` allows both manual and automatic targeting.

## Examples

### Empty

`modrules.lua` can simply return an empty table like this:

    return {}

If you do this, Spring will use the default values.

### Configurable by modoptions

Interestingly `modrules.lua` can read [modoptions](/modoptions.lua), so these parameters can be scripted to be configurable from the lobby. For example to allow selecting either legacy default pathfinder or [QTPFS](/gamedev-glossary) via a modoption:

      system = {
        pathFinderSystem = (Spring.GetModOptions() and (Spring.GetModOptions().qtpfs == "1") and 1) or 0,
      },

### External Examples

<a href="https://github.com/EvolutionRTS/Evolution-RTS/blob/master/Gamedata/modrules.lua" class="external text" rel="nofollow">'Evolution RTS' Modrules.lua</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Modrules.lua](https://springrts.com/wiki/Modrules.lua).*
