---
title: "AI:JAI"
source_url: "https://springrts.com/wiki/AI:JAI"
categories:
  - "Deprecated"
  - "AI"
---
# AI:JAI

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

<table class="wiki-infobox">
<tbody>
<tr>
<td colspan="2"><strong>JAI</strong></td>
</tr>
<tr>
<td>Developer</td>
<td>hoijui</td>
</tr>
<tr>
<td>Version</td>
<td><strong>alpha 4 (spring SVN)</strong></td>
</tr>
<tr>
<td>Mod Support</td>
<td>Supports All Mods</td>
</tr>
<tr>
<td>Status</td>
<td><strong>DEPRECATED</strong></td>
</tr>
<tr>
<td>License</td>
<td>GNU GPL v2+</td>
</tr>
<tr>
<td>Interface</td>
<td>&#123;&#123;{7&#125;&#125;}</td>
</tr>
<tr>
<td>Wrapper</td>
<td>&#123;&#123;{8&#125;&#125;}</td>
</tr>
<tr>
<td colspan="2"> <strong><a href="/ai-skirmish-list">&lt;- Back to List of AIs</a></strong></td>
</tr>
</tbody>
</table>

### Forum threads

- <a href="http://spring.clan-sy.com/phpbb/viewtopic.php?f=15&amp;t=12308" class="external text" rel="nofollow">Java AI Interface for Spring</a>
- <a href="http://spring.clan-sy.com/phpbb/viewtopic.php?f=15&amp;t=15019" class="external text" rel="nofollow">AI Interface redesign (in C)</a>

## Description

This AI is **DEPRECATED**, see [Java AI Interface](/aiinterface-java) instead.

JAI is a *Java wrapper interface* for the GlobalAI interface of Spring. It allows AIs to be written in Java. It is *not* an AI itself.

It is not recommended to use or even test this version, as it is based on the C++ AI interface still. Development is on hold, till the new C interface for AIs is released, after which JAI will be ported to use that interface, for greater simplicity and flexibility.

At the time of writing (May 2008), JAI only works with SVN builds of Spring, due to a necessary change in the way Spring handles AI loading. The current JAI package has been developed and tested using spring r5956.

## Downloads

- <a href="http://spring.jobjol.nl/show_file.php?id=1022" class="external text" rel="nofollow">JAI-bin.zip</a> - for testing JAI with the default Java AI implementation
- <a href="http://spring.jobjol.nl/show_file.php?id=1021" class="external text" rel="nofollow">JAI-src.zip</a> - for implementing your own Java AI and for testing JAI deeper

## How to use/test it

First of all, extract the contents of JAI-\<version\>-bin.zip to your /spring/ directory. Note that, unlike normal AI DLLs, the JAI.dll does NOT belong directly into /spring/AI/Bot-libs, but into the /JAI subdirectory.

Software you need to have installed to be able to run JAI:

- <a href="http://java.sun.com/javase/downloads" class="external text" rel="nofollow">Java SDK (tested with 1.6.0)</a>
- spring r5956 (found at <a href="http://planetspring.free.fr/spring" class="external text" rel="nofollow">the buildbot</a>), though it may also run on newer builds of spring.

Make sure your Env-Vars are set like this:

On Windows:\
` SET JAVA_HOME=C:/Program Files/Java/jre1.6.0_05`\
`SET PATH=%JAVA_HOME%/bin;%JAVA_HOME%/bin/client;%PATH% `

On Linux:\
` export JAVA_HOME=/usr/jre1.6.0_05`\
`export PATH=$JAVA_HOME/bin:$JAVA_HOME/bin/client:$PATH `

If your lobby of choice does not support adding Java AIs as bots yet (until May 2008 only supported by SpringLobby), you will have to manually edit the startup script for spring. A simple way to do this is the following:\

    1. Start TASClient
    2. Host a new game
    3. Set everything to your liking
    4. Add one or more Bots using a normal AI DLL such as AAI.dll or KAIK.dll
    5. Start the game and abort it using SHIFT+ESCAPE once it's loaded
    6. Open script.txt (in the spring root directory)
    7. Search for aidll=<whatever DLL you choose>
    8. Replace it with aidll=AI/Bot-libs/tst.jar
    9. Open a command line window, navigate to your spring directory
    10. Start Spring using "spring.exe script.txt" on the command line

If the game crashes, See [Bug Report](#bug-report) below If it does not, and you're using the tst.jar, you can chat numbers from 1 to 7 to test the AI. This is how tst.jar should react to chat numbers:\

    1 List friendly units
    2 Print start position
    3 Listing selected units
    4 Listing UnitDefs
    5 Attack: sends all units to positions of currently visible ememies
    6 Toggle global rally point: move units to random position after creation (default: false)
    7 Attack cheat: sends all units to positions of enemies

Some of these commands may require you to switch your team to the AI's, and build some units first. Do "/cheat" and then "/team 1" to achieve this.

### Bug Report

If the game crashes, check the various log files:

- AI/Bot-libs/JAI/log/
- AI/hoijuiAI/log/
- infolog.txt (spring default log file)
- hotspot.log (JVM log file)
- hserror_pid\*.log (indicates a fatal JVM crash)

Most likely, you will not have all of them. They will be reduced in number in future versions, sorry ;-) Please report any errors to hoijui in the forum or on the main lobby, thanks. Do not commit the error as a bug on mantis please.

