---
title: "Gamedev:FeatureDefs"
source_url: "https://springrts.com/wiki/Gamedev:FeatureDefs"
categories:
  - "Game_Dev"
---
# Gamedev:FeatureDefs

<div class="mw-parser-output">

## Location

FeatureDef files are .lua files stored in the `Features/` directory of a Spring Game.

## Purpose

FeatureDef files have one purpose; to define the properties of features. They are the main description file for what attributes your features should have and how units interact with them.

## Source

The engine source code which loads the tags from these files is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Features/FeatureHandler.cpp" class="external text" rel="nofollow">rts/Sim/Features/FeatureHandler.cpp</a>

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

There follows a comprehensive list of the tags available, their data type, default value and a brief description of what they do. Bear in mind that the source code linked above is the ultimate reference when dealing with these tags.

In lua tables keys (i.e. the tags) should be lower case, here they are represented in camelCase for readability. In your files you may use the `lowerkeys` function on your final table to ensure the keys are properly cased.

It is usual to name the returned FeatureDef table the internal `featureName` desired for the unit.

### General

string [description](#description)  default: "" 

This is the tooltip description of the feature seen by the player.

float [damage](#damage)  default: 0.0 

How much damage this feature can take before being destroyed. Analogous to [maxDamage](/gamedev-unitdefs#maxdamage) for units.

string [featureDead](#featuredead)  default: "" 

The `featureName` of the feature to spawn when this feature is destroyed. Used to make chains of features which 'disintegrate' as they are further damaged. Analogous to [corpse](/gamedev-unitdefs#corpse) for units.

bool [indestructible](#indestructible)  default: false 

Can the feature be destroyed or not? If `true` the feature will not even take damage.

bool [flammable](#flammable)  default: false (true for engine trees) 

Can the feature be set on fire? The size of the flame particle is determined by the model radius. The duration of the fire in [frames](/gamedev-unitsofmeasurement) is a random number in the range \[200, 230\].

bool [noSelect](#noselect)  default: false 

If `true` the cursor won't change to \`reclaim\` when hovering the feature.

float [mass](#mass)  default: 0.4 \* metal + 0.1 \* damage 

The mass of the feature, used in unit/feature crushing calculations (See [Movedefs.lua](/movedefs.lua)). Minimum value is `1.0`.

float [crushResistance](#crushresistance)  default: mass New in version 85.0

How resistant is the feature to being crushed? Any [**MoveClass**](/movedefs.lua) with a [crushStrength](/movedefs.lua#crushstrength) greater than this will crush the feature.

### Visual

string [object](#object)  default: "" lua: modelname 

The filename of the 3D model file for this unit, assumes `Objects3D/` directory. Analagous to [objectName](/gamedev-unitdefs#objectname) for units.

int [smokeTime](#smoketime)  default: 300 

How many frames a corpse feature should emit smoke for after unit death.

int [drawType](#drawtype)  default: 0 

What kind of drawing type is the feature. Can be `0` - A loaded model, `-1` - Nothing rendered for this feature at all (used for geovents), values \>= `1` are used for the engine default trees. Generally speaking you should ignore this tag.

### Reclaim & Resources

bool [reclaimable](#reclaimable)  default: true if not [indestructible](#indestructible), false otherwise 

Can this feature be reclaimed by a construction unit?

bool [autoReclaimable](#autoreclaimable)  default: reclaimable 

Should this feature be reclaimed by a construction unit executing a patrol or area-reclaim command?

float [reclaimTime](#reclaimtime)  default: (metal + energy) \* 6.0 

The time taken to reclaim this feature. Related to unit [reclaimSpeed](/gamedev-unitdefs#reclaimspeed) such that `Time taken to reclaim = feature reclaimTime / unit reclaimSpeed`.

float [metal](#metal)  default: 0.0 

How much metal resource this feature gives the player when reclaimed.

float [energy](#energy)  default: 0.0 

How much energy resource this feature gives the player when reclaimed.

int [resurrectable](#resurrectable)  default: -1 

Can this feature be resurrected back into a living unit? Can be the following values `-1` - Only resurrectable if it is the 1st level [corpse](/gamedev-unitdefs#corpse) of the [UnitDef](/gamedev-unitdefs), `0` - Not resurrectable, `1` - Always ressurrectable.

bool [geoThermal](#geothermal)  default: false New in version 83.0

Does this feature act as a geothermal vent?

### Placement

int [footprintX](#footprintx)  default: 1 

How wide the feature is in footprint units, left to right. 1 footprint unit = 16 [elmos](/gamedev-unitsofmeasurement). Cannot be below `1`.

int [footprintZ](#footprintz)  default: 1 

How wide the feature is in footprint units, top to bottom. 1 footprint unit = 16 [elmos](/gamedev-unitsofmeasurement). Cannot be below `1`.

bool [blocking](#blocking)  default: true 

Does this feature block the movement of units or can they pass right through it? Features that are non-blocking are also ignored by weapon aiming.

bool [upright](#upright)  default: false 

Does the feature tilt with the slope of the terrain or remain upright?

bool [floating](#floating)  default: false New in version 90.0

Does this feature float on the top of water or is it placed on the seabed?

### Decals

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

See [Gamedev:UnitDefs#Collision_Volumes](/gamedev-unitdefs#collision-volumes).

### Selection Volumes

See [Gamedev:UnitDefs#Selection_Volumes](/gamedev-unitdefs#selection-volumes).

### Other

## Sub Tables

### customParams

The `customParams` subtable of a FeatureDef allows the game designer to give their features custom attributes, which can then be accessed via lua gadgets and widgets. It is a map (key-value pair indexed table) of strings. When accessing these attributes in lua the strings can be turned back into numbers, bools or even tables. This gives great control to game designers to essentially implement their own behaviour tags.

There are no additional tags specific to this subtable.

### collisionVolume

See [Gamedev:UnitDefs#collisionVolume](/gamedev-unitdefs#collisionvolume).

### selectionVolume

See [Gamedev:UnitDefs#selectionVolume](/gamedev-unitdefs#selectionvolume).

## Examples

Many games include unit corpse features into the UnitDef (See [Gamedev:UnitDefs#Examples](/gamedev-unitdefs#examples))

<a href="http://imolarpg.dyndns.org/trac/balatest/browser/trunk/features/" class="external text" rel="nofollow">'Balanced Annihilation' FeatureDefs</a>

<a href="http://code.google.com/p/conflictterra/source/browse/#svn/games/CT/features/" class="external text" rel="nofollow">'Conflict Terra' FeatureDefs</a>

<a href="https://github.com/EvolutionRTS/Evolution-RTS/tree/master/features/" class="external text" rel="nofollow">'Evolution RTS' FeatureDefs</a>

<a href="https://github.com/imperialwinter/swiw.sdd/tree/master/features/" class="external text" rel="nofollow">'Imperial Winter' FeatureDefs</a>

<a href="http://code.google.com/p/journeywar/source/browse/#svn/trunk/features/" class="external text" rel="nofollow">'Journeywar' FeatureDefs</a>

<a href="http://sourceforge.net/p/mwspring/code/HEAD/tree/features/" class="external text" rel="nofollow">'MechCommander: Legacy' FeatureDefs</a>

<a href="https://github.com/spring1944/spring1944/tree/master/features/" class="external text" rel="nofollow">'Spring: 1944' FeatureDefs</a>

<a href="http://code.google.com/p/springtutorialgame/source/browse/#svn/trunk/SpringTutorialGame.sdd/features/" class="external text" rel="nofollow">'Spring Tutorial Game' FeatureDefs</a>

<a href="http://code.google.com/p/xta-springrts/source/browse/#svn/trunk/features/" class="external text" rel="nofollow">'XTA' FeatureDefs</a>

<a href="https://github.com/ZeroK-RTS/Zero-K/tree/master/features/" class="external text" rel="nofollow">'ZeroK' FeatureDefs</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Gamedev:FeatureDefs](https://springrts.com/wiki/Gamedev:FeatureDefs).*
