---
title: "Lua:Callins"
source_url: "https://springrts.com/wiki/Lua:Callins"
categories:
  - "Pages_using_duplicate_arguments_in_template_calls"
  - "Lua"
---
# Lua:Callins

<div id="lua-callins" class="section mw-parser-output">

## Lua Callins

This page is future looking to unified widget/gadget (aka "addon") handler, which may yet be some way off, c.f. the <a href="https://github.com/spring/spring/blob/ebb704e008f6ea645947d07be1cfcc272af0428f/doc/changelog.txt#L71" class="external text" rel="nofollow">changelog</a>.

Related Sourcecode : <a href="https://github.com/spring/spring/blob/d9b3927a528a876b9ab4042771e82b050267572a/rts/Lua/LuaHandle.cpp" class="external text" rel="nofollow">https://github.com/spring/spring/rts/Lua/LuaHandle.cpp</a>

For now, to use these addons in a widget, replace addon with widget and, for a gadget, replace addon with gadget. For example,

        function widget:UnitCreated(unitID, unitDefID, unitTeam, builderID)
            ...  
        end

Some functions may differ between (synced) gadget and widgets; those are in the [\#Synced\_-\_Unsynced_Shared](#synced-unsynced-shared) section. Essentially the reason is that all information should be available to synced (game logic controlling) gadgets, but restricted to unsynced gadget/widget (e.g. information about an enemy unit only detected via radar and not yet in LOS). In such cases the full (synced) param list is documented.

**Attention:** some callins will only work on the unsynced portion of the gadget. Due to the type-unsafe nature of lua parsing, those callins not firing up might be hard to trace. This document will be continuously updated to properly alert about those situations.

### Common

addon.[Initialize](#initialize)()

Called when the addon is (re)loaded.

addon.[Shutdown](#shutdown)()

Called when the addon or the game is shutdown.

### Unsynced Only

addon.[DefaultCommand](#defaultcommand)(type, id)\
return: number cmdID

Used to set the default command when a unit is selected. First parameter is the type of the object pointed at (either "unit or "feature") and the second is its unitID or featureID respectively.

addon.[CommandNotify](#commandnotify)(cmdID, cmdParams, cmdOptions)\
return: bool removeCmd

Called when a command is issued. Returning true deletes the command and does not send it through the network.

addon.[CommandsChanged](#commandschanged)(None)\
return: ?

Called when the command descriptions changed, e.g. when selecting or deselecting a unit.

addon.[WorldTooltip](#worldtooltip)(ttType, data1, data2, data3)\
return: string newTooltip

The parameters can be "unit", unitID; "feature", featureID; "ground", posX, posY, posZ or "selection".

addon.[UnsyncedHeightMapUpdate](#unsyncedheightmapupdate)(???)

Called when the unsynced copy of the height-map is altered.

addon.[GameProgress](#gameprogress)(serverFrameNum)

Called every 60 frames, calculating delta between GameFrame and GameProgress. Can give an ETA about catching up with simulation for mid-game join players.

addon.[GameSetup](#gamesetup)(state, ready, playerStates)\
return: bool success, bool newReady

???

addon.[SunChanged](#sunchanged)(???)

???

addon.[AddConsoleLine](#addconsoleline)(msg, priority)

Called when text is entered into the console (e.g. Spring.Echo).

addon.[RecvSkirmishAIMessage](#recvskirmishaimessage)(aiTeam, dataStr)\
return: ???

???

addon.[RecvFromSynced](#recvfromsynced)(...)

Receives data sent via [SendToUnsynced](/lua-system#synced) callout.

addon.[Save](#save)(zip)

Called when a chat command '/save' or '/savegame' is received. The single argument is a userdatum representing the savegame zip file. See [Lua_SaveLoad](/lua-saveload#save-28-zip-29-3e-nil).

addon.[LoadProgress](#loadprogress)(message, replaceLastLine)

Only available to LuaIntro.

addon.[GroupChanged](#groupchanged)(groupID)

Called when a unit is added to or removed from a control group. Currently implemented for widgets only.

addon.[ConfigureLayout](#configurelayout)(???)\
return: ???

???

#### Input

addon.[IsAbove](#isabove)(x, y)\
return: bool isAbove

Called every Update. Must return true for Mouse\* events and GetToolTip to be called.

addon.[GetTooltip](#gettooltip)(x, y)\
return: string tooltip

Called when IsAbove returns true.

addon.[KeyPress](#keypress)(key, mods, isRepeat)\
return: bool becomeOwner

Called repeatedly when a key is pressed down. If you want an action to occur only once check for isRepeat == false. The mods parameter is a table, with keys "alt", "ctrl", "meta" and "shift" each having a boolean value. Return true if you don't want other callins or the engine to also receive this keypress. A list of key codes can be seen at the <a href="https://wiki.libsdl.org/SDLKeycodeLookup" class="external text" rel="nofollow">SDL wiki</a>.

addon.[KeyRelease](#keyrelease)(key)\
return: bool

Called when the key is released.

addon.[TextInput](#textinput)(utf8char)

Called whenever a key press results in text input. Introduced in 97.0.

addon.[JoystickEvent](#joystickevent)(???)

???

addon.[MousePress](#mousepress)(x, y, button)\
return: bool becomeMouseOwner

Called when a mouse button is pressed. The button parameter supports up to 7 buttons. Must return true for MouseRelease and other functions to be called.

addon.[MouseRelease](#mouserelease)(x, y, button)\
return: bool becomeMouseOwner

Called when a mouse button is released. Please note that in order to have Spring call MouseRelease, you need to have a MousePress call-in in the same addon that returns true.

addon.[MouseWheel](#mousewheel)(up, value)

Called when the mouse wheel is moved. The parameters indicate the direction and amount of travel.

addon.[MouseMove](#mousemove)(x, y, dx, dy, button)

Called when the mouse is moved. The dx and dy parameters indicate the distance travelled, whereas the first two indicate the final position.

#### Players

addon.[PlayerChanged](#playerchanged)(playerID)

Called whenever a player's status changes e.g. becoming a spectator.

addon.[PlayerAdded](#playeradded)(playerID)

Called whenever a new player joins the game.

addon.[PlayerRemoved](#playerremoved)(playerID, reason)

Called whenever a player is removed from the game.

#### Downloads

addon.[DownloadStarted](#downloadstarted)(id)

Called when a [Pr-downloader](/pr-downloader) download is started via [VFS.DownloadArchive](/lua-vfs#archives).

addon.[DownloadFinished](#downloadfinished)(id)

Called when a [Pr-downloader](/pr-downloader) download finishes successfully.

addon.[DownloadFailed](#downloadfailed)(id, errorID)

Called when a [Pr-downloader](/pr-downloader) download fails to complete.

addon.[DownloadProgress](#downloadprogress)(id, downloaded, total)

Called incrementally during a [Pr-downloader](/pr-downloader) download.

#### Drawing

addon.[ViewResize](#viewresize)(viewSizeX, viewSizeY)

Called whenever the window is resized.

addon.[Update](#update)(dt)

Called for every draw frame (including when the game is paused) and at least once per sim frame except when catching up. The parameter is the time since the last update.

#### Draw\* Functions

Inside the Draw\* functions, you can use the [Lua OpenGL Api](/lua-opengl-api) to draw graphics.\
Avoid doing heavy calculations inside these callins; ideally, do the calculations elsewhere and use Draw callins only for drawing.

addon.[DrawGenesis](#drawgenesis)()

Doesn't render to screen! Use this callin to update textures, shaders, etc. Also available to LuaMenu.

addon.[DrawWorldPreParticles](#drawworldpreparticles)()

??? New in version 104.0

addon.[DrawWorldPreUnit](#drawworldpreunit)()

Spring draws units, features, some water types, cloaked units, and the sun.

addon.[DrawWorld](#drawworld)()

Spring draws command queues, 'map stuff', and map marks.

addon.[DrawWorldShadow](#drawworldshadow)()

???

addon.[DrawWorldReflection](#drawworldreflection)()

???

addon.[DrawWorldRefraction](#drawworldrefraction)()

???

addon.[DrawGroundPreForward](#drawgroundpreforward)()

Runs at the start of the forward pass when a custom map shader has been assigned via [Spring.SetMapShader](/lua-unsyncedctrl#map) (convenient for setting uniforms).

addon.[DrawGroundPreDeferred](#drawgroundpredeferred)()

Runs at the start of the deferred pass when a custom map shader has been assigned via [Spring.SetMapShader](/lua-unsyncedctrl#map) (convenient for setting uniforms).

addon.[DrawGroundPostDeferred](#drawgroundpostdeferred)()

This runs at the end of its respective deferred pass and allows proper frame compositing (with ground flashes/decals/foliage/etc, which are drawn between it and [DrawWorldPreUnit](#apidrawworldpreunit)) via [gl.CopyToTexture](/lua-opengl-api#textures).

addon.[DrawUnitsPostDeferred](#drawunitspostdeferred)()

Runs at the end of the unit deferred pass to inform Lua code it should make use of the \$model_gbuffer\_\* textures before another pass overwrites them (and to allow proper blending with e.g. cloaked objects which are drawn between these events and [DrawWorld](#apidrawworld) via [gl.CopyToTexture](/lua-opengl-api#textures)). N.B. The \*PostDeferred events are only sent (and only have a real purpose) if forward drawing is disabled.

addon.[DrawFeaturesPostDeferred](#drawfeaturespostdeferred)()

Runs at the end of the feature deferred pass to inform Lua code it should make use of the \$model_gbuffer\_\* textures before another pass overwrites them (and to allow proper blending with e.g. cloaked objects which are drawn between these events and [DrawWorld](#apidrawworld) via [gl.CopyToTexture](/lua-opengl-api#textures)). N.B. The \*PostDeferred events are only sent (and only have a real purpose) if forward drawing is disabled.

addon.[DrawScreen](#drawscreen)(vsx, vsy)

??? Also available to LuaMenu.

addon.[DrawScreenEffects](#drawscreeneffects)(vsx, vsy)

Where vsx, vsy are screen coordinates.

addon.[DrawScreenPost](#drawscreenpost)(vsx, vsy)

New in version 104.0 Similar to DrawScreenEffects, this can be used to alter the contents of a frame after it has been completely rendered (i.e. World, MiniMap, Menu, UI).

addon.[DrawLoadScreen](#drawloadscreen)()

New in version 95.0 Only available to LuaIntro, draws custom load screens.

addon.[DrawInMinimap](#drawinminimap)(sx, sy)

Where sx, sy are values relative to the minimap's position and scale.

addon.[DrawInMinimapBackground](#drawinminimapbackground)(sx, sy)

Where sx, sy are values relative to the minimap's position and scale.

#### Custom Object Rendering

For the following calls drawMode can be one of the following, notDrawing = 0, normalDraw = 1, shadowDraw = 2, reflectionDraw = 3, refractionDraw = 4, and finally gameDeferredDraw = 5 which was added in 102.0.

addon.[DrawUnit](#drawunit)(unitID, drawMode)\
return: bool suppressEngineDraw

For custom rendering of units, [enabled here](/lua-unitrendering#lua27s-drawxyz-callin).

addon.[DrawFeature](#drawfeature)(unitID, drawMode)\
return: bool suppressEngineDraw

For custom rendering of features, [enabled here](/lua-unitrendering#lua27s-drawxyz-callin).

addon.[DrawShield](#drawshield)(unitID, weaponID, drawMode)\
return: bool suppressEngineDraw

For custom rendering of [shields](/gamedev-weapondefs#shield-28weapontype29).

addon.[DrawProjectile](#drawprojectile)(projectileID, drawMode)\
return: bool suppressEngineDraw

For custom rendering of weapon (& other) projectiles, [enabled here](/lua-unitrendering#lua27s-drawxyz-callin).

### Unsynced Menu Only

addon.[AllowDraw](#allowdraw)()\
return: bool allowDraw

Enables Draw{Genesis,Screen,ScreenPost} callins if true is returned, otherwise they are called once every 30 seconds. Only active when a game isn't running.

addon.[ActivateMenu](#activatemenu)()

Called whenever LuaMenu is on with no game loaded.

addon.[ActivateGame](#activategame)()

Called whenever LuaMenu is on with a game loaded.

### Synced - Unsynced Shared

addon.[GotChatMsg](#gotchatmsg)(msg, player)

Called when a player issues a UI command e.g. types /foo or /luarules foo.

#### Game

addon.[GameID](#gameid)(gameID)

Called once to deliver the gameID. As of 101.0+ the string is encoded in hex.

addon.[GamePaused](#gamepaused)()

Called when the game is paused.

addon.[GameOver](#gameover)(winningAllyTeams)

The parameter is a table list of winning allyTeams, if empty the game result was undecided (like when dropping from an host).

addon.[GameFrame](#gameframe)(frame)

Called for every game simulation frame (30 per second). Starts at frame 0 in 101.0+ and 1 in previous versions.

addon.[GamePreload](#gamepreload)()

Called before the 0 gameframe. From 104.0 onwards, will not be called when a saved game is loaded.

addon.[GameStart](#gamestart)()

Called upon the start of the game. From 104.0 onwards, will not be called when a saved game is loaded.

#### Teams

addon.[TeamChanged](#teamchanged)(teamID)

???

addon.[TeamDied](#teamdied)(teamID)

Called when a team dies (see [Spring.KillTeam](/lua-syncedctrl#game-end)).

#### Units

addon.[UnitCreated](#unitcreated)(unitID, unitDefID, unitTeam, builderID)

Called at the moment the unit is created.

addon.[UnitFinished](#unitfinished)(unitID, unitDefID, unitTeam)

Called at the moment the unit is completed.

addon.[UnitFromFactory](#unitfromfactory)(unitID, unitDefID, unitTeam, factID, factDefID, userOrders)

Called when a factory finishes construction of a unit.

addon.[UnitReverseBuilt](#unitreversebuilt)(unitID, unitDefID, unitTeam)

Called when a living unit becomes a nanoframe again.

addon.[UnitGiven](#unitgiven)(unitID, unitDefID, newTeam, oldTeam)

Called when a unit is transferred between teams. This is called after UnitTaken and in that moment unit is assigned to the **newTeam**.

addon.[UnitTaken](#unittaken)(unitID, unitDefID, oldTeam, newTeam)

Called when a unit is transferred between teams. This is called before UnitGiven and in that moment unit is still assigned to the **oldTeam**.

addon.[UnitDamaged](#unitdamaged)(unitID, unitDefID, unitTeam, damage, paralyzer, weaponDefID, projectileID, attackerID, attackerDefID, attackerTeam)

Called when a unit is damaged (after UnitPreDamaged).

addon.[UnitDestroyed](#unitdestroyed)(unitID, unitDefID, unitTeam, attackerID, attackerDefID, attackerTeam)

Called when a unit is destroyed.

addon.[RenderUnitDestroyed](#renderunitdestroyed)(unitID, unitDefID, unitTeam)

Called just before a unit is invalid, after it finishes its death animation. New in version 101.0

addon.[UnitStunned](#unitstunned)(unitID, unitDefID, unitTeam, stunned)

Called when a unit changes its stun status. New in version 99.0

addon.[UnitUnitCollision](#unitunitcollision)(colliderID, collideeID)

Called when two units collide. Both units must be registered with [Script.SetWatchUnit](/lua-system#synced).

addon.[UnitFeatureCollision](#unitfeaturecollision)(colliderID, collideeID)

Called when a unit collides with a feature. The unit must be registered with [Script.SetWatchUnit](/lua-system#synced) and the feature registered with [Script.SetWatchFeature](/lua-system#synced).

addon.[UnitHarvestStorageFull](#unitharveststoragefull)(unitID, unitDefID, unitTeam)

Called when a unit's harvestStorage is full (according to its unitDef's entry).

addon.[UnitCommand](#unitcommand)(unitID, unitDefID, unitTeam, cmdID, cmdParams, cmdOpts, cmdTag)

Called after when a unit accepts a command, after AllowCommand returns true.

addon.[UnitCmdDone](#unitcmddone)(unitID, unitDefID, unitTeam, cmdID, cmdParams, cmdOpts, cmdTag)

Called when a unit completes a command.

addon.[UnitLoaded](#unitloaded)(unitID, unitDefID, unitTeam, transportID, transportTeam)

Called when a unit is loaded by a transport.

addon.[UnitUnloaded](#unitunloaded)(unitID, unitDefID, unitTeam, transportID, transportTeam)

Called when a unit is unloaded by a transport.

addon.[UnitExperience](#unitexperience)(unitID, unitDefID, unitTeam, experience, oldExperience)

Called when a unit gains experience greater or equal to the minimum limit set by calling [Spring.SetExperienceGrade](/lua-syncedctrl#other). Should be called more reliably with small values of experience grade in 104.0+.

addon.[UnitIdle](#unitidle)(unitID, unitDefID, unitTeam)

Called when a unit is idle (empty command queue).

addon.[UnitCloaked](#unitcloaked)(unitID, unitDefID, unitTeam)

Called when a unit cloaks.

addon.[UnitDecloaked](#unitdecloaked)(unitID, unitDefID, unitTeam)

Called when a unit decloaks.

addon.[UnitMoved](#unitmoved)(???)

??? Not implemented in base handler

addon.[UnitMoveFailed](#unitmovefailed)(???)

??? Not implemented in base handler

addon.[StockpileChanged](#stockpilechanged)(unitID, unitDefID, unitTeam, weaponNum, oldCount, newCount)

Called when a units stockpile of weapons increases or decreases. See [stockpile](/gamedev-weapondefs#stockpile).

addon.[UnitEnteredLos](#unitenteredlos)(unitID, unitTeam, allyTeam, unitDefID)

Called when a unit enters LOS of an allyteam. Its called after the unit is in LOS, so you can query that unit. The allyTeam is who's LOS the unit entered.

addon.[UnitLeftLos](#unitleftlos)(unitID, unitTeam, allyTeam, unitDefID)

Called when a unit leaves LOS of an allyteam. For widgets, this one is called just before the unit leaves los, so you can still get the position of a unit that left los.

addon.[UnitEnteredRadar](#unitenteredradar)(unitID, unitTeam, allyTeam, unitDefID)

Called when a unit enters radar of an allyteam. Also called when a unit enters LOS without any radar coverage.

addon.[UnitLeftRadar](#unitleftradar)(unitID, unitTeam, allyTeam, unitDefID)

Called when a unit leaves radar of an allyteam. Also called when a unit leaves LOS without any radar coverage. For widgets, this is called just after a unit leaves radar coverage, so widgets cannot get the position of units that left their radar.

addon.[UnitEnteredAir](#unitenteredair)(???)

??? Not implemented by base handler

addon.[UnitLeftAir](#unitleftair)(???)

??? Not implemented by base handler

addon.[UnitEnteredWater](#unitenteredwater)(???)

??? Not implemented by base handler

addon.[UnitLeftWater](#unitleftwater)(???)

??? Not implemented by base handler

addon.[UnitSeismicPing](#unitseismicping)(x, y, z, strength, allyTeam, unitID, unitDefID)

Called when a unit emits a seismic ping. See [seismicSignature](/gamedev-unitdefs#seismicsignature).

#### Features

addon.[FeatureCreated](#featurecreated)(featureID, allyTeamID)

Called when a feature is created.

addon.[FeatureDamaged](#featuredamaged)(featureID, featureDefID, featureTeam, damage, weaponDefID, projectileID, attackerID, attackerDefID, attackerTeam)

Called when a feature is damaged.

addon.[FeatureDestroyed](#featuredestroyed)(featureID, allyTeamID)

Called when a feature is destroyed.

addon.[FeatureMoved](#featuremoved)(???)

???

#### Projectiles

The following Callins are only called for weaponDefIDs registered via [Script.SetWatchWeapon](/lua-system#synced).

addon.[ProjectileCreated](#projectilecreated)(proID, proOwnerID, weaponDefID)

Called when the projectile is created. Note that weaponDefID is missing if the projectile is spawned as part of a burst, but [Spring.GetProjectileDefID](/lua-syncedread#projectiles) and [Spring.GetProjectileName](/lua-syncedread#projectiles) still work in callin scope using proID.

addon.[ProjectileDestroyed](#projectiledestroyed)(proID)

Called when the projectile is destroyed.

### Synced Only

addon.[CommandFallback](#commandfallback)(unitID, unitDefID, unitTeam, cmdID, cmdParams, cmdOptions, cmdTag)\
return: bool used, bool finished

Called when the unit reaches an unknown command in its queue (i.e. one not handled by the engine). If no addon returns used as true the command is dropped, if an addon returns true, true the command is removed because it's done, with true, false it's kept in the queue and CommandFallback gets called again on the next slowupdate.

addon.[AllowCommand](#allowcommand)(unitID, unitDefID, unitTeam, cmdID, cmdParams, cmdOptions, cmdTag, synced)\
return: bool allow

Called when the command is given, before the unit's queue is altered. The return value is whether it should be let into the queue. The queue remains untouched when a command is blocked, whether it would be queued or replace the queue.

addon.[AllowUnitCreation](#allowunitcreation)(unitDefID, builderID, builderTeam, x, y, z, facing)\
return: bool allow

Called just before unit is created, the boolean return value determines whether or not the creation is permitted.

addon.[AllowUnitTransfer](#allowunittransfer)(unitID, unitDefID, oldTeam, newTeam, capture)\
return: bool allow

Called just before a unit is transferred to a different team, the boolean return value determines whether or not the transfer is permitted.

addon.[AllowUnitBuildStep](#allowunitbuildstep)(builderID, builderTeam, unitID, unitDefID, part)\
return: bool allow

Called just before a unit progresses its build percentage, the boolean return value determines whether or not the build makes progress.

addon.[AllowFeatureCreation](#allowfeaturecreation)(featureDefID, teamID, x, y, z)\
return: bool allow

Called just before feature is created, the boolean return value determines whether or not the creation is permitted.

addon.[AllowFeatureBuildStep](#allowfeaturebuildstep)(builderID, builderTeam, featureID, featureDefID, part)\
return: bool allow

Called just before a feature changes its build percentage, the boolean return value determines whether or not the change is permitted. Note that this is also called for resurrecting features, and for refilling features with resources before resurrection. On reclaim the part values are negative, and on refill and ressurect they are positive. Part is the percentage the feature be built or reclaimed per frame. Eg. for a 30 workertime builder, that's a build power of 1 per frame. For a 50 buildtime feature reclaimed by this builder, part will be 100/-50(/1) = -2%, or -0.02 numerically.

addon.[AllowResourceLevel](#allowresourcelevel)(teamID, res, level)\
return: bool allow

Called when a team sets the sharing level of a resource, the boolean return value determines whether or not the sharing level is permitted.

addon.[AllowResourceTransfer](#allowresourcetransfer)(oldTeamID, newTeamID, res, amount)\
return: bool allow

Called just before resources are transferred between players, the boolean return value determines whether or not the transfer is permitted.

addon.[AllowStartPosition](#allowstartposition)(playerID, teamID, readyState, clampedX, clampedY, clampedZ, rawX, rawY, rawZ)\
return: bool allow

clamped{X,Y,Z} are the coordinates clamped into start-boxes, raw is where player tried to place their marker. The readyState can be any one of

- 0 - player picked a position,
- 1 - player clicked ready,
- 2 - player pressed ready OR the game was force-started (player did not click ready, but is now forcibly readied) or
- 3 - the player failed to load.
- New in version 95.0 the default 'failed to choose' start-position is the north-west point of their startbox, or (0,0,0) if they do not have a startbox.

NB: The order of the parameters changed with the addition of teamID in 104.0. Previouly it was: clampedX, clampedY, clampedZ, playerID, readyState, rawX, rawY, rawZ

addon.[AllowDirectUnitControl](#allowdirectunitcontrol)(unitID, unitDefID, unitTeam, playerID)\
return: bool allow

Determines if this unit can be controlled directly in FPS view.

addon.[AllowWeaponTargetCheck](#allowweapontargetcheck)(attackerID, attackerWeaponNum, attackerWeaponDefID)\
return: bool allowCheck, bool ignoreCheck

Determines if this weapon can automatically generate targets itself. See also [commandFire](/gamedev-weapondefs#commandfire) weaponDef tag. The ignoreCheck return value was added in 99.0 to allow ignoring the callin i.e. running normal engine check for this weapon.

addon.[AllowWeaponTarget](#allowweapontarget)(attackerID, targetID, attackerWeaponNum, attackerWeaponDefID, defPriority)\
return: bool allowed, number newPriority

Controls blocking of a specific target from being considered during a weapon's periodic auto-targeting sweep. The second return value is the new priority for this target (if you don't want to change it, return defPriority). Lower priority targets are targeted first.

addon.[AllowWeaponInterceptTarget](#allowweaponintercepttarget)(interceptorUnitID, interceptorWeaponID, targetProjectileID)\
return: bool allowed

Controls blocking of a specific intercept target from being considered during an [interceptor](/gamedev-weapondefs#interceptor) weapon's periodic auto-targeting sweep. Only called for weaponDefIDs registered via [Script.SetWatchWeapon](/lua-system#synced).

addon.[AllowBuilderHoldFire](#allowbuilderholdfire)(unitID, unitDefID, action)\
return: bool actionAllowed

New in version 98.0 <a href="https://github.com/spring/spring/commit/5a82d750b89e72024bb0bb62cf05ea257737e0ac" class="external text" rel="nofollow">5a82d750</a> Called when a construction unit wants to "use his nano beams".\
action is one of following:

- -1 Build
- CMD.REPAIR Repair
- CMD.RECLAIM Reclaim
- CMD.RESTORE Restore
- CMD.RESURRECT Resurrect
- CMD.CAPTURE Capture

addon.[Explosion](#explosion)(weaponDefID, px, py, pz, AttackerID, ProjectileID)\
return: bool noGfx

Called when an explosion occurs. If it returns true then no graphical effects are drawn by the engine for this explosion.

addon.[TerraformComplete](#terraformcomplete)(unitID, unitDefID, unitTeam, buildUnitID, buildUnitDefID, buildUnitTeam)\
return: bool stop

Called when pre-building terrain levelling terraforms are completed (c.f. [levelGround](/gamedev-unitdefs#levelground)). If the return value is true the current build order is terminated.

addon.[MoveCtrlNotify](#movectrlnotify)(unitID, unitDefID, unitTeam, data)\
return: bool moveCtrlComplete

Enable both [Spring.MoveCtrl.SetCollideStop](/lua-movectrl#options) and [Spring.MoveCtrl.SetTrackGround](/lua-movectrl#options) to enable this call-in, data was supposed to indicate the type of notification but currently never has a value other than 1 ("unit hit the ground"). The return value determines whether or not the unit should remain script-controlled (false) or return to engine controlled movement (true).

addon.[RecvLuaMsg](#recvluamsg)(msg, playerID)

Receives messages from unsynced sent via [Spring.SendLuaRulesMsg](/lua-unsyncedctrl#sendluamessage) or [Spring.SendLuaUIMsg](/lua-unsyncedctrl#sendluamessage).

addon.[Load](#load)(zip)

Called after GamePreload and before GameStart. See [Lua_SaveLoad](/lua-saveload#load-28-zip-29-3e-nil).

#### Damage Controllers

For the following callins, in addition to being a regular weapon, weaponDefID may be one of the following:

- -1 - debris collision, also default of [Spring.AddUnitDamage](/lua-syncedctrl#unit-control)
- -2 - ground collision
- -3 - object collision
- -4 - fire damage
- -5 - water damage
- -6 - kill damage
- -7 - crush damage

addon.[UnitPreDamaged](#unitpredamaged)(unitID, unitDefID, unitTeam, damage, paralyzer, weaponDefID, projectileID, attackerID, attackerDefID, attackerTeam)\
return: number newDamage, number impulseMult

Called before damage is applied to the unit, allows fine control over how much damage and <a href="http://en.wikipedia.org/wiki/Impulse_(physics)" class="external text" rel="nofollow">impulse</a> is applied.

addon.[ShieldPreDamaged](#shieldpredamaged)(proID, shieldCarrier, boolBounceProjectile, beamEmitterWeaponNum, beamEmitterUnitID, startX, startY, startZ, hitX, hitY, hitZ)\
return: bool handleCollision

Called before any engine shield-vs-projectile logic executes. If the return value is true the gadget handles the collision event and the engine does not remove the projectile. If the weapon is a hitscan type ([BeamLaser](/gamedev-weapondefs#tagweapontype) or [LightningCanon](/gamedev-weapondefs#tagweapontype)) then proID is nil and beamEmitterWeaponNum and beamEmitterUnitID are populated instead. The start and hit position arguments are provided from 104.0 onwards.

addon.[FeaturePreDamaged](#featurepredamaged)(featureID, featureDefID, featureTeam, damage, weaponDefID, projectileID, attackerID, attackerDefID, attackerTeam)\
return: number newDamage, number impulseMult

Called before damage is applied to the feature, allows fine control over how much damage and <a href="http://en.wikipedia.org/wiki/Impulse_(physics)" class="external text" rel="nofollow">impulse</a> is applied.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua:Callins](https://springrts.com/wiki/Lua:Callins).*
