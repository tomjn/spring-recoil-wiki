---
title: "FAQ:requirements"
source_url: "https://springrts.com/wiki/FAQ:requirements"
categories:
  - "Deprecated"
---
# FAQ:requirements

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | This page is outdated, either look at the [FAQ](/faq) or the [Requirements](/requirements) page for up to date info |

## Requirements

### What platforms will Spring run on?

At the moment, it runs on Windows, Linux, FreeBSD and basically on [Mac OS X](/spring-on-macosx).

### What sort of a system do I need to run Spring?

You need a 3D graphics card to run Spring. Anything better or equal to a GeForce4 MX should work. It is also **Strongly Recommended** that you update your drivers to the latest versions. Spring needs at least a SSE capable CPU, a more powerfull CPU can support larger maps and a greater maximum unit limit. A 1 GHz CPU should be able to support an estimated 500 units. You should also have at least 512 MB RAM. For further details and tested Systems check the [Requirements](/requirements) page.

### Spring says 'Missing Default Cursor'

That means you are playing a mod or 'game content' that depends on files you do not have. Most of times, it's due to trying to play a TA mod without having the TA base files (/base/otacontent.sdz, /base/tacontent_v2.sdz, /base/tatextures_v062.sdz). You can download them from <a href="http://springrts.com/dl/installer/base/" class="external text" rel="nofollow">here</a> (After download, move them to the /base/ subfolder of your Spring folder). However, that would be illegal if you do not own the disc from a ten years old video game called Total Annihilation. Pretty sure it's illegal if you own it too {Stupid Corporations}. And don't even try to dump genuine TA data in your Spring folder, that won't work. To remain legal, play mod / 'game content' that do not depend on repacked TA contents.

### I need the GL_ARB_texture_env_combine extension

This error can be caused by various things:

1.  Old video Hardware.
2.  Old drivers.
3.  Bad installed Drivers.
4.  Bad game settings.

If your hardware is old check <a href="http://www.delphi3d.net/hardware/extsupport.php?extension=GL_ARB_texture_env_combine" class="external text" rel="nofollow">THIS</a> (<a href="http://web.archive.org/web/20070627091726/http://www.delphi3d.net/hardware/extsupport.php?extension=GL_ARB_texture_env_combine" class="external text" rel="nofollow">alternative Link</a>) list, if you cant find your video card then, sorry, you have to buy a new video card.

If your hardware is in the above list or you are sure that your video card support this opengl extension download <a href="http://www.realtech-vr.com/glview/download.html" class="external text" rel="nofollow">THIS</a> software. Intall, run, and check if under the *Report* tab there is the *GL_ARB_texture_env_combine* string. If the string is present then the problem resides in your Spring settings, try lower screen resolution and disable all graphics effect. If the string is not present and your hardware is in the list the problem are your video card drivers. To solve this **UNINSTALL ALL PREVIOUS DRIVERS** and install last stable drivers for your video card. Usually the problem shows when there are uninstalled old video drivers on the system.

**NOTE:** Use **glxinfo** on a Linux system. You don't need to download any third party application because most if not all systems with x11 should have that program already.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [FAQ:requirements](https://springrts.com/wiki/FAQ:requirements).*
