---
title: "AIInterface:C"
source_url: "https://springrts.com/wiki/AIInterface:C"
categories:
  - "AIWrapper"
---
# AIInterface:C

<div class="mw-parser-output">

<table class="wiki-infobox">
<tbody>
<tr>
<td colspan="2"><strong>C</strong></td>
</tr>
<tr>
<td>Developer</td>
<td>hoijui</td>
</tr>
<tr>
<td>Version</td>
<td><strong>0.1</strong></td>
</tr>
<tr>
<td>Language Support</td>
<td>C &amp; C++</td>
</tr>
<tr>
<td>Status</td>
<td><strong>~stable</strong></td>
</tr>
<tr>
<td>License</td>
<td>GNU GPL v2+</td>
</tr>
<tr>
<td colspan="2"> <strong><a href="/ai-development-interface">&lt;- Back to AI Interfaces</a></strong></td>
</tr>
</tbody>
</table>

### Description

This AI interface is written in C++ and allows spring to load AIs written in C and C++. Thes AIs may be compiled with any compiler, as long as they export some C functions in the correct way (see *{spring_source}/AI/Skirmish/NullAI/AIExport.h* for reference).

If you plan to write your own AI interface library, it is recommended to use this one as a template, or at least for reference (*{spring_source}/AI/Interfaces/C/*), and possibly the Java one.

### Used By

#### AI Interface Wrappers

- **[Legacy C++ Wrapper DEPRECATED](/aiwrapper-legacycpp)**
- **[(New) C++ Wrapper alpha](/aiwrapper-cpp)**

#### Skirmish AIs

- None (directly)

#### Download

It comes with a spring default install.

#### Source

The source can be found under: *{spring_source}/AI/Wrappers/LegacyCpp/*

#### Bugs

**Known Crashes:**

- None

Please report bugs under <a href="http://springrts.com/mantis/" class="external text" rel="nofollow">Mantis</a> to the AI subproject.

#### How to compile

**The easy way**\
Use Scons or CMake (refer to [Building spring](/building-spring)).

**The hard way**

- include directories:
  - {spring_source}/rts/System
  - {spring_source}/AI/Wrappers/CUtils
  - {spring_source}/AI/Interfaces/C
- source files:
  - {spring_source}/AI/Interfaces/C/\*.c\*
- create dynamic loadable shared library (module)
- should compile with all C++ compilers (tested with: MinGW, GCC, Intel)

tested under Linux32 and Win32

#### How to install

from: *{spring_source}/AI/Interfaces/C/*\
to: *{spring_data_dir}/AI/Interfaces/C/{C-AIInterface-version}/*

- copy *lib\*.so*, *lib\*.dylib* or *\*.dll* to *./*
- copy *data/\** to *./*

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AIInterface:C](https://springrts.com/wiki/AIInterface:C).*
