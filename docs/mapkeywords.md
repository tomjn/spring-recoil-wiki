---
title: "MapKeywords"
source_url: "https://springrts.com/wiki/MapKeywords"
---
# MapKeywords

<div class="mw-parser-output">

This page has information about map names and category-related keywords.

**format:**

\<mapName1\>;\<word1\>;\<word2\>,...\
\<mapName2\>;\<word1\>;\<word2\>,...\

(csv with map name on each line followed by the corresponding keywords)

The list of map names available on springfiles at the moment, sorted alphabetically and with the keywords (if any) can be found <a href="https://springfiles.springrts.com/json.php?printMapKeywordList=1" class="external text" rel="nofollow">HERE</a>. Use it to get a fresh list of maps and keywords to use as a base for updates to the mapKeywords.txt file that's part of the <a href="https://github.com/spring/upq" class="external text" rel="nofollow">spring upq project</a>.

After deploying the new file on the server, run "/usr/bin/python3 processMapKeywords.py" from /home/springfiles/upq/ to load the new keywords.

Use only \[a-z0-9\] characters on the keywords.

Only maps on the list get their keywords updated.

**current keywords:**

    // size 
        small: "Map area <= 12x12", 
        medium: "12x12 < map area <= 18x18",
        large: "Map area > 18x18",
    // land / water
        land: "Mostly land",
        amphibious: "Mixed land and water areas, land-only or water-only units may not be viable",
        water: "Mostly water",
    // traversability
        open: "Mostly open, few or easily crossable terrain features",
        obstructed: "Many steep hills, chasms, land/water transitions or other choke points",
        lava: "Has lava instead of water",
        acid: "Has damage-dealing acid instead of water",
        "void": "Has void instead of water",
        air: "Key areas only reachable by air units",
    // other
        metal: "Continuous metal yield across the surface instead of discrete metal spots",
        ffa: "Map suitable for free-for-all battles"

The size-related keywords are added automatically when new maps are uploaded.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [MapKeywords](https://springrts.com/wiki/MapKeywords).*
