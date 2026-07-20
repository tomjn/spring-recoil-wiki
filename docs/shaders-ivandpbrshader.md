---
title: "Shaders:IvandPBRShader"
source_url: "https://springrts.com/wiki/Shaders:IvandPBRShader"
---
# Shaders:IvandPBRShader

<div class="mw-parser-output">

**Ivand's PBR shader's install instructions**\
What you will need:\

1.  Latest maintenance engine. Grab it here: <a href="https://springrts.com/dl/buildbot/default/maintenance/" class="external free" rel="nofollow">https://springrts.com/dl/buildbot/default/maintenance/</a>
2.  Custom unit shader gadget. Every mod has a bit different code, check if your game has it, if not copy from somewhere else. ZK variant: <a href="https://github.com/lhog/Zero-K/blob/pbrCUS_v1/LuaRules/Gadgets/api_custom_unit_shaders.lua" class="external free" rel="nofollow">https://github.com/lhog/Zero-K/blob/pbrCUS_v1/LuaRules/Gadgets/api_custom_unit_shaders.lua</a>
3.  PBR shader: <a href="https://github.com/lhog/Zero-K/blob/pbrCUS_v1/ModelMaterials/Shaders/pbr.lua" class="external free" rel="nofollow">https://github.com/lhog/Zero-K/blob/pbrCUS_v1/ModelMaterials/Shaders/pbr.lua</a>
4.  PBR meta-material definitions: <a href="https://github.com/lhog/Zero-K/blob/pbrCUS_v1/ModelMaterials/10_pbr.lua" class="external free" rel="nofollow">https://github.com/lhog/Zero-K/blob/pbrCUS_v1/ModelMaterials/10_pbr.lua</a>
5.  model definition with PBR extension: <a href="https://github.com/lhog/Zero-K/blob/pbrCUS_v1/Objects3d/unit.dae.lua" class="external free" rel="nofollow">https://github.com/lhog/Zero-K/blob/pbrCUS_v1/Objects3d/unit.dae.lua</a> (replace "unit" by your actual unit model's name)
6.  unitDef file (ZK style, you might prefer your own): <a href="https://github.com/lhog/Zero-K/blob/pbrCUS_v1/units/unit.lua" class="external free" rel="nofollow">https://github.com/lhog/Zero-K/blob/pbrCUS_v1/units/unit.lua</a>
7.  model and textures (not on github, provide your own). Make sure texture filenames and channel mappings are specified correctly in unit.dae.lua

If this all sounds too complicated from the first sight, you can just clone this demo branch: "git clone -b pbrCUS_v1 <a href="https://github.com/lhog/Zero-K.git" class="external free" rel="nofollow">https://github.com/lhog/Zero-K.git</a>". It's all in there except for textures and .dae file\

**Texture Preparation**\
For efficient file size usage, your different maps must be disposed in separate channels of up to three images. All images and channels are optional and will reset to a default value or appearance if missing. Follows a proposal for this channel layout, yet bear in mind this can be rearranged in the model.ext.lua config file. Upspring has a built-in menu option to assemble images from separate channels in any desired configuration.\

- Texture1: Diffuse/Color (r, g, b) + Teamcolor (a)
- Texture2: Occlusion (r) + Roughness (g) + Metallic (b) + Emissive (a)
- Texture3: Normal (r, g, b) + Clipping (a)

PS.: Clipping is currently unsupported in this shader.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Shaders:IvandPBRShader](https://springrts.com/wiki/Shaders:IvandPBRShader).*
