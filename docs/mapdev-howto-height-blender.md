---
title: "Mapdev:howto height blender"
source_url: "https://springrts.com/wiki/Mapdev:howto_height_blender"
categories:
  - "Map_Dev"
---
# Mapdev:howto height blender

<div class="mw-parser-output">

## Creating a Heightmap in Blender

## <a href="http://www.youtube.com/embed/7f2tYgyF0W8" class="external text" rel="nofollow">Video</a>

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/7f2tYgyF0W8" title="Sclupting and Rendering a Height Map in Blender for SpringRTS" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

### Video Script

1\. Delete Cube and Light

2\. Create Terrain Mesh

    - add plane
    - enter edit mode
    - scale plane to size you want
    - subdivide plane to match grid
    - enter object mode

3\. Add Multires Modifyer

    - set subdivision to simple
    - subdivide until level 6
    - set preview level to 6

4\. Sculpt Terrain Mesh

    - enter sculpt mode
    - set transform locks
    - sculpt
    - enter object mode

5\. setup camera

    - select camera
    - set position and rotation
    - change to camera view
    - set camera to ORTHO
    - set scale

6\. Setup Render

    - set render dimensions

The height map resolution is defined as SMU \* 64 + 1, see [Mapdev:height](/mapdev-height)

7\. Setup compositor

    - change space type to node editor
    - select compositor nodes
    - check use nodes
    - redirect Z
    - add normalise
    - add invert
    - render

[<img src="/images/Blender-node000.png" decoding="async" alt="Blender-node000.png" />](/images/Blender-node000.png)

8\. Colour Management

    - set display device to none

9\. Save

    - set type to tiff
    - set BW
    - set depth to 16bpp

### Additional Information

- Need discussion on non square maps, camera settings for altering which dimension gets priority when rendering.
- Consider using this type of material to help understand your sculpting

[<img src="/images/Blender-node001.png" decoding="async" alt="Blender-node001.png" />](/images/Blender-node001.png)

- if your ram doesnt allow rendering large maps due to image dimensions, consider the render regions add on.

#### Examples

Height map [<img src="/images/Blender-screen-000.png" decoding="async" width="700" height="256" alt="Blender-screen-000.png" />](/images/Blender-screen-000.png) Visual of build/walk [<img src="/images/Blender-screen-001.png" decoding="async" width="700" height="256" alt="Blender-screen-001.png" />](/images/Blender-screen-001.png) Detail distribution [<img src="/images/Blender-screen-002.png" decoding="async" width="700" height="256" alt="Blender-screen-002.png" />](/images/Blender-screen-002.png)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:howto height blender](https://springrts.com/wiki/Mapdev:howto_height_blender).*
