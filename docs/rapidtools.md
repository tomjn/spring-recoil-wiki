---
title: "RapidTools"
source_url: "https://springrts.com/wiki/RapidTools"
categories:
  - "Download_Systems"
---
# RapidTools

<div class="mw-parser-output">

RapidTools are for managing a [rapid](/rapid) game/archive repository.

Made by det

## Source

<a href="https://github.com/spring/pr-downloader" class="external free" rel="nofollow">https://github.com/spring/pr-downloader</a>

## Bugs

<a href="https://github.com/spring/pr-downloader/issues" class="external free" rel="nofollow">https://github.com/spring/pr-downloader/issues</a>

## Compile

to compile it on ubuntu:

    git clone https://github.com/spring/pr-downloader.git --recursive
    sudo apt-get install liblua5.1-0-dev libzip-dev zlib1g-dev cmake libssl-dev
    cmake .
    make

Additional setup instructions: [/wiki/Admin:Rapid](/admin-rapid)

## Tool description

### AddZip

takes a .zip and adds it to the repo with user specified tags:

Usage:

    AddZip <Store Path> <Zip Path> [Tag1] ...

### BuildGit

adds a git path to the repo and generates the tags automatically from the commit message, it also optimizes for incremental updates

Usage:

    BuildGit <Git Path> <Mod Root> <Modinfo> <Store Path> <Git Hash> <Prefix>

### Streamer

is a cgi program to serve some specific files of a .sdp. This is the fastest and official way to fetch a rapid archive.

at client side you have to http POST: <a href="http://packages.springrts.com/streamer.cgi" class="external free" rel="nofollow">http://packages.springrts.com/streamer.cgi</a>?\<hash of sdp\>

post data is binary 0/1 if a file of the specified sdp is needed or not.

streamer.cgi then returns all files in a single stream in the same order than in the sdp. it has to be in the root of a [rapid](/rapid) file structure.

    Usage: ./Streamer
    Expects environment variables DOCUMENT_ROOT and QUERY_STRING
    Expects a gziped bitarray as stdin

for details see the source-code: <a href="https://github.com/spring/pr-downloader/blob/master/src/Streamer.cpp#L94" class="external free" rel="nofollow">https://github.com/spring/pr-downloader/blob/master/src/Streamer.cpp#L94</a>

### MakeZip

can create a zip from a .sdp

    MakeZip ~/.spring ba:stable ba.zip

#### Notes

If you get this error:

    Error on unknown tag lookup

MakeZip doesn't find the tag specified in (for example) ~/.spring/versions.gz. To fix, copy the required versions.gz:

    cp ~/.spring/rapid/packages.springrts.com/versions.gz ~/.spring/

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [RapidTools](https://springrts.com/wiki/RapidTools).*
