---
title: "Shield Interception Tag Use"
source_url: "https://springrts.com/wiki/Shield_Interception_Tag_Use"
categories:
  - "Game_Dev"
---
# Shield Interception Tag Use

<div class="mw-parser-output">

Shield Interception Tags

The two following tags can be used to control what types of shields can intercept what types of weapons:

**InterceptedByShieldType:** This is defined in the weapon that is to be intercepted. It represents a bitfield that is checked against a similar bitfield on the shield for a positive or negative interception (see examples).

**ShieldInterceptType:** This is defined in the shield. It represents a bitfield that is checked against a similar bitfield on the weapon to determine a positive or negative interception (see examples).

Examples

In order to check for shield collisions, the two tags above are converted into binary format, for example:\

InterceptedByShieldType=5; becomes 101 in binary\
ShieldInterceptType=7; becomes 111 in binary\

To then check that weapon's interception status against the shield, the bitfields need to be lined up as follows:\

101 (Weapon)\
111 (Shield)\

If any of the columns made by this line-up contains two ones, the shield will positively intercept the weapon. In this case there are two columns with two ones in them, so the weapon is intercepted. A final example:\

InterceptedByShieldType=7; becomes 111 in binary\
ShieldInterceptType=24; becomes 11000 in binary\

00111 (Weapon)\
11000 (Shield)\

No interception is registered because no columns contain two ones.

Charts

I (Relinquished) felt that it may help some people to have a few charts or reference tables to quickly see which shields work with what.

**Table of Shield type hit detections** (X's indicate a collision)

<a href="http://i170.photobucket.com/albums/u257/apurelinquished/ShieldGroups.jpg" class="external text" rel="nofollow">Collision Chart</a> ![ShieldGroups.jpg](http://i170.photobucket.com/albums/u257/apurelinquished/ShieldGroups.jpg)

**Binary Collision Shield Groups**

1 2 4 8 16 32 Are the only 6 possible distinct shield groups.

Anything in each of the following categories will collide with any other one in the same category:

    000001 Shields:
        1   3   5   7   9
        11  13  15  17  19
        21  23  25  27  29
        31

    000010 Shields:
        2   3   6   7   10
        11  14  15  18  19
        22  23  26  27  30
        31

    000100 Shields:
        4   5   6   7   12
        13  14  15  20  21
        22  23  28  29  30
        31

    001000 Shields:
        8   9   10  11  12
        13  14  15  24  25
        26  27  28  29  30
        31

    010000 Shields:
        16  17  18  19  20
        21  22  23  24  25
        26  27  28  29  30
        31

    100000 Shields:
        32

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Shield Interception Tag Use](https://springrts.com/wiki/Shield_Interception_Tag_Use).*
