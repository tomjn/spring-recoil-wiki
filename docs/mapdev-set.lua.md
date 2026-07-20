---
title: "Mapdev:set.lua"
source_url: "https://springrts.com/wiki/Mapdev:set.lua"
categories:
  - "Map_Dev"
---
# Mapdev:set.lua

<div class="mw-parser-output">

## set.lua Reference

This file lists all the units, buildings and features that belong to the gaia team, their locations and orientation.

### Source

The engine source code which reads this file from the map is viewable here:

- ???

### Example

Can be found in the <a href="https://github.com/jk3064/Map-Blueprint/archive/master.zip" class="external text" rel="nofollow">map blueprint</a>

## File Location

relative to the root directory of the map

./mapconfig/featureplacer/set.lua

## Formatting

check <a href="http://www.lua.org/docs.html" class="external text" rel="nofollow">Lua Documentation</a> for syntax etc.

In this wiki page, variables are organised as such: type [VariableName](#variablename)  default: value range: \[valid range\] Required

Description

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

## Sections

### setcfg

    ----------------------------------------------------------
    -- AutoCreated by FeaturePlacer (by smoth)

    local setcfg = {
       unitlist = {
       ...
       { name = 'name', x = 0 , z = 0 , rot = "0"},
       ...
       },
       buildinglist = {
       ...
       { name = 'name', x = 0 , z = 0 , rot = "0"},
       ...
       },
       objectlist = {
       ...
       { name = 'name', x = 0 , z = 0 , rot = "0"},
       ...
       },
    }
    return setcfg

string [name](#name)  default: ? 

name of the unit, feature, or building owned by the gaia team

integer [x](#x)  default: ? 

x position on the map

integer [z](#z)  default: ? 

z position on the map

string [rot](#rot)  default: ? 

a number which specifies the rotation of the object

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:set.lua](https://springrts.com/wiki/Mapdev:set.lua).*
