---
title: "User:Gajop"
source_url: "https://springrts.com/wiki/User:Gajop"
---
# User:Gajop

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

<a href="https://github.com/gajop" class="external free" rel="nofollow">https://github.com/gajop</a>

## Gamedev:Distribution

Explain Rapid [Rapid](/rapid)

Explain Launcher distribution

## Launcher Distribution System (WIP)

In SpringRTS it is currently difficult to distribute your games. Developers normally need to create their own tools that will auto-update and launch the lobby, game and all additional assets. They also need to host it on their own site, which usually inflicts an initial cost.

This is quite unfortunate as we already have [Rapid](/rapid), which is a powerful system for distributing games on an existing Spring installation. However, this system lacks a way to distribute the game installation, and it doesn't allow games to provide customized launchers.

This is why we have created the launcher distribution system. It is based on simple distribution system similar to how Rapid works, where the distribution setup is contained within a Git repository.

To use it, developers need to do two things:

1\. Register at \$SITE and submit a link to their Git repository (e.g. <a href="https://github.com/Spring-SpringBoard/SpringBoard-Core.git" class="external free" rel="nofollow">https://github.com/Spring-SpringBoard/SpringBoard-Core.git</a>). The Git repository can be the same as the game repository, but can also be separate.

2\. Put distribution files in the `dist` folder of the repository. This includes configuration, launcher media files and additional custom scripts.

How it works:

1\. Users first submit Git repositories, which might need approval. (Approval could only be necessary if launchers require custom scripts).

2\. A script will update all Git repositories, similar how it does for Rapid. It will only extract the `dist` subfolder.

3\. It will send the dist subfolder to buildbots (or they might poll it), which will create launchers from it. Each buildbot runs a specific setup (e.g. Linux64, Windows32, etc.)

4\. Buildbots will take the dist subfolder, and put it in the latest version of the launcher (which will be periodically cloned), and start the build. They will then send the built files and patches (?) to the server for distribution.

5\. Once the server receives the built files, it will put it in a folder specific to the game. Each game will have its own launcher, with a versioning scheme similar to Rapid and/or the engine (Git names + custom names for tags like stable).

6\. The launcher program will update using pyupdater.

7\. To get the latest version of the launcher, devs will need to update their Git repositories. Optionally allow devs to specify custom launcher versions (but seems unnecessary as we don't want to overcomplicate things).

WIP: Better term than buildbot?

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Gajop). Original page: [User:Gajop](https://springrts.com/wiki/User:Gajop).*
