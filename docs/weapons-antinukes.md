---
title: "Weapons:Antinukes"
source_url: "https://springrts.com/wiki/Weapons:Antinukes"
categories:
  - "Deprecated"
---
# Weapons:Antinukes

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

## What is an Antinuke?

An antinuke is a stockpile, vlaunch, interceptor weapon. When it detects an enemy nuke launch targeted within its coverage radius, if it has at least one antinuke missile stockpiled, it launches one to intercept the nuke.

## Stockpile

Currently all stockpile weapons have a hardcoded 2s reload time between shots (this is different than the stockpile time).

## Interception Basics

Only one antinuke attempt will ever be made on a given nuke. If the antinuke misses, the nuke is home free.

The antinuke follows a pure pursuit course. That means it will attempt to turn toward the nuke's current position.

An antinuke will detonate a nuke by passing within twice its area of effect of the nuke. It can only detonate the nuke that it is targeted at.

The nuke and antinuke actually do explode, so if they are close to the ground when this happens, anything nearby will take damage.

Nuke and antinukes WILL collide with units. They will not collide with friendlies if you set collideFriendly to be false.

## Interception Success and Time

### Distance

The closer the nuke is to the antinuke, the shorter the time the antinuke has to intercept the nuke. However, the antinuke also has a better chance of catching the nuke when it is traveling slowly.

### areaOfEffect

The greater the area of effect of the antinuke, the more tolerance it has for not meeting the nuke exactly.

### weaponTimer

For vlaunch weapons, weaponTimer controls how long the missile will go upwards before turning towards its target; as such, it also affects the missile's maximum altitude. A short weaponTimer on an antinuke shortens the intercept time; a short weaponTimer on the nuke means that the antinuke has less time to intercept the nuke. Note that a very short weaponTimer on the antinuke can cause the interception to happen close to the nuke silo.

### turnRate

Since the antinuke does not lead its target, a low turnRate can cause the antinuke to miss, especially if the nuke and/or antinuke is very fast. It has less of an effect on the nuke.

### weaponAcceleration

vlaunch weapons continue accelerating after they turn towards their target.

### weaponVelocity

If the antinuke is slower or not much faster than the nuke, it will be unlikely to intercept it if it misses on the initial pass.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Weapons:Antinukes](https://springrts.com/wiki/Weapons:Antinukes).*
