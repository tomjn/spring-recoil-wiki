---
title: "Template:Obtaining The Source Code"
source_url: "https://springrts.com/wiki/Template:Obtaining_The_Source_Code"
---
# Template:Obtaining The Source Code

<div class="mw-parser-output">

### Tarballs

**(For playing online official games on lobby.springrts.com - the spring lobby server)**

Using [Git](/templates/obtaining-the-source-code#git) is the recommended way to get the sources of the engine. In spite of, you can use the [official tarballs](/download#latest-stable-snapshot) to compile Spring without git.\

**Note:** Do NOT use the zip-files from github, they are missing important data to compile Spring.

See [Building spring](/building-spring) for build instructions.

### Git

<a href="https://github.com/spring/spring" class="external text" rel="nofollow">Spring project page at github</a>

Master repo URI: ` `<a href="git://github.com/spring/spring.git" class="external free" rel="nofollow"><code>git://github.com/spring/spring.git</code></a>` `\
Backup repo: <a href="git://git.code.sf.net/p/springrts/code" class="external free" rel="nofollow"><code>git://git.code.sf.net/p/springrts/code</code></a>

Branches of interest:

- master - latest stable, enforced for official games on lobby.springrts.com
- maintenance - fixes for the latest stable
- develop - major developments (most active, larger developments)

Assuming the GIT command line client is installed, you can clone (get locally) the repository with the commands below.

#### Latest Stable (master branch, useless for development purposes, lives as maintenance moving forward)

    git clone --recursive git://github.com/spring/spring.git -b master

To later update it (get the changes other people did) with:

    git pull --rebase

#### Maintenance (maintenance branch)

    git clone --recursive git://github.com/spring/spring.git -b maintenance

#### Bleeding-edge (develop branch)

    git clone --recursive git://github.com/spring/spring.git -b develop

#### Working with git

Please note that patches to the code must be done for either develop or maintenance. Such patches can be then sent to one of the developers with repository access. If you are new to git and github, you may want to have a look at <a href="http://help.github.com/" class="external text" rel="nofollow">this guide</a> to get you started.

Note: you can switch `branches` this way:

<div class="mw-highlight mw-highlight-lang-bash mw-content-ltr" dir="ltr">

    # (optional) backup your current code changes
    git stash

    # switch branch
    git checkout $MY_OTHER_BRANCH

    # sometimes needed
    # note, it deletes all your unstashed changes and all non-pushed commits on the new branch,
    # but it doesn't delete untracked files.
    #git reset --hard 

    # update/sync with remote repo
    git pull --rebase

    # (optional) if you want to apply the code changes backed-up in the first step
    #git stash pop # reapplies your changes and DELETES the backup
    # or
    #git stash apply --index 0  # reapplies your changes and keep the backup (see `git stash list`)

</div>

#### Submodules

To obtain the submodules you should clone the repository with --recursive as mentioned above. If you haven't done this, you can execute the following code

<div class="mw-highlight mw-highlight-lang-bash mw-content-ltr" dir="ltr">

    git submodule sync
    git submodule update --init

</div>

To update the submodules, you have to execute the same commands again or pull normally.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Template:Obtaining The Source Code](https://springrts.com/wiki/Template:Obtaining_The_Source_Code).*
