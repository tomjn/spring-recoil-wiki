---
title: "Scripting for newbs"
source_url: "https://springrts.com/wiki/Scripting_for_newbs"
categories:
  - "Animation"
---
# Scripting for newbs

<div id="scripting-for-newbs" class="section mw-parser-output">

## Scripting for Newbs

This is a reference guide for all of you out there that don't know C++, or are unfamiliar with scriptor.

\<10\> would be to angle 10 degrees. \[10\] would be 10 spring units, look at the upspring model for examples.

An example is:

spin gun around y-axis speed \[10\] accelerate \[2\];

In this example it would rotate the object "gun" around the y-axis "up and down" accelerating speed of 2 units per time, to a max speed of 10 units per time.

Another thing to understand with Cob/Bos is that it has a few built-in scripts, such as:

Activate()

Which is called if the unit is set to on, via onoffable in the unit's fbi file.

Here is an example of a script for a metal extractor:

piece base, top;

1.  include "sfxtype.h"
2.  include "exptype.h"

Activate() { move base to y-axis \[4\]; }

Deactivate() { move base to y-axis \[0\]; }

SpinTop() { while (get ACTIVATION) { move top to y-axis \[4\] speed \[20\]; sleep 400; move top to y-axis \[0\] speed \[20\]; sleep 400; } start-script SpinTop();

The --\|-- are to represent the spacing via tab, I'm not sure if it is neccesary on the first level, but it does make the script easier to read \[at least in my opinion\].

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Scripting for newbs](https://springrts.com/wiki/Scripting_for_newbs).*
