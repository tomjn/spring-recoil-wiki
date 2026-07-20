---
title: "AI:Development"
source_url: "https://springrts.com/wiki/AI:Development"
categories:
  - "AI_Dev"
---
# AI:Development

<div class="mw-parser-output">

[Development](/development-main) \< AI Development

## How to write a Skirmish AI for Spring

This section gives help on how to create Artificial Intelligence agents that control teams (as if a player) - "Skirmish AI".

The SpringRTS engine interacts with the Skirmish AIs through an "Interface". There are stable (10-2014, Spring v98) interfaces for the languages C/C++ and Java (not currently sure about the others but I think Lua too).

### Quick Start

See these pages for tutorials on how to setup a development environment, connect to the appropriate "Interface" and how to build your first example Skirmish AI:

- **[C++](/ai-development-lang-cpp)**\
- **[C](/ai-development-lang-c)**\
- **[Java](/ai-development-lang-java)** *(up-to-date as of 10-2014, SpringRTS v98)*\
- **[Lua](/ai-development-lang-lua)**\
- **[Python](/ai-development-lang-python)**\
- **[C#](/ai-development-lang-csharp)**\
- **Groovy**\

### I have setup my development environment. What now?

- **[SpringRTS \<-\> AIs architecture](/ai-development-system)** - architecture of SpringRTS and how it interacts with the AIs.
- **[The mappings provided by the AI Interface](/ai-development-themaps)** - how the engine maps the game area and how the interface exposes those maps.
- **[How to monitor and debug your Skirmish AI](/ai-development-monitoranddebug)** - How to monitor and debug your Skirmish AI.
- **[AIs for Spring](/ai-skirmish-list)** - list of some of the Skirmish AIs that have already been developed for SpringRTS.

### Overall AI ideas, practical examples, useful resources

- **[AI related links](/ai-links)** - ranging from how to conceptualize AI agents all the way down to how to tackle very specific problems like pathfinding.
- **[Useful inferences](/ai-gameinferences)** - how to infer where the opponents might have started, where on the maps can your units go, etc..
- **<a href="http://springrts.com/phpbb/viewforum.php?f=15" class="external text" rel="nofollow">Springs AI dev forum</a>** - comunity's forum dedicated to AI development.
- **[AI Interfaces & Wrappers](/ai-development-interface)** - semi-technical description of the Interfaces that expose the SpringRTS engine to the AI agents.

### Other hints, tips and interesting infos

- **AI "frame skipping"**

<a href="http://springrts.com/phpbb/viewtopic.php?p=463953#p463953" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?p=463953#p463953</a>\
As in: if a Java/C/C++ SkirmishAI gets delayed responding back to the Interface, the SpringRTS engine will wait on the AI. Thus delaying the game, thus not having the AI "skip" frames.

- **Engine commands to control the AIs**

In spring you have some control over AIs with these commands:

    /aireload
    /ailist
    /aikill
    /aicontrol

- **Lua\<--\>AI communications \[in Spring 0.83+\]**

<a href="http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=26298" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=26298</a> He shall say that only it once!

- **Link to source code of the Interface, engine-side**

Chances are you'll have doubts about what exactly the commands abc(), qwe() or xyz() do. Asking in the AI forum is a good way to clarify. The most reliable is probably to look at the source code (if you're able to navigate the maze of C++ code in all its glory, that is):\
<a href="https://github.com/spring/spring/blob/develop/rts/ExternalAI/AICallback.h" class="external free" rel="nofollow">https://github.com/spring/spring/blob/develop/rts/ExternalAI/AICallback.h</a>\
<a href="https://github.com/spring/spring/blob/develop/rts/ExternalAI/AICallback.cpp" class="external free" rel="nofollow">https://github.com/spring/spring/blob/develop/rts/ExternalAI/AICallback.cpp</a>\

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:Development](https://springrts.com/wiki/AI:Development).*
