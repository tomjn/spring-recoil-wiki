---
title: "Tutorial:CreateMaps(Fnordia et al)"
source_url: "https://springrts.com/wiki/Tutorial:CreateMaps(Fnordia_et_al)"
categories:
  - "Tutorial"
  - "Map_making"
---
# Tutorial:CreateMaps(Fnordia et al)

<div class="mw-parser-output">

[Development](/development-main) \< [Map Development](/mapdev-main) \< Tutorial:CreateMaps(Fnordia et al)

## The Idea

First of all you need an idea. There is no point (OK, there is some point for test purposes) in making a map just like another one that already exists. You need to think of certain things before you make your map.

1.  Is this map idea different, not just a copy of someone else's?
2.  Does my map idea give each player a fair share of the cover and high ground?
3.  Is my map idea possible to make?
4.  Is it possible with the amount of time I'm willing to spend?

If you answered yes to the above, then you are 25% of the way towards making your map!

You should probably doodle it on a piece of paper to act as a guide later.

## The Tools

With your idea hopefully sketched out, it's time to get the tools to make the map! (You can skip this if you already have them.)

For all your map compiling needs you should first download the newest [MapConv](/mapconv) program.

You will also need some image editing software. Favorites are Photoshop, the <a href="http://www.gimp.org/" class="external text" rel="nofollow">GIMP</a>, And Paintshop Pro. The GIMP, however, is the only one that's free! (I'm going to have to assume you know how to use the program you choose. If you can't there are loads of tutorials on the net.)

You may also want to check out <a href="http://www.planetside.co.uk/terragen/" class="external text" rel="nofollow">Terragen</a> for generating terrain. But as you have to pay to render anything of a good size, I won't mention it other than here.

Another tool you might find useful is the freeware tool <a href="http://www.delphigl.de/projects/terrtexgen/eng_index.html" class="external text" rel="nofollow">TerrTexGen</a>. It's useful for previewing your heightmap before compiling, but unless your texturemap is 4096 on both sides, you might find that the texturemaps that it creates are too small.

Finally, there is tool called <a href="http://www.bundysoft.com/L3DT/" class="external text" rel="nofollow">L3DT</a> which you might also find useful. It seems to be a program that is specificly designed for creating large height/texture maps. The free version is capable of rendering a heightmap as big as 4096x4096, and can generate a texturemap that is proportional to the heightmap. Of the mentioned packages, this seems the most useful and complete.

## Preparing your map

This is the fun part! And also, often, the longest part.

For a map you will need several different things:

1.  a texture map
2.  a height map
3.  a metal map

They all have certain needs! Read this bit carfully!

### Texture Map

All maps are based on a texture image. This image's width and height must be an exact multiple of 1024 pixels. So, for instance, you can have a "4096 by 8192" image, but not a "4096 by 4608" image, as 4608 does not divide by 1024. It, like all three maps, must be saved as a 24 bit BMP. A 1024x1024 Texture will produce a map shown as '2x2' in the launcher.

It may look like whatever you want! Find a texture (preferably, one that you can tile seamlessly) and fill your texture map with it. You could, for instance, fill the whole image with a sand texture. This would make your whole world look like sand. You could then decide to add a few patches of grass to it by finding a suitable grass texture and adding it on patches. So you'd have a map that was mostly sand with a few patches of green.

Because of the way the map compiler works, it will **greatly** reduce your map filesize if you use 32x32 tiles on your texture map. So, whenever you have to fill a large area with a repeating pattern, make sure the small square you're repeating is 32x32 (or a multiple of it).

### Height Map

Next is the height map. This must be exactly one eighth (1/8) of the size of the texture map **+ 1 pixel!** For instance, if the dimensions of your texture map are "4096 by 8192", divide 4096 and 8192 each by 8 and add one to the result of each. The result for this example would be "513 by 1025". The height map is a black and white BMP. Only use black and white, no colour! (well its better to work it as a greyscale image, and when saving to process, convert to rgb and save as bmp, that way you get a 24 bit bmp)

White areas are the tops of mountains; black areas are the sea floor or the bottom of valleys. The shades of grey between are the different heights between! When you draw your heightmap, make sure the white blends into the black with greys. I suggest you use the blur tool. If you have a white splodge in a patch of black you will have a very tall pillar that won't look natural at all!

### Metal Map

Finally, you need a metal map. This is the same size as the height map, one eighth (1/8) of the size of the texture map **+ 1 pixel.** On this one you paint down red (in verying degrees) to represent metal. So a red spot that is RGB(50,0,0) will provide about a 5th of the metal patch of red RGB(255,0,0) will give.

On this map you can also place green pixels. Each green pixel will create 1 geothermal vent. If you put down a green splodge you will get a cluster of geo vents! Only place 1 pixel.

Ensure you have all three saved as 24 bit BMPs and you're ready to convert it all to a map!

## MapConv.exe

Instructions pulled from the newest [MapConv](/mapconv) program. If all goes well, the `MapConv.exe` should create four new files: `mini.bmp`, `mini.dds`, `yourmapname.smf`, and `yourmapname.smt`

Converts a series of .bmp/.raw files to a Spring map. This just creates the .smf file, you will also have to create a .smd file using a text editor or Maelstrom's SMD creator.

## Mothers MapConv

[Mothers MapConv](/mothers-mapconv) is nearly the same Program but it allows to place all Features on their own Featuremap.

### But what are these 'Arbitrary Features,' Im so confused!

They are 'features' found in the /features/All Worlds or /features/corpses filesystems. Which feature is 'type 1' is defined on a map-by-map basis via a new file called 'fs.txt'. This file should contain \<cr\> delimited feature names. The first line is the feature placed when a red=255 dot is found, etc.

### Ok, Now what do I do?

