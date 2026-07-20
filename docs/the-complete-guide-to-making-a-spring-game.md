---
title: "The Complete Guide To Making A Spring Game"
source_url: "https://springrts.com/wiki/The_Complete_Guide_To_Making_A_Spring_Game"
categories:
  - "Game_Dev"
---
# The Complete Guide To Making A Spring Game

<div id="the-complete-guide-to-making-a-spring-game" class="section mw-parser-output">

## The Complete Guide to Making a Spring Game

by PTSnoop. Everything you could want to know about making games for the Spring engine, all on one page.

### Useful Downloads

    ATTENTION: Engine changes mean the games/examples 
    below DO NOT WORK 100% CORRECT ANYMORE: 

For exampe <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=31015" class="external text" rel="nofollow">no start units are spawned.</a> Instead try [SpringTutorialGame](/springtutorialgame)

------------------------------------------------------------------------

<a href="https://springfiles.springrts.com/files/games/empty_mod.sdz" class="external text" rel="nofollow">Empty Game</a> - the basic folder structure, and the files you need to get one cube model in game.

<a href="https://springfiles.springrts.com/files/games/empty_mod_plus_tank.sdz" class="external text" rel="nofollow">Empty Game Plus Tank</a> - the basic folder structure, plus one working tank unit.

<a href="https://springfiles.springrts.com/files/games/example_mod.sdz" class="external text" rel="nofollow">Example Game</a> - a very simple example game. Contains a Factory, Tank, Builder, and Energy Tower.

### Ideas

Presumably you already have some of these. If not, just wait around on the forums until someone makes a "this would be a great game can someone make it plz" thread.

It's probably worth sketching out some unit designs, concept art, game mechanics, and so forth, at this point, before you learn what can and can't be easily done with the engine. This way, you'll probably end up with a much more original game at the end of the process. Just bear in mind that you'll have to change around a lot of these ideas once you start finding out what works and what doesn't.

### Getting Spring

On Windows: Go to the [Download](/download) page and download the installer. Install it.

On Linux: Depends on your distro. There's a <a href="https://launchpad.net/~spring/+archive/ppa" class="external text" rel="nofollow">ppa</a> for Ubuntu, and [various guides](/setupguide) for various other distros.

