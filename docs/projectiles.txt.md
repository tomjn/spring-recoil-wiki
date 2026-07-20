---
title: "Projectiles.txt"
source_url: "https://springrts.com/wiki/Projectiles.txt"
categories:
  - "CEG"
---
# Projectiles.txt

<div class="mw-parser-output">

    Class: CSimpleGroundFlash.  Scriptname: CSimpleGroundFlash
        sizeGrowth: float
        ttl: int
        colorMap: CColorMap*
        texture: GroundFXTexture*
        size: float
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CSeismicGroundFlash.  Scriptname: CSeismicGroundFlash
        size: float
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CStandardGroundFlash.  Scriptname: CStandardGroundFlash
        flashSize: float
        circleAlpha: float
        flashAlpha: float
        circleGrowth: float
        color: uchar[3]
        size: float
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CGroundFlash.  Scriptname: CGroundFlash
        size: float
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CProjectile.  Scriptname: CProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CPieceProjectile.  Scriptname: CPieceProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CFlareProjectile.  Scriptname: CFlareProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CExpGenSpawner.  Scriptname: CExpGenSpawner
        delay: int
        dir: float3
        damage: float
        explosionGenerator: CExplosionGenerator*
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CFireProjectile.  Scriptname: CFireProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CTorpedoProjectile.  Scriptname: CTorpedoProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CEmgProjectile.  Scriptname: CEmgProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CBeamLaserProjectile.  Scriptname: CBeamLaserProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CFireBallProjectile.  Scriptname: CFireBallProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CLightningProjectile.  Scriptname: CLightningProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CStarburstProjectile.  Scriptname: CStarburstProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CFlameProjectile.  Scriptname: CFlameProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CWeaponProjectile.  Scriptname: CWeaponProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CMissileProjectile.  Scriptname: CMissileProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CLargeBeamLaserProjectile.  Scriptname: CLargeBeamLaserProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CExplosiveProjectile.  Scriptname: CExplosiveProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CLaserProjectile.  Scriptname: CLaserProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CBitmapMuzzleFlame.  Scriptname: CBitmapMuzzleFlame
        sideTexture: AtlasedTexture*
        frontTexture: AtlasedTexture*
        dir: float3
        colorMap: CColorMap*
        size: float
        length: float
        sizeGrowth: float
        ttl: int
        frontOffset: float
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CGenericParticleProjectile.  Scriptname: CGenericParticleProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CSmokeTrailProjectile.  Scriptname: CSmokeTrailProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CMuzzleFlame.  Scriptname: CMuzzleFlame
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CGeoThermSmokeProjectile.  Scriptname: CGeoThermSmokeProjectile
        color: float
        size: float
        startSize: float
        sizeExpansion: float
        ageSpeed: float
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CTracerProjectile.  Scriptname: CTracerProjectile
        length: float
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CDirtProjectile.  Scriptname: CDirtProjectile
        alpha: float
        alphaFalloff: float
        size: float
        sizeExpansion: float
        slowdown: float
        color: float3
        texture: AtlasedTexture*
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CSphereParticleSpawner.  Scriptname: CSphereParticleSpawner
        emitVector: float3
        emitMul: float3
        gravity: float3
        colorMap: CColorMap*
        texture: AtlasedTexture*
        airdrag: float
        particleLife: float
        particleLifeSpread: float
        numParticles: int
        particleSpeed: float
        particleSpeedSpread: float
        particleSize: float
        particleSizeSpread: float
        emitRot: float
        emitRotSpread: float
        directional: bool
        sizeGrowth: float
        sizeMod: float
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CSimpleParticleSystem.  Scriptname: CSimpleParticleSystem
        emitVector: float3
        emitMul: float3
        gravity: float3
        colorMap: CColorMap*
        texture: AtlasedTexture*
        airdrag: float
        particleLife: float
        particleLifeSpread: float
        numParticles: int
        particleSpeed: float
        particleSpeedSpread: float
        particleSize: float
        particleSizeSpread: float
        emitRot: float
        emitRotSpread: float
        directional: bool
        sizeGrowth: float
        sizeMod: float
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CExploSpikeProjectile.  Scriptname: CExploSpikeProjectile
        length: float
        width: float
        alpha: float
        alphaDecay: float
        lengthGrowth: float
        dir: float3
        color: float3
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CWreckProjectile.  Scriptname: CWreckProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CSmokeProjectile2.  Scriptname: CSmokeProjectile2
        color: float
        ageSpeed: float
        size: float
        startSize: float
        sizeExpansion: float
        wantedPos: float3
        glowFalloff: float
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CWakeProjectile.  Scriptname: CWakeProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CHeatCloudProjectile.  Scriptname: CHeatCloudProjectile
        heat: float
        maxheat: float
        heatFalloff: float
        size: float
        sizeGrowth: float
        sizemod: float
        sizemodmod: float
        texture: AtlasedTexture*
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CSpherePartSpawner.  Scriptname: CSpherePartSpawner
        alpha: float
        ttl: int
        expansionSpeed: float
        color: float3
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CSpherePartProjectile.  Scriptname: CSpherePartProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CRepulseGfx.  Scriptname: CRepulseGfx
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CGfxProjectile.  Scriptname: CGfxProjectile
        creationTime: int
        lifeTime: int
        color: uchar[4]
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CSmokeProjectile.  Scriptname: CSmokeProjectile
        color: float
        size: float
        startSize: float
        sizeExpansion: float
        ageSpeed: float
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CBubbleProjectile.  Scriptname: CBubbleProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CGeoSquareProjectile.  Scriptname: CGeoSquareProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

    Class: CShieldPartProjectile.  Scriptname: CShieldPartProjectile
        speed: float3
        pos: float3
        useAirLos: bool
        alwaysVisible: bool

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Projectiles.txt](https://springrts.com/wiki/Projectiles.txt).*
