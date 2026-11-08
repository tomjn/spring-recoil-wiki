---
title: "Mapdev:splatdetailnormals"
source_url: "https://springrts.com/wiki/Mapdev:splatdetailnormals"
categories:
  - "Map_Dev"
---
# Mapdev:splatdetailnormals

<div class="mw-parser-output">

## Detail Normal Texture Splatting (DNTS)

This extends the existing functionality of SSMF splatted detail textures [Mapdev:splatdetail](/mapdev-splatdetail), with the option of specifying 4 different (normal map + greyscale diffuse map) detail textures.

Splatted detail textures only allowed grayscale textures to be overlayed on the map, while DNTS also allows normal maps as well.

Instead of creating a combined detail texture of 4 different single-channel diffuse detail textures stored in a single RGBA image, it uses four separate normal textures.

The textures must contain the normal maps in the RGB channel (standard normal maps), with an optional diffuse luminance in the alpha channel.

Beherith recommends using a high-pass filter on the luminance diffuse (alpha) channel, to avoid visible banding when zoomed out. When using PBR materials as DNTS sources, he also recommends mixing the diffuse and ambient occlusion parts of the textures into the diffuse alpha, as well as keeping the alpha channel centered around 50% greyscale, and with preferably a low spread to make sure that diffuse doesnt overpower the nice normals you have added.

The system uses the same splatDistributionTexture as regular SSMF.

**You cannot specify these options in .smd files, only .lua!**

Example result:

[<img src="/images/Dnts_example.jpg" decoding="async" alt="Dnts example.jpg" />](/images/Dnts_example.jpg)

### Distribution Image

|  |  |
|----|----|
| File Location | ./maps/ |
| File Format | PNG, TGA, DDS |
| Colour Depth | 8bpp |
| Channels | RGBA |
| Resolution | Any, recommended powers of two, will be stretched over the terrain. |

The RGBA Channels are individual greyscale distribution maps which define which detail textures to splat onto the ground. The intensity of the splatted textures is multipled by the pixel values for the corresponding channels.

|  |  |
|----|----|
| [<img src="/images/Mapdev-ddist.gif" decoding="async" width="256" height="256" alt="Mapdev-ddist.gif" />](/images/Mapdev-ddist.gif) | [<img src="/images/Mapdev-ddist.png" decoding="async" width="256" height="256" alt="Mapdev-ddist.png" />](/images/Mapdev-ddist.png) |
| Detail Distribution maps | Combined Result |

Example {.wikitable}

### Detail Normal Textures

|  |  |
|----|----|
| File Location | ./maps/ |
| File Format | PNG, TGA, DDS |
| Colour Depth | 8bpp |
| Channels | RGB for normal maps only, RGBA for normal map + diffuse map in alpha channel. The Y (green) channel of normal maps should be inverted. |
| Resolution | Any, recommended powers of two, will be tiled over the terrain. |

|  |  |
|----|----|
| [<img src="/images/Mapdev-dnts-normal.jpg" decoding="async" width="400" height="400" alt="Mapdev-dnts-normal.jpg" />](/images/Mapdev-dnts-normal.jpg) | [<img src="/images/Mapdev-dnts-diffuse-alpha.jpg" decoding="async" width="400" height="400" alt="Mapdev-dnts-diffuse-alpha.jpg" />](/images/Mapdev-dnts-diffuse-alpha.jpg) |
| Normal texture in RGB channel | greyscale diffuse in ALPHA channel |

Detail Normal Texture Example {.wikitable}

## Specification

Specify splatDetailNormalTex1 .. splatDetailNormalTex4 in the MAP resources section. splatDetailTex will be unused if and of splatDetailNormalTex\[1-4\] are present.

Specify splatDetailNormalDiffuseAlpha=1 to enable diffuse textures stored in alpha channels.

splatDetailNormalDiffuseAlpha=0 is the default value, and will ignore all and any alpha channels in the splatDetailNormalTex's, resulting in a purely normal mapped surface, with no extra diffuse texturing.

texScales and texMults work identically to [Mapdev:splatdetail](/mapdev-splatdetail)

### mapinfo.lua

    local mapinfo = {
       ...
       resources = {
          ...
          splatDistrTex = "splatDistributionTex.tga",
          splatDetailNormalDiffuseAlpha = 1,
          splatDetailNormalTex = {
             "sandpebbles_NORM.tga",
             "crystal_245_dnts.dds",
             "grass_91_dnts.dds",
             "pebbles_250_dnts_u8888.dds",
              alpha = true,
          },
          ...
       },
       ...
       splats = {
          texScales = {0.02, 0.02, 0.02, 0.02},
          texMults = {1.0, 1.0, 1.0, 1.0},
       },
       ...
    }

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:splatdetailnormals](https://springrts.com/wiki/Mapdev:splatdetailnormals).*
