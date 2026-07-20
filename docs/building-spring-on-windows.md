---
title: "Building Spring on Windows"
source_url: "https://springrts.com/wiki/Building_Spring_on_Windows"
categories:
  - "Compiling"
---
# Building Spring on Windows

<div class="mw-parser-output">

[Development](/development-main) \< [Building Spring](/building-spring) \< Building Spring on Windows

If you only want to produce your own Spring game and not contribute to the core engine, compilation is not necessary. Check out [Gamedev:Main](/gamedev-main).

Warning: Compiling Spring on Windows often causes problems, it is heavily recommended to use [Linux](/building-spring-on-linux) for developing the Spring RTS Engine if possible.

Some reasons for this:

- Of the active developers nobody uses windows for developing. So they might not be able to help as effectively as on Linux.
- Setting up a build environment takes a lot more time on windows
- Compiling is often slower on windows
- Compiling on windows is poorly tested (which possibly leads to some random / unknown / weird errors)

That said, if you do wish to use Windows, the best place to get real-time help is the \#sy lobby channel, or \#sy on [IRC](/irc).

## Compiling with MinGW

### Requirements

Install <a href="http://www.cmake.org/" class="external text" rel="nofollow">CMake</a> and <a href="http://msysgit.github.io/" class="external text" rel="nofollow">msysGit</a> and MinGW-w64:

When installing msysGit you should select the option to "Run Git from the Windows Command Prompt":

[<img src="/images/Msysgit6.png" decoding="async" width="400" height="312" alt="Msysgit6.png" />](/images/Msysgit6.png)

This is in order to automatically add Git to PATH making it easy for CMake to find.

### Installing MinGW-w64

Download and run the "Mingw-builds project - native toolchains using trunk" installer from <a href="http://mingw-w64.org/doku.php/download/mingw-builds" class="external autonumber" rel="nofollow">[1]</a>, more specifically from here: <a href="https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win32/Personal%20Builds/mingw-builds/installer/mingw-w64-install.exe/download" class="external autonumber" rel="nofollow">[2]</a>

Select the following options:

[<img src="/images/InstallingMinGW-w64.png" decoding="async" width="400" height="294" alt="InstallingMinGW-w64.png" />](/images/InstallingMinGW-w64.png)

- **Version:** Any version above 4.8.x should work, 4.9.x+ may not have been tested as thoroughly. In 2020, version 8.1.0 works fine!
- **Architecture:** i686
- **Threads:** posix
- **Exception:** sjlj This is the only setting which needs to be changed from the default
- **Build Revision:** The latest one

### Adding to PATH

Once installed, you should add the MinGW directory to your PATH variable so that Cmake can find the relevant binaries.

- Go to System properties (either via Control Panel\System and Security\System or by right clicking 'Computer' on the desktop), then click 'Advanced System Settings'.
- Click the 'Environment Variables' button at the bottom.
- Find Path in the 'System Variables' scrollbox, add an extra `;` to the end and then copy-paste in the MinGW directory (e.g. default is `C:\Program Files (x86)\mingw-w64\i686-4.9.1-posix-sjlj-rt_v3-rev0\mingw32\bin`).
- Alternative instructions with images are easy to find online, for example <a href="http://geekswithblogs.net/renso/archive/2009/10/21/how-to-set-the-windows-path-in-windows-7.aspx" class="external text" rel="nofollow">here</a>.

## Get the Source Code

- use git's bash (you find it in the right click context menu when clicking the folder), `cd` into your spring source dir

<!-- -->

    git clone --recursive git://github.com/spring/spring.git -b develop
    cd spring
    git clone https://github.com/spring/mingwlibs

- update it from time to time with: `git pull --rebase`

<!-- -->

- Make sure you install the package in the checkout directory, so the path is: /spring/mingwlibs. If done right, it will look like:
  - \*/spring/
  - \*/spring/...
  - \*/spring/mingwlibs
  - \*/spring/rts

<!-- -->

- Note: if you install the package somewhere else (preferably outside of the source tree), and pass its location with the *MINGDIR* option to CMake in the configure step (see further down, in the quick instructions).

### configure using CMake

Note, as of 2020, cmake-3.10.1-win64-x64.msi from <a href="https://cmake.org/files/v3.10/" class="external free" rel="nofollow">https://cmake.org/files/v3.10/</a> works, 3.18 has issues detecting zlib.

- run the *cmake-gui* and select a source and a build directory

- press **Configure** and follow the instructions

- specify native compilers by entering the paths to gcc.exe and g++.exe from your mingw64-builds directory

- if you wish to build the full portable version (install-spring), then make sure to set the CMAKE_INSTALL_PREFIX as well

