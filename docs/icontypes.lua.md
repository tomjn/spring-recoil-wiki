---
title: "Icontypes.lua"
source_url: "https://springrts.com/wiki/Icontypes.lua"
categories:
  - "Gamedata"
---
# Icontypes.lua

<div class="mw-parser-output">

## Location

`icontypes.lua` is a file in the `Gamedata/` directory of a Spring Game.

## Purpose

This file defines the icons used to represent units on the minimap and rendered in place of 3d geometry when zoomed out.

## Source

The engine source code which parses the data from this file is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Rendering/IconHandler.cpp" class="external text" rel="nofollow">rts/Rendering/IconHandler.cpp</a>

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

Game developers can set icons for different types of units, (such as land, air, sea), or go so far as to give every unit its own icon. The different types icons will be shown for friendly units, and enemy units within Line Of Sight. For enemy units in radar range Spring will use the 'default' icon.

### IconType Properties

string [bitmap](#bitmap)  default: "" 

The location of the custom icon image (not limited to bitmaps!). If it is missing or incorrect, Spring replaces it with the standard radar dot. The bitmap will get blended with the team color, so there is no special team color channel. In order to look nice, the image will need to have an alpha channel for transparency.

float [size](#size)  default: 1.0 

Acts as multiplier for the icon size. The larger the number, the larger the icon will be.

float [distance](#distance)  default: 1.0 

Acts as a multiplier for the distance at which the unit will show up as an icon. The larger the number, the further away the camera has to be from the unit for it to turn into an icon.

bool [radiusAdjust](#radiusadjust)  default: false 

Whether or not the icon should scale with the unit radius.

### Assigning IconTypes

To assign units to a specific icon type, set the [iconType](/gamedev-unitdefs#icontype) attribute of their UnitDef to the type name set in `icontypes.lua` (see [\#Example](#example))

    ...
    iconType = "circle",
    ...

If the [iconType](/gamedev-unitdefs#icontype) tag is missing, Spring sets it to the "default" icontype. If the "default" type is not specified, Spring will create it with the default values. Furthermore, enemy units that are within radar range, but not in your Line Of Sight, will be shown as the default icon. Thus if there is a bitmap specified for the "default" icon type it will override the standard radar blip.

## Example

    local iconTypes = {
      default = {
        size = 1,
        radiusadjust = true,
      },
      flag = {
        bitmap = "icons/flag.png",
        size = 6,
        radiusadjust = true,
        distance = 100,
      },
      circle = {
        bitmap = "icons/circle.png",
        size = 4,
        radiusadjust = true,
        distance = 100,
      },
      ...
    }

    return iconTypes

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Icontypes.lua](https://springrts.com/wiki/Icontypes.lua).*
