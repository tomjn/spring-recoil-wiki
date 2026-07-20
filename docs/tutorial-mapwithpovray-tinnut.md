---
title: "Tutorial:MapWithPOVRay(Tinnut)"
source_url: "https://springrts.com/wiki/Tutorial:MapWithPOVRay(Tinnut)"
categories:
  - "Tutorial"
  - "Map_making"
---
# Tutorial:MapWithPOVRay(Tinnut)

<div class="mw-parser-output">

[Development](/development-main) \< [Map Development](/mapdev-main) \< Tutorial:MapWithPOVRay(Tinnut)

## Howto

**Create a map's texture using Povray to generate the texture**

!! This is currently a work in progress and make take some time to complete. !!

### Intro

This guide will take you through creating a texture for a Spring map using the freeware Povray program. Povray is an excellent <a href="http://en.wikipedia.org/wiki/Ray_tracing" class="external text" rel="nofollow">raytracing</a> application that generates "scene" images using a scene definition language in a text file. We can use it to create a map's texture by creating a heightfield object, putting our "camera" directly over the object, setting the camera to orthographic, and rendering a bitmap at our map's dimension. The steps below will give you an easy enough to follow process to generate a nice map, but if you want to create different maps you'll need to learn Povray's scene definition language. This language is easy enough to follow, but depending on your tastes you could be better off using a tool that specialises in maps and map textures, such as the excellent <a href="http://www.bundysoft.com/L3DT/" class="external text" rel="nofollow">L3DT</a>.

The guide does not cover other aspects of map creation (heighmaps, features, metal, compiling, etc), but there are a few excellent guides within the Wiki that already cover those steps.

Povray is available for both Windows and Linux. I have only tested these steps under Windows, but they should work under Linux.

Please note that a lot of the maths used in the scene definition file has only been tested on a 16x16 map (8192x8192 pixels).

Warning: The base textures I use in this example are all mostly rubbish that I created in a couple of minutes. I would suggest that you do not use them in your own maps :)

### Initial Steps

1\) Download and install Povray: <a href="http://www.povray.org/" class="external text" rel="nofollow">Povray Site</a>

2\) Create a working folder for your map, for this example, we'll make C:\PovMap

3\) Create a heightmap using whatever program (I like <a href="http://www.gimp.org/" class="external text" rel="nofollow">The GIMP</a>, which is good, and it's free). Here is the one we'll use for our map (I created this in a hurry and it was quite a mistake that it ended up so similar to Altered Divide):

<a href="http://img441.imageshack.us/my.php?image=povmapheightbp9.png" class="external text" rel="nofollow"><img src="http://img441.imageshack.us/img441/8862/povmapheightbp9.th.png" alt="povmapheightbp9.th.png" /></a>

Your map will need to be named povmap_height.png, but if you want to use another name, just update the pov script below to use your heightmap's actual name.

4\) For our example, we'll be defining three different elevation levels for which there are different terrain textures, these will be (each at 512x512):

4.1) Lowest elevation (low lying areas):

<a href="http://img176.imageshack.us/my.php?image=level1zd7.png" class="external text" rel="nofollow"><img src="http://img176.imageshack.us/img176/953/level1zd7.th.png" alt="level1zd7.th.png" /></a>

4.2) Middle elevation (main map surface):

<a href="http://img170.imageshack.us/my.php?image=level2pf6.png" class="external text" rel="nofollow"><img src="http://img170.imageshack.us/img170/6473/level2pf6.th.png" alt="level2pf6.th.png" /></a>

4.3) Highest elevation (mountains):

<a href="http://img176.imageshack.us/my.php?image=level3wv7.png" class="external text" rel="nofollow"><img src="http://img176.imageshack.us/img176/6159/level3wv7.th.png" alt="level3wv7.th.png" /></a>

5\) Now also for our example, we'll be defining two different textures to be used by sloping areas, one for slopes in the lower elevation areas of the map, and another for slopes in the higher elevations:

5.1) Lower elevations:

<a href="http://img411.imageshack.us/my.php?image=slope1on6.png" class="external text" rel="nofollow"><img src="http://img411.imageshack.us/img411/2153/slope1on6.th.png" alt="slope1on6.th.png" /></a>

5.2) Higher elevations:

<a href="http://img411.imageshack.us/my.php?image=slope2fk7.png" class="external text" rel="nofollow"><img src="http://img411.imageshack.us/img411/8908/slope2fk7.th.png" alt="slope2fk7.th.png" /></a>

6\) Create an empty text file in your C:\Povmap folder named gen_pov_texture.pov

7\) Copy the following povray scene code into the above file:

