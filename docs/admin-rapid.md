---
title: "Admin:Rapid"
source_url: "https://springrts.com/wiki/Admin:Rapid"
categories:
  - "Administration"
  - "Download_Systems"
---
# Admin:Rapid

<div id="how-to-add-a-rapid-repository" class="section mw-parser-output">

## How to add a rapid repository

    cd /home/packages/git
    git clone git://github.com/ZeroK-RTS/Zero-K.git zk

(git:// should be prefered as it uses less resources when its updated)

    vi forceupdate.sh

adjust the line "for REPO in /home/packages/git/zk ;" to the path which was added, run it:

    ./forceupdate.sh

this should create the folder /home/packages/www/zk.

then repos.gz must be updated:

    cd /home/packages/www/repos.springrts.com
    ./update-repos.py

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Admin:Rapid](https://springrts.com/wiki/Admin:Rapid).*
