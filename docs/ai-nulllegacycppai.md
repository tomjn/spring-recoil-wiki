---
title: "AI:NullLegacyCppAI"
source_url: "https://springrts.com/wiki/AI:NullLegacyCppAI"
categories:
  - "AI"
---
# AI:NullLegacyCppAI

<div class="mw-parser-output">

<table class="wiki-infobox">
<tbody>
<tr>
<td colspan="2"><strong>NullLegacyCppAI</strong></td>
</tr>
<tr>
<td>Developer</td>
<td>UNKNOWN &amp; hoijui</td>
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
<td>-</td>
</tr>
<tr>
<td>Interface</td>
<td>C</td>
</tr>
<tr>
<td>Wrapper</td>
<td>LegacyCpp</td>
</tr>
<tr>
<td colspan="2"> <strong><a href="/ai-skirmish-list">&lt;- Back to List of AIs</a></strong></td>
</tr>
</tbody>
</table>

## Null Legacy C++ AI

#### Description

This Skirmish AI is written in C++ and uses the legacy C++ wrapper over the C AI Interface to prove that this wrapper works, and for testing purposes.

It is an empty implementation, meaning it will load, but do absolutely nothing. NullLegacyCppAI can be used to test the AI interface, or for exploring a map if one wants the end game screen not to appear. It can also be used as a template for C++ Skirmish AI projects that want to use the legacy C++ interface (not recommended, see [Test C++ AI](/ai-cpptestai) instead).

This AI uses the [C & C++ AI Interface Library](/aiinterface-c). See also [Null AI (pure C)](/ai-nullai).

#### Download

It comes with spring source. Reffer to [Obtaining the Source](/building-spring#obtaining-the-source).

#### Known Crashes

- None

#### How to compile

- include directories:
  - {spring_source}/rts/System
  - {spring_source}/AI/Wrappers/LegacyCpp
  - {spring_source}/AI/Skirmish/NullLegacyCppAI
  - {spring_source}/rts/ExternalAI
  - {spring_source}/rts/ExternalAI/Interface
- source files:
  - {spring_source}/AI/Skirmish/NullLegacyCppAI/\*.cpp
  - {spring_source}/AI/Wrappers/LegacyCpp/\*.cpp
- create dynamic loadable shared library (module)
- should compile with all C++ compilers, if it does not, please report it, or even better: send a fix

#### How to install

from: *{spring_source}/AI/Skirmish/NullLegacyCppAI/*\
to: *{spring_data_dir}/AI/Skirmish/NullLegacyCppAI/{NullLegacyCppAI-version}/*

- copy *build/libNullLegacyCppAI.so*, *build/libNullLegacyCppAI.dylib* or *build/NullLegacyCppAI.dll* to *./*
- copy *data/\** to *./*

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:NullLegacyCppAI](https://springrts.com/wiki/AI:NullLegacyCppAI).*
