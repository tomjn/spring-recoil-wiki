---
title: "Animation-CobOverview"
source_url: "https://springrts.com/wiki/Animation-CobOverview"
categories:
  - "Animation"
---
# Animation-CobOverview

<div class="mw-parser-output">

## What is COB?

COB is the Spring engine's scripting system. Each unit has a .cob bitfile which defines many of its major behaviors, including animation and weapon aiming. Of course, COB is also capable of doing a lot more if you wish. When Spring is actually running, it interprets the bitfile for each unit as necessary. This interpreter runs in a very straightforward way, without any fancy optimizations, so don't expect great performance from it.

## BOS

The code that gets compiled into a .cob is written in a .bos file. A program called [Scriptor](/map-game-and-unit-development-programs#scripting-and-unit-stats-files) generally does this compilation. BOS uses a C-like syntax, although it has many Spring-specific features and isn't as powerful as C.

### BOS versus C

Similarities:

- Function syntax. A function is defined by FunctionName(args).
- Block delimiters. Like C, a statement block is delimited by curly braces ({}).
- General syntax. For example, to add two variables and assign the result to a third, you say x = y + z;

Differences:

- Not case sensitive.
- Only one data type. There is only one type of data in COB, which is basically a 32-bit integer.
- Variable declaration.

You can declare a static variable, whose scope encompasses the entire script, using

    static-var x;

You can declare multiple variables at once by separating them with commas.

Alternately, you can declare a local variable:

    var x;

The scope is limited to the function that it is in.

- No pointers or arrays.
- No internal return values. When the script receives a callin, it may return a value to the "outside"; however, there is no way to return a value directly to another function within the script. You will have to use a static variable.
- Function calls.

Functions are called using

    call-script Function(args);

or

    start-script Function(args);

See [COB-Threads](/animation-cobthreads) for details.

- Multiple threads. This isn't as exciting as it sounds. Again, see [COB-Threads](/animation-cobthreads) for details.
- Spring-specific features. There are too many here to name; please consult the other COB articles.

## Further information

Greater detail can be found on the following pages

- [Animation-CobAnimation](/animation-cobanimation)
- [Animation-CobCallins](/animation-cobcallins)
- [Animation-CobConstants](/animation-cobconstants)
- [Animation-CobHitByWeaponID](/animation-cobhitbyweaponid)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Animation-CobOverview](https://springrts.com/wiki/Animation-CobOverview).*