## Build from Source

(Hint: the whole procedure is currently a bit simpler on windows) There are two makefiles available:

- windows (tested on XP)
- linux (tested on Upuntu 7.10).

they both compile with mingw and for windows (so they can be used to create for the official release build of spring).

First off, you need the current spring svn version and the build environment set up for it, see [Compiling Spring](/building-spring#setting-up-your-development-environment). Build spring (make sure that JAI is not yet in AI/Global, as building spring would fail then).

Software you need to have installed to be able to compile JAI:

- <a href="http://java.sun.com/javase/downloads" class="external text" rel="nofollow">Java SDK 1.6.0+</a>
- <a href="http://www.swig.org/download.html" class="external text" rel="nofollow">SWIG 1.3.31+</a>

Extract the JAI-src.zip to: spring_current_svn/AI/Global in the Makefile(s), you have to adjust the vars:

- JAVA_HOME
- SPRING_CURRENT_WINDOWS (only change this if you use the unix makefile)

on unix, you can set SPRING_CURRENT_WINDOWS to a mount of an smb shared spring on a windows PC, which needs to contains the same build as the one on unix. if you dont do this, you have to manually copy the results to your test machine on windows. As the makefile only compiles for windows, you can not test JAI on linux yet, except you adjust the makefile yourself and get it to work.

Compile with either of the two:

`makefile -f Makefile_unix jall`

`makefile -f Makefile_win32 jall`

You should now have JAI ready to run, please see [above](#how-to-use2ftest-it).

## Creating your own implementation

To create your own implementation, it is best to use hoijui's test implementaion at JAI-\<version\>-src.zip/src/java-impl-tst or JAI-\<version\>-src.zip/src/java-impl-hoijui as a start. It are minimal, sample implementations, which come with a netbeans project each. A Java GlobalAI consist of one implementation for each:

- `com.clan_sy.spring.ai.global.java.AI`
- `com.clan_sy.spring.ai.global.java.Factory`

To compile, you also need JAI.jar (JAI-\<version\>-bin.zip/JAI) in your classpath.

You can override methods from the superclass of TstAI.java or HoijuiAI.java to implement AI behavior. Once you are done modifying, just export your classes to a jar, and use it as your Java AI as described [above](#how-to-use2ftest-it). Make sure to set your new jar in step 8.

If you need further Java libraries, put the jars into AI/Bot-libs/JAI/lib, and native libraries into AI/Bot-libs/JAI/lib aswell.

### Debugging

It is possible to debugg your Java AI while it runs in spring. To enable debugging, you need to save the following into file AI/Bot-libs/JAI/config.xml:

` <?xml version="1.0" encoding="UTF-8" ?> `

`<JAI-config> `

       <jvm>
           <option>-Xms4M</option>
           <option>-Xmx64M</option>
           <option>-Xss512K</option>
           <option>-Xoss400K</option>

           <option>-verbose:jni</option>
           <option>-Xcheck:jni</option>
           <option>-XX:+UnlockDiagnosticVMOptions</option>
           <option>-XX:+LogVMOutput</option>

           <option>-Xdebug</option>
           <option>-Xnoagent</option>
           <option>-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=7777</option>
           <option>-Djava.compiler=NONE</option>
       </jvm>

`</JAI-config> `

Run spring with a JAI implementation. Now you can connect with a java debugger to the machine running spring on port 7777.

## How does it work

JAI utilizes the jvm.dll of the JRE/JDK through JNI, to create a virtual machine for the Java AI to run in. It uses the same C/C++ interface as the native AIs, and just translates calls from one langauge to the other, bidirectional. Most of the sourcecode is generated with SWIG. This has the advantage that it supports a lot of other languages. One side is always C/C++, but the other could be Java, Lua, C#, Phyton, Ruby, ...

See <a href="http://www.swig.org" class="external text" rel="nofollow">SWIG Home</a> for further details. Supporting an other language is not as easy as just switching one variable from "Java" to "Ruby" eg, but if you are desperate, you might want to use JAI as a base to support your favourite language.

### Used Libraries

- JVM: ...cause we are doing Java
- JarClassLoader: loading classes from jars at runntime (Java)
- Apache Commons: logging and parsing XML (Java)
- log4j: logging (Java)
- javax.vecmath.Vector3f: backend for the Java version of float3 (Java)
- TinyXML: parsing XML (C/C++)
- CMetalMap: Krogothes Metal Spot finder (C/C++)

## TODO

- making it ready for release -\> waiting for feedback

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:JAI](https://springrts.com/wiki/AI:JAI).*