<table>
<colgroup>
<col>
</colgroup>
<tbody>
<tr>
<td><pre><code>
&#10;// Setup some parameters that we will use within the script
#declare MAP_WIDTH=8192;
#declare MAP_HEIGHT=8192;
#declare MAP_EL=600; // elevation
&#10;global_settings { 
  // ambient light level
  ambient_light rgb&lt;1,1,1&gt; 
}
&#10;// Set a directional light
light_source {
  &lt;100,-100,100&gt; * 20, color rgb 1
  parallel
  point_at &lt;1, 0, 0&gt;
}
&#10;// Set the background colour
background {rgb&lt;1,1,1&gt;}
&#10;// Define our camera position, and set it to &quot;orthographic&quot; (important :)
camera {
  orthographic
  location &lt;0,0,MAP_EL + 90&gt;    // position &amp; direction of view
  look_at  &lt;0,0,0&gt;
  right MAP_WIDTH*x            // horizontal size of view
  up MAP_HEIGHT*z               // vertical size of view
}
&#10;// ** Define our primary textures **
 &#10;// lowest texture (512 x 512)
// Found in low lying areas of the heightfield
#declare level1_texture =
texture {
  pigment {
    image_map {
      png &quot;level1.png&quot;
    }
  }
  finish {ambient 1 diffuse 0}
  scale &lt;512/MAP_WIDTH, 512/MAP_WIDTH, 512/MAP_WIDTH&gt;
}
&#10;// middle texture (512 x 512)
// Found in the middle areas of the heightfield
#declare level2_texture =
texture {
  pigment {
    image_map {
      png &quot;level2.png&quot;
    }
  }
  finish {ambient 1 diffuse 0}
  scale &lt;512/MAP_WIDTH, 512/MAP_WIDTH, 512/MAP_WIDTH&gt;
}
&#10;// highest texture (512 x 512)
// Found in the peaks / hills / mountains of the heightfield
#declare level3_texture =
texture {
  pigment {
    image_map {
      png &quot;level3.png&quot;
    }
  }
  finish {ambient 1 diffuse 0}
  scale &lt;512/MAP_WIDTH, 512/MAP_WIDTH, 512/MAP_WIDTH&gt;
}
&#10;// Define a texture that blends from one level&#39;s texture to the next, 
// depending on elevation:
#declare levels_elevation_texture=
texture {
  gradient z
  &#10;  texture_map {
    [0.00 level1_texture]  // from 0.0 to 0.1 we have just level1.png
    [0.10 level1_texture]
                    // from 0.1 to 0.2 we blend from level1.png to level2.png
    [0.30 level2_texture]  // from 0.2 to 0.5 we have just level2.png
    [0.40 level2_texture]
                    // from 0.5 to 0.6 we blend from level2.png to level3.png
    [0.60  level3_texture]  // from 0.6 to 1.0 we have just level2.png
    [1.00  level3_texture]
  }
}
&#10;
// ** Define textures used on areas of slope
&#10;// lower slope texture (512 x 512)
#declare slope1_texture =
texture {
  pigment {
    image_map {
      png &quot;slope1.png&quot;
    }
  }
  finish {ambient 1 diffuse 0}
  scale &lt;512/MAP_WIDTH, 512/MAP_WIDTH, 512/MAP_WIDTH&gt;
}
&#10;// upper slope texture (512 x 512)
#declare slope2_texture =
texture {
  pigment {
    image_map {
      png &quot;slope2.png&quot;
    }
  }
  finish {ambient 1 diffuse 0}
  scale &lt;512/MAP_WIDTH, 512/MAP_WIDTH, 512/MAP_WIDTH&gt;
}
&#10;// Define a texture that blends from one slope&#39;s texture to the next, 
// depending on elevation:
#declare slopes_elevation_texture=
texture {
  gradient z
  &#10;  texture_map {
    [0.00 slope1_texture]
    [0.30 slope1_texture]
    &#10;    [0.65  slope2_texture]
    [1.00  slope2_texture]
  }
}
&#10;// ** Now define the final texture blending between the height textures 
// and the slope textures:
#declare final_texture = 
texture {
  slope {
    &lt;0,0,-1&gt;, 0, 0.5
  } 
  texture_map {
    [0.00    levels_elevation_texture]
    [0.06    levels_elevation_texture]
    [0.40    slopes_elevation_texture]
    [1.00    slopes_elevation_texture]
  }
}  
&#10;// ***!! Now we declare our heightfield object that uses this texture
#declare primaryHF=
height_field {
  png &quot;povmap_height.png&quot;                                  
  smooth              // smooth the heightfield
  no_shadow           // you may want to remove this
  translate &lt;-.5, -.5, -.5&gt;
  rotate &lt;90,0,0&gt;     // rotate it so that the projection of the texture is correct
  scale &lt;1,-1,1&gt;      // invert the y axis
  translate &lt;0.5, 0.5, 0.5&gt;
  texture {
    final_texture
  }
  &#10;  // now scale to the maps height x width
  scale &lt;MAP_WIDTH, MAP_HEIGHT, MAP_EL&gt;    
  // and center it for the camera
  translate &lt;-MAP_WIDTH/2, -MAP_HEIGHT/2, -MAP_EL/2&gt;   
}
&#10;
// ** If you&#39;re going to add the metal placement stuff
// ** described below, you need to put it here!
&#10;
object {primaryHF}</code></pre></td>
</tr>
</tbody>
</table>

