---
title: "Crans Building Spring on Windows Log"
source_url: "https://springrts.com/wiki/Crans_Building_Spring_on_Windows_Log"
categories:
  - "Deprecated"
---
# Crans Building Spring on Windows Log

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

NOTE: Learned much since, so need to redo.

- dos2unix.exe part of minglibs, but not picked up on clean install (it's called from a batch file expecting it in PATH, %MINGWLIBS%, or the third argument to the batch file, which isn't passed atm. Should have a find\*.cmake file for that really). BUT, dos2unix is only used if git's core.autocrlf is set to false, so instead use: core.safecrlf = false + core.autocrlf = true.
- TDM with dwarf2 is preferred over 'plain' mingw, and has a properly working collect2.exe. Only there's a little naming thing then 'gcc-dw2'.

Right, the current building on windows with MinGW instructions for master seem outdated/broken/etc. :)

Since the new MinGW versions, things have become easier and more reliable. So to help others, I'll log here how I can make a working windows build from scratch.

I know this initial page isn't well formatted, I'll leave that to when I feel like it, or someone else does. Right now it seems more important to have some working instructions.

I can't test on anything other then my own system, which is Windows7, 64 bit. The date of all this is April 30, 2011.

Although this builds, and runs, you may have issues, since it is master. I certainly have some :) But since the buildbot windows builds have the same issues at the moment, I assume this is due to master having some issues, and not the build procedure.

Keep in mind that these steps describe using the latest available versions of everything. Currently this works pretty well, and is by far the easiest. But this may certainly change in the future.

Steps:

