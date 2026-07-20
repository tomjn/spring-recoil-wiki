---
title: "Sounds.lua"
source_url: "https://springrts.com/wiki/Sounds.lua"
categories:
  - "Gamedata"
---
# Sounds.lua

<div class="mw-parser-output">

## Location

`sounds.lua` is a file in the `Gamedata/` directory of a Spring Game.

## Purpose

The file is used to define **SoundItems**. Beside simply "linking" to an audio file, **SoundItems** can use various tags to alter the playback of the file.

## Source

The engine source code which parses the data from this file is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/System/Sound/SoundItem.cpp" class="external text" rel="nofollow">rts/System/Sound/SoundItem.cpp</a>

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

Wherever a sound is played in Spring, be it associated with a [UnitDef](/gamedev-unitdefs), [WeaponDef](/gamedev-weapondefs) or via the [lua API](/lua-unsyncedctrl#sounds), a **SoundItem** is used. If you access a raw sound file, a **SoundItem** with the defaults is created for you.

Additionally, multiple **SoundItems** can use one single file with different settings, this is very efficient, as they only use 1 shared buffer.

New in version 89.0: All item names are treated in lowercase.

## Tips

You can update & reload your sounddefs at runtime via Spring.LoadSoundDef("gamedata/sounds.lua").

### Reserved SoundItems

The following **SoundItems** are reserved for specific engine sounds:

- `IncomingChat` - Is played when a chat message is received.
- `MultiSelect` - Is played when multiple units are selected simultaneously.
- `MapPoint` - Is played when a map point is placed by the player or an ally.
- `FailedCommand` - Is played when a unit fails to execute a command. e.g. When a unit cannot reach it's destination etc.
- `default` - Used for all sounds that aren't listed in `sounds.lua`.

### SoundItem Properties

float [gain](#gain)  default: 1.0 

This varies the loudness, \> `1.0` is louder, \< `1.0` is quieter. `0.0` is silent.

float [gainmod](#gainmod)  default: 0.0 

If \> `0.0` then this adds a random amount to [gain](#gain) each time the sound is played. Clamped between `0.0` and `1.0`. The result is in the range **\[**([gain](#gain) \* (1 + [gainMod](#gainmod)))**,** ([gain](#gain) \* (1 - [gainMod](#gainmod)))**\]**.

float [pitch](#pitch)  default: 1.0 

Varies the pitch of the sound, \> `1.0` is higher pitched, \< `1.0` is lower.

float [pitchmod](#pitchmod)  default: 0.0 

If \> `0.0` then this adds a random amount to [pitch](#pitch) each time the sound is played. Clamped between `0.0` and `1.0`. The result is in the range **\[**([pitch](#pitch) \* (1 + [pitchMod](#pitchmod)))**,** ([pitch](#pitch) \* (1 - [pitchMod](#pitchmod)))**\]**.

float [dopplerscale](#dopplerscale)  default: 1.0 

How unit and camera speed affects the pitch of the sound, to exaggerate it, use values \> `1.0`. Use `0.0` to completely disable the effect.

int [priority](#priority)  default: 0 

When lots of sounds are played, sounds with lower [priority](#priority) are more likely to get cut off. A [priority](#priority) \> `0` will never be cut of (priorities can be negative).

int [maxconcurrent](#maxconcurrent)  default: 16 

How many copies of this sound can be played at once?

float [maxdist](#maxdist)  default: MAX_FLOAT 

The cut-off distance (in [elmos](/gamedev-unitsofmeasurement)) at which this sound will no longer be played.

float [rolloff](#rolloff)  default: 1.0 

How fast the sound becomes quieter with distance. `0.0` means always the same loudness regardless of distance.

bool [in3d](#in3d)  default: true 

Non-3d sounds always came out of the front-speakers (or the centre one). 3d sounds are, well, in 3d.

int [looptime](#looptime)  default: 0 

The time in milliseconds the sound should loop for.

## Examples

### default sounds

The following is the default `sounds.lua` supplied in the base content [springcontent.sdz](/gamedev-glossary) archive, with some of the comments removed (As the information is presented here).

    local Sounds = {
      SoundItems = {
        IncomingChat = {
          --- always play on the front speaker(s)
          file = "sounds/beep4.wav",
          in3d = "false",
        },
        MultiSelect = {
          --- always play on the front speaker(s)
          file = "sounds/button9.wav",
          in3d = "false",
        },
        MapPoint = {
          --- respect where the point was set, but don't attenuate in distance
          --- also, when moving the camera, don't pitch it
          file = "sounds/beep6.wav",
          rolloff = 0,
          dopplerscale = 0,
        },
        ExampleSound = {
          --- some things you can do with this file
          --- can be either ogg or wav
          file = "somedir/subdir/soundfile.ogg",
          gain = 1,
          pitch = 1,
          dopplerscale = 1,
          priority = 0,
          maxconcurrent = 16,
          maxdist = 20000,
          rolloff = 1,
          in3d = true,
          looptime = 0,
        },

        -- new since 89.0
        default = {
          gainmod = 0.35,
          pitchmod = 0.3,
          pitch = 0.7,
          in3d = true,
        },
      },
    }

    return Sounds

### Using PitchMod to prevent loud explosions=

Taken from this thread by jK: <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=28819" class="external text" rel="nofollow">Use PitchMod in sounds.lua to prevent loud explosions</a>

Explosions can sound louder than intended when they are started in the same simFrame and so are played in sync -\> resonance. PitchMod now changes the playback time (e.g. with 0.3 the sounds should have a playback time of 100-130%) and so there isn't a resonance anymore even when the sound is started multiple times in the same simframe.

    local files = VFS.DirList("sounds/explosions/")
    local t = Sounds.SoundItems
    for i=1,#files do
       local fileName = files[i]
       t[fileName] = {
          file     = fileName;
          pitchmod = 0.3;
          gainmod  = 0.2;
          maxconcurrent = 8;
       }
    end

### External Examples

<a href="https://github.com/spring/spring/blob/106.0/cont/base/springcontent/gamedata/sounds.lua" class="external text" rel="nofollow">cont/base/springcontent/gamedata/sounds.lua</a> - The original default `sounds.lua`

<a href="https://github.com/ZeroK-RTS/Zero-K/blob/master/gamedata/sounds.lua" class="external text" rel="nofollow">ZeroK sounds.lua</a>

## Further Reading

<a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=17647&amp;start=25" class="external text" rel="nofollow">Information about sounds.lua</a> <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=20685" class="external text" rel="nofollow">Information about gainMod and pitchMod</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Sounds.lua](https://springrts.com/wiki/Sounds.lua).*