If you are using any custom features, and/or you want to mod-proof your map, you should include them in the [sd7](/gamedev-archives) that you package the map in. The tree structure should look something like:

    <mapname.sd7>
    -maps/
    -mapname.smf
    -mapname.smt
    -mapname.smd
    -Objects3d/
    -<featurename[s]>.3do(specified in the tdf)
    -features/
    -All Worlds/
    (and/or)
    -Corpses/
    -<featurename[s]>.tdf
    -textures/
    -tatex/
    -<texname[s]>00.bmp or .tga

Without getting into modding/unit making I will say that the `.tdf` tells you the name of the `.3do` ("`Object=`"), and the name of the 'feature' is in the top brackets. The `.3do` specifies the texture names. The engine looks for those texture names + 00 in either bmp or tga format in tatex.

Examples of a built-in XTA wreckage name would be `armckfus_dead` which would be looking for a tdf (likely `armckfus_dead.tdf`) that has a `[armckfus_dead]` section which then specified something like: `Object=armckfus_dead` `armckfus_dead.3do` would then specify some texture like `wreck01b` which would go looking for either a `wreck01b00.bmp` or `wreck01b00.tga` file.

## Making your map work

This is the final push. Once Sharp map has finshed it will spit out a .sm2 file. This needs to be copied to the MAPS folder in Spring. But you still need one more thing: an .smd file. Basically, this file tells the game things like the maximum metal, the light colours, the clouds, etc. (All the bits you were thinking that you hadn't done yet!)

I would suggest you copy the .smd of another map and fiddle with the settings until you get what you want. smd's can be opened in notepad or similar. Look at all the .smd's so you can get a jist of what each option does. Make sure both the .sm2 and .smd have the same file name then start up Spring (not the client!) in <a href="http://taspring.clan-sy.com/wiki/FAQ#People_talk_about_.27Single_Player.27._How_do_I_start_a_single_player_game.3F" class="external text" rel="nofollow">single-player mode</a> and run the commanders script. Choose your map and away you go!

## SMD Rundown

What follows is all that we (aGorm and LathanStanley) have figured out in the SMD's. Its by no means the be all and end all, but it's the next best thing.

- Goto Maps:SMD for a more detailed listing

### General Map Information

- Description is just a short description of your map. Keep it simple.
- TidalStrength determines how much energy tidal generators will produce. A normal figure is around 20.
- Gravity, as you would expect, affects ballisitcs and how far units fly after an explosion.
- MaxMetal is the maximum amount of metal you will gain from one game square in 1 second from an area of metal that had a red value of 255 in your metal map. If making an old style metal deposit map, then this will be quite high: maybe 2 or 3. If you are making a new style metal-all-over-the-place-map, then it will be low: perhaps 0.2. Also for old style maps, you'll have to fiddle with the...
- ExtractorRadius, which is the area that is harvested by 1 metal extractor. For old style maps make this very small, so as they only take from one deposit.

### Atmosphere, Water Colours

Each value (it would appear this bit is by no means gospel) is a representation of the RGB values for that parameter. It would appear to be relative, i.e. you can put in what ever numbers you like and the game will work out what you want.

The best way to go about it is to look at it as percentages. The numbers 1, 0.5, 0.2 refer to 100% red, 50% green and 20% blue. But 2, 1, 0.4, will get the same result. Using numbers below one for all the numbers will result in the colour being less bright.

This is all a bit confusing so an example will be given:

    SkyColor=0.2 0.1 0.5;

In this example the sky is coloured with 20% red, 10% green, and 50% blue, approximatly RGB(51,25,127), resulting in a very deep night-time blue. Other colours are added to the initial sky colour. If you set your sun as being a pale yellow and it came out rather green, this is why.

One helpful tip is *negative* colour. That's right: you can type in a negative number for a colour and it will remove it from the base sky colour. Just be careful not to go below the original values or you may get a surprise.

### The Sun System/Shadow System

The Sun System/Shadow System is quite a useful tool as well in making your maps look *well done*. Within the `.smd` file there is a line:

`SunDir=-1 1 -.5; //direction of sun` (The part after the "//" is a comment)

The numbers "-1", "1", ".5" determine the angle and elevation of the sunlight system.

The first number is the X angle (East/West) (from -1 to 1) where any negative number means the sun is on the West (and therefore shadows will be cast east), and any positive number means the sun is on the East (and therefore shadows will be cast west), and if the number is 0 there are no east or west shadows, the sun is directly above you.

The second is its elevation, (0 to 1), this number is how far from the horizion the sun is, ignoring it's angle. Thus, 1 puts the sun directly overhead (while still casting angular shadows) and 0 putting it directly on the horizion.

The final number is the Z angle (North/South). (I know, I know, they wrote the engine with Y as elevation and Z as vertical. Don't blame me.) It is just like the East West positioning, where negative numbers put them on the North, and positive numbers put them on the South.

**Example Usage:** If you want the shadows *in* one of the boxes (your shadow casting surface is in the middle), use the numbers provided, or start from them and tweak the angle and sun height as seen fit.

[<img src="/images/ShadowDirection.gif" decoding="async" width="250" height="250" alt="ShadowDirection.gif" />](/images/ShadowDirection.gif)

**Note:** on the current build, it *will* cast the shadows in the proper direction, etc. Negative direction numbers tend to make some maps unstable and cause crashes. The best solution would be to rotate or flip your map to where the shadows point up or right (North or West). I do believe these bugs are being worked on and will be fixed soon.

We can only hope this has been helpful! Any questions, or things you think we have missed, please ask us in the maps section.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Tutorial:CreateMaps(Fnordia et al)](https://springrts.com/wiki/Tutorial:CreateMaps(Fnordia_et_al)).*
