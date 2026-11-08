---
title: "User:Enetheru/Mapping/Sun"
source_url: "https://springrts.com/wiki/User:Enetheru/Mapping/Sun"
---
# User:Enetheru/Mapping/Sun

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

## Sun

Singular Directional global shadow casting light source. This page deals with only the sun specific properties, it would be better to look at a larger map lighting page.

## Specification

### mapinfo.lua

local mapinfo = {\
   ...\
   atmosphere = {\
      ...\
      sunColor = {1.0, 1.0, 1.0},\
      ...\
   },\
   ...\
   lighting = {\
      ...\
      sunStartAngle = 0.0,\
      sunOrbitTime = 1440.0,\
      sunDir = {0.0, 1.0, 2.0, 1e9},\
      ...\
   },\
}

### Direction

> "*Sundir in spring is a vector of X Y Z. If you look at the map in the TA camera (default) left is -X, right is +X up is Y, down is -Y, backwards is -Z and forwards is Z.*" - Beherith [\[1\]](#forum-discussions)

### Colour

The color of the sun in the sky. The values are in the order Red, Green, Blue. This will also effect the size of the star. As the values increase (including over 1.0), the disc will get bigger; the inverse is also true.

### Start Angle

== Orbit Time

## Forum Discussions

<a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=28025" class="external text" rel="nofollow">1</a> Sun direction question.

## Other

it would be nice of the sun got split away from the atmosphere and into a section called universe or something. multiple celestial bodies, meteor belts, rings. dreams are good yes.

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Enetheru/Mapping/Sun). Original page: [User:Enetheru/Mapping/Sun](https://springrts.com/wiki/User:Enetheru/Mapping/Sun).*
