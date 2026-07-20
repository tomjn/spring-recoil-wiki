---
title: "Building Spring on Linux"
source_url: "https://springrts.com/wiki/Building_Spring_on_Linux"
categories:
  - "Compiling"
  - "Linux"
---
# Building Spring on Linux

<div class="mw-parser-output">

[Development](/development-main) \< [Building Spring](/building-spring) \< Building Spring on Linux

## Build From Source on Linux

If you prefer to use your distributions package system (release versions only), refer to the Linux [SetupGuide](/setupguide).

If there is no package tailored for your distribution, you have to install from sources manually. Doing this for distributions where packages are available is not recommended.

**Warning:**\
**Be careful when building from source.**\
You might encounter sync errors in online play if: 

- you are using an untested compiler (*gcc* from the \>=4.6 series should be safe)
- you use non-standard compiler settings (be careful about *-march*)!

### Obtaining the Source

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

## Get Dependencies

To compile, you will have to install some development packages Spring depends on. These vary from distro to distro and may also depend on your specific configuration.

If your distributions is not listed below, you should be able to figure out the correct package names from this.

### Full list

- Programs necessary to build
  - *cmake*
  - *7zip* (aka *p7zip* or *7z*)
  - The usual build toolchain
    - *gcc*
    - *make*
- Libraries
  - SDL2
  - *libdeviL* (IL)
  - OpenAL (openal-soft, older openal-0.0.8 does not work)
  - OpenGL headers (mesa, GLEW, etc.)
  - *zlib*
  - *freetype* (2)
  - *ogg*, *vorbis* and *vorbisfile*
  - *curl*
- Optional (for AI Interfaces, Skirmish AIs and unit tests)
  - *python* (2.5+)
  - *jdk* (1.5+)
  - *boost* (version 1.47 or later)
    - *chrono*
    - *filesystem*
    - *threads*
    - *system*
    - *chrono*

### Debian

For Jessie (debian 8.0 stable) this should work:

    sudo apt-get install build-essential zlib1g-dev libfreetype6-dev cmake \
    libsdl2-dev libopenal-dev libglew-dev zip libvorbis-dev libxcursor-dev \
    libdevil-dev libboost-system1.55-dev libboost-thread1.55-dev \
    libboost-regex1.55-dev libboost-serialization1.55-dev \
    libboost-program-options1.55-dev libboost-chrono1.55-dev \
    libunwind-dev  libboost-filesystem1.55-dev \
    libboost-signals1.55-dev libboost-test1.55-dev \
    xsltproc libfontconfig1-dev libcurl4-openssl-dev

#### Ubuntu

    # compiler and build tools
    sudo apt-get install build-essential cmake cmake-gui git 

    # spring dependencies
    sudo apt-get install libglew-dev libsdl2-dev libdevil-dev libopenal-dev \
     libogg-dev libvorbis-dev libfreetype6-dev p7zip-full libxcursor-dev \
     libboost-thread-dev libboost-regex-dev libboost-system-dev \
     libboost-program-options-dev libboost-signals-dev \
     libboost-chrono-dev libboost-filesystem-dev libunwind8-dev \
     default-jdk libcurl4-gnutls-dev

to speed up compiling/linking, you can install gold, an alternative linker and when you plan to develop / recompile often ccache :

    sudo apt-get install binutils-gold ccache

to make ccache useful, the cache size needs to be increased by:

    ccache -M 5G

to set it to 5GB.

### Gentoo

This has been tested to work with a clean install of gentoo 2008.0:

    emerge cmake \>=media-libs/freetype-2.0.0 \>=media-libs/libsdl-2
    emerge media-libs/openal media-libs/glew dev-libs/boost
    emerge app-arch/zip media-libs/libogg
    USE="png jpg tiff opengl" emerge media-libs/devil 

Or better you install Spring via [layman](/gentoo-install), it will install all dependencies.

### Fedora

On Fedora 31:

    sudo dnf install gcc-c++ cmake boost-devel DevIL-devel freetype-devel libunwind-devel \
    glew-devel libvorbis-devel libXcursor-devel openal-devel SDL2-devel p7zip jsoncpp-devel

### Slackware

On Slackware 13, cmake, ogg & vorbis, boost, glew and SDL2 already come with the full regular install, both libs and headers. You can find helper scripts to easily compile and package DevIL, OpenAL and spring itself <a href="http://slackbuilds.org/" class="external text" rel="nofollow">here</a>.

Try to use <a href="http://idlemoor.github.io/slackrepo/" class="external text" rel="nofollow">slackrepo</a>, will search, update and install spring and dependences.

## Build And Install

### Using CMake (2.6 or newer)

Configure and build:

    cmake .
    make spring

Install:

    make install-spring

Default install paths are:

`/usr/local/bin/spring` Spring executable

`/usr/local/share/games/spring` read-only data

If you want `~/spring` prefix instead of `/usr/local`, configure like this:

    cmake -DCMAKE_INSTALL_PREFIX=~/spring .

For further ways of customizing your build, have a look at the variables shown with:

    cmake -LH .

For other targets see the output of `make help`.

## See Also:

- [Finalizing_linux_install](/finalizing-linux-install)
- [Troubleshooting_linux](/troubleshooting-linux)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Building Spring on Linux](https://springrts.com/wiki/Building_Spring_on_Linux).*