What we're essentially doing above is:

- Setting up scene parameters: lighting, the orthographic camera, etc.

<!-- -->

- Defining a set of textures to display at different elevations and different slopes; and

<!-- -->

- Defining a heightmap that uses our png image and applies our texture to this object

8\) Double click on your gen_pov_texture.pov file so that it opens up in Povray.

9\) Add a new render size (8192 x 8192):

9.1) Drop down menu "Render" \> "Edit Settings/Render" \> Click "Edit" button

9.2) Add text at bottom of file:

<table>
<colgroup>
<col>
</colgroup>
<tbody>
<tr>
<td><pre><code>[8192x8192, No AA  Spring]
Width=8192
Height=8192
Antialias=Off</code></pre></td>
</tr>
</tbody>
</table>

9.3) Save file

10\) Restart Povray so that it re-reads the ini-file

11\) Select your new render size and click Render. This creates a bitmap file: gen_pov_texture.bmp

12\) Convert to gen_pov_texture.bmp to a png file if you're using the new mapconv (it doesn't seem to like bitmaps). I personally use <a href="http://www.imagemagick.org/" class="external text" rel="nofollow">imagemagick</a> to do this as it has a simple command line program "convert.exe" that will convert an image from one format to another and it works well with the very large bitmap image that comes out of the above steps.

13\) Do all the other map stuff: metal placement bitmap, feature placement bitmap, smd file

14\) Compile your map with mapconv

15\) Test it :)

## Advanced stuff

Check out your help file that came with Povray. There is a LOT that you can do!

### Complex Texture Map Combinations

As you can see from the pov code above, a "texture" declaration can be an image (called an "image_map"), but it can also be a definition of a blend between any number of earlier defined textures (called a "texture_map"), which is based on a function. In the above example, it uses the "gradient" function for changes in elevation, and the "slope" function for changes in slope. It is possible to define much more complex sets of textures than those defined above, such as mixing different combination of slope mapings with combinations of elevation mapings.

Our blend function could actually be an image if you wanted finer control of a map's texture, by having sections of metal mixed with sections of wilderness, for example. To do this, you would:

1\) Create a new png image the same size as your heightmap (although you could make it larger or smaller) and paint sections of the map that are to use your wilderness textures in white, and the sections that are to use your metal texture in black. For effect you could do a slight blur on the image to create grey coloured transitions where the two sections meet. For our example I created this:

<a href="http://img185.imageshack.us/my.php?image=texturedistributionpa8.png" class="external text" rel="nofollow"><img src="http://img185.imageshack.us/img185/2641/texturedistributionpa8.th.png" alt="texturedistributionpa8.th.png" /></a>

3\) Change the "final_texture" texture name in your script to "final_nature_texture"

4\) Define a set of textures in a similar manner that define your metal textures (based on heights and slopes), with the final blended metal texture named "final_metal_texture". Don't forget to give them different names than the wilderness texture names are.

5\) Create a new "final_texture" that is:

<table>
<colgroup>
<col>
</colgroup>
<tbody>
<tr>
<td><pre><code>#declare final_texture = 
texture {
  image_pattern { png &quot;texture_distribution.png&quot; }
  texture_map {
    [0.00    final_metal_texture]
    [1.00    final_nature_texture]
  }
}  </code></pre></td>
</tr>
</tbody>
</table>

Here is a screen shot of our map using this:

<a href="http://img341.imageshack.us/my.php?image=screen000wd0.png" class="external text" rel="nofollow"><img src="http://img341.imageshack.us/img341/43/screen000wd0.th.png" alt="screen000wd0.th.png" /></a>

### Procedural Textures

