---
title: "Lua UnitDefs"
source_url: "https://springrts.com/wiki/Lua_UnitDefs"
categories:
  - "Lua"
---
# Lua UnitDefs

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua UnitDefs

**Were you looking for the unitDefs page for Game Developers?** ([Gamedev:UnitDefs](/gamedev-unitdefs))

## What is this

The **UnitDefs\[\]** table holds information about the unit**types** used in the game. It is indexed by a number, and normally refered to as unitDefID. It is read-only. To access its tags you write, for example,

        UnitDefs[unitDefID].name

**Note:**\
The name of the keys often vary from the ones in the [Gamedev:UnitDefs](/gamedev-unitdefs) files. For example *maxDamage* is named *health*.

## UnitDefs reverse lookup: UnitDefNames

The **UnitDefNames\[\]** table holds the unitdefs and can be used to get the unitdef table for a known unitname:

        local unitDef = UnitDefNames["supertank"]

## Print all unitDefs

This example code prints all unitdefs, with all keys and their values (but not their subtables).

      for id,unitDef in pairs(UnitDefs) do
        for name,param in unitDef:pairs() do
          Spring.Echo(name,param)
        end
      end

Note that unitDef is a metatable, and requires the special iterator unitDef:pairs()

## Useful keys/snippets

` UnitDefs[unitDefID].id ` - gives back the unitDefID

` UnitDefs[unitDefID].name ` - the internal unit name

` UnitDefs[unitDefID].humanName ` - the displayed unit name

`UnitDefs[unitDefID].weapons` - See [Lua_WeaponDefs](/lua-weapondefs), `UnitDefs[unitDefID].weapons[1].weaponDef` returns the weaponDefID of the units first weapon, which apppears in the WeaponsDef table as `WeaponDefs[weaponDefID]`.

