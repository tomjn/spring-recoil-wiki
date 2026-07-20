---
title: "Official Map Making Guide"
source_url: "https://springrts.com/wiki/Official_Map_Making_Guide"
categories:
  - "Delete"
  - "Deprecated"
---
# Official Map Making Guide

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

## how to start

this is basically for linux/unix but i'm sure it will be helpful for windows and other platforms as well. just have a look at the source!

## download+building the needed tools

you will find the needed MapConv binary in here:

    https://github.com/spring/MapConv

a simple **make** in that directory will build it.

## using the tools

in the directory samples you'll find this:

### cat readme.txt \| sed -e 's/^/ /g'

    These aren't necessarily *good* examples of how to use MapConv, or how to
    make a good Spring map.

    The .SMDs are modified from Small Divide, to boot.

    I haven't learned how to properly package a map for Spring; I just symlink
    the .smd, .smf and .smt into the maps directory.

    1: The sample map that seems to have come with mapconv, historically.
       Old file names:

         257f.bmp -> feature.png
         257h.bmp -> height.png
         257m.bmp -> metal.png
         2kt.bmp  -> texture.png

    2: A tiny map with one feature on it named myFeature, made for testing
       converting models to s3o.

       The metal patch under the feature is probably pointless. :)

### example 1

go to **trunk/tools/MapConv/samples/1** and type **make** which should build the sample 1 map. the output should be:

    -rw-r--r-- 1 joachim users    2091 Jul  9 18:17 test.smd
    -rw-r--r-- 1 joachim users  913468 Jul  9 18:23 test.smf
    -rw-r--r-- 1 joachim users    1392 Jul  9 18:23 test.smt

the smd file is a normal text file which has interesting map parameters. you'll find a complete documentation in this wiki somewhere (maybe in different tutorial). the smf and smt file is your graphical representation of the sample 1 map.

### testring the map

basically you could copy those three files test.smd, test.smf and test.smt into your maps directory which is ~/.spring/maps/ in case of linux and in windows it's the c:/programms/spring/.../maps directory.

if you want only one compressed file this is what can be done:

    mkdir -p map
    cp test.smd map/
    cp test.smt map/
    cp test.smf map/
    zip -r9 random.sdz map
    cp test.sdz ~/.spring/maps/

i think this code will be added to the sample 1 and sample 2 script but the original author didn't know that or didn't care when the document was written.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Official Map Making Guide](https://springrts.com/wiki/Official_Map_Making_Guide).*
