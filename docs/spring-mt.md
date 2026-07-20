---
title: "Spring MT"
source_url: "https://springrts.com/wiki/Spring_MT"
categories:
  - "Deprecated"
---
# Spring MT

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

## Spring MT

The Spring MT 94.11 release is compatible with Spring 94.1

### What is Spring MT?

Spring MT uses multithreaded asynchronous simulation (MT ASIM) to a much higher degree than the other Spring releases. It also uses asynchronous pathfinding (APATH). This typically translates into significantly higher performance, depending on your hardware.

### What hardware do I need?

You need **three physical cores** to get any real benefit. A quad core or better is recommended.\

[<img src="/images/Spring_MT_core_layout.gif" decoding="async" width="666" height="124" alt="Spring MT core layout.gif" />](/images/Spring_MT_core_layout.gif)

### How much faster is it?

Typically **more than 100% faster** with a quad core. Benchmarked using Core I7 2600K, BA7.72, DeltaSiegeDry, Default pathfinder, 4x "give all".

### How can it be faster?

The simulation will run on several CPU cores, and the pathfinder may also run on a separate core.

### How does Spring / Spring MT play together?

Spring MT includes Spring, and uses automatic engine type detection to make it sync-compatible.

### On which servers can I play Spring MT?

Look for servers that have "Spring MT" or "MT" in the description. These servers will send you a chat message with instructions.

### What is the downside?

The simulation may work slightly differently, possibly producing some negative effects. There is an increased risk of threading bugs that may cause a desync. The Default pathfinder is recommended because the QTPFS pathfinder tends to kill the performance of Spring MT.

### Should I use MT even if I don't want to play on MT servers?

You can give it a try, the included Spring 94.11 (non-MT) version also has automatic CPU affinity setup that may give you some more performance.

### How do I install it?

Note: After installation, join lobby chat room **SpringMT9411** for streamlined access to MT autohosts.

**Windows complete**\

<a href="http://springrts.com/dl/buildbot/default/MTsim2/94.1-19-g1f3d930/win32/spring_94.1-19-g1f3d930.exe" class="external text" rel="nofollow">94.11 MT + 94.11 installer</a>\
<a href="http://springrts.com/dl/buildbot/default/MTsim2/94.1-19-g1f3d930/win32/spring_94.1-19-g1f3d930_portable.7z" class="external text" rel="nofollow">94.11 MT + 94.11 portable</a>\

**Executables only**\
Unzip both executables in the install folder of the official release.

Windows <a href="http://springrts.com/dl/buildbot/default/MTsim2/94.1-19-g1f3d930/win32/%7bMTsim2%7d94.1-19-g1f3d930_spring-mt.7z" class="external text" rel="nofollow">94.11 MT</a>, <a href="http://springrts.com/dl/buildbot/default/MTsim3/94.1-16-ge49de6c/win32/%7bMTsim3%7d94.1-16-ge49de6c_spring.7z" class="external text" rel="nofollow">94.11</a>.\
Linux32 <a href="http://springrts.com/dl/buildbot/default/MTsim2/94.1-19-g1f3d930/linux32/%7bMTsim2%7d94.1-19-g1f3d930_spring-mt-linux32-static.7z" class="external text" rel="nofollow">94.11 MT</a>, <a href="http://springrts.com/dl/buildbot/default/MTsim3/94.1-16-ge49de6c/linux32/%7bMTsim3%7d94.1-16-ge49de6c_spring-linux32-static.7z" class="external text" rel="nofollow">94.11</a>. Requires a <a href="http://springrts.com/dl/buildbot/default/master/94.1/linux32/spring_94.1_minimal-portable-linux32-static.7z" class="external text" rel="nofollow">portable</a> installation\
Linux64 <a href="http://springrts.com/dl/buildbot/default/MTsim2/94.1-19-g1f3d930/linux64/%7bMTsim2%7d94.1-19-g1f3d930_spring-mt-linux64-static.7z" class="external text" rel="nofollow">94.11 MT</a>, <a href="http://springrts.com/dl/buildbot/default/MTsim3/94.1-16-ge49de6c/linux64/%7bMTsim3%7d94.1-16-ge49de6c_spring-linux64-static.7z" class="external text" rel="nofollow">94.11</a>. Requires a <a href="http://springrts.com/dl/buildbot/default/master/94.1/linux64/spring_94.1_minimal-portable-linux64-static.7z" class="external text" rel="nofollow">portable</a> installation\
OSX64 <a href="http://springrts.com/dl/buildbot/default/MTsim2/94.1-19-g1f3d930/osx64/%7bMTsim2%7d94.1-19-g1f3d930_MacOSX-10.6-SnowLeopard_spring-mt.zip" class="external text" rel="nofollow">94.11 MT</a>, <a href="http://springrts.com/dl/buildbot/default/MTsim3/94.1-16-ge49de6c/osx64/%7bMTsim3%7d94.1-16-ge49de6c_MacOSX-10.6-SnowLeopard_spring.zip" class="external text" rel="nofollow">94.11</a>. Requires a <a href="http://springrts.com/dl/buildbot/default/master/94.1/osx64/spring_94.1_MacOSX-10.6-SnowLeopard.zip" class="external text" rel="nofollow">portable</a> installation\

**Source code**\

<a href="https://github.com/zerver/spring/tree/1f3d930a716bb0260e8d12b7d80b8f8f0299a908" class="external text" rel="nofollow">Github 94.11 MT</a>\
<a href="https://github.com/zerver/spring/tree/e49de6c299860728208ee60c2092c2131cae1363" class="external text" rel="nofollow">Github 94.11</a>\

### How do I install it on my autohost?

**Dedicated server**\

<a href="http://springrts.com/dl/buildbot/default/MTsim2/94.1-19-g1f3d930/win32/%7bMTsim2%7d94.1-19-g1f3d930_spring-dedicated.7z" class="external text" rel="nofollow">Windows</a>\
<a href="http://springrts.com/dl/buildbot/default/MTsim2/94.1-19-g1f3d930/linux32/%7bMTsim2%7d94.1-19-g1f3d930_spring-dedicated-linux32-static.7z" class="external text" rel="nofollow">Linux32</a>\
<a href="http://springrts.com/dl/buildbot/default/MTsim2/94.1-19-g1f3d930/linux64/%7bMTsim2%7d94.1-19-g1f3d930_spring-dedicated-linux64-static.7z" class="external text" rel="nofollow">Linux64</a>\
<a href="http://springrts.com/dl/buildbot/default/MTsim2/94.1-19-g1f3d930/osx64/%7bMTsim2%7d94.1-19-g1f3d930_MacOSX-10.6-SnowLeopard_spring-dedicated.zip" class="external text" rel="nofollow">OSX64</a>\

In **spads.conf** set masterChannel:SpringMT9411\

In **spads.pl**, search for "sub cbJoinBattleRequest" and insert these lines of code immediately after the second line (the one that starts with "my"):

      if (!exists $lobby->{channels}->{$masterChannel} || 
          !exists $lobby->{channels}->{$masterChannel}->{$user}) {
        my $mtmsg = "Please note this server REQUIRES Spring MT 94.11. ".
          "Installation instructions: /wiki/Spring_MT";
        sayPrivate($user,$mtmsg);
      }

Consider disabling spads auto update to avoid the changes being overwritten.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Spring MT](https://springrts.com/wiki/Spring_MT).*
