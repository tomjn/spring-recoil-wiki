---
title: "Spring on ARM"
source_url: "https://springrts.com/wiki/Spring_on_ARM"
categories:
  - "Engine_Dev"
---
# Spring on ARM

<div class="mw-parser-output">

**Note: currently it doesn't compile at many places. some of them can maybe fixed by changing compiler flags. Also the emulation is horrible slow, so better get a real arm computer.**

## Setting up a virtualized environment for arm on ubuntu

see <a href="https://wiki.ubuntu.com/ARM/RootfsFromScratch" class="external free" rel="nofollow">https://wiki.ubuntu.com/ARM/RootfsFromScratch</a>

       sudo apt-get install qemu-system rootstock
       sudo rootstock \
             --fqdn ubuntu \
             --login ubuntu \
             --password ubuntu \
             --imagesize 3G \
             --seed openssh-server,linux-image-omap \
             --notarball

      mv qemu-armel-*.img qemu-armel.img
      mkdir tmp
      sudo mount -o loop qemu-armel.img tmp
      echo "auto eth0
    iface eth0 inet dhcp" >> tmp/etc/network/interfaces
      sudo umount tmp
      rmdir tmp
      wget http://ports.ubuntu.com/ubuntu-ports/dists/lucid/main/installer-armel/current/images/versatile/netboot/vmlinuz

start with:

    qemu-system-arm -M versatilepb -cpu cortex-a8 -kernel ./vmlinuz \
            -hda qemu-armel.img -m 256 -append "root=/dev/sda" \
            -net nic -net user,hostfwd=tcp::2222-:22

login with ubuntu:ubuntu

or with

    ssh ubuntu@localhost -p 22222

## install required build tools

    sudo apt-get install build-essentials cmake
    sudo apt-get install libglew1.6-dev libsdl1.2-dev libdevil-dev libopenal-dev \
    libogg-dev libvorbis-dev libfreetype6-dev p7zip-full libxcursor-dev \
    libboost-thread1.46-dev libboost-regex1.46-dev libboost-system1.46-dev \
    libboost-program-options1.46-dev libboost-signals1.46-dev

since here it should be possible to follow the [linux build instructions](/building-spring-on-linux#ubuntu).

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Spring on ARM](https://springrts.com/wiki/Spring_on_ARM).*
