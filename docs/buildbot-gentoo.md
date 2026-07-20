---
title: "Buildbot:Gentoo"
source_url: "https://springrts.com/wiki/Buildbot:Gentoo"
categories:
  - "Buildbot"
---
# Buildbot:Gentoo

<div class="mw-parser-output">

This page is WIP! (don't expect these instructions to work, they only give a hint, how it should/could work...)

Its best to run a 64 bit gentoo, as x32 can be easily compiled, too.

## buildbot-slave (for interacting with spring's buildbot)

on springrts.com in /home/buildbot/master/passwords.py a user and password must be added. this username is needed to connect the buildslave client to the master.

install buildbot on the slave:

    emerge dev-util/buildbot-slave

add a local user which is used to build:

    useradd -s /bin/false -d /home/buildslave -m buildslave

create the buildslave config

    buildslave create-slave /home/buildslave springrts.com:9989 <buildbot user in passwords.py> <password in passwords.py>

make it autostart:

    rc-update add buildslave default

adjust config

    nano /etc/conf.d/buildslave

warning! you should use an ssh-tunnel to connect to the master as the password is sent in cleartext!

## Setup gentoo win32 buildslave

Note: boost and spring has to be compiled with the same compiler! If you get weird linker errors then this could be the cause!

tools required for compiling

    emerge layman mercurial app-arch/p7zip-9.13 dev-util/cmake app-arch/zip wine crossdev app-portage/portage-utils
    layman -a ohnobinki
    echo "source /var/lib/layman/make.conf" >> /etc/portage/make.conf
    CHOST=i686-mingw32 ROOT=/usr/i686-mingw32 emerge pthreads-win32
    USE="openmp cxx -fortran" crossdev i686-mingw32 --env 'EXTRA_ECONF="--disable-sjlj-exceptions --with-dwarf --enable-gomp --disable-shared"'

for java ai's / interface install a jdk

    emerge -va oracle-jdk-bin

Install i686-mingw32 compiler, then pthreads, then recompile i686-mingw32 with pthreads enabled

    USE="openmp cxx -fortran" crossdev i686-mingw32 --env 'EXTRA_ECONF="--disable-sjlj-exceptions --with-dwarf"'
    CHOST=i686-mingw32 ROOT=/usr/i686-mingw32 emerge -va pthreads-win32
    USE="openmp cxx -fortran" crossdev i686-mingw32 --env 'EXTRA_ECONF="--disable-sjlj-exceptions --with-dwarf --disable-shared"'
    emerge-wrapper --init

### stuff that needs to be compiled native (not with mingw)

    emerge ncurses cmake eselect eselect-boost
    ACCEPT_KEYWORDS="~x86" emerge boost-build

## mingw64 32 bit

    USE="openmp cxx -fortran -multilib static-libs" crossdev --env 'EXTRA_ECONF="--disable-shared"' -t i686-w64-mingw32

TODO: see <a href="http://sourceforge.net/apps/trac/mingw-w64/wiki/Cross%20Win32%20and%20Win64%20compiler" class="external free" rel="nofollow">http://sourceforge.net/apps/trac/mingw-w64/wiki/Cross%20Win32%20and%20Win64%20compiler</a>

## Setup static linux

create /etc/portage/package.use/spring-static-buildslave:

    sys-libs/zlib static-libs minizip
    media-libs/devil static-libs opengl png jpeg tiff gif X
    media-libs/giflib static-libs
    media-libs/tiff static-libs
    dev-libs/boost static-libs python
    media-libs/jpeg  static-libs
    media-libs/libsdl2 -audio opengl static-libs X
    media-libs/libvorbis static-libs
    media-libs/libogg static-libs
    media-libs/freetype static-libs autohinter
    media-libs/glew static-libs
    media-libs/libpng static-libs
    x11-libs/libXcursor static-libs
    app-arch/bzip2 static-libs
    x11-libs/libXdmcp static-libs
    x11-libs/libXrender static-libs
    x11-libs/libX11 static-libs
    x11-libs/libXfixes static-libs
    x11-libs/libxcb static-libs
    x11-libs/libXau static-libs
    net-misc/curl static-libs
    dev-libs/openssl static-libs
    sys-libs/libunwind static-libs

### set compile flags on 64 bit gentoo

this is only required on 64bit gentoo!

if you don't add -fPIC you mostly will get errors like his:

    relocation R_X86_64_32 against `a local symbol' can not be used when making a
    shared object; recompile with -fPIC
    /usr/lib/gcc/x86_64-pc-linux-gnu/4.1.1/../../../../lib64/libfl.a: could not
    read symbols: Bad value

/etc/portage/env/spring-static-buildslave:

    CFLAGS="${CFLAGS} -fPIC"
    CXXFLAGS="${CXXFLAGS} -fPIC"
    LDFLAGS="${LDFLAGS} -fPIC"

/etc/portage/package.env/spring-static-buildslave:

    sys-libs/zlib spring-static-buildslave
    media-libs/devil spring-static-buildslave
    media-libs/giflib spring-static-buildslave
    media-libs/tiff spring-static-buildslave
    dev-libs/boost spring-static-buildslave
    media-libs/jpeg spring-static-buildslave
    media-libs/libsdl2 spring-static-buildslave
    media-libs/libvorbis spring-static-buildslave
    media-libs/freetype spring-static-buildslave
    media-libs/glew spring-static-buildslave
    sys-devel/gcc spring-static-buildslave
    media-libs/libpng spring-static-buildslave
    x11-libs/libXcursor spring-static-buildslave

### install needed programs and libs

Emerge gcc-4.7.2

    emerge -va =sys-devel/gcc-4.7.2

enable / use it

    gcc-config x86_64-pc-linux-gnu-4.7.2
    env-update && source /etc/profile

re-install required libs with changed use flags:

    emerge -va sys-libs/zlib media-libs/devil dev-libs/boost media-libs/jpeg media-libs/libsdl2 \
    media-libs/libvorbis media-libs/freetype media-libs/glew media-libs/libpng x11-libs/libXcursor \
    app-arch/bzip2 x11-libs/libXdmcp x11-libs/libXrender x11-libs/libX11 x11-libs/libXfixes \
    x11-libs/libxcb x11-libs/libXau net-misc/curl sys-libs/libunwind

### tune

use ld.gold for linking:

    binutils-config --linker ld.gold

## 32 bit buildbot on a 64 bit slave

switch back to the standard linker as glibc doesn't compile with ld.gold if you get this error: "These critical programs are missing or too old: as ld"

    binutils-config --libc 2.11.3 --linker ld.bfd

    USE="openmp cxx -fortran" crossdev --target i686 --gcc 4.8.5 --libc 2.17
    mkdir -p /usr/i686-pc-linux-gnu/etc/portage/package.use/
    vi /usr/i686-pc-linux-gnu/etc/portage/package.use/spring-static-buildslave

    sys-libs/zlib static-libs minizip
    media-libs/devil static-libs opengl png jpeg tiff gif X
    media-libs/giflib static-libs
    media-libs/tiff static-libs -cxx
    dev-libs/boost static-libs -python
    media-libs/jpeg  static-libs
    media-libs/libsdl2 -audio opengl static-libs X
    media-libs/libvorbis static-libs
    media-libs/libogg static-libs
    media-libs/freetype static-libs autohinter
    media-libs/glew static-libs
    media-libs/libpng static-libs
    x11-libs/libXcursor static-libs
    app-arch/bzip2 static-libs
    x11-libs/libXdmcp static-libs
    x11-libs/libXrender static-libs
    x11-libs/libX11 static-libs
    x11-libs/libXfixes static-libs
    x11-libs/libxcb static-libs
    x11-libs/libXau static-libs
    dev-libs/gmp static-libs
    dev-libs/mpfr static-libs
    dev-libs/mpc static-libs
    net-misc/curl static-libs
    dev-libs/openssl static-libs
    dev-java/oracle-jdk-bin -X -fontconfig
    sys-libs/libunwind static-libs

    (
      echo PYTHON_TARGETS="python2_7"
      echo USE="${USE} -pam -llvm -tools -uuid -kmod -classic -dri3 -egl -gallium -gbm -nptl -udev -fortran"
    )>> /usr/i686-pc-linux-gnu/etc/portage/make.conf

force old version of glibc for more compatibility of the generated executable:

    mkdir -p /usr/i686-pc-linux-gnu/etc/portage/package.mask
    echo '>sys-libs/glibc-2.17' > /usr/i686-pc-linux-gnu/etc/portage/package.mask/glibc
    emerge-i686-pc-linux-gnu -va --nodeps dev-libs/libffi =dev-lang/python-2.7.11-r2
    i686-pc-linux-gnu-emerge -va dev-util/pkgconfig x11-misc/util-macros

build all libs: (we use --nodeps as else it would pull in A LOT of dependencies which aren't required. because of --nodeps, the order of parameters matters!)

    emerge-i686-pc-linux-gnu -va --nodeps \
    sys-libs/zlib \
    app-arch/bzip2 \
    dev-libs/boost \
    media-libs/tiff \
    media-libs/jpeg \
    media-libs/libvorbis \
    media-libs/freetype \
    media-libs/libpng \
    media-libs/openal \
    dev-libs/openssl \
    net-misc/curl \
    =sys-libs/libunwind-0.99-r1 \
    x11-libs/libXdmcp \ 
    x11-libs/libXau \
    =x11-libs/libxcb-1.10 \
    x11-libs/libX11 \
    x11-libs/libXrender \
    x11-proto/fixesproto \
    x11-libs/libXfixes \
    x11-libs/libXcursor \
    x11-libs/libdrm \
    x11-proto/glproto \
    x11-libs/libXext  \
    x11-libs/libXdamage \
    x11-proto/dri2proto \
    media-libs/mesa \
    media-libs/glu \
    media-libs/glew \
    media-libs/devil \
    media-libs/libsdl2

## patches

gcc omp patch: <a href="http://gcc.gnu.org/bugzilla/attachment.cgi?id=28752" class="external free" rel="nofollow">http://gcc.gnu.org/bugzilla/attachment.cgi?id=28752</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Buildbot:Gentoo](https://springrts.com/wiki/Buildbot:Gentoo).*
