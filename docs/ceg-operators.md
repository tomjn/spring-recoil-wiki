---
title: "CEG:Operators"
source_url: "https://springrts.com/wiki/CEG:Operators"
categories:
  - "CEG"
---
# CEG:Operators

<div id="ceg-operators" class="section mw-parser-output">

## CEG Operators

### Source

The engine source code which implements the CEG operators is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Projectiles/ExplosionGenerator.cpp#L600" class="external text" rel="nofollow">rts/Sim/Projectiles/ExplosionGenerator.cpp#L600</a>

### Introduction

You are not limited to using fixed numbers in CEGs for positions, speeds, and so forth. Instead, you can use operators to change the CEG based on a variety of things.

### Syntax

Operators are read left to right. The operand is always to the right of the operator. Spaces are ignored, except to separate numbers. A number with no operator defaults to addition.

### The Buffer

CEG provides you with a buffer in which you can store numbers using the yank ('y') operator. This buffer can store 16 values, numbered 0 to 15.

### Operators

These are listed in the format "Operator Name (operator)".

#### Index ('i')

Multiplies the operand by the current count index. This index starts at 0 and increments every time the spawn is run, until the spawn has run a number of times equal to its count.

Suggested use: Spawning things in a line.

#### Rand ('r')

Multiplies the operand by a random float between 0 and 1.

Suggested use: Keeping explosions from looking too "perfect", making explosions look different every time.

#### Damage ('d')

Multiplies the operand by damage.

**CEG_DAMAGE:** In a COB script, you can do `SET CEG_DAMAGE [value]`. Any `emit-sfx` instructions will then use that value for the "damage" (use the 'd' operator to access this value).

#### Sawtooth ('m')

Calculates the floating-point remainder of the operand.

#### Discrete ('k')

Calculates the floor of the operand.

#### Sine ('s')

Calculates the sine of the operand.

#### Yank ('y')

Saves the running result into buffer\[operand\], and resets the running result to zero.

#### Multiply ('x')

Multiplies the running result by buffer\[operand\].

#### Add Buffer ('a')

Adds buffer\[operand\] to the running result.

#### Power ('p')

Raises the running result to the operandth power

#### Power Buffer ('q')

Raises the running result to the buffer\[operand\]th power.

#### Add (default)

Adds the operand to the running result. This operator is used if no other operator is given.

### Examples

#### Using 'r'

This is an example of a script that makes 10 smoke particles:

    Heavy_Laser_Expl = {
      smoke = {
        water = true,
        ground = true,
        count = 10,
        properties = {
          -- age increase per frame, when age >= 1  the particle is destroyed
          ageSpeed = 0.04,
          size = 40,
          sizeGrowth = -2,
          pos = [[-30 r60, r30, -30 r60]],
          speed = [[0.75 r-1.5, 1.7 r1.6, 0.75 r-1.5]],
        },
      },
    }

For example in this snippet: `pos = [[-30 r60, r30, -30 r60]]`

The x coordinate (specified with `-30 r60`) will be: `x = -30 + (Random value between 0 and 60)`

#### Using 'i'

Here is an example that uses the index (i) command in the properties:

    heatcloud = {
      ground = true,
      count = 10,
      properties = {
        pos = [[0, i20, 0]],
        heat = 10,
        maxheat = 10,
        heatFalloff = 1,
        size = 30,
      },
    }

This script creates a tower of heatcloud projectile. The first projectile gets `y=0`, the second `y=20`, `y=40`, `y=60`, .. and finally `y=180`.

#### Using 'x' and 'y'

    i0.03125y0 -0.2x0x0

This multiplies the index by `0.03125` and saves it to `buffer[0]`. It then multiplies `-0.2` by `buffer[0]` twice. The result is then `-0.2 (i * 0.03125)^2`. This type of thing is useful for making a series of particles follow a curved path.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [CEG:Operators](https://springrts.com/wiki/CEG:Operators).*
