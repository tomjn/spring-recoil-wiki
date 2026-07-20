---
title: "Emiter scripts"
source_url: "https://springrts.com/wiki/Emiter_scripts"
categories:
  - "Emmanuel"
---
# Emiter scripts

<div id="emiter-scripts-exemples" class="section mw-parser-output">

## Emiter Scripts Exemples:

### make at an (empty) piece a cosmetic or physical effect

`EmitSfx(left_wheel,258)` `EmitSfx(piecename,number)`

number=

1 = flame(not sure) 2 = wave underwater 3 = wave underwater 4 = wave underwater 5 = wave underwater 257 = smoke 258 = smoke 259 = bubles underwater 1024 = emit a Ceg defined in a file (see CeG wiki) 2048 = shoot the weapon1 in the direction of the piece (add +1 for weapon2 +2 for weapon3 etc) 4096 = detonate the weapon1 at the piece location (often use noselfdamage=true in weapondef),add +1 for weapon2 ,+2 for weapon3 ,etc

### make a piece explode or ejected randomly

`Explode(piecename,30)` `Explode(piecename,1)`

*the bitwise contain mostly 2 usual alternative :*

- make your piece explod in faces

or

- make your piece ejectected with flame smoke rebound on ground and make 20 damage at hit location
  - each of this conbination can be selected using exponant of ^2

(not sure if 1 and \> are compatible)\
\[the piece still exist and must be hidded when not placed at the die of the unit\]

`(piecename,bitwise)`

::bitwise =

1 = faces fly fall 2 = piece fly rebound explod 4 = fly rebound 8 = fly insmoke 16 = fly infire 30 = is evry thing smoke fire rebound explod

- note:

the number can be replaced by spring names

    Explode

SFX.SHATTER SFX.EXPLODE SFX.EXPLODE_ON_HIT SFX.FALL SFX.SMOKE SFX.FIRE SFX.NONE SFX.NO_CEG_TRAIL SFX.NO_HEATCLOUD EmitSfx SFX.VTOL SFX.WAKE SFX.REVERSE_WAKE SFX.WHITE_SMOKE SFX.BLACK_SMOKE SFX.BUBBLE SFX.CEG SFX.FIRE_WEAPON SFX.DETONATE_WEAPON

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Emiter scripts](https://springrts.com/wiki/Emiter_scripts).*