To read [custom parameters](/gamedev-unitdefs#customparams) use:

        local myCustomParameters = UnitDefs[unitDefID].customParams
        if (myCustomParameters) then
          blub = myCustomParameters.blubfactor
        end

Key-names of the customParams table written must be lowercase and their values can only be strings.

### Types of Units

Sometimes one wants to check type of unit. Like is it a factory, is it a transport and so on. Complete list: <sup>[\[1\]](#cite-note-1)</sup>

- isTransport
- isImmobile
- isBuilding
- isBuilder
- isMobileBuilder
- isStaticBuilder
- isFactory
- isExtractor
- isGroundUnit
- isAirUnit
- isStrafingAirUnit
- isHoveringAirUnit
- isFighterAirUnit
- isBomberAirUnit

## Example UnitDef table

In the form of key = value, where UnitDefs\[unitDefID\].key = value, with subtables at the bottom.

        activateWhenBuilt = true,
        airLosRadius = 5.2734375,
        airStrafe = true,
        armorType = 3,
        armoredMultiple = 1,
        autoHeal = 2.5,
        bankingAllowed = true,
        buildDistance = 112,
        buildRange3D = false,
        buildSpeed = 300,
        buildTime = 75000,
        builder = false,
        buildingDecalDecaySpeed = 0.10000000149012,
        buildingDecalSizeX = 4,
        buildingDecalSizeY = 4,
        buildingDecalType = -1,
        buildpicname = "CORCOM.DDS",
        canAssist = true,
        canAttack = true,
        canAttackWater = true,
        canBeAssisted = true,
        canCapture = true,
        canCloak = true,
        canCrash = false,
        canDGun = false,
        canDropFlare = false,
        canFight = true,
        canFireControl = true,
        canFly = false,
        canGuard = true,
        canKamikaze = false,
        canLoopbackAttack = false,
        canManualFire = true,
        canMove = true,
        canParalyze = false,
        canPatrol = true,
        canReclaim = true,
        canRepair = true,
        canRepeat = true,
        canRestore = true,
        canResurrect = false,
        canSelfD = true,
        canSelfRepair = false,
        canStockpile = false,
        canSubmerge = false,
        cantBeTransported = false,
        capturable = true,
        captureSpeed = 900,
        cloakCost = 100,
        cloakCostMoving = 1000,
        cloakTimeout = 128,
        cobID = -1,
        collide = true,
        cost = 3111.4499511719,
        crashDrag = 0.0049999998882413,
        deathExplosion = "commander_blast",
        decloakDistance = 50,
        decloakOnFire = true,
        decloakSpherical = true,
        dlHoverFactor = -1,
        energyCost = 26667,
        energyMake = 25,
        energyStorage = 0,
        energyUpkeep = 0,
        extractRange = 0,
        extractsMetal = 0,
        factoryHeadingTakeoff = true,
        fallSpeed = 0.20000000298023,
        fireState = -1,
        flankingBonusDirX = 0,
        flankingBonusDirY = 0,
        flankingBonusDirZ = 1,
        flankingBonusMax = 1.8999999761581,
        flankingBonusMin = 0.89999997615814,
        flankingBonusMobilityAdd = 0.0099999997764826,
        flankingBonusMode = 1,
        flareDelay = 0.30000001192093,
        flareDropVectorX = 0,
        flareDropVectorY = 0,
        flareDropVectorZ = 0,
        flareEfficiency = 0.5,
        flareReloadTime = 5,
        flareSalvoDelay = 0,
        flareSalvoSize = 4,
        flareTime = 90,
        floatOnWater = false,
        floater = false,
        frontToSpeed = 0.10000000149012,
        fullHealthFactory = false,
        hasShield = false,
        health = 3000,
        height = 50,
        hideDamage = true,
        highTrajectoryType = 0,
        holdSteady = false,
        hoverAttack = false,
        humanName = "Commander",
        iconType = "corcom.user",
        id = 261,
        idleAutoHeal = 2.5,
        idleTime = 1800,
        isAirBase = false,
        isAirUnit = false,
        isBomberAirUnit = false,
        isBuilder = true,
        isBuilding = false,
        isCommander = false,
        isExtractor = false,
        isFactory = false,
        isFeature = false,
        isFighterAirUnit = false,
        isFirePlatform = false,
        isGroundUnit = true,
        isHoveringAirUnit = false,
        isImmobile = false,
        isMobileBuilder = true,
        isStaticBuilder = false,
        isStrafingAirUnit = false,
        isTransport = false,
        jammerRadius = 0,
        kamikazeDist = 0,
        kamikazeUseLOS = false,
        leaveTracks = false,
        levelGround = true,
        loadingRadius = 220,
        losHeight = 40,
        losRadius = 14.0625,
        makesMetal = 0,
        mass = 5000,
        maxAcc = 0.18000000715256,
        maxAileron = 0.014999999664724,
        maxBank = 0.80000001192093,
        maxCoverage = 0,
        maxDec = 1.125,
        maxElevator = 0.0099999997764826,
        maxFuel = 0,
        maxHeightDif = 14.558809280396,
        maxPitch = 0.44999998807907,
        maxRepairSpeed = 300,
        maxRudder = 0.0040000001899898,
        maxSlope = -1,
        maxThisUnit = 32000,
        maxWaterDepth = 35,
        maxWeaponRange = 300,
        metalCost = 2667,
        metalMake = 1.5,
        metalStorage = 0,
        metalUpkeep = 0,
        minAirBasePower = 0,
        minCollisionSpeed = 1,
        minWaterDepth = -10000000,
        modelname = "CORCOM.s3o",
        modelpath = "objects3d/CORCOM.s3o",
        modeltype = "s3o",
        moveState = -1,
        myGravity = 0.40000000596046,
        name = "corcom",
        nanoColorB = 0.20000000298023,
        nanoColorG = 0.69999998807907,
        nanoColorR = 0.20000000298023,
        needGeo = false,
        onOffable = false,
        power = 3111.4499511719,
        primaryWeapon = 2,
        rSpeed = 0,
        radarRadius = 700,
        radius = 22,
        reclaimSpeed = 300,
        reclaimable = false,
        refuelTime = 5,
        releaseHeld = false,
        reloadTime = 1,
        repairSpeed = 300,
        repairable = true,
        resurrectSpeed = 300,
        scriptName = "corcom.cob",
        scriptPath = "corcom.cob",
        seismicRadius = 0,
        seismicSignature = 0,
        selfDCountdown = 5,
        selfDExplosion = "commander_blast",
        shieldPower = -1,
        showNanoFrame = true,
        showNanoSpray = true,
        showPlayerName = true,
        slideTolerance = 0,
        sonarJamRadius = 0,
        sonarRadius = 300,
        sonarStealth = false,
        speed = 37.5,
        speedToFront = 0.070000000298023,
        startCloaked = false,
        stealth = false,
        strafeToAttack = false,
        targfac = false,
        techLevel = 0,
        terraformSpeed = 1500,
        tidalGenerator = 0,
        tooltip = "Commander",
        totalEnergyOut = 25,
        trackOffset = 0,
        trackStrength = 0,
        trackStretch = 1,
        trackType = -1,
        trackWidth = 32,
        transportByEnemy = false,
        transportCapacity = 0,
        transportMass = 100000,
        transportSize = 0,
        transportUnloadMethod = 0,
        turnInPlace = true,
        turnInPlaceSpeedLimit = 0.82499998807907,
        turnRadius = 500,
        turnRate = 1133,
        type = "",
        unitFallSpeed = 0,
        upright = true,
        useBuildingGroundDecal = false,
        useSmoothMesh = true,
        verticalSpeed = 3,
        wantedHeight = 0,
        waterline = 0,
        windGenerator = 0,
        wingAngle = 0.079999998211861,
        wingDrag = 0.070000000298023,
        wreckName = "corcom_dead",
        xsize = 4,
        zsize = 4,

        buildOptions = {
            [1] = unitDefID1,
            [2] = unitDefID2,
            ...
        },
        collisionVolume = {
            boundingRadius = 1.0893974967364e-026,
            defaultToFootPrint = false,
            defaultToPieceTree = false,
            defaultToSphere = false,
            offsetX = 0,
            offsetY = 1,
            offsetZ = 1.089395031546e-026,
            scaleX = 6.4911419586111e-027,
            scaleY = 1.9340968033141e-038,
            scaleZ = 1.0894122878784e-026,
            type = "ellipsoid",
        },
        customParams = {
            ...
        },
        modCategories = {
            all = true,
            commander = true,
            notair = true,
            ...
        },
        model = {
            minx = -16.537784576416,
            miny = 0.058725833892822,
            minz = -9.709508895874,
            midx = 0.66120779514313,
            midy = 19,
            midz = 1.7122877836227,
            maxx = 17.423709869385,
            maxy = 48.386325836182,
            maxz = 14.10532283783,
            textures = {
                tex1 = "Core_color.dds",
                tex2 = "Core_other.dds",
            },
        },
        moveDef = {
            crushStrength = 50,
            depth = 5000,
            depthMod = 0,
            family = "kbot",
            heatMapping = false,
            heatMod = 0.0041666668839753,
            heatProduced = 60,
            id = 6,
            maxSlope = 0.41221469640732,
            name = "akbot2",
            slopeMod = 9.6801977157593,
            type = "ground",
            xsize = 3,
            zsize = 3,
        },
        noChaseCategories = {
            all = true,
            ...
        },
        sounds = {
            activate = {},
            arrived = {},
            build = {
                [1] = {
                    id = 208,
                    name = "nanlath2",
                    volume = 1,
                },
                ...
            },
            ...
        },
        weapons = {
            [1] = {
                fuelUsage = 0,
                mainDirX = 0,
                mainDirY = 0,
                mainDirZ = 0.99999564886093,
                maxAngleDif = -1,
                slavedTo = 0,
                weaponDef = 221,
                badTargets = {
                    vtol = true,
                },
                onlyTargets = {
                    all = true,
                    antiemg = true,
                    ...
                },
            },
            ...
        },

## Unit/Weapon damages and armor classes

For details on how to extract which units/weapons target/damage which units, see <a href="https://springrts.com/phpbb/viewtopic.php?f=44&amp;t=34382&amp;p=575738#p575738" class="external free" rel="nofollow">https://springrts.com/phpbb/viewtopic.php?f=44&amp;t=34382&amp;p=575738#p575738</a> (TODO: migrate info to wiki).

## How to save unitDef tables to file

To save all unitDefs to a file, including all tables, you can use

        local unitDef = UnitDefs[unitDefID]
        local t = {}
        for k,v in unitDef:pairs() do
            t[k] = v
        end
        table.save(t, "lua_unitDef_" .. unitDef.name .. ".lua", "-- generated by table.save")

The special iterator is needed because metatables. See <a href="https://springrts.com/phpbb/viewtopic.php?f=67&amp;t=33778" class="external free" rel="nofollow">https://springrts.com/phpbb/viewtopic.php?f=67&amp;t=33778</a> for a widget to regenerate the example defs.

------------------------------------------------------------------------

<div class="mw-references-wrap">

1.  [↑](#cite-ref-1) *Spring 95, commit message*,<a href="https://github.com/spring/spring/commit/4e58b8b0f7af04065878d34e5e17523246739b0c" class="external text" rel="nofollow">4e58b8b0</a>

</div>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua UnitDefs](https://springrts.com/wiki/Lua_UnitDefs).*
