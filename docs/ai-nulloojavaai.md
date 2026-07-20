---
title: "AI:NullOOJavaAI"
source_url: "https://springrts.com/wiki/AI:NullOOJavaAI"
categories:
  - "AI"
---
# AI:NullOOJavaAI

<div class="mw-parser-output">

<table class="wiki-infobox">
<tbody>
<tr>
<td colspan="2"><strong>NullOOJavaAI</strong></td>
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
<td>GNU GPL V2+</td>
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

## Null Object Oriented Java AI

#### Description

This Skirmish AI is written in pure Java, to prove that the Java Object Oriented Wrapper works. It consists of only the very minimum that is needed for a spring Java OO Skirmish AI to load.

NullOOJavaAI is an empty implementation, meaning it will load, but do absolutely nothing. It can be used to test the Java OO wrapper or for exploring a map if one wants the end game screen not to appear. If you want to write your own Java AI, we recommend you to use this AI as a template.

This AI uses the [Java AI Interface Library](/aiinterface-java). See also [Null Java AI](/ai-nulljavaai).

#### Download

It comes with spring source. Reffer to [Obtaining the Source](/building-spring#obtaining-the-source).

#### Bugs

**Known Crashes:**

- None

Please report bugs under <a href="http://springrts.com/mantis/" class="external text" rel="nofollow">Mantis</a> to the AI subproject.

#### How to compile

possible ways to compile:

- spring build environemnts. either Scons or CMake. refer to [Building spring](/building-spring)
- OS specific build script: *{spring_source}/AI/Skirmish/NullOOJavaAI/bin/java_compile.(sh\|bat)*
- Ant build file under *{spring_source}/AI/Skirmish/NullOOJavaAI/bin*. First edit *ant.properties*, then run *ant*

#### How to install

**The easy way**

Using Ant:\
Go to *{spring_source}/AI/Skirmish/NullOOJavaAI/bin* and edit *ant.properties*. then run *ant dist*.

**The uncomfortable way**

from: *{spring_source}/AI/Skirmish/NullOOJavaAI/*\
to: *{spring_data_dir}/AI/Skirmish/NullOOJavaAI/{NullOOJavaAI-version}/*

- copy the created *SkirmishAI.jar* and *SkirmishAI-src.jar* to *./*
- copy *data/\** to *./*

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:NullOOJavaAI](https://springrts.com/wiki/AI:NullOOJavaAI).*
