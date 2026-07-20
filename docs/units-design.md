---
title: "Units:Design"
source_url: "https://springrts.com/wiki/Units:Design"
categories:
  - "Delete"
---
# Units:Design

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

## Idea

Is what kick starts your unit.

It can range from a simple tweak to one existing unit to a new unit from scratch.

But dont lose much time in this, just remember at some point you have to "think" in what you want to do.

In this tutorial we will work from this basic idea:

**Here goes Proposed Basic Unit Idea**

The unit will be a "light Anti-Air Tank".

Prolly this can go in lvl1 labs.

I like the idea of small missiles chasing planes, launching fast, but not very powerfull. Good for taking scouts down.

On this subject you must sketch.

## Sketch

Nobody \*knows\* how to sketch. You must give it a try and you will improve and learn.

A sketch IS NOT a cool drawing, its just a basic guideline. It helps get things clear to start modelling. Sketching can help you soldify your unit idea, so if it helps do it, other wise it is an optional step.

**Here goes sketches based in first step**

here the basic thank thread i drawn, it guess its basic enough, its not intended to have moving tracks.

<a href="http://i36.photobucket.com/albums/e35/6u0W/base.jpg" class="external autonumber" rel="nofollow">[1]</a>

I liked this track and is what the final unit will use.

here are some variations to the turrets, it was supposed to have 2 missile racks..

<a href="http://i36.photobucket.com/albums/e35/6u0W/var01.jpg" class="external autonumber" rel="nofollow">[2]</a>

but later changed for only one headlike rack, like a central turret.

Its supposed to be the lines more at the bottom.

<a href="http://i36.photobucket.com/albums/e35/6u0W/var02.jpg" class="external autonumber" rel="nofollow">[3]</a>

Here is a quick way of "joinig" toguether the torso-like part, that contains the missile rack, and the tracks. (i know the scale is not right..)

There are 2 axles that suppose to join them.

<a href="http://i36.photobucket.com/albums/e35/6u0W/final01.jpg" class="external autonumber" rel="nofollow">[4]</a>

A sketch of the completed unit, and some details.

The missiel rack is supposed to rotate over itself (z axis).

Maybe, because of this, that joining could be made more circular, and not so square.

<a href="http://i36.photobucket.com/albums/e35/6u0W/final02.jpg" class="external autonumber" rel="nofollow">[5]</a>

In a "bottom view" there is a detail of the joinig axle.

<a href="http://i36.photobucket.com/albums/e35/6u0W/final03.jpg" class="external autonumber" rel="nofollow">[6]</a>

Well, sketching is playing with the unit.

In the first 3-4 sketches variations where made of the rack

Some variations were discarded, and some taken.

Keep in mind its Basic stuff.

## More sketch

Once you get a basic sketch that you like, try to improve it, make more sketches of this concept, get the idea more rounded.

In this unit for example, an engine would be a nice addition.

Also, maybe details in the tracks, the missile rack or the missile support part.

## Model

    (tests can be done at this stage)

Here is where you put the sketches to real use. you will appreciate the dirty lines you did earlier.

At this point you can start modeling based in the first sketches.

**If some Modeler can provide a overview on how to do that unit, and the model, in any 3D tool you like, its very appreciated.**

First thing to do is get familar with which ever 3D modeling program you are using. There should be tutorial avalable for the differnt functions or ask around. Once you know how to use it, you can make your model.

Keep the final product of your unit in mind, such as which parts need to be animated. If you want to animate a tenticle you are going to need several segments (differnt objects) to get it to look right.

Once you have your model, you need to UV map it. This requires you to map out the seems of the modle, and designate which parts of it go were. Unfortnatly you have to get it all on one map, is the unit needs to be one model when you UV map it. You 3D modeling program may give you the option to temparaly combine the model into one unit for this purpose. If not, export it as an obj (the whole model) which will turn it into one unit. reload it and UV map that (with out changing any of the model). You can also us UPspring (the program that makes your models into .s3o files for springs use) to spit out an obj of your finished unit.

Once you have your unit mapped, its time to mess with the file. You will most likly need to tell your 3d modeling program to make the file external. save it as a tga. after that the first thing you should do is copy it. It turns out you need two versions of your UV map in order to use all the nifty skinning features, so you may want a copy, although you don't need it, better to have it and not need it. . .That being said, lets move onto the skinning.

The tga file will need to be opend with a program like gimp (free ware). When you do open it, go ahead and texture it to the best of your abilities, once done, any area you want to have team color needs have modifications done to an alpha channel. You can add this with your gimp/photo shop/something type program. You will likly need to first add the alpha channel, then get the program to display the differnt channels of the picture. Alpha is in grey scale, in gimp every thing you make colored in the Alpha channel will be the side color. The darker it is, the more like a solid color that spot will be. Every thing else (in gimp at least) needs to be erease (just in the alpha channel, NOT the rest of the channels) in order for your true texture to show up. This makes it so the only parts of the unit you can see are the ones that are going to have team color on it.

Next, you need to load up your model with UPspring, and load in your textures to the unit. The first texture is the basic texture. The second texts atributes will be talked about later(when I feel like posting more stuff). Once those are loaded up, go ahead and look at your model, pretty huh? well now you need to flip the loaded UV map. Go to texture mapping and select show UV texture, then tell it to flip. you model looks like it when through a blender now right? well thats fine it will show up correctly in spring.

Last but not least, you want to go estimate the size of your unit. its the tab farthest to the left. just fill in all the boxes and valla! your unit will look as snazy as you managed to model and UV map it.

## Animation

## Scripting

- Setting up for hard testing

at some point goes user feedback aswell.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Units:Design](https://springrts.com/wiki/Units:Design).*
