---
title: "AI:NullAI"
source_url: "https://springrts.com/wiki/AI:NullAI"
categories:
  - "AI"
---
# AI:NullAI

<div class="mw-parser-output">

<table class="wiki-infobox">
<tbody>
<tr>
<td colspan="2"><strong>NullAI</strong></td>
</tr>
<tr>
<td>Developer</td>
<td>zenzike &amp; hoijui</td>
</tr>
<tr>
<td>Version</td>
<td><strong>0.1</strong></td>
</tr>
<tr>
<td>Mod Support</td>
<td>Supports everything / Does nothing</td>
</tr>
<tr>
<td>Status</td>
<td><strong>Finnished</strong></td>
</tr>
<tr>
<td>License</td>
<td>GNU GPL V2+</td>
</tr>
<tr>
<td>Interface</td>
<td>C</td>
</tr>
<tr>
<td>Wrapper</td>
<td>-</td>
</tr>
<tr>
<td colspan="2"> <strong><a href="/ai-skirmish-list">&lt;- Back to List of AIs</a></strong></td>
</tr>
</tbody>
</table>

### Description

This Skirmish AI is written in pure C, to prove that the C AI interface works. It consists of only the very minimum that is needed for a spring Skirmish AI to load.

NullAI is an empty implementation, meaning it will load, but do absolutely nothing. It can be used to test the AI interface or for exploring a map if one wants the end game screen not to appear. It can also be used as a template for new C or C++ Skirmish AI projects.

This AI uses the [C & C++ AI Interface library](/aiinterface-c). See also [Null Legacy C++ AI](/ai-nulllegacycppai) and [C++ Test AI](/ai-cpptestai).

### Download

It comes with spring source. Reffer to [Obtaining the Source](/building-spring#obtaining-the-source).

### Known Crashes

- None

### How to compile

**The easy way**

Use SCons or CMake (refer to [Building spring](/building-spring)).

**The hard way**

- include directories:
  - *{spring_source}/rts*
  - *{spring_source}/rts/System*
  - *{spring_source}/rts/ExternalAI/Interface*
  - *{spring_source}/AI/Skirmish/NullAI*
- source files:
  - *{spring_source}/AI/Skirmish/NullAI/\*.c*
- create dynamic loadable shared library (module)
- should compile with all C compilers (tested with MinGW, GCC, Intel)

### How to install

from: *{spring_source}/AI/Skirmish/NullAI/*\
to: *{spring_data_dir}/AI/Skirmish/NullAI/{NullAI-version}/*

- copy *build/libNullAI.so*, *build/libNullAI.dylib* or *build/NullAI.dll* to *./*
- copy *data/\** to *./*

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:NullAI](https://springrts.com/wiki/AI:NullAI).*
