---
title: "Building Spring Cross Compiled"
source_url: "https://springrts.com/wiki/Building_Spring_Cross_Compiled"
categories:
  - "Linux"
---
# Building Spring Cross Compiled

<div class="mw-parser-output">

[Development](/development-main) \< [Building Spring](/building-spring) \< Building Spring Cross Compiled

Cross-compiling allows you to build for other platforms than the machine you are building on. You can, for example, compile Windows 32-bit binaries on a Linux 64-bit machine.

## Obtaining the Source

#### Tarballs

**(For playing online official games on lobby.springrts.com - the spring lobby server)**

Using [Git](/templates/obtaining-the-source-code#git) is the recommended way to get the sources of the engine. In spite of, you can use the [official tarballs](/download#latest-stable-snapshot) to compile Spring without git.\

**Note:** Do NOT use the zip-files from github, they are missing important data to compile Spring.

See [Building spring](/building-spring) for build instructions.

#### Git

<a href="https://github.com/spring/spring" class="external text" rel="nofollow">Spring project page at github</a>

Master repo URI: ` `<a href="git://github.com/spring/spring.git" class="external free" rel="nofollow"><code>git://github.com/spring/spring.git</code></a>` `\
Backup repo: <a href="git://git.code.sf.net/p/springrts/code" class="external free" rel="nofollow"><code>git://git.code.sf.net/p/springrts/code</code></a>

Branches of interest:

- master - latest stable, enforced for official games on lobby.springrts.com
- maintenance - fixes for the latest stable
- develop - major developments (most active, larger developments)

Assuming the GIT command line client is installed, you can clone (get locally) the repository with the commands below.

##### Latest Stable (master branch, useless for development purposes, lives as maintenance moving forward)

    git clone --recursive git://github.com/spring/spring.git -b master

To later update it (get the changes other people did) with:

    git pull --rebase

##### Maintenance (maintenance branch)

    git clone --recursive git://github.com/spring/spring.git -b maintenance

##### Bleeding-edge (develop branch)

    git clone --recursive git://github.com/spring/spring.git -b develop

##### Working with git

Please note that patches to the code must be done for either develop or maintenance. Such patches can be then sent to one of the developers with repository access. If you are new to git and github, you may want to have a look at <a href="http://help.github.com/" class="external text" rel="nofollow">this guide</a> to get you started.

Note: you can switch `branches` this way:

<div class="mw-highlight mw-highlight-lang-bash mw-content-ltr" dir="ltr">

    # (optional) backup your current code changes
    git stash

    # switch branch
    git checkout $MY_OTHER_BRANCH

    # sometimes needed
    # note, it deletes all your unstashed changes and all non-pushed commits on the new branch,
    # but it doesn't delete untracked files.
    #git reset --hard 

    # update/sync with remote repo
    git pull --rebase

    # (optional) if you want to apply the code changes backed-up in the first step
    #git stash pop # reapplies your changes and DELETES the backup
    # or
    #git stash apply --index 0  # reapplies your changes and keep the backup (see `git stash list`)

</div>

##### Submodules

To obtain the submodules you should clone the repository with --recursive as mentioned above. If you haven't done this, you can execute the following code

<div class="mw-highlight mw-highlight-lang-bash mw-content-ltr" dir="ltr">

    git submodule sync
    git submodule update --init

</div>

To update the submodules, you have to execute the same commands again or pull normally.

## CMake cross compiling

### Setting up the cross compiler

The compiler is called MinGW, which is a port of GCC to windows. The version are going to need is MinGW GCC 4.4.0 (which is MinGW 2.7) or later. Most Linux distributions come with MinGW-GCC 4.1.2 only in their standard repos (Summer 2009), so you have to do extra work to get 4.4.0+.

#### Gentoo

    emerge crossdev
    EXTRA_ECONF="--with-dwarf2 --disable-sjlj-exceptions" crossdev -t i686-mingw32

Additional instructions can be found <a href="http://en.gentoo-wiki.com/wiki/Crossdev" class="external text" rel="nofollow">here</a> or <a href="http://psas.pdx.edu/GentooCrossCompilerHowto/" class="external text" rel="nofollow">here</a>.

#### Ubuntu 10.04

Use the repository specified <a href="https://launchpad.net/~tobydox/+archive/mingw" class="external text" rel="nofollow">mingw ppa</a>, and then install the required packages:

` `

      sudo add-apt-repository ppa:tobydox/mingw
      sudo apt-get update
      sudo apt-get install mingw32-x-binutils mingw32-x-gcc mingw32-x-runtime mingw-x-w32api

#### Ubuntu 11.10

see the section <a href="https://github.com/spring/spring/blob/develop/buildbot/README.markdown" class="external text" rel="nofollow">Recompile MinGW package with dwarf2 exceptions instead of sjlj exceptions</a>.

#### Other distros

You have to find a way yourself, or use <a href="http://www.profv.de/mingw_cross_env/#tutorial" class="external text" rel="nofollow">these</a> instructions to get the sources and compile it yourself. When doing so, make sure to use these build flags for gcc:

` --with-dwarf2 --disable-sjlj-exceptions --enable-shared --enable-version-specific-runtime-libs `

you can add them under *src/gcc-core.mk*.

*Note:* This method will most likely not work anymore, as the checksum of the build files is checked by the makefile.

Alternatively, use this line to compile all the deps (which will then be used instead of mingwlibs):

    make zlib boost devil ogg vorbis openal freetype sdl glew gcc

### Getting Spring's windows dependencies

These are called **mingwlibs**. How to get them is described below.

#### official MinGW - dwarf2 (default)

You can get it here (**Download Source** button, or use *git*):

- <a href="http://github.com/spring/mingwlibs" class="external text" rel="nofollow"><strong>mingwlibs</strong></a>

#### TDM MinGW - sjlj (alternative)

<a href="http://github.com/spring/spring/downloads" class="external free" rel="nofollow">http://github.com/spring/spring/downloads</a>

### Setting up your directories

Here is my recommended layout

    ~/spring-xcompile/   (or wherever you want to put it all)
    ___ spring/   (the spring source)
    ___ win32/    (your target platform)
    _______ build/ (the build files for your target will go here)
    _______ final/ (the compiled binaries and libs will be installed here)
    _______ libs/  (mingwlibs, the target libraries you just downloaded)
    _______ win32.cmake (see below)

### Create your cmake toolchain

Create the toolchain file:

    pico "~/spring-xcompile/win32/win32.cmake"

#### Example toolchain file

An example should be self-explanatory:

    # the name of the target operating system
    SET(CMAKE_SYSTEM_NAME Windows)

    # which compilers to use for C and C++
    SET(CMAKE_C_COMPILER i686-mingw32-gcc)
    SET(CMAKE_CXX_COMPILER i686-mingw32-g++)

    # here is the target environment located
    SET(CMAKE_FIND_ROOT_PATH /usr/i686-mingw32)

    # the spring mingw32 dependencies
    SET(MINGWLIBS ~/spring-xcompile/win32/libs)

    # the path that make install will use to put the final binaries
    SET(CMAKE_INSTALL_PREFIX ~/spring-xcompile/win32/final)

Pass this with `-DCMAKE_TOOLCHAIN_FILE=~/spring-xcompile/win32/win32.cmake` to cmake or select it in the gui to make a cross-compilation (see below).

#### Some Options Explained

- **MINGWLIBS**: absolute path to the directory where [**mingwlibs**](/building-spring-cross-compiled#getting-spring27s-windows-dependencies) are located
- **CMAKE_INSTALL_PREFIX**: installation prefix (defaults to */usr/local*) defines the base directory for installing
- **DATADIR**, **LIBDIR**, **BINDIR**: where to install data, libraries or binaries (relative paths are based on *CMAKE_INSTALL_PREFIX*, absolute paths are absolute (*DESTDIR* is still respected))
- **APPLICATIONS_DIR**, **MIME_DIR**, **PIXMAPS_DIR**: where to install freedesktop-files (icons, mime-types and application-description)

#### Further reference

- <a href="http://www.vtk.org/Wiki/CMake_FAQ" class="external text" rel="nofollow">CMake FAQ</a>
- *man CMake*
- <a href="http://www.cmake.org/HTML/cmake-2.6.html" class="external text" rel="nofollow">CMake documentation</a> (long!)

### Run CMake

#### The GUI method

CMake offers a nice Qt4 gui to ease the following steps (to use the gui explained here, cmake must be at least version 2.6.1). Doing so should be straightforward:

- run `cmake-gui`
- select source directory
- select (and/or create) build directory where temporary files are stored
- hit configure button
- choose your build type:
  - Unix makefile if you are using linux and want to compile linux executables
  - mingw makefiles if you are working on windows
  - Unix makefile with cross compiler setup to cross-compile mingw32 executables, you have to select the toolchain file you want to use (see below)
- configure variables to your need (move the mouse over the options and read the tooltip for further informations on them and or see Section "Options")
- push generate button
- open commandline and do "make" and "make install"

#### The commandline method

- cd to build directory

<!-- -->

    cd ~user/spring-xcompile/win32/build

- `cmake <path to source tree> <options>` where:
  - `<path to source tree>` is the path to the spring source directory
  - `<options>` are defined like `-D<option name>=<value>`

<!-- -->

- IMPORTANT: depending on your settings you may need to run this command twice. It can't hurt so I recommend doing it anyway.

<!-- -->

    cmake "~user/spring-xcompile/spring" "-DCMAKE_TOOLCHAIN_FILE=~user/spring-xcompile/win32/win32.cmake"

- run `make` and `make install`

<!-- -->

    make spring && make install-spring DESTDIR=~user/spring-xcompile/win32/final

to show other build targets type: `make help`

### Package Maintainers Note:

- doing `make install DESTDIR=/some/path` will install spring in the specified place, putting files in subdirectories like configured. This may be helpful when making packages so Spring don't get installed on your system for real (see also CMake FAQ \[<a href="http://www.vtk.org/Wiki/CMake_FAQ#Does_CMake.27s_.22make_install.22_support_DESTDIR.3F" class="external autonumber" rel="nofollow">[1]</a>\]).
- You need to update the mime database (`update-mime-database`) and the kde database (`kbuildsycoca`) after installing to make the system aware of the newly installed mime types and desktop shortcuts.

### Buildbot

For setting up a buildbot slave, see: <a href="https://github.com/spring/spring/blob/106.0/buildbot/README.markdown" class="external text" rel="nofollow">buildbot/README.markdown</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Building Spring Cross Compiled](https://springrts.com/wiki/Building_Spring_Cross_Compiled).*
