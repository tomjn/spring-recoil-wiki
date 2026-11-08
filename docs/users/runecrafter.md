---
title: "User:Runecrafter"
source_url: "https://springrts.com/wiki/User:Runecrafter"
categories:
  - "Deprecated"
---
# User:Runecrafter

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" class="mw-file-element" decoding="async" width="50" height="51" />](/images/172px-Symbol_comment_vote.svg.png) | use [Map_development](/mapdev-main) for up to date instructions |

## Runecrafter's Map Tutorial

Greetings, Myself (Runecrafter) and my fiancee (Moonchime) have been working on a map tutorial where we are going to try to teach you how to make maps quickly and easily.

## A list of what you will require.

- **Idea**
  - You will need to at least have an idea of what kind of map you\
    wish to make.

<!-- -->

- **Art App**
  - Some kind of 2D art program, like <a href="http://www.adobe.com/products/photoshop/main.html" class="external text" rel="nofollow">Photoshop</a>, <a href="http://www.corel.com/servlet/Satellite?pagename=Corel3/Products/Display&amp;pfid=1047024307383&amp;pid=1047025487586&amp;cid=1047025488099&amp;trkid=googlepsp&amp;trkid=14679803" class="external text" rel="nofollow">Paint Shop Pro</a>, or <a href="http://www.gimp.org/" class="external text" rel="nofollow">The Gimp</a>.

<!-- -->

- **5 Images**
  - You will need to create 5 images: Height, Metal, Type, Featuremap, Texture\
    (Type is optional).

<!-- -->

- **[Mothers MapConv](/mothers-mapconv)**
  - A program to compile the 5 images into the map for Spring.

<!-- -->

- **<a href="http://www.7-zip.org/" class="external text" rel="nofollow">7Zip</a>**
  - You will need this program (alot like WinZip) to compress the map\
    into a .sd7 or .sdz after you are done compiling with Mother's Mapconv.

## Ok Let's Get Started...

- **Step 1: Size**
  - First we will need to determine the size that our map will be.Think of it this way,\
    a Spring map that is 2x2 in size will use a texture image that is 1024x1024\
    where a 4x4 map uses a texture image of 2048x2048 etc..\
    To get an idea of how big a map is,\
    10x10 or less is small\
    12x12 - 16x16 Medium\
    18x18 - 24x24 Large\
    26x26 - 30x30 Giant\
    32x32 and up OMG!\
    To my knowledge, 64x64 is the largest that Spring can take at this time.\
    For this tutorial we will make a 16x16 (Medium) Map.\

<!-- -->

- **Step 2: Height Map**
  - The Height map is the image that determines the shape of the map(i.e.- hills,\
    valleys, mountains, etc.). It is a Gray Scale image, that means that it only\
    uses the colors of Black and White. Where black is the lowest point on the map\
    and white is the highest point on the map.\
    There are 255 shades in the gray scale- where 0,0,0 is black and 255,255,255\
    is white.\
    \
    [<img src="/images/Rune_Height.jpg" class="mw-file-element" decoding="async" width="359" height="359" />](/images/Rune_Height.jpg)\
    \
  - Ok, now to make our Height map.\
    First, we need to determine the size that our Height map image needs to be.\
    Since our map is 16x16 that means that our Texture image will be 8192x8192,\
    the Height map is 1/8 the size of our Texture map +1 pixel on both heighth\
    and width.\
    So with that in mind our Height map image should be 1025x1025. After you\
    are done creating your height map save it and leave the image open.

<!-- -->

- **Step 3: Metal Map**
  - The Metal map is the image that determines metal placement on the map.\
    This map uses the Red Channel. The Red Channel consists solely of the\
    colors red and black. Black on the Red Channel is equivalent to zero or no\
    metal(in game). Pure red is equivalent to the maximum amount of metal.\
    \
    [<img src="/images/Rune_Metal.jpg" class="mw-file-element" decoding="async" width="359" height="359" />](/images/Rune_Metal.jpg)\
    \
  - The Metal map should be the same size as your Height map. For example,\
    for our map the Height map is 1025x1025; therefore; the metal map should\
    also be 1025x1025.
  - **Some Advice** Make sure to disperse the metal equally on all sides of the map\
    as people will be playing on all sides of the map. Also, take note that if you\
    place large amounts of metal in the center of the map or in any one location,\
    people will fight for that particular location above all others. While this might\
    make for interesting game play, the downfall to this is that whoever obtains it\
    will most surely be the victor. Therefore, if you are going to place a large amount\
    of metal in a certain location-make sure the amount is not so large that it destroys\
    game play.

<!-- -->

- **Step 4: Type Map (Optional)**
  - The Type map is the image that determines the terrain properties (such as ground\
    hardness and unit movement speed). The Type map uses the Red Channel. The\
    color black or zero is the default terrain type. The varying shades between black\
    and pure red (255 shades) determine other terrain types. For example, 0,0,0 =\
    \[TERRAINTYPE0\] (default), 1,0,0 = \[TERRAINTYPE1\], and 2,0,0 = \[TERRAINTYPE2\].\
    You can have up to 255 different terrain types. The terrain types are defined in the\
    .SMD file.
  - The Type map should be the same size as your Height map. For example, for our map\
    the Height map is 1025x1025; therefore; the Type map should also be 1025x1025.

<!-- -->

- **Step 5: Featuremap**
  - The Featuremap is the image that determines the placement of features such as:\
    trees, grass, geovents, and custom features (i.e.-rocks, buildings, crystals, etc.).\
  - The Feature map should be the same size as your Height map - 1 pixel on both\
    heighth and width. For example, for our map the Height map is 1025x1025; therefore;\
    the feature map should be 1024x1024.\
  - To place a feature you simply place 1 pixel of the appropriate color on the featuremap\
    in the place where you wish it to appear on your map.\
    \
  - Geovents - Green - 255\
  - Trees - Green - 200-215\
  - Grass - Blue - 0-255\
  - Features - Red - 255-0\
    \
  - **Some Advice** Open the height map, resize the height map the the size of your\
    featuremap, Make a new layer, on this layer place the pixels where you want\
    your features, under this layer make a new layer and fill it in with the color black\
    0,0,0 then flaten the image and save it as Featuremap.bmp\

<!-- -->

- **Step 6: Texture Map**\
  \
  - [<img src="/images/Rune_Texture.jpg" class="mw-file-element" decoding="async" width="359" height="359" />](/images/Rune_Texture.jpg)\
    \
- **The End Result**\
  \
  - [<img src="/images/Demo_screen001.jpg" class="mw-file-element" decoding="async" width="400" height="320" />](/images/Demo_screen001.jpg)\
    \
    [<img src="/images/Demo_screen002.jpg" class="mw-file-element" decoding="async" width="400" height="320" />](/images/Demo_screen002.jpg)

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Runecrafter). Original page: [User:Runecrafter](https://springrts.com/wiki/User:Runecrafter).*
