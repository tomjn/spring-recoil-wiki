---
title: "Tutorial:MapDesignHelp(IceXuick)"
source_url: "https://springrts.com/wiki/Tutorial:MapDesignHelp(IceXuick)"
categories:
  - "Tutorial"
  - "Map_making"
---
# Tutorial:MapDesignHelp(IceXuick)

<div class="mw-parser-output">

[Development](/development-main) \< [Map Development](/mapdev-main) \< Tutorial:MapDesignHelp(IceXuick)

### How to build a map

Hello, welcome to the IceXuick map Design help. On this wiki page i will try to make a complete and organized 'topic' how to build a map, from A-Z. Tips, add-ons or other suggestions are always welcome. OKAY.

### What do you need:

First of all i'll sum up the thing you need:

\- Photoshop / Gimp (or other image editor)\
- Bryce / L3dT (optional, if you don't want a great looking texture)\
- [MapConv](/mapconv) (map converter program)\
- Patience & passion\

If you have most of these things, you can start thinking about the map you want to make. It is very smart to make sketches of your map, before creating it. Try to design the map, so that in your 'mind' it could play well. Think of possible problems as porcing probabilities, turtling, strategic important places, but also metal layouts, geo-vent locations, and maybe even feature-placement.

### What are you going to make:

Well, how much different things you might have read, these are the things i use, and work very well, so i suggest you use this, and nothing else :). To know how big your map will be, the factor is 512 times the TA:S size: here are some (total)map sizes and corresponding dimensions:

**TA Spring ---- Actual Pixels**\
32 x 24 ------ 16384 x 12288\
16 x 12 ------ 8192 x 6144\
8 x 4 -------- 4096 x 2048\

This is the best order in which you should work:\

\- **Heightmap** ... bmp 24-bit - 1/8 +1 of Total map size\
- **Metalmap** ..... bmp 24-bit - 1/8 +1 of Total map size\
- **Featuremap** .. bmp 24-bit - 1/8 of Total map size\
- **Typemap** ...... bmp 24-bit - 1/16 of Total map size\
- **TestTexture** .. bmp 24-bit - Total map size\
- **Compiling** ..... your maps with Mothers MapConv\
- **SMD file** ........ script of all kinds of things, including atmosfear, colors of sky and water, fog settings, but more important, metaloutput, winds, tidal, start locations and terraintypes.\
- **Test Phase** ... debug your map a much as possible\
- **Texturemap** .. bmp 24-bit - Total map size\

### The Heightmap:

Here are in following order the things that are to be done:\

\- roughly outlining large mountains/valleys\
- go deeper into detail by lowering size of drawing brush\
- finalize details with 15px brush (in Photoshop)\
- make slopes/passages on your map with smudge/blur tools\
- Texturemap - bmp 24-bit - Total map size\

