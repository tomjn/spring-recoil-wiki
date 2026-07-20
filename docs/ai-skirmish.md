---
title: "AI:Skirmish"
source_url: "https://springrts.com/wiki/AI:Skirmish"
categories:
  - "AI"
---
# AI:Skirmish

<div class="mw-parser-output">

## What are AIs/Bots?

Skirmish AIs (old term: Global AIs), also called Bots or simply AIs, are what the computer opponents in games are called. Developing a good Skirmish AI is a major undertaking and requires quite a bit of know how. As the SY's had more important things to do than developing an AI, they have left this job up to the community. Spring Skirmish AIs are a non integral part of the engine (plugins), and can be added and removed from your spring installation just as mods or maps.

The community and AI research students have released quite a few [Skirmish AIs](/ai-skirmish-list) already.

## How to install

**0.79 +**  
The Skirmish AI you have downloaded will likely be an archive (eg *.zip*), containing one folder with the AIs short name and a subfolder therein representing its version number, eg: *MyAI/1.23*. This has to be extracted into one of your spring data directories under *AI/Skirmish/*. On windows, you will simply extract into *\$mySpringInstallDir/AI/Skirmish/*. The AI should then show up in your lobby, when you start it the next time, or make it reload the list of AIs. You may find further installation instructions in the readme that comes with the AI.

<!-- -->

**0.78 -**  
The Global AI you have downloaded will likely contain one file *xxx.dll/so* and possibly other files/folders. The shared library and other files need to be placed in */AI/Bot-libs/*, within the main Spring folder. The AIs should then show up in TASClient/SpringLobby (possibly after restarting the program or refreshing the AI list). You may find further installation instructions in the readme that comes with the AI.

The Spring installer for windows and the Linux packages come with some AIs packaged already. If you want more AIs, you may search the Spring forum or the [list of Spring Skirmish AIs](/ai-skirmish-list).

If the AI you installed does not show up, or is marked by your lobby as too old, you may have to get a new version of it.

## How to use

- on your lobby, create a multiplayer game;
- click on "Add Bot";
- [select](#which-ai-to-choose) an appropriate AI;
- carry out any additional configuration you wish;
- start the game.

## Which AI to choose

If the game comes with an included AI, this AI is usually the best choice. At least the games Spring S44, Kernel Panic and zero-K have a "specialised" AI that know how to play the game they were made for.

Because the Spring engine is under constant development, old mods die, common ones change and new ones get created, plus the fact that AI development is a difficult task in general, make AI development for Spring a tough job. In an ideal world, we would only need one Skirmish AI, that plays all mods of Spring perfectly. In practice, this is not going to happen. All current Skirmish AIs for Spring have their strengths and defects. Some are very competitive in Balanced Annihilation, but fail to build even a single building in most other mods. Some need config file management by the user, but therefore are able to play most mods out there.

Since Spring version 0.79, Skirmish AIs come with meta info that is shown to you by the lobby when you click on "Add Bot". This meta information, among other things, contains a description of the AI which should give you an idea about whether this AI suits your needs or not. For further info, you may check out the URL associated with the AI.

In practice, you will probably end up testing some of the AIs with your favourite mod. Have a look at the [list](/ai-skirmish-list) of Spring skirmish AIs.

If you want to know more about how AIs work under Spring, have a look at the [AI Interface system](/ai-development-system) explanation.

## AI comparing tables

Click [here](/ai-compare).

## How To Write

Check out the [Skirmish AI development](/ai-development) page.

**[\<- Back to Main page](/main-page)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:Skirmish](https://springrts.com/wiki/AI:Skirmish).*
