---
title: "User:Krudat"
source_url: "https://springrts.com/wiki/User:Krudat"
---
# User:Krudat

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

## Hmm, new scripting language, eh?

A lot of what's given here is ... "structurally sensitive"? Specifically, I get the impression Zaphod would like to delay some feature additions until a new scripting language arrives (and <a href="https://springrts.com/phpbb/viewtopic.php?p=65295&amp;highlight=executes#65295" class="external text" rel="nofollow">Argh might agree, I think</a>). More generally, what's the easy fix or implementation might not be the best structurally (even before the level of finding some weird replacement for COB).

Implementing a change is easy. Doing it *right*, particularly in the eyes of the admins, is another matter.

## Meben's Code Parade

You know when they say "Use the Source, Luke"? It's a suprising amount of work - and that's for someone who can almost read C++. Many times, when someone adds a bug in <a href="https://springrts.com/mantis" class="external text" rel="nofollow">Mantis</a> or posts in the forums, I read the code closely and try and find the relevant bits. I figured since I write it down, I might as well write it down where I can find it again, and where someone else might find it useful.

Rules: don't touch the lobby client, no snide commentary. Just code references.

(WebSVN doesn't give per-line anchors. So much for code references.)

=== \#00048: Ferromancer: Unit Behavior: Construction units on patrol claim resources when not needed. === (<a href="https://springrts.com/mantis/view.php?id=48" class="external text" rel="nofollow">Mantis</a>)

Add a check around <a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Sim/Units/CommandAI/BuilderCAI.cpp?op=blame&amp;rev=963&amp;sc=0" class="external text" rel="nofollow">CBuilderCAI</a>:452.

=== \#00050: Ferromancer: Ground construction units attempt to repair air units while in flight === (<a href="https://springrts.com/mantis/view.php?id=50" class="external text" rel="nofollow">Mantis</a>)

I *think* `CMD_PATROL` is a point rather than a path. (And why does it push a copy of itself?) (And it's been that way since ancient SF CVS.) (Oh, and deque semantics are a pain - the docs don't define them very well. I *hope* `commandQue.push_front(co) means commandQue[0] == co` ...) \[TODO Whoever made templated network messages can start on commands now. :P\]

I'd still need to figure out how to tell if the current repair job is the fault of a patrol command, and how to abort it.

The policy question is how and when the con-bot decides to give up on the air unit and do something else. (How far is 'too far' from the patrol position?)

=== \#00052: Bug Hunter: Units acknoledge enemy "bugger of" === (<a href="https://springrts.com/mantis/view.php?id=52" class="external text" rel="nofollow">Mantis</a>)

Perhaps Bug Hunter picked the phrase "bugger off" because that's what it's called in code. You can even do it from COB.

If you *couldn't*, I'd just get <a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Game/GameHelper.cpp?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow">helper-&gt;BuggerOff</a> to check team or ally relationships (or whatever it is). But for all I know, units only clear factory buildpads because the factory script asks them to.

---

ColCheckH and ColCheckV in <a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Sim/Units/MoveTypes/groundmovetype.cpp?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow">groundmovetype.cpp</a> tell fellow ground-pounders to get out of the way on close collision. I'd guess this is the code that prevents anyone ever making a nice neat line of units. =) Including, in this case, the enemy. Unfortunately, the rest of the file, at a glance, looks like Spring's ever-fragile ground pather.

=== \#00066: Argh: S3O Explosion Behavior === (<a href="https://springrts.com/mantis/view.php?id=66" class="external text" rel="nofollow">Mantis</a>)

It shouldn't be *impossible* to let s3o *pieces* explode without `SHATTER`. Making s3os shatterable would take a little longer since we've got arrays of verticies rather than 3do-style faces.

However, in Feb. 2006, someone said something about writing a model-type abstraction that would include Ogre meshes, whatever those are. Again in March, someone's tinkering with unit textures.

=== \#00068: Argh: Behavior of FALL scripting event === (<a href="https://springrts.com/mantis/view.php?id=68" class="external text" rel="nofollow">Mantis</a>)

Unfortunately, I don't have the source for the AA Vulcan, which features ejecting cases.

There's an ancient note that all such fragments must `FALL` otherwise they'll never go away.

I'd have to fire up OTA to get the correct behaviour.

(PieceProjectiles do exactly 50 damage.)

=== \#00105: FizWizz: FPS aiming === (<a href="https://springrts.com/mantis/view.php?id=105" class="external text" rel="nofollow">Mantis</a>)

Here's one for the compiler trivia books. The (original) GetHAndPFromVector (in myMath.h - WebSVN doesn't like links across file moves) crashed in one quarter (under Linux only!). However, I bet the call to COBFN_AimPrimary in <a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Sim/Weapons/Weapon.cpp?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow">CWeapon</a>::Update was working fine, despite using similar code, and probably wanting the same results.

