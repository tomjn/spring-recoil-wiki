---
title: "AIWrapper:Cpp"
source_url: "https://springrts.com/wiki/AIWrapper:Cpp"
categories:
  - "AIWrapper"
---
# AIWrapper:Cpp

<div class="mw-parser-output">

<table class="wiki-infobox">
<tbody>
<tr>
<td colspan="2"><strong>Cpp</strong></td>
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
<td>C++</td>
</tr>
<tr>
<td>Status</td>
<td><strong>alpha</strong></td>
</tr>
<tr>
<td>License</td>
<td>GNU GPL v2+</td>
</tr>
<tr>
<td>AI Interface</td>
<td><a href="/aiinterface-c">C</a></td>
</tr>
<tr>
<td colspan="2"> <strong><a href="/ai-development-interface">&lt;- Back to AI Interfaces</a></strong></td>
</tr>
</tbody>
</table>

## (New) C++ AI Interface Wrapper

#### Forum threads

- <a href="http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=15019" class="external text" rel="nofollow">AI Interface redesign (in C)</a>

#### Description

This AI interface wrapper is written in C++. It allows C++ Skimrish AI devs to write AIs in a more future proof way than the [legacy wrapper](/aiwrapper-legacycpp), which is meant to be replaced by this wrapper over time. Use this, and not the legacy wrapper for new C++ AIs.

The source is not yet in springs *master* branch, but in the *cppintnew* one under: *{spring_source}/AI/Wrappers/Cpp/*

### Used By

#### Skirmish AIs

- **[CppTestAI](/ai-cpptestai)**
- **<a href="http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=22582" class="external text" rel="nofollow">Shard</a>**

#### Download

Included in the spring engine source code.

#### Source

The source can be found in the *cppintnew* branch under: *{spring_source}/AI/Wrappers/Cpp/*

#### Bugs

**Known Crashes:**

- None

**Missing Features:**

- compleet ID -\> OO object wrapping (eg no more unitIDs, but only Unit OO objects)

Please report bugs under <a href="http://springrts.com/mantis/" class="external text" rel="nofollow">Mantis</a> to the AI subproject.

#### How to compile

It is compiled directly into AIs using it. Refer to springs Scons or CMake build files.

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AIWrapper:Cpp](https://springrts.com/wiki/AIWrapper:Cpp).*
