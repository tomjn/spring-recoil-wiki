---
title: "AIInterface:Java"
source_url: "https://springrts.com/wiki/AIInterface:Java"
categories:
  - "AIInterface"
---
# AIInterface:Java

<div class="mw-parser-output">

<table class="wiki-infobox">
<tbody>
<tr>
<td colspan="2"><strong>Java</strong></td>
</tr>
<tr>
<td>Developer</td>
<td>hoijui</td>
</tr>
<tr>
<td>Version</td>
<td><strong>0.1</strong></td>
</tr>
<tr>
<td>Language Support</td>
<td><a href="http://en.wikipedia.org/wiki/Java_Virtual_Machine" class="external text" rel="nofollow">JVM languages</a></td>
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
<td colspan="2"> <strong><a href="/ai-development-interface">&lt;- Back to AI Interfaces</a></strong></td>
</tr>
</tbody>
</table>

## Java AI Interface Wrapper

#### Forum threads

- <a href="https://springrts.com/phpbb/viewtopic.php?f=15&amp;t=12308" class="external text" rel="nofollow">Java AI Interface for Spring</a>
- <a href="https://springrts.com/phpbb/viewtopic.php?f=15&amp;t=15019" class="external text" rel="nofollow">AI Interface redesign (in C)</a>

#### Description

This AI Interface is written in C, Java and AWK, and heavily relies on JNI and JNA. It allows spring to load AIs written in Java, or any of the other <a href="http://en.wikipedia.org/wiki/Java_Virtual_Machine" class="external text" rel="nofollow">languages supported by the JVM</a> like <a href="http://en.wikipedia.org/wiki/Java_%28programming_language%29" class="external text" rel="nofollow">Java</a>, <a href="http://en.wikipedia.org/wiki/Groovy_%28programming_language%29" class="external text" rel="nofollow">Groovy</a>, <a href="http://en.wikipedia.org/wiki/JRuby" class="external text" rel="nofollow">JRuby</a>, <a href="http://en.wikipedia.org/wiki/Jython" class="external text" rel="nofollow">Jython</a>, <a href="http://en.wikipedia.org/wiki/Scala_%28programming_language%29" class="external text" rel="nofollow">Scala</a> or <a href="http://en.wikipedia.org/wiki/Clojure" class="external text" rel="nofollow">Clojure</a>. These AIs consist of a *.jar* file, which contains at least one class that implements the interface (see *{spring_source}/AI/Interfaces/Java/java/src/com/springrts/ai/AI.java*).

For reference only: **[JAI](/ai-jai)** DEPRECATED

#### AIs using it

(as of January 2009)

Skirmish AIs:

- **[NullJavaAI](/ai-nulljavaai)**
- **[NullOOJavaAI](/ai-nulloojavaai)**

#### Supported Platforms

As this interface uses JNA, it is limited to the platforms where it is available: (as of Jan 2009)

- Windows (x86/amd64)
- Linux (i386/amd64)
- OS X (ppc/i386/amd64)
- FreeBSD (i386/amd64)
- OpenBSD (i386)
- Solaris (x86/amd64/sparc/sparcv9)

As this includes all platforms and architectures that spring currently runs on, this should not cause any problems at all.

#### Download

It comes with a spring default install.

#### Source

The source can be found under *{spring_source}/AI/Interface/Java/*. Not all the Java source files are available under this directory, as a big part of them are generated during the build process, and are therefore only available when you generate them yourself, or in the AIInterface-src.jar in your spring installation.

#### Bugs

**Known Crashes:**

- When natively debugging (eg with GDB), you may get random *SIGSEGV*s/*segmentation fault*s when using Java AIs. This is due to the JVM using *SIGSEGV* as a signal for garbage collection. There are two workarounds:
  - **recommended**: issue a *continue* in your native debugger; if spring continues normally, it was a JVM garbage collection *SIGSEGV*
  - use the JVM without JIT (Just In Time compilation), as the JVM does not use *SIGSEGVs* in this mode. This will make cause additional run-time CPU usage.

Please report bugs under <a href="http://springrts.com/mantis/" class="external text" rel="nofollow">Mantis</a> to the AI sub-project.

#### How to compile

Make sure your Env-Vars are set like this (replace absolute paths according to your system):

*Windows:*\
` SET JAVA_HOME=C:/Program Files/Java/jdk1.6.0 `

*Linux:* (you may want to place this in your *~/.profile* file)\
` export JAVA_HOME=/usr/jdk1.6.0 `

**The easy way**\
Use Scons or CMake (refer to [Building spring](/building-spring)).

**The hard way**

*C part:*

- include directories:
  - {spring_source}/rts/ExternalAI/Interface
  - {spring_source}/AI/Wrappers/CUtils
  - {spring_source}/AI/Interfaces/Java
- source files:
  - {spring_source}/AI/Interfaces/Java/\*.c\*
- create a dynamic loadable shared library (module)
- should compile with all C++ compilers (tested with: MinGW, GCC, Intel)

tested under Linux32 and Win32

*Java part:*

- Reffer to the shell scripts for your platform: *{spring_source}/AI/Interfaces/Java/bin/\*.sh\|.bat*\* Refffer to the shell scripts for your
- Or use the ant build script at: *{spring_source}/AI/Interfaces/Java/bin/build.xml*

#### How to install/use

Additional software you need to have installed to be able to use Java AIs:

- <a href="http://www.java.com/de/download/" class="external text" rel="nofollow">Java Runtime Environment v1.5.0+ (tested with 1.6.0)</a>

Make sure your Env-Vars are set like this (replace absolute paths according to your system):

*Windows:*\
` SET JAVA_HOME=C:/Program Files/Java/jre1.6.0 `

*Linux:* (you may want to place this in your *~/.profile* file)\
` export JAVA_HOME=/usr/jre1.6.0 `

**Install the easy way**\
Use Scons or CMake (refer to [Building spring](/building-spring)).

**... the manual way**\
from: *{spring_source}/AI/Interfaces/Java/*\
to: *{spring_data_dir}/AI/Interfaces/Java/{Java-AIInterface-version}/*

- copy *lib\*.so*, *lib\*.dylib* or *\*.dll* to *./*
- copy *data/\** to *./*

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AIInterface:Java](https://springrts.com/wiki/AIInterface:Java).*