- In case of configuration errors make sure AI_TYPES variable is set to NONE (default is ALL). This should remedy the issues press **Configure** again (Remark: Setting NATIVE works as well (tested in commit 9108cae116))

- This is where you can specify the build type, REL for release, DEBUG for debug build, and RELWITHDEBINFO for a mix

- press **Generate**

- open a console (*cmd.exe*), *cd* into your **build** directory

- *optional:* for multi-threaded compilation, the *mingw32-make* part may differ on your system:

      set MAKE_COMMAND=mingw32-make -j2

  (use -j4 for 4 threads). For codeblocks configure CMAKE_CODEBLOCKS_MAKE_ARGUMENTS as -j4

- compile with:

      mingw32-make install-spring

- compile just the engine (spring.exe) with:

      mingw32-make engine-legacy

#### Generating the AI Sources/Wrappers

you can either build the wrapper:

`make Cpp-AIWrapper`

or generate all sources, in case you don't need the binary:

`make generateSources`

#### Possible Problems

- If you have successfully compiled but don't have an ingame graphical user interface and no widgets working, you could try downloading and compiling from the maintenance branch instead develop.

` git clone --recursive `<a href="git://github.com/spring/spring.git" class="external free" rel="nofollow"><code>git://github.com/spring/spring.git</code></a>` -b maintenance `

- If you get undefined reference to \`\_Unwind_Resume' linking errors, deinstall *whole* MinGW and reinstall it with *sjlj*.

<!-- -->

- When you installed an old version of MinGW/TDM and forgot to deinstall it correctly, `gcc.exe` & `g++.exe` will be named `gcc-dw2.exe`/`g++-dw2.exe`. CMake will then fail to find the correct one, first try to deinstall anything mingw related and reinstall everything. If that didn't helped just rename the files. If even that doesn't help open cmake-gui and click the advanced button and set the paths to the correct files yourself (`CMAKE_C_COMPILER` & `CMAKE_CXX_COMPILER`).

#### Notes

You can still use Visual Studio 2012 as described below to edit the code. This is very useful because it allows excellent code navigation, and it highlights syntax errors and trivial mistakes before compiling.

For debugging mingw builds, you can aquire a windows build of gdb from <a href="http://www.equation.com/servlet/equation.cmd?fa=gdb" class="external free" rel="nofollow">http://www.equation.com/servlet/equation.cmd?fa=gdb</a>

To start debugging, copy *gdb.exe* to your build output directory, and launch it with *gdb spring.exe*. You can supply command line arguments to *spring.exe* with *gdb --args spring.exe myreplayfile.sdf*

## Compiling with Visual Studio (not officially supported!)

Currently Visual Studio lacks some c++ features it doesn't compile spring!

### General Visual Studio Notes

When developing using Visual Studio keep in mind:

- It's experimental and not proved to compile or run!
- Your VS build won't sync with GCC builds in multiplayer mode
- AIs built with Visual Studio will work with the mingw32 release builds thanks to the C AI Interface, however this interface may change when newer releases are made
- Running any non-LUA AI on VS built Spring will crash it

#### 2012 (v11)

Install <a href="http://www.microsoft.com/visualstudio/eng/downloads#d-express-windows-desktop" class="external text" rel="nofollow">Visual Studio 2012 Express for Windows Desktop</a>, <a href="http://www.microsoft.com/en-us/download/confirmation.aspx?id=35515" class="external text" rel="nofollow">Visual C++ Compiler November 2012 CTP</a>, <a href="http://www.cmake.org/" class="external text" rel="nofollow">cmake</a>, <a href="http://www.7-zip.org" class="external text" rel="nofollow">7-zip</a> and <a href="http://msysgit.github.io/" class="external text" rel="nofollow">msysgit</a>.

From the Startmenu run "VS2012 x86 Native Tools Command Prompt" and type:

    set PATH=%PATH%;%PROGRAMFILES%\git\bin;%PROGRAMFILES%\cmake 2.8\bin\
    git clone --recursive git://github.com/spring/spring.git -b develop
    cd spring
    git clone git://github.com/spring/vclibs11.git vclibs
    cmake -G "Visual Studio 11" .

Now start visual studio & open Spring.sln. Select "engine-legacy" as default project, as AIs and ofter stuff are known to fail to compile on visual studio.

In the Project Properties, make sure to <a href="http://stackoverflow.com/questions/13238408/variadic-template-in-vs-2012-visual-c-november-2012-ctp" class="external text" rel="nofollow">select the Microsoft Visual C++ Compiler Nov 2012 CTP</a>.

Note: Visual Studio 2012 Express for Windows Desktop is for free, but requires a registration after 30 days (to get a free license).

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Building Spring on Windows](https://springrts.com/wiki/Building_Spring_on_Windows).*
