---
title: "Lua WeaponDefs"
source_url: "https://springrts.com/wiki/Lua_WeaponDefs"
categories:
  - "Lua"
---
# Lua WeaponDefs

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua WeaponDefs

The **WeaponDefs\[\]** table holds all information about the weapons used in a game.

Works the same way as [Lua_UnitDefs](/lua-unitdefs) except the tables are called **WeaponDefs\[\]** and **WeaponDefNames\[\]**

Note: Its entries are metatables, so you can't use the pairs() iterator on them, use this instead:

      for id,weaponDef in pairs(WeaponDefs) do
        for name,param in weaponDef:pairs() do
          Spring.Echo(name,param)
        end
      end

## Naming

If a unit named "tank" has a weapon named "gun", the resulting `name` will be "tank_gun" and you can get this weaponDefID like:

`local gunID = WeaponDefNames["tank_gun"].id`

## Example

For a more detailed overview of tag definitions look at [Gamedev:WeaponDefs](/gamedev-weapondefs) or look directly at the source at <a href="https://github.com/spring/spring/blob/5f08624585852b8c8dfd1a16d020ae530269dc09/rts/Sim/Weapons/WeaponLoader.cpp" class="external free" rel="nofollow">https://github.com/spring/spring/blob/5f08624585852b8c8dfd1a16d020ae530269dc09/rts/Sim/Weapons/WeaponLoader.cpp</a>

In key = value format, where WeaponDefs\[weaponDefID\].key==value, with subtables at the end.

        accuracy = 0,
        avoidFeature = false,
        avoidFriendly = true,
        avoidNeutral = false,
        beamTTL = 0,
        beamburst = false,
        beamtime = 0.10000000149012,
        bouncerebound = 1,
        canAttackGround = true,
        cegTag = "",
        collisionSize = 0.050000000745058,
        coverageRange = 0,
        craterAreaOfEffect = 0,
        cylinderTargeting = 1,
        cylinderTargetting = 1,
        damageAreaOfEffect = 6,
        dance = 0,
        description = "J7Laser",
        duration = 0.050000000745058,
        dynDamageExp = 0,
        dynDamageInverted = false,
        dynDamageMin = 0,
        dynDamageRange = 0,
        edgeEffectiveness = 0.99000000953674,
        energyCost = 0,
        explosionSpeed = 3.233583688736,
        exteriorShield = false,
        fireStarter = 0.69999998807907,
        flightTime = 0,
        gravityAffected = false,
        groundbounce = false,
        groundslip = 1,
        heightBoostFactor = -1,
        heightMod = 1,
        highTrajectory = 2,
        id = 220,
        impactOnly = true,
        intensity = 0.89999997615814,
        interceptSolo = true,
        interceptedByShieldType = 2,
        interceptor = 0,
        isShield = false,
        largeBeamLaser = false,
        laserHardStop = false,
        leadBonus = 0,
        leadLimit = -1,
        manualFire = false,
        maxAngle = 0.95873802900314,
        metalCost = 0,
        minIntensity = 0,
        movingAccuracy = 0,
        myGravity = 0,
        name = "corcom_armcomlaser",
        noAutoTarget = false,
        noEnemyCollide = false,
        noExplode = false,
        noFeatureCollide = false,
        noFriendlyCollide = false,
        noGroundCollide = false,
        noNeutralCollide = false,
        noSelfDamage = true,
        numbounce = -1,
        onlyForward = false,
        paralyzer = false,
        predictBoost = 0,
        projectiles = 1,
        projectilespeed = 30.000001907349,
        proximityPriority = 1,
        range = 300,
        reload = 0.40000000596046,
        salvoDelay = 0.10000000149012,
        salvoSize = 1,
        selfExplode = false,
        shieldAlpha = 0.20000000298023,
        shieldBadColorB = 0.5,
        shieldBadColorG = 0.5,
        shieldBadColorR = 1,
        shieldEnergyUse = 0,
        shieldForce = 0,
        shieldGoodColorB = 1,
        shieldGoodColorG = 0.5,
        shieldGoodColorR = 0.5,
        shieldInterceptType = 0,
        shieldMaxSpeed = 0,
        shieldPower = 0,
        shieldPowerRegen = 0,
        shieldPowerRegenEnergy = 0,
        shieldRadius = 0,
        shieldRechargeDelay = 0,
        shieldRepulser = false,
        size = 2.1875,
        sizeGrowth = 0.5,
        smartShield = false,
        soundTrigger = true,
        sprayAngle = 0,
        startvelocity = 0.0099999997764826,
        stockpile = false,
        stockpileTime = 30,
        sweepFire = false,
        targetBorder = 0,
        targetMoveError = 0.050000000745058,
        targetable = 0,
        tdfId = 0,
        tracks = false,
        trajectoryHeight = 0,
        turnRate = 0,
        turret = true,
        type = "BeamLaser",
        uptime = 0,
        visibleShield = false,
        visibleShieldHitFrames = 0,
        visibleShieldRepulse = false,
        waterWeapon = false,
        waterbounce = false,
        weaponAcceleration = 0,
        wobble = 0,
        customParams = {},
        damages = {
            craterBoost = 0,
            ...
        },
        fireSound = {
            [1] = {
                id = 36,
                name = "lasrfir1",
                volume = 6.1237244606018,
            },
            ...
        },
        hitSound = {
            [1] = {
                id = -1,
                name = "",
                volume = 6.1237244606018,
            },
            ...
        },
        visuals = {
            alphaDecay = 1,
            alwaysVisible = false,
            beamDecay = 1,
            beamWeapon = false,
            color2B = 1,
            color2G = 1,
            color2R = 1,
            colorB = 0,
            colorG = 0,
            colorR = 1,
            coreThickness = 0.10000000149012,
            laserFlareSize = 7,
            modelName = "",
            noGap = true,
            pulseSpeed = 1,
            scrollSpeed = 5,
            separation = 1,
            sizeDecay = 0,
            smokeTrail = false,
            stages = 5,
            thickness = 2,
            tileLength = 200,
        },

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua WeaponDefs](https://springrts.com/wiki/Lua_WeaponDefs).*
