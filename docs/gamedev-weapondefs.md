---
title: "Gamedev:WeaponDefs"
source_url: "https://springrts.com/wiki/Gamedev:WeaponDefs"
categories:
  - "Game_Dev"
---
# Gamedev:WeaponDefs

<div class="mw-parser-output">

[Development](/gamedev-main) \< [Gamedev:Main](/gamedev-main) \< Gamedev:WeaponDefs

## Location

WeaponDef files are .lua files stored in the `Weapons/` directory of a Spring Game. Alternatively they can be integrated into [UnitDefs](/gamedev-unitdefs).

## Purpose

WeaponDef files have one purpose; to define the properties of weapons. They are the main description file for what attributes your weapon should have and how it should behave. Since version 100.0, Spring will record a warning whenever it finds an unknown tag.

## Source

The engine source code which loads the tags from these files is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Weapons/WeaponDef.cpp" class="external text" rel="nofollow">rts/Sim/Weapons/WeaponDef.cpp</a>

## Data Types

int  
An integer number. eg. 5

float  
A number with decimals. eg 1.023

bool  
A value which can be true or false. eg true

string  
Text, or more precisely a string of alphanumeric characters. eg "string of characters"

rgb  
Three float components, representing red, green and blue components, ranged from 0.0 to 1.0. eg {0.0, 0.0, 0.0} 

float3  
Three float components, eg {0.0, 0.0, 0.0} 

float4  
Four float components, eg {0.0, 0.0, 0.0, 0.0} 

## Details

There follows a comprehensive (certain deprecated tags are not present) list of the tags available, their data type, default value and a brief description of what they do. Bear in mind that the source code linked above is the ultimate reference when dealing with these tags.

In lua tables keys (i.e. the tags) should be lower case, here they are represented in camelCase for readability. In your files you may use the `lowerkeys` function on your final table to ensure the keys are properly cased.

It is usual to name the returned WeaponDef table the internal `weaponName` desired for the weapon.

### Common

The following tags are common to all or at least a majority of **WeaponTypes**, depending on the tag.

#### General

