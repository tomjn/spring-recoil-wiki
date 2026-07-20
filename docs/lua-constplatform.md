---
title: "Lua ConstPlatform"
source_url: "https://springrts.com/wiki/Lua_ConstPlatform"
categories:
  - "Lua"
---
# Lua ConstPlatform

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua ConstPlatform

## Platform

string [Platform.gpu](#platformgpu)

full GPU device name

string [Platform.gpuVendor](#platformgpuvendor)

one of "Nvidia", "Intel", "ATI", "Mesa", "Unknown"

string [Platform.glVersionShort](#platformglversionshort)

major.minor.buildNumber

string [Platform.glslVersionShort](#platformglslversionshort)

major.minor

string [Platform.glVersion](#platformglversion)

full version

string [Platform.glVendor](#platformglvendor)

string [Platform.glRenderer](#platformglrenderer)

string [Platform.glslVersion](#platformglslversion)

full version

string [Platform.glewVersion](#platformglewversion)

string [Platform.osName](#platformosname)

full name of the OS

string [Platform.osFamily](#platformosfamily)

one of "Windows", "Linux", "MacOSX", "FreeBSD", "Unknown"

number [Platform.gpuMemorySize](#platformgpumemorysize)

size of total GPU memory in MBs; only available for "Nvidia", (rest are 0)

number [Platform.sdlVersionCompiledMajor](#platformsdlversioncompiledmajor)

number [Platform.sdlVersionCompiledMinor](#platformsdlversioncompiledminor)

number [Platform.sdlVersionCompiledPatch](#platformsdlversioncompiledpatch)

number [Platform.sdlVersionLinkedMajor](#platformsdlversionlinkedmajor)

number [Platform.sdlVersionLinkedMinor](#platformsdlversionlinkedminor)

number [Platform.sdlVersionLinkedPatch](#platformsdlversionlinkedpatch)

bool [Platform.glSupportNonPowerOfTwoTex](#platformglsupportnonpoweroftwotex)

bool [Platform.glSupportTextureQueryLOD](#platformglsupporttexturequerylod)

bool [Platform.glSupport24bitDepthBuffer](#platformglsupport24bitdepthbuffer)

bool [Platform.glSupportRestartPrimitive](#platformglsupportrestartprimitive)

bool [Platform.glSupportClipSpaceControl](#platformglsupportclipspacecontrol)

bool [Platform.glSupportFragDepthLayout](#platformglsupportfragdepthlayout)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua ConstPlatform](https://springrts.com/wiki/Lua_ConstPlatform).*
