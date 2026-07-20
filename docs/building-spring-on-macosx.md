---
title: "Building Spring on MacOSX"
source_url: "https://springrts.com/wiki/Building_Spring_on_MacOSX"
categories:
  - "Compiling"
---
# Building Spring on MacOSX

> **Recoil:** Active engine development happens on [Recoil](https://recoilengine.org/) ([GitHub](https://github.com/beyond-all-reason/RecoilEngine/)). These pages describe the older Spring engine; prefer the Recoil repo for building and contributing today.

<div class="mw-parser-output">

[Development](/development-main) \< [Building Spring](/building-spring) \< Building Spring on MacOSX

This is a guide to the requirements for building the Spring RTS engine on MacOS. If you want only to play a spring game, follow the [Spring_on_MacOSX](/spring-on-macosx) Tutorial.

## Building Spring on MacOS

**This guide is for x86/Intel based MacOS installs**

Even though it will not run, Spring should successfully compile on Mac for both 104.0 and the latest develop version.

NOTE: Only official spring versions 99.0-103.1 will compile and run on MacOS. 104+ will compile, but uses an incompatible OpenGL version. When 105.0 is released, a MacOS - compatible OpenGL version will be used, however at this point in time **there are other blocking issues**.

Questions about this process should be asked <a href="https://springrts.com/phpbb/viewforum.php?f=65" class="external text" rel="nofollow">here</a>.

## Requirements

### Command Line Tools

Install the <a href="http://developer.apple.com/TOOLS/Xcode/" class="external text" rel="nofollow">Xcode developers package</a> (this requires a free membership to apple's ADC website).

### Package Manager

Either <a href="http://brew.sh" class="external text" rel="nofollow">Homebrew</a> or <a href="http://www.macports.org/install.php" class="external text" rel="nofollow">MacPorts</a> may be used to fetch dependencies. The MacOS Buildbot (run by Turboss) uses Homebrew. The writer uses Macports.

### Compiler

Compiler: GCC must be used, and dependencies must be compiled with GCC

#### MacPorts

For MacPorts:

    port install
    sudo port select --set gcc mp-gcc8
    hash -r # Reload the terminal

To check for installed gcc: ` port select --list gcc `

#### HomeBrew

    brew install gcc@8

### Dependencies

#### MacPorts

Necessary dependencies for the develop branch are below (as called by Macports):

    port install sudo port install cmake libsdl2 p7zip libdevil libvorbis minizip openal-soft glew freetype binutils libXcursor +gcc8

(This list has not been tested for errors; please message MasterBel if they do not work for you.)

Compiling Spring 104.0 (current master) or older will also require Boost. <a href="https://sourceforge.net/projects/boost/" class="external text" rel="nofollow">Retreive source</a> and compile with gcc. **TODO: Instructions?**

#### HomeBrew

Note that this list is incomplete:

    brew install cmake minizip freetype glew openal-soft p7zip clang-format libvorbis jsoncpp PkgConfig devil sdl2

You will also need to install XQuartz for the X11 dependency, however it will install the headers in a non-standard location. Use this command to symlink it to the standard location:

    ln -s /opt/X11/include/X11 /usr/local/include/X11

### Obtaining Source

` git clone --recursive `<a href="git://github.com/spring/spring.git" class="external free" rel="nofollow"><code>git://github.com/spring/spring.git</code></a>` -b <branch> `

The “master” branch is the latest stable release. “develop” branch is the latest development release. (Note: The recursive argument is important for submodules.)\
Update with: `git pull --rebase`

## Compiling Source

    cmake . -DCMAKE_CXX_COMPILER=/path/to/bin/g++-mp-8 -DCMAKE_C_COMPILER=/path/to/bin/gcc-mp-8
    make spring

Other common Cmake flags are:

    -DGLEW_INCLUDE_DIR=/path/to/include 
    -DGLEW_LIBRARIES=/path/to/lib/libGLEW.a 
    -DOPENAL_INCLUDE_DIR=/path/to/include/AL 
    -DCMAKE_INSTALL_PREFIX:PATH=/path/to/output/directory 
    -DCMAKE_PREFIX_PATH=/path/

If boost is used: ` -DBoost_Root=/path/to/boost `

Number of simultaneous jobs may be specified by: `make spring -j<n>` Where n is number of jobs. It is common for n to be number of cores + 1

Other targets may be made also/instead, e.g.

    make prdownloader -j<n>
    make install-spring -j<n>

## Additional Notes

### Using Macports

As hint: set "buildmakejobs" to cpu-core count + 1 in /opt/local/etc/macports/macports.conf. For example: ` buildmakejobs 5 `

### Using Homebrew

Hombrew can install boost, but it must be recompiled with gcc \<version\>: ` brew install boost --build-from-source --cc=gcc<version> `

These flags were recommended by a previous editor:

    cmake . -DAPPLE=1 -DCMAKE_CXX_COMPILER=/usr/local/Cellar/gcc48/4.8.3/bin/g++-4.8 \
    -DCMAKE_C_COMPILER=/usr/local/Cellar/gcc48/4.8.3/bin/gcc-4.8 \
    -DIL_INCLUDE_DIR=/usr/local/include \
    -DGLEW_INCLUDE_DIR=/usr/local/include \
    -DOPENAL_DIR=/usr/local/include/AL \
    -DNO_SOUND=1

## Examples

### Macports

    # Example setup script (for MacOS Catalina)

    # Macports must be installed prior to running this script. Macports requires XCode to be installed.
    # Boost sources must be located in

    # Requires the following directory format:
    # $DIR (customisable; set on line 16)
    #   /setup.sh
    #   /build.sh
    #   /Sources
    #       /boost_1_68_0
    #   /Builds
    #   /Bunldes

    DIR=~/Spring # The root directory; to be set manually

    SCRIPTDIR=~/Documents/Spring/ # The directory the build script is located in

    SOURCES=$DIR/Sources
    SPRING=$SOURCES/spring
    BOOST=$SOURCES/boost_1_66_0/boost

    cd $DIR

    # Install the necessary compiler. Version gcc5 is oldest compatible with High Sierra; gcc48 is the oldest I know works
    sudo port install gcc9

    # Set compiler as default
    sudo port select --set gcc mp-gcc9
    hash -r

    sudo port install cmake libsdl2 p7zip libdevil libvorbis minizip openal-soft glew freetype binutils dylibbundler xorg-libXcursor +gcc9
    #dylibbundler is for the bundling stage, not actual dependency

    cd $SOURCES

    # Clone from git (creates the directory $SPRING for us)
    git clone --recursive git://github.com/spring/spring.git
    cd $SPRING
    git fetch --all --tags --prune
    git checkout tags/103.0 -b master

    # Install Boost

    cd $BOOST

    ./bootstrap.sh --with-toolset=gcc --with-libraries=all # Not sure which libaries.
    ./b2 # install

    # Try compiling spring

    cd $SCRIPTDIR

    sh build.sh

    # Example buildscript (for MacOS Catalina)

    # This script assumes that setup.sh (the above example) has been run.

    # Build Configuration

    BRANCH=<branch name> # The source branch to checkout and build.
    REPOSITORY=spring # The name of the folder containing the git repository.
    WIPE=0 # Wipes previous build on WIPE = 1 (flag -w)

    for arg in "$@"
    do
    if [ "$arg" == "-w" ]; then
    echo "Initiating clean build."
    WIPE=1
    else
    echo "Unknown flag ${arg}"
    fi
    done

    echo "Building sources at/to ${REPOSITORY}"

    # Directory Setup

    DIR=~/Spring # Where everything is/will be
    SOURCES=$DIR/Sources
    SPRING=$SOURCES/$REPOSITORY
    BUILD=$DIR/Builds/$REPOSITORY
    BOOST=$SOURCES/boost_1_55_0 # Where boost can be found. Must be prepared as per the setup script (above).

    MACPORTS=/opt/local # The install directory of MACPORTS

    if [ -d $BUILD ]; then
        if [ $WIPE != 0 ]; then
            echo "Wiping previous build…"
            rm -r $BUILD # Wipe preivous build

            echo "Making new build directory…"
            mkdir $BUILD # The others should have already been made
        fi
    else
        echo "Making new build directory…"
        mkdir $BUILD # The others should have already been made
    fi

    if [ -e $DIR/log.txt ]; then
        echo "Removing outdated log…"
        rm $DIR/log.txt
    fi

    # Source setup

    if [ -d $SPRING ]; then
        cd $SPRING
    else
        echo "Cloning remote…"
        cd $SOURCES
        git clone --recursive git://github.com/spring/spring.git $REPOSITORY

        cd $SPRING
    fi

    # Update repository

    CURRENTBRANCH=$(git rev-parse --abbrev-ref HEAD)

    if [ "$CURRENTBRANCH" != "$BRANCH" ]; then
    git fetch --all
    echo "Switching branch from ${CURRENTBRANCH} to ${BRANCH}"
    git checkout $BRANCH
    fi

    echo "Updating to latest…"
    git pull # Update to latest
    echo "Updating submodules"
    git submodule update

    # Metadata

    REV=$(git describe --tags)
    VERSION=`echo "${REV}" | tr '<>:\"/\\|?*' -`

    # Compile

    echo "Compiling Spring ${VERSION}"

    cd $BUILD

    cmake . $SPRING -DCMAKE_PREFIX_PATH=$MACPORTS -DCMAKE_CXX_COMPILER=$MACPORTS/bin/g++-mp-9 -DCMAKE_C_COMPILER=$MACPORTS/bin/gcc-mp-9 -DGLEW_INCLUDE_DIR=$MACPORTS/include -DGLEW_LIBRARIES=$MACPORTS/lib/libGLEW.a -DOPENAL_INCLUDE_DIR=$MACPORTS/include/AL -DBOOST_ROOT=$BOOST -DBoost_USE_STATIC_LIBS=YES -DCMAKE_CXX_FLAGS="${FLAGS}" -DCMAKE_C_FLAGS="${FLAGS}"

    make spring -j5 # >>$DIR/log.txt 2>&1

    make pr-downloader # -j5 >>$DIR/log.txt 2>&1

    make install-spring DESTDIR=$BUILD/temp #>>$DIR/log.txt 2>&1

    # Bundling spring

    BUNDLES=$DIR/Bundles
    BUNDLE=$BUNDLES/Spring_${VERSION}.app

    mkdir $BUNDLES
    mkdir $BUNDLE
    mkdir $BUNDLE/Contents
    mkdir $BUNDLE/Contents/MacOS
    mkdir $BUNDLE/Contents/Resources
    mkdir $BUNDLE/Contents/lib

    cp $BUILD/spring $BUNDLE/Contents/MacOS/spring #>>$DIR/log.txt 2>&1
    cp $SPRING/installer/Mac/spring.icns $BUNDLE/Contents/Resources/spring.icns #>>$DIR/log.txt 2>&1
    cp -R $BUILD/temp/usr/local/share $BUNDLE/Contents/share #>>$DIR/log.txt 2>&1

    cat $SPRING/installer/Mac/Info.plist | sed s/###VERSION###/${VERSION}/ > $BUNDLE/Contents/Info.plist

    cp $BUILD/tools/pr-downloader/src/pr-downloader $BUNDLE/Contents/MacOS #>>$DIR/log.txt 2>&1

    dylibbundler -cd -b -x $BUILD/temp/usr/local/lib/libunitsync.dylib -d $BUNDLE/Contents/MacOS -p @loader_path/../MacOS #>>$DIR/log.txt 2>&1

    dylibbundler -of -cd -b -x $BUNDLE/Contents/MacOS/spring -d $BUNDLE/Contents/lib -p @executable_path/../lib #>>$DIR/log.txt 2>&1

    install_name_tool -change $MACPORTS/lib/libX11.6.dylib @executable_path/../lib/libX11.6.dylib $BUNDLE/Contents/lib/libXcursor.1.dylib #>>$DIR/log.txt 2>&1

    dylibbundler -of -cd -b -x $BUNDLE/Contents/MacOS/pr-downloader -d $BUNDLE/Contents/lib -p @executable_path/../lib #>>$DIR/log.txt 2>&1

    dylibbundler -cd -b -x $BUNDLE/Contents/share/games/spring/AI/Interfaces/C/0.1/libAIInterface.dylib -d $BUNDLE/Contents/share/games/spring/AI/Interfaces/C/0.1 -p @loader_path/../0.1 #>>$DIR/log.txt 2>&1

    dylibbundler -cd -b -x $BUNDLE/Contents/share/games/spring/AI/Interfaces/Java/0.1/libAIInterface.dylib -d $BUNDLE/Contents/share/games/spring/AI/Interfaces/Java/0.1 -p @loader_path/../0.1 #>>$DIR/log.txt 2>&1

    dylibbundler -cd -b -x $BUNDLE/Contents/share/games/spring/AI/Skirmish/AAI/0.9/libSkirmishAI.dylib -d $BUNDLE/Contents/share/games/spring/AI/Skirmish/AAI/0.9 -p @loader_path/../0.9 #>>$DIR/log.txt 2>&1

    dylibbundler -cd -b -x $BUNDLE/Contents/share/games/spring/AI/Skirmish/CppTestAI/0.1/libSkirmishAI.dylib -d $BUNDLE/Contents/share/games/spring/AI/Skirmish/CppTestAI/0.1 -p @loader_path/../0.1 #>>$DIR/log.txt 2>&1

    dylibbundler -cd -b -x $BUNDLE/Contents/share/games/spring/AI/Skirmish/E323AI/3.25.0/libSkirmishAI.dylib -d $BUILD/Spring.app/Contents/share/games/spring/AI/Skirmish/E323AI/3.25.0 -p @loader_path/../3.25.0 #>>$DIR/log.txt 2>&1

    dylibbundler -cd -b -x $BUILD/Spring.app/Contents/share/games/spring/AI/Skirmish/KAIK/0.13/libSkirmishAI.dylib -d $BUILD/Spring.app/Contents/share/games/spring/AI/Skirmish/KAIK/0.13 -p @loader_path/../0.13 #>>$DIR/log.txt 2>&1

    dylibbundler -cd -b -x $BUNDLE/Contents/share/games/spring/AI/Skirmish/NullAI/0.1/libSkirmishAI.dylib -d $BUNDLE/Contents/share/games/spring/AI/Skirmish/NullAI/0.1 -p @loader_path/../0.1 #>>$DIR/log.txt 2>&1

    dylibbundler -cd -b -x $BUNDLE/Contents/share/games/spring/AI/Skirmish/RAI/0.601/libSkirmishAI.dylib -d $BUNDLE/Contents/share/games/spring/AI/Skirmish/RAI/0.601 -p @loader_path/../0.601 #>>$DIR/log.txt 2>&1

    dylibbundler -cd -b -x $BUNDLE/Contents/share/games/spring/AI/Skirmish/Shard/dev/libSkirmishAI.dylib -d $BUILD/Spring.app/Contents/share/games/spring/AI/Skirmish/Shard/dev -p @loader_path/../dev #>>$DIR/log.txt 2>&1

    if [ ! -e $BUNDLE/Contents/MacOS/spring ];then
    echo "Error: App did not build correctly. Check log for details"
    ERRORBUILD=1
    fi

    if [ "$ERRORBUILD" = "1" ]; then
        echo "Build Failed."
    fi

    echo "Done!"
    exit 0

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Building Spring on MacOSX](https://springrts.com/wiki/Building_Spring_on_MacOSX).*
