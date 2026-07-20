---
title: "Map Making: Feature Placer"
source_url: "https://springrts.com/wiki/Map_Making:_Feature_Placer"
categories:
  - "Map_making"
---
# Map Making: Feature Placer

<div class="mw-parser-output">

FIXME:  needs updating to use the information in <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=29559" class="external text" rel="nofollow">thread</a> about seperation of feature placer

## Feature Placer

At this point, it is very strongly recommended that you grab Spring Features. Spring features is an archive that contains all the map features ever made for spring mapping. The total number is somewhere around 500 features, so it will give you quite a bit of power when it comes time to spice up your map.

Spring Features is available via the rapid tag: spring-features:stable

Feature placer is available for use via the rapid tag: feature-placer:test

You can use pr-downloader to get the latest version, either by using pr-downlaoder in the command line, or using Forboding Angel's pr-downloader menu ( <a href="http://goo.gl/kGJBx" class="external free" rel="nofollow">http://goo.gl/kGJBx</a> - Extract to spring folder, next to pr-downloader.exe (Windows only) ).

## Using Feature Placer

When the spring starts up you will be presented with a tree that is sparkling green. Select it and you will have the option to build an entire host of features. There are also placement options on the menu such as "Jitter" and "Clustering", etc. Set these as desired.

### Exporting the Feature List

Simple click the "export set.lua" button. Then, look in your spring folder, under maps, and look for the file \<yourmapname.lua\>. Once you have verified that the file was written, you may go ahead and close the game.

## Adding the Feature List to your map

Open \<yourmapname.lua\> in a text editor and copy the entire contents. Then navigate to

mapcontainer.sdd/mapconfig/featureplacer/set.lua

Open up set.lua in a text editor, and paste the contents of \<yourmapname.lua\>t into it.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Map Making: Feature Placer](https://springrts.com/wiki/Map_Making:_Feature_Placer).*
