---
title: "Buildbot:LXC"
source_url: "https://springrts.com/wiki/Buildbot:LXC"
categories:
  - "Buildbot"
---
# Buildbot:LXC

<div class="mw-parser-output">

<a href="https://springrts.com/mantis/view.php?id=5294" class="external free" rel="nofollow">https://springrts.com/mantis/view.php?id=5294</a>

<a href="https://github.com/spring/spring-lxc" class="external free" rel="nofollow">https://github.com/spring/spring-lxc</a>

## Setup the Host System for lxc

(atm debian 10 / buster is used)

     apt install lxc wine-binfmt

/etc/lxc/default.conf

      lxc.net.0.type = veth
      lxc.net.0.link = lxcbr0
      lxc.net.0.flags = up
      lxc.net.0.hwaddr = 00:16:3e:xx:xx:xx
      lxc.apparmor.profile = generated
      lxc.apparmor.allow_nesting = 1

## Setup buildslaves

### Create containers

     lxc-create -t download -n buildslave-x64 -- --no-validate -d debian -r bullseye -a amd64
     lxc-create -t download -n buildslave-win64 -- --no-validate -d debian -r bullseye -a amd64

### Configure Buildslaves

    git clone https://github.com/spring/spring-lxc
    cd spring-lxc/scripts
    ./setup-buildslaves.sh

## Shell inside container

    lxc-attach buildslave-x64 /bin/bash

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Buildbot:LXC](https://springrts.com/wiki/Buildbot:LXC).*