string [weaponType](#weapontype)  default: "Cannon" 

Spring has 14 **WeaponTypes** which provide game developers with basic behaviours which they can customise to an extent with the **WeaponDef** tags. Some tags are specific to certain **WeaponTypes** and not implemented for others, <a href="https://docs.google.com/spreadsheet/ccc?key=0Am5BbZxm93S9dEZXc1Q4dXR4TFRYTFM4NlR4OFJFdWc#gid=0" class="external text" rel="nofollow">this two-way table</a> indicates which tags work for which types. The possible values are:

- [AircraftBomb](#aircraftbomb)
- [BeamLaser](#beamlaser)
- [Cannon](#cannon)
- [Dgun](#dgun)
- [EmgCannon](#emgcannon)
- [Flame](#flame)
- [LaserCannon](#lasercannon)
- [LightningCanon](#lightningcannon)
- [Melee](#melee)
- [MissileLauncher](#missilelauncher)
- [Rifle](#rifle)
- [Shield](#shield-28weapontype29)
- [StarburstLauncher](#starburstlauncher)
- [TorpedoLauncher](#torpedolauncher)

string [name](#name)  default: "Weapon" 

The descriptive name of the weapon as listed in FPS mode.

bool [turret](#turret)  default: false 

Does the unit aim within an arc (up-to and including full 360Â° turret traverse) or always aim along the owner's heading?

bool [noSelfDamage](#noselfdamage)  default: false 

Can the weapon's explosion damage the unit which fires it? Useful for preventing bombers with high-yield weapons destroying themselves.

bool [impactOnly](#impactonly)  default: false 

Does the weapon only deal damage through direct hits and not 'splash' damage through [areaOfEffect](#areaofeffect)?

bool [noExplode](#noexplode)  default: false 

Does the weapon explode on impact with a target or continue through? Note that these weapons will do damage every single frame they are inside the [collision volume](/gamedev-collisionvolumes) of an object, underground or under water, massively multiplying their damage.

bool [burnblow](#burnblow)  default: false lua: selfExplode 

Does the weapon explode when it reaches its maximum range or continue on its path? The name is an [OTAism](/gamedev-glossary).

float [range](#range)  default: 10.0 

The maximum range in [elmos](/gamedev-unitsofmeasurement) that the weapon can fire at.

float [weaponVelocity](#weaponvelocity)  default: 0.0 

The velocity in [elmos](/gamedev-unitsofmeasurement) per second of the weapon projectile. Since 99.0 `maxVelocity` is a synonym.

float [reloadTime](#reloadtime)  default: 1.0 

The time in seconds between shots fired.

float [metalPerShot](#metalpershot)  default: 0.0 

Metal used per shot. If the specified amount is not available, the weapon cannot be fired. Can also be used to specify how much a [stockpile](#stockpile) weapon will cost to build.

float [energyPerShot](#energypershot)  default: 0.0 

Energy used per shot. If the specified amount is not available, the weapon cannot be fired. Can also be used to specify how much a [stockpile](#stockpile) weapon will cost to build.

float [myGravity](#mygravity)  default: 0.0 

Overrides the map gravity for ballistic weapons. The default of `0.0` disables the tag in favour of map gravity.

float [fireStarter](#firestarter)  default: 0.0 

The percentage chance (`0.0` to `100.0`) of the weapon setting fire to static map features on impact.

float [cameraShake](#camerashake)  default: damage (0.0 for paralyzers) 

Passed to the [ShockFront() callin](/luacallinreturn#game-events) as the first argument. Intended as a means to make the camera shake if in range of detonation.

bool [stockpile](#stockpile)  default: false 

Does each round of the weapon have to be built and stockpiled by the player? Will only correctly function for the first of each stockpiled weapons a unit has.

float [stockpileTime](#stockpiletime)  default: reloadTime 

The time in seconds taken to stockpile one round of the weapon.

int [interceptedByShieldType](#interceptedbyshieldtype)  default: Depends on [weaponType](#weapontype) 

<a href="http://en.wikipedia.org/wiki/Mask_(computing)" class="external text" rel="nofollow">Bitmask</a> representing the types of shields that can intercept this weapon. Each digit of binary that is set to one means that a shield with the corresponding digit in its [interceptType](#intercepttype) will intercept this weapon. A value of `0` means that no shields will intercept the weapon. The defaults are as follows:

- `0` - [\#DGun](#dgun)
- `1` - [\#Cannon](#cannon) and [\#EmgCannon](#emgcannon)
- `2` - [\#LaserCannon](#lasercannon) and [\#BeamLaser](#beamlaser)
- `4` - [\#MissileLauncher](#missilelauncher) and [\#StarburstLauncher](#starburstlauncher)
- `8` - [\#AircraftBomb](#aircraftbomb)
- `16` - [\#Flame](#flame)
- `32` - [\#TorpedoLauncher](#torpedolauncher)
- `64` - [\#LightningCannon](#lightningcannon)
- `128` - [\#Rifle](#rifle)
- `256` - [\#Melee](#melee)

(See [Shield Interception Tag Use](/shield-interception-tag-use)).

#### Collision & Avoidance

bool [avoidGround](#avoidground)  default: true 

Should the weapon avoid firing if terrain blocks the line of fire?

bool [avoidFriendly](#avoidfriendly)  default: true 

Should the weapon avoid firing if a friendly unit is in the line of fire?

bool [avoidFeature](#avoidfeature)  default: true 

Should the weapon avoid firing if a static map feature is in the line of fire?

bool [avoidNeutral](#avoidneutral)  default: false 

Should the weapon avoid firing if a neutral unit is in the line of fire?

bool [collideEnemy](#collideenemy)  default: true lua: noEnemyCollide 

Does the weapon projectile collide with enemy units or pass through?

bool [collideFriendly](#collidefriendly)  default: true lua: noFriendlyCollide 

Does the weapon projectile collide with friendly units or pass through?

bool [collideFirebase](#collidefirebase)  default: false lua: noFirebaseCollide 

Does the weapon projectile collide with friendly firebase units the owner is loaded onto, or pass through?

bool [collideFeature](#collidefeature)  default: true lua: noFeatureCollide 

Does the weapon projectile collide with static map features or pass through?

bool [collideNeutral](#collideneutral)  default: true lua: noNeutralCollide 

Does the weapon projectile collide with neutral units or pass through?

bool [collideGround](#collideground)  default: true lua: noGroundCollide 

Does the weapon projectile collide with terrain or pass through?

float [collisionSize](#collisionsize)  default: 0.05 (0.5 for [\#Flame](#flame) and [\#LaserCannon](#lasercannon), 10.0 for [\#Dgun](#dgun)) 

Modifies visual size of EMG and Flame projectiles, and physical size **only** for hitscan interceptor weapons (e.g. antinuke lasers). \[<a href="https://github.com/spring/spring/blob/3034e5f5a8f5b9fb4624a97f7a85cb5c90457725/rts/Sim/Projectiles/WeaponProjectiles/WeaponProjectile.cpp#L250" class="external text" rel="nofollow">1</a>\]\[<a href="https://github.com/spring/spring/blob/master/rts/Sim/Misc/CollisionHandler.cpp#L33" class="external text" rel="nofollow">2</a>\]

#### Targeting & Accuracy

bool [commandFire](#commandfire)  default: false 

Determines if the weapon will automatically fire on enemy units in range or only when manually ordered to attack.

bool [canAttackGround](#canattackground)  default: true 

Determines if the weapon can be force-fired on ground positions or only fire on targeted units.

bool [waterWeapon](#waterweapon)  default: false 

Determines if the weapon can pass through water and target underwater units.

bool [fireSubmersed](#firesubmersed)  default: waterWeapon 

Determines if the weapon can fire whilst underwater.

float [targetBorder](#targetborder)  default: 0.0 (1.0 for [\#Melee](#melee)) 

Controls whether the weapon aims for the centre or the edge of its target's [collision volume](/gamedev-collisionvolumes). Clamped between `-1.0` - target the far border, and `1.0` - target the near border.

float [cylinderTargeting](#cylindertargeting)  default: 0.0 (1.0 for [\#Melee](#melee)) 

Controls whether the weapon range is calculated in a sphere or a cylinder. The height of the cylinder is determined by the value of this tag multiplied by the [range](#range). Clamped between `0.0` and `128.0`.

float [tolerance](#tolerance)  default: 3000.0 (+/- ~18 degrees) 

The amount (in [cau](/gamedev-unitsofmeasurement#angular)) to which the weapon's "real" aim can be off while the weapon will still be able to fire accurately at the target. For [turret](#turret) = false or [fixedLauncher](#fixedlauncher) = true weapons this determines in what arc the unit will fire.

float [fireTolerance](#firetolerance)  default: 32768.0 (+/- 180 degrees) New in version 99.0

Final check to prevent weapons from shooting sideways. If a weapon is about to fire but the difference between its old aim and requested aim is greater than this angle (in [cau](/gamedev-unitsofmeasurement#angular)) then it will not fire.

bool [allowNonBlockingAim](#allownonblockingaim)  default: false New in version 99.0

When enabled it makes [AimWeapon()](/animation-luacallins#weapons) script calls non-blocking (still the [fireTolerance](#firetolerance) tag might prevent the weapon firing). This is very useful for fast units that need to re-target often.

float [targetMoveError](#targetmoveerror)  default: 0.0 

The degree to which a weapon's aiming will fail to keep up with its target's movement. It adds a fraction of the target's speed (per second) as a random error to the targetting. So if the target moves 50 units per second and the targetmoveerror is 0.5 a random error of 25 will be added to the target position. If set very low or not set at all, a weapon will lead its target and almost always hit.

float [leadLimit](#leadlimit)  default: -1.0 

Limits the maximum distance a unit will lead a target. The default of `-1` allows an infinite distance.

float [leadBonus](#leadbonus)  default: 0.0 

Controls how experience boosts the weapon's target leading. Is multiplied with the unit's experience and added to the [leadLimit](#leadlimit).

float [predictBoost](#predictboost)  default: 0.0 (0.5 for [burnblow](#burnblow) = true weapons) 

Controls how well the weapon predicts unit speeds. Works in a similar way to [targetMoveError](#targetmoveerror) except that it is 1-dimensional. This tag spreads the shots in a line based on the direction of the target whereas [targetMoveError](#targetmoveerror) spreads the shots all around based on the movement.

float [heightMod](#heightmod)  default: 0.2 (0.8 for [\#Cannon](#cannon), 1.0 for [\#BeamLaser](#beamlaser) and [\#LightningCannon](#lightningcannon)) 

Changes the spherical weapon range into an ellipsoid. Values above `1.0` mean the weapon cannot target as high as it can far, values below `1.0` mean it can target higher than it can far. For example `0.5` would allow the weapon to target twice as high as far.

float [proximityPriority](#proximitypriority)  default: 1.0 

Acts as a multiplier for the distance to the target in the priority calculation. Note that negative values make weapons prefer distant targets.

float [accuracy](#accuracy)  default: 0.0 

How accurate the weapon is. Lower values are more accurate. Accuracy is relative to the distance to the target; for instance, if the target is very close, even a very high value will probably still hit. If a target is very far away, even a very low value will likely cause the weapon to miss.

float [movingAccuracy](#movingaccuracy)  default: accuracy 

A weapon's [accuracy](#accuracy) whilst the owning unit is moving.

float [sprayAngle](#sprayangle)  default: 0.0 

How wide the the angle of a burst from a [burst weapon](#bursts) can be. Very similar to [accuracy](#accuracy), except that this tag affects each projectile in a burst, whilst the former does not.

float [ownerExpAccWeight](#ownerexpaccweight)  default: 0.0 (See description) 

A multiplier to [accuracy](#accuracy) and [sprayAngle](#sprayangle) that reduces inaccuracy as a units experience increases. Defaults are as follows:

- `0.9` - [\#Cannon](#cannon), [\#Rifle](#rifle)
- `0.7` - [\#LaserCannon](#lasercannon), [\#BeamLaser](#beamlaser), [\#StarburstLauncher](#starburstlauncher)
- `0.5` - [\#MissileLauncher](#missilelauncher), [\#LightningCannon](#lightningcannon), [\#EmgCannon](#emgcannon), [\#DGun](#dgun)
- `0.2` - [\#Flame](#flame)

int [targetable](#targetable)  default: 0 New in version 92.0 Previously only for [\#StarburstLauncher](#starburstlauncher)

<a href="http://en.wikipedia.org/wiki/Mask_(computing)" class="external text" rel="nofollow">Bitmask</a> representing the types of weapon that can intercept this weapon. Each digit of binary that is set to one means that a weapon with the corresponding digit in its [interceptor](#interceptor) tag will intercept this weapon. Instant-hitting weapons such as [\#BeamLaser](#beamlaser), [\#LightningCannon](#lightningcannon) and [\#Rifle](#rifle) cannot be targeted.

int [interceptor](#interceptor)  default: 0 New in version 92.0 Previously only for [\#StarburstLauncher](#starburstlauncher)

<a href="http://en.wikipedia.org/wiki/Mask_(computing)" class="external text" rel="nofollow">Bitmask</a> representing the types of weapons that this weapon can intercept. Each digit of binary that is set to one means that a weapon with the corresponding digit in its [targetable](#targetable) tag will be intercepted by this weapon.

bool [interceptSolo](#interceptsolo)  default: true New in version 92.0

If `true` no other interceptors may target the same projectile.

float [coverage](#coverage)  default: 0.0 New in version 92.0 Previously only for [\#StarburstLauncher](#starburstlauncher)

The radius in [elmos](/gamedev-unitsofmeasurement) within which an [interceptor](#interceptor) weapon will fire on [targetable](#targetable) weapons.

#### Bouncing

bool [waterBounce](#waterbounce)  default: false 

Does the weapon bounce on water impacts?

bool [groundBounce](#groundbounce)  default: false 

Does the weapon bounce on ground impacts?

float [bounceSlip](#bounceslip)  default: 1.0 

The decimal-percentage amount of horizontal velocity a projectile keeps when it bounces.

float [bounceRebound](#bouncerebound)  default: 1.0 

The decimal-percentage amount of vertical velocity a projectile keeps when it bounces.

int [numBounce](#numbounce)  default: -1 

The number of times the weapon will bounce on impact before exploding. The default value of `-1` allows infinite bounces (at least until velocity reaches 0).

#### Area Of Effect, Impulse & Cratering

float [areaOfEffect](#areaofeffect)  default: 8.0 \* 0.5 lua: damageAreaOfEffect 

The *diameter* in [elmos](/gamedev-unitsofmeasurement) in which the weapons explosion will cause damage.

float [craterAreaOfEffect](#craterareaofeffect)  default: areaOfEffect \* 0.5 

The *radius* in [elmos](/gamedev-unitsofmeasurement) in which the weapons explosion will cause terrain cratering. Behaviour changed slightly in 98.0 as previously craters were 1.5x [craterAreaOfEffect](#craterareaofeffect) whilst decals were 1.0x, they are now both the same size.

float [edgeEffectiveness](#edgeeffectiveness)  default: 0.0 

Determines what percent of a weapon's maximum damage value will be applied to units within the weapon's [areaOfEffect](#areaofeffect). Falls off from the epicentre according to the formula `damageApplied = damage * [(areaOfEffect - distToUnit) / (areaOfEffect - (distToUnit * edgeEffectiveness))]`, a graph of the function for various values is available [here](/images/EdgeEffectiveness.png).

float [explosionSpeed](#explosionspeed)  default: See description 

The speed at which the weapon's explosion propagates from the epicentre. The default is calculated by this complex formula: `defExpSpeed = {8.0 + [max(30.0, default_damage / 20.0) * 2.5]} / {9.0f + [sqrt(max(30.0, default_damage / 20.0f)) * 0.7]} * 0.5`.

float [impulseFactor](#impulsefactor)  default: 1.0 

A multiplier to the impulse given to units within the explosion [areaOfEffect](#areaofeffect), which is otherwise equal to the damage dealt after [edgeEffectiveness](#edgeeffectiveness) is taken into account. For [\#Melee](#melee) weapons this is instead multiplied by the owning unit's mass (See [Gamedev:UnitDefs](/gamedev-unitdefs#tagmass)).

float [impulseBoost](#impulseboost)  default: 0.0 

A constant amount added to the weapon's impulse, regardless of distance from the epicentre or the damage potential of the explosion, prior to the application of [impulseFactor](#impulsefactor)

float [craterMult](#cratermult)  default: impulseFactor 

A multiplier to depth of terrain crater the weapon's explosion will create, which is otherwise based on the damage potential.

float [craterBoost](#craterboost)  default: 0.0 

A constant amount, added to the weapon's cratering depth before the application of [craterMult](#cratermult).

#### Bursts

int [burst](#burst)  default: 1 lua: salvoSize 

How many shots to fire per burst.

float [burstRate](#burstrate)  default: 0.1 lua: salvoDelay 

The time in seconds between shots in a burst. Note that [reloadTime](#reloadtime) starts to count down from the *first* round fired, not the last so if `reloadTime < burst * burstRate` the weapon will fire continuously.

int [projectiles](#projectiles)  default: 1 

How many projectiles released per shot (shotgun style). e.g. a weapon with [burst](#burst) = 5, [burstRate](#burstrate) = 0.5 and [projectiles](#projectiles) = 2 will shoot 5 lots of 2 for 10 projectiles total, with gaps of 0.5 seconds, before waiting for [reloadTime](#reloadtime). Best used in conjunction with [sprayAngle](#sprayangle) or changing the firing piece using [ShotX](/animation-luacallins#weapons) as otherwise they'll all be clumped in one shot.

#### Paralyzing

bool [paralyzer](#paralyzer)  default: false 

Is the weapon a paralyzer? If `true` the weapon only stuns enemy units and does not cause damage in the form of lost hit-points.

int [paralyzeTime](#paralyzetime)  default: 10 lua: damages.paralyzeDamageTime 

Determines the maximum length of time in seconds that the target will be paralyzed. The timer is restarted every time the target is hit by the weapon. Cannot be less than `0`.

#### Dynamic Damage

The following set of tags allow for a weapon's damage potential to vary with the distance to its target.

float [dynDamageExp](#dyndamageexp)  default: 0.0 

Exponent of the range-dependent damage formula, the default of `0.0` disables dynamic damage, `1.0` means linear scaling, `2.0` quadratic and so on.

float [dynDamageMin](#dyndamagemin)  default: 0.0 

The minimum floor value that range-dependent damage can drop to.

float [dynDamageRange](#dyndamagerange)  default: 0.0 

If set to non-zero values the weapon will use this value in the range-dependant damage formula instead of the actual [range](#range).

bool [dynDamageInverted](#dyndamageinverted)  default: false 

If `true` the damage curve is inverted i.e. the weapon does more damage at greater ranges as opposed to less.

#### Sounds

bool [soundTrigger](#soundtrigger)  default: false (true for [\#Melee](#melee), [\#Rifle](#rifle) and non-beamBurst [\#BeamLaser](#beamlaser)) 

Does the weapon play [soundStart](#soundstart) only once for each salvo (`true`) or for every round in a burst (`false`)?

string [soundStart](#soundstart)  default: "" 

The name of a **SoundItem** (See [Sounds.lua](/sounds.lua)) or filename of a sound to play when the weapon fires.

string [soundHitDry](#soundhitdry)  default: "" 

The name of a **SoundItem** (See [Sounds.lua](/sounds.lua)) or filename of a sound to play when the weapon collides with solid ground. Note that a [\#BeamLaser](#beamlaser) will play this sound every frame of its lifetime.

string [soundHitWet](#soundhitwet)  default: "" 

The name of a **SoundItem** (See [Sounds.lua](/sounds.lua)) or filename of a sound to play when the weapon collides with water. Note that a [\#BeamLaser](#beamlaser) will play this sound every frame of its lifetime.

#### Visuals

string [cegTag](#cegtag)  default: "" 

The name, without prefixes, of a [CEG](/ceg-main) to be emitted by the projectile each frame.

float [intensity](#intensity)  default: 0.9 (0.2 for [\#Cannon](#cannon)) 

Alpha transparency for non-3D model projectiles. Lower values are more opaque, but `0.0` will cause the projectile to disappear entirely.

string [model](#model)  default: "" 

The filename of a 3D model to use when rendering the projectile. Note that only the root piece of a projectile model is rendered. Currently only for [\#Cannon](#cannon), [\#LaserCannon](#lasercannon), [\#MissileLauncher](#missilelauncher), [\#StarburstLauncher](#starburstlauncher) and [\#TorpedoLauncher](#torpedolauncher).

bool [explosionScar](#explosionscar)  default: false 

Does the weapon's explosion leave a scar decal on the ground? For all types except [\#Melee](#melee) and [\#Rifle](#rifle).

bool [alwaysVisible](#alwaysvisible)  default: false 

If `true` the weapon is always rendered regardless of whether or not it is in LOS range of a player's units.

float\[3\] [rgbColor](#rgbcolor)  default: {1.0, 0.0, 0.0} (See Description) 

The primary colour for sprite rendering weapons. Additional defaults are as follows:

- [\#Cannon](#cannon) - `{1.0, 0.5, 0.0}`
- [\#EmgCannon](#emgcannon) - `{0.9, 0.9, 0.2}`

string [explosionGenerator](#explosiongenerator)  default: "" 

The name of a [CEG](/ceg-main), with `custom:` prefix, to spawn as the weapon's explosion. Does not currently work for [\#Melee](#melee) and [\#Rifle](#rifle).

string [bounceExplosionGenerator](#bounceexplosiongenerator)  default: "" 

For weapons which can use [groundBounce](#groundbounce) = true, the name of a [CEG](/ceg-main), with `custom:` prefix, to spawn when weapon the bounces.

string [texture1](#texture1)  default: "" 

The projectile texture for [\#AircraftBomb](#aircraftbomb), [\#Cannon](#cannon), [\#EmgCannon](#emgcannon), [\#Flame](#flame); beam texture for [\#LaserCannon](#lasercannon), [\#BeamLaser](#beamlaser), [\#LightningCannon](#lightningcannon); flare texture for [\#MissileLauncher](#missilelauncher), [\#StarburstLauncher](#starburstlauncher) and dome texture for the [\#Shield](#shield).

string [texture2](#texture2)  default: "" 

The end-of-beam texture for [\#LaserCannon](#lasercannon), [\#BeamLaser](#beamlaser) and [smoketrail](#smoketrail) texture for [\#MissileLauncher](#missilelauncher), [\#StarburstLauncher](#starburstlauncher).

string [texture3](#texture3)  default: "" 

Flare texture for [\#BeamLaser](#beamlaser), or muzzle texture if [largeBeamLaser](#largebeamlaser) = true. Also used as the flame texture for [\#StarburstLauncher](#starburstlauncher).

string [texture4](#texture4)  default: "" 

Flare texture for [\#BeamLaser](#beamlaser) with [largeBeamLaser](#largebeamlaser) = true.

### AircraftBomb

Drops a ballistic projectile at the same movement vector as the unit itself. Intended only for aircraft. Visually drawn as a billboarded sprite as used by the [\#Cannon](#cannon), but more commonly used with a 3D model.

There are no tags specific to this **WeaponType**

#### AircraftBomb Visuals

When not using a [model](#model), the AircraftBomb is the same as [\#Cannon Visuals](#cannon-visuals).

### BeamLaser

An instant-hit weapon which spawns a beam and does a portion of its total damage each frame. Cannot be [script emitted](/animation-luacallouts#effects) if it has a [beamTime](#beamtime) longer than one frame. Visually drawn as a <a href="http://en.wikipedia.org/wiki/Star_Trek" class="external text" rel="nofollow">Star Trek</a> Phaser-style laser weapon. The [largeBeamLaser](#largebeamlaser) tag allows changing the visual effect of the laser, such as using a tileable, scrolling texture without changing the behaviour.

float [minIntensity](#minintensity)  default: 0.0 

The minimum percentage the weapon's damage can fall-off to over its range. Setting to `1.0` will disable fall off entirely. Unrelated to the visual-only [intensity](#intensity) tag.

float [beamTime](#beamtime)  default: 1.0 lua: beamtime (all lowercase!) 

How long in seconds to fire the laser before waiting for [reloadTime](#reloadtime) to start. Damage is distributed over the duration of the [beamTime](#beamtime), and the weapon will aim to hit the target when the beam is in the middle of its [beamTime](#beamtime) (i.e. using prediction).

bool [beamBurst](#beamburst)  default: false lua: beamburst (all lowercase!) 

Makes the laser fire a burst of beams that are all aimed towards the target (instead of aimed with the piece). A [\#BeamLaser](#beamlaser) can do its full damage with every shot if [beamBurst](#beamburst) is enabled. Disables [beamTime](#beamtime) in favour of the [burst tags](#bursts).

bool [sweepFire](#sweepfire)  default: false 

Makes the laser continue firing while it aims for a new target, 'sweeping' across the terrain. Reimplemented in 95.0, still has no script interaction so use with care. Respects [reloadTime](#reloadtime) constraint but not much else.

#### BeamLaser Visuals

See also [thickness](#thickness) and [coreThickness](#corethickness).

int [beamTTL](#beamttl)  default: 0 

The time in frames for which the laser beam remains visible.

float [beamDecay](#beamdecay)  default: 1.0 

How fast the beam fades out. Each frame the [intensity](#intensity) is multiplied by this value.

float [laserFlareSize](#laserflaresize)  default: 15.0 

Determines the size of the firing flare.

bool [largeBeamLaser](#largebeamlaser)  default: false 

Changes the visual effect allowing tiling and scrolling of the texture and a pulsating firing flare.

float [tileLength](#tilelength)  default: 200.0 

Defines the length before the texture used is repeated (tiled). Only if [largeBeamLaser](#largebeamlaser) = true.

float [scrollSpeed](#scrollspeed)  default: 5.0 

Controls how fast the texture scrolls. Only if [largeBeamLaser](#largebeamlaser) = true.

float [pulseSpeed](#pulsespeed)  default: 1.0 

Controls how fast the pulsating effect at the start of the beam is. Only if [largeBeamLaser](#largebeamlaser) = true.

### Cannon

The default **WeaponType**. Fires a ballistic projectile, for the best result (without under/overshooting) the [weaponVelocity](#weaponvelocity) should be set so as to give an elevation of 45Â° when firing at the maximum [range](#range). Substituting the angle into the <a href="http://en.wikipedia.org/wiki/Trajectory#Range_and_height" class="external text" rel="nofollow">trajectory equation</a> and rearranging, we get:

    weaponVelocity = âˆš(range * g)

where `g` is the map gravity, usually around `120` for most Spring maps (You can use the [myGravity](#mygravity) tag if you want to be exact). Visually drawn as a billboarded sprite or 3D model.

int [highTrajectory](#hightrajectory)  default: 2 

Can this weapon be fired in a high trajectory (\>45Â° angle). Can be `0` - low trajectory only, `1` - high trajectory only or `2` - enables a high/low toggle button on the unit.

float [heightBoostFactor](#heightboostfactor)  default: -1.0 

Controls the boost given to [range](#range) by high terrain. Values \> `1.0` result in increased range, `0.0` means the cannon has fixed range regardless of height difference to target. Any value \< `0.0` (i.e. the default value) result in an automatically calculated value based on [range](#range) and theoretical maximum range.

#### Cannon Visuals

float [size](#size)  default: 2.0 + min(default_damage \* 0.0025, [areaOfEffect](#areaofeffect) \* 0.1) 

The drawing radius of the billboarded sprite. Also for [\#AircraftBomb Visuals](#aircraftbomb-visuals), [\#EmgCannon Visuals](#emgcannon-visuals) (default: `3.0`) and [\#Flame Visuals](#flame-visuals).

string [colorMap](#colormap)  default: "" 

A set of RGB colours to transition between over the projectile's lifetime. Can be given as a string of RGB digits or an image filename (See [CColorMap](/gamedev-glossary)). Also for [\#Flame Visuals](#flame-visuals).

float [sizeDecay](#sizedecay)  default: 0.0 

How quickly each particle of the Cannon shot decays in size.

float [alphaDecay](#alphadecay)  default: 1.0 

How quickly each particle of the Cannon shot fades out.

float [separation](#separation)  default: 0.0 

The distance between each particle of the Cannon shot.

bool [noGap](#nogap)  default: true 

Switch between the distance between particles being proportional to the size of the two particles (`true`) or proportional to the size of the first particle (`false`).

int [stages](#stages)  default: 5 

The number of particles in each Cannon shot.

### DGun

Fires a line-of-sight or ballistic projectile (selected via the [gravityAffected](#gravityaffected) tag). Visually represented by a fireball effect that cannot be customised, however it can be replaced by a 3D model. The name and visual effect are [OTAisms](/gamedev-glossary).

bool [gravityAffected](#gravityaffected)  default: false 

Does the fireball projectile lose height due to map gravity?

### EmgCannon

A line-of-sight weapon. Visually drawn as a billboarded sprite very similar to that of the [\#Cannon](#cannon), however not as customisable, or a 3D model. The name is another [OTAism](/gamedev-glossary).

There are no tags specific to this **WeaponType**.

### Flame

A line-of-sight weapon intended for use as a flamethrower or similar. Visually drawn as a stream of textured particles, the colour of which can be controlled very precisely using the [colorMap](#colormap) tag (see [CColorMap](/gamedev-glossary)).

#### Flame Visuals

See also [colorMap](#colormap).

float [sizeGrowth](#sizegrowth)  default: 0.5 

How much the draw radius of the flame projectile increases each frame.

float [flameGFXTime](#flamegfxtime)  default: 1.2 

Makes the flamethrower projectile stay alive as a visual-only effect (i.e. does not deal any damage) after it has reached maximum [range](#range). It is a percentage multiplier, e.g. `1.2` makes the projectile stay alive until it reaches 20% beyond [range](#range).

### LaserCannon

A particularly versatile line-of-sight weapon. Visually drawn like a <a href="http://en.wikipedia.org/wiki/Star_Wars" class="external text" rel="nofollow">Star Wars</a> Blaster-style laser weapon, or a 3D model.

#### LaserCannon Visuals

float [duration](#duration)  default: 0.05 

Multiplied against [weaponVelocity](#weaponvelocity) to determine the visual length of the beam projectile.

bool [hardStop](#hardstop)  default: false 

Does the laser projectile stop dead or fade out?

float [fallOffRate](#falloffrate)  default: 0.5 

Rate at which the beam fades out after it goes past its maximum [range](#range) if [hardStop](#hardstop) = false. A value of `0.0` is never fade out, `1.0` is finish fading out exactly at maximum [range](#range).

int [lodDistance](#loddistance)  default: 1000 

Minimum camera distance at which the default LaserCannon projectile is simplified to a single rectangle.

float [thickness](#thickness)  default: 2.0 

The thickness (width) of the LaserCannon projectile. Also for [\#BeamLaser Visuals](#beamlaser-visuals).

float [coreThickness](#corethickness)  default: 2.0 

The thickness (width) of the LaserCannon projectile's core. Also for [\#BeamLaser Visuals](#beamlaser-visuals).

float [rgbColor2](#rgbcolor2)  default: {1.0, 1.0, 1.0} 

The colour of the LaserCannon projectile's core. Also for [\#BeamLaser Visuals](#beamlaser-visuals).

### LightningCannon

An instant-hit weapon similar to the [\#BeamLaser](#beamlaser), but which does all its damage at once. Visually drawn like <a href="http://en.wikipedia.org/wiki/Star_Wars" class="external text" rel="nofollow">Star Wars</a> 'Force Lightning' or <a href="http://en.wikipedia.org/wiki/Command_%26_Conquer:_Red_Alert" class="external text" rel="nofollow">CnC: Red Alert</a> <a href="http://en.wikipedia.org/wiki/Tesla_coil" class="external text" rel="nofollow">Tesla Coil</a> weapons, the effect is not very customisable.

There are no tags specific to this **WeaponType**.

### Melee

A weapon that always damages the target, no ifs or buts; unsurprisingly intended for use as a close quarters <a href="http://en.wikipedia.org/wiki/Melee#Use_in_gaming" class="external text" rel="nofollow">'melee'</a> weapon. It does not fire a projectile and does not care about the line of fire.

There are no tags specific to this **WeaponType**.

### MissileLauncher

A versatile weapon which can optionally track targets and accelerate from a low initial velocity. It can also use [trajectoryHeight](#trajectoryheight) to have the shot arc similar to a ballistic projectile. Visually represented by a 3D model, with an optional [smokeTrail](#smoketrail).

float [startVelocity](#startvelocity)  default: 0.0 

The initial velocity of the weapon projectile. Also for [\#StarburstLauncher](#starburstlauncher) and [\#TorpedoLauncher](#torpedolauncher).

float [weaponAcceleration](#weaponacceleration)  default: 0.0 

The initial acceleration of the weapon projectile. Also for [\#StarburstLauncher](#starburstlauncher) and [\#TorpedoLauncher](#torpedolauncher). Note that if it is `0.0` the weapon can never increase from its [startVelocity](#startvelocity) and will not reach its maximum [weaponVelocity](#weaponvelocity). Since 99.0 `acceleration` is a synonym.

bool [tracks](#tracks)  default: false 

Can the weapon projectile track a moving target? Also for [\#StarburstLauncher](#starburstlauncher) and [\#TorpedoLauncher](#torpedolauncher).

float [turnRate](#turnrate)  default: 0.0 

The rate (in [cau](/gamedev-unitsofmeasurement#angular)) at which [tracks](#tracks) = true weapons turn towards their target. This is relative to a projectile's current velocity; a weapon with a higher velocity will need a higher value in order to be able to hit targets that turn suddenly.

float [flightTime](#flighttime)  default: 0.0 

The time in seconds before a missile projectile's fuel runs out; it ceases to obey [tracks](#tracks), loses velocity and falls to the ground. Also for [\#StarburstLauncher](#starburstlauncher). Large values may cause over/undershoot problems. As of 104.0 also applies to [\#EmgCannon](#emgcannon).

bool [fixedLauncher](#fixedlauncher)  default: false 

Makes the projectile spawn with the orientation of the shooting piece instead of their normal orientation. Also for [\#StarburstLauncher](#starburstlauncher) and [\#TorpedoLauncher](#torpedolauncher). Weapons may not correctly obey [avoidance settings](#collision-26-avoidance) when using this tag.

float [wobble](#wobble)  default: 0.0 

Adds a random vector to the direction of travel every 16 frames, multiplied by the value of the tag. The effect is reduced as the firing unit gains experience. As this missiles direction is changed, wobbling swarm of missiles will diverge.

float [dance](#dance)  default: 0.0 

Adds a random vector to the position of a missile projectile every 8 frames, multiplied by the value of the tag. As the projectile is not rotated, a dancing swarm of missiles will remain relatively coherent.

float [trajectoryHeight](#trajectoryheight)  default: 0.0 

Determines the height of the arc the missile will reach as it moves towards its target. A value of `0.0` will result in a flat trajectory, `1.0` will launch at 45°. Can be any value \>= `0.0`; extreme values may require the [tracks](#tracks) tag to be able to hit a target.

#### MissileLauncher Visuals

A note about the missile exhaust flare: the size of the flare is determined by the model radius. The emit position of the flare is at (0,0,-radius) so the model may need careful adjustment to get the flare looking right.

bool [smokeTrail](#smoketrail)  default: false 

Does the missile projectile emit a smoke trail as it travels? Also for [\#StarburstLauncher](#starburstlauncher).

### Rifle

An instant hit weapon which does all its damage at once. Visually represented by a hardcoded tracer, firing and hitting effects. Rarely used.

There are no tags specific to this **WeaponType**.

### Shield (WeaponType)

As the name suggests, not a weapon but a defensive shield. Can absorb or deflect ([repulsor](#repulsor) = true) projectiles. Individual weapons can be set to be intercepted or not by the shield using a <a href="http://en.wikipedia.org/wiki/Mask_(computing)" class="external text" rel="nofollow">bitmask</a> (see [Shield Interception Tag Use](/shield-interception-tag-use)). Visually represented as a translucent sphere, with control over colour and texture; by default the shield is invisible ([visible](#visible) = false).

See the [\#shield](#shield) sub-table section for other tags specific to this type.

### StarburstLauncher

Fires a projectile that rises vertically for [weaponTimer](#weapontimer) seconds, then turns towards its target. It can optionally track targets and accelerate from a low initial velocity. Before spring 92.0 was the only weapon that can be [targetable](#targetable) and act as an [interceptor](#interceptor). Visually represented by a 3D model, with an optional [smokeTrail](#smoketrail).

float [weaponTimer](#weapontimer)  default: 0.0 

The time in seconds during which the missile ascends vertically before turning towards its target.

### TorpedoLauncher

Fires a projectile that will behave ballistically out of water and like a missile in water. Usually used with [waterWeapon](#waterweapon) = true so they can fire underwater and target underwater units. An aircraft carrying a [\#TorpedoLauncher](#torpedolauncher) is a special case, the weapon turns into an [\#AircraftBomb](#aircraftbomb) projectile that will spawn a torpedo projectile on impact with water. Visually represented by a pointed black cuboid, usually the default object is replaced by a 3D model.

bool [subMissile](#submissile)  default: false 

Can the torpedo leave the water and target units and positions on land?

### NoWeapon

Not actually a **WeaponType**, but an individual weapon requested by Spring to 'fill in the gaps' if a unit claims to have a weapon which isn't actually defined. There needs to be only one of these weapons and it is created by setting [weaponName](#weaponname) = "NOWEAPON" rather than by the [weaponType](#weapontype) tag.

## Sub Tables

### damage

The damage subtable lists how many hit points the weapon depletes against each armor class (See [Armordefs.lua](/armordefs.lua)). It is a key-value map of armor class names and damage values. The special `default` entry is as the name suggests the default damage applied to any unit which does not belong to a listed armor class, or to shields.

For example a weapon which deals 100 damage by default but only 50 to units in the 'tank' armor class:

    damage = {
        default = 100,
        tank = 50,
    }

### shield

The preferred way to create a shield or repulser is to use the shield subtable rather than the old shield tags.

The following tags are repulser specific:

bool [repulser](#repulser)  default: false 

Does the shield <a href="http://dictionary.reference.com/browse/repulse?s=t" class="external text" rel="nofollow">repulse</a> (deflect) projectiles or absorb them? Btw its <a href="http://springrts.com/mantis/view.php?id=4206" class="external text" rel="nofollow">not repulsOr, but repulsEr</a>!

float [force](#force)  default: 0.0 

The force applied by the repulser to the weapon - higher values will deflect weapons away at higher velocities.

float [maxSpeed](#maxspeed)  default: 0.0 

The maximum speed the repulser will impart to deflected projectiles.

bool [visibleRepulse](#visiblerepulse)  default: false 

Is the (hard-coded) repulse effect rendered or not?

The following tags are general behaviour for all shields:

int [interceptType](#intercepttype)  default: 0 

<a href="http://en.wikipedia.org/wiki/Mask_(computing)" class="external text" rel="nofollow">Bitmask</a> representing the types of weapons that this shield can intercept. Each digit of binary that is set to one means that a weapon with the corresponding digit in its [interceptedByShieldType](#interceptedbyshieldtype) will be intercepted by this shield (See [Shield Interception Tag Use](/shield-interception-tag-use)).

string [armorType](#armortype)  default: "" 

Specifies the armorclass of the shield; you can input either an [armorclass](/armordefs.lua) name OR a unitdef [name](/gamedev-unitdefs#name) to share that unit's armorclass.

bool [smart](#smart)  default: false 

Determines whether or not projectiles fired by allied units can pass through the shield (`true`) or are intercepted as enemy weapons are (`false`).

bool [exterior](#exterior)  default: false 

Determines whether or not projectiles fired within the shield's radius can pass through the shield (`true`) or are intercepted (`false`).

float [energyUse](#energyuse)  default: 0.0 

The amount of the energy resource consumed by the shield to absorb or repulse weapons, continually drained by a repulser as long as the projectile is in range.

float [radius](#radius)  default: 0.0 

The radius of the circular area the shield covers.

float [power](#power)  default: 0.0 

Essentially the maximum allowed hit-points of the shield - reduced by the `damage` of a weapon upon impact.

float [startingPower](#startingpower)  default: 0.0 

How many hit-points the shield starts with - otherwise the shield must regenerate from `0` until it reaches maximum [power](#power).

float [powerRegen](#powerregen)  default: 0.0 

How many hit-points the shield regenerates each second.

float [powerRegenEnergy](#powerregenenergy)  default: 0.0 

How much energy resource is consumed to regenerate each hit-point.

float [rechargeDelay](#rechargedelay)  default: 0.0 

The delay in seconds before a shield begins to regenerate after it is hit.

The following tags control the visual aspects of the shield:

bool [visible](#visible)  default: false 

Is the shield visible or not?

int [visibleHitFrames](#visiblehitframes)  default: 0 

The number of frames a shield becomes visible for when hit.

float\[4\] [badColor](#badcolor)  default: {1.0, 0.5, 0.5, 1.0} (Red) 

The RGBA colour the shield transitions to as its hit-points are reduced towards `0`.

float\[4\] [goodColor](#goodcolor)  default: {0.5, 0.5, 1.0, 1.0} (Blue) 

The RGBA colour the shield transitions to as its hit-points are regenerated towards its maximum [power](#power).

float [alpha](#alpha)  default: 0.2 

The alpha transparency of the shield whilst it is visible.

### customParams

The `customParams` subtable of a WeaponDef allows the game designer to give their weapons custom attributes, which can then be accessed via lua gadgets and widgets. It is a map (key-value pair indexed table) of strings. When accessing these attributes in lua the strings can be turned back into numbers, bools or even tables. This gives great control to game designers to essentially implement their own behaviour tags.

There are no additional tags specific to this subtable

## Examples

Some games may have most WeaponDefs integrated into their [UnitDefs](/gamedev-unitdefs#examples).

S44 and MC:L implement an <a href="http://en.wikipedia.org/wiki/Object-oriented_programming" class="external text" rel="nofollow">OOP</a> paradigm with <a href="http://en.wikipedia.org/wiki/Inheritance_(computer_science)" class="external text" rel="nofollow">inheritance</a>.

<a href="http://imolarpg.dyndns.org/trac/balatest/browser/trunk/weapons/" class="external text" rel="nofollow">'Balanced Annihilation' WeaponDefs</a>

<a href="http://code.google.com/p/conflictterra/source/browse/#svn/games/CT/weapons/" class="external text" rel="nofollow">'Conflict Terra' WeaponDefs</a>

<a href="https://github.com/EvolutionRTS/Evolution-RTS/tree/master/weapons/" class="external text" rel="nofollow">'Evolution RTS' WeaponDefs</a>

<a href="https://github.com/imperialwinter/swiw.sdd/tree/master/weapons/" class="external text" rel="nofollow">'Imperial Winter' WeaponDefs</a>

<a href="http://code.google.com/p/journeywar/source/browse/#svn/trunk/weapons/" class="external text" rel="nofollow">'Journeywar' WeaponDefs</a>

<a href="http://sourceforge.net/p/mwspring/code/HEAD/tree/weapons/" class="external text" rel="nofollow">'MechCommander: Legacy' WeaponDefs</a>

<a href="https://github.com/spring1944/spring1944/tree/master/weapons/" class="external text" rel="nofollow">'Spring: 1944' WeaponDefs</a>

<a href="http://code.google.com/p/springtutorialgame/source/browse/#svn/trunk/SpringTutorialGame.sdd/weapons/" class="external text" rel="nofollow">'Spring Tutorial Game' WeaponDefs</a>

<a href="http://code.google.com/p/xta-springrts/source/browse/#svn/trunk/weapons/" class="external text" rel="nofollow">'XTA' WeaponDefs</a>

<a href="https://github.com/ZeroK-RTS/Zero-K/tree/master/weapons/" class="external text" rel="nofollow">'ZeroK' WeaponDefs</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Gamedev:WeaponDefs](https://springrts.com/wiki/Gamedev:WeaponDefs).*
