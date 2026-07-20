---
title: "3DModels:Wings3DTutorial"
source_url: "https://springrts.com/wiki/3DModels:Wings3DTutorial"
categories:
  - "3D_Models"
---
# 3DModels:Wings3DTutorial

<div class="mw-parser-output">

### Prerequisites

Firstly you're going to need a modelling programme, for this tutorial I'll be using <a href="http://www.wings3d.com" class="external text" rel="nofollow">Wings3D</a>. It's free and small so go download it now!(it seems <a href="http://www.blender.org/" class="external autonumber" rel="nofollow">[1]</a> is beter and free too but have a lot of useless option for this work like making movie or game engine ...) Also you're going to need [upspring](/upspring), so get that as well. This tutorial will use Photoshop but the same principles will apply to GIMP or any image editor of your choice.

### Making the Model and UVmap

I'll assume you know how to model in wings and have your model ready, so I am going to be using a three piece tank, chassis, turret and barrel...

[<img src="/images/Creating1.jpg" decoding="async" width="592" height="367" alt="Creating1.JPG" />](/images/Creating1.jpg)

So, the next step is to UV map it, this isn't as hard as it has been made out to be. Firstly, you'll want to combine it, then UVmap-\>ForceSegment. This will bring up your unit in the UV mapping window, from there you'll want to use theSegment-\>Projection function, which will leave your model looking something like this...

[<img src="/images/Creating2.jpg" decoding="async" width="553" height="384" alt="Creating2.JPG" />](/images/Creating2.jpg)

The different colours show the different pieces your model will be broken up into when its placed on the texture. Now to get it there, you'll want to go Continue-\>Unfolding, which will make the UVmap and leave you with something that looks like this...

![creating37uy.jpg](http://img240.imageshack.us/img240/1449/creating37uy.jpg)

A nice pattern, but not very useful for when we want to texture it, so rightclick-\>CreateTexture, and use these parameters for now...

![creating45wi.jpg](http://img111.imageshack.us/img111/8757/creating45wi.jpg)

And that will give us this...

[<img src="/images/Creating5.jpg" decoding="async" width="431" height="432" alt="Creating5.JPG" />](/images/Creating5.jpg)

That's what you'll draw your texture onto later, but for now, close that window and head back to the main view. Now we want to convert the model to a format that UpSpring can use, OBJ suits our purposes.

However to animate it, we will need to have it in seperate pieces, so seperate it to undo the combine we used to help us UVmap. Now select a piece, then go File-\>ExportSelected-\>Wavefront (obj)... and repeat for all the other pieces. Make sure you Export SELECTED rather than just exporting.

So now you have 3 obj files called something like chassis.obj, turret.obj and barrel.obj. Now you can close Wings3D and crack open upspring.

Load your base object by going File-\>LoadModel and choosing your chassis, it should now appear in the views of UpSpring. First thing you want to do with it is give it a name. Chassis would be an appropriate one, so go to the Objects tab on your right and you'll see an empty list of pieces, and select where it should be,and give it a name so you can see it...

[<img src="/images/Creating6.png" decoding="async" width="594" height="381" alt="Creating6.png" />](/images/Creating6.png)

Now with that object still selected, you'll want to import the piece that will be attached to it, the turret, to do this we don't want to load a new model because that will delete the one we already have, so instead we go Object-\>Insert Object from file and select turret.obj.

Now you'll want to give the turret piece a name, I suggest turret, then repeat the same action but with the turret only selected and import the barrel.

The final piece you'll want to add is a fire point, click add empty and name it flare.

Now unless your model was enormous in the modeller you'll want to scale it up to make it look alright in spring and be easier to handling in UpSpring, so go to the objects tab if you're not still there, and with the chassis selected, set all the scale values to about 10 to start of with, then click apply transform.

Next to make sure the pieces turn around the right spots when you animate it we have to set the orrigins, these are represented by red dots in the upspring view windows. To do this for the turret we select it and switch to move mode, represented by a four pointed arrow on the left side of your screen. Now move it so that the point you want it to rotate around is at (0,0,0) in the 2d views, then press apply transform and move it back to where it should actually be on the model.

For the next piece you need to move where you want the barrel to rotate around to the orrigin of the turret, hit apply transform, and move back. For the firepoint you can just move it into place since all it is effectively is a orrigin.

Now you'll probably want to switch back to view mode so you don't accidentally move your pieces around, do this by clicking on the crosshair at the top left under File.

Remember that texture we got when we exported the model? Nows when we get that to display properly in spring. Open it in Photoshop and the first thing you'll want to do is go flip it vertically, spring requires you do this, although I have no idea why, but it can be achieved by going Image-\>Rotate Canvas-\>Flip Canvas Vertically.

The second thing we want to do to the texture is add an alpha layer and stick it at about 99% darkness, this makes sure spring displays it correctly, you can also draw lighter patches that will appear as team colour. **To Be Continued...**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [3DModels:Wings3DTutorial](https://springrts.com/wiki/3DModels:Wings3DTutorial).*
