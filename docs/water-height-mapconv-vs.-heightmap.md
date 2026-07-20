---
title: "Water Height: Mapconv vs. Heightmap"
source_url: "https://springrts.com/wiki/Water_Height:_Mapconv_vs._Heightmap"
categories:
  - "Map_making"
---
# Water Height: Mapconv vs. Heightmap

<div class="mw-parser-output">

[Development](/development-main) \< [Map Development](/mapdev-main) \< Water Height: Mapconv vs. Heightmap

### The Problem

It has come up as a source of confusion as to what shade of grey in your heightmap is water level. The simple answer is that there isn't a simple answer, but don't worry it really isn't all that hard. It is determined by your height input parameters to mapconv (Does none of this make sense? You probably want to stop here, go back and read some of the <a href="http://taspring.clan-sy.com/wiki/Map_development" class="external text" rel="nofollow">tutorials</a>. ) *Note this assumes you have both 0% and 100% grey (black and white, respectively) on your heightmap, which should be the case (this maximises the range of greys you can play with for your heightmap)*

the **-x** value in mapconv is the altitude (in elmos?) of a 100% white surface

the **-n** value is the altitude of a 0% white surface

To find the altitude of an intermediate shade of grey, do this,

**n+(y\*(x-n)) = a** or, simplified, **y\*x + (1-y)\*n = a**

Where **y** is your value (in percent or in RGB value / 255) **x** and **n** are the parameters from mapconv and **a** is the altitude of that value

**The water level is always assumed to be 0 in mapconv**, so anything with a negative **a** value will be underwater.

### An Example

So to make 50% grey underwater, you could for example set your water line at 55% grey. Then, some values for mapconv that would work are:

- this would produce very low mountains

-x 82 -n -100

- this would probably be better

-x 205 -n -250

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Water Height: Mapconv vs. Heightmap](https://springrts.com/wiki/Water_Height:_Mapconv_vs._Heightmap).*
