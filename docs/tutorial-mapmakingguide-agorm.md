---
title: "Tutorial:MapMakingGuide(aGorm)"
source_url: "https://springrts.com/wiki/Tutorial:MapMakingGuide(aGorm)"
categories:
  - "Tutorial"
  - "Map_making"
---
# Tutorial:MapMakingGuide(aGorm)

<div class="mw-parser-output">

[Development](/development-main) \< [Map Development](/mapdev-main) \< Tutorial:MapMakingGuide(aGorm)

## aGorm's Ultimate Map Making Guide

### Stage A Ã¢â‚¬â€œ Pre-Preparation

So you want to make a map? Want to give something back? Good! However there are several things you're going to have to make sure you know before you start. And that's what this section is about.

#### Have you the Time?

Believe me when I say, making a map will take a lot of your time. Hours. Days. Some take weeks to finish. So make sure you want to commit yourself to it first (this isn't a StarCraft style, make a map in 5 minuets sort of situation)

#### Have you the Hardware?

Making a map unfortunately requires a computer better than that need to actually play spring. Sounds daft? You're dealing with very large images, which take up a lot of ram. Seeing as Windows needs 512 just to run, you'll need at least a gig if you want any joy. Also you'll need a half decent processor, or compiling will take forever. Some people will disagree, but honestly, at least a 2 GHz and a gig of ram would be useful.

#### Have you the Software?

First off, you will need Several Different pieces of software.

##### Mapconv:

There are actually two versions; however, I will strongly recommend that you use Mothers Mapconv program. All the advice given below will assume you will be using it. And whilst the vast majority of this will be relevant for the original one, there are a few vital differences in what does what etc.

##### Art Program:

You will need an art program. Paint will not be sufficient. You can use whatever you are comfortable with, but this guild is written with Photoshop in mind. However many of the options are the same, they all do the same thing in the end. Suggestions of programs to use:

- Photoshop
- Paint shop Pro
- GIMP
- Fireworks

The following are not required, but are useful, or needed for more advanced maps.

##### Terrain Generators:

Terragen / TerrTexGen both of these programs take a height map, and create a realistic render of terrain based of it, using values you input.

##### 3D software:

There are HUNDREDS of different 3D packages out there, any one of them can be used to make a feature for you map, however you'll only be able to finish the model off in ONE program, named 3DO Builder. In this program you can create the final file that spring can read.

#### Beverages:

Making a map sucks you in; I suggest you keep <a href="http://www.onebob.co.uk/darren/pics/water.jpg" class="external text" rel="nofollow">water handy</a> at all times, along with a light snack.

#### Music:

I Suggest you put your favourite Music on, that way your doing two things at once. However If you gonna head bang put down the mouse first...

### Stage B Ã¢â‚¬â€œ Preparation

Now you have prepared your self of the task ahead, its time to actually think about making the map. This section is about map concepts, ideas, and to help you decided what sections of this tutorial your going top want to read (After all, not all maps require the same things, most maps have no features, don't use a custom skybox, and may not make use of the terrain type map. So you will not want to bother with those sections!)

#### Concepts:

This is something all maps need in one degree or another. What purpose do you want your map to serve? This can be as simple as "I want the map to be really huge so that we can enjoy huge battles" to something more conceptual like "I want to make a platform style map, with limited access and lots of cover, with most of the resources in the middle". It doesn't matter too much what your concept is, as long as you have one. Maps made without a concept tend to be boring, dull, uneven, and unplayed. And you don't want that, do you?

#### What makes it special:

So what do you want your map to include? For instance, say I was going to take the first concept and just make a really huge map. What am I going to do to make it special? Shall I use custom features? Or a radical skybox? Maybe there should be reclaimable wreckages strewn over the battle field. There are many different things you can add to a map to make it unique, and often it's a case of striking a balance between them all. All the different things you can add to a map have there own section in this tutorial, so once you know what you want you'll be able to go and read up on how to make your dream a reality.

#### Very First Steps:

No turning back now!! Before we get to the nitty gritty, you need to make several key decisions:

- How Big is your map? A small map would be between 10 x 10 and 16 x 16. Medium maps are 16x 16 to 24 x 24, anything over that can be safely called big, and If you manage to make one over 32 x 32 then its Huge!
- Rough drawing. Which is self explanatory, make a rough drawing of what you are imagining. I can be as crap as you like, but believe me its much easier to map when you have a reference. Only people with a vivid imagination can skip this...

### Stage C Ã¢â‚¬â€œ Height Map

Some people will be thinking, hold on, why is Height Map first! We'll, it's quite simple... textures may change, but heightmaps don't! Let me explain that... Two maps with the same heightmap will play exactly the same as each other, irrespective of what texture you use. For instance, when making a map I once made a snowy Mountain one. However while it played nicely, I decided it looked crap, so I changed it to being a sandy island. Lots of maps out there have had several revisions of texture map!

Now I'm going to explain the stages of making a heightmap (for which you'll need a graphics program, I use Photoshop, and an Idea of were your mountains and valleys are.)

#### Basic heightmap:

First things first, make a black canvas with the following dimensions: X dimension: (map width) x 64 1 Y dimension: (map height) x 64 1 For instance a 16 x 16 map will need a 102**5** x 102**5** heightmap.

[<img src="/images/Height1.jpg" decoding="async" width="512" height="512" alt="Height1.jpg" />](/images/Height1.jpg)

Black is the lowest point on the map. So valleys, or on water maps, water are going to be in these areas. White is the highest point on the map. So the top of a mountain will be white. Greys are the levels in between, of which there are 256 levels.

#### Adding a mountain:

To add a mountain (all be it, a very unnatural one) take a paint brush and put down a splodge of white were the mountain will be. Tada! In game that will already be a mountain! Now your probably thinking, wait it can't be that easy... Well as I said early, that will make a mountain, but It won't look very natural. However we'll deal with that later. For now, you want to paint on roughly were your highest points are. If you want smaller hills, use a shade of grey to draw with.

[<img src="/images/Height2.jpg" decoding="async" width="512" height="512" alt="Height2.jpg" />](/images/Height2.jpg)

#### Making Some Variation:

So the land looks like a kids rendition of a landscape, with perfect hills, and smoth valleys. Not to realistic right? Well there are several techniques to add that bit of variation to the land. Bare in mind these steps will work in other software besides photoshop, but that you may have to go about them in a different way...

##### Noise:

Create a New layer on top of your current heightmap and fill it black. Next, drop down the filters menu, go to noise, add noise, and it will open the noise dialogue box. Make sure you select "Monochromatic" (for black and white)and drag the slider till it looks about half and half. Click OK and you should have noise! Now go to filters, blur, gaussian blur. Set it to between 2 and 4 pixels and click OK again. Now you should have a greyish black mess. Now mess around with the layer blending settings (in photoshop there in the drop down just above the layers, and start with normal) I normally use something like a "linear dodge", and set the opacity to 50% ish, but Its best to play around.

[<img src="/images/Height3.jpg" decoding="async" width="512" height="512" alt="Height3.jpg" />](/images/Height3.jpg)

What this will have done Is lightened small areas of your map by a small amount, causing minor variations in the height, which means your land wont be entirely flat. And because its only a minor variation you can normally still build on it (if you cant build on the land, drop the opacity a bit more, which of course means make sure you save with layers ON)

##### Sharpness:

OK, so you got all that, but your still thinking that those mountains are a bit... odd? Well that's because most mountains are in fact not perfectly rounded hills. They have steep sides, sharp transitions, sheer drops, as well as the pleasant rolling hills that you get. To begin to get the effect, go to the layer below the layer with your noise on it (else it will overwrite it!) and get a black brush. Make sure you turn the hardness up a bit (50% should do for a basic test). Then carve out a section on the hill. That makes a shear drop! But you may not want that, so turn down the opacity of that layer.

[<img src="/images/Height4.jpg" decoding="async" width="512" height="512" alt="Height4.jpg" />](/images/Height4.jpg)

I then generally build up these layers (each with maybe 20%-40% opacity) till I have made the sort of hills I'd like. Bear in mind this is all personal preference!

[<img src="/images/Height5.jpg" decoding="async" width="512" height="512" alt="Height5.jpg" />](/images/Height5.jpg)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Tutorial:MapMakingGuide(aGorm)](https://springrts.com/wiki/Tutorial:MapMakingGuide(aGorm)).*
