---
title: "Spring on MacOSX"
source_url: "https://springrts.com/wiki/Spring_on_MacOSX"
categories:
  - "Deprecated"
---
# Spring on MacOSX

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | This howto is deprecated, please use the [official package](/download), else you can [compile](/building-spring-on-macosx) it yourself. |

**Important notice: as of the next engine release, this tutorial will be discontinued, as Spring will be available as a standalone Mac OS X .app bundle (so will SpringLobby).**

Last page update: 2011/08/01 by daftalx (updated SpringLobby to 0.135)

Current milestones available:

- Spring: 0.82.7.1
- SpringLobby: 0.135

## Preamble

This tutorial is intended for Mac OS X Snow Leopard (10.6.\*) users running in 32bit kernel mode. Although Spring compiles and runs in 64 bits, **it does not work in 64bit kernel mode** (thanks to *frequencyandsulphur* for digging this one out).

This tutorial has not been tested on older releases of Mac OS X (10.5-). Yet, there are big chances that you can get through and still be able to run Spring. Keep in mind though that due to architecture incompatibilities, Intel-powered macs will be able to discuss online together, as well as with PCs, but not with PPC-powered Macs.

Finally, please bear in mind that this tutorial is mostly for testing purposes and proof of concept. Although no manual compilation is required, using the Terminal application is necessary (for now). Due to the little amount of time people are dedicating to the Mac version of Spring, things will move only slowly and often behind the other platforms. Once things get stabilized, an all-in-one installer will (hopefully one day) replace this tutorial.

Good luck, and have fun !

## Basics

### Install the XCode tools

These are available on your Mac OS X install DVD, the installer is called "XCode Tools" in the "Optional installs" folder.

### Install the Java developer packages

As of Apple's "Java for Mac OS X 10.6 Update 3", headers for JNI (among other stuff) are no longer provided by default. In order to build spring AIs but also various dependencies, you should download and install the Java Developer package available on Apple's support site <a href="http://connect.apple.com/cgi-bin/WebObjects/MemberSite.woa/wa/getSoftware?bundleID=20719" class="external text" rel="nofollow">here</a> (NOTE: you must have an Apple ID to access this page. Feel free to post any public hard link in the forum to be added here instead).

### Install MacPorts

- If you never had MacPorts installed, the latest version is available as a ".dmg" installer on <a href="http://www.macports.org/install.php" class="external text" rel="nofollow">this page</a>
- If you already have MacPorts, make sure you run the latest version with

<!-- -->

        sudo port selfupdate

### Configure MacPorts

Spring and it's lobbies are published in a different repository than MacPorts's official one. So you must edit (as root) the MacPorts sources file (located by default in /opt/local/etc/macports/sources.conf), and add the following line **before** the last one:

        rsync://daftserve.dyndns.org/macports/

### Keep MacPorts up-to-date

To sync your MacPorts install with the latest repositories hit

        sudo port sync

and upgrade any outdated ports with

        sudo port upgrade outdated

From now on I assume your Portfiles will always be up-to-date, therefore I will get straight to the point during the remainder of this tutorial.

## Spring

### Install spring

Crazy as it may seem, installing spring now comes down to this command:

        sudo port install springrts binutils

WARNING: this will take a \*long\* while, especially on a fresh system (ballpark figure: over an hour with an Intel C2D 2.2GHz cpu).

the binutils are required for finding the source of a crash of spring, the utility addr2line is used.

### Setup game data

create a ".spring" folder in your home directory, and create the usual "games", "maps" and "demos" folder. There you can store your favorite game data (most of the content is cross-platform compatible).

### Check if Spring works

        spring

should launch the standalone GUI in window mode, which allows offline gaming, e.g. if you have demo scripts or single player games (my favorite these days is Chicken BA).

## Lobbies

### SpringLobby

Although the Mac OS port of SpringLobby should be considered "barely alpha"-stage, quite a lot of features are already functional, so you should be able to play online with patience and little effort.

#### Install SpringLobby

As for the engine, installing SpringLobby comes down to a simple command:

        sudo port install springlobby

In the end you should get two "double-clickable" .app bundles (springlobby and [SpringSettings](/springsettings)) in MacPorts's binary folder (/opt/local/bin by default).

#### Setup SpringLobby

Upon first run, you'll have to tell SpringLobby where to find the spring executable and unitsync library manually. The spring executable is in "/opt/local/bin/spring" and the unitsync library in "/opt/local/lib/libunitsync.so".

As mentioned earlier the lobby is in a very early port stage. One major feature that does \*NOT\* work yet is to join (or autojoin) an IRC channel (but you may chat inside a battleroom). So before connecting to the main server, open the "Autojoin channels" options window and remove all default channels.

That's it, connect and enjoy NOTE: SpringLobby will mostly crash upon startup (much less afterwards). Don't worry, just keep trying until you get through...

#### Known bugs

- Add bot in a game opens a tiny (one-pixel wide) window. Clicking it restores its size, but be precise !

## Troubleshooting

In case you encounter compile or install errors on the way, MacPorts will let you know that a log file has been stored somewhere like /opt/local/var/macports/logs/??/main.log, where the "??" describes the port you are installing. Paste the contents of this file into a paste bin (<a href="http://www.pastebin.ca" class="external free" rel="nofollow">http://www.pastebin.ca</a>) and post the shortlink to the pastebin in <a href="http://springrts.com/phpbb/viewtopic.php?f=65&amp;t=23455" class="external text" rel="nofollow">this topic</a>, together will your full system info (OS, CPU, ARCH, MacPorts version).

That's it ! Enjoy !

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Spring on MacOSX](https://springrts.com/wiki/Spring_on_MacOSX).*
