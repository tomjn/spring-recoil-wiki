---
title: "User:Enetheru/Dump"
source_url: "https://springrts.com/wiki/User:Enetheru/Dump"
---
# User:Enetheru/Dump

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

I'm so sick of these thoughts that repeatedly pop into my head.. so here is a place to dump them, so hopefully they will stop running around in there causing me strife.

## Lobby

Why is there some weird dedicated IRC chat thingo.. really i just want to be able to load up my irc client and log in to ask questions and hang out.. I really don't want to use some shitty lobby, i know there is an IRC bridge, but extra work is putting up barriers to entry.

## file formats

### textures

Why are the formats so fucked up and difficult to use, and why are there so many. the primary texture for any object should be its diffuse+alpha, then everything else put in a secondary or more textures. it makes no sense to do it any other way.. it creates difficulty unnecessarily.

### 3d models

Why does the engine support so many formats, it may be slightly convenient for that one person who uses some obscure format.. but it fragments the art dev community. pick something that works and use it, everything else can be marked as unsuitable. then all assets will be the same.. if you need to change it, perform a system wide change.. also i cant imagine how much code maintenance that must be to support. this goes for 3d formats as well as 2d formats.. official documentation should pick one and stick to it.

## Tools

### MapConv

Why is one of the core tools Mapconv separate from the engine, considering spring is supposed to be an engine which others use, the fact that mapconv isn't treated as an integral part of the whole is ludicrous.. currently its suffering bitrot and incompatibility due to lack of maintenance.

## incubation, birth, learning, leaving the nest

### Spring hosted

Spring is an incubator for its projects, provide servers, tools, community, testing etc. all the games use this incubation chamber to run their world. but it appears that leaving the nest is super hard.

### turnkey

Network infrastructure.. or infrastructure in general is also a tool.. if i want to create a game using the engine i don't necessarily want to integrate with the rest of the spring community, but i want it as an option.. when i download the package i want to have the tools to create me own game and release in multiple ways. a client, a server. and the server i want options for not just a host, but a chat host, file server for maps and mods, mumble server.. basically for a client i just want the lobby + engine.. but for the server i want Live CD/meta-package that auto installs all components and has shell scripts all made to run all services on the host. that way i can use the engine to make my game, and then run servers completely independently from the rest of the spring community. I also want the options to not run independently, if my game is small, or experimental.

## map format ideas

### Rotation of Tiles

The tileindex inside the smf uses 32bit unsigned integers to store the index, thats 4 294 967 296 tiles that can be referenced.. lets put that in perspective..

- if every tile was unique
- the map was square
- 32x32 was the smallest tile size

that's a map size of 4096x4096.\
the current recommended maximum size of maps is 32x32... so you would have to reference 16 384 different smt's with unique data the same as a 32x32 map to use up all those integers... I think we have unused data in the map format!

What would be good is a dual strategy, if you dont need all the bits, dont use all the bits and pack up the data tighter, this would definitely help smf size, but compared to the smt only a drop in the ocean.

we could use the unused bits to specify rotation, 28 bits still leaves 268 435 456 tiles thats still a map size of 1024x1024 of unique tiles. but I think a round figure like 24 bits for tile references, which is a map size of 256x256 unique tiles, leaves 8 bits for extra purposes.

2 of those bits can be used to specify tile rotation, if your map is mirrored on the x and y coordinates then you can receive a 4x reduction in smt size.

#### Challenges

the shading for the terrain mesh is spread out all over the place, The shading methods are three fold, fixed function, ARB shaders GLSL shader. each system would need to be modified to complete the project. SMFRenderState.{cpp,h}

The UV coordintes are generated with glgentexi for each ROAM patch, so the size of the tiles at render time are the size of patches.

## Modularisation

The engine project should support drop in replacement/selectable replacement for components like the pathfinder/map format/assets/interface use etc. for instance, once again the discussion on why we cant have nice things(3d terrain) came up again and i got to thinking of researching how and why again.. it all leads to the same place.. dont break backwards compatability, new features are slower shittier.. so i got to thinking of replacing a single component of the system for testing purposes... but why cannot that be the norm? surely for certain styles of games a different pathfinder would be faster/more accurate depending on needs. its up to the games to determine what they want to use. everything is too closely linked. the source code already gives some ways to do this, and some features already support similar things, like water, old terrain and ROAM. perhaps a protocol for communicating replacement concepts.

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Enetheru/Dump). Original page: [User:Enetheru/Dump](https://springrts.com/wiki/User:Enetheru/Dump).*