This'll give you the engine and lobby, but no games or maps. It's probably best if you download the <a href="https://springfiles.springrts.com/files/games/example_mod.sdz" class="external text" rel="nofollow">basic example mod</a> and a <a href="https://springfiles.springrts.com/files/maps/small_supreme_battlefield_v3.sd7" class="external text" rel="nofollow">smallish map</a>, and put them in your /games and /maps folder respectively (for Windows, those'll be in C:\Users\YOURUSERNAME\My Documents\My Games\Spring ; for Linux, ~/.spring . You may have to create some folders.) Then load up SpringLobby and start a game against a computer RAI to make sure it's working fine.

### Tools Used in this Tutorial

- Texture Editing
  - <a href="https://www.gimp.org/downloads/" class="external text" rel="nofollow">Gimp</a>
- Modeling
  - <a href="http://www.wings3d.com/" class="external text" rel="nofollow">Wings 3D</a>
- Coding
  - <a href="https://notepad-plus-plus.org/" class="external text" rel="nofollow">Notepad++</a>

### Making a 3D Model

There are <a href="http://www.wings3d.com/?page_id=676" class="external text" rel="nofollow">far</a> <a href="https://wiki.beyondunreal.com/Legacy:Wings3D/Getting_Started" class="external text" rel="nofollow">better</a> <a href="https://tutorial-index.com/index.php/site/site_category/tut_wings_3d/" class="external text" rel="nofollow">tutorials</a> for learning Wings3D than this one I'm about to write. I suggest you go through a few of them rather than this one. Having said that, I'm still going to rush through the basics here. Because otherwise, it wouldn't really be a "Complete Guide".

If you want to skip this bit, I've put the complete untextured model inside the <a href="https://www.springfiles.com/show_file.php?id=2821" class="external text" rel="nofollow">Example Mod</a>; just extract it as a zip file and look inside /objects3d.

Once you've opened up Wings3D, it'll look something like this:

[<img src="/images/Wings1.png" decoding="async" width="699" height="437" alt="Wings1.png" />](/images/Wings1.png)

Click your middle mouse button, and move your mouse around. The screen should rotate. Left click to escape rotation mode. Roll the middle mouse button to zoom in and out. While in rotation mode, drag your middle mouse button to pan around.

Right click on the background; it'll give you a menu.

[<img src="/images/Wings2.png" decoding="async" width="699" height="437" alt="Wings2.png" />](/images/Wings2.png)

Click the square to the right of the word "Cube". It'll give you some more options (namely, the dimensions of the cube). Choose 20x20x20, and click OK. (If you'd just clicked on the word "Cube" rather than the square, it'd have just given you a 2x2x2 cube.)

You should have a fairly large cube. (You may have to zoom out to see it properly.)

[<img src="/images/Wings3.png" decoding="async" width="699" height="437" alt="Wings3.png" />](/images/Wings3.png)

At the top of the screen, you'll notice four buttons:

[<img src="/images/Wings4.png" decoding="async" width="700" height="229" alt="Wings4.png" />](/images/Wings4.png)

These are for selecting vertices, edges, faces, and bodies. Play around with each of them; you'll soon figure out how they work. You'll notice clicking on one thing doesn't deselect the last thing; to deselect, you'll have to click on the thing again, or press space to deselect everything.

These four buttons also have keyboard shortcuts v, e, f, b. These are really useful, and worth getting used to.

You'll notice the cube is half-submerged in the ground. To move it above ground, select the whole cube body, and right-click.

You'll see a new bunch of options. Click "Move". You'll see some more options. Click "Y". ( The Y axis points upwards; the X and Z point to the side and front of your unit, respectively. )

The cube will start moving as you move your mouse left and right. The number in the top left hand corner tells you how much it's moving by. To place the cube in a new position, left-click; to snap it back to where it was originally, right-click instead.

To move in fixed units, rather than just continuous up/down, hold down the shift key while moving. This is useful for positioning things carefully, and for knowing where things are later on. Ctrl and Ctrl+Shift move in tenths and hundreds of units. Try to put the cube such that it's 10 units above where it was before (the undo button may be useful here).

[<img src="/images/Wings5.png" decoding="async" width="699" height="437" alt="Wings5.png" />](/images/Wings5.png)

Choose Face mode, and select the top face of the cube. Right click, and select "Scale Uniform". Scale the face to 50% (Ctrl will help here) and click. Now right click again, and move this face down 10 units in the same way you moved the whole box before.

[<img src="/images/Wings6.png" decoding="async" width="699" height="437" alt="Wings6.png" />](/images/Wings6.png)

Okay, now let's create another cube for the turret. There's no need for the options here, so just click on the word "Cube".

[<img src="/images/Wings6.png" decoding="async" width="699" height="437" alt="Wings6.png" />](/images/Wings6.png)

Oh noes! Where's the new cube gone?

Okay, don't panic. Click on "Window" (on the File Edit View... row), and open up the Outliner. Then repeat for the Geometry Graph.

[<img src="/images/Wings7.png" decoding="async" width="699" height="437" alt="Wings7.png" />](/images/Wings7.png)

These are useful windows, since they show you everything in your model. Drag and resize these windows to somewhere sensible.

From the geometry graph, you can select specific pieces of your model. Pick the top one by clicking on its grey cube.

[<img src="/images/Wings8.png" decoding="async" width="699" height="437" alt="Wings8.png" />](/images/Wings8.png)

Deselect this piece, then select the other one. Then right click anywhere and try to move it upwards.

[<img src="/images/Wings9.png" decoding="async" width="699" height="437" alt="Wings9.png" />](/images/Wings9.png)

It should appear out of the top of the other shape. Put it 12 units above where it was before, so it hovers above the other shape.

Now select the face pointing in the Z direction, towards the front of the unit. The blue letter Z should show the right face. Right-click and move this face a reasonably long way in the Z direction.

[<img src="/images/Wings10.png" decoding="async" width="699" height="437" alt="Wings10.png" />](/images/Wings10.png)

Now create a sphere, with radial x and y values of 10 and 10, and move it up to the top of the model.

[<img src="/images/Wings11.png" decoding="async" width="699" height="437" alt="Wings11.png" />](/images/Wings11.png)

Now let's give this incredibly ugly tank some tracks. Pick the edge tool, and select two edges along one side.

[<img src="/images/Wings12.png" decoding="async" width="699" height="437" alt="Wings12.png" />](/images/Wings12.png)

Press C. A new edge should appear, connecting the previous two. Now select the face that's now the lower half of that side (not both halves!), right-click, extrude, X. Extrude it out 2 units.

[<img src="/images/Wings13.png" decoding="async" width="699" height="437" alt="Wings13.png" />](/images/Wings13.png)

Do the same for the other side.

Now extrude the fronts and backs of the tracks, forwards and backwards in the Z direction.

[<img src="/images/Wings14.png" decoding="async" width="699" height="437" alt="Wings14.png" />](/images/Wings14.png)

And there we have our first tank model!

Now at this stage, before we texture anything, it would be a good idea to use the edge tool, to select all the edges of the cube blocks (you can do this from the geometry graph), and right-click set Hardness to Hard. This makes all those edges orange.

But when you click on this button here:

[<img src="/images/Wings15.png" decoding="async" width="528" height="437" alt="Wings15.png" />](/images/Wings15.png)

Then it gives you a more rendered look, blurring soft edges together and keeping hard edges clean and distinct. It doesn't look that amazing at this stage (especially without textures) but once your properly-modelled original units are in game, the proper hard/soft edges make them look that bit better. (Actually, you could do this later on in the process if you want, at any point before exporting to 3ds later on. But this seemed like a good time to mention it.)

[<img src="/images/Wings16.png" decoding="async" width="699" height="437" alt="Wings16.png" />](/images/Wings16.png)

So now we have a fairly basic clunky tank, ready for texturing. I think it's worth stressing at this point that it's worth going through lots more modelling tutorials and/or playing around with all the options to see what they do; also, when making models for real, it's worth bearing in mind that it's much better to make your own intriguing creative shapes than to just bolt cubes together. It takes longer, and isn't as good for easy tutorials, but it's worth it.

### UVMapping and Texturing a 3D Model

This section is based loosely on the tutorial <a href="https://springrts.com/phpbb/viewtopic.php?t=10612" class="external text" rel="nofollow">here</a>.

Okay, so we have a clunky tank model, but it's all grey. It needs texture.

To do this, we'll need to UVMap the model. What this means is to take the surface of the model and map it onto a 2d surface, so you can edit the 2d surface (in an image editor) and then it'll wrap around the model nicely. In theory.

At the moment, the model is in three parts; the base, the sphere turret, and the barrel. If we dived straight in and started uvmapping now, we'd end up with three texture files, which at the moment the engine can't cope with. We need to combine the parts into one body.

Using the body tool (shortcut b), select all the pieces, right-click, select "Combine". You should end up with one body.

[<img src="/images/Uv_1.png" decoding="async" width="499" height="312" alt="Uv 1.png" />](/images/Uv_1.png)

With the body selected, right-click, then right-click on "UV Mapping". A new window will appear; once you zoom out in the new window, it should look something like this.

[<img src="/images/Uv_2.png" decoding="async" width="499" height="312" alt="Uv 2.png" />](/images/Uv_2.png)

To uvmap this model, you'll need to split it up into faces. There are three main ways you can do this.

1\) You can select edges, right click \> "Mark edges for cut". The computer will cut along these edges, and leave you with a pretty decent net. This gives you control over which faces end up next to each other, on what sides.

2\) You can select faces, right click, and mark them as different colours. The computer will take each side separately, keeping same-coloured faces together. This gives you control over which faces end up grouped together.

