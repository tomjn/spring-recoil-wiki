---
title: "FAQ:technical"
source_url: "https://springrts.com/wiki/FAQ:technical"
categories:
  - "FAQ"
---
# FAQ:technical

<div class="mw-parser-output">

## Technical FAQ

### What port numbers does Spring use?

Game uses port 8452 UDP by default, which can be changed in the lobby. If you are behind a router, and are having problems hosting, try forwarding the correct port and also make sure the firewall is not blocking it.

### What APIs does Spring use?

Spring uses OpenGL for graphics and OpenAL for sound. Also SDL is used for input and some other stuff.

### What language is Spring written in?

The Spring game engine is mostly written in C++. TASClient is written in Delphi, SpringLS in Java, SpringLobby in C++. Widgets and Gadgets are written in Lua. Skirmish AIs can be written in Lua, C, C++, Java VM languages and Python.

### Is Spring open source?

Yes, it is. Go to the [downloads](/download) section of the site to download the source code.

### Is there any documentation for the source code?

Doxygen is used to generate the documentation of springs' source code. An <a href="https://springrts.com/dl/buildbot/doc/" class="external text" rel="nofollow">up to date documentation</a> is generated from the *develop* branch. To generate the documentation yourself, install DoxyGen and run "doxygen" from within the spring source directory.

### Is Spring a Portable Application?

Yes, spring can be run from any big-enough portable storage device. Sometimes config files and content files are saved god knows where ie in "my documents"

### Is there an alternative way to connect to the lobby server?

Yes, using the [IRC-Bridge](/ircbridge) through an <a href="http://en.wikipedia.org/wiki/Internet_Relay_Chat#Clients" class="external text" rel="nofollow">IRC client</a>. Keep in mind though, that this is not officially supported, and no guarantee is given for the reliability of this service.

### What do the spring version parts mean?

See [EngineVersion#Parts](/engineversion#parts).

### Why doesn't the spring engine use all my cpu cores?

Multi-threading is not an issue, it's software behaviour.

Examples of issues:

     1) Graphic glitches
     2) Bad performance

Examples of possible solutions (respectively):

     1) A dev with an AMD card who knows what they're doing
     2) Reducing cache misses (responsible for a significant portion of the speedup in 100.0)

Examples of sexy terms which sound like solutions but are probably more trouble than gain (in most cases):

     1) Multi-threading

From now on we'd recommend refraining from saying:

       Spring should be more multithreaded

As this is not only wrong but useless and annoying.

Instead you can say things like:

       Spring is slow for me and I'd like it to be faster

Which may or may not make a difference, but it will definitely make you look less foolish.

(see <a href="https://springrts.com/phpbb/viewtopic.php?f=1&amp;t=33908#p573296" class="external free" rel="nofollow">https://springrts.com/phpbb/viewtopic.php?f=1&amp;t=33908#p573296</a> )

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [FAQ:technical](https://springrts.com/wiki/FAQ:technical).*
