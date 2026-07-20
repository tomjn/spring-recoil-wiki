---
title: "Lua ConstGame"
source_url: "https://springrts.com/wiki/Lua_ConstGame"
categories:
  - "Lua"
---
# Lua ConstGame

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua ConstGame

## Engine

Word of advice. Do not modify tables provided by the engine - like Game. Many of them are internally implemented as engine calls.

string [Game.version](#gameversion)

Removed from version 104.0 Now in [Lua_ConstEngine](/lua-constengine)

string [Game.buildFlags](#gamebuildflags)

Removed from version 104.0 Now in [Lua_ConstEngine](/lua-constengine)

number [Game.gameID](#gamegameid)

Replaced in 89.0 with GameID(string gameID) synced callin

number [Game.maxUnits](#gamemaxunits)

number [Game.maxTeams](#gamemaxteams)

number [Game.maxPlayers](#gamemaxplayers)

number [Game.squareSize](#gamesquaresize)

Divide Game.mapSizeX or Game.mapSizeZ by this to get engine's "mapDims" coordinates

number [Game.gameSpeed](#gamegamespeed)

## Host

number [Game.gameMode](#gamegamemode)

 Removed from version 83.x

number [Game.startPosType](#gamestartpostype)

bool [Game.commEnds](#gamecommends)

 Removed from version 83.x

bool [Game.limitDGun](#gamelimitdgun)

 Removed from version 83.x

bool [Game.ghostedBuildings](#gameghostedbuildings)

## Checksums

string [Game.mapChecksum](#gamemapchecksum)

string [Game.modChecksum](#gamemodchecksum)

## Map

bool [Game.mapDamage](#gamemapdamage)

string [Game.mapName](#gamemapname)

string [Game.mapDescription](#gamemapdescription)

= string **Game.mapHumanName**

number [Game.mapHardness](#gamemaphardness)

number [Game.mapX](#gamemapx)

number [Game.mapY](#gamemapy)

number [Game.mapSizeX](#gamemapsizex)

in worldspace/opengl coords. Divide by Game.squareSize to get engine's "mapDims" coordinates

number [Game.mapSizeZ](#gamemapsizez)

in worldspace/opengl coords. Divide by Game.squareSize to get engine's "mapDims" coordinates

number [Game.gravity](#gamegravity)

number [Game.tidal](#gametidal)

number [Game.windMin](#gamewindmin)

number [Game.windMax](#gamewindmax)

number [Game.extractorRadius](#gameextractorradius)

number [Game.waterDamage](#gamewaterdamage)

table [Game.envDamageTypes](#gameenvdamagetypes)

Containing {def}IDs of environmental-damage sources New in version 104.0.

## Mod

string [Game.gameName](#gamegamename)

New in version 95.0

string [Game.gameShortName](#gamegameshortname)

New in version 95.0

string [Game.gameVersion](#gamegameversion)

New in version 95.0

string [Game.gameMutator](#gamegamemutator)

New in version 95.0

string [Game.gameDesc](#gamegamedesc)

New in version 95.0

string [Game.modName](#gamemodname)

deprecated (it is in contrast to gameName appended with gameVersion!)

string [Game.modShortName](#gamemodshortname)

deprecated\

string [Game.modVersion](#gamemodversion)

deprecated\

string [Game.modMutator](#gamemodmutator)

deprecated\

string [Game.modDesc](#gamemoddesc)

deprecated\

bool [Game.allowTeamColors](#gameallowteamcolors)

bool [Game.requireSonarUnderWater](#gamerequiresonarunderwater)

number [Game.transportAir](#gametransportair)

number [Game.transportShip](#gametransportship)

number [Game.transportHover](#gametransporthover)

number [Game.transportGround](#gametransportground)

number [Game.fireAtKilled](#gamefireatkilled)

number [Game.fireAtCrashing](#gamefireatcrashing)

## Constructor

bool [Game.constructionDecay](#gameconstructiondecay)

bool [Game.reclaimAllowEnemies](#gamereclaimallowenemies)

bool [Game.reclaimAllowAllies](#gamereclaimallowallies)

number [Game.constructionDecayTime](#gameconstructiondecaytime)

number [Game.constructionDecaySpeed](#gameconstructiondecayspeed)

number [Game.multiReclaim](#gamemultireclaim)

number [Game.reclaimMethod](#gamereclaimmethod)

number [Game.reclaimUnitMethod](#gamereclaimunitmethod)

number [Game.reclaimUnitEnergyCostFactor](#gamereclaimunitenergycostfactor)

number [Game.reclaimUnitEfficiency](#gamereclaimunitefficiency)

number [Game.reclaimFeatureEnergyCostFactor](#gamereclaimfeatureenergycostfactor)

number [Game.repairEnergyCostFactor](#gamerepairenergycostfactor)

number [Game.resurrectEnergyCostFactor](#gameresurrectenergycostfactor)

number [Game.captureEnergyCostFactor](#gamecaptureenergycostfactor)

## Categories

table [Game.springCategories](#gamespringcategories)

     example: {
       ["vtol"]         = 0,  ["special"]      = 1,  ["noweapon"]     = 2,
       ["notair"]       = 3,  ["notsub"]       = 4,  ["all"]          = 5,
       ["weapon"]       = 6,  ["notship"]      = 7,  ["notland"]      = 8,
       ["mobile"]       = 9,  ["kbot"]         = 10, ["antigator"]    = 11,
       ["tank"]         = 12, ["plant"]        = 13, ["ship"]         = 14,
       ["antiemg"]      = 15, ["antilaser"]    = 16, ["antiflame"]    = 17,
       ["underwater"]   = 18, ["hover"]        = 19, ["phib"]         = 20,
       ["constr"]       = 21, ["strategic"]    = 22, ["commander"]    = 23,
       ["paral"]        = 24, ["jam"]          = 25, ["mine"]         = 26,
       ["kamikaze"]     = 27, ["minelayer"]    = 28, ["notstructure"] = 29,
       ["air"]          = 30
     }

table [Game.armorTypes](#gamearmortypes)

(bidirectional)

     example: {
       [1]  = amphibious,   [2] = anniddm,     [3] = antibomber,
       [4]  = antifighter,  [5] = antiraider,  [6] = atl,
       [7]  = blackhydra,   [8] = bombers,     [9] = commanders,
       [10] = crawlingbombs, ...

       ["amphibious"]   = 1, ["anniddm"]    = 2, ["antibomber"] = 3
       ["antifighter"]  = 4, ["antiraider"] = 5, ["atl"]        = 6
       ["blackhydra"]   = 7, ["bombers"]    = 8, ["commanders"] = 9
       ["crawlingbombs"]= 10, ...
     }

## Water Visuals

Removed from version 104.0 - No longer constant as are now runtime mutable (Use gl.GetWaterRendering(name) instead).

bool [Game.waterVoid](#gamewatervoid)

bool [Game.waterPlane](#gamewaterplane)

string [Game.waterTexture](#gamewatertexture)

string [Game.waterFoamTexture](#gamewaterfoamtexture)

string [Game.waterNormalTexture](#gamewaternormaltexture)

number [Game.waterRepeatX](#gamewaterrepeatx)

number [Game.waterRepeatY](#gamewaterrepeaty)

number [Game.waterSurfaceAlpha](#gamewatersurfacealpha)

number [Game.waterSpecularFactor](#gamewaterspecularfactor)

number [Game.waterFresnelMin](#gamewaterfresnelmin)

number [Game.waterFresnelMax](#gamewaterfresnelmax)

number [Game.waterFresnelPower](#gamewaterfresnelpower)

table [Game.waterCausticTextures](#gamewatercaustictextures)

= {"tex1","tex2",..}

color [Game.waterAbsorb](#gamewaterabsorb)

= { number r, number g, number b}

color [Game.waterBaseColor](#gamewaterbasecolor)

color [Game.waterMinColor](#gamewatermincolor)

color [Game.waterSurfaceColor](#gamewatersurfacecolor)

color [Game.waterSpecularColor](#gamewaterspecularcolor)

color [Game.waterPlaneColor](#gamewaterplanecolor)

color [Game.fogColor](#gamefogcolor)

Removed from version 101.0 (Use gl.GetAtmosphere("fogColor") instead)

color [Game.groundAmbientColor](#gamegroundambientcolor)

Removed from version 101.0 (Use gl.GetSun("ambient") instead)

color [Game.groundSpecularColor](#gamegroundspecularcolor)

Removed from version 101.0 (Use gl.GetSun("specular") instead)

color [Game.groundSunColor](#gamegroundsuncolor)

Removed from version 101.0 (Use gl.GetSun("diffuse") instead)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua ConstGame](https://springrts.com/wiki/Lua_ConstGame).*
