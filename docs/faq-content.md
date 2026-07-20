---
title: "FAQ:Content"
source_url: "https://springrts.com/wiki/FAQ:Content"
categories:
  - "FAQ"
---
# FAQ:Content

<div id="spring-modification-and-game-developement-faq-basics" class="section mw-parser-output">

## Spring Modification and Game Developement FAQ + Basics

### How To Get Help

- **Play Before You Ask Anything:** If you found this site as part of you trying to figure out how to make your dream game that's awesome. Regardless of why you are here, if you want to design games you'll need to familiarize yourself with the engine's capabilities and the best way to do that is to play the games that already exist. As a basic rule, before posting a question, make sure you have at least learned how to download and install content packages and played a multi-player game... if you don't want to play a multi-player game you should at-least spectate a few of them.

<!-- -->

- **Don't Be Stupid:** If You post in a forum and don't present yourself in an intelligent manner demonstrating commitment to your project in the form of actual work or demonstrating the intelligence needed to actually do what what you are asking for, most of the people who reply will be doing so to mock you/scare you away. There are many projects all in competition for help, your project will at many times be just you and you need to be able to do all project related tasks if you expect to reach completion.

<!-- -->

- **Figure Out What You Are Asking For:** If you are unsure where to start, posting a "Where do I start?" topic without any details is not the right approach. Figure out what you want to do (make a new Game Type or Mutator, Make New Units, Make a New Map, Make a Mission or Campaign, Make an AI) and ask for that specifically.

<!-- -->

- **We Help Those Who Help Themselves:** Don't post something like "I have this awesome Idea, help me make it!", without also posting what contributions you intend to provide to the project... if you are just posting an idea and intend to be "The Idea Guy" then you probably want to post it in the Off-Topic forums.

<!-- -->

- **Don't Take It Personally:** Without exception, no matter how hard you try, no matter how awesome you are at modeling, scripting or game design... someone is going to try to "Help" you by being a jerk to you... These people have usually interpreted your behavior as being cocky or n00bish and want to tear you down as a way of weeding useless people out of the community. When this happens, just ignore them and press on or leave.

<!-- -->

- **If No One Helps You Don't Get Mad:** If people don't respond to your post it's likely because the people who know the answer are busy working on their own projects and haven't taken the time to check the forums. First, be patient. Second, poke around with the documentation or crack open a pre-existing Package and try to figure out a better way to ask your question. Finally, you can also log in to the lobby software and ask there, check the list of available channels, there's usually one about the topic you are trying to learn... if all else fails just ask in \#main.

### Stuff Everyone Should Know

Spring is an Engine designed to allow people to make real-time strategy games... It is not a game in itself. Unfortunately this has lead to a lot of very complex and bitter arguments on semantics, the results of which can be summarized as follows:

"Content" can be developed for Spring and distributed in "Content Packages" (namely SDZ, SD7 Files or SDD folders) or dumped into your Spring directory structure directly (a bad idea in many cases, as except for certain notable exceptions it will cause you to be unable to synchronize with other players). The content of these Packages can take the form of Units, Textures, Models (3DO or S3O), Game Types and Maps... (Lua and COB Scripts along with other Data Files may also count in certain contexts...)

This leads to a bunch of quazi-defined meta-terminology:

#### General Terminology

