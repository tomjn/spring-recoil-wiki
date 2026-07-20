---
title: "Building Spring on Buildbot"
source_url: "https://springrts.com/wiki/Building_Spring_on_Buildbot"
categories:
  - "Buildbot"
---
# Building Spring on Buildbot

<div class="mw-parser-output">

[Development](/development-main) \< [Building Spring](/building-spring) \< Building Spring on Buildbot

## Current

See [Buildbot:Gentoo](/buildbot-gentoo) or [Buildbot:OSX](/buildbot-osx) for how to set it up.

## New (since 0.82)

Watch progress and errors of builds:

<a href="http://buildbot.springrts.com/waterfall" class="external free" rel="nofollow">http://buildbot.springrts.com/waterfall</a>

The outcome of builds can be found here:

<a href="http://springrts.com/dl/buildbot/default/" class="external free" rel="nofollow">http://springrts.com/dl/buildbot/default/</a>

## Old (until 0.81)

The spring build-bot is a server that is setup to compile spring automatically, and is usable by everyone. It currently supports compiling for:

- Windows 32bit with TDM-MinGW (default)
- Windows 32bit with MinGW
- Windows 64bit with MinGW
- Linux with GCC

You may use the build-bot from within your Spring lobby client. Join channel **\#buildserv**, type *!help* and follow the instructions. Most useful commands are *!rebuild* and *!translate*.

It is maintained by bibim and mainly used by devs for testing if their changes would compile on other systems too, but as it also generates windows installers, that can be downloaded by everyone, it can be also useful for casual users willing to try the latest changes to spring.

The outcome of builds can be found here: <a href="http://buildbot.eat-peet.net/spring/" class="external text" rel="nofollow">http://buildbot.eat-peet.net/spring/</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Building Spring on Buildbot](https://springrts.com/wiki/Building_Spring_on_Buildbot).*
