---
title: "User:Cheesecan"
source_url: "https://springrts.com/wiki/User:Cheesecan"
---
# User:Cheesecan

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

Documented for posterity's sake.

## Map making

### Early maps circa 2006

![2q1rssn.jpg](http://oi40.tinypic.com/2q1rssn.jpg)

Sector9-v01

![2k21rm.jpg](http://oi43.tinypic.com/2k21rm.jpg)

Surrounded_Grounds-v2

![21psgz.jpg](http://oi44.tinypic.com/21psgz.jpg)

3_Bridges

![ycev9.jpg](http://oi41.tinypic.com/ycev9.jpg)

Archipelago-v1

![33l14zd.jpg](http://oi40.tinypic.com/33l14zd.jpg)

Wadichelago-v1

![339ng9l.jpg](http://oi43.tinypic.com/339ng9l.jpg)

Lost-v2

### 2010 maps

![ezuc7.jpg](http://oi44.tinypic.com/ezuc7.jpg)

CliffHanger-v1

### 2012 and beyond SSMF maps

![35bs4na.jpg](http://oi44.tinypic.com/35bs4na.jpg)

IcySea-v2

![33p380n.jpg](http://oi42.tinypic.com/33p380n.jpg)

Hohenheim-v3

![6pq934.jpg](http://oi42.tinypic.com/6pq934.jpg)

Harbinger-v1

### Missing maps

- Wadi-v2
- Robots form Outerspace (a War Evolution map)
- Dying Grounds

## Lobby development

### CheeseLobby

<a href="https://github.com/jahwag/cheeselobby" class="external free" rel="nofollow">https://github.com/jahwag/cheeselobby</a>

An abandoned Java lobby. Development began in early 2011 and ended in mid 2012. Unique features at the time included 3D map preview and cross-platform support.

### OpenLobby

<a href="https://github.com/jahwag/OpenLobby" class="external free" rel="nofollow">https://github.com/jahwag/OpenLobby</a>

An unfinished Java lobby. Development began in early 2012. Planned support for user script plug-ins and co-bundling with games. Online update/patching using OSGi. Cross-platform support. No GUI was made.

## Lua coding

### Lua metal spot textures

![wrcc4x.jpg](http://oi44.tinypic.com/wrcc4x.jpg)

Draws metal spot textures with Lua. Used in my SSMF maps.

### Lua metal maps

![91jhuu.jpg](http://oi41.tinypic.com/91jhuu.jpg)

Allows placement of metal spots using Lua script.

--Cheesecan

## Map making tutorial

A work in progress.

### Getting started

Having good hardware will make map making much less tedious. Here are my recommendations:

- A good optical mouse (for drawing detailed heightmaps)
- A solid state drive (for compiling maps quickly)
- A quad core HT-enabled CPU (for rendering maps quickly in Carrara)
- At least 8 GB of RAM to edit megatextures in Photoshop
- A good GPU to enable GPU-acceleration in Photoshop

Software you will need to follow this tutorial:

- Carrara 8
- Photoshop CS6 or later
- GIMP
- Beherith's MapConv 2.4
- Nvidia Texture Tools for Photoshop <a href="https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop" class="external free" rel="nofollow">https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop</a>
- Seamless texture plug-in for GIMP <a href="http://registry.gimp.org/node/28112" class="external free" rel="nofollow">http://registry.gimp.org/node/28112</a>
- Notepad++ for editing LUA files with syntax highlighting

### Overview

Modern maps consist of over half a dozen of different images, as follows:

- [Height map](/mapcomponents-heightmap)
- [Texture map](/mapcomponents-texture)
- Feature map
- [Metal map](/mapdev-metal)
- [Normal map](/mapdev-normal)
- [Specular map](/mapdev-specular)
- [Splat map](/mapdev-splatdetail)

Additionally, the splat (distribution) map requires three, or optionally four, detail maps. All of them will be explained step-by-step.

### The heightmap

The heightmap is the single most important part of your map. It will make or break your map, so get it right. I cannot stress this enough. If you fuck it up, you have to fix it.

Map making should be an iterative process, if you want the result to be of a high quality. You do, don't you?

The dimensions of the heightmap spring wants is calculated as follows: (\[x\] \* 64 ) +1 Where x is either your map width or height component. In other words, the heightmap for a 16x12 map would be 1025x769 pixels.

However, the heightmap should be drawn in 4096x4096 resolution and then scaled down to the spring resolution. This gives the terrain renderer more detail to work with later on, compared to if you had a 1024x1024 image as input.

For drawing the heightmap, you can use a fully fledged map editor like SpringMapEdit, or a graphics program. I prefer the control a graphics program gives compared to the awkward controls of SME, so I won't go into anymore detail on SME than simply mentioning it. In this tutorial, I will assume you have both Photoshop CS6 or later and GIMP.

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Cheesecan). Original page: [User:Cheesecan](https://springrts.com/wiki/User:Cheesecan).*