The heightmap is one the the most important things you make for a map, and therefor i always start with it. After you have drawn your concept of your map (sketches) you may want to digitize them (if you don't already have that) and you should think which mapsize would be best. If you want your map to be a 8x8 map you should (first) also make the heightmap this size. By doing so, you can use Bryce or L3dT to render your texture at the highest possible quality.\

So you now are going to start working in Photoshop (or other image program). Try to remake your sketch by drawing different shades of grey. White is the highest (255) and black (0) is the lowest. You can start drawing roughly, to outline every hill or valley. After that, try and go deeper into detail, and finally use a brush size of 15px in Photoshop for the final details.\

To make your map work for all the units, it should have passable slopes and passages: use a 'Smudge'-tool (optionally also Blur-tool). A lot of programs have this, so you should be able to figure it out. For every slope or passage that needs to be passable, the gradient from the lowest to the brightest color of that slope should be as smooth as possible. You need to get the feel of the smudge-tool in Photoshop, but after a while you'll get the hang of it. Also try to make slopes that have a big difference in highest and lowest point, long and smooth.\

When you think everything is smooth and detailed, save that image as FullHeight.bmp, at the same size as the Total Map. After that, scale down this file to 1/8th of the size of the Total map, +1 pixel (x and y), and save this one as Height.bmp\

### The Metalmap:

Okay, for playtesting value, you can now make your metal map. This is at first quite simple, and easily done, but the placement and balance is very hard. You can only try and think of good locations, and the output should be 15 metal per player (non-moho), if they have their part of the map (on a four player map, this would be 1/4th of the map)

In Photoshop, make another layer onto your heightmap, and put metal places around the map. Use a 6 or 8px **PENCIL** for the metal patches, and paint with red 255 (make sure there is no antialiasing, so that every pixel is RED 255.

When done, you can save this file as Metal.bmp (1/8th of Total map size +1).\

### The Featuremap:

In the featuremap you can place Geo-vents, Trees, grass, and extra features like rocks, palms, energy spires. You need to have these 'extra' features, later to be compiled within the map. Geo's, tree's and grass will work automatically. For the extra features, you need to get the whole pack, which consists of a couple of maps with files for the model, the texture and the script. Check the "maps" forum for features that were created.\

**Geo's** are represented by **GREEN** (255), single pixels. Every green (255), pixel will (most likely) be compiled as a geo-vent.\

The shades 200-215 of GREEN are different **Tree-types**. Remember to use 1 single pixel for tree's as well. 200-206 seem to be coniferous tree, 207-215 seem to be decidious.\

**BLUE** represents the ammount of **Grass** to be placed, where black means none, and BLUE (255) means full spreading of grass)\

Than Last but not least, **RED**, for the **Features**. In the FS.txt file (that comes with Mothers MapConv, you can list all your features, that you want to use. The first feature that is listed in this file, will be represented as RED 255. The second feature will be RED 254, the third RED 253, and so on. Also features will need only one pixel.\

Try to make sure that no one of those pixel are next to each other within 4-5 pixels. This may crash during compiling, or gives strange results in-game.\

### The Typemap:

Okay, the Typemap, also known as the TerrainType map, let'a you set the **terrain name**, the unit categories **speed multipliers**, and also the **hardness multiplier**. This map works again with RED only. Every Shade of RED can be set in the SMD file, on which i'll return later on. The Typemap that worked for me is **NOT** the same as the height- and metalmap, but is **1/16th** of the Total Map size.\

So an 8x8 map is Total 4096 x 4096 pixels. If we then do the math: 4096 /16 = 256. (otherwise there will be a default terraintype (that you did not set) between different terraintypes, and this can be very annoying)\

Draw your 'terrain' onto your heightmap (make sure you again use the **PENCIL** mode, without antialiasing around your pixels), and save it as a BMP in 1/16th of the Total Map size (Typemap.bmp).\

### Test Texture:

You need to have a 'test'-texture in order to compile, so you can simply make a big grey image, that has the **right dimensions** (for 16x16 it will be 8192x8192). Save this as Texture.bmp\

### Compiling your map:

Before rendering your final, huge, super shweet texture, you want to know if your map plays okay, and that's why we first going to compile the map:\

- how is the heightmap, **check it for all units** if everything works\
- is the metal placing and spacing okay? are there spots on slopes or unbuildable terrain, or unreachable.\
- are the geo's working, and also well placed (no clusters of geo's?)\
- do units move quite right, or do they get stuck all the time\
- how is the water level (if there is any)\
- are the starting locations allright?\
- maybe you already want to check the other features, as grass, trees or extra's?\

Therefor, we are going to compile this thing first, to check all these things in-game. This will save you numerous re-renderings. And changes in the heightmap after the render, is **NOT** recommended. Esspecially for the people that play in **TA-cam mode**, because they have to be able to tell from above what the terrain is like.\

Okay, if you did all of the above, and did it perfect, than this will be your first and second last compile... but trust me, you will compile a **couple of times** more, if you want the map to play well!\

Although there is a mapcompiler in the works as i type this, for now we need to do it the old fashioned way, by DOS.\

Unpack the files of [MapConv](/mapconv) into your directory with all your previously saved files. **Make sure** that all the (sub-)directories to this location **DON'T have SPACES** in them! After this being said, you will need to go to DOS mode.\

In Windows, go to "start", and then "run", and type 'cmd' (without the quotes). This will bring up the commandline prompt. Navigate to your directory in which all bmp's and Mothers Mapconv are located. I ain't gonna explain how you navigate is DOS, if you got this far, you probably know your way around with computers.\

Once in the right directory/folder, type 'MapConv --help' for a explaination of all parameters. This is not nescesary if you use it as following:\

**MapConv -f Features.bmp -i -l -c 0.5 -x 300 -n -150 -o YourMapName.smf -y Typemap.bmp -m Metal.bmp -a Height.bmp -t Texture.bmp**\

This line will compile your map will the above created files, and compresses it only half (normal compression is 0.8), what will leave a bit more of your original texture in tact, however your filesize will be higher.\

- The -i -l commands are nescesary.\
- The 0.5 compression can be altered to 0.8 or for high quality to 0.2 or 0.3\
- the -x is the maximum height and -n the, yes, minimum\

To get the water level right you can **calculate the best values** for the max. and min. height. Check your height.bmp and look which grey value you like to be the surface of the water (darker is submerged, higher is land). If this is grey 80, than you know that 80/(255/100) = 31.4% should be submerged. Depending on what total height you want to use, be sure that the zero-0-point (which is the water level) is at 31.4%. So if you want around 600 height difference in total, then you should use -x 412 -n -188 (you may do the math yourself). This should get near the water altitude that you want. Otherwise recompile and test again!\

If all went well, you should now have **4 new files** in that same directory.\

- **mini.bmp** - absolete, you don't need this.\
- **mini.dds** - needed for minimap 1024x1024 (texture in DirectX format DTX1)\
- **YourMapName.smf** - Feature file\
- **YourMapName.smt** - Texture file\

Now you have the basic files that TA:Spring can read, BUT you need to '**sd7'** them. SD7-ing kind of 'zips' these files into 'one map-zip-file-archive'. How you do this, is quite important.\

First make a **new** sub-directory, i always name it after the version, so 'v01' wil be right. In this directory, you need to make **another sub-directory** called 'maps'. In THIS directory, you need to place your .dds, .smf and .smt files. If you have downloaded extra features (with directories included such as 'features', 'objects3d' and 'unittextures') you need to copy them to the 'v01' directory as well, so it's **next** to your 'maps' subdirectory, not in the 'maps' dir. Also do **NOT forget** to copy your **fs.txt** file from your 'edit' directory, into the 'v01' directory.\

**Create or Edit an SMD file:**\

Now you have to create (or copy paste) a .smd file, that will be put next to the other files in the 'maps' sub-directory. I will post the most important stuff needed. You may also use the **SMD Creator**, which is also available for download somewhere, and quite **handy for sun direction and colors**, but 'sometimes' a bit buggy when opening and re-saving a file **(crashes)**. The most important stuff,**--** means that i've deleted something, and the **//** + remarks are to be removed:\

\[MAP\]\
{\
Description=Describe your map shortly, it can be seen in the lobby;\
TidalStrength=10; //Energy that Tidal generators will give. (10-30)\
Gravity=120; //variable, 120-150 is kinda standard, test on map\
MaxMetal=1.2; //metal output rate. \<1 is more OTA, \>1 is more XTA\
ExtractorRadius=100; // radius of mexxes, 40-50 tiny, **100 desirable**\
MapHardness=100; // Global hardness of terrain 100 will deform from shots\

\[ATMOSPHERE\]\
{\
--\
MinWind=1; // minimum wind\
MaxWind=25; // max wind, know that a **average of 10 is almost equal to solar**\
}\

--\

\[TERRAINTYPE50\]\
{\
name=SoftTerrain; // name that will be shown in-game on mouse-hover\
hardness=2; // multiplier of Global MapHardness\
tankmovespeed=0.9; // The speed multiplier of the different units\
kbotmovespeed=1;\
hovermovespeed=1;\
shipmovespeed=0; // **0 means impassable**\
}\

\[TEAM0\]\
{\
StartPosX=250; // start x-coord. of player 1\
StartPosZ=250; // start y-coord. of player 1\
}\
\[TEAM1\] // **TEAM0 is player 1 and TEAM1 is player 2**\
{\
StartPosX=4950;\
StartPosZ=4950;\
}\

etc..\

After you are satisfied with all the settings, you can then save this file as 'YourMapName.smd'. PLace it **next** to the other YourMapName.\* files, in the 'maps' subdirectory, so that there are now **4 files** there.\

Assuming you have downloaded a **7z zip program** (which you can (re)name to .sd7) you then go into your 'v01' directory, and zip all those directories, including the fs.txt file if you use extra features. Three important things:\

- name your map 'YourMapName.sd7' and **NOT else** (use **exact** same name as with compile)\
- Compression can be set to **ultra**\
- Dictionary Size = 32 mb\
- Word size = 64 mb\
- do **NOT** make it an **SOLID** archive\
- Multi-threading, if you like\

When this is done, copy 'YourMapName.sd7' into the maps folder of TA Spring, and off you go! **You can now start your game from within TA:Spring!!**\

### The Testing Phase

Start up your map. If you did everything i told you to, **it should work**! The things i always do is build the following units to test the 'pathfinding' and movement areas:\

- **Peewee's** - k-bot footprint - same movement for all k-bots\
- **Flashes** - Tank footpring\
- **Hover Tank** - Hover footpring\
- Build **all metal spots** with mexxes to check if their location is buildable\
- If watermap, build boats and subs\
- Optionally build exp. bots like Krogoth & Orcone\

When you've build these units, select one, and **press F2**. You can now see where that unit can go (GREEN), where it will move slow (or fast downhill)(ORANGE), and where it **CAN'T move**(RED). This last one is particulary important. Test all units this way, and check the whole map, if some type or more types of units can't go somewhere. If this is so, you need to **smoothen out that slope** in your heightmap (and make it probably longer as well, or change the **heightdifference**). It can also be that units **CAN** pass certain 'ridges' that it weren't supposed to do. You can always do 2 things. **OR** you change the **heightdifference** (bigger is higher ridges), this is often the easiest way, **OR** you **change your heightmap**, and make it right, what very often is the way to do it best.\

Make sure you **check** these things as well:\

- is the **water level** right?\
- How does the water look, do you need to change the colors?\
- How is the **wind**, do you like it, is it too much or too little\
- How is the **sun** working out (more on this after Final Texture)\
- Can **hovercrafts** go onto the water easily
- Do all the **boats** work fine (maybe water level too deep)\
- How does your map look in FPS or sort of view?\
- are the **Geo's** working?\
- Do all **features** work?\
- Is the **metal output** okay, too much, too little?\

You see, there is a **LOT** to test and check, So do play and test and play and test alot! **If** one or more of these things aren't working allright, you need to change it in the SMD or in your bmp's and recompile. If you are playing against AAI as a testing method, be **SURE** that if you recompile a **changed height, metal or feature map**, you need to **delete all cached and cfg files** in the AAI folders. Otherwise the AAI won't see the difference.\

After multiple testrounds, you should have a good working map. If you like to 'organic-ize' your map, you can/must do it now. If you make it too organic, the pathfinding and passable slopes could be distorted, and you don't want that! So you can heighten or lower certain parts, or even throw in a noize overlay, but be **SURE** that you check if the map still plays okay!\

### The Texture:

Remember the heightmap "fullHeight.bmp" we made bigger than we eventually will need? Well now you will see. Personally i use Bryce for rendering maps. I makes them nice and gives a perfect OTA feel to them. If you have Bryce, you must do the following steps:\

\- create a terrain\
- edit the terrain, go to the picture tab, and load "FullHeight.bmp"\
- optionally add some height- or slopenoise, but do not overdo this\
- set the material, choose one, alter it a bit, so you like it!\
- set the atmosfear, light angle, and play with the icons and colors\
- last but not least, make the camera settings right!\

To do this you need to enter camera mode (you'll a camera icon). Then you must click the grey triangle next to the round sphere thing. There you can click on "edit current camera". In this menu, you must set the following where **A** an **B** are variables:\

\- - - - - **x** --- **y** --- **z**\
origin -- 0 --- **A** --- 0\
pos - -- 0 --- **A** --- 0\
rotate - 90 -- 0 --- 0\

FOV: 1 degree Scale: **B**

Only the first time, you need to tweak this, then you can save it as an template. The scale **B** should at least be 100% (but bigger ain't a problem).\

After that, you need to set the 'altitude' of the camera with **A**. You need to tweak this, so that you terrain completely fills the map. It will be a **large number**, my template uses 25600. If you have a square map, set your document settings to square (800x800 for example). If it's not, make that change, just make sure the map fits the scene/screen.\

When you are sure your map 'fits' you can start your render. You must "Render to Disk" and you should also set the antialiasing to ultrafine for the best results (you can do this also in "document setup").\

If you are not sure the map fits 100% (in any case, don't make it TOO big, because you will **loose map** that way), than you should consider rendering a bit larger, let's say 3-5% bigger (for a render of 8192, render to 8500) and you can then later cut of the edges and change it to the desired size of your image in Photoshop. (Although this is **NOT recommended**)\

**Voila**, after a couple of hours (depending on your system en scene settings) you'll probably have a nice render. (on which you can work later, to add more details...)\

Now you can open this file again in Photoshop, and start working on the details. Most important of all, is that you add the metalspots. The best way to do this, is to open your Metal.bmp, scale it to you Total Map size (8192x8192 for example) and put this image in a layer on top of your final texture layer, and set the opacity to 30-50%. Now you can see where the metal is supposed to be, and you can start drawing these in the map. (You can also download the original TA Metal patches somewhere, and add these)

After you have done all this, and are **satisfied** with the result, save your texture as Texture.bmp. You are now ready to compile it. You should use the settings that you now know (min. & max. height and compression setting). After Compiling, copy the files to your 'maps' directory, SD7 them, and finally place the final 'YourMapName.sd7' in your TA:Spring 'maps' folder,\

### you can now play it!!

If you also want to play it against other people, you should upload this sd7 file.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Tutorial:MapDesignHelp(IceXuick)](https://springrts.com/wiki/Tutorial:MapDesignHelp(IceXuick)).*
