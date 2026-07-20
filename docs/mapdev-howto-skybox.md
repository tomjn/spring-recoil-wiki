---
title: "Mapdev:Howto skybox"
source_url: "https://springrts.com/wiki/Mapdev:Howto_skybox"
categories:
  - "Map_Dev"
---
# Mapdev:Howto skybox

<div class="mw-parser-output">

## Skybox Information

Skyboxes are created with a series of 6 separate images which form what we call a cube map. Below is an example of the skybox images.

<table>
<colgroup>
<col>
</colgroup>
<tbody>
<tr>
<td><div class="center">
<div class="floatnone">
<a href="/images/Skyboxsimple.gif"><img src="/images/Skyboxsimple.gif" decoding="async" width="492" height="369" alt="this is what we call a cube cross" /></a>
</div>
</div></td>
</tr>
<tr>
<td>Cube Cross Example</td>
</tr>
</tbody>
</table>

You will be using six individual images. Each image represents a different face on an imaginary cube. Each face is applied to the cube that surrounds the map.

<table>
<colgroup>
<col>
</colgroup>
<tbody>
<tr>
<td><div class="center">
<div class="floatnone">
<a href="/images/Sky1.gif"><img src="/images/Sky1.gif" decoding="async" width="587" height="440" alt="see how each side of the cube is it&#39;s own image" /></a>
</div>
</div></td>
</tr>
<tr>
<td>Each side of the cube is a separate image</td>
</tr>
</tbody>
</table>

## Skybox creation

### Creating your 6 textures

You will need six images representing each side of your skybox. I will not go into any specific method of construction. There are tutorials out there for that. Just remember you will need 6 textures, front, back, left side, right side, top and bottom.

### Creating your dds using the nvidia dds utilities

#### Linux Instructions

Compile the six images with this command:

    nvassemmble  -cube left.png right.png up.png down.png front.png back.png

#### Windows Instructions

You will need these utilities from Nvidia's website: <a href="http://developer.nvidia.com/object/dds_utilities_legacy.html" class="external text" rel="nofollow">NVIDIA Texture Tools</a>

Once you have downloaded and installed the tools you will need to created 2 files:

- **Compiledds.bat**, and
- **cubemapfile.lst**

Inside of **compiledds.bat** type in:

    nvdxt -cubeMap -list cubemapfile.lst  -output cubemap.dds
    pause

This will compile your skybox to the name **cubemap.dds**, feel free to change the name. Also, the pause command will stop the the batch file and force it to wait before it closes, this will allow you to see any errors that may or may not occur.

Inside of **cubemapfile.lst** type in:

    left.jpg
    right.jpg
    top.jpg
    bottom.jpg
    front.jpg
    back.jpg

The .dds file created should be put in the **maps/** directory with your maps .smd, .smf and .smt files.

## Skybox notes

Do not do these:

Sizes that are not to the power of two. ATI cards have problems with sizes that are not a power of two. Recommended sizes are: **256X256**, **512X512** or **1024x1024**.

Note: the batch will export a DXT5 or something like that and spring has an issue with the newest dds stuff. I will update the command for you gents soon. I thought I already had... my bad.

--Smoth 09:24, 25 Apr 2007 (CEST)

If you have problems with nvdxt:

You can also create dds textures using the Texture Tool found in the Microsoft DirectX SDK.

Although it is quite a large download it is worth while if you are serioues about making decent maps.

These instruction may not be the best however they have been proven to work with some success.

To create your cube map first open the DirectX Texture Tool. Go to File and select New Texture. Select Cubemap texture. Set the Width and Height as a power of two and leave the MipMap Levels at 1.

The Surface format should be 32bit X8R8G8B8. It may be possible to use other formats for example 24Bit and use less space. If you want to try that you will have to experiment. You can now press OK.

Go to file and select Open Onto This Cubemap Face. Select the image file you want to use for that face. You can select most common image formats such as jpg, bmp, png, etc. The image that you open should be the same width and height as you entered when creating the cubemap.

Now you have done one face and can do the next. To change face go to the View menu, the Cube Map View submenu and select the next face in the list. Open the image you want onto this face as you did before.

Keep doing this until you have opened an image onto every face, then save the file.

You now have a sky-box.

-Orakio

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:Howto skybox](https://springrts.com/wiki/Mapdev:Howto_skybox).*
