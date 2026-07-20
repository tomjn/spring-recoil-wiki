---
title: "AIInterface:Mono"
source_url: "https://springrts.com/wiki/AIInterface:Mono"
categories:
  - "AIInterface"
---
# AIInterface:Mono

<div class="mw-parser-output">

<table class="wiki-infobox">
<tbody>
<tr>
<td colspan="2"><strong>Mono</strong></td>
</tr>
<tr>
<td>Developer</td>
<td>Agon</td>
</tr>
<tr>
<td>Version</td>
<td><strong>v0.5 (local copy)</strong></td>
</tr>
<tr>
<td>Language Support</td>
<td>CLI languages</td>
</tr>
<tr>
<td>Status</td>
<td><strong>beta</strong></td>
</tr>
<tr>
<td>License</td>
<td>LGPL v2.1+ and MIT</td>
</tr>
<tr>
<td colspan="2"> <strong><a href="/ai-development-interface">&lt;- Back to AI Interfaces</a></strong></td>
</tr>
</tbody>
</table>

### Forum threads

- <a href="http://spring.clan-sy.com/phpbb/viewtopic.php?f=15&amp;t=16872" class="external text" rel="nofollow">Mono AI Interface for Spring</a>

### Description

This AI interface is written in C and allows spring to load AIs written in a CLI compatible language.

The source of this AI interface library can be found here: *{spring_source}/AI/Interfaces/Mono/*

### Currently supported AIs

- MonoNullAI
- CSharpSampleAI

### Download

!NO PUBLIC CODE AVAILABLE YET!

### Known Crashes

- Description in AIInfo.lua does not fit to the AI.

### How to compile and install the interface

- Configure with: "cmake -i" or "cmake-gui"
- make (optional with -j\<number for jobs\>)
- make install (optional with -j\<number for jobs\>)

### Required software

- Mono 2.0\<
- GLib2 (required for Mono)

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AIInterface:Mono](https://springrts.com/wiki/AIInterface:Mono).*