It is also possible to use "procedural textures" instead of image_map textures. These can be quite useful for areas on your map that have a high slope as they can create a better looking texture, including effects such as the layered rock textures - like "Painted Rock". Unfortunately these types of textures can result in larger map sizes, but if you just use them on the high slope areas of your map it should not be too bad.

Some good examples used in terrains can be found at the <a href="http://geomorph.sourceforge.net/povray/en/Geomorph%20-%20Predefined%20Povray%20Scripts.html" class="external text" rel="nofollow">Geomorph website</a>.

The povray install also includes a number of nice example procedural textures.

### Placing Metal Textures

There are quite a few posible ways to have Povray place metal textures for you. One approach that I have used is:

1\) Define a function that will return the current metal locations in a pov kind of way:

<table>
<colgroup>
<col>
</colgroup>
<tbody>
<tr>
<td><pre><code>  #declare getMetal = function {
    pigment {
      image_map {
        png &quot;metallocations.png&quot;
      }
      scale &lt;1,-1,1&gt;
    }
  }</code></pre></td>
</tr>
</tbody>
</table>

This function, when called for a given coordinate (0 to 1), returns a vector of the three colours for that point.

2\) We now define a texture that we'll use for our metal (this is made up of a number of subcomponent textures):

<table>
<colgroup>
<col>
</colgroup>
<tbody>
<tr>
<td><pre><code>// A transparent texture
#declare Transparent_Texture=
texture {
    pigment {color rgbt&lt;0,0,0,1&gt;}
}
&#10;// A simple brownish texture
#declare dirt_Texture=
texture {
  pigment { rgb &lt;0.75,0.55,0.35&gt;*0.7 }
  normal {
    granite 0.5  // for use with normal{} (0...1 or more)
    //scale MAP_WIDTH
  }
  finish {
    ambient 0.5
    diffuse .9
  }
}
&#10;// A shiny metalish texture
#declare metal_TextureBase = 
texture { 
  pigment {
    rgb&lt;1,1,1&gt;    
  }
  normal {
      granite 0.9  // for use with normal{} (0...1 or more)
    scale 80/5
  }
  finish {
    ambient 0.6
    brilliance 4
    diffuse 1
    specular 0.90
    roughness 1/80
  }
}
&#10;// A combination of the metal_TextureBase, the dirt_Texture and the
// Transparent_Texture
#declare metal_Texture=
texture {
  bozo              // very smooth, random noise function
  turbulence 0.3  // turbulence often useful
&#10;  texture_map {
    [0.0  metal_TextureBase]  //T_Silver_3B
    [0.42  metal_TextureBase]
    [0.47  dirt_Texture]
    [0.50  dirt_Texture]
    [0.55  Transparent_Texture]
    [1.0  Transparent_Texture]
  }
  //scale &lt;16, 16, 16&gt; //even
  scale &lt;7, 32, 16&gt; //stretched 
  rotate z*40  //set it at an angle so it looks betterer ;)
}
&#10;#declare blob_Texture=
texture {
  slope { z, 0.0, 0.5 }
  texture_map {
    [0.0  Transparent_Texture]
    [0.6  Transparent_Texture]
    [1.0  metal_Texture]
  }
}  </code></pre></td>
</tr>
</tbody>
</table>

3\) Finally, we define a "blob" object that adds a sphere object to the master blob object for each point in the metal map:

<table>
<colgroup>
<col>
</colgroup>
<tbody>
<tr>
<td><pre><code>  #declare metalBlob=
  blob {
  #declare geos=0;
  #declare ix=4.0;
  #declare num=0;
  #while (ix &lt; MAP_WIDTH)
    #declare iy=0.0;
    #while (iy &lt; MAP_WIDTH)
      #declare metal=getMetal(ix/MAP_WIDTH, iy/MAP_WIDTH, 0);
      #if (metal.red)
        #declare Pos = trace(primaryHF,&lt;ix-MAP_WIDTH/2, -iy+MAP_WIDTH/2, MAP_EL*2&gt;,-z);
        sphere {
            //Pos-&lt;0,0,5&gt;, 8*6, 8  
            Pos-&lt;0,0,5&gt;, 8*2, 8  
        }
      #end 
      #declare iy=iy+8;
    #end
    #declare ix=ix+8;
  #end
  &#10;    texture {
      blob_Texture
    }
    scale &lt;1,1,0.5&gt;  
  }  //metalBlob
&#10;  object {metalBlob}</code></pre></td>
</tr>
</tbody>
</table>

This all adds some time to the rendering time, but seems to work well enough (although it could be nicer).

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Tutorial:MapWithPOVRay(Tinnut)](https://springrts.com/wiki/Tutorial:MapWithPOVRay(Tinnut)).*
