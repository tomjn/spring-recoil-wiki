---
title: "Debian install"
source_url: "https://springrts.com/wiki/Debian_install"
categories:
  - "Linux"
---
# Debian install

<div class="mw-parser-output">

[Linux Setup Guide](/setupguide) \< Debian install

[<img src="/images/Debian.png" decoding="async" width="50" height="61" alt="Debian.png" />](/images/Debian.png)

For packaging requests or complaints, please contact [the packagers](/linux-packaging#debian).

## Debian

### 6.0 (Squeeze - Unstable)

**Official packages** are available at usual mirrors so just:

    sudo apt-get install spring
    sudo apt-get install springlobby

will give you the latest packaged and uploaded release of spring for debian.

Debians info page for the spring packages can be found here: <a href="http://packages.debian.org/sid/spring" class="external free" rel="nofollow">http://packages.debian.org/sid/spring</a>

The packages from unstable are usually up to date, if you always want to use the latests spring packages you should add the following line to your /etc/apt/sources.list

    deb http://ftp.de.debian.org/debian sid main

If you don't want to use unstable for your system you need to use apt pinning or add a file with the following content in /etc/apt/apt.conf.d/ (i.e. /etc/apt/apt.conf.d/99default):

    APT::Default-Release "stable";

### 5.0 (Lenny)

Version tested: 0.79.1.2

1.  Install needed packages for compiling (as superuser or sudoer)\
    \
    `aptitude install build-essential p7zip-full zlib1g-dev libfreetype6-dev libsdl1.2-dev libopenal-dev libglew-dev libdevil-dev zip libvorbis-dev libxcursor-dev libglew1.5-dev libboost1.35-dev cmake libwxgtk2.8-dev`\
2.  Unpack Spring tarball, cd into its directory and compile (as user)\
    \
    `cd spring-directory`\
    `cmake .`\
    `make`\
3.  Install as superuser or sudoer\
    \
    `make install`\
4.  Unpack Spring Lobby, cd into its directory, compile and install\
    \
    `cd springlobby-directory`\
    `./configure --disable-torrent-system --disable-sound`\
    `make`\
5.  Install as superuser or sudoer\
    \
    `make install`

**Optional:**

You can install checkinstall and create a deb package by substituting **make install** with:

`checkinstall make install`

This will create a deb file along with installing it so next time you can remove it with:

`dpkg -r spring-<version> springlobby`

### 4.0 (Etch)

This is not updated for 0.76b1. Somebody check if the install succeeds for the new release this way?

This is for version 0.75b2.

We need to use Yokozar's Ubuntu package, so we need some tricks.

The --build step will take about 15 minutes. Hopefully we have precompiled binaries for etch soon too.

    wget -q http://ppa.launchpad.net/spring/ubuntu/387EE263.gpg -O- | \
        sudo apt-key add -

    wget http://ppa.launchpad.net/spring/ubuntu/sources.list.d/gutsy.list \
        -O /etc/apt/sources.list.d/springproject.list

    sudo apt-get update
    sudo apt-get build-dep spring -y
    sudo apt-get --build source spring -y
    sudo dpkg -i spring_0.75~b2-1_i386.deb spring-data_0.75~b2-1_all.deb

If you want to install SpringLobby also, follow the instructions later on in this guide.

Your paths are: Spring executable in `/usr/games/spring ` and read-only data in `/usr/share/games/spring`.

## See Also:

- [Finalizing_linux_install](/finalizing-linux-install)
- [Troubleshooting_linux](/troubleshooting-linux)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Debian install](https://springrts.com/wiki/Debian_install).*
