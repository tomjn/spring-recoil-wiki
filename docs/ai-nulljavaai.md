---
title: "AI:NullJavaAI"
source_url: "https://springrts.com/wiki/AI:NullJavaAI"
categories:
  - "AI"
---
# AI:NullJavaAI

<div class="mw-parser-output">

<table class="wiki-infobox">
<tbody>
<tr>
<td colspan="2"><strong>NullJavaAI</strong></td>
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
<td><strong>Finnished</strong></td>
</tr>
<tr>
<td>License</td>
<td>GNU GPL V2</td>
</tr>
<tr>
<td>Interface</td>
<td>Java</td>
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

## Null Java AI

#### Description

This Skirmish AI is written in pure Java, to prove that the Java AI interface works. It consists of only the very minimum that is needed for a spring Java Skirmish AI to load.

NullJavaAI is an empty implementation, meaning it will load, but do absolutely nothing. It can be used to test the Java AI interface or for exploring a map if one wants the end game screen not to appear. If you want to write your own Java AI, we recommend using the [NullOOJavaAI](/ai-nulloojavaai) as a template instead of this one.

This AI uses the [Java AI Interface Library](/aiinterface-java). See also [Null Object Oriented Java AI](/ai-nulloojavaai).

#### Download

It comes with spring source. Reffer to [Obtaining the Source](/building-spring#obtaining-the-source).

#### Bugs

**Known Crashes:**

- None

Please report bugs under <a href="http://springrts.com/mantis/" class="external text" rel="nofollow">Mantis</a> to the AI subproject.

#### How to compile

multiple ways:

- Spring build environments: either SCons or CMake; refer to [Building spring](/building-spring).
- OS specific build script: *{spring_source}/AI/Skirmish/NullJavaAI/bin/java_compile.(sh\|bat)*

#### How to install

from: *{spring_source}/AI/Skirmish/NullJavaAI/*\
to: *{spring_data_dir}/AI/Skirmish/NullJavaAI/{NullJavaAI-version}/*

- copy the created *SkirmishAI.jar* and *SkirmishAI-src.jar* to *./*
- copy *data/\** to *./*

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:NullJavaAI](https://springrts.com/wiki/AI:NullJavaAI).*