3\) You can right click \> "Segment by" \> "Projection". The computer does all the work, and leaves you with a bunch of coloured faces. This is the cheating way, gives you not much control over what goes next to what, and gives you some pretty strange results sometimes. But it's soooooo much faster. This is what I normally use, occasionally with a bit of neatening-up of colours afterwards.

[<img src="/images/Uv_3.png" decoding="async" width="499" height="312" alt="Uv 3.png" />](/images/Uv_3.png)

Once you've got all your edges or faces marked, right click, and Continue, Unfolding. The computer will give you something like this.

[<img src="/images/Uv_4.png" decoding="async" width="499" height="312" alt="Uv 4.png" />](/images/Uv_4.png)

At this point, it's probably worth moving and resizing your windows (with the bottom right hand corner) so you can see both your model and your texture.

[<img src="/images/Uv_5.png" decoding="async" width="499" height="312" alt="Uv 5.png" />](/images/Uv_5.png)

You'll notice the computer's given you a default letter-number texture. This is quite useful, since it shows you what kind of level of detail you can get with your model. Smaller letters means more detail.

You'll notice the uvmap has quite a lot of duplicated shapes. For example, there's one trapezoid for the left-hand-side tracks, and a different one for the right-hand-side tracks. We may as well just use the same texture for both, so let's move one onto the other.

The easiest way to do this is to select both trapezoids, right-click \> Move To \> Center, then right-click \> Move and move them to where you want them.

[<img src="/images/Uv_6.png" decoding="async" width="499" height="312" alt="Uv 6.png" />](/images/Uv_6.png)

Do this for all the duplicated shapes.

[<img src="/images/Uv_7.png" decoding="async" width="499" height="312" alt="Uv 7.png" />](/images/Uv_7.png)

You may have to rotate or flip some shapes to get them to line up. These tools are fairly self-explanatory.

Now if you look at the barrel of the main gun, then you'll probably have some sides have letters running from the turret to the end, and some have the end to the turret (if that makes any sense.)

[<img src="/images/Uv_8.png" decoding="async" width="499" height="312" alt="Uv 8.png" />](/images/Uv_8.png)

The final model'll probably look better if we have them all running the same direction. In the 3d model window, select the faces running the wrong direction, then flip them in the 2d texture window.

[<img src="/images/Uv_9.png" decoding="async" width="499" height="312" alt="Uv 9.png" />](/images/Uv_9.png)

Now if you look at the texture window, you'll see a lot of wasted space. We can scale each shape to use some of that space, and allow for more detailed textures.

(Beware: if you have multiple shapes overlapping, and you click on them, you'll just select the top one. To select multiple shapes in the same place, drag a box over some of the shape, and it'll pick all layers.)

[<img src="/images/Uv_10.png" decoding="async" width="499" height="312" alt="Uv 10.png" />](/images/Uv_10.png)

You'll notice I've made the main body texture pieces much larger, since they're going to have the most important texture on them. You'll also notice I've made the underside texture piece quite a lot smaller, since it's not really going to be seen by anyone unless they flip your tank over. Also, I've left slight gaps between each piece; otherwise, texture from one might bleed into the other.

You'll also notice there's still a lot of unused space; if I spent more time on this I could tighten it up a bit more. But I'd much rather get on with writing this tutorial.

Now the UVMapping is finished, you can create a texture for it. Right-click in the 2D window, click Create Texture.

[<img src="/images/Uv_11.png" decoding="async" width="499" height="312" alt="Uv 11.png" />](/images/Uv_11.png)

First of all, click Delete Unused Pass. This should leave you with a background and a "draw edges"; have a look at the options for each. Check the colour of the background; make sure it's got A (alpha) set to 1.0 rather than 0.0 (some versions of Wings3D handle this differently).

There are options for texture size. The general rule for texture size is that the more of this type of unit your players are going to be using, the smaller the texture. 256x256 is a good number for normal units; you might give your end-of-game epic unit of doom something closer to 1024x1024.

Click OK, and you should get something like this:

[<img src="/images/Uv_12.png" decoding="async" width="499" height="312" alt="Uv 12.png" />](/images/Uv_12.png)

Now you can close down the 2d uv-editor window, and look at your Outliner. You should see your black-and-white square texture in there. Select it, right-click on it, click "Make External" and save it somewhere as a .tga file.

Okay, now you can minimise Wings3D and open up the .tga file in an image editor. I'll be using GIMP here. Keep Wings3D open, though; we'll need it later on.

[<img src="/images/Uv_13.png" decoding="async" width="499" height="312" alt="Uv 13.png" />](/images/Uv_13.png)

GIMP is easy enough to use, so I'm not going to cover it in very much detail here. Start out with just bucket fill and pencil with different brush sizes, then have a look at the Pattern Fill tool option for bucket fill, and you should be able to get something like:

[<img src="/images/Uv_14.png" decoding="async" width="499" height="312" alt="Uv 14.png" />](/images/Uv_14.png)

...or hopefully much better and more interesting. I'm rushing here, hence the flat-colour areas (generally a bad idea) and generic blobby camoflage.

One thing that isn't very clear from the screenshots is that I've gone around the edge of a few areas with more colour. If you just go with the black lines you've been given, then white borders may start to bleed into your final textures. If you paint over the white around things, then this won't happen.

Now we can move back into Wings3D, where I've turned more-rendered-mode back on again.

[<img src="/images/Uv_15.png" decoding="async" width="499" height="312" alt="Uv 15.png" />](/images/Uv_15.png)

You'll notice the old texture is still in place. To bring the new texture in, right-click on the white square texture, and Refresh.

[<img src="/images/Uv_16.png" decoding="async" width="499" height="312" alt="Uv 16.png" />](/images/Uv_16.png)

And now everything looks so much more textured!

