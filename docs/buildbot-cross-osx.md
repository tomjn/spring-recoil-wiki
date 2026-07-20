---
title: "Buildbot:Cross OSX"
source_url: "https://springrts.com/wiki/Buildbot:Cross_OSX"
categories:
  - "Buildbot"
---
# Buildbot:Cross OSX

<div class="mw-parser-output">

    osxcross setup

    Requires a Mac computer ( only to get the sdk )
    '''

    Packaging the SDK on Mac OS X:

        [Download Xcode **]
        [Mount Xcode.dmg (Open With -> DiskImageMounter) ***]
        Run: ./tools/gen_sdk_package.sh (from the OSXCross package)
        Copy the packaged SDK (*.tar.* or *.pkg) on a USB Stick
        (On Linux/BSD) Copy or move the SDK into the tarballs/ directory of OSXCross.

    ** Xcode up to 7.3.x is known to work.

    '''

    $ git clone https://github.com/tpoechtrager/osxcross.git

    $ cd osxcross

    place the generated sdk file under tarballs

    $ CC=gcc CXX=g++ ./build.sh

    $ CC=gcc CXX=g++ GCC_VERSION=4.9.4 ./build_gcc.sh

    $ export PATH="${PATH}:/home/spring/osxcrss/target/bin"

    $ export MACOSX_DEPLOYMENT_TARGET="10.11"

    $ cmake -DCMAKE_TOOLCHAIN_FILE=/home/spring/Platform-OSX.cmake -DSDL2_INCLUDE_DIR=/home/spring/osxcross/target/macports/pkgs/opt/local/include/SDL2 -GNinja ..

    '''
    set(CMAKE_SYSTEM_NAME "Darwin" CACHE STRING "")
    set(CMAKE_SYSTEM_VERSION "10.11" CACHE STRING "")
    set(TARGET_ARCH "x86_64" CACHE STRING "")

    set(CMAKE_C_COMPILER "o64-gcc" CACHE STRING "")
    set(CMAKE_CXX_COMPILER "o64-g++" CACHE STRING "")
    set(CMAKE_AR "x86_64-apple-darwin15-ar" CACHE STRING "")
    set(CMAKE_RANLIB "x86_64-apple-darwin15-ranlib" CACHE STRING "")
    set(PKG_CONFIG_EXECUTABLE "x86_64-apple-darwin15-pkg-config" CACHE STRING "")

    set(CMAKE_OSX_SYSROOT "/home/spring/osxcross/target/SDK/MacOSX10.11.sdk" CACHE STRING "")
    set(CMAKE_FIND_ROOT_PATH "/home/spring/osxcross/target/macports/pkgs/opt/local" CACHE STRING "")

    include_directories("/home/spring/osxcross/target/macports/pkgs/opt/local/include")
    link_directories("/home/spring/osxcross/target/macports/pkgs/opt/local/lib")
    '''

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Buildbot:Cross OSX](https://springrts.com/wiki/Buildbot:Cross_OSX).*
