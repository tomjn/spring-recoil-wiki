---
title: "AI:Development"
source_url: "https://springrts.com/wiki/AI:Development"
categories:
  - "AI_Dev"
section: "ai-dev"
---
# AI Development

How to write a **Skirmish AI**: a program that controls a team like a player would. This is the hub for the AI-development pages imported from the Spring wiki.

> **Recoil:** The maintained fork, [Recoil](https://recoilengine.org/), keeps the same Skirmish AI interface (`rts/ExternalAI` in [beyond-all-reason/RecoilEngine](https://github.com/beyond-all-reason/RecoilEngine/)). Recoil has not yet ported AI-specific documentation, so these pages remain the working reference; where they describe engine internals, cross-check against current Recoil source.

## How the AI interface works

The engine talks to Skirmish AIs through a language-neutral **Interface** layer. Historically the C/C++ and Java interfaces were the stable, fully supported ones; Lua, Python, C# and others were also available at various points.

## Quick start

Tutorials for setting up a development environment, connecting to the Interface, and building a first example AI, per language:

- **[C++](/ai-development-lang-cpp)**
- **[C](/ai-development-lang-c)**
- **[Java](/ai-development-lang-java)**
- **[Lua](/ai-development-lang-lua)**
- **[Python](/ai-development-lang-python)**
- **[C#](/ai-development-lang-csharp)**
- **Groovy**

## After your environment is set up

- **[Spring &lt;-&gt; AIs architecture](/ai-development-system)** - how the engine interacts with the AIs.
- **[The mappings provided by the AI Interface](/ai-development-themaps)** - how the engine maps the game area and exposes it.
- **[How to monitor and debug your Skirmish AI](/ai-development-monitoranddebug)**
- **[AIs for Spring](/ai-skirmish-list)** - list of Skirmish AIs already developed.

## Ideas, examples, resources

- **[AI related links](/ai-links)** - from conceptualizing AI agents down to specific problems like pathfinding.
- **[Useful inferences](/ai-gameinferences)** - inferring enemy start positions, reachable terrain, etc.
- **[AI Interfaces & Wrappers](/ai-development-interface)** - how the Interfaces expose the engine to AI agents.

## Notes

**Frame timing.** The engine waits on the AI rather than skipping frames: if a Java/C/C++ Skirmish AI is slow to respond to the Interface, the whole game is delayed instead of the AI missing frames.

**Lua &lt;-&gt; AI communications.** Direct communication between Lua and Skirmish AIs has been supported since Spring 0.83.

**Engine commands.** These console commands control AIs at runtime (still current in Recoil - see the [Recoil command reference](https://recoilengine.org/docs/unsynced-commands/)):

    /aireload    reload the AI controlling a team
    /ailist      list active Skirmish AIs
    /aikill      kill the AI controlling a team
    /aicontrol   attach a new Skirmish AI to a team

**Engine-side Interface source.** To see exactly what a callback does, read the source. In the maintained Recoil engine:

- [rts/ExternalAI/AICallback.h](https://github.com/beyond-all-reason/RecoilEngine/blob/master/rts/ExternalAI/AICallback.h)
- [rts/ExternalAI/AICallback.cpp](https://github.com/beyond-all-reason/RecoilEngine/blob/master/rts/ExternalAI/AICallback.cpp)

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:Development](https://springrts.com/wiki/AI:Development).*