Commenting out the code to ask the FPU to choke immediately probably made it exhibit something like the current behaviour, I can't remember.

(Called at the top of Game/Game.cpp::Update.)

GetHAndPFromVector is only used in one place, for the direct-control stuff.

=== \#00116: NOiZE: Cloakcosts are doubled === (<a href="https://springrts.com/mantis/view.php?id=116" class="external text" rel="nofollow">Mantis</a>)

Metal generation, energy use and idle regeneration are handled in <a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Sim/Units/Unit.cpp?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow">CUnit</a>::SlowUpdate().

Metal and energy gain and a couple of other per-unit-time values are divided in half in there, but the cloak energy cost isn't.

You can even see the 'half-cost' of things when you, say, turn a metalmaker, or a cloak, on or off.

=== \#00118: Argh: Feature Request: "Free Interceptor" behavior. === (<a href="https://springrts.com/mantis/view.php?id=118" class="external text" rel="nofollow">Mantis</a>)

#### How they work now

The <a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Sim/Weapons/Weapon.cpp?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow">base Weapon inherit</a> like it's willing to point any weapon at an incoming projectile (`::CheckIntercept`, called by `CWeapon::Update`). There's even a couple of interceptor-specific checks in it. However, *only* Starburst-type indirect-fire missiles have the right callbacks for being both interceptable and interceptors.

<a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Sim/Weapons/StarburstLauncher.cpp?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow"><code>CStarburstLauncher::Fire</code></a> tells <a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Sim/Misc/InterceptHandler.cpp?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow">CInterceptHandler</a> about the new projectile, if it's `weaponDef->targetable`.

Only <a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Sim/Projectiles/StarburstProjectile.cpp?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow">CStarburstProjectile</a> takes an interceptTarget. In its ::Update, it checks if the nuke is 'close'. If so, it tells first the nuke then itself that they've hit something, which makes both of them blow up (<a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Game/GameHelper.cpp?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow">helper-&gt;Explosion</a>).

(It looks like the reason why the nuke's airburst doesn't do significant damage is because, on Small Divide, they travel higher than aircraft.)

#### Unpinning the behaviour

I haven't tried it, but it would be relatively easy to have an anti-nuke, say, Vulcan. (... It's the only salvoing unit who's projectile class I've looked up.)

- (Might need to change CWeapon::Update()'s call to CheckIntercept() to wait until the salvo ends, so the entire salvo points at the nuke. I haven't tested this.)
- Add the interceptTarget argument to CCannon and parameter to CExplosiveProjectile.
- Copy the range-to-nuke check to CExplosiveProjectile::Update() from StarburstProjectile.

This is nice and easy 'cause each interceptor round only needs to check one projectile (probably every frame). This presumes that more nukes than interceptors never happens - if not, then you'll get to see the volley of Vulcan fire take out one nuke, but probably mysteriously fail to destroy the other.

If I want to see a hail of laser fire from the Smasher completely defuse a volley from the Raven, I'd have a problem. Either:

- I do it the simple way and have every interceptor check every interceptable. I'd guess it'd be bad for performance. (Mustn't forget to check the ally-teams of the projectiles. ... Wait, they don't have any. :S)

<!-- -->

- Someone who understands how the QuadField works extends it (re-fac-tor!) to record interceptable projectiles. Sadly, it mentions SQUARE_SIZE, which is my current cue to find some other aspect of Spring to read.

### \#000119: Argh: Feature Request: "Free Repulsor".

Note: The <a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Sim/Projectiles/BeamLaserProjectile.cpp?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow">beam laser projectile</a> does the drawing; you'll find the damage ("explosion"!) is done when the weapon `::Fire()`s.

If I pin down the math for a ray reflection, it'll get used two different ways in two places; once in the reflector to give laser bolts a new heading, and again in BeamLaser to bounce off repulsors (with an extra projectile per reflection) 'till something gets hit.

=== \#000123: Decimator: Laser weapons will not even attempt to shoot through trees === (<a href="https://springrts.com/mantis/view.php?id=123" class="external text" rel="nofollow">Mantis</a>)

... and have done so since SF CVS day dot (<a href="http://cvs.sourceforge.net/viewcvs.py/springrts/taspring/rts/BeamLaser.cpp?rev=1.1&amp;view=markup" class="external text" rel="nofollow">BeamLaser.cpp</a>).

One, two, skip a few...

|             |            |        |                    |                         |
|-------------|------------|--------|--------------------|-------------------------|
| Unit        | Target DT? | Trees? | Weapon's class     | Call responsible        |
| Annihilator |            |        | CBeamLaser         | helper-\>LineFeatureCol |
| Ambusher    | X          | X      | CCannon            |                         |
| Rocko       | X          | X      | CMissileLauncher   |                         |
| Raven       | X          | X      |                    |                         |
| HLT         |            |        | CLaserCannon       | helper-\>LineFeatureCol |
| Defender    | X          | X      | CMissileLauncher   |                         |
| Merl        | X          | X      | CStarburstLauncher |                         |
| Zeus        |            |        | CLightningCannon   | helper-\>LineFeatureCol |
| Maverick    | ?          | X      |                    |                         |

