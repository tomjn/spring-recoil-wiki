---
title: "Units:Files"
source_url: "https://springrts.com/wiki/Units:Files"
categories:
  - "Delete"
---
# Units:Files

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

## Unit File Heirarchy

Here is a very brief view of the different types of files that a unit needs to work:

**1 - The FBI File (/units)** Contains most of the active data that a unit uses, such as its health, a list of which weapons it has, speed, metal/energy cost, whether it is a construction unit or not, so on and so forth.

**2 - The COB File (/scripts)** This contains all of the scripting for this unit. Animation scripting, as well as variables, and lots of other goodies the likes of which only zwzsh can think up. The .COB file is the compiled form of the file that Spring reads; it can be decompiled into a .BOS file which is readily open to editing. Scripts work by calling on pieces of the unit's model to do things, such as rotate a turret to aim at a target, or emit smoke when the unit is damaged. The pieces named in the script file must reflect actual parts of the unit's...

**3 - The 3DO/S3O File (/objects3d)** This contains the actual 3d model that the unit uses in-game. Most units have a variety of different pieces that are put together in a heirarchy type form (for instance, a tank has a hull, a turret attached to that, and a barrel attached to that). There are two types of files. 3DO is native to Total Annihilation and being that it is over 10 years old now, it's rather... crap. It uses a single-face texture system, where you individually set which texture goes on which individual face. S3O's are by far superior, and accept proper skinning as well as a massive amount of other features, such as reflectivity, light generation, teamcolour, etc. The tag determining which model a unit uses is in the FBI file; note that in order to properly use an .S3O model file it MUST have the extension in the tag -- ie, model=ARMCOMM.S3O.

**4 - The WEAPON File(s) (/weapons)** Most units have weapons. The characteristics of these weapons, from its behaviour to how it acts in the air, is determined in the weapon file.

**5 - The SIDEDATA File (/gamedata)** Every unit must be build somewhere, right? Whether its a building built by a construction vehicle, or a K-Bot built in a K-Bot Plant, everything needs to be properly placed so that it can be available to any player. Thusly, the Sidedata file contains all information pertaining to where a unit is built. Open it up and look. You'll get it.

**6 - The SOUND File (/gamedata)** All units use sound (or should) when performing various basic functions, such as being selected, confirming an order or announcing its arrival somewhere. Every unit FBI contains a tag called "SoundCatagory", which lists a catagory as given in the Sound file. The Sound file contains a bunch of catagories which list which functions perform which sounds, for which units. So if you want to make a recording of yourself screaming, and want to make a unit play that when it moves.. well, there you go.

**7 - The CORPSE File (/features/corpses)** Most units have some sort of corpse file, ie, a burnt wreck that it leaves when it dies. The corpse files are like mini FBI files but contain a lot less data, usually containing only basic information such as what model to use as the wreckage, how much metal the wreck will give if reclamated, etc...

**8 - The TEXTURES File(s) (/unittextures and /unittextures/tatex)** There are two different types of texture files. First are Total Annihilation-style single-face textures, which are saved as .bmp files in the unittexutres/tatex folder. 3DO units use these archaic things. Then there are skins, which are usually .DDS but often .PNG or .TGA files. They are a single image file which is stretched over the unit, and contains everything from which parts should reflect light, to which parts should generate light, to where to show teamcolour and of course the basic graphical design of the unit. Go find out how to skin for yourself.

**9 - The UNIT PICTURE File(s) (/unitpics)** Unit pictures are those little thumbnails which show up in the build menus of units ingame. They're just a little graphical representation of the unit so people know what they're building when they click it. These are just basic graphic files, like .BMPs, which are named in the unit's FBI file (with the Buildpic=xxxx.bmp; tag).

Well, that's basically it. Took me all of 15 minutes to write. Well, it's very basic but I hope it helps introduce some new potential modders in a nice, easy-to-understand way.

C'est la vie!

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Units:Files](https://springrts.com/wiki/Units:Files).*
