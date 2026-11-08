---
title: "AI:Development:System"
source_url: "https://springrts.com/wiki/AI:Development:System"
categories:
  - "AI_Dev"
---
# AI:Development:System

<div class="mw-parser-output">

[Development](/development-main) \< [AI Development](/ai-development) \< AI API

## Spring's AI API

### Design

Skirmish AIs are not loaded by the engine directly, but through an interface library. This allows integration of AIs written in other languages. An other idea made possible through this, is a library that can load AIs over the network, and let them run on an AI server (NOTE: this is not planned, just a possibility).\

To get an idea of the overall code and runtime structure of Springs AI Interface system, have a look at the following diagram.\

<div class="center">

<div class="thumb tnone">

<div class="thumbinner" style="width:724px;">

[<img src="/images/CAIInterfaceCodeStructure.png" class="thumbimage" decoding="async" width="722" height="460" />](/images/CAIInterfaceCodeStructure.png)

<div class="thumbcaption">

<div class="magnify">

</div>

New Code Structure

</div>

</div>

</div>

</div>

*briefly:* AI Interfaces are plugins for the spring engine, while Skirmish AIs are plugins for AI Interfaces.

Wrappers are comparable to AI Interfaces, but they rather lay between an AI Interface and an AI. They consist of code that enhances an interface or AI in some way, and they are compiled directly into the respective library. An example of one is the Legacy C++ Wrapper. It makes the C/C++ AI Interface look like the old C++ AI interface of spring, is used by KAIK and AAI for example, and its code is compiled directly into these AI libraries.

For further info, see [AI Interface Development](/ai-development-interface).

### History

Global AIs used by spring versions prior to 0.79 have used an AI Interface with the following structure:\

<div class="center">

<div class="thumb tnone">

<div class="thumbinner" style="width:724px;">

[<img src="/images/CAIInterfaceCodeStructureOld.png" class="thumbimage" decoding="async" width="722" height="575" />](/images/CAIInterfaceCodeStructureOld.png)

<div class="thumbcaption">

<div class="magnify">

</div>

Old Code Structure

</div>

</div>

</div>

</div>

Therefore, AIs had to be written in C++, and be compiled with the same compiler as the engine.

#### Links (not relevant for Spring versions newer then 0.78)

**Metal Handler Class**  
Cain has developed and released a Metal Handler Class that succesfully finds metal spots on maps, which can be a major stumbling block for many AI developers. Information about it can be found in <a href="https://springrts.com/phpbb/viewtopic.php?t=2408" class="external text" rel="nofollow">this thread</a>.\

<!-- -->

**[Krogothes Metal Class V3](/krogothes-metal-class)**  
A useful mex spot finding algorithm, essential for any AI that uses metal extractors\

<!-- -->

**Global AI Interface**  
Jouninkomiko has a topic on the <a href="https://springrts.com/phpbb/viewtopic.php?t=923" class="external text" rel="nofollow">Global AI Interface</a> running here.\

<!-- -->

**[Hugh's global AI tutorial](/ai-hughs-global-ai-tutorial)**  
Hugh's tutorial on writing an AI in C#.\

<!-- -->

**[Global AI .Net Interface](/ai-csaiinterface)**  
Write Global AIs in .Net, using Hugh Perkins's interface\

<!-- -->

**[Global AI Java Interface](/ai-jai)**  
Write Global AIs in Java, using JAI\

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:Development:System](https://springrts.com/wiki/AI:Development:System).*
