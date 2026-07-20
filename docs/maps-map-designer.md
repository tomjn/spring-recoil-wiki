---
title: "Maps:Map Designer"
source_url: "https://springrts.com/wiki/Maps:Map_Designer"
categories:
  - "Deprecated"
---
# Maps:Map Designer

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

[Development](/development-main) \< [Map Development](/mapdev-main) \< Maps:Map Designer

## MapDesigner, by Hugh Perkins

<a href="http://hughperkins.com/csai/MapDesigner.zip" class="external text" rel="nofollow">Download</a>

- Supports multipass texture splatting. SM3 loader.
- Heightmap editor. Left click to raise land, right click to lower
- Paint splatted texture. Left click to paint texture, right click to erase
- Export heightmap, slopemap and blend maps
- Exported slopemap color-coded by movement area, eg infantry, vehicle and extreme (configurable)

Source-code repository, in git:

<a href="git://github.com/hughperkins/SpringMapDesigner.git" class="external free" rel="nofollow">git://github.com/hughperkins/SpringMapDesigner.git</a>

Source-code browser:

<a href="http://github.com/hughperkins/SpringMapDesigner/tree/master" class="external free" rel="nofollow">http://github.com/hughperkins/SpringMapDesigner/tree/master</a>

Written in C#, using either mono or .net, both work, over gtk.net.

## User interface

\[image:![mapdesigner3small.JPG](http://hughperkins.com/csai/mapdesigner3small.JPG)\]

## Concepts

MapDesigner is optimized for creating SM3 maps, which use texture splatting to provide high detail maps.

For each texture, we need:

- the texture, which will be tiled according to the tilesize
- a blend map, which controls where the texture will be visible

The blend map is essentially an alpha map. The areas which are white will be splatted with our texture, and the other areas will be transparent.

The textures are rendered in layers, one by one. The later layers cover the earlier layers, according to each one's blend map texture. Here's some pictures that illustrate how this works. We are rendering each layer with a vertical offset so you can see each layer on its own.

\[Media:![multitextureview1.JPG](http://hughperkins.com/csai/multitextureview1.JPG)\]

\[Media:![multitextureview2.JPG](http://hughperkins.com/csai/multitextureview2.JPG)\]

\[Media:![multitextureview3.JPG](http://hughperkins.com/csai/multitextureview3.JPG)\]

In reality, these layers are all rendered together, with no vertical offset, so they look like they are all part of the same single terrain.

You can use any DevIL-compatible texture as your splat texture. Select a texture stage and click "Load texture..." to load the texture into that texture stage. You can change the tilesize to control how it is splatted in the visible areas.

The blend texture works like an alpha texture, but the data is actually stored in the RGB channels, as a grey-level. MapDesigner lets you paint or remove to and from the blend texture, which has the effect of painting splat texture on the map, or removing it.

## Texture stages

Multiple texture stages can be configured. We use one texture stage for each splatted texture and set its operation to "Blend".

The first texture stage - texstage1 - should be set to "Replace", and has no blend texture. That's because it's the base texture for the map, on top of which the other textures are painted.

Advanced:

- It's possible to set other operations on the texture stages.

## Paint splatted texture

- select "Paint texture"
- select a texture stage
- set texture stage operation to "Blend" and load a texture if necessary
- Left click map to paint texture, right click to erase
- You can click "Save blend texture" to export the blend texture map

Note that texture stages are applied in order, first 1 then 2 then 3 etc. The later layers cover the earlier ones.

If you click the map and nothing happens, your changes may be being masked by later layers. You can edit the later layers to uncover your changes, or click "move down" to move your edited layer later in the queue.

\[Media:![mapdesignblendediting.JPG](http://hughperkins.com/csai/mapdesignblendediting.JPG)\]

## Water

Areas below zero height will be underwater:

\[Media:![mapdesignwater.JPG](http://hughperkins.com/csai/mapdesignwater.JPG)\]

## Exported Slopemap

You can use File \| Export slopemap... to export a slopemap for your map.

Black means zero slope, green is vehicles, blue is infantry, red is extreme:

\[Media:![slopemap2.JPG](http://hughperkins.com/csai/slopemap2.JPG)\]

## Configuration

Configuration is stored in config.xml ,which can be opened in notepad

- You can change height and width in the display section to change the window size on next startup
- You can configure key mappings, and mouse move configuration

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Maps:Map Designer](https://springrts.com/wiki/Maps:Map_Designer).*
