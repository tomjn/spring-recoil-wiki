---
title: "Slackware install"
source_url: "https://springrts.com/wiki/Slackware_install"
categories:
  - "Linux"
---
# Slackware install

<div class="mw-parser-output">

[Linux Setup Guide](/setupguide) \< Slackware install

[<img src="/images/Slackware.png" decoding="async" width="61" height="61" alt="Slackware.png" />](/images/Slackware.png)

For packaging requests or complaints, please contact [the packagers](/linux-packaging#slackware).

## Slackware

version 89.0 for Slackware 13.37 and 14.00 x86_64 (there is an update for boost libraries for 13.37)

There is 3 ways to install springrts for Slackware, compiling from scratch, downloading slackbuild packages, or running a script that download the slackware packages and set the game for you.

### Installing using script

There is a script named <a href="http://corec.cl/spring/spring_slackware_64b_installer.sh" class="external text" rel="nofollow">spring_slackware_64b_installer.sh</a>, you must download it and run:

` chmod +x spring_slackware_64b_installer.sh `

`su -c spring_slackware_64b_installer.sh `

The command will ask for the root password, detect Slackware version and operative system architecture. The script will create the folder `sb_packages` to save files, and then install files. (just x86_64 is ready now).

At the end you just need to run springlobby to start to play.

` springlobby `

### Installing using SlackBuilds packages

Download packages from next links and install them running as root:

` upgradepkg --reinstall --install-new *.t?z `

The packages are:

<a href="http://corec.cl/spring/DevIL-1.6.8_rc2-x86_64-3_SBo.tgz" class="external text" rel="nofollow">DevIL-1.6.8_rc2-x86_64-3_SBo.tgz</a>

<a href="http://corec.cl/spring/icu4c-4.6.1-x86_64-1_SBo.tgz" class="external text" rel="nofollow">icu4c-4.6.1-x86_64-1_SBo.tgz</a>

<a href="http://corec.cl/spring/libtorrent-rasterbar-0.15.9-x86_64-1_SBo.tgz" class="external text" rel="nofollow">libtorrent-rasterbar-0.15.9-x86_64-1_SBo.tgz</a>

<a href="http://corec.cl/spring/OpenAL-1.13-x86_64-1_SBo.tgz" class="external text" rel="nofollow">OpenAL-1.13-x86_64-1_SBo.tgz</a>

<a href="http://corec.cl/spring/p7zip-9.20.1-x86_64-1_SBo.tgz" class="external text" rel="nofollow">p7zip-9.20.1-x86_64-1_SBo.tgz</a>

<a href="http://corec.cl/spring/spring-89.0-x86_64-1_SBo.tgz" class="external text" rel="nofollow">spring-89.0-x86_64-1_SBo.tgz</a>

<a href="http://corec.cl/spring/wxGTK-2.8.12-x86_64-2_SBo.tgz" class="external text" rel="nofollow">wxGTK-2.8.12-x86_64-2_SBo.tgz</a>

<a href="http://corec.cl/spring/boost-1.49.0-x86_64-1.txz" class="external text" rel="nofollow">boost-1.49.0-x86_64-1.txz</a>

<a href="http://corec.cl/spring/springlobby-0.147-x86_64-1_SBo.tgz" class="external text" rel="nofollow">springlobby-0.147-x86_64-1_SBo.tgz</a>

The **gcc 4.7.1** force us to upgrade boost library at least to 1.48 version, we choose 1.49 to distribute with spring because that will be the version of boost in Slackware 14 (not released yet), and until know there is no problems with libraries in 13.37 slackware version.

#### maps

Here is some maps that you want

- <a href="http://springfiles.com/spring/spring-maps/deltasiegedry" class="external text" rel="nofollow">DeltaSiegeDry.sd7</a>
- FolsomDamFinal.sd7
- LLTAComplexV2.sd7
- Small_Supreme_Battlefield_V2.sd7
- SpeedMetal.sd7
- Tabula-v2.sd7
- TheRockFinal.sd7
- Tropical.sd7
- Wide Pass v3.2.sd7
- folsomdamdeluxev4.sd7

#### packages

Depending on both, architecture and version of Slackware you are using, there are different versions of packages. this is an example for Slackware 13.37.0 64bits.

- DevIL-1.6.8_rc2-x86_64-3_SBo.tgz
- OpenAL-1.12.854-x86_64-1_SBo.tgz
- icu4c-4.6.1-x86_64-1_SBo.tgz
- libtorrent-rasterbar-0.15.5-x86_64-1_SBo.tgz
- p7zip-9.13-x86_64-1_SBo.tgz
- spring-0.82.7.1-x86_64-1_SBo.tgz
- springlobby-0.131-x86_64-1_SBo.tgz
- wxGTK-2.8.12-x86_64-1_SBo.tgz

#### How to choose the correct installer file?

You need to know just 3 things: what version of spring do you want, what version of Slackware is running, and what kind of architecture you have. To know what version of spring, you just need to go to <a href="http://www.springrts.com" class="external text" rel="nofollow">http://www.springrts.com</a> and check the last version. if this page is missing the latest version, just send us a mail. To get the Slackware version of your system, you just need to type this:

` cat /etc/slackware-version `

and to get the architecture of your CPU, just type:

` uname -m `

Architectures **i686**, **i486** and any other different from **x86_64** are 32bits and should work with **i486**.

For example, this Slackware version is **13.1.0** and the architecture is **i686**, and I know that the last version of spring is 0.82.7.1, so the required file is:

Spring-\<SPRING_VERSION\>-Slackware-\<SLACKWARE_VERSION\>-\<ARCHITECTURE\>.tar.gz

Spring-0.82.7.1-Slackware-13.1.0-i486.tar.gz

### Install using script

After having downloaded the file, you have to decompress it with:

` tar xzvf Spring-0.82.7.1-Slackware-13.1.0-i486.tar.gz `

This should create a directory with the same name as the file:

` cd Spring-0.82.7.1-Slackware-13.1.0-i486/ `

And there you just run:

` ./spring_slackware_32b_install.sh `

The script will ask for the root password, install packages, copy maps and games, and check a boost symbolic link that this distribution needs to make to run springlobby properly.

## Install by package

For a full install, the dependencies in precompiled tgz's for **32 bits**:

<a href="http://dl.dropbox.com/u/1277376/slackware/spring-0.82.7.1-i486-1.tgz" class="external text" rel="nofollow">spring 0.82.7.1</a>

<a href="http://www.megaupload.com/?d=S3NH7Q0S" class="external text" rel="nofollow">openAL 1.12.854</a>

<a href="http://www.megaupload.com/?d=QOE461J6" class="external text" rel="nofollow">DevIL-1.6.8_rc2</a>

<a href="http://www.megaupload.com/?d=HY45ITXC" class="external text" rel="nofollow">icu4c-4.4.1-i486</a>

<a href="http://www.megaupload.com/?d=60WU4Q9X" class="external text" rel="nofollow">p7zip-9.13</a>

There is all dependencies in precompiled tgz's for **64 bits** (Slackware 13.0, working on 13.1):

<a href="http://www.megaupload.com/?d=MMB8HTQU" class="external text" rel="nofollow">spring 0.82.6.1</a>

<a href="http://www.megaupload.com/?d=AC75YZ1S" class="external text" rel="nofollow">openAL 1.10.622</a>

<a href="http://www.megaupload.com/?d=WQ2DGUS8" class="external text" rel="nofollow">DevIL-1.6.8_rc2</a>

<a href="http://www.megaupload.com/?d=774C313B" class="external text" rel="nofollow">boost-1.38.0</a>

<a href="http://www.megaupload.com/?d=HC4OMM5J" class="external text" rel="nofollow">icu4c-4.2.1</a>

<a href="http://www.megaupload.com/?d=OY1P3ME0" class="external text" rel="nofollow">glew-1.5.1</a>

<a href="http://www.megaupload.com/?d=2Q09GME2" class="external text" rel="nofollow">libtorrent-rasterbar-0.14.9</a>

Assuming that all .tgz are saved in the same directory, open a console and cd inside that directory; then do this:

    su -c "installpkg *.tgz"

When asked for the root password, enter it.

A menu entry for spring and another for springlobby will apear in KDE, XFCE and GNOME.

Depending on your distribution/package, you still need a Multiplayer Lobby. For Linux, the most common one is SpringLobby, which you can get <a href="http://springlobby.info/wiki/springlobby/Install" class="external text" rel="nofollow">here</a>. For Slackware 13.1, the binaries required for SpringLobby:

**32bits**:

<a href="http://www.megaupload.com/?d=Q8X69Q01" class="external text" rel="nofollow">libtorrent-rasterbar-0.15.0-i486</a>

<a href="http://www.megaupload.com/?d=AGSWZCUM" class="external text" rel="nofollow">boost-1.42.0-i686</a>

- NOTE: By default, Slackware don't have \*-mt libraries, so, if you want compile/run springlobby, you must make symbolic links to **libboost\_\*.so** libraries in this way:

      ##ln -s /usr/lib/libboost_system.so /usr/lib/libboost_system-mt.so

<a href="http://www.megaupload.com/?d=K6GIVCQE" class="external text" rel="nofollow">wxGTK-2.8.11-i486</a>

- NOTE: If you have problems compiling/runing springlobby, you must be sure that you are using UNICODE config, to do that, you must run:

      ##wx-config --selected-config

  , and, if you have a response different to `gtk2-unicode-release-2.8` you have a problem, and you must compile/install correct package.

<a href="http://www.megaupload.com/?d=K3OUFTL5" class="external text" rel="nofollow">springlobby-0.114-i686</a> (out of date now on v0.120)

## See Also:

- [Finalizing_linux_install](/finalizing-linux-install)
- [Troubleshooting_linux](/troubleshooting-linux)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Slackware install](https://springrts.com/wiki/Slackware_install).*