- For the Java AI bits, you'll want to have a 32 bit JDK installed, I'm currently using jdk1.6.0_24. Things may build without, but I'm doing a Java AI, so not gonna test without Java :)
- You'll need a working MinGW, this used to be a pain, but with recent updates this has become a lot better.
  - Read the page on <a href="http://www.mingw.org/wiki/Getting_Started" class="external free" rel="nofollow">http://www.mingw.org/wiki/Getting_Started</a>, just to get your bearings.
  - Grab the lastest mingw-get-inst from <a href="http://sourceforge.net/projects/mingw/files/Automated%20MinGW%20Installer/mingw-get-inst" class="external free" rel="nofollow">http://sourceforge.net/projects/mingw/files/Automated%20MinGW%20Installer/mingw-get-inst</a>. I'm using mingw-get-inst-20110316.exe.
  - Run the installer, choose to download the latest repository catalogues, accept the license
  - I'd recommend using the default install location of C:\MinGW, check if you didn't already have something there before installing :)
  - Whether you create start menu folders/desktop links/etc. is up to you.
  - From the available packages, select at least C++ compiler, adding MinGW Developer Toolkit works quite well, but is a rather big download. Not adding it means we need to add some more packages later.
  - Now the installer will do it's work, this will take some time. I usually get some errors/warnings about files which couldn't be downloaded (sourceforge hickups I figure), but as far as I can tell it'll retry them.
  - You'll need to add the bin sub folder where you installed MinGW to the PATH environment variable, most reading this will know what to do, otherwise the MinGW getting started page covers it well.
  - If all went well, you should now have some working tools. Open a cmd.exe (windows command shell), and type 'g++ --version', this should tell you you've now got a 4.5.2 or higher g++ compiler.
  - Spring needs the dos2unix tool to build, which is not installed by default. Use the command 'mingw-get install cygutils-dos2unix' to grab it.
  - If you did not install the MinGW Developer Toolkit, you'll have to install mingw32-make, use: 'mingw-get install mingw32-make'
  - Because of a 'bug' (See <a href="https://sourceforge.net/tracker/?func=detail&amp;aid=3295175&amp;group_id=2435&amp;atid=102435" class="external free" rel="nofollow">https://sourceforge.net/tracker/?func=detail&amp;aid=3295175&amp;group_id=2435&amp;atid=102435</a>), we'll have to replace the installed collect2.exe. Get the gcc-4.5.2-tdm-1-core.zip from: <a href="https://sourceforge.net/projects/tdm-gcc/files/TDM-GCC%204.5%20series/4.5.2-tdm-1%20SJLJ/" class="external free" rel="nofollow">https://sourceforge.net/projects/tdm-gcc/files/TDM-GCC%204.5%20series/4.5.2-tdm-1%20SJLJ/</a> (or a newer version in the same location. These are TDM MinGW builds, alternative builds of MinGW, and he's got a fix in for this issue), unpack the zip file to a temporary location, and copy the contained libexec\gcc\mingw32\4.5.2\collect2.exe to C:\MinGW\libexec\gcc\mingw32\4.5.2 or similar, replacing the existing collect2.exe. Hopefully they'll do something with the bug report and fix this :)
- I'm assuming you'll want to use git to get master, so you'll need the git client.
  - Get the latest client from: <a href="http://code.google.com/p/msysgit/downloads/list" class="external free" rel="nofollow">http://code.google.com/p/msysgit/downloads/list</a> Currently the most recent is 'Git-1.7.4-preview20110204.exe', detailing all the settings is a bit out of scope here, I have found that choosing for it to do no newline conversions tends to work the best with Spring :)
  - We'll get the source now, start with 'git clone <a href="git://github.com/spring/spring.git&#39;" class="external free" rel="nofollow">git://github.com/spring/spring.git'</a> This will create a 'spring' folder in the folder you execute the command from. This spring folder will contain the source.
  - If at a later time you want to update this source, go to the spring folder, and use 'git pull --rebase'.
- Ok, we're nearly done, we now need the 'mingwlibs', our own collection of libraries and stuff needed to build on windows. Your best bet is to get it from <a href="https://github.com/spring/mingwlibs" class="external free" rel="nofollow">https://github.com/spring/mingwlibs</a> (which always is the most recent, we need the latest for master), it has a big Downloads button. Use that to get a zip, and put the zip's content under out spring folder, in a subfolder 'mingwlibs'.
- Well, nearlyish, we need CMake now, get and install the latest from <a href="http://www.cmake.org/cmake/resources/software.html" class="external free" rel="nofollow">http://www.cmake.org/cmake/resources/software.html</a>. 2.8.4 works fine for me atm.
- Now run cmake-ui (it should have put a icon on the desktop).
  - Select the source folder, it's the spring folder you got with git.
  - Choose a build folder, it doesn't have to exist yet, I use a 'build' folder next to the 'spring' folder.
  - Hit the configure button. Use defaults in the generator dialog, which should be MinGW Makefiles, and use default native compilers.
  - There's now lots of configuration values, luckily defaults work fine normally. The only change I'd recommend is to change CMAKE_INSTALL_PREFIX to something like 'C:/Spring.master' Windows7/VIsta do not like anyone changing stuff under the Program Files folder, so keep spring in the root of C: (or so) tends to prevent a lot of problems. If you've changed anything, hit configure once more.
  - Now hit generate, this should create all needed makefiles and stuff.
  - If that went well, we're done with CMake, close it.
- Open a new cmd.exe, and go to the new 'build' folder.
- Optionally, type 'set MAKE_COMMAND=mingw32-make -j2', if you have more then one core and want to try multi-processed building (it's faster).
- Cross your fingers and type 'mingw32-make install DESTDIR=C:\\ (the DESTDIR part will heed the 'CMAKE_INSTALL_PREFIX' you set earlier).

If things build well, one way to testing things is:

- Get the BA mod from: <a href="http://spring-portal.com/index.php/docman/doc_details/314-balanced-annihilation-v71" class="external free" rel="nofollow">http://spring-portal.com/index.php/docman/doc_details/314-balanced-annihilation-v71</a>
- Get and install abma's test 'game' from: <a href="https://github.com/abma/spring-test-game" class="external free" rel="nofollow">https://github.com/abma/spring-test-game</a> (you want all contents as zip, the big download button). There's a README included.
- Now start spring.exe, pick a map of your liking, set the 'ai' to Commanders (which only spawns an idle commander for each side), and pick the game/mod name 'Balanced Annihilation modtest-V7.31' notice the 'modtest' bit :)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Crans Building Spring on Windows Log](https://springrts.com/wiki/Crans_Building_Spring_on_Windows_Log).*
