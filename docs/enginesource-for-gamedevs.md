---
title: "EngineSource for GameDevs"
source_url: "https://springrts.com/wiki/EngineSource_for_GameDevs"
categories:
  - "Game_Dev"
---
# EngineSource for GameDevs

<div class="mw-parser-output">

## Intro

During creation of a Spring game you will soon notice that not every detail is documented. The most common things can be done without ever looking at the engine. But sometimes there are some specifique questions where one wants more details.

Fortunately, the engine is open source and thus some things can be figured out by looking at it. Wait, isn't that like, super cryptic? Yes, scroll past those parts. A few things are comprehensible.

## Downloading source and opening the files

Download this <a href="https://github.com/spring/spring/zipball/master" class="external free" rel="nofollow">https://github.com/spring/spring/zipball/master</a> and unpack the zip file.

## Text

For example the code to load UnitDefs can be found here: <a href="https://github.com/spring/spring/blob/develop/rts/Sim/Units/UnitDef.cpp" class="external free" rel="nofollow">https://github.com/spring/spring/blob/develop/rts/Sim/Units/UnitDef.cpp</a>

Scroll down to about line 270:\
Notice how there are lines like for example this:

`metalStorage = udTable.GetFloat("metalStorage", 0.0f);`

The word in double quotes ("metalStorage") is the UnitDef tag as it is read from the unit file.

If a tag can not be found in this file in this form, it is very likely that it does nothing and you can remove it from the unit file.

GetFloat means that this tag is a float number. The number, in this case 0.0f, is the default value that is used, when the tag can not be found in the unit file.

Since the engine expects a number (eg 100.0) it is understandable that metalStorage = "a lot", or metalStorage=false will not work.

Beside **GetFloat** there are:

**GetBool** - true or false

**GetInt** - an integer number

**GetString** - a string, that means a word eg a unit name or a file name

**GetFloat3** - 3 floats, for example coordinates in case of "modelCenterOffset" or a vector in case of "flareDropVector"

## Searching text in files

It is usefull to have an text editor that can search for text in multiple files at once, for example this one: <a href="http://notepad-plus-plus.org/" class="external free" rel="nofollow">http://notepad-plus-plus.org/</a>

## Interesting files

Most things outside "Sim" folder are uninteresting.

The files where XY**defs** get loaded:

<a href="https://github.com/spring/spring/blob/develop/rts/Sim/Units/UnitDef.cpp" class="external free" rel="nofollow">https://github.com/spring/spring/blob/develop/rts/Sim/Units/UnitDef.cpp</a>

<a href="https://github.com/spring/spring/blob/develop/rts/Sim/Weapons/WeaponDefHandler.cpp" class="external free" rel="nofollow">https://github.com/spring/spring/blob/develop/rts/Sim/Weapons/WeaponDefHandler.cpp</a>

<a href="https://github.com/spring/spring/blob/develop/rts/Sim/Features/FeatureHandler.cpp" class="external free" rel="nofollow">https://github.com/spring/spring/blob/develop/rts/Sim/Features/FeatureHandler.cpp</a>

<a href="https://github.com/spring/spring/blob/develop/rts/Sim/MoveTypes/MoveInfo.cpp" class="external free" rel="nofollow">https://github.com/spring/spring/blob/develop/rts/Sim/MoveTypes/MoveInfo.cpp</a>

Unit actions (damage, kill, experience,...):\
<a href="https://github.com/spring/spring/blob/develop/rts/Sim/Units/Unit.cpp" class="external free" rel="nofollow">https://github.com/spring/spring/blob/develop/rts/Sim/Units/Unit.cpp</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [EngineSource for GameDevs](https://springrts.com/wiki/EngineSource_for_GameDevs).*
