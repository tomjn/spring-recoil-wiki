---
title: "Mapdev:performance"
source_url: "https://springrts.com/wiki/Mapdev:performance"
categories:
  - "Map_Dev"
---
# Mapdev:performance

<div id="performance" class="section mw-parser-output">

## Performance

Tips on optimizing your maps performance

### SMT File Size

Spring map tile files are essentially a large array of 32x32 pixel images which the SMF file references in its map tile index.

To reduce the size of your map, consider aligning any texture images to a 32x32 grid. When compiling, an image matching algorithm may be able to detect duplicate tiles and reference only the one.

Infact any repeated features on the map, so long as they are shifted to 32x32 pixel multiples will allow the map compiler to optimise it.

### Other

FIXME:  clean up

Download GPU-z. That lets you monitor the amount of gpu ram in use as well as gpu load %. Remember that the whole map gets loaded into it, along with all the textures. If you do a /give all ingame and your gpu ram use goes above 512MB (providing your card has at least 1gb) then it is probably too much.

TLDR: get gpu-z, look at what actually changes your performance. Ignore whiners standing in the way of progress. Tell whiners to /advmapshading 0

As a stopgap measure, .dds textures are recommended because they use as much gpu ram as their filesize. All png and other images get decompressed and mipmapped. A non dds 2k square image will occupy 16 MB gpu ram.

People with shit gpus complaining is nothing new, 256MB is insufficient anyway.

All in all, its unlikely to eat too much performance by using uncompressed 2k images, SSMF is taxing for many peoples gpus anyway.

remove waterplanecolor tag from smd. It will stop water being all around the map.

(from <a href="http://springrts.com/phpbb/viewtopic.php?f=13&amp;t=29579" class="external text" rel="nofollow">forum topic</a> )

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:performance](https://springrts.com/wiki/Mapdev:performance).*
