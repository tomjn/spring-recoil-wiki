---
title: "Animation-CobConstants"
source_url: "https://springrts.com/wiki/Animation-CobConstants"
categories:
  - "Animation"
---
# Animation-CobConstants

<div class="mw-parser-output">

## Source

This has a list of all COB SET/GET constants: <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Units/Scripts/CobDefines.h" class="external text" rel="nofollow">rts/Sim/Units/Scripts/CobDefines.h</a>

You'll want to include a file with these constants in your script.

## SET/GET

### Use

Use GET \[tag\] to get a value. Some GETs refer to functions; in this case, use GET \[tag\](arg1, arg2, arg3, arg4). Use SET \[tag\] to \[value\] to change a value.

### Tags

There's a lot of GET/SET tags; I'll cover some of the more useful but less intuitive ones.

- ACTIVATION: Whether the unit is on (true) or off (false).
- ARMORED: When true, any damage dealt to the unit will be multiplied by its damageModifier.
- PRINT: You can use GET PRINT to send up to 4 arguments to chat. Useful for debugging. Example: **get PRINT(1, 5,9,10);** statement will print the following into infolog: **Value 1: 1, 2: 5, 3: 9, 4: 10**
- VETERAN_LEVEL: The unit's experience times 100. Note that you can SET this via script, although the unit won't gain any extra health from doing so.

### Custom Variables

Removed from version 101.0

Higher GET/SET numbers are reserved for custom variables. These are very useful for Lua integration. Setting these variables is much (perhaps 100x) faster than calling functions across Lua and COB; the disadvantages are the limited number of variables and the fact that the other side is not immediately notified of a change in the variable.

- Unit variables: The 8 numbers starting at 1024 correspond to per-unit variables. To get at these from Lua, use Spring.\[Get\|Set\]COBUnitVar.
- Team variables: The 64 numbers starting at 2048 correspond to per-team variables. To get at these from Lua, use Spring.\[Get\|Set\]COBTeamVar.
- Ally variables: The 64 numbers starting at 3072 correspond to per-team variables. To get at these from Lua, use Spring.\[Get\|Set\]COBAllyTeamVar.
- Global variables: The 4096 numbers starting at 4096 correspond to global variables. To get at these from Lua, use Spring.\[Get\|Set\]COBGlobalVar.

## emit-sfx

    emit-sfx [sfxtype] from [piece];

The least significant byte of sfxtype is treated as an unsigned integer; the remaining bits are a bitmask. The bitmask indicates what *type* of sfx to emit, while the number indicates *which* sfx of that type to emit. The bits are as follows:

- 256: Point-based fx. Used for white smoke (1), black smoke (2), and bubbles (3).
- 1024: Unit sfx. Use with the unit's sfxtypes.explosionGenerators. The first one is 0, the second one is 1, etc.
- 2048: Fire weapon. Fires a weapon from the piece (no aiming involved). Again, the first weapon is 0, the second weapon is 1, etc.
- 4096: Explode weapon. Detonates a weapon at the piece. Again, the first weapon is 0, the second weapon is 1, etc.

If the piece has no geometry, then the sfx is emitted in the +z direction from the origin of the piece.

If the piece has 1 vertex, the emit dir is the vector from the origin to the the position of the first vertex the emit position is the origin of the piece.

If there is more than one vertex in the piece, then the emit vector is the vector pointing from v\[0\] to v\[1\], and the emit position is v\[0\].

## explode

Causes the piece to explode and possibly go flying. This actually gives the appearance of making a copy of the piece (henceforth referred to as "debris") so if you're using it outside of Killed() you may want to hide the piece in question.

    explode [piece] type [exptype];

exptype is a bitmask. The bits are as follows:

- SHATTER: Explodes the debris into tiny triangles. Looks like confetti.
- EXPLODE_ON_HIT: Debris will explode on impact, causing about 40 damage.
- FALL: Debris is affected by gravity.
- SMOKE
- FIRE
- BITMAPONLY: No debris, just an explosion graphic.
- NOCEGTRAIL
- NOHEATCLOUD: No explosion before the piece flies off.
- BITMAP\[1...5\]: Not used in Spring, may overlap with Spring specific bits.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Animation-CobConstants](https://springrts.com/wiki/Animation-CobConstants).*