(In practice, leaving this step until the end is a bad idea. It's best to flick between Wings3D and Gimp, trying things out.)

Now the model's been textured, we'll need to separate out those pieces we combined together before. If everything's in one body, then the turret won't be able to move independently of the base, etc. Using the body tool, select the tank, then right click \> Separate.

Everything'll split back into constituent parts, with fairly generic names (cube2_sep7). You might want to rename these back to something sensible in the Geometry Graph at this point (right click \> Rename). I've gone for "body", "turret" and "gun".

And there we have the completed textured model. It's looking very blockish and plain, but hopefully you'll be able to do better once you start modelling properly.

(This finished textured model can be found in the Example Mod.)

Don't close GIMP just yet; we'll need it for the next part.

### Preparing a Model for the Engine

The original tutorial this part is based on can be found <a href="https://springrts.com/phpbb/viewtopic.php?f=14&amp;t=13034" class="external text" rel="nofollow">here</a>. Thanks, Pressure Line!

Okay, so we've got our model in Wings3D, uvmapped and textured. But at the moment, all the texture is fixed; there isn't anywhere for team colours. For that, switch back to GIMP.

In Spring, the main texture for each model uses the Alpha channel for teamcolour. Most programs use Alpha for transparency, so this may make your image previews slightly odd. But it'll all look fine once it's in game. In the alpha channel, white is teamcolour, black is no teamcolour, and greys in between are in between. If this doesn't make sense, just keep reading and hopefully it'll all be fine once we've finished.

(I say "main texture" because Spring also allows for secondary textures, which use red for glow, green for reflectivity, and alpha for transparency. I won't cover these here in any detail; play around with these if you want to learn more.)

In GIMP, collapse everything into one layer if you've got more than one. Right click on the layer, and click Add Alpha Channel if it's available. (If it's not, you've probably already got an alpha channel.)

Click Colors \> Components \> Decompose. This'll give you a box; set it to RGBA and press OK.

[<img src="/images/Upspr_2.png" decoding="async" width="499" height="312" alt="Upspr 2.png" />](/images/Upspr_2.png)

This should give you a second GIMP window, with greyscale and four layers. These are your Red, Green, Blue and Alpha channels. You'll notice the Alpha channel is completely white; we don't want this, because it'll make your whole unit teamcoloured instead of the grey-and-camoflage that we want for most of it.

Copy one of the other layers into the Alpha layer, so you can see where things are. Then make everything black, except for the texture for the turret at the top; make that white.

[<img src="/images/Upspr_3.png" decoding="async" width="499" height="312" alt="Upspr 3.png" />](/images/Upspr_3.png)

Then select Colors \> Components \> Recompose, and swap back to your first image. You'll see that most of it's vanished, except for the part you want in teamcolour. Don't panic; it's still there, it's just transparent. Save this as TGA.

(Alternatively, at this point, you could save it as DDS (you'll want DXT3 or DXT5, and lots and lots of mipmaps). I personally use TGA, because I've never got round to getting the GIMP DDS plugin working on my machine. If you use DDS, you'll get better performance.)

You can close GIMP down at this point, unless you're going to be still tweaking things.

Now we'll need to get the model out of Wings3D and into [Upspring](/upspring). Swap back to Wings3D, click File \> Export, and click on the box next to 3D Studio (3ds). This'll give you some options.

[<img src="/images/Upspr_4.png" decoding="async" width="499" height="312" alt="Upspr 4.png" />](/images/Upspr_4.png)

You want "Swap X and Y axes" off, Export normals and UV coords both on, and default texture file type set to Targa (tga). Click OK, and save it somewhere you'll remember.

(At this point, if you wanted to, you could use OBJ instead of 3DS; there's no real difference for [Upspring](/upspring) as far as I can tell.)

Now open up [Upspring](/upspring). You should see something like this.

[<img src="/images/Upspr_5.png" decoding="async" width="499" height="312" alt="Upspr 5.png" />](/images/Upspr_5.png)

Click File \> Open, browse to your folder, tell it to look for 3ds files, open the file.

[<img src="/images/Upspr_6.png" decoding="async" width="499" height="312" alt="Upspr 6.png" />](/images/Upspr_6.png)

It'll ask you what you want to do with the multiple meshes. Tell it 2) Load all objects as childs (children?) of an empty root object.

[<img src="/images/Upspr_7.png" decoding="async" width="499" height="312" alt="Upspr 7.png" />](/images/Upspr_7.png)

There's your model, looking small and untextured. On the right, choose the Objects tab.

[<img src="/images/Upspr_8.png" decoding="async" width="499" height="312" alt="Upspr 8.png" />](/images/Upspr_8.png)

You've got a hierarchy of model pieces. These determine what moves when what piece moves. We want the gun to move when the turret moves, and we want both of those to move when the whole body moves, so use the cut and paste buttons above to arrange things more like this:

[<img src="/images/Upspr_9.png" decoding="async" width="499" height="312" alt="Upspr 9.png" />](/images/Upspr_9.png)

I've also renamed the root piece to "base", because it looks better.

Next, we need to move the origin for each piece, to define the points that things rotate around. Zoom in so you can see things properly (by dragging with the right mouse button), then select the "only move origin" option, and select the turret in the hierarchy.

[<img src="/images/Upspr_10.png" decoding="async" width="499" height="312" alt="Upspr 10.png" />](/images/Upspr_10.png)

The X pos, Y pos and Z pos options specify the position of the origin. By default everything's at (0,0,0). Now at this point, you could move into Wings3D, look at the actual height, and put it in the box. Or you can do what I do, and type guesses into the Y pos box until I get the red dot in what looks like the right place. (0,12,0) looks fine.

[<img src="/images/Upspr_11.png" decoding="async" width="499" height="312" alt="Upspr 11.png" />](/images/Upspr_11.png)

Now, interestingly, the gun origin will automatically have moved to (0,-12,0) to stay at the same place. This is because, when we set the origin of the turret, all pieces below the turret in the hierarchy will now measure their positions relative to that piece. Set the turret value to (0,0,0) so the origin's in the same place as the turret.

We'll need another piece later on, to mark the end of the barrel of the gun, so bullets know where to fire from. To do this, select the gun, click "Add empty", call it "flare".Position it just in front of the end of the barrel. (0,0,15) looks good to me.

[<img src="/images/Upspr_12.png" decoding="async" width="499" height="312" alt="Upspr 12.png" />](/images/Upspr_12.png)

Now move onto the Model tab. This gives you options for model centre and radius (this defines the hitsphere), and model height (this defines where the health bar goes). Again, you can measure these carefully in Wings3D, or just guess. There are Estimate buttons, but they often need a bit of adjusting afterwards.

To see what your numbers are doing, click on the "3D" to the top left hand corner of the 3D view, and tell it "Draw model radius and height".

[<img src="/images/Upspr_13.png" decoding="async" width="499" height="312" alt="Upspr 13.png" />](/images/Upspr_13.png)

Now all the unit needs is the texture. Click over to the Mapping tab, click Browse for Texture 1, and load your texture from before.

[<img src="/images/Upspr_14.png" decoding="async" width="499" height="312" alt="Upspr 14.png" />](/images/Upspr_14.png)

And there we have the texture, with a teamcolour turret. If you've got a second texture for reflectivity and so on, you can put that as Texture 2.

Now if you're using TGA textures rather than DDS, you'll need one extra step. Click Texture Mapping \> Show UV Mapping. It'll show your texture; click Edit \> Flip UVs. Close the UV editor.

[<img src="/images/Upspr_15.png" decoding="async" width="499" height="312" alt="Upspr 15.png" />](/images/Upspr_15.png)

Now your texture looks strange and mangled. In fact, this is what your unit would have looked like if you'd put it in game without flipping UVs like that. Once it's in game, it'll be fine. This strange texture-flipping is a consequence of the way DDS files measure coordinates, I think. If you're using DDS, you won't need to do this step.

One last thing: click on Object \> Recalculate vertex normals, 3d0 style \> All objects, then OK. This'll sort out some normals or something, I'm not too sure what it does but it makes your textures look better.

Now all you need to do is save the model as an s3o file.

And there we have our finished model and texture! Now to get them in game.

### Putting the Unit in a Game

The Spring engine uses .sdz or .sd7 files to load game content. In practice, these are just .zip and .7z files with renamed suffixes; to open up any mod, just rename it and extract it. Also, the Spring engine lets you just put all your game files in a folder in your /games directory, as long as it ends in .sdd .

The best place to get started here is to download the <a href="https://springfiles.com/spring/games/empty-mod" class="external text" rel="nofollow">Empty Mod</a>, extract it to a folder called EmptyMod.sdd in your /games directory. This is basically the bare minimum to get a unit in game.

Open up SpringLobby; if you've put it in the right place and everything else's correct, you should see an entry for "Empty Mod" in your games list. (You might need to tell it to Tools \> Reload Maps/Games first.) If you try playing it, it'll put a blank immobile cube at your start point.

To get the tank unit in game, you'll need as bare minimum an s3o file in /objects3d, a texture file in /unittextures, and a unitdef in /units. You already have two out of three; put them in the right folders.

Next, you'll need to make a unitdef. There are two ways of doing this: the old TA-ish way or the new lua way. You can write an FBI file, which is a text file with a list of variables, or you can write a lua file, which is a text file with a list of variables with slightly different syntax. In general, older tutorials and a fair bit of documentation will talk about FBI, but I'm going to use lua instead because it's more flexible and (I vaguely remember) slightly faster. Here's an example lua unitdef:

    local unitName  =  "tank"

    local unitDef  =  {
    --Internal settings
        BuildPic = "filename.bmp",
        Category = "TANK SMALL NOTAIR NOTSUB",
        ObjectName = "tank3.s3o",
        name = "Generic Tank",
        Side = "TANKS",
        TEDClass = "TANK",
        UnitName = "tank",
        script = "tankscript.lua",
        
    --Unit limitations and properties
        BuildTime = 1000,
        Description = "A generic tank unit.",
        MaxDamage = 800,
        RadarDistance = 0,
        SightDistance = 400,
        SoundCategory = "TANK",
        Upright = 0,
        
    --Energy and metal related
        BuildCostEnergy = 100,
        BuildCostMetal = 0,
        
    --Pathfinding and related
        Acceleration = 0.15,
        BrakeRate = 0.1,
        FootprintX = 2,
        FootprintZ = 2,
        MaxSlope = 15,
        MaxVelocity = 2.0,
        MaxWaterDepth = 20,
        MovementClass = "Default2x2",
        TurnRate = 900,
        
    --Abilities
        Builder = 0,
        CanAttack = 1,
        CanGuard = 1,
        CanMove = 1,
        CanPatrol = 1,
        CanStop = 1,
        LeaveTracks = 0,
        Reclaimable = 0,
        
    --Hitbox
    --    collisionVolumeOffsets    =  "0 0 0",
    --    collisionVolumeScales     =  "20 20 20",
    --    collisionVolumeTest       =  1,
    --    collisionVolumeType       =  "box",
        
    --Weapons and related
        BadTargetCategory = "NOTAIR",
        ExplodeAs = "TANKDEATH",
        NoChaseCategory = "AIR",

    }

    return lowerkeys({ [unitName]  =  unitDef })

It's worth looking through this and understanding what each entry does. Most are fairly self-explanatory; for the ones that aren't, there's [this page](/gamedev-unitdefs).

Put this file in your /units folder, then open up /gamedata/sidedata.lua and change 'startunit = "cube"' to 'startunit = "tank". Then start up the mod in Spring.

[<img src="/images/Mod_2.png" decoding="async" width="499" height="312" alt="Mod 2.png" />](/images/Mod_2.png)

We should now have a model in game! You should be able to select it, and right-click it around the place. It can't attack anything yet, but one step at a time.

We're going to make this tank shoot small orange blobs. For this we need three things: a small orange blob image for it to fire, a weapon entry in the unitdef, and a unit animation script.

For the small orange blob image, I'm going to use flame.tga from Evolution RTS (it's a good game, with models and textures under CC-BY-NC-ND and almost everything else under a do-whatever-you-want license; well worth checking out). It's in the /bitmaps folder of the example mod; put it in your own /bitmaps folder. Next, we need to open up /gamedata/resources.lua and tell the engine we've got a flame texture; just put a line "flame = 'flame.tga' " in the projectiletextures brackets (or comment out the one I've already left in there).

Here's the lua unitdef from before, with the new weapon data in place:

    local unitName  =  "tank"

    local unitDef  =  {
    --Internal settings
        BuildPic = "filename.bmp",
        Category = "TANK SMALL NOTAIR NOTSUB",
        ObjectName = "tank3.s3o",
        name = "Generic Tank",
        Side = "TANKS",
        TEDClass = "TANK",
        UnitName = "tank",
        script = "tankscript.lua",
        
    --Unit limitations and properties
        BuildTime = 1000,
        Description = "A generic tank unit.",
        MaxDamage = 800,
        RadarDistance = 0,
        SightDistance = 400,
        SoundCategory = "TANK",
        Upright = 0,
        
    --Energy and metal related
        BuildCostEnergy = 100,
        BuildCostMetal = 0,
        
    --Pathfinding and related
        Acceleration = 0.15,
        BrakeRate = 0.1,
        FootprintX = 2,
        FootprintZ = 2,
        MaxSlope = 15,
        MaxVelocity = 2.0,
        MaxWaterDepth = 20,
        MovementClass = "Default2x2",
        TurnRate = 900,
        
    --Abilities
        Builder = 0,
        CanAttack = 1,
        CanGuard = 1,
        CanMove = 1,
        CanPatrol = 1,
        CanStop = 1,
        LeaveTracks = 0,
        Reclaimable = 0,
        
    --Hitbox
    --    collisionVolumeOffsets    =  "0 0 0",
    --    collisionVolumeScales     =  "20 20 20",
    --    collisionVolumeTest       =  1,
    --    collisionVolumeType       =  "box",
        
    --Weapons and related
        BadTargetCategory = "NOTAIR",
        ExplodeAs = "TANKDEATH",
        NoChaseCategory = "AIR",

        weapons = {
            [1] = {
                def = "orangeblob",
            },
        },
    }

    local weaponDefs = {
        orangeblob = {
        name = "Orange Plasma Cannon",
        weapontype = "Cannon",
        accuracy = 10,
        areaofeffect = 100,
        avoidfeature = false,
        avoidfriendly = true,
        canattackground = true,
        collidefriendly = true,
        collisionsize = 8,
        commandfire = false,
        craterboost = 0,
        cratermult = 0,
        edgeeffectiveness = 0.1,
        explosionspeed = 128,
        impulseboost = 0,
        impulsefactor = 0,
        intensity = 1,
        noselfdamage = true,
        size = 4,
    --        soundstart = "tank_fire",
    --        soundhit = "explo01",
        range = 250,
        reloadtime = 1.5,
        rgbcolor = "1.0 1.0 1.0",
        turret = true,
        texture1 = "flame",
        weaponvelocity = 400,
    --      explosiongenerator = "custom:TANKGUN_FX",
        damage =
        {
            default = 55,
        },
        },
    }

        unitDef.weaponDefs = weaponDefs
        return lowerkeys({ [unitName]  =  unitDef })

Finally, the animation script. This tells the unit what things to move when firing, moving, exploding etc. All we really want at this point is for the turret to rotate and pitch to the right angle.

Again there are two ways of doing this: the old TA-style method, and the new lua method. You've got the choice of writing the animation script in BOS, then compiling it into COB using Scriptor; this is the best-documented method, but it needs the compiler, and it isn't as flexible. The other method is to write the animation script in lua; this lets you reload scripts mid-game without needing to recompile anything, and allows for the whole lua api in your animation scripts (more on lua later). The only real reason for using COB at the moment is "I already have a working game with vast hordes of COB animations, and it would take a long time to change them all". If you're starting out a new game, then lua is really the best option.

here's an example animation script to go in /scripts/tankscript.lua :

    local base = piece "base"
    local body = piece "body"
    local turret = piece "turret"
    local gun = piece "gun"
    local flare = piece "flare"
    -- declares all the pieces we'll use in the script.

    local SIG_AIM = 2

    local RESTORE_DELAY = Spring.UnitScript.GetLongestReloadTime(unitID) * 2
    -- picks a sensible time to wait before trying to turn the turret back to default.

    function script.Create()
        return 0
    end

    local function RestoreAfterDelay(unitID)
        -- defines a local funtion to wait a bit, then move the turret back to how it was originally.
        Sleep(RESTORE_DELAY)
        Turn(turret, y_axis, 0, math.rad(35))
        Turn(gun, x_axis, 0, math.rad(30))
    end

    function script.AimWeapon(weaponID, heading, pitch)
        Signal(SIG_AIM)
        SetSignalMask(SIG_AIM)
        -- each time the Signal is called, all other functions with the same SignalMask will stop running. This makes sure the tank isn't trying to fire at something, and restore the turret position, at the same time.
        Turn(turret, y_axis, heading, math.rad(35))
        Turn(gun, x_axis, -pitch, math.rad(30))
        WaitForTurn(turret, y_axis)
        WaitForTurn(gun, x_axis)
        StartThread(RestoreAfterDelay)
        return true
    end

    function script.FireWeapon(weaponID)
        EmitSfx(flare, 0)
    end

    function script.QueryWeapon() return flare end
    -- The piece that the bullet/laser/whatever comes out of.

    function script.AimFromWeapon() return gun end
    -- The unit looks from this piece down the QueryWeapon piece, to see whether it's aiming at anything.

    function script.Killed(recentDamage, maxHealth)
        return 0
    end

    function script.HitByWeapon(x,z,weaponDef,damage)
        -- This stops the unit taking damage until it's been built.
        if GetUnitValue(COB.BUILD_PERCENT_LEFT)>2 then return 0
        else return damage
        end
    end

Now all these files are in the right folders, start the game. You should now have a small tank, able to drive around and shoot at things!

You'll probably have noticed two things. Firstly, the explosion from being hit by an orange blob isn't very dramatic. Secondly, there's no sound. Let's fix the sound first.

First of all, you'll need an explosion sound. I'm using Explosion3 from <a href="https://www.partnersinrhyme.com/soundfx/PDsoundfx/gunsbombs.shtml" class="external free" rel="nofollow">https://www.partnersinrhyme.com/soundfx/PDsoundfx/gunsbombs.shtml</a>, chopped around a bit in Audacity: again, you can get it from the Example Mod. Put it in /sounds .

Next, we'll need to tell the engine about the sound file. Open up /gamedata/sounds.lua , and add in a new entry, so it looks something like:

    local Sounds = {
        SoundItems = {
            --- RESERVED FOR SPRING, DON'T REMOVE
            IncomingChat = {
                file = "sounds/incoming_chat.wav",
                 rolloff = 0.1, 
                maxdist = 10000,
                priority = 100, --- higher numbers = less chance of cutoff
                maxconcurrent = 1, ---how many maximum can we hear?
            },
            MultiSelect = {
                file = "sounds/multiselect.wav",
                 rolloff = 0.1, 
                maxdist = 10000,
                priority = 100, --- higher numbers = less chance of cutoff
                maxconcurrent = 1, ---how many maximum can we hear?
            },
            MapPoint = {
                file = "sounds/mappoint.wav",
                rolloff = 0.1,
                maxdist = 10000,
                priority = 100, --- higher numbers = less chance of cutoff
                maxconcurrent = 1, ---how many maximum can we hear?
            },
            --- END RESERVED

    --WEAPONS

            orangeblob_explo = { 
                file = "sounds/Explosi3.wav", 
                rolloff=3, dopplerscale = 0, maxdist = 6000,

                priority = 10, --- higher numbers = less chance of cutoff
                maxconcurrent = 4, ---how many maximum can we hear?
            },

            --[[DefaultsForSounds = { -- this are default settings
                file = "ThisEntryMustBePresent.wav",
                gain = 1.0,
                pitch = 1.0,
                priority = 0,
                maxconcurrent = 16, --- some reasonable limits
                --maxdist = FLT_MAX, --- no cutoff at all
            },
            --- EXAMPLE ONLY!
            MyAwesomeSound = {          
                file = "sounds/booooom.wav",
                preload, -- put in memory!
                loop,  -- loop me!
                looptime=1000, --- milliseconds!
                gain = 2.0, --- for uber-loudness
                pitch = 0.2, --- bass-test
                priority = 15, --- very high
                maxconcurrent = 1, ---only once
                --maxdist = 500, --- only when near
            },]]
        },
    }

    return Sounds

Finally, we need to tell the unitdef what sound to use. Open it up, and in the weapondef, add the line

       soundhit = "orangeblob_explo",

Now, if you try the game in Spring, you should get an explosion sound every time an orange blob hits something. To add a sound on firing, do the same, but add

       soundstart = "whatevername",

to the weapondef instead.

Note: If SpringRTS displays errors when loading the sound, try using OGG format instead. See this <a href="https://springrts.com/phpbb/viewtopic.php?f=52&amp;t=36920" class="external text" rel="nofollow">thread for more error details</a>.

Now for the explosion. For particle effects like this, there are two ways (the old TA-style way and the new lua way, again). You can write a CEG tdf file defining what sprites and particles go where and do what, or you can use LUPS (Lua Particle System). Now, this time I'm going to recommend the old TA-style way, because it's well documented and I know how to use it (whereas I don't have a clue how to use LUPS, or where to find out how to use it), but more importantly because it doesn't work on some ATI graphics cards. LUPS is much more flexible, but for now it's best only used for aeroplane trails and other effects that people won't complain about if they're missing.

To use CEG, first you'll need to put a tdf file like this one in the /gamedata/explosions folder:

    [TANKGUN_FX]
    {
    [groundflash]
       {
          flashSize = 45;
          flashAlpha = 0.9;
          circleGrowth = 3;
          circleAlpha = 0.3;
          ttl = 30;
          color = 1, 0.5, 0;
    air=1;
         ground=1;
          water=1;
    }
    [heatcloud_MED_EXPLOSION_FX01]
       {
    class=heatcloud;
          [properties]
          {
    texture=explodeheat;
          heat = 30;
          maxheat = 30;
          heatFalloff = 1;
          size = 30;
          sizeGrowth = -0.3;
          sizemod = 0;
          sizemodmod = 0;
          speed = 0, 1.5, 0;
          pos = 0, 5, 0;
          }
    air=1;
          water=1;
          ground=1;
          count=1;
    }

    [MOREDOTS]
      {
    class=CSimpleParticleSystem;

       [properties]
       {     
       alwaysVisible=1;
       Texture=randdots;

       colorMap = 1.0 1.0 1.0 0.05   0.2 0.9 0.5 0.01  0.1 0.8 0.1 0.00;

       pos      = 0, 2, 0;
       gravity     = 0, -0.1, 0;
       emitVector  = 0, 1, 0;
       emitRot     = 45;
       emitRotSpread  = 32;

       sizeGrowth  = 0.5;
       sizeMod     = 1;

       airdrag        = 0.8;
       particleLife      = 5;
       particleLifeSpread   = 7;
       numParticles      = 16;
       particleSpeed     = 8;
       particleSpeedSpread  = 3;
       particleSize      = 20;
       particleSizeSpread   = 0;

       directional    = 1;
       useAirLos      = 0;
       }
    air=1;
    ground=1;
    count=1;
    }

    }

You'll also need some more explosion images (also shamelessly stolen from EvoRTS), again available in the Example Mod.

You'll need to put these in /bitmaps, then name them in /gamedata/resources.lua . Also in the weapondef, you'll need to put

       explosiongenerator = "custom:TANKGUN_FX",

And now, in game, you should have a working moving tank that shoots things! Congratulations!

### Other Small Things

In SpringLobby, you'll notice a "Side: 1" option whenever you mouse over one of the players. It's easy enough to change the "1" to something a bit more descriptive of your side, by putting a 16x16 bmp in /sidepics . If your faction is called "TANK" in sidedata.lua, then call it /sidepics/tank.bmp .

Once you have construction units, it'll help if players have pictures of whatever it is they're building. Put these in /unitpics, and put lines in the unitdefs like

       BuildPic = "filename.bmp",   

### Structure of a Game

Before moving on to factories, builders, and other types of unit, I think it's worth going through the structure of what folder means what in a mod file.

- /bitmaps - This contains the .tga files for explosions, lasers, and so on. Each image here needs to be named in /gamedata/resources.lua before it can be used.
  - /bitmaps/loadpictures - Any jpg files in here will be shown while the game is loading.

<!-- -->

- /gamedata - Lua files defining game information.
  - gamedata/armordefs.lua - defines different armour groupings. More information: [Armordefs.lua](/armordefs.lua).
  - /gamedata/explosions - TDF files for CEG explosions.
  - /gamedata/messages.lua - messages given whenever a team loses the game. More information: [Messages.lua](/messages.lua)
  - /gamedata/modrules.lua - various parameters for your game, like flanking bonuses, rate at which experience is gained, etc. Have a look at existing games to see what they do. More information: [Modrules.lua](/modrules.lua)
  - /gamedata/movedefs.lua - defines different types of movement (hovercraft, tank, ship etc). More information: [Movedefs.lua](/movedefs.lua).
  - /gamedata/resources.lua - all the bitmaps in /bitmaps, with names and what they do (are they for projectiles, groundflares, etc)
  - /gamedata/sidedata.lua - defines the different factions, and what unit they start off with. In theory, you could do all this with a lua gadget (more on this later), but sidedata.lua works pretty well anyway.
  - /gamedata/sounds.lua - defines all the sound files, with values for volume, priority, doppler effect, etc.

<!-- -->

- /LuaRules - contains gadgets. These are scripting files that change gameplay; more info later.
  - /LuaRules/Gadgets/spawnPlayer.lua - creates a starting unit at the beginning of the game, depending on /gamedata/sidedata.lua . In theory, you could adapt this to generate random units, create whole bases at the start of games, etc.
  - /LuaRules/Gadgets/unit_script.lua - this is needed for lua animation scripts to work, for some reason.
- /LuaUI - contains widgets. These are scripting files that change the user interface; more info later.

<!-- -->

- /music - contains music for the music widget.
- /sounds - contains sound.

<!-- -->

- /objects3d - contains all the s3o models.
- /scripts - contains all the unit animation scripts.
- /units - contains unit definitions.
- /unittextures - contains textures for the s3o models.

<!-- -->

- /unitpics - pictures for each unit, shown on build mens.
- /sidepics - pictures for each faction, shown in lobby.

<!-- -->

- /[modinfo.lua](/modinfo.lua) - defines the mod name, description, and if it requires any pre-existing content.
- /EngineOptions.txt - exactly what it says on the tin. Look at different games to see what they do.

### Other Types of Unit

At the moment, you've got a tank unit. This is useful, but for your game, you'll probably need some factories, builders, buildings, and so on (depending on how unconventional your game is). I think the best way to show how to make these units is by example, so here's a basic mod with about one of each:

Load up a game against RAI (that AI works for pretty much any mod, as long as your lua isn't too strange). Then extract it open (it's really just a .zip file), look through the code and see what the scripts and unitdefs are like.

### Lua Gadgets and Widgets

Now this is where things start getting really interesting. Gadgets are small lua script files that let you add things to the basic Spring gameplay. And by "things", I mean "anything". Want units that morph into other units? Lua. Want tech trees and unit prerequisites? Lua. Want units that fire other units? Lua. Want meteor strikes and random dinosaurs to spawn out of the map and attack players? Lua. Want napalm? Lua. Want time travel? Well, <a href="https://achrongame.com/" class="external text" rel="nofollow">maybe a separate engine designed for RTS time travel would help you better here</a>, but presumably it can be done with enough Lua.

And because it's so versatile, for now I'm just going to point you to [the lists of callouts and callins](/lua-main) and stand back. Maybe I'll come back to this bit and write a basic gadget tutorial at a later date, but for now the forums are your friend.

It's not very big yet, though, so for more examples just look at the <a href="https://github.com/Balanced-Annihilation/Balanced-Annihilation/tree/master/luarules/gadgets" class="external text" rel="nofollow">Balanced Annihilation gadget source code</a>.

Widgets are like Gadgets, but instead of changing gameplay they change the user interface. So if you want to add a bunch more buttons along the right hand side, or glowing outlines around certain types of unit, you'd probably use a widget. You can also add widgets to your local copy of Spring that aren't in the mod file itself; this can be useful to give yourself debug information that other players won't have, but bear in mind that it's pretty likely other players will also be using their own array of widgets to enhance their gaming abilities when playing against you.

Have a look at the <a href="https://github.com/Balanced-Annihilation/Balanced-Annihilation/tree/master/luaui/Widgets_BA" class="external text" rel="nofollow">Balanced Annihilation widget source code</a> for some examples.

### Maps and Missions

Okay, so you've got a working multiplayer game. Now how about single player?

There aren't really any Spring games at the moment with a single player campaign. All the tools are in place, but no-one's actually used them yet. Now, I'm willing to bet that if you manage to give your game a decent SP campaign, and the multiplayer and graphics aren't too bad, it could quickly be adopted as the Spring engine's flagship game. No, I'm serious here.

To make some maps, see [Map Development](/mapdev-main)

For single player missions, there's a <a href="https://springrts.com/phpbb/viewtopic.php?f=14&amp;t=24278" class="external text" rel="nofollow">Mission Editor</a> ~~with a <a href="https://code.google.com/p/zero-k/wiki/MissionEditorTutorial" class="external text" rel="nofollow">good tutorial</a> of its own, so I don't need to write one~~. Enjoy!

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [The Complete Guide To Making A Spring Game](https://springrts.com/wiki/The_Complete_Guide_To_Making_A_Spring_Game).*
