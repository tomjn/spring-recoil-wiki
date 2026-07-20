---
title: "Pr-downloader"
source_url: "https://springrts.com/wiki/Pr-downloader"
categories:
  - "Download_Systems"
---
# Pr-downloader

<div class="mw-parser-output">

pr-downloader is a console cross-platform download tool for spring. it can download games and maps supporting currently all main download systems, including [rapid](/rapid), [plasma](/plasma) and [upq](/upq).

## download

binaries of pr-downloader are included in the static builds of spring: <a href="https://springrts.com/dl/buildbot/default/develop/" class="external free" rel="nofollow">https://springrts.com/dl/buildbot/default/develop/</a>

## compile

### install depencies on debian

     sudo apt-get install -y gcc-4.7 g++-4.7 cmake libcurl4-openssl-dev libjsoncpp-dev \
     libboost-thread1.55-dev libboost-system1.55-dev libboost-filesystem1.55-dev spring libjsoncpp-dev \
     liblua5.1-0-dev libzip-dev zlib1g-dev

### run compile instructions

      cmake .
      make

## usage

    pr-downloader 0.7-1-g4aeb062
    Usage: pr-downloader 
    --rapid-download <name>
    --rapid-validate
    --dump-sdp <name>
    --plasma-download <name>
    --http-download <name>
    --http-search <name>
    --download-map <name>
    --download-game <name>
    --download-engine <name>
    --filesystem-writepath <name>
    --help
    --version

### download the latest version of zero-k

`pr-downloader zk:stable`

### download a map

`pr-downloader DeltaSiegeDry`

### download the engine

`pr-downloader --download-engine 106.0`

### PR-Downloader Frontend (Windows only)

<a href="https://drive.google.com/folderview?id=0B25BbZxm93S9T0syUlBwVUUyM2M&amp;usp=sharing" class="external text" rel="nofollow">Easy to use Batch UI for PR-Downloader (windows only)</a>

Must be extracted next to pr-downloader.exe

### Bugs

Please report bugs to the <a href="https://github.com/spring/pr-downloader/issues" class="external text" rel="nofollow">official bug tracker</a>.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Pr-downloader](https://springrts.com/wiki/Pr-downloader).*