I think there's an MTR somewhere here, but I'm not entirely sure what it is.

### Unit sounds and position

Something only occasionally noted is that individual unit-selected sounds play where the unit is, so if you're zoomed out or off-screen, you can't hear them.

- <a href="https://springrts.com/phpbb/viewtopic.php?t=1248" class="external text" rel="nofollow">Sound</a>
- <a href="https://springrts.com/phpbb/viewtopic.php?p=15984#15984" class="external text" rel="nofollow">Making sounds audible again</a>
- <a href="https://springrts.com/phpbb/viewtopic.php?t=2239" class="external text" rel="nofollow">Soundvolume is too low when zoomed out</a>
- <a href="https://springrts.com/phpbb/viewtopic.php?t=4242&amp;highlight=sound" class="external text" rel="nofollow">volume vs distance</a>

([MTR](/monthly-topic-rotation)! \*ahem\* Maybe not.)

**And some random sound-related posts**

- <a href="https://springrts.com/phpbb/viewtopic.php?t=2522" class="external text" rel="nofollow">Using play-sound in Spring</a>, and how StartMoving() is called "exactly a bazillion times per second in first person view", like AimPrimary() apparently is. I'm not sure if I could try to fix it, and I *am* sure I'd add another strand of spaghetti to Spring on my first few attempts.
- <a href="https://springrts.com/phpbb/viewtopic.php?t=2667" class="external text" rel="nofollow">please make the berthasound more quiet!</a>. For the record, the DGun's sound has a specific volume nerf (<a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Sim/Units/UnitLoader.cpp?op=blame&amp;rev=0&amp;sc=0" class="external text" rel="nofollow">CUnitLoader</a>::LoadWeapon, near the bottom). It also suggests modder-settable sound-specific volume nerfs, or something.
- <a href="https://springrts.com/phpbb/viewtopic.php?t=3728" class="external text" rel="nofollow">Sound effects still played if you have no LoS</a>

Hmm. I could almost sketch out a design for a new "<a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/System/Sound.h?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow">ISound</a>" with these requirements...

- SetSoundVolume(id, volume) so users can quiet down their artillery
- PlayUnitNotificationSound(id, unit, volume) so we can toggle between sound at unit and sound at player
- Some sort of IVolumeCalculator or something, so you can have
  - the cameras setting different sound models: a near-2D sound system, immune to zooming out, for overhead view and an at-camera all-3D sound system for FPS-type views, see the above threads.
  - Not to mention the different functions and fudge factors for *how* the volumes fall off with location.
- Perhaps add a sound priority (int) to all the PlaySounds so the LLTs don't replace the Vulcans' sounds, or possibly vice versa. Currently, the OpenAL system has a ring-buffer of 16 simultaneous sounds, maybe. I haven't looked at that too closely...
- A mute(bool) method.

=== Zero Damage === (Mantis: <a href="https://springrts.com/mantis/view.php?id=140" class="external text" rel="nofollow">1</a>, <a href="https://springrts.com/mantis/view.php?id=147" class="external text" rel="nofollow">2</a>)

(Damage and health are floats! For the sake of players, please assume Spring will only ever show whole-number amounts... In any case, this means you only need ridiculous amounts of smallarms fire to significantly damage a tank.)

Issues (so far...):

**Explosion graphics**:

<a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Rendering/ExplosionGraphics.cpp?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow">CStdExplosionGraphics</a> inverse square root, for smoke particle velocity default damage: `damages[0]`. Should 0 *default* damage produce a Peewee-sized smokepuff, or nothing at all?

**Unsupervised target choice**:

<a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Game/GameHelper.cpp?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow"><code>CGameHelper</code></a>`::GenerateTargets` the damage that would be to the particular candidate unit, for ... rating targets, somehow. Applicable damage type: `damages[(*potential_target)->armorType]`. The function is only called by <a href="http://svn.berlios.de/wsvn/taspring-linux/trunk/rts/Sim/Weapons/Weapon.cpp?op=file&amp;rev=0&amp;sc=0" class="external text" rel="nofollow">CWeapon</a>::SlowUpdate(), probably to look for a nearby enemy to attack. The target rating isn't used.

**Knockback and deformation**:

`GameHelper->Explosion` impulse and crater-making default damage: `damages[0]`. Currently: *Default* damage is used to calculate knockback, and impulsefactor is a multiplier; a weapon that does no damage can never knock things around, and can never produce craters.

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Krudat). Original page: [User:Krudat](https://springrts.com/wiki/User:Krudat).*
