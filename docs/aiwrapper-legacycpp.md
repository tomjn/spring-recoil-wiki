---
title: "AIWrapper:LegacyCpp"
source_url: "https://springrts.com/wiki/AIWrapper:LegacyCpp"
categories:
  - "Deprecated"
  - "AIWrapper"
---
# AIWrapper:LegacyCpp

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

<table class="wiki-infobox">
<tbody>
<tr>
<td colspan="2"><strong>LegacyCpp</strong></td>
</tr>
<tr>
<td>Developer</td>
<td>hoijui &amp; zenzike</td>
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
<td><strong>~stable</strong></td>
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

## Legacy/Old C++ AI Interface Wrapper

#### Forum threads

- <a href="https://springrts.com/phpbb/viewtopic.php?f=15&amp;t=15019" class="external text" rel="nofollow">AI Interface redesign (in C)</a>

#### Description

This AI interface wrapper is written in C++. It allows spring to load AIs written for the old C++ AI interface of spring, and should not be used for new projects.

### Used By

#### Skirmish AIs

- **[AAI](/ai-aai)**
- **<a href="http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=19450" class="external text" rel="nofollow">E323AI</a>**
- **[KAIK](/ai-kaik)**
- **[NTai](/ai-ntai)**
- **[NullLegacyCppAI](/ai-nulllegacycppai)**
- **[RAI](/ai-rai)**

### Download

#### Binary

It comes with a spring default install.

#### Source

The source can be found under: *{spring_source}/AI/Wrappers/LegacyCpp/*

### Bugs

Known crashes:

- None

Please report bugs under <a href="http://springrts.com/mantis/" class="external text" rel="nofollow">Mantis</a> to the AI subproject.

### How to compile

It is compiled directly into AIs using it. Refer to springs Scons or CMake build files.

### How to study body of API function

Open *AI\Wrappers\LegacyCpp\AIAICallback.cpp*, search for desired function, detect appropriate Clb\_\* function. Then open *rts\ExternalAI\SSkirmishAICallbackImpl.cpp* and find goal function body. Also you may try to read additional info in *rts\ExternalAI\Interface\SSkirmishAICallback.h* file for Clb\_\* function.

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AIWrapper:LegacyCpp](https://springrts.com/wiki/AIWrapper:LegacyCpp).*
