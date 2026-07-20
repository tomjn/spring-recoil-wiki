---
title: "Tutorial:CompleteMapMaking(Wannes)"
source_url: "https://springrts.com/wiki/Tutorial:CompleteMapMaking(Wannes)"
categories:
  - "Tutorial"
  - "Map_making"
---
# Tutorial:CompleteMapMaking(Wannes)

<div class="mw-parser-output">

[Development](/development-main) \< [Map Development](/mapdev-main) \< Tutorial:CompleteMapMaking(Wannes)

## Complete Map Making tutorial by Wannes

Hello everyone, In this tutorial i'm gonna try to teach you everything you need to know to make your first decent map.

First i want to thank Maelstorm and aGorm for their tutorials, they tought me a lot.

### Things You need:

An image editing program like Photoshop (which I will use in the rest of this tutorial), Paintshop Pro, . . . Or 'the Gimp': \[ <a href="ftp://ftp.gimp.org/pub/gimp/v2.2/" class="external free" rel="nofollow">ftp://ftp.gimp.org/pub/gimp/v2.2/</a> \]

Mapconv: This is the program that converts the Bitmap files you will be making into something that Spring can use (meaning a .smf and .smt file) This program comes in 2 versions, Mothers mapconv and the "normal" one In the rest of this tutorial I will be using [Mothers MapConv](/mothers-mapconv)

Map creation tools (optional): These programs help you making heightmaps, generate heightmaps, and apply textures to them. Examples are:

- Terragen (Mars was made with the random terrain function in terragen by SJ)\[ <a href="http://www.planetside.co.uk/terragen/download.shtml" class="external free" rel="nofollow">http://www.planetside.co.uk/terragen/download.shtml</a> \]
- L3DT\[ <a href="http://www.bundysoft.com/L3DT/downloads/standard.php" class="external free" rel="nofollow">http://www.bundysoft.com/L3DT/downloads/standard.php</a> \]
- World Machine.\[ <a href="http://www.world-machine.com/download.html" class="external free" rel="nofollow">http://www.world-machine.com/download.html</a> \]

If you are planning to make big maps 16x16 and more you really need a good cpu and alot of memory and HD space. Especially when you are going to make everything in Photoshop.

### The Parts of the Map

Each map contains 4 parts (3 parts on the normal mapconv)

### The texture Map:

This defines how the terrain for your map will look. It needs to be a 24 bit bitmap, with dimensions that are a multiple of 1024. A 16x16 map (you see this at spring lobby) equals a 8192x8192 pixels bitmap. As you will soon notice these bitmaps have huge sizes. In order to compress these large bitmaps to a small mapfiles they created somethign named tiles.

A tile is a a small picture of a terrain like grass or sand or water. when you fill up your whole map with 1 or more tiles, mapconv can see this and make good use of it to compress your map. So its important you use tiles because it makes the map sizes alot smalle but you should pay attention your maps don't get too boring because of the same tile you see everywhere.

You can't just use tiles of any size. mapconv will check your map for tiles that are a multiple of 32 pixels. So you can use 32x32 64x64 . . . bigger tiles will usually be nicer on your map because its harder to spot u repeat the same tile over and over, but this also makes you map bigger. You can even use tiles like 32x64, as long as its a multiple of 32

So it important that you find a good balance between the number of tiles you use and their size.

If you want to use tiles in Photoshop, do this: open the tile picture, resize it to a multiple of 32, do edit-\>define pattern then go to the terrain picture and use edit -\> fill and select the wanted pattern. On large bitmaps this may take some time. When you have applied a couple of tiles like this you can make them blend in to each other using the eraser on a low opacity.

You can also use terragen to generate you a texture map, using an imported height map or one you made inside terragen. Although I can give you no further info about the use of terragen because I don't know alot about it either.

### The Heightmap

This is the key part of your map. It defines everything about the heights of your map (including water).

These are the basics: your heightmap must only contain black and white colors, and must be textmapsizeX/8 1 x textmapsizeY/8 1 so if you have a 8192 x 8192 texture map you got to have a 1025 x 1025 heightmap. The whiter something is, the higher it will be in spring and black is the lowest your map can be.

so basically what you do is you paint your whole map grey (usually I take 127 127 127) and then add white and black where you want mountains and valleys

I'm not very good at making heightmaps myself so maybe someone else can write some things here. The way I do it: I only use photoshop , take a white brush on very low opacity and start drawling a mountain on my map. It takes alot of time and patience making it very smooth. The blur tools helps alot and the surface blur filter helps alot too (or any other blur filter). If you want to make your terrain more interesting you shouldn't leave it all perfectly flat. There are many ways of doing this, you can use the filter-\>render-\> clouds or some things in the filer-\>noise menu (remember not to use colors!) After applying these filers you can try to put opacity of that layer low or merge it with the other layers (don't use this, but might be better)

### The Metal Map

Aah this is an easy one : ) it uses the same dimensions as the heightmap. The normal mapconv uses this map to place the metal and geovents on, but mothers mapconv has a special feature layer for the geo's (see later) so the metal map just keeps track of all the metal on your map.

It uses red to represent Metal , so you can use red going from 0 -255 to define your metal. Remember that white = all colors so when you make a white map with red dots your whole map will be covered with metal. On the normal mapconv this will be even worse because white also contains green (which it uses for geo's) so the entire map wille be full of geo's. Because each green pixel represents a geo this will cause a big error when you start your map.

So always paint your map black (love that song) first and then add red dots (unless you are making a metal map)

### The Feature Map

This is for Mothers mapconv only It uses same dimensions as the height and metalmap.

GEO's: It uses green 255 to represent a geo add 1 pixel to add one geo on your map don't place alot of green pixels next to eachother because this will make spring crash.

TREE's It uses green color 200-215 to represent trees of 16 differant types

GRASS:

It uses blue color 0-255 0 = no grass 255 = full grass

FEATURES:

- - - taken from mothers mapconv readme\*\*\*

Red Channel: 255 - feature of type on first line of text file specified with 254 - " " second " " "

ie. fs.txt has armjeth_dead on the first line, so a pixel of 255 Blue places an armjeth_dead !

Format is one feature type per line. These features currently must be found in the .tdf files in the mods/\<modname.sd7\>/features filesystem.

- - - taken from mothers mapconv readme \*\*\*

To compile these four files together, use [Mothers MapConv](/mothers-mapconv).

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Tutorial:CompleteMapMaking(Wannes)](https://springrts.com/wiki/Tutorial:CompleteMapMaking(Wannes)).*
