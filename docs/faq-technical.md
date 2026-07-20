---
title: "FAQ:technical"
source_url: "https://springrts.com/wiki/FAQ:technical"
categories:
  - "FAQ"
---
# FAQ: Technical

> **Recoil:** This FAQ covers the Spring engine. The maintained fork is [Recoil](https://recoilengine.org/); its source lives at [beyond-all-reason/RecoilEngine](https://github.com/beyond-all-reason/RecoilEngine/).

## What port numbers does Spring use?

The engine uses UDP port 8452 by default, which can be changed in the lobby. If you are behind a router and have problems hosting, forward that port and make sure your firewall is not blocking it.

## What APIs does Spring use?

Spring uses OpenGL for graphics and OpenAL for sound. SDL is used for input and window/context handling.

## What language is Spring written in?

The engine is written mostly in C++. Widgets and gadgets are written in Lua. Skirmish AIs can be written in Lua, C, C++, Java VM languages and Python.

## Is Spring open source?

Yes. The maintained engine's source is on GitHub at [beyond-all-reason/RecoilEngine](https://github.com/beyond-all-reason/RecoilEngine/).

## Is Spring a portable application?

Yes, the engine can be run from any large-enough portable storage device. Note that config and content files are sometimes written to a per-user data directory rather than next to the executable.

## What do the version parts mean?

See [EngineVersion#Parts](/engineversion#parts).

## Why doesn't the engine use all my CPU cores?

The engine is largely single-threaded by design; a lot of the simulation cannot be trivially parallelised without breaking multiplayer sync. Historically, performance gains came more from reducing cache misses than from adding threads. If the engine is slow for you, report it with details rather than assuming "more threads" is the fix.

---

*Imported from the springrts.com wiki (public domain). Original page: [FAQ:technical](https://springrts.com/wiki/FAQ:technical).*
