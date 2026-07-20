---
outdated: true
title: "EngineChangelogForContentDevs"
source_url: "https://springrts.com/wiki/EngineChangelogForContentDevs"
categories:
  - "Game_Dev"
  - "Releases"
---
# EngineChangelogForContentDevs

<div class="mw-parser-output">

## About this page

This page holds informations about engine changes that are relevant to game/map makers. The idea is to replace the "make your game ready for next release"-threads with a wiki page because unlike a forumpost, everybody can edit this. So if you find a thread (or mantis post etc) that explains a fix, please add it here. <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=27777" class="external text" rel="nofollow">Back-link to forum. Use for bumping.</a>

## Spring 98.0

slight changes:

- fix definitions of UnitDef::Is{Strafing,Hovering}AirUnit <a href="https://github.com/spring/spring/commit/b95764cd25f1ad6e3972f5fb0d48cd2353a1d23f" class="external text" rel="nofollow">b95764cd</a>
- experience has slightly different effects: <a href="https://github.com/spring/spring/commit/0f59e103731bb1fb7133cd0ea0693affa0372a4a" class="external text" rel="nofollow">0f59e103</a> , <a href="http://springrts.com/mantis/view.php?id=4446" class="external free" rel="nofollow">http://springrts.com/mantis/view.php?id=4446</a>
- unsynced luarules now recieves all synced luarules callins (could break very lazily coded gadgets, also if game includes gadgethandler then it should be updated to match, or unsynced luarules chatactions will be executed twice)
- each usage of SYNCED now makes a copy of the whole table
- types of variables returned from callins are now checked, e.g. MouseMove must return a bool
- TTL for LightningCannon now needs to be set in weapondefs, as 'beamttl' (see <a href="https://github.com/spring/spring/commit/dd7d1f79c3a9b579f874c210eb4c2a8ae7b72a16" class="external free" rel="nofollow">https://github.com/spring/spring/commit/dd7d1f79c3a9b579f874c210eb4c2a8ae7b72a16</a>)
- Spring.GetUnitCommands/Spring.UnitCommandQueue won't work if they are called to often without a limit on the size of the table they return. Use e.g. Spring.GetUnitCommands(unitID, maxQueueSize)

## Spring 96.0

## Spring 95.0

NOT COMPLETE: interessting changes from 25 Aug backwards to Aug 09, 2013

- new folder structure: <a href="http://springrts.com/phpbb/viewtopic.php?f=12&amp;t=30044" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=12&amp;t=30044</a>

<!-- -->

- the folder "mods" isn't supported any more: <a href="https://github.com/spring/spring/commit/7d3830a01c7e81377c1fd3369658d95b82979612" class="external text" rel="nofollow">7d3830a0</a>

**Lua:**

- change to weapon indexing in lua gadgets: <a href="https://github.com/spring/spring/commit/ba9721b4e4a296f35efd9838a36c94ab7a9f476e" class="external text" rel="nofollow">ba9721b4</a> (likely to cause index out of bounds errors in any gadgets using weapon related API calls) ALL weapon API functions are 1-based now!

<!-- -->

- .moveData has been removed, use .moveDef instead <a href="https://github.com/spring/spring/commit/4e58b8b0f7af04065878d34e5e17523246739b0c" class="external text" rel="nofollow">4e58b8b0</a> (detecting what type of unit a unit is, isCommander etc)

<!-- -->

- Spring.GetUnitNearestEnemy doesn't return neutral units anymore

<!-- -->

- <a href="https://github.com/spring/spring/commit/90c897393de9dbb6ca9b5678c3efef201ee1231c" class="external text" rel="nofollow">90c89739</a>
- add third return-value to Spring.GetUnitBlocking

*new functions:*

- <a href="https://github.com/spring/spring/commit/90c897393de9dbb6ca9b5678c3efef201ee1231c" class="external text" rel="nofollow">90c89739</a>
  - add Spring.SetFeatureBlocking
  - add Spring.GetFeatureBlockin
  - add Spring.SetPieceProjectileParams
- add SetProjectileAlwaysVisible <a href="https://github.com/spring/spring/commit/9435ac706c4955e7d7063600fa861d15b0c2bf40" class="external text" rel="nofollow">9435ac70</a>
- add callins FeatureDamaged and FeaturePreDamaged <a href="https://github.com/spring/spring/commit/85779b57d7b45010b3f6e975ce65ca601e36747d" class="external text" rel="nofollow">85779b57</a>
- add Spring.GetRadarErrorParams <a href="https://github.com/spring/spring/commit/475828d8516e048680c7467cc00085f32867ee0e" class="external text" rel="nofollow">475828d8</a>
- add Spring.SetRadarErrorParams see above
- add Spring.SetUnitPosErrorParams <a href="https://github.com/spring/spring/commit/0f4ed485d7eeb56b54a1953edfc21512a2b8cb91" class="external text" rel="nofollow">0f4ed485</a>
- add Spring.GetUnitPosErrorParams see above
- add Spring.GetUnitWeaponCanFireunitID, weaponNum <a href="https://github.com/spring/spring/commit/66117e4c4d57b511b8818a7f1ad3e2f5d613ede6" class="external text" rel="nofollow">66117e4c</a>
- add LuaSyncedCtrl: add callouts SetFeatureVelocity and SetFeaturePhysics <a href="https://github.com/spring/spring/commit/765994b40633798d88011ddd00cf3f4a8c5a4012" class="external text" rel="nofollow">765994b4</a>

<!-- -->

- add new Game.constants: Game.gameName, Game.gameVersion, ... <a href="https://github.com/spring/spring/commit/a813447139a01deede046723db1194c929f8704c" class="external text" rel="nofollow">a8134471</a> See [Lua_ConstGame](/lua-constgame)

**Misc:**

armordefs.lua MUST be updated. The fix is to simple the converter loop at end of file: [Armordefs.lua#Example](/armordefs.lua#example)

- load only image formats which work on all platforms, current supported image formats are:

<!-- -->

    PNG, JPG, TGA, DDS, BMP  (note: no more .jp2)

- make Gaia the default feature team, not -1/0

**Sim**

- sweepfiring beamlaser works (someone test?) <a href="https://github.com/spring/spring/commit/b0295a72c42a828f4dcf9e4672dc1798c6a6abf2" class="external text" rel="nofollow">b0295a72</a>

**Someone check if relevant:** <a href="https://github.com/spring/spring/commit/66a2b96f71ff7f1e8838038f0aeb0d5f45990c22" class="external text" rel="nofollow">66a2b96f</a> something with startmoving/stopmoving?

<a href="https://github.com/spring/spring/commit/e4dc43a3f1d622168a5634030842d6e609a5b30d" class="external text" rel="nofollow">e4dc43a3</a> something startposition bla

## Spring 94.0 (or 93, or 92)

- gadget:UnitPreDamaged has a new projectileId argument inserted in the middle, so attackerID, attackerDefID, attackerTeam shifted position
- Bomb weapons need a range, or they won't be fired
- Spring.AddUnitDamage requires a weaponDefID (may be a bug, may be corrected for 95) <a href="http://springrts.com/mantis/view.php?id=3841" class="external free" rel="nofollow">http://springrts.com/mantis/view.php?id=3841</a>
- QueryNanoPiece is called much less often

## Spring 86.0, 87.0

- <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=27749" class="external text" rel="nofollow">movedefs: depthmod is now a subtable.</a>
- toairweapon tag has been removed, use onlytargetcategory instead

- <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=27773&amp;start=45" class="external text" rel="nofollow">ERROR_TYPE in WeaponDefs __index</a> when looping over WeaponDefs - causes several fails.

<a href="http://springrts.com/mantis/view.php?id=3019" class="external text" rel="nofollow">mantis 3019</a>\
fixed in next release.

- builders stop reclaiming sometimes.

fixed for next engine release: <a href="http://springrts.com/mantis/view.php?id=3012" class="external free" rel="nofollow">http://springrts.com/mantis/view.php?id=3012</a>\
want it to work right now: <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=27816" class="external text" rel="nofollow">use a gadget as workaround</a>

## Spring 0.83, 84.0, 85.0

- <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=26358" class="external text" rel="nofollow">Make your game ready for the next release!</a>
- <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=27057" class="external text" rel="nofollow">instant infolog.txt</a>

<!-- -->

- <a href="http://springrts.com/mantis/view.php?id=2877" class="external text" rel="nofollow">Changing of unit's max velocity is no longer possible</a>
- <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=23992" class="external text" rel="nofollow">Announcement: game end condition moved to Lua</a>
- <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=26993" class="external text" rel="nofollow">Announcement: gui_buildspacing &amp; minimap_startbox removed (0.83)</a>
- <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=26302" class="external text" rel="nofollow">To Game-Devs: The "n" entry in array-like tables was removed</a>
- AttachUnit obeys cantbetransported <a href="http://springrts.com/phpbb/viewtopic.php?f=23&amp;t=30468" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=23&amp;t=30468</a>

## Spring 0.82

- <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=21883" class="external text" rel="nofollow">Engine will stop spawning start units and resources.</a> Now needs a Lua gadget.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [EngineChangelogForContentDevs](https://springrts.com/wiki/EngineChangelogForContentDevs).*
