---
title: "MapsBalance"
source_url: "https://springrts.com/wiki/MapsBalance"
categories:
  - "Map_making"
---
# MapsBalance

<div class="mw-parser-output">

[Development](/development-main) \< [Map Development](/mapdev-main) \< MapsBalance

## Making properly balanced maps

So, you're making a map. But how much resources should it have?

Don't regard this as of little relevance! This is very important!

All units in unit sets are balanced assuming that, for example, metal is x harder to get than energy. If your map has, for example, too much metal, units that cost more onto the metal side than energy side become unbalancedly cheap.

## Resource Standards

When making maps, these are the standards for resources:

**Metal:**

- The amount per normal metal extractor is between 0.7 and 2.5
- The amount of total metal in all patches, when beeing extracted by normal metal extractors, is about 5~15 per player, assuming each player is controlling about a quarter of the map. It should be noted, though, that this metal should be SPREAD OUT, not all located at the start position.

**Energy:**

- The amount of tidal energy is almost always 20
- The amount of solar energy is almost always 20
- The amount of wind, is usually 1(min)~25(max) or some other min~max values **that average between 7 and 13**
- The amount of geothermals available to each player generally varies widely depending on the map. A good guideline is to usually have 1 geothermal for every 2 players as a minimum, or 2 geothermals per player as a maximum.

Standards are just that, standards, and you don't HAVE to follow them. But it's better not to go too overboard with resources or use diferent standards very frequently. For example an interesting variation may be to increase the amount of metal generated per extractor, but reduce the number of extractors, so that the total metal available is not changed significantly.

In all cases, **less metal = more strategy**. Too little metal is **always** better than too much. This point cannot be stressed too much.

## Gravity

When making maps, the standard gravity is **140**, or so some assume. No clear "default" value has actually be given by the developers, but it most likely lies somewhere between 100 and 150. If you decide to use a value much higher value, units that fire balistic projectiles (cannons) may not be able to fire their projectiles at the intended range. Be sure to test your map alot before releasing it if you are going to change the gravity drastically.

## Resource Dynamics

This section is dedicated to a more throughout explanation of the workings of the resources in Spring so you can balance your map accordingly.

**Metal:**

Additional info needed.

**Energy:**

A somewhat edited quote from the map forum (thus not a true quote);

"On the wind issue I belive somewhere around 0-20 or 0-30 is pretty reasonable for a map where you want wind to be the "best" option, which it wasn't on all TA maps. Although wind was viable on most maps with the expection of the moon maps. Relying on wind for your energy needs has always been a risky move though, even on maps where it has proven to be useful, because you might just get stuck with all of your generators giving an output of 1, thus ruining your economy for the moment. I hope it stays this way in TA, and personally I find the suggestion that you'd need 30-40 as an average output for wind to be viable quite odd, as online play in TA has shown that's not true. Just for reference, two maps where almost only wind was used in TA are GoW and PD. In GoW I belive the wind varied between 3 to 27, while on PD it was between 1 (or 0, not sure) to 24.

From what I've discussed so far though (with old TA players), most seems to agree that once the average income goes to 7 or above, wind quickly becomes the better option. Some do favor having a few solars just as a backup, but overall wind quickly becomes the better option for your main source of energy income, the solars will at most get the postion of a small backup. It can lead to the added investment of energy storages though.

From this you can easily come to your own conclusions, there are however some minor points that I would want to add. First of, you have to take into account that solars in XTA doesn't cost any energy at all, this is however something that mostly comes into play if your current source of energy is getting destroyed, so you lack energy. The other thing I want to add is a short overview of the advantages of the two different sources of energy, ordered by (from my point of view and without taking into account the lack of energy cost for the XTA solar) importance; 1) The wind generator costs less, only 1/3 of a solar. An average income of 7 will thus already put it as the better choice theoretically. 2) The wind generator builds quicker, this means you will start to get your energy income faster too which might matter quite a bit. 3) The solar gives you a constant supply of energy that does not vary. 4) The solar is better armored than the wind generator. I'm not sure if 3 wind generators have more health than a single solar though (you also have to take into account that they are often built next to each other, so when one goes it will damage the ones next to it). 5) A single solar takes less space than 3 wind generators. Once the average wind income from a single generator is 20 or above this points becomes moot though, but before that it can potentially be important on certain maps. 6) A solar usually leaves a "better" wreckage, thus yielding you more metal when you reclaim it. This of course means it was destroyed in the first place, which never is that good.

This is all disregarding the tidal of course, but that's another matter entirely as it needs water to be built. It works by the same principle as the solar however, the difference being that the wind generator is only Ã‚Â½ the cost of the tidal. There are also some other differences compared to the solar of course (size, armor etc), but generally it should be pretty straightforward to decide if its worth the cost or not if you already understand the relation between solars and wind generators.

One more note about wind, if I remember correctly. In OTA the wind was highest on the barren worlds (ice/desert etc), while it wasn't a real option on moon maps."

**A short summary of this "quote" reads as follows;**

Wind generators starts to become the best choice as soon as the average energy income from a single generator goes above 7. As the average gets higher the wind generators quickly become the only real choice if you want to win. If your map does have an average income of 7 or above, the only real benifits of a solar is more armor, constant supply, less space and finally it usually leaves wreckage behind. A single solar costs 3 times that of a wind generator, a single tidal costs 2 times the amount of a wind generator.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [MapsBalance](https://springrts.com/wiki/MapsBalance).*
