---
title: "Units:FlankingBonus"
source_url: "https://springrts.com/wiki/Units:FlankingBonus"
categories:
  - "Deprecated"
---
# Units:FlankingBonus

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

## History

FlankingBonus is a quick, integrated way to give units a resistance to damage from certain directions. It started life long ago, in the dark ages of spring, under the name of BonusShield. In its default form it hid there, secretly manipulating the damage dealt to units in an attempt to encourage flanking. And there it worked its special little magic, known to very few, until July of 2007, when the great lurking presence felt it brush by, and exposed bonusShield to the world.

This mysterious code had few parameters at the time, and each one of them was hardcoded. There was the direction it was facing, that would determine where there would be minimum damage, which started at south. But it was more complicated than that. You see, bonusShield could move, and did so by building up a reserve of mobility as time ticked by. When an attack would hit, it would use this reserve to swing and face the attacker, buying a precious bit of extra health as long as no units could sneak by to the other direction. But bonusShield had its flaws. It completely ignored the way a unit was facing, so a unit spinning in place while being shot from the West could recieve minimum damage from each shot. It was also 'mandatory hardcoded crap', completely unchangeable by any unit settings.

But lo, the lurking presence had a plan: a plan to not only rid the world of the scourge of hardcoded bonusShield, but dreams of something better, something usefull, something that could make a tank's armor realistic, give units the ability to have variable armor layout at the push of a button, not merely a 'bonusShield', but a flankingBonus, a fully configurable system built out of the ashes of the old. And so it set to work, making an extensive patch to be applied to spring's core.

This patch held the ability to banish bonusShield at a modder's whim, but held so much more for those willing to dig deeper. Suddenly, direction, mobility, damage levels, and more were all configurable. A tank could have extra armor in its front, or following the main turret, and click this power on and off in a second. Rejoicing was farspread, and history books were filled with the inspiring tale.

## Specifics

flankingBonus takes the following tags:\

### int flankingBonusMode;

0: no flanking bonus\
1: global coords, mobile\
2: unit coords, mobile\
3: unit coords, locked\

### float3 flankingBonusDir;

units takes less damage when attacked from this dir (encourage flanking fire)

### float flankingBonusMax;

damage factor for the least protected direction

### float flankingBonusMin;

damage factor for the most protected direction

### float flankingBonusMobilityAdd;

how much the ability of the flanking bonus direction to move builds up each frame

### flankingBonusMode

Defaults to what is set in modrules, which itself defaults to 1, the old way. Mode 0 is self explanitory.\
Mode 1 builds up the ability to move over time, and swings to face attacks, but does not respect the way the unit is facing.\
Mode 2 also can swing, but moves with the unit as it turns.\
Mode 3 stays with the unit as it turns and otherwise doesn't move, the ideal mode to simulate something such as tank armor.\
To set the default in modrules.tdf, use the following code:

\[flankingBonus\] {

     defaultMode=1;  // defaults to 1

}

### flankingBonusDir

This is the direction where the armor is facing; where damage is least. It is in the form of a standard spring vector. In global coordinates mode, \<x,y,z\> = East, Up, South. In unit coordinates mode, \<x,y,z\> = Left, Up, Front.

### flankingBonusMax

the maximum damage, when hit from the oppisite direction from flankingBonusDir

### flankingBonusMin

the minimum damage, when hit from the same direction as flankingBonusDir

### flankingBonusMobilityAdd

This defines the ability of flankingBonusDir to move over time. Its value is added to the mobility every slowupdate. When the unit is attacked, the build up mobility value is multiplied by a vector facing the attack, which is added to flankingBonusDir to find the new direction of flankingBonusDir. As an example, if flankingBonusMobilityAdd is .1, after 20 seconds the mobility will have added up to 2, meaning that the added direction has 2x the influence as the previous, and the new direction will roughly match the attack.

## How damage is calculated

It uses the dot product of the attack direction and flankingBonusDir to find where the damage falls between max and min. If you don't know what that is, it doesn't matter. Basically, this is equivalent to taking the cosine of the angle between the two directions, and dealing minimum damage at 1, and maximum damage at -1. flankingBonusDir points in the direction that is best defended, and attacks from there will do a default of 90% damage, and attacks hitting the exact opposite direction do a default of 190% damage. Attacks in the middle will do 140% damage, and it scales smoothly between all these values.

Currently flankingBonus only uses the direction of the attacker, not the actual projectile, because of the innacuracy of projectiles moving through the hitsphere, something I am working on rectifying.

coming soon: how to set per-unit in cob

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Units:FlankingBonus](https://springrts.com/wiki/Units:FlankingBonus).*
