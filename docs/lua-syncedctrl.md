---
title: "Lua SyncedCtrl"
source_url: "https://springrts.com/wiki/Lua_SyncedCtrl"
categories:
  - "Lua"
---
# Lua SyncedCtrl

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua SyncedCtrl

## Game End

Spring.[KillTeam](#killteam) ( number teamID )\
return: nil

New in version 83.0\
Will declare a team to be dead ( no further orders can be assigned to such teams's units ), Gaia team cannot be killed.

Spring.[GameOver](#gameover) ( number allyTeamID1, number allyTeamID2, ... )\
return: nil

New in version 83.0\
Will declare game over, a list of winning allyteams can be passed, if undecided ( like when dropped from the host ) it should be empty ( no winner ), in the case of a draw with multiple winners, all should be listed.

## RulesParams

String values are new since 95.0. Attention: Numeric paramValues in quotes will be converted to number.

Spring.[SetUnitRulesParam](#setunitrulesparam) ( number unitID, string paramName, number\|string paramValue \[, table losAccess \] )\
return: nil

Possible keys for the losAccess table are:

       `private` : only readable by the ally (default)
       `allied`  : readable by ally + ingame allied
       `inlos`   : readable if the unit is in LOS
       `inradar` : readable if the unit is in AirLOS
       `public`  : readable by all
      note: if one condition is fulfilled all beneath it are too (e.g. if an unit is in LOS it
         can read params with `inradar=true` even if the param has `inlos=false`)
      note2: all GameRulesParam are public, TeamRulesParams can just be `private`,`allied`
         and/or `public`
      note3: You can read RulesParams from any Lua enviroments! With those losAccess
         policies you can limit their access.

Spring.[SetFeatureRulesParam](#setfeaturerulesparam) ( number featureID, string paramName, number\|string paramValue \[, table losAccess \] )\
return: nil

New since 102.0.\
See above for further documentation of losAccess.

Spring.[SetTeamRulesParam](#setteamrulesparam) ( number teamID, string paramName, number\|string paramValue \[, table losAccess \] )\
return: nil

See above for further documentation of losAccess.

Spring.[SetGameRulesParam](#setgamerulesparam) ( string paramName, number\|string paramValue \[, table losAccess \] )\
return: nil

See above for further documentation of losAccess.

## Resources

Spring.[AddTeamResource](#addteamresource) ( number teamID, string "metal" \| "energy", number amount )\
return: nil

Adds metal or energy resources to the specified team.

Spring.[UseTeamResource](#useteamresource) ( number teamID, string "metal" \| "energy", number amount \| { metal = number amount, energy = number amount } )\
return: nil \| bool hadEnough

Consumes metal and/or energy resources of the specified team.

Spring.[SetTeamResource](#setteamresource) ( number teamID, string res, number amount )\
return: nil

Possible values for res are:\
"m" = metal\
"e" = energy\
"ms" = metal storage\
"es" = energy storage\

Spring.[SetTeamShareLevel](#setteamsharelevel) ( number teamID, string "metal" \| "energy", number amount )\
return: nil

Changes the resource amount for a team beyond which resources aren't stored but transferred to other allied teams if possible.

Spring.[ShareTeamResource](#shareteamresource) ( number teamID_src, number teamID_recv, string "metal" \| "energy", number amount )\
return: nil

Transfers resources between two teams.

## Teams

Spring.[SetAlly](#setally) ( number firstAllyTeamID, number secondAllyTeamID, bool ally )\
return: nil

New in version 98.0\
Changes the value of the (one-sided) alliance between: firstAllyTeamID -\> secondAllyTeamID.

Spring.[AssignPlayerToTeam](#assignplayertoteam) ( number playerID, number teamID )\
return: nil

New in version 98.0\
Assigns a player to a team.

Spring.[SetGlobalLos](#setgloballos) ( number allyTeamID, bool globallos )\
return: nil

New in version 101.0\
Changes access to global line of sight for a team and its allies.

## Unit Handling

Spring.[CreateUnit](#createunit) ( string "defName" \| number  unitDefID, number x, number y, number z, string "facing" \| number  facing, number teamID \[, bool build = false \[, bool flattenGround = true \[, number builderID \]\]\] )\
return: number unitID \| nil (meaning unit was not created)

Offmap positions are clamped! Use MoveCtrl to move to such positions.\
Possible values for facing are:\
"south" \| "s" \| 0\
"east" \| "e" \| 1\
"north" \| "n" \| 2\
"west" \| "w" \| 3\

If build is true, the unit is created in "being built" state with buildProgress = 0\
unitID and builderID are New in version 92.0, the former allowing to spawn a unit with a specific ID.

Spring.[DestroyUnit](#destroyunit) ( number unitID \[, bool selfd = false \[, bool reclaimed = false \[, number attackerID \]\]\] )\
return: nil

selfd := Makes the unit act like it self-destructed.\
reclaimed := Don't show any DeathSequences, don't leave a wreckage. This does not give back the resources to the team!

Spring.[TransferUnit](#transferunit) ( number unitID, number newTeamID \[, bool given = true \] )\
return: nil

If given=false, the unit is captured.

### Unit Control

Spring.[SetUnitCosts](#setunitcosts) ( number unitID, { \[ buildTime = number amount \], \[ metalCost = number amount \], \[ energyCost = number amount \] } )\
return: nil

Spring.[SetUnitTooltip](#setunittooltip) ( number unitID, string "tooltip" )\
return: nil

Spring.[SetUnitHealth](#setunithealth) ( number unitID, number health \| { \[ health = number health \], \[ capture = number capture \], \[ paralyze = number paralyze \], \[ build = number build \] } )\
return: nil

Spring.[SetUnitMaxHealth](#setunitmaxhealth) ( number unitID, number maxHealth )\
return: nil

Spring.[AddUnitDamage](#addunitdamage) ( number unitID, number damage \[, number paralyze = 0 \[, number attackerID = -1 \[, number weaponID = -1 \[, number impulse_x \[, number impulse_y \[, number impulse_z \]\]\]\]\]\] )\
return: nil

The number in the paralyze parameter equals to the paralyzetime in the WeaponDef.

Spring.[SetUnitStockpile](#setunitstockpile) ( number unitID \[, number stockpile \[, number buildPercent \]\] )\
return: nil

Spring.[SetUnitExperience](#setunitexperience) ( number unitID, number experience, number buildPercent )\
return: nil

Spring.[SetUnitFuel](#setunitfuel) ( number unitID, number fuel )\
return: nil

Removed from version 101.0

Spring.[SetUnitCrashing](#setunitcrashing) ( number unitID, bool crashing )\
return: bool success

New in version 83.0

Spring.[SetUnitLineage](#setunitlineage) ( number unitID, number teamID \[, bool isRoot \] )\
return: nil

Removed from version 83.0

Spring.[SetUnitNeutral](#setunitneutral) ( number unitID, bool neutral )\
return: nil

Removed from version 83.0

Spring.[SetUnitTarget](#setunittarget) ( number unitID, number x \| nil, number y, number z \[, bool dgun = false \[, bool userTarget = false \[, number weaponNum = -1 \]\]\] )\
return: bool success

or

Spring.[SetUnitTarget](#setunittarget) ( number unitID, number enemyUnitID \| nil \[, bool dgun = false \[, bool userTarget = false \[, number weaponNum = -1 \]\]\] )\
return: bool success

Defines a unit's target. Nil as 2nd argument drops the unit's current target.\
UserTarget & success new in version 95.0, setting nil target new in version 99.0, weaponNum new in version 102.0.

Spring.[SetUnitMaxRange](#setunitmaxrange) ( number unitID, number maxRange )\
return: nil

Spring.[SetUnitMass](#setunitmass) ( number unitID, number mass )\
return: nil

New in version 101.0

Spring.[SetUnitBlocking](#setunitblocking) ( number unitID, bool isblocking, bool isSolidObjectCollidable, bool isProjectileCollidable, bool isRaySegmentCollidable, bool crushable, bool blockEnemyPushing, bool blockHeightChanges )\
return: nil

New in version 95.0\
Changed parameters.

Spring.[SetUnitMetalExtraction](#setunitmetalextraction) ( number unitID, number depth \[, number range \] )\
return: nil

Parameter "depth" corresponds to metal extraction rate. Range value is similar to "extractsMetal" in unitDefs.

Spring.[SetUnitBuildSpeed](#setunitbuildspeed) ( number builderID, number buildSpeed \[, number repairSpeed \[, number reclaimSpeed\[, number resurrectSpeed \[, number captureSpeed \[, number terraformSpeed \]\]\]\]\] )\
return: nil

Spring.[SetUnitNanoPieces](#setunitnanopieces) ( number builderID, table pieces )\
return: nil

New in version 92.0\
This saves a lot of engine calls, by replacing: function script.QueryNanoPiece() return currentpiece end\
Use it!

Spring.[UnitAttach](#unitattach) ( number transporterID, number passengerID, number pieceNum )\
return: nil

New in version 101.0

Spring.[UnitDetach](#unitdetach) ( number passengerID )\
return: nil

New in version 101.0

Spring.[UnitDetachFromAir](#unitdetachfromair) ( number passengerID )\
return: nil

New in version 101.0

Spring.[SetUnitLoadingTransport](#setunitloadingtransport) ( number passengerID, number transportID )\
return: nil

New in version 101.0\
Disables collisions between the two units to allow colvol intersection during the approach.

Spring.[SetUnitPieceParent](#setunitpieceparent) ( number unitID, number AlteredPiece, number ParentPiece )\
return: nil

New in version 101.0\
Changes the pieces hierarchy of a unit by attaching a piece to a new parent.

Spring.[SetUnitPieceMatrix](#setunitpiecematrix) ( number unitID, number pieceNum, table  matrix )\
return: nil

New in version 104.0\
Sets the local (i.e. parent-relative) matrix of the given piece if any of the first three elements are non-zero, and also blocks all script animations from modifying it until {0, 0, 0} is passed (matrix should be an array of 16 floats, but is not otherwise sanity-checked).

Spring.[SetUnitArmored](#setunitarmored) ( number unitID, bool armored \[, number armorMultiple \] )\
return: nil

armorMultiple new in version 0.83.x

Spring.[SetUnitShieldState](#setunitshieldstate) ( number unitID \[, number weaponID = -1 \[, bool enabled \[, number power \]\]\] )\
return: nil

Spring.[SetUnitFlanking](#setunitflanking) ( number unitID, string "mode", number  mode )\
return: nil

or

Spring.[SetUnitFlanking](#setunitflanking) ( number unitID, string "moveFactor", number  factor )\
return: nil

or

Spring.[SetUnitFlanking](#setunitflanking) ( number unitID, string "minDamage", number  minDamage )\
return: nil

or

Spring.[SetUnitFlanking](#setunitflanking) ( number unitID, string "maxDamage", number  maxDamage )\
return: nil

or

Spring.[SetUnitFlanking](#setunitflanking) ( number unitID, string "dir", number  x, number  y, number  z )\
return: nil

Spring.[SetUnitWeaponState](#setunitweaponstate) ( number unitID, number weaponNum, table  states )\
return: nil

or

Spring.[SetUnitWeaponState](#setunitweaponstate) ( number unitID, number weaponNum, string  key, number value )\
return: nil

Format of the states table: 

       {
         ["reloadState"     = number value,]
         ["reloadFrame"     = number value,] (synonym for reloadState!)
         ["reloadTime"      = number value,]
         ["accuracy"        = number value,]
         ["sprayAngle"      = number value,]
         ["range"           = number value,] (*)
         ["projectileSpeed" = number value,]
         ["burst"           = number value,]
         ["burstRate"       = number value,]
         ["projectiles"     = number value,]
         ["salvoLeft"       = number value,]
         ["nextSalvo"       = number value,]
         ["aimReady"        = number value,] (<>0.0f := true)
       }
     (*) if you change the range of a weapon with dynamic damage
     make sure you use SetUnitWeaponDamages to change dynDamageRange as well.
     

Spring.[SetUnitWeaponDamages](#setunitweapondamages) ( number unitID, number weaponNum \| string "selfDestruct" \| string "explode", table damages )\
return: nil

or

Spring.[SetUnitWeaponDamages](#setunitweapondamages) ( number unitID, number weaponNum \| string "selfDestruct" \| string "explode", string key, number value )\
return: nil

New in version 101.0

Format of the damages table: 

      {
         ["paralyzeDamageTime" = number value,]  
         ["impulseFactor"      = number value,]
         ["impulseBoost"       = number value,]
         ["craterMult"         = number value,]
         ["craterBoost"        = number value,]
         ["dynDamageExp"       = number value,]
         ["dynDamageMin"       = number value,]
         ["dynDamageRange"     = number value,]
         ["dynDamageInverted"  = number value,] (<>0.0f := true)
         ["craterAreaOfEffect" = number value,]
         ["damageAreaOfEffect" = number value,]
         ["edgeEffectiveness"  = number value,]
         ["explosionSpeed"     = number value,]
         [number armorType     = number value,] (changes the damage against this armor type)
       }
     

Spring.[SetUnitCollisionVolumeData](#setunitcollisionvolumedata) ( number unitID, number scaleX, number scaleY, number scaleZ, number offsetX, number offsetY, number offsetZ, number vType, number tType, number Axis )\
return: nil

     enum COLVOL_TYPES {
         COLVOL_TYPE_DISABLED = -1,
         COLVOL_TYPE_ELLIPSOID = 0,
         COLVOL_TYPE_CYLINDER,
         COLVOL_TYPE_BOX,
         COLVOL_TYPE_SPHERE,
         COLVOL_NUM_TYPES       // number of non-disabled collision volume types
       };
       enum COLVOL_TESTS {
         COLVOL_TEST_DISC = 0,
         COLVOL_TEST_CONT = 1,
         COLVOL_NUM_TESTS = 2   // number of tests
       };
       enum COLVOL_AXES {
         COLVOL_AXIS_X   = 0,
         COLVOL_AXIS_Y   = 1,
         COLVOL_AXIS_Z   = 2,
         COLVOL_NUM_AXES = 3    // number of collision volume axes
       };
     

Spring.[SetUnitPieceCollisionVolumeData](#setunitpiececollisionvolumedata) ( number unitID, number pieceIndex, bool enable, number scaleX, number scaleY, number scaleZ, number offsetX, number offsetY, number offsetZ \[, number volumeType \[, number primaryAxis \]\] )\
return: nil

As of 101.0 this is 1-based piece index argument (was 0-based).

Spring.[SetUnitTravel](#setunittravel) ( number unitID, number travel \[, number travelPeriod \] )\
return: nil

Spring.[SetUnitMoveGoal](#setunitmovegoal) ( number unitID, number goalX, number goalY, number goalZ \[, number goalRadius \[, number moveSpeed \[, bool moveRaw \]\]\] )\
return: nil

Used by default commands to get in build-, attackrange etc.\
New in version 98.0 moveRaw: <a href="http://springrts.com/mantis/view.php?id=4412" class="external text" rel="nofollow">allow unit to dumbly move to a coordinate without calculating path.</a>

Spring.[SetUnitLandGoal](#setunitlandgoal) ( number unitID, number goalX, number goalY, number goalZ \[, number goalRadius \] )\
return: nil

New in version 101.0\
Used in conjunction with Spring.UnitAttach et al. to re-implement old airbase & fuel system in Lua.

Spring.[ClearUnitGoal](#clearunitgoal) ( number unitID )\
return: nil

New in version 102.0

Spring.[SetUnitPhysics](#setunitphysics) ( number unitID, number posX, number posY, number posZ, number velX, number velY, number velZ, number rotX, number rotY, number rotZ, number dragX, number dragY, number dragZ )\
return: nil

Drag new in version 95.0

Spring.[SetUnitPosition](#setunitposition) ( number unitID, number x, number z \[, bool alwaysAboveSea \] )\
return: nil

Spring.[SetUnitDirection](#setunitdirection) ( number unitID, number x, number y, number z )\
return: nil

New in version 90.0

Spring.[SetUnitVelocity](#setunitvelocity) ( number unitID, number velX, number velY, number velZ )\
return: nil

Spring.[SetUnitRotation](#setunitrotation) ( number unitID, number yaw, number pitch, number roll )\
return: nil

Spring.[AddUnitImpulse](#addunitimpulse) ( number unitID, number x, number y, number z \[, number decayRate \] )\
return: nil

Spring.[AddUnitSeismicPing](#addunitseismicping) ( number unitID, number pingSize )\
return: nil

Spring.[SetGroundMoveTypeData](#setgroundmovetypedata) ( number unitID, table properties )\
return: nil

Use this function to control movement properties for ground units. Known properties : maxSpeed, maxWantedSpeed, turnRate, ... (TODO fix/update)

Spring.[SetAirMoveTypeData](#setairmovetypedata) ( number unitID, table properties )\
return: nil

Use this function to control movement properties for non-gunship air units. Known properties : maxSpeed, maxWantedSpeed, ... (TODO fix/update)

Spring.[SetGunshipMoveTypeData](#setgunshipmovetypedata) ( number unitID, table properties )\
return: nil

Use this function to control movement properties for air gunships. Known properties : maxSpeed, maxWantedSpeed, turnRate, ... (TODO fix/update)

Spring.[RemoveBuildingDecal](#removebuildingdecal) ( number unitID )\
return: nil

Spring.[SetUnitMidAndAimPos](#setunitmidandaimpos) ( number unitID, number mpX, number mpY, number mpZ, number apX, number apY, number apZ \[, bool relative \] )\
return: bool success

New in version 89.0\
mpx, mpy, mpz: New middle position of unit\
apx, apy, apz: New position that enemies aim at on this unit\
relative: Are the new coordinates relative to world (false) or unit (true) coordinates? Also, note that apy is inverted!

Spring.[SetUnitRadiusAndHeight](#setunitradiusandheight) ( number unitID, number radius, number height )\
return: bool success

New in version 89.0

Spring.[UnitWeaponFire](#unitweaponfire) ( number unitID, number weaponID )\
return: nil

Spring.[UnitWeaponHoldFire](#unitweaponholdfire) ( number unitID, number weaponID )\
return: nil

### Unit LOS

Spring.[SetUnitCloak](#setunitcloak) ( number unitID, bool cloaked \| number scriptCloak \[, bool decloakAbs \| number decloakDistance \] )\
return: nil

If the 2nd argument is a number, the value works like this:\
1:=normal cloak\
2:=for free cloak (cost no E)\
3:=for free + no decloaking (except the unit is stunned)\
4:=ultimative cloak (no ecost, no decloaking, no stunned decloak)\

The decloak distance is only changed:\
- if the 3th argument is a number or a boolean.\
- if the boolean is false it takes the default decloak distance for that unitdef,\
- if the boolean is true it takes the absolute value of it.

Spring.[SetUnitSonarStealth](#setunitsonarstealth) ( number unitID, bool sonarStealth )\
return: nil

Spring.[SetUnitStealth](#setunitstealth) ( number unitID, bool stealth )\
return: nil

Spring.[SetUnitAlwaysVisible](#setunitalwaysvisible) ( number unitID, bool alwaysVisible )\
return: nil

Spring.[SetUnitLosMask](#setunitlosmask) ( number unitID, number allyTeam, number los \| table  losTypes )\
return: nil

The 3rd argument is either the bit-and combination of the following numbers:\
LOS_INLOS = 1\
LOS_INRADAR = 2\
LOS_PREVLOS = 4\
LOS_CONTRADAR = 8\

or a table of the following form:\
losTypes = {\
\[los = boolean,\]\
\[radar = boolean,\]\
\[prevLos = boolean,\]\
\[contRadar = boolean\]\
}

Spring.[SetUnitLosState](#setunitlosstate) ( number unitID, number allyTeam, number los \| table  losTypes )\
return: nil

See above for more info on the arguments.

Spring.[SetUnitSensorRadius](#setunitsensorradius) ( number unitID, string  type, number radius )\
return: nil \| number newRadius

Type can be:\
"los", "airLos", "radar", "sonar", "seismic", "radarJammer", "sonarJammer"

Spring.[SetRadarErrorParams](#setradarerrorparams) ( number allyTeamID, number  allyteamErrorSize \[, number baseErrorSize \[, number baseErrorMult \]\] )\
return: nil

New in version 95.0

Spring.[SetUnitPosErrorParams](#setunitposerrorparams) ( number unitID, number posErrorVector.x, number posErrorVector.y, number posErrorVector.z,, number posErrorDelta.x, number number posErrorDelta.y, number posErrorDelta.z \[, number nextPosErrorUpdate \] )\
return: nil

New in version 95.0

### Unit Resourcing

Spring.[SetUnitResourcing](#setunitresourcing) ( number unitID, string  res, number amount )\
return: nil

or

Spring.[SetUnitResourcing](#setunitresourcing) ( number unitID, { res = number amount, ... } )\
return: nil

Possible values for res are: "\[u\|c\]\[u\|m\]\[m\|e\]"\
unconditional \| conditional\
use \| make\
metal \| energy

Spring.[AddUnitResource](#addunitresource) ( number unitID, string  "m" \| "e", number amount )\
return: nil

Spring.[UseUnitResource](#useunitresource) ( number unitID, string  "m" \| "e", number amount )\
return: nil \| bool okay

or

Spring.[UseUnitResource](#useunitresource) ( number unitID, { \[ "m" \| "metal" \| "e" \| "energy" \] = amount, ... } )\
return: nil \| bool okay

Spring.[SetUnitHarvestStorage](#setunitharveststorage) ( number unitID, number metal )\
return: nil

New in version 97.0\
See also [harvestStorage](/gamedev-unitdefs#harveststorage) UnitDef tag.

## Feature Handling

Spring.[CreateFeature](#createfeature) ( string "defName" \| number featureDefID, number x, number y, number z \[, number heading \[, number AllyTeamID \[, number featureID \]\]\] )\
return: number featureID

Spring.[DestroyFeature](#destroyfeature) ( number featureDefID )\
return: nil

Spring.[TransferFeature](#transferfeature) ( number featureDefID, number teamID )\
return: nil

### Feature Control

Spring.[SetFeatureHealth](#setfeaturehealth) ( number featureID, number health )\
return: nil

Spring.[SetFeatureResources](#setfeatureresources) ( number featureID, number metal, number energy \[, number reclaimTime \[, number reclaimLeft \]{rbracket, &#123;&#123;{arg6&#125;&#125;}, &#123;&#123;{arg7&#125;&#125;}, &#123;&#123;{arg8&#125;&#125;}, &#123;&#123;{arg9&#125;&#125;} )

\|arg6 = \|arg7 = \|arg8 = \|arg9 = \|return = nil \|info = New in version 104.0 &#125;&#125;

Spring.[SetFeatureReclaim](#setfeaturereclaim) ( number featureID, number reclaimLeft )\
return: nil

Spring.[SetFeatureResurrect](#setfeatureresurrect) ( number featureID, number unitDefID \| string unitDefName \[, number facing \| string "facing" \[, number progress \]\] )\
return: nil

New in version 104.0 Second param can now be a number id instead of a string name, this also allows cancelling ressurection by passing -1. The level of progress can now be set via the additional 4th param.\
Possible values for facing are:\
"south" \| "s" \| 0\
"east" \| "e" \| 1\
"north" \| "n" \| 2\
"west" \| "w" \| 3

Spring.[SetFeaturePosition](#setfeatureposition) ( number featureID, number x, number y, number z \[, bool snapToGround \] )\
return: nil

Spring.[SetFeatureDirection](#setfeaturedirection) ( number featureID, number dirX, number dirY, number dirZ )\
return: nil

Spring.[SetFeatureRotation](#setfeaturerotation) ( number featureID, number rotX, number rotY, number rotZ )\
return: nil

New in version 101.0

Spring.[SetFeatureVelocity](#setfeaturevelocity) ( number featureID, number velX, number velY, number velZ )\
return: nil

New in version 95.0

Spring.[SetUnitPhysics](#setunitphysics) ( number featureID, number posX, number posY, number posZ, number velX, number velY, number velZ, number rotX, number rotY, number rotZ, number dragX, number dragY, number dragZ )\
return: nil

New in version 95.0

Spring.[SetFeatureMoveCtrl](#setfeaturemovectrl) ( number featureID \[, bool enable \[, number\* args \]\] )\
return: nil

Use this callout to control feature movement. The number\* arguments are parsed as follows and all optional:\

If enable is true:\
\[, velVector(x,y,z) -- initial velocity for feature\
\[, accVector(x,y,z) -- acceleration added every frame\]\]\

If enable is false:\
\[, velocityMask(x,y,z) -- dimensions in which velocity is allowed to build when not using MoveCtrl\
\[, impulseMask(x,y,z) -- dimensions in which impulse is allowed to apply when not using MoveCtrl\
\[, movementMask(x,y,z) -- dimensions in which feature is allowed to move when not using MoveCtrl\]\]\]\

As of spring 103.0 it is necessary to unlock feature movement on x,z axis before changing feature physics. For example use "Spring.SetFeatureMoveCtrl(featureID,false,1,1,1,1,1,1,1,1,1)" to unlock all movement prior to making SetFeatureVelocity calls.

Spring.[SetFeatureNoSelect](#setfeaturenoselect) ( number featureID, bool noSelect )\
return: nil

Spring.[SetFeatureAlwaysVisible](#setfeaturealwaysvisible) ( number featureID, bool enable )\
return: nil

Spring.[SetFeatureCollisionVolumeData](#setfeaturecollisionvolumedata) ( number featureID, number scaleX, number scaleY, number scaleZ, number offsetX, number offsetY, number offsetZ, number vType, number tType, number Axis )\
return: nil

Check Spring.SetUnitCollisionVolumeData for further explanation of the arguments.

Spring.[SetFeaturePieceCollisionVolumeData](#setfeaturepiececollisionvolumedata) ( number featureID, number pieceIndex, bool enable, number scaleX, number scaleY, number scaleZ, number offsetX, number offsetY, number offsetZ, number Axis, number volumeType \[, number primaryAxis \] )\
return: nil

New in version 101.0

Spring.[SetFeatureMidAndAimPos](#setfeaturemidandaimpos) ( number featureID, number mpX, number mpY, number mpZ, number apX, number apY, number apZ \[, bool relative )\
return: bool success

New in version 89.0\
Check Spring.SetUnitMidAndAimPos for further explanation of the arguments.

Spring.[SetFeatureRadiusAndHeight](#setfeatureradiusandheight) ( number featureID, number radius, number height )\
return: bool success

New in version 89.0

Spring.[SetFeatureMass](#setfeaturemass) ( number featureID, number mass )\
return: nil

New in version 101.0

Spring.[SetFeatureBlocking](#setfeatureblocking) ( number featureID, boolean isBlocking, boolean isSolidObjectCollidable, boolean isProjectileCollidable, boolean isRaySegmentCollidable, boolean crushable, boolean blockEnemyPushing, boolean blockHeightChanges )\
return: nil

New in version 95.0\
Changed parameters.

## Lua to COB

Spring.[CallCOBScript](#callcobscript) ( number unitID, number funcID \| string funcName, number retArgs, COBArg1, COBArg2, ... )\
return: nil \| number returnValue, number retArg1, number retArg2, ...

Spring.[GetCOBScriptID](#getcobscriptid) ( number unitID, string funcName )\
return: nil \| number funcID

Spring.[GetUnitCOBValue](#getunitcobvalue) ( number unitID \[, bool splitData=false \], number COBValue \[, number param1 \[, number param2 \[, number param3 \[, number param4 \]\]\]\] )\
return: number result \| number result1, number result2

Note: Don't use Spring.\[Get\|Set\]UnitCOBValue in LUS just because you are familar with it since bos/cob, use the LuaSpringAPI instead!\
You can find the possible values for \`COBValue\` in [Lua_ConstCOB](/lua-constcob#get2fset). Also see [Custom_Variables](/animation-cobconstants#custom-variables).

Spring.[SetUnitCOBValue](#setunitcobvalue) ( number unitID, number COBValue, number param1 \[, number param2 \] )\
return: nil

Note: Don't use Spring.\[Get\|Set\]UnitCOBValue in LUS just because you are familar with it since bos/cob, use the LuaSpringAPI instead!\
You can find the possible values for \`COBValue\` in [Lua_ConstCOB](/lua-constcob#get2fset). Also see [Custom_Variables](/animation-cobconstants#custom-variables).

## Give Order

Options can also be a bitmask; e.g. 0 instead of an empty table (can avoid performance hit on table creation)\
See [Lua CMDs](/lua-cmds) for relevant constants.

Spring.[GiveOrderToUnit](#giveordertounit) ( number unitID, number cmdID, params = { number, etc...}, options = {"alt", "ctrl", "shift", "right"} )\
return: nil

Spring.[GiveOrderToUnitMap](#giveordertounitmap) ( unitMap = { \[unitID\] = example, etc... }, number cmdID, params = { number, etc...}, options = {"alt", "ctrl", "shift", "right"} )\
return: nil

Spring.[GiveOrderToUnitArray](#giveordertounitarray) ( unitArray = { \[1\] = unitID, etc... }, number cmdID, params = { number, etc...}, options = {"alt", "ctrl", "shift", "right"} )\
return: nil

Spring.[GiveOrderArrayToUnitMap](#giveorderarraytounitmap) ( unitMap = { \[number unitID\] = example, etc... }, orderArray = { { number cmdID, params = { number, etc...}, options = {"alt", "ctrl", "shift", "right"} } } )\
return: nil

Spring.[GiveOrderArrayToUnitArray](#giveorderarraytounitarray) ( unitArray = { \[1\] = number unitID, etc... }, orderArray = { { number cmdID, params = { number, etc...}, options = {"alt", "ctrl", "shift", "right"} } } )\
return: nil

## Ground

### Grass

Spring.[AddGrass](#addgrass) ( number x, number z )\
return: nil

Spring.[RemoveGrass](#removegrass) ( number x, number z )\
return: nil

### Heightmap

Note that x & z coords are in worldspace (Game.mapSizeX/Z), still the heightmap resolution is [Game.squareSize](/lua-constgame).

Spring.[LevelHeightMap](#levelheightmap) ( number x1, number z1 \[, number x2, number z2 \], number height )\
return: nil

Spring.[AdjustHeightMap](#adjustheightmap) ( number x1, number z1 \[, number x2, number z2 \], number height )\
return: nil

(heightmap\[x\]\[z\] += height;)

Spring.[RevertHeightMap](#revertheightmap) ( number x1, number z1 \[, number x2, number z2 \], number origFactor )\
return: nil

Spring.[SetHeightMapFunc](#setheightmapfunc) ( lua_function \[, arg1 \[, arg2 \[, ... \]\]\] )\
return: nil \| number absTotalHeightMapAmountChanged

Example code:

    Spring.SetHeightMapFunc(function()
        for z=0,Game.mapSizeZ, Game.squareSize do
            for x=0,Game.mapSizeX, Game.squareSize do
                Spring.SetHeightMap( x, z, 200 + 20 * math.cos((x + z) / 90) )
            end
        end
    end)

Spring.[AddHeightMap](#addheightmap) ( number x, number z, number height )\
return: nil \| number newHeight

Can only be called in SetHeightMapFunc()

Spring.[SetHeightMap](#setheightmap) ( number x, number z, number height \[, number terraform = 1 \] )\
return: nil \| number absHeightDiff

Can only be called in SetHeightMapFunc(). The terraform argument is a scaling factor:\

If =0 nothing will be changed (the terraform starts) and if =1 the terraform will be finished.

Spring.[LevelSmoothMesh](#levelsmoothmesh) ( number x1, number z1 \[, number x2, number z2 \], number height )\
return: nil

Spring.[AdjustSmoothMesh](#adjustsmoothmesh) ( number x1, number z1 \[, number x2, number z2 \], number height )\
return: nil

Spring.[RevertSmoothMesh](#revertsmoothmesh) ( number x1, number z1 \[, number x2, number z2 \], number origFactor )\
return: nil

Spring.[SetSmoothMeshFunc](#setsmoothmeshfunc) ( lua_function \[, arg1 \[, arg2 \[, ... \]\]\] )\
return: nil \| number absTotalHeightMapAmountChanged

Spring.[AddSmoothMesh](#addsmoothmesh) ( number x, number z, number height )\
return: nil \| number newHeight

Can only be called in SetSmoothMeshFunc().

Spring.[SetSmoothMesh](#setsmoothmesh) ( number x, number z, number height \[, number terraform = 1 \] )\
return: nil \| number absHeightDiff

Can only be called in SetSmoothMeshFunc().

### TerrainTypes

Spring.[SetMapSquareTerrainType](#setmapsquareterraintype) ( number x, number z, number newType )\
return: nil \| number oldType

Spring.[SetTerrainTypeData](#setterraintypedata) ( number typeIndex \[, number speedTanks = nil \[, number speedKBOts = nil \[, number speedHovers = nil \[, number speedShips = nil \]\]\]\] )\
return: nil \| bool true

Spring.[SetSquareBuildingMask](#setsquarebuildingmask) ( number x, number z, number mask )\
return: nil

New in version 103.0

See also [buildingMask](/gamedev-unitdefs#buildingmask) unitdef tag.

### MetalAmount

Spring.[SetMetalAmount](#setmetalamount) ( number x, number z, number metalAmount )\
return: nil

New in version 83.0\
x & z coords are in worldspace/16. metalAmount must be between 0 and 255\*maxMetal (with maxMetal from the .smd or mapinfo.lua).

## Command Descriptions

Doesn't work in unsynced code!\

Spring.[EditUnitCmdDesc](#editunitcmddesc) ( number unitID, number cmdDescID, table cmdArray )\
return: nil

    structure of cmdArray:
      {
        [ id          = int ],
        [ type        = int ],
        [ name        = string ],
        [ action      = string ],
        [ tooltip     = string ],
        [ texture     = string ],
        [ cursor      = string ],
        [ queueing    = boolean ],
        [ hidden      = boolean ],
        [ disabled    = boolean ],
        [ showUnique  = boolean ],
        [ onlyTexture = boolean ],
        [ params      = { string = string, ... } ]
      }

queueing is New in version 101.0 and allows custom commands to be non-queueing (handy for state toggles).

Spring.[InsertUnitCmdDesc](#insertunitcmddesc) ( number unitID \[, number cmdDescID \], table cmdArray )\
return: nil

Spring.[RemoveUnitCmdDesc](#removeunitcmddesc) ( number unitID \[, number cmdDescID \] )\
return: nil

## Other

Spring.[SetNoPause](#setnopause) ( bool noPause )\
return: nil

Spring.[SetUnitToFeature](#setunittofeature) ( bool tofeature )\
return: nil

An ugly global switch that can be used to block units turning into features when they finish being built (like \*A DT's do, which have the isFeature tag) <a href="http://springrts.com/phpbb/viewtopic.php?f=14&amp;p=481521" class="external text" rel="nofollow">thread</a>

Spring.[SetExperienceGrade](#setexperiencegrade) ( number expGrade \[, number ExpPowerScale \[, number ExpHealthScale \[, number ExpReloadScale \]\]\] )\
return: nil

expGrade defines how often UnitExperience() will be called.\
Prior to 104.0 it is based on the following equation:\
(int) \[exp/(exp+1)\] / expGrade\

Post 104.0 it is the raw change.

Spring.[SpawnExplosion](#spawnexplosion) ( number posX = 0, number posY = 0, number posZ = 0, number dirX = 0, number dirY = 0, number dirZ = 0, table explosionParams )\
return: nil

New in version 104.0

    Possible keys of explosionParams are:
        weaponDef = number,
        owner = number,
        hitUnit = number,
        hitFeature = number,
        craterAreaOfEffect = number,
        damageAreaOfEffect = number,
        edgeEffectiveness = number,
        explosionSpeed = number,
        gfxMod = number,
        impactOnly = boolean,
        ignoreOwner = boolean,
        damageGround = boolean

    Please note the explosion defaults to 1 damage regardless of what it's defined in the weaponDef.
    The weapondefID is only used for visuals and for passing into callins like UnitDamaged.

Spring.[SpawnCEG](#spawnceg) ( string "cegname", number posX = 0, number posY = 0, number posZ = 0, number dirX = 0, number dirY = 0, number dirZ = 0, number radius = 0, number damage = 0 )\
return: nil \| bool success, number cegID

cegID new in 95.0.

Spring.[SpawnSFX](#spawnsfx) ( number unitID, number sfxID, number posX = 0, number posY = 0, number posZ = 0, number dirX = 0, number dirY = 0, number dirZ = 0, number radius = 0, number damage = 0 \[, bool absolute \] )\
return: nil \| bool success

New in version 104.0

Equal to the [UnitScript versions of EmitSFX](/animation-luacallouts#effects), but takes position and direction arguments (in either unit- or piece-space) instead of a piece index.

## Projectiles

Spring.[SpawnProjectile](#spawnprojectile) ( number weaponDefID, table projectileParams )\
return: nil \| number projectileID

    Possible keys of projectileParams are:
        pos = {number x, number y, number z},
        end = {number x, number y, number z},
        speed = {number x, number y, number z},
        spread = {number x, number y, number z},
        error = {number x, number y, number z},
        owner = number,
        team = number,
        ttl = number,
        gravity = number,
        tracking = number,
        maxRange = number,
        startAlpha = number,
        endAlpha = number,
        model = string,
        cegTag = string

Spring.[DeleteProjectile](#deleteprojectile) ( number projectileID )\
return: nil

New in version 101.0\
Silently removes projectiles (no explosion).

Pre 95.0: Spring.[SetProjectileTarget](#setprojectiletarget) ( number projectileID, \[ number targetID, string targetTypeStr \] \| \[ number posX = 0, number posY = 0, number posZ = 0 \] )\
return: nil \| bool validTarget

Post 95.0: Spring.[SetProjectileTarget](#setprojectiletarget) ( number projectileID, \[ number targetID, number targetType \] \| \[ number posX = 0, number posY = 0, number posZ = 0 \] )\
return: nil \| bool validTarget

    targetTypeStr can be one of: 
        'u' - unit
        'f' - feature
        'p' - projectile
      while targetTypeInt is one of:
        string.byte('g') := GROUND
        string.byte('u') := UNIT
        string.byte('f') := FEATURE
        string.byte('p') := PROJECTILE

Spring.[SetProjectileIgnoreTrackingError](#setprojectileignoretrackingerror) ( number projectileID, bool ignore )\
return: nil

New in version 101.0

Spring.[SetProjectileIsIntercepted](#setprojectileisintercepted) ( number projectileID )\
return: nil

New in version 99.0

Spring.[SetProjectileMoveControl](#setprojectilemovecontrol) ( number projectileID, bool enable )\
return: nil

Disables engine movecontrol, so lua can fully control the physics.

Spring.[SetProjectilePosition](#setprojectileposition) ( number projectileID \[, number posX = 0 \[, number posY = 0 \[, number posZ = 0 \]\]\] )\
return: nil

Spring.[SetProjectileVelocity](#setprojectilevelocity) ( number projectileID \[, number velX = 0 \[, number velY = 0 \[, number velZ = 0 \]\]\] )\
return: nil

Spring.[SetProjectileCollision](#setprojectilecollision) ( number projectileID )\
return: nil

Spring.[SetProjectileGravity](#setprojectilegravity) ( number projectileID \[, number grav = 0 \] )\
return: nil

Spring.[SetProjectileSpinAngle](#setprojectilespinangle) ( number projectileID \[, number spinAngle = 0 \] )\
return: nil

Removed from version 95.0

Spring.[SetProjectileSpinSpeed](#setprojectilespinspeed) ( number projectileID \[, number speed = 0 \] )\
return: nil

Removed from version 95.0

Spring.[SetProjectileSpinVec](#setprojectilespinvec) ( number projectileID \[, number spinX = 0 \[, number spinY = 0 \[, number spinZ = 0 \]\]\] )\
return: nil

Removed from version 95.0

Spring.[SetProjectileCEG](#setprojectileceg) ( number projectileID, string ceg_name )\
return: nil

Spring.[SetPieceProjectileParams](#setpieceprojectileparams) ( number projectileID \[, number explosionFlags \[, number spinAngle \[, number spinSpeed \[, number spinVector.x \[, number spinVector.y \[, number spinVector.z \]\]\]\]\]\] )\
return: nil

New in version 95.0

Spring.[SetProjectileAlwaysVisible](#setprojectilealwaysvisible) ( number projectileID, bool alwaysVisible )\
return: nil

New in version 95.0

Spring.[SetProjectileDamages](#setprojectiledamages) ( number unitID, number weaponNum, table damages )\
return: nil

or

Spring.[SetProjectileDamages](#setprojectiledamages) ( number unitID, number weaponNum, string key, number value )\
return: nil

New in version 101.0

    Format of the damages table:
       {
          ["paralyzeDamageTime" = number value,]  
          ["impulseFactor"      = number value,]
          ["impulseBoost"       = number value,]
          ["craterMult"         = number value,]
          ["craterBoost"        = number value,]
          ["dynDamageExp"       = number value,]
          ["dynDamageMin"       = number value,]
          ["dynDamageRange"     = number value,]
          ["dynDamageInverted"  = number value,] (<>0.0f := true)
          ["craterAreaOfEffect" = number value,]
          ["damageAreaOfEffect" = number value,]
          ["edgeEffectiveness"  = number value,]
          ["explosionSpeed"     = number value,]
          [number armorType     = number value,] (changes the damage against this armor type)
        }

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua SyncedCtrl](https://springrts.com/wiki/Lua_SyncedCtrl).*
