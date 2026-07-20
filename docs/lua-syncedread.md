---
title: "Lua SyncedRead"
source_url: "https://springrts.com/wiki/Lua_SyncedRead"
categories:
  - "Lua"
---
# Lua SyncedRead

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua SyncedRead

## Game

### Special TeamID Variables

The following special TeamIDs are not supported by all functions. For Widgets, instead of Spring.MY_UNITS, use Spring.GetLocalTeamID().\

number [Spring.ALL_UNITS](#springall-units)

number [Spring.MY_UNITS](#springmy-units)

number [Spring.ALLY_UNITS](#springally-units)

number [Spring.ENEMY_UNITS](#springenemy-units)

Spring.[GetGaiaTeamID](#getgaiateamid) (  )\
return: number teamID

### GameStates

Spring.[IsGodModeEnabled](#isgodmodeenabled) (  )\
return: bool enabled

Spring.[IsCheatingEnabled](#ischeatingenabled) (  )\
return: bool enabled

Spring.[IsDevLuaEnabled](#isdevluaenabled) (  )\
return: bool enabled

Spring.[IsEditDefsEnabled](#iseditdefsenabled) (  )\
return: bool enabled

Spring.[AreHelperAIsEnabled](#arehelperaisenabled) (  )\
return: bool enabled

Spring.[FixedAllies](#fixedallies) (  )\
return: nil \| bool enabled

Spring.[IsGameOver](#isgameover) (  )\
return: bool enabled

### RulesParams

The following functions allow to save data per game, team and unit. The advantage of it is that it can be read from anywhere (even from LuaUI and AIs!)\
String values are new since 95.0.

Spring.[GetGameRulesParam](#getgamerulesparam) ( number ruleIndex \| string ruleName )\
return: nil \| number value \| string value

Spring.[GetGameRulesParams](#getgamerulesparams) (  )\
return: nil \| { \[ruleName1\] = number value1 \| string value1, ... }

Spring.[GetTeamRulesParam](#getteamrulesparam) ( number teamID, number index \| string ruleName )\
return: nil \| number value \| string value

Spring.[GetTeamRulesParams](#getteamrulesparams) ( number teamID )\
return: nil \| { \[ruleName1\] = number value1 \| string value1, ... }

Spring.[GetUnitRulesParam](#getunitrulesparam) ( number unitID, number index \| string ruleName )\
return: nil \| number value \| string value

Spring.[GetUnitRulesParams](#getunitrulesparams) ( number unitID )\
return: nil \| { \[ruleName1\] = number value1 \| string value1, ... }

Spring.[GetFeatureRulesParam](#getfeaturerulesparam) ( number featureID, number index \| string ruleName )\
return: nil \| number value \| string value

Spring.[GetFeatureRulesParams](#getfeaturerulesparams) ( number featureID )\
return: nil \| { \[ruleName1\] = number value1 \| string value1, ... }

### Mod-/Map-Options

Spring.[GetModOptions](#getmodoptions) (  )\
return: { } \| { "keyName1" = string "value", "keyName2" = string "value", ... }

Spring.[GetMapOptions](#getmapoptions) (  )\
return: { } \| { "keyName1" = string "value", "keyName2" = string "value", ... }

Warning: boolean values are not transfered from C to Lua correctly. For this reason the respective option has to be converted to a number and checked accordingly via an IF statement as shown below:\

    if (tonumber(Spring.GetModOptions.exampleOption) == 1) then...end

The following check therefore is insufficient!

    if (Spring.GetModOptions.exampleOption) then...end

### Speed/Time

Spring.[GetGameSpeed](#getgamespeed) (  )\
return: number userSpeedFactor, number speedFactor, bool paused

As of 98.0 moved to [Lua_UnsyncedRead](/lua-unsyncedread) due to desyncs in replays/demos

Spring.[GetGameFrame](#getgameframe) (  )\
return: number frameNum%dayFrames, number frameNum/dayFrames

Spring.[GetGameSeconds](#getgameseconds) (  )\
return: number seconds

### Vectors

Spring.[GetWind](#getwind) (  )\
return: number dirX, number dirY, number dirZ, number strength, number normDirX, number normDirY, number normDirZ

Spring.[GetHeadingFromVector](#getheadingfromvector) ( number x, number z )\
return: number heading

Spring.[GetVectorFromHeading](#getvectorfromheading) ( number heading )\
return: number x, number z

## Sides/Factions

Spring.[GetSideData](#getsidedata) ( string sideName )\
return: nil \| string startUnit, string caseSensitiveSideName

or

Spring.[GetSideData](#getsidedata) ( number sideID )\
return: nil \| string sideName, string startUnit, string caseSensitiveSideName

or

Spring.[GetSideData](#getsidedata) (  )\
return: { \[1\] = { sideName = string, caseName = string, startUnit = string} }, \[2\] = { ..., ..., ... }, ... }

## Teams

### StartBoxes/StartPositions

Spring.[GetAllyTeamStartBox](#getallyteamstartbox) ( number allyID )\
return: nil \| number xMin, number zMin, number xMax, number zMax

Spring.[GetTeamStartPosition](#getteamstartposition) ( number teamID )\
return: nil \| number x, number y, number z

### Player,Team,Ally Lists/Info

Note: AIs are associated to teamIDs (and do not have playerIDs). Code to cycle through AI teamIDs can be found <a href="https://springrts.com/phpbb/viewtopic.php?f=21&amp;t=36873#p586026" class="external text" rel="nofollow">here</a>

Spring.[GetPlayerList](#getplayerlist) ( \[ number teamID = -1 \| bool onlyActive = false \[, number teamID \| bool onlyActive \] \] )\
return: nil \| { \[1\] = number playerID, etc... }

From 104.0 onwards spectators will be ignored if a valid (\>=0) teamID is given.

Spring.[GetTeamList](#getteamlist) ( \[ number allyTeamID = -1 \] )\
return: nil \| { \[1\] = number teamID, etc... }

Spring.[GetAllyTeamList](#getallyteamlist) (  )\
return: { \[1\] = number teamID, etc... }

Spring.[GetPlayerInfo](#getplayerinfo) ( number playerID )\
return: nil \| string "name", bool active, bool spectator, number teamID, number allyTeamID, number pingTime, number cpuUsage, string "country", number rank, table customPlayerKeys

PRE-83.0: in synced code "name" is "SYNCED_NONAME"!

Spring.[GetPlayerControlledUnit](#getplayercontrolledunit) ( number playerID )\
return: nil \| number unitID

Spring.[GetAIInfo](#getaiinfo) ( number teamID )\
return: number skirmishAIID, string "name", number hostingPlayerID, string "shortName", string "version", table options

Note: Before 0.82, the first argument was teamID, and then every other argument with a shifted position.\

shortName, (synced =\> "SYNCED_NOSHORTNAME"; non-local =\> "UNKNOWN")\
version, (synced =\> "SYNCED_NOVERSION"; non-local =\> "UNKNOWN")\
options (synced & non-local =\> empty-table)

Spring.[GetAllyTeamInfo](#getallyteaminfo) ( number allyteamID )\
return: nil \| table customTeamKeys

Spring.[GetTeamInfo](#getteaminfo) ( number teamID )\
return: nil \| number teamID, number leader, bool isDead, bool isAiTeam, string "side", number allyTeam, number incomeMultiplier, table customTeamKeys

Spring.[GetTeamResources](#getteamresources) ( number teamID, string "metal" \| "energy" )\
return: nil \| number currentLevel, number storage, number pull, number income, number expense, number share, number sent, number received

Spring.[GetTeamUnitStats](#getteamunitstats) ( number teamID )\
return: nil \| number killed, number died, number capturedBy, number capturedFrom, number received, number sent

Spring.[GetTeamUnitStats](#getteamunitstats) ( number teamID, string "metal" \| "energy" )\
return: nil \| number used, number produced, number excessed, number received, number sent

Spring.[GetTeamUnitStats](#getteamunitstats) ( number teamID )\
return: nil \| number cur_max_index

cur_max_index is possible range for startIndex/endIndex :={1..cur_max_index}

or

Spring.[GetTeamUnitStats](#getteamunitstats) ( number teamID, number startIndex \[, number endIndex = startIndex \] )\
return: nil \| table stats (see below for table content description)

     table stats = {
          [1] = {
            "time"             = number,
            "frame"            = number,
            "metalUsed"        = number,
            "metalProduced"    = number,
            "metalExcess"      = number,
            "metalReceived"    = number,
            "metalSent"        = number,
            "energyUsed"       = number,
            "energyProduced"   = number,
            "energyExcess"     = number,
            "energyReceived"   = number,
            "energySent"       = number,
            "damageDealt"      = number,
            "damageReceived"   = number,
            "unitsProduced"    = number,
            "unitsDied"        = number,
            "unitsReceived"    = number,
            "unitsSent"        = number,
            "unitsCaptured"    = number,
            "unitsOutCaptured" = number,
            "unitsKilled"      = number
          }, ...
       }

Spring.[GetTeamLuaAI](#getteamluaai) ( number teamID )\
return: string "luaAI"

Returns string containing name of AI defined in file LuaAI.lua as name="\<AI name\>". Maybe it returns whole table with all values there, but in my LuaAI.lua name is on first position...

### Teams/PlayersAllied

Spring.[AreTeamsAllied](#areteamsallied) ( number teamID1, number teamID2, ... )\
return: nil \| bool isAllied

Spring.[ArePlayersAllied](#areplayersallied) ( number playerID1, number playerID2, ... )\
return: nil \| bool isAllied

## Units

### GetUnits

Spring.[GetAllUnits](#getallunits) (  )\
return: nil \| table unitTable = { \[1\] = number unitID, ... }

Note that when called from a widget, this also returns units that are only radar blips. For units that are radar blips, you may want to check if they are in los, as GetUnitDefID() will still return true if they have previously been seen. See the UnsyncedRead GetVisibleUnits() call.

Spring.[GetTeamUnits](#getteamunits) ( number teamID )\
return: nil \| table unitTable = { \[1\] = number unitID, ... }

Spring.[GetTeamUnitsSorted](#getteamunitssorted) ( number teamID )\
return: nil \| table unitDefTable = { \[number unitDefID\] = { \[1\] = number unitID, ... }, ... }

Spring.[GetTeamUnitsCounts](#getteamunitscounts) ( number teamID )\
return: nil \| table countTable = { \[number unitDefID\] = count, ... }

Spring.[GetTeamUnitsByDefs](#getteamunitsbydefs) ( number teamID, number unitDefID \| tableUnitDefs = { number unitDefID1, ... } )\
return: nil \| table unitTable = { \[1\] = number unitID, ... }

Spring.[GetTeamUnitDefCount](#getteamunitdefcount) ( number teamID, number unitDefID )\
return: nil \| number count

Spring.[GetTeamUnitCount](#getteamunitcount) ( number teamID )\
return: nil \| number count

Spring.[GetUnitsInRectangle](#getunitsinrectangle) ( number xmin, number zmin, number xmax, number zmax \[, number teamID \] )\
return: nil \| table unitTable = { \[1\] = number unitID, etc... }

Spring.[GetUnitsInBox](#getunitsinbox) ( number xmin, number ymin, number zmin, number xmax, number ymax, number zmax \[, number teamID \] )\
return: nil \| table unitTable = { \[1\] = number unitID, etc... }

Spring.[GetUnitsInSphere](#getunitsinsphere) ( number x, number y, number z, number radius \[, number teamID \] )\
return: nil \| table unitTable = { \[1\] = number unitID, etc... }

Spring.[GetUnitsInCylinder](#getunitsincylinder) ( number x, number z, number radius \[, number teamID \] )\
return: nil \| table unitTable = { \[1\] = number unitID, etc... }

Spring.[GetUnitsInPlanes](#getunitsinplanes) ( table planes = { \[1\] = number normalVecX, number normalVecY, number normalVecZ, number d }, etc... } )\
return: nil \| table unitTable = { \[1\] = number unitID, etc... }

Plane normals point towards accepted space, so the acceptance criteria for each plane is:

        radius     = unit radius
        px, py, pz = unit position
        [(nx * px) + (ny * py) + (nz * pz) + (d - radius)]  <=  0

Spring.[GetUnitNearestAlly](#getunitnearestally) ( number unitID \[, number range \] )\
return: nil \| number unitID

Spring.[GetUnitNearestEnemy](#getunitnearestenemy) ( number unitID \[, number range \[, bool useLOS \]\] )\
return: nil \| number unitID

Post 95.0 this no longer returns neutral units.

### Unit Informations

Spring.[ValidUnitID](#validunitid) ( number unitID )\
return: bool valid

Spring.[GetUnitIsDead](#getunitisdead) ( number unitID )\
return: nil \| bool isDead

Returns false if unit exists and is alive, true for a brief period of time after unit dies, nil otherwise. Keep this in mind when using (not Spring.GetUnitIsDead() ). Also very important to note, that you can receive units that are 'already dead', when you do a Spring.GetAllUnits() call. These 'dead' units have already had their unitdestroyed callins called, and that will not get called again, and even more interestingly, these units are also valid, as in the above ValidUnitID callin will return true. The GetUnitIsDead howerver, will return true for these units, that are already dead but still valid units.

Spring.[GetUnitTooltip](#getunittooltip) ( number unitID )\
return: nil \| string tooltip

Spring.[GetUnitDefID](#getunitdefid) ( number unitID )\
return: nil \| number unitDefID

Spring.[GetUnitTeam](#getunitteam) ( number unitID )\
return: nil \| number teamID

Gets which team a unit belongs to. Note that this still returns the old team when called from the UnitTaken / UnitGiven callins.

Spring.[GetUnitAllyTeam](#getunitallyteam) ( number unitID )\
return: nil \| number allyID

Spring.[GetUnitLineage](#getunitlineage) ( number unitID )\
return: nil \| number lineage \| number lineage, bool lineageIsRoot

Removed from version 83.0

Spring.[GetUnitNeutral](#getunitneutral) ( number unitID )\
return: nil \| bool neutral

Spring.[GetUnitHealth](#getunithealth) ( number unitID )\
return: nil \| number health, number maxHealth, number paralyzeDamage, number captureProgress, number buildProgress

Build progress is returned as floating point number between 0.0 and 1.0.

Spring.[GetUnitArmored](#getunitarmored) ( number unitID )\
return: nil \| bool armored, number armorMultiple

armorMultiple new in version 0.83.x.

Spring.[GetUnitIsStunned](#getunitisstunned) ( number unitID )\
return: nil \| bool stunned_or_inbuild, bool stunned, bool inbuild

Spring.[GetUnitMaxRange](#getunitmaxrange) ( number unitID )\
return: nil \| number maxEngagementRange

Spring.[GetUnitResources](#getunitresources) ( number unitID )\
return: nil \| number metalMake, number metalUse, number energyMake, number energyUse

Spring.[GetUnitHarvestStorage](#getunitharveststorage) ( number unitID )\
return: nil \| number metal

See also [harvestStorage](/gamedev-unitdefs#harveststorage) UnitDef tag.

Spring.[GetUnitMetalExtraction](#getunitmetalextraction) ( number unitID )\
return: nil \| number metalExtraction

0.82+ and later

Spring.[GetUnitExperience](#getunitexperience) ( number unitID )\
return: nil \| number experience

0.82+ and later

Spring.[GetUnitStates](#getunitstates) ( number unitID )\
return: nil \| table unitStates

The unitStates table arguments are:

    unitStates = {
        "firestate" = number,
        "movestate" = number,
        "repeat" = boolean,
        "cloak" = boolean,
        "active" = boolean,
        "trajectory" = boolean,
        ["autoland" = boolean,]
        ["autorepairlevel" = number,]
        ["loopbackattack" = boolean]
      } 

Spring.[GetUnitIsActive](#getunitisactive) ( number unitID )\
return: nil \| bool active

Spring.[GetUnitIsCloaked](#getunitiscloaked) ( number unitID )\
return: nil \| bool isCloaked

Spring.[GetUnitSelfDTime](#getunitselfdtime) ( number unitID )\
return: nil \| number time

Spring.[GetUnitStockpile](#getunitstockpile) ( number unitID )\
return: nil \| number numStockpiled, number numStockpileQued, number buildPercent

Spring.[GetUnitHeight](#getunitheight) ( number unitID )\
return: nil \| number height

Spring.[GetUnitRadius](#getunitradius) ( number unitID )\
return: nil \| number radius

Spring.[GetUnitMass](#getunitmass) ( number unitID )\
return: nil \| number mass

New in version 101.0

Spring.[GetUnitBlocking](#getunitblocking) ( number unitID )\
return: nil \| bool isBlocking, bool isSolidObjectCollidable, bool isProjectileCollidable, bool isRaySegmentCollidable, bool crushable, bool blockEnemyPushing, bool blockHeightChanges

New in version 95.0\
Additional output arguments.

Spring.[GetUnitPosition](#getunitposition) ( number unitID \[, bool midPos \[, bool aimPos \]\] )\
return: nil \| number basePointX, number basePointY, number basePointZ \[, number midPointX, number midPointY, number midPointZ \[, number aimPointX, number aimPointY, number aimPointZ \]\]

Since 89.0, returns the base (default), middle or aim position of the unit.

Spring.[GetUnitBasePosition](#getunitbaseposition) ( number unitID )\
return: nil \| number posX, number posY, number posZ

Removed from version 89.0 Use GetUnitPosition instead. Returned the bottom of the unit.

Spring.[GetUnitDirection](#getunitdirection) ( number unitID )\
return: nil \| number dirX, number dirY, number dirZ

Returns the direction vector.

Spring.[GetUnitHeading](#getunitheading) ( number unitID )\
return: nil \| number heading

Returns heading directions used in COB scripts.

Spring.[GetUnitRotation](#getunitrotation) ( number unitID )\
return: nil \| number pitch, number yaw, number roll

New in version 95.0

Spring.[GetUnitVelocity](#getunitvelocity) ( number unitID )\
return: nil \| number velX, number velY, number velZ, number velLength

VelLength new in 95.0, it returns the velocity length in one frame. Multiply by 30 (game frames/s) to get an equivalent to unitDef.speed.

Spring.[GetUnitBuildFacing](#getunitbuildfacing) ( number unitID )\
return: nil \| number facing

Spring.[GetUnitIsBuilding](#getunitisbuilding) ( number unitID )\
return: nil \| number unitID

Returns what unit a constructor/factory is currently building.

Spring.[GetUnitCurrentBuildPower](#getunitcurrentbuildpower) ( number unitID )\
return: nil \| number buildPower

New in version 92.0

Spring.[GetUnitNanoPieces](#getunitnanopieces) ( number unitID )\
return: nil \| { \[1\] = number piece1, etc ... }

Spring.[GetUnitTransporter](#getunittransporter) ( number unitID )\
return: nil \| number unitID

Spring.[GetUnitIsTransporting](#getunitistransporting) ( number unitID )\
return: nil \| { \[1\] = number unitID, etc ... }

Spring.[GetUnitShieldState](#getunitshieldstate) ( number unitID \[, number weaponID = -1 \] )\
return: nil \| number isEnabled, number curPower

Spring.[GetUnitTravel](#getunittravel) ( number unitID )\
return: nil \| number travel, number travelPeriod

Marked as deprecated.

Spring.[GetUnitFuel](#getunitfuel) ( number unitID )\
return: nil \| number fuel

Marked as deprecated.

Spring.[GetUnitFlanking](#getunitflanking) ( number unitID, string "dir" )\
return: nil \| number x, number y, number z

or

Spring.[GetUnitFlanking](#getunitflanking) ( number unitID, string "mode" \| string "dir" \| string "moveFactor" \| string "minDamage" \| string "maxDamage" )\
return: nil \| number flankingBonusMode \| number flankingBonusDir.x, number flankingBonusDir.y, number flankingBonusDir.z \| number flankingBonusMobilityAdd \| number minDamage \| number maxDamage

or

Spring.[GetUnitFlanking](#getunitflanking) ( number unitID )\
return: nil \| number mode, number modilityAdd, number minDamage, number maxDamage, number dirX, number dirY, number dirZ

Spring.[GetUnitSensorRadius](#getunitsensorradius) ( number unitID, string type )\
return: nil \| number radius

Possible types are:\
los, airLos, radar, sonar, seismic, radarJammer, sonarJammer

Spring.[GetUnitLosState](#getunitlosstate) ( number unitID \[, number allyTeamID \[, bool raw \]\] )\
return: nil \| number raw \| \[ string "los" = true \[, string "radar" = true \[, string "typed" = true \]\]\]

Raw is only available in gadgets. And RAW returns an bitmask integer, where the bits are:\
1: LOS_INLOS, the unit is currently in the los of the allyteam,\
2: LOS_INRADAR the unit is currently in radar from the allyteam,\
4: LOS_PREVLOS the unit has previously been in los from the allyteam,\
8: LOS_CONTRADAR the unit has continuously been in radar since it was last inlos by the allyteam

Spring.[GetUnitSeparation](#getunitseparation) ( number unitID1, number unitID2 \[, bool 2D \[, bool surfaceDist \]\] )\
return: nil \| number distance

SurfaceDist new in 95.0. Returns the distance of two units. SurfaceDist calculates the distance between the unitsphere surfaces instead of their midpos.

Spring.[GetUnitFeatureSeparation](#getunitfeatureseparation) ( number unitID, number featureID \[, bool 2D \] )\
return: nil \| number distance

New in version 101.0

Spring.[GetUnitDefDimensions](#getunitdefdimensions) ( number unitDefID )\
return: nil \| table defDimensions

DefDimensions table arguments are:

    defDimensions =    {
          "height" = number,
          "radius" = number,
          "midx"   = number,
          "minx"   = number,
          "maxx"   = number,
          "midy"   = number,
          "miny"   = number,
          "maxy"   = number,
          "midz"   = number,
          "minz"   = number,
          "maxz"   = number
        }

Spring.[GetUnitLastAttacker](#getunitlastattacker) ( number unitID )\
return: nil \| number unitID

Spring.[GetUnitLastAttackedPiece](#getunitlastattackedpiece) ( number unitID )\
return: nil \| string pieceName, number gameframe

Spring.[GetUnitMoveTypeData](#getunitmovetypedata) ( number unitID )\
return: nil \| table movetypeData

Spring.[GetUnitCollisionVolumeData](#getunitcollisionvolumedata) ( number unitID )\
return: nil \| number scaleX, number scaleY, number scaleZ, number offsetX, number offsetY, number offsetZ, number volumeType, number testType, number primaryAxis, bool disabled

#### Unit Weapon Informations

Spring.[GetUnitWeaponState](#getunitweaponstate) ( number unitID, number weaponNum )\
return: nil \| bool angleGood, bool loaded, number reloadFrame, number salvoLeft, number numStockpiled

or

Spring.[GetUnitWeaponState](#getunitweaponstate) ( number unitID, number weaponNum, string tag )\
return: nil \| number tagVariable

String argument "tag" can return a specific variable. Possible tags are:

      "reloadState" == "reloadFrame"
      "reloadTime"
      "accuracy"
      "sprayAngle"
      "range"
      "projectileSpeed"
      "burst"
      "burstRate"
      "projectiles"

      The following 4 tags were added in 104.0:
      "salvoError"
      "salvoLeft"
      "nextSalvo"
      "targetMoveError"

Spring.[GetUnitWeaponDamages](#getunitweapondamages) ( number unitID, number weaponNum \| string "selfDestruct" \| string "explode", string tag )\
return: nil \| number tagVariable

String argument "tag" can return a specific variable. Possible tags are:

      "paralyzeDamageTime"
      "impulseFactor"
      "impulseBoost"
      "craterMult"
      "craterBoost"
      "dynDamageExp"
      "dynDamageMin"
      "dynDamageRange"
      "dynDamageInverted"
      "craterAreaOfEffect"
      "damageAreaOfEffect"
      "edgeEffectiveness"
      "explosionSpeed"
      - or -
      an armor type index to get the damage against it.

Spring.[GetUnitWeaponVectors](#getunitweaponvectors) ( number unitID, number weaponNum )\
return: nil \| number posX, number posY, number posZ, number dirX, number dirY, number dirZ

Spring.[GetUnitWeaponTryTarget](#getunitweapontrytarget) ( number unitID, number weaponNum, number targetID \| number posX, number posY, number posZ )\
return: nil \| bool success

New in version 94.0\
For a position it just checks if the weapon can attackGround. For a unit existance, category, death status, crashing status, LOS status, neutral status, ally status and transport status are checked.

Spring.[GetUnitWeaponTestTarget](#getunitweapontesttarget) ( number unitID, number weaponNum, number targetID \| number posX, number posY, number posZ )\
return: nil \| bool success

New in version 94.0\
Checks TryTarget, TestRange, and that weapon emit point is not below ground, then checks FreeLineOfFire.

Spring.[GetUnitWeaponTestRange](#getunitweapontestrange) ( number unitID, number weaponNum, number targetID \| number posX, number posY, number posZ )\
return: nil \| bool success

New in version 94.0\
Checks if target is in range including height modifiers and cylinder targeting if set.

Spring.[GetUnitWeaponHaveFreeLineOfFire](#getunitweaponhavefreelineoffire) ( number unitID, number weaponNum, number targetID \| number posX, number posY, number posZ )\
return: nil \| bool success

New in version 94.0\
Runs a raytrace from unit aimpoint respecting collision flags.

or

Spring.[GetUnitWeaponHaveFreeLineOfFire](#getunitweaponhavefreelineoffire) ( number unitID, number weaponNum, number targetID \| \[ number srcPosX \[, number srcPosY \[, number srcPosZ \[, number tgtPosX \[, number tgtPosY \[, number tgtPosZ \]\]\]\]\]\] )\
return: nil \| bool success

New in version 104.0\
The param list was changed so that the source firing position can also be passed.

Spring.[GetUnitWeaponCanFire](#getunitweaponcanfire) ( number unitID, number weaponNum )\
return: nil \| bool canFire

New in version 95.0

Spring.[GetUnitWeaponTarget](#getunitweapontarget) ( number unitID, number weaponNum )\
return: nil \| number 0 \| number 1, bool isUserTarget, number unitID \| number 2, bool isUserTarget, { number posX, number posY, number posZ } \| number 3, bool isUserTarget, number projectileID

New in version 95.0\
Returned number of args is always 3 if targetType != None.

Spring.[GetRadarErrorParams](#getradarerrorparams) ( number allyTeamID )\
return: nil \| number allyteamErrorSize, number baseErrorSize, number baseErrorMult

New in version 95.0

Spring.[GetUnitPosErrorParams](#getunitposerrorparams) ( number unitID )\
return: nil \| number posErrorVector.x, number posErrorVector.y, number posErrorVector.z, number posErrorDelta.x, number posErrorDelta.y, number posErrorDelta.z, number nextPosErrorUpdatebaseErrorMult

New in version 95.0

#### Unit LOS

Spring.[IsUnitInLos](#isunitinlos) ( number unitID, number allyID )\
return: nil \| bool inLOS

New in version 101.0

Spring.[IsUnitInAirLos](#isunitinairlos) ( number unitID, number allyID )\
return: nil \| bool inAirLOS

New in version 101.0

Spring.[IsUnitInRadar](#isunitinradar) ( number unitID, number allyID )\
return: nil \| bool inRadar

New in version 101.0

Spring.[IsUnitInJammer](#isunitinjammer) ( number unitID, number allyID )\
return: nil \| bool inJammer

New in version 101.0

### Unit Pieces

Spring.[GetUnitVectors](#getunitvectors) ( number unitID )\
return: nil \| { number frontX, number frontY, number frontZ } , { number upX, number upY, number upZ } , { number rightX, number rightY, number rightZ }

New in version 101.0

Spring.[GetUnitPiecePosition](#getunitpieceposition) ( number unitID, number piece )\
return: number posX, number posY, number posZ

Returns piece position in unit space. Also remember to multiply the x-axis value with -1 if you want to move a piece to another piece.

Spring.[GetUnitPieceDirection](#getunitpiecedirection) ( number unitID, number piece )\
return: number dirX, number dirY, number dirZ

Fixed since 101. Now returns the same direction as Spring.GetUnitPiecePosDir.

Spring.[GetUnitPiecePosDir](#getunitpieceposdir) ( number unitID, number pieceNum )\
return: nil \| number posX, number posY, number posZ, number dirX, number dirY, number dirZ

Returns piece position and direction in world space. The direction (dirX, dirY, dirZ) is not necessarily normalized. The position is defined as the position of the first vertex of the piece and it defines direction as the direction in which the line from the first vertex to the second vertex points.

Spring.[GetUnitPieceMatrix](#getunitpiecematrix) ( number unitID, number piece )\
return: { \[1\] = number, ... , \[16\] = number }

Spring.[GetUnitPieceList](#getunitpiecelist) ( number unitID )\
return: { \[1\] = string "piecename", ... , \[pieceNumN\] = string "piecename" }

Spring.[GetUnitPieceMap](#getunitpiecemap) ( number unitID )\
return: { string "piecename1" = number pieceNum1, ... , string "piecenameN" = number pieceNumN }

Spring.[GetUnitPieceInfo](#getunitpieceinfo) ( number unitID, number piece )\
return: table pieceInfo

New in version 95.0 "parent" field\
New in version 101.0 parent for root pieces is now "\[null\]" instead of ""\
table pieceInfo contains:

    pieceInfo = {
        "name"     = string "piecename",
        "isEmpty"  = boolean,
        "children" = { [1] = string "piecename", ... },
        "min"      = { [1] = number x, [2] = number y, [3] = number z },
        "max"      = { [1] = number x, [2] = number y, [3] = number z },
        "offset"   = { [1] = number x, [2] = number y, [3] = number z }, 
        "parent" = string "parentpiecename",   
      }

Spring.[GetUnitScriptPiece](#getunitscriptpiece) ( number unitID \[, number scriptPiece \] )\
return: nil \| \[ number scriptPieceNum = number modelPieceNum \] \| number modelPieceNum

This functions translate the COB ScriptPiece numbers into the ModelPiece numbers (the set of ScriptPieces is a subset of the ModelPieces, means \#ScriptPieces \<= \#ModelPieces), which is used in all other functions (the "number piece" means always the modelpiece). So if you get a pieceID via Cob2Lua you have to translate it with this function. Btw. the COB ScriptPiece number is equal with the piece position in the *piece* definition in your cob/bos.

Spring.[GetUnitScriptNames](#getunitscriptnames) ( number unitID )\
return: { string "cobpiecename1" = number ScriptPieceNum1, ... , string "cobpiecenameN" = number ScriptPieceNumN }

Spring.[GetUnitPieceCollisionVolumeData](#getunitpiececollisionvolumedata) ( number unitID, number pieceID )\
return: number scaleX,number scaleY, number scaleZ, number offsetX, number offsetY, number offsetZ, number volumeType, number testType, number primaryAxis, bool disabled

As of 101.0 this is 1-based piece index argument (was 0-based).

### CommandQueues

Spring.GetCommandQueue function is identical to Spring.GetUnitCommands function. Here only Spring.GetUnitCommands will be listed:

Spring.[GetUnitCommands](#getunitcommands) ( number unitID, number count = 0 )\
return: nil \| number commandQueueSize

or

Spring.[GetUnitCommands](#getunitcommands) ( number unitID \[, number count = -1 \] )\
return: nil \| table commandQueueTable

This function can trigger an error if called too often without passing a second parameter. Refer to <a href="https://github.com/spring/spring/blob/92c54d5b15775c39a8c67b203c28fe9b9db51cea/rts/Lua/LuaSyncedRead.cpp#L3983-L3996" class="external text" rel="nofollow">LuaSyncedRead.cpp#L3983-L3996</a>.\
CommandQueueTable table arguments are:

    commandQueueTable = {
         [1] = {
           "id"      = number,
           "params"  = { [1] = number, ...},
           "options" = {
             "coded"    = number,
             "alt"      = boolean,
             "ctrl"     = boolean,
             "shift"    = boolean,
             "right"    = boolean,
             "internal" = boolean,
             "meta"    = boolean
           }
         }, ...
       }

Spring.[GetFullBuildQueue](#getfullbuildqueue) ( number unitID )\
return: nil \| table buildOrders = { \[1\] = { \[number unitDefID\] = number count }, etc... }

Spring.[GetRealBuildQueue](#getrealbuildqueue) ( number unitID )\
return: nil \| table buildOrders = { \[1\] = { \[number unitDefID\] = number count }, etc... }

Cleans the buildqueue of things the unit can't build itself.

Spring.[GetFactoryCommands](#getfactorycommands) ( number unitID, number count = 0 )\
return: nil \| number commandQueueSize

or

Spring.[GetFactoryCommands](#getfactorycommands) ( number unitID \[, number count = -1 \] )\
return: nil \| table commandQueueTable

CommandQueueTable table arguments are:

    commandQueueTable = {
         [1] = {
           "id"      = number,
           "params"  = { [1] = number, ...},
           "options" = {
             "coded"    = number,
             "alt"      = boolean,
             "ctrl"     = boolean,
             "shift"    = boolean,
             "right"    = boolean,
             "internal" = boolean,
             "meta"    = boolean
           }
         }, ...
       }

Spring.[GetFactoryCounts](#getfactorycounts) ( number unitID \[, number count \[, bool addCMDs \]\] )\
return: nil \| table commandQueueTable = { \[2\] = { \[number unitDefID \| number -cmdID\] = number count }, ... }

Gets the buildqueue of a factory.

### Command Descriptions/Buttons

Spring.[GetUnitCmdDescs](#getunitcmddescs) ( number unitID \[, number startIndex \[, number endIndex \]\] )\
return: nil \| table commandDescTable

CommandDescTable arguments are:

    commandDescTable = {
          [1] = {
            "id"          = number,
            "type"        = number,
            "name"        = string,
            "action"      = string,
            "tooltip"     = string,
            "texture"     = string,
            "cursor"      = string,
            "hidden"      = boolean,
            "disabled"    = boolean,
            "showUnique"  = boolean,
            "onlyTexture" = boolean,

            "params"      = { [1] = string, ... }
         }, ...
       }

Spring.[FindUnitCmdDesc](#findunitcmddesc) ( number unitID, number cmdID )\
return: nil \| number index

## Features

### GetFeatures

Spring.[GetFeaturesInRectangle](#getfeaturesinrectangle) ( number xMin, number zMin, number xMax, number zMax )\
return: nil \| table featureTable = { \[1\] = number featureID, etc... }

Spring.[GetFeaturesInSphere](#getfeaturesinsphere) ( number x, number y, number z, number radius )\
return: nil \| table featureTable = { \[1\] = number featureID, etc... }

Spring.[GetFeaturesInCylinder](#getfeaturesincylinder) ( number x, number z, number radius )\
return: nil \| table featureTable = { \[1\] = number featureID, etc... }

Spring.[GetAllFeatures](#getallfeatures) (  )\
return: table featureTable = { \[1\] = number featureID, etc... }

### Feature Informations

Spring.[ValidFeatureID](#validfeatureid) ( number featureID )\
return: bool isValid

Spring.[GetFeatureDefID](#getfeaturedefid) ( number featureID )\
return: nil \| number featureDefID

Spring.[GetFeatureTeam](#getfeatureteam) ( number featureID )\
return: nil \| number teamID

Spring.[GetFeatureAllyTeam](#getfeatureallyteam) ( number featureID )\
return: nil \| number allyID

Spring.[GetFeatureHealth](#getfeaturehealth) ( number featureID )\
return: nil \| number health, number maxHealth, number resurrectProgress

Spring.[GetFeatureHeight](#getfeatureheight) ( number featureID )\
return: nil \| number height

Spring.[GetFeatureRadius](#getfeatureradius) ( number featureID )\
return: nil \| number radius

Spring.[GetFeatureMass](#getfeaturemass) ( number featureID )\
return: nil \| number mass

New in version 101.0

Spring.[GetFeatureSeparation](#getfeatureseparation) ( number featureID1, number featureID2 \[, bool 2D \] )\
return: nil \| number distance

New in version 101.0

Spring.[GetFeaturePosition](#getfeatureposition) ( number featureID \[, bool midPos \[, bool aimPos \]\] )\
return: nil \| number bpX, number bpY, number bpZ \[, number mpX, number mpY, number mpZ \[, number apX, number apY, number apZ \]\]

Since 89.0, returns the base (default), middle or aim position of the feature.

Spring.[GetFeatureVelocity](#getfeaturevelocity) ( number featureID \[, bool norm \] )\
return: nil \| number velX, number velY, number velZ, number velLength

New in version 95.0

Spring.[GetFeatureDirection](#getfeaturedirection) ( number featureID )\
return: nil \| number dirX, number dirY, number dirZ

Spring.[GetFeatureRotation](#getfeaturerotation) ( number featureID )\
return: nil \| number pitch, number yaw, number roll

New in version 101.0

Spring.[GetFeatureHeading](#getfeatureheading) ( number featureID )\
return: nil \| number heading

Spring.[GetFeatureResources](#getfeatureresources) ( number featureID )\
return: nil \| number RemainingMetal, number maxMetal, number RemainingEnergy, number maxEnergy, number reclaimLeft, number reclaimTime

reclaimTime New in version 105.0

Spring.[GetFeatureNoSelect](#getfeaturenoselect) ( number featureID )\
return: nil \| bool noSelect

Spring.[GetFeatureResurrect](#getfeatureresurrect) ( number featureID )\
return: nil \| string UnitDefName, number buildFacing

Spring.[GetFeatureCollisionVolumeData](#getfeaturecollisionvolumedata) ( number featureID )\
return: nil \| number scaleX, number scaleY, number scaleZ, number offsetX, number offsetY, number offsetZ, number volumeType, number testType, number primaryAxis, bool disabled

Spring.[GetFeaturePieceCollisionVolumeData](#getfeaturepiececollisionvolumedata) ( number featureID, number pieceID )\
return: nil \| number scaleX, number scaleY, number scaleZ, number offsetX, number offsetY, number offsetZ, number volumeType, number testType, number primaryAxis, bool disabled

New in version 101.0

Spring.[GetFeatureBlocking](#getfeatureblocking) ( number featureID )\
return: nil \| bool isBlocking, bool isSolidObjectCollidable, bool isProjectileCollidable, bool isRaySegmentCollidable, bool crushable, bool blockEnemyPushing, bool blockHeightChanges

New in version 95.0

### Feature Pieces

Works analogue to \#Unit_Pieces

Spring.[GetFeatureLastAttackedPiece](#getfeaturelastattackedpiece) ( number featureID )\
return: nil \| string pieceName, number gameframe

Spring.[GetFeaturePieceMap](#getfeaturepiecemap) ( number featureID )\
return: { string "piecename1" = number pieceNum1, ... , string "piecenameN" = number pieceNumN }

Spring.[GetFeaturePieceList](#getfeaturepiecelist) ( number featureID )\
return: { \[1\] = string "piecename", ... , \[pieceNumN\] = string "piecename" }

Spring.[GetFeaturePieceInfo](#getfeaturepieceinfo) ( number featureID, number piece )\
return: table pieceInfo

New in version 95.0 "parent" field\
New in version 101.0 parent for root pieces is now "\[null\]" instead of ""\
table pieceInfo contains:

    pieceInfo = {
        "name"     = string "piecename",
        "isEmpty"  = boolean,
        "children" = { [1] = string "piecename", ... },
        "min"      = { [1] = number x, [2] = number y, [3] = number z },
        "max"      = { [1] = number x, [2] = number y, [3] = number z },
        "offset"   = { [1] = number x, [2] = number y, [3] = number z }, 
        "parent" = string "parentpiecename",   
      }

Spring.[GetFeaturePiecePosition](#getfeaturepieceposition) ( number featureID, number piece )\
return: number posX, number posY, number posZ

Returns piece position in unit space. Also remember to multiply the x-axis value with -1 if you want to move a piece to another piece.

Spring.[GetFeaturePieceDirection](#getfeaturepiecedirection) ( number featureID, number piece )\
return: number dirX, number dirY, number dirZ

Fixed since 101. Now returns the same direction as Spring.GetUnitPiecePosDir.

Spring.[GetFeaturePiecePosDir](#getfeaturepieceposdir) ( number featureID, number pieceNum )\
return: nil \| number posX, number posY, number posZ, number dirX, number dirY, number dirZ

Returns piece position and direction in world space. The direction (dirX, dirY, dirZ) is not necessarily normalized. The position is defined as the position of the first vertex of the piece and it defines direction as the direction in which the line from the first vertex to the second vertex points.

Spring.[GetFeaturePieceMatrix](#getfeaturepiecematrix) ( number featureID, number piece )\
return: { \[1\] = number, ... , \[16\] = number }

## COB

Spring.[GetCOBUnitVar](#getcobunitvar) ( number unitID, number varID \[, bool unpack = false \] )\
return: nil \| number value \| number unpackedX, number unpackedY

Spring.[GetCOBTeamVar](#getcobteamvar) ( number teamID, number varID \[, bool unpack = false \] )\
return: nil \| number value \| number unpackedX, number unpackedY

Spring.[GetCOBAllyTeamVar](#getcoballyteamvar) ( number allyID, number varID \[, bool unpack = false \] )\
return: nil \| number value \| number unpackedX, number unpackedY

Spring.[GetCOBGlobalVar](#getcobglobalvar) ( number varID \[, bool unpack = false \] )\
return: nil \| number value \| number unpackedX, number unpackedY

## Ground

Elevation is y. Water level is always at y=0. Ground height can be changed during play (terraform or deformation).

Spring.[GetGroundHeight](#getgroundheight) ( number x, number z )\
return: number y

Spring.[GetGroundOrigHeight](#getgroundorigheight) ( number x, number z )\
return: number y

This returns the ground's original height (i.e. before terraforming) at a given x,z position.

Spring.[GetGroundNormal](#getgroundnormal) ( number x, number z \[, bool smoothedNormal = false \] )\
return: number x, number y, number z, number slope

New in version 100.0: smoothedNormal and slope

Spring.[GetGroundInfo](#getgroundinfo) ( number x, number z )\
return: string "Type", number metal, number hardness, number tankSpeed, number kbotSpeed, number hoverSpeed, number shipSpeed, bool receiveTracks

Spring.[GetGroundBlocked](#getgroundblocked) ( number x, number z )\
return: nil \| string "feature", number featureID \| string "unit", number unitID

or

Spring.[GetGroundBlocked](#getgroundblocked) ( number x1, number z1, number x2, number z2 )\
return: nil \| string "feature", number featureID \| string "unit", number unitID

Spring.[GetGroundExtremes](#getgroundextremes) (  )\
return: nil \| number minHeight, number maxHeight

Spring.[GetSmoothMeshHeight](#getsmoothmeshheight) ( number x, number z )\
return: number y

Spring.[GetMetalMapSize](#getmetalmapsize) (  )\
return: number sizeX, number sizeY

Spring.[GetMetalAmount](#getmetalamount) ( number x, number z )\
return: number metalAmount

With x & z in metal map coordinates (worldspace/16)

Spring.[GetMetalExtraction](#getmetalextraction) ( number x, number z )\
return: number extractionAmount

With x & z in metal map coordinates (worldspace/16)

Spring.[GetTerrainTypeData](#getterraintypedata) ( number i )\
return: nil \| string "name", number hardness, number tankSpeed, number kbotSpeed, number hoverSpeed, number shipSpeed, bool receiveTracks

New in version 92.0

Spring.[GetGrass](#getgrass) ( number x, number z )\
return: number 0 \| number 1 \| number 255

With x & z in worldspace coordinates. Returns 255 if grass is disabled in settings, or if map does not have a grassmap specified.

### Test Orders

Spring.[TestMoveOrder](#testmoveorder) ( number unitDefID, number pos.x \[, number pos.y \[, number pos.z \[, number dir.x \[, number dir.y \[, number dir.z \[, bool testTerrain \[, bool testObjects \[, bool centerOnly \]\]\]\]\]\]\]\] )\
return: bool validMove

New in version 95.0

Spring.[TestBuildOrder](#testbuildorder) ( number unitDefID, number x, number y, number z, number facing )\
return: number blocking \[, number featureID \]

    blocking can be:
        0 - blocked
        1 - mobile unit in the way
        2 - free  (or if featureID is != nil then with a blocking feature that can be reclaimed)

      facing can be:
        0, "s", "south"
        1, "e", "east"
        2, "n", "north"
        3, "w", "west"

Spring.[Pos2BuildPos](#pos2buildpos) ( number unitDefID, number x, number y, number z \[, number facing \] )\
return: nil \| number x, number y, number z

### PathFinding

Spring.[GetUnitEstimatedPath](#getunitestimatedpath) ( number unitID )\
return: nil \| table waypoints, table waypointIndices

The table arguments are:

    table waypoints = {
       [1] = { x,y,z }, ...
       }

    table waypointIndices= {
         [1] = startIdxOfDetailedPath,
         [2] = startIdxOfDetailedEstimatedPath1,
         [3] = startIdxOfDetailedEstimatedPath2,
       }

      GetUnitEstimatedPath() returns 2 tables:
        1 table the waypoints and 1 table with indices (in the waypoint table)
        when a new (more lazy) pathfinding algorithm  begins.
        So the waypoint table contains 3 different levels of details.

### LOS

Spring.[IsPosInLos](#isposinlos) ( number x, number y, number z, number allyID )\
return: bool isInLos

Spring.[IsPosInRadar](#isposinradar) ( number x, number y, number z, number allyID )\
return: bool isInRadar

Spring.[IsPosInAirLos](#isposinairlos) ( number x, number y, number z, number allyID )\
return: bool isInAirLos

Spring.[GetPositionLosState](#getpositionlosstate) ( number x, number y, number z \[, number allyID \] )\
return: bool LosOrRadar, bool inLos, bool inRadar, bool jammed

Jammed new in 95.0, indicates if a position is actively being radar- or sonar-jammed by ANY allyteam.

Spring.[GetClosestValidPosition](#getclosestvalidposition) ( number unitDefID, number x, number y, number z, number r )\
return: nil

CURRENTLY UNFINISHED! Always returns nil!

## Projectiles

Spring.[GetProjectilesInRectangle](#getprojectilesinrectangle) ( number xmin, number zmin, number xmax, number zmax \[, bool excludeWeaponProjectiles \[, bool excludePieceProjectiles \]\] )\
return: nil \| table projectileTable = { \[1\] = number projectileID, etc... }

Spring.[GetProjectileOwnerID](#getprojectileownerid) ( number projectileID )\
return: nil \| number unitID

New in version 99.0

Spring.[GetProjectileTeamID](#getprojectileteamid) ( number projectileID )\
return: nil \| number teamID

New in version 99.0

Spring.[GetProjectileDefID](#getprojectiledefid) ( number projectileID )\
return: nil \| number weaponDefID

Using this to get a weaponDefID is HIGHLY preferred to indexing WeaponDefNames via GetProjectileName.

Spring.[GetProjectileName](#getprojectilename) ( number projectileID )\
return: nil \| string name

It is recommended to rather use GetProjectileDefID for indexing purposes.

Spring.[GetProjectileType](#getprojectiletype) ( number projectileID )\
return: nil \| bool weapon, bool piece

Spring.[GetProjectileTarget](#getprojectiletarget) ( number projectileID )\
return: nil \| number targetTypeInt, number targetID \| table targetPos = {x, y, z}

    Pre version 95.0 return arguments: -> nil | number targetID, string targetTypeStr

      targetTypeStr could be one of: 
        'u' - unit
        'f' - feature
        'p' - projectile

      while targetTypeInt was one of:
        string.byte('g') := GROUND
        string.byte('u') := UNIT
        string.byte('f') := FEATURE
        string.byte('p') := PROJECTILE

Spring.[GetProjectileIntercepted](#getprojectileintercepted) ( number projectileID )\
return: nil \| bool isBeingIntercepted

New in version 99.0

Spring.[GetProjectilePosition](#getprojectileposition) ( number projectileID )\
return: nil \| number posX, number posY, number posZ

Spring.[GetProjectileVelocity](#getprojectilevelocity) ( number projectileID )\
return: nil \| number velX, number velY, number velZ

New in version 95.0: returns (targetPos - startPos) for Beamlasers and similar weapons

Spring.[GetProjectileGravity](#getprojectilegravity) ( number projectileID )\
return: nil \| number gravity

Spring.[GetPieceProjectileParams](#getpieceprojectileparams) ( number projectileID )\
return: nil \| number explosionFlags, number spinAngle, number spinSpeed, number spinVectorX, number spinVectorY, number spinVectorZ

New in version 95.0\
ExplosionFlags use binary flags with the following integer equivalents (more info [here](/animation-cobconstants#explode) ):\
SHATTER = 1, EXPLODE = 2, EXPLODE_ON_HIT = 2, FALL = 4, SMOKE = 8, FIRE = 16, NONE = 32, NO_CEG_TRAIL = 64, NO_HEATCLOUD = 128

Spring.[GetProjectileTimeToLive](#getprojectiletimetolive) ( number projectileID )\
return: nil \| number ttl

New in version 99.0

Spring.[GetProjectileDirection](#getprojectiledirection) ( number projectileID )\
return: nil \| number dirX, number dirY, number dirZ

New in version 95.0

Spring.[GetProjectileSpinAngle](#getprojectilespinangle) ( number projectileID )\
return: nil \| number angle

Deprecated in 95.0 - use GetPieceProjectileParams instead!

Spring.[GetProjectileSpinSpeed](#getprojectilespinspeed) ( number projectileID )\
return: nil \| number spinSpeed

Deprecated in 95.0 - use GetPieceProjectileParams instead!

Spring.[GetProjectileSpinVec](#getprojectilespinvec) ( number projectileID )\
return: nil \| number x, number y, number z

Deprecated in 95.0 - use GetPieceProjectileParams instead!

Spring.[GetProjectileDamages](#getprojectiledamages) ( number unitID, number weaponNum, string tag )\
return: nil \| number damage

New in version 101.0

    The string tag can be:
      "paralyzeDamageTime"
      "impulseFactor"
      "impulseBoost"
      "craterMult"
      "craterBoost"
      "dynDamageExp"
      "dynDamageMin"
      "dynDamageRange"
      "dynDamageInverted"
      "craterAreaOfEffect"
      "damageAreaOfEffect"
      "edgeEffectiveness"
      "explosionSpeed"
      - or -
      an armor type index to get the damage against it.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua SyncedRead](https://springrts.com/wiki/Lua_SyncedRead).*
