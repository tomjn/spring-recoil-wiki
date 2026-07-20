---
title: "FreeBSD install"
source_url: "https://springrts.com/wiki/FreeBSD_install"
categories:
  - "Linux"
---
# FreeBSD install

<div class="mw-parser-output">

[Linux Setup Guide](/setupguide) \< FreeBSD install

[<img src="/images/Distributions-freebsd.png" decoding="async" width="64" height="64" alt="Distributions-freebsd.png" />](/images/Distributions-freebsd.png)

## FreeBSD

### FreeBSD-STABLE and FreeBSD-CURRENT

These are the development branches of FreeBSD.

As root, just type:

    pkg_add -r springlobby

If you only want the spring engine:

    pkg_add -r spring

As of 08 October 2011, this will install 82.7.1.

### 8.2-RELEASE and 7.4-RLEASE

These are the production releases. The FreeBSD production releases currently have outdated binary packages for spring (spring 82.5.1,) therefore if the above method of installation is used, online play will not be possible. To play online, use the FreeBSD ports collection instead. If you have not already installed the ports collection, detailed instructions are available in the <a href="http://www.freebsd.org/doc/handbook/ports-using.html" class="external text" rel="nofollow">FreeBSD Handbook</a> . Once you have the ports collection, you can install the latest version of spring like any other port.

    cd /usr/ports/games/springlobby
    make install clean

If you only want the spring engine without the lobby, replace springlobby with spring.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [FreeBSD install](https://springrts.com/wiki/FreeBSD_install).*
