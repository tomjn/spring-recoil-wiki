---
title: "Rapid"
source_url: "https://springrts.com/wiki/Rapid"
categories:
  - "Download_Systems"
---
# Rapid

<div class="mw-parser-output">

"Rapid" is a concept for storing "archives" for spring. It consists of multiple indexes:

- main index of all known rapid repos: <a href="https://repos.springrts.com/repos.gz" class="external free" rel="nofollow">https://repos.springrts.com/repos.gz</a>
- index of all known archives in a repo, i.e.: <a href="https://packages.springrts.com/versions.gz" class="external free" rel="nofollow">https://packages.springrts.com/versions.gz</a>, <a href="https://repos.springrts.com/zk/versions.gz" class="external free" rel="nofollow">https://repos.springrts.com/zk/versions.gz</a>, ...
- index of a single game/map/content archive: .sdp which lists all files inside the "pool" directory

spring can directly read .sdp and the pool directory which contains the real files of an archive. multiple .sdp can share the same files in a pool which makes "rapid" so efficient in storage.

Serverside [RapidTools](/rapidtools) are used to manage the repository of all games.

## Using rapid as Gamedev

If a Gamedev wants to use rapid, he needs to use a git repository for his game where the game archive is in the .sdd format stored:

The git repository needs to contains a folder which is in the structre of a .sdd. in modinfo.lua version has to be

    version = '$VERSION',

\$VERSION later on will be replaced by the git commit number or, when a release is made, the version number of the release. modinfo.lua needs to be lowercase!

### Creating a release

When the git repository is connected to rapid, a release can be made by making a git-commit with a commit message in the format:

    VERSION{x.xx}

Where everything in the brackets will replace \$VERSION in modinfo.lua.

This will create a tag :stable for this commit and create an archive at https://*gamename*.repo.springrts.com/builds/, i.e. <a href="https://i18n.repo.springrts.com/builds/" class="external free" rel="nofollow">https://i18n.repo.springrts.com/builds/</a> which can be distributed/uploaded to different sites if needed. It is also automatically published to upq at <a href="https://springfiles.springrts.com/" class="external free" rel="nofollow">https://springfiles.springrts.com/</a> which all current download systems have access to; you can validate what happened there, too.

#### Adding your game to the rapid download system

Please create a new issue at <a href="https://github.com/spring/RapidTools/issues" class="external free" rel="nofollow">https://github.com/spring/RapidTools/issues</a> and report the location of your git repository and the wanted rapid tag.

To download you can use one of the [Rapid_Tags](/rapid-tags).

## Files structures

file structure of rapid is:

    /versions.gz
    /repos.gz
    /packages/
    /pool/

### list of rapid repositories: repos.gz

gziped text file which has a list of all rapid repositories.

    main,https://packages.springrts.com,,

for springrts it is: <a href="https://repos.springrts.com/repos.gz" class="external free" rel="nofollow">https://repos.springrts.com/repos.gz</a>

### list of archives on a mirror: versions.gz

gziped text file which has a list of all sdp archives in this repository.

    ba-tronic:version:7.12-tronic1,baafb4fb215c60873e7d10e7ec600dc5,Balanced Annihilation V7.12,Balanced Annihilation V7.12-tronic1

the md5 hash is the filename of the sdp of the archive. so for example:

<a href="https://packages.springrts.com/packages/baafb4fb215c60873e7d10e7ec600dc5.sdp" class="external free" rel="nofollow">https://packages.springrts.com/packages/baafb4fb215c60873e7d10e7ec600dc5.sdp</a>

### folder with index archives: /packages/

this folder contains all available packages (~games) in the rapid file structure.

### an index archive: .sdp

gziped index file with a list of all files in this archive. this is for example a game.

Format of the .sdp (index) files:

- There is one entry per indexed file. These are repeated until EOF.
- The format of one such entry:
  - 1 byte real file name length
  - real file name
  - 16 byte MD5 digest
  - 4 byte CRC32
  - 4 byte file size
- The 16 bytes MD5 digest is the reference to the 32 Hex char file name
- under pool, which contains the content.

filename of the .sdp is:

     md5(md5(filename1) + md5(content of file1) + md5(filename2) + md5(content of file2) ...)

see also void PoolArchiveT::load(DigestT const & Digest):

<a href="https://github.com/spring/RapidTools/blob/master/Rapid/PoolArchive.cpp#L35" class="external free" rel="nofollow">https://github.com/spring/RapidTools/blob/master/Rapid/PoolArchive.cpp#L35</a>

or

<a href="https://github.com/spring/spring/blob/master/rts/System/FileSystem/Archives/PoolArchive.h" class="external free" rel="nofollow">https://github.com/spring/spring/blob/master/rts/System/FileSystem/Archives/PoolArchive.h</a>

### the pool folder

this folder contains all files referenced by the .sdp's in gzipped form. the filename is the md5 of the file. this way files which are used by multiple archives can be shared.

The pool system uses two directories, to be found in the root of a spring data directory, pool and packages. They may look as follows:

    /pool/00/00756ec29fe8fc9d3da9b711e76bc9.gz
    /pool/00/3427d26f419dabe74eaf7b865407b8.gz
    ...
    /pool/01/
    /pool/02/
    ...
    /pool/ff/

basicly its in this form:

    /pool/<first 2 hex chars>/<last 30 hex chars>.gz

The splitting up into the 00 till ff sub-dirs is only to prevent possible problems with file-system limits for maximum files per directory (eg. FAT32).

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Rapid](https://springrts.com/wiki/Rapid).*
