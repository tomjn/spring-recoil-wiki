---
title: "Ubuntu install"
source_url: "https://springrts.com/wiki/Ubuntu_install"
categories:
  - "Linux"
---
# Ubuntu install

<div class="mw-parser-output">

[Linux Setup Guide](/setupguide) \< Ubuntu install

[<img src="/images/Ubuntulogo.png" decoding="async" width="118" height="27" alt="Ubuntulogo.png" />](/images/Ubuntulogo.png)

packages are available for: 12.10, 12.04, 11.04, 10.10, 10.04, 9.10, 9.04, 8.10

For packaging requests or complaints, please contact [the packagers](/linux-packaging#ubuntu).

## Ubuntu 9.10 and newer

10.04 & 10.10 have propretary drivers for ATI & Nvidia GPU's in the menu aplication / system / additionnal drivers (they are not free but mandatory if spring is very slow and the ground of the map ingame is full white ); ATI catalyst config panel ask password for be edited but always get a bad password error for open it it need to open console and write :" sudo amdcccle "then that will ask the password and accept it

### Installation Instructions

Go to *Applications - Ubuntu Software Center*, search for *springlobby* and click go. If you want to be able to play online, see [the next section](#updating-to-newer-releases).

### Updating to newer releases

Go to *System - Administration - Software Sources*, click the Other tab, click *Add*. Type **ppa:spring/ppa** and close the window. Allow it to reload the packages, and you will find the new version of Spring and Spring Lobby in update manager.

If you're running Ubuntu 10.10, see "Missing repositories in Ubuntu 10.10 on this help page for software sources: <a href="https://help.ubuntu.com/community/Repositories/Ubuntu" class="external free" rel="nofollow">https://help.ubuntu.com/community/Repositories/Ubuntu</a>.

## Ubuntu 9.04 and 8.10

We now have a maintained and up to date APT repository for Ubuntu 9.04 (Jaunty) and 8.10 (Intrepid). If you have some older version of Ubuntu, you can easily upgrade with these instructions: <a href="http://www.ubuntu.com/getubuntu/upgrading" class="external free" rel="nofollow">http://www.ubuntu.com/getubuntu/upgrading</a>.

You will need to add the Spring PPA below and install the *springlobby* package. Or you can upgrade to Ubuntu 9.10 and just install the *springlobby* package from the new Software Center.

### Installing the repository key

First, we need to add the Launchpad PPA package-signing key; this allows Ubuntu to know the packages have been provided by the right people can can be trusted to be installed. If you skip this step then Ubuntu will complain about an unverifiable package every time there's an update for Spring.

Go to: <a href="http://keyserver.ubuntu.com:11371/pks/lookup?op=get&amp;search=0xFC66403D8670A035" class="external autonumber" rel="nofollow">[1]</a>

Cut and paste the page contents to a file called *ppa-spring.pgp* or something recognizable like that. Do not use *Save As* in your browser, as this will likely not work because of added HTML formatting. You can use *Applications - Accessories - Text Editor* to copy&paste into and save to disk.

Security-conscious people can go to the Spring Developers PPA page at <a href="https://launchpad.net/~spring/+archive/ppa" class="external text" rel="nofollow">launchpad.net</a> to verify that the key mentioned above is indeed the right one to trust.

Now go to *System - Administration - Software Sources* and click on the *Authentication* tab to add the saved *ppa-spring.pgp* with the *Import Key File* button. The new key should now pop up in the list.

### Installing the repository

In *System - Administration - Software Sources*, click on the *Third-Party Software* tab. Then, click the *Add* button, and paste one of the two lines corresponding to your Ubuntu release (9.04 or 8.10).

**Ubuntu 9.04 "Jaunty Jackalope"**:

    deb http://ppa.launchpad.net/spring/ubuntu jaunty main

**Ubuntu 8.10 "Intrepid Ibex"**: Note: Please note if out of date. (It i easy enough to try.)

    deb http://ppa.launchpad.net/spring/ubuntu intrepid main

Close the dialog, and click on *Reload* when it asks.

After that is done, you can just <a href="http://springoo.mooo.com" class="external text" rel="nofollow">CLICK HERE TO INSTALL EVERYTHING</a>. Alternatively, you can head to *System - Administration - Synaptic Package Manager*, and search for *spring*. For the bare essentials, you will need to install the *spring-engine* and *springlobby* packages.

SpringLobby can be found in *Applications - Games* after install. (Please note that you also need mods and maps to play. The easiest way to get them is to download them from within SpringLobby itself.

## Alternative installation using the terminal

Press *Alt-F2* to run a command. Enter:

    gksudo -- wget -O - "http://keyserver.ubuntu.com:11371/pks/lookup?op=get&search=0xFC66403D8670A035" | \
    apt-key add -

This will add the Spring-Developers PPA package-signing key to the list of keys that Ubuntu should trust for software packages. (See above for more info).

### Ubuntu 10.10 and newer

    sudo add-apt-repository ppa:spring
    sudo apt-get update
    sudo apt-get install spring

### Older

Then do:

    gksudo gedit /etc/apt/sources.list.d/springproject.list

Copy and paste the following into the file:

#### Ubuntu 9.04:

    deb http://ppa.launchpad.net/spring/ubuntu jaunty main
    deb-src http://ppa.launchpad.net/spring/ubuntu jaunty main

#### Ubuntu 8.10:

    deb http://ppa.launchpad.net/spring/ubuntu intrepid main
    deb-src http://ppa.launchpad.net/spring/ubuntu intrepid main

Save the file. You can then either use the graphical package manager Synaptic (*System - Administration - Synaptic Package Manager*) and search for *spring* related packages, or just install spring from a terminal using:

    sudo apt-get update
    sudo apt-get install spring spring-maps-default

### Other information

You can view the web page for the repository <a href="https://edge.launchpad.net/~spring/+archive" class="external text" rel="nofollow">here</a>. Additional packages (such as one for Kernel Panic) are there as well.

The package installs the Spring executable at `/usr/games/spring` and read-only data in `/usr/share/games/spring`.

## See Also:

- [Finalizing_linux_install](/finalizing-linux-install)
- [Troubleshooting_linux](/troubleshooting-linux)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Ubuntu install](https://springrts.com/wiki/Ubuntu_install).*
