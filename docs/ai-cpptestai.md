---
title: "AI:CppTestAI"
source_url: "https://springrts.com/wiki/AI:CppTestAI"
categories:
  - "AI"
---
# AI:CppTestAI

<div class="mw-parser-output">

<table class="wiki-infobox">
<tbody>
<tr>
<td colspan="2"><strong>CppTestAI</strong></td>
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
<td>Mod Support</td>
<td>Supports everything / Does nothing</td>
</tr>
<tr>
<td>Status</td>
<td><strong>beta</strong></td>
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
<td>Cpp</td>
</tr>
<tr>
<td colspan="2"> <strong><a href="/ai-skirmish-list">&lt;- Back to List of AIs</a></strong></td>
</tr>
</tbody>
</table>

## C++ Test AI

#### Description

This Skirmish AI is written in C++ and uses the new C++ wrapper over the C AI Interface to prove that this wrapper works, and for testing purposes.

It is an empty implementation, meaning it will load, but do absolutely nothing. CppTestAI can be used to test the AI interface, or for exploring a map if one wants the end game screen not to appear. It should also be used as a template for new C++ Skirmish AI projects.

#### Download

It comes with spring source. Reffer to [Obtaining the Source](/building-spring#obtaining-the-source).

#### Known Crashes

- None

#### How to compile

Use CMake. Reffer to [Building Spring](/building-spring).

#### How to install

from: *{spring_source}/AI/Skirmish/NullLegacyCppAI/*\
to: *{spring_data_dir}/AI/Skirmish/NullLegacyCppAI/{NullLegacyCppAI-version}/*

- copy *build/libNullLegacyCppAI.so*, *build/libNullLegacyCppAI.dylib* or *build/NullLegacyCppAI.dll* to *./*
- copy *data/\** to *./*

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:CppTestAI](https://springrts.com/wiki/AI:CppTestAI).*
