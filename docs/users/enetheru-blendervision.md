---
title: "User:Enetheru/BlenderVision"
source_url: "https://springrts.com/wiki/User:Enetheru/BlenderVision"
---
# User:Enetheru/BlenderVision

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

## blah

basically cause of the 2.5 upgrade of blender that happened a while back, and the new cycles renderer using blender for things is just a whole bunch more exciting and awesome

if say someone was to know some blender python scripting they could create an add on that:

- strips out irrelevant user interface stuff
- add specific functionality for exporting models, maps, animations, logic etc.

a map editor would be easiest I believe as its mostly a static entity. challenges to overcome would be to

- create a feature placement export script.
- feature browser interface element(shows 3d models etc cool...)
- auto export relevant maps to game features like splat, grass etc.
- materials are posing a bigger problem, because of its generic flexibility and also some features not working i'm finding it hard to create beautiful meaningful surfaces. slowly making progress, but materials were never my strong point.
- using the compositor to output all required images in one go.
- Noisy borders because of subsampling means toy have to make the camera POV slightly smaller than the terrain, or slightly larger depending on the effect you are going for.. a more generic solution for this would be nicer.

in the whole scheme of things I dont think it would be that hard to leverage the awesome might of blender. and make it simple enough for newbs.

the only thing i can do to begin with is to show that its not just possible but really awesome, by creating maps in it and writing tutorials on how to do it. hopefully that will garner interest in exploring it as an option. i have issue that i dont play the game that much so making maps that are good to game on will be harder for me than others. its slowly coming along though.

## Solved

- rendering of massive images in segments and stitching the final result to mapconv it

rendering to really large images is solved with the help of an addon script that renders it in segments and stitches the result in imagemagick. ive successfully rendered a 16384 square image. My attempt at making a 2048x2048 height mesh for sculpting a terrain that large has also hit the RAM barrier.. which so far i can get over with reducing the complexity of the render so it doesnt have to build massive raytrace structures.. but thats not really what i want to do in the end.. i need to be able to render massive amounts of data and work fast and efficiently for me to be able to convince the spring crowd of the viability of using blender as a tool. so onward i go with my experiments. so yeah successfully rendering a 2048x2048 vertex sculpted terrain to black and white height map of 32K dimensions.. kinda overkill on the dimensions but i didn my math wrong and so i will leave this pc here at work overnight muhahaha. i wonder how imagemagick will handle things..

HAHAHAHHA ok, so rendering a 32K dimension texture map worked, with only 4 gig of RAM, and stitched together with imagemagick fine.. oh the lols.. it was just a basic test though so when you add 2048 or 4096 vertex's to the mix rendering can be a bitch.. then plus all the material work i want to do, and any advanced rendering effects with output of the intermediary images for use in the engine things will get a bit difficult to work with.. memory

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Enetheru/BlenderVision). Original page: [User:Enetheru/BlenderVision](https://springrts.com/wiki/User:Enetheru/BlenderVision).*