**TA-ist/TA-isms**: Spring was initially designed to play a Port of XTA, a Mod of Total Annihilation build for the original Total Annihilation engine. As such there are a number of things, like the resource structure, the general interface, unit tags (and to be honest nearly everything that isn't Lua) that are essentially extensions of this concept.

#### "Game Type" Terminology

**Mods, Games and Mutators** are all essentially synonyms for "A Content Package Containing At Least One Game Type". Colloquially speaking:

- **Mods** are modifications of existing games, in almost all cases these are a Derivative Work of Total Annihilation.

<!-- -->

- **Games** Projects creating Original Works, independent of the aforementioned Total Annihilation data and Copyright.

<!-- -->

- **Mutators** are new Game Types meant to be used in conjunction with an existing Package called a "dependency". They are not meant to be mods as they exist to facilitate the addition of features or the altering of gameplay for the core of a project. In the more common vernacular of video gaming these would have been mods.

**Modders, (Mod-)Devs, Game Developers** are interchangeable terms for the people working on a Project. Typically someone who is working with existing content developed by someone else falls into the **"Modders"** category and and those who are creating all new content are called **"Game Developers"**, but most content developers tend to both create new content and modify existing content so the terms are really more a matter of preference.

**Game Designers** Aka, idea men, most of us are intelligent enough to come up with the code to pull off these crazy ideas you suggest. Odds are that intellect also comes with the creativity to have our own ideas. Idea men are not needed here and will find themselves alone and without the ability to finish their project.

**Units** are entity templates defined in text files that reference Model, Other Text Files, Script and Texture files (sometimes this reference is inferred). Like most RTS Games, a Game Type in Spring will typically define one or more kind of starting unit which will be able to be given orders to do things like move, attack and build new other units. The term "Units" is used both to describe these definitions and the resulting instances in games.

**Features and Wreckage** are special types of Units that are not owned by any player. These include things like rocks and trees as well as the corpses of fallen units.

#### Map Terminology

A map in Spring consist of a heightfield, environmental lighting and sky settings, type map, texture, metal map and features. the Map Data Files:

- (SMD), contains parameters that set things such as lighting and startpoints
- (SMT), Tiles File
- (SMF), Contains the heightmap, metal map, typemap and and the feature and grass layout information

Maps may also include their own lua gadgets, which are to be stored in lua gaia. They may have their own feature models, units, effects and even map options which allow a host to change properties of the map.

#### Scripting Terminology

**Synchronized Code** Lua Gadgets and Unit Scripts (Lua or COB) are what is referred to as synchronized code. They define much of the behavior of all Games of a given Game Type and as such must act the same on all players computers. Because Unit animation is used for things like aiming speed, how long it takes a unit to open and close, or when it is able to shoot a specific weapon, all of the code for this behavior is synchronized.

**Gadgets** are Lua scripts that are inherent to a "Game Type", they can define pretty much anything from which units are available to custom resources to unit animations to GUI elements. If you ask a question like "Is it possible for the game I'm building to do X" the answer is most-probably, "Yes, with enough Lua". You could for example use Lua, in conjunction with the Spring Engine, to build a first person shooter or turn based strategy game... though it would take an awful lot of creative Lua to do so.

**Lua Unit Definitions and Scripts** Lua can also be used within the traditional TA-ist framework to set the values of a Unit's tags and define the Unit's animation scripts.

'*Widgets* are Lua scripts that are not inherent to ~~the~~ ~~a~~ yes "Game Type" (though they might be included along with a Game Type in a Package). They define things like custom GUI elements, macro-equivalent short-cut commands or pretty much anything that is specific to your individual client session and not the game simulation. Widgets are one of the few things you can drop relatively safely into your Spring directory structure without interfering with sync.

**COB** is a compiled script that is a derived form of the unit script files in Total Annihilation. Many Game Types still use COB to define how their units behave. **BOS** files are the source-code form of a COB file, they are sometimes included along with the COB files by kind Game Developers to be used as reference.

### General Development FAQ

This covers the basic concepts of Spring Content creation that are common to all Game Types, Maps or Content in general.

#### How I Mod?!

In general, the first thing you'll want to do is crack open an existing Package for the type of thing you want to modify.

Packages Will contain some or all of the following Files:

- Data Files (Plain Text files with the extension .TDF (for "Total Annihilation Data File") or .FBI)
- Textures (in the form of Image files)
- Models (in 3DO or S3O format)
- Scripts (in Lua or compiled COB format)
- Map Tiles (Compiled SMT files (not human readable))
- Map Data (Plain Text SMD Files)
- Map "Everything Else" Files (Compiled SMF files (not human readable))

These are all stored in either ZIP or 7zip Format and can both be opened with <a href="http://www.7-zip.org/" class="external text" rel="nofollow">7zip</a>

#### So Really, How do I Mod the Spring Engine?

You Don't, see next section.

#### Okay... How do I Create a new Project or Modify an existing Package For the Spring Engine?

That depends, do you want to:

- Make a New Unit
- Modify an Existing Game Type
- [Make a Map](/mapdev-main)
- Script a Widget
- Make a New Game Type

#### Where do I put all these files?

The folder structure for a Package is the same for every Game Type or Map:

First start with a ".SDD" folder or SDZ/SD7 Archive within the "Packages", "Maps" or "Mods" Folder chosen within your Spring Preferences:

- **.SDD Folder:** Create a folder called "PackageName.SDD" containing your files
- **SDZ:** Create a ZIP file containing your files and rename it to PackageName.SDZ
- **SD7:** Create a 7z file containing your files and rename it to PackageName.SD7

Within your mod folder or archive you need to have the following [folder structure](/gamedev-archives):

[<img src="/images/Folder-red.gif" decoding="async" width="14" height="14" alt="Folder-red.gif" />](/images/Folder-red.gif)Root (SDZ/SD7 Archive or .SDD Folder)\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)modinfo.lua - basic information about a Game Type and it's dependencies\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)anims\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)Images related to Cursors\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)download\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)FileName.TDF - Old Style way to decide which units can be built by what units\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)features\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)corpses\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)TDF\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)allworlds\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/Blank-Piece.png" decoding="async" width="18" height="18" alt="Blank-Piece.png" />](/images/Blank-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)TDF\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)gamedata\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)MOVEINFO.TDF\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)SIDEDATA.TDF\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)SOUND.TDF\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)guis\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)SomeFile.TDF\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)objects3d\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)3DO\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)S3O\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)maps\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)MapName.SMF\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)MapName.SMD\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)MapName.SMT\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)scripts\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)BOS\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)COB\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)Lua\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)sidepics\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)BMP\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)sounds\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)WAV\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)unitpics\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)Images\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)unittextures\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)Image textures for S3O models\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)tatex\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/Blank-Piece.png" decoding="async" width="18" height="18" alt="Blank-Piece.png" />](/images/Blank-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)Images for 3DO models\
[<img src="/images/T-Piece.png" decoding="async" width="18" height="18" alt="T-Piece.png" />](/images/T-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)units\
[<img src="/images/V-Piece.png" decoding="async" width="18" height="18" alt="V-Piece.png" />](/images/V-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)UnitNames.FBI\
[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/Folder-yellow.gif" decoding="async" width="14" height="14" alt="Folder-yellow.gif" />](/images/Folder-yellow.gif)weapons\
[<img src="/images/Blank-Piece.png" decoding="async" width="18" height="18" alt="Blank-Piece.png" />](/images/Blank-Piece.png)[<img src="/images/L-Piece.png" decoding="async" width="18" height="18" alt="L-Piece.png" />](/images/L-Piece.png)[<img src="/images/File.gif" decoding="async" width="16" height="16" alt="File.gif" />](/images/File.gif)Weapons.TDF\

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [FAQ:Content](https://springrts.com/wiki/FAQ:Content).*
