---
title: "Lua UnsyncedCtrl"
source_url: "https://springrts.com/wiki/Lua_UnsyncedCtrl"
categories:
  - "Lua"
---
# Lua UnsyncedCtrl

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua UnsyncedCtrl

<div class="note">

NOTE: Prior to 102.0, entries below marked (needs ModUICtrl) require the setting ModUICtrl to be enabled in the users [springrc](/springsettings.cfg), if you want to use them in unsynced LuaRules/LuaGaia. It is enabled by default in previous versions and removed in 102.0 so you generally don't need to care.

</div>

## UI

Spring.[SetLastMessagePosition](#setlastmessageposition) ( number x, number y, number z )\
return: nil

## Ingame Console

Spring.[Echo](#echo) ( arg1 \[, arg2 \[, ... \]\] )\
return: nil

Useful for debugging.\
Prints values in the spring chat console.\
Hint: the default print() writes to STDOUT.

Spring.[Log](#log) ( string section, number logLevel \| string logLevel, string LogMessage1 \[, string LogMessage2\[, ... \]\] )\
return: nil

    Possible values for logLevel are:
        "debug"   | LOG.DEBUG
        "info"    | LOG.INFO
        "notice"  | LOG.NOTICE (engine default) (new in Version 97)
        "warning" | LOG.WARNING
        "error"   | LOG.ERROR
        "fatal"   | LOG.FATAL

Spring.[SendCommands](#sendcommands) ( string command1 \[, string command2 \[, ... \]\] )\
return: nil

Needs ModUICtrl.

or

Spring.[SendCommands](#sendcommands) ( { string command1, string command2, ... } )\
return: nil

Needs ModUICtrl.

### GUI

Spring.[SetActiveCommand](#setactivecommand) ( string action \[, string actionExtra \] )\
return: nil \| bool commandSet

Needs ModUICtrl.

or

Spring.[SetActiveCommand](#setactivecommand) ( number cmdIndex \[, number button = 1 \[, bool leftClick \[, bool rightClick \[, bool alt \[, bool ctrl \[, bool meta \[, bool shift \]\]\]\]\]\]\] )\
return: nil \| bool commandSet

Needs ModUICtrl.

Spring.[LoadCmdColorsConfig](#loadcmdcolorsconfig) ( string config )\
return: nil

Needs ModUICtrl.

Spring.[LoadCtrlPanelConfig](#loadctrlpanelconfig) ( string config )\
return: nil

Needs ModUICtrl.

Spring.[ForceLayoutUpdate](#forcelayoutupdate) (  )\
return: nil

Needs ModUICtrl.

Spring.[SetDrawSelectionInfo](#setdrawselectioninfo) ( bool enable )\
return: nil

Needs ModUICtrl.\
Disables the "Selected Units x" box in the GUI.

### Mouse

Spring.[SetMouseCursor](#setmousecursor) ( string cursorName \[, number scale \] )\
return: nil

Needs ModUICtrl.

Spring.[WarpMouse](#warpmouse) ( number x, number y )\
return: nil

Needs ModUICtrl.

### LOS Colors

Spring.[SetLosViewColors](#setlosviewcolors) ( table always = {r,g,b}, table LOS = {r,g,b}, table radar = {r,g,b}, table jam = {r,g,b}, table radar2 = {r,g,b} )\
return: nil

Needs ModUICtrl.\
New arguments since 100.0 (radar2 is the inside of radar edge). Arguments for 99.0 and before:\

    ( table reds = { number always, number LOS, number radar, number jam }, 
        table greens = { number always, number LOS, number radar, number jam },
        table blues = { number always, number LOS, number radar, number jam } ) -> nil

### SendMessage

Spring.[SendMessage](#sendmessage) ( string message )\
return: nil

Spring.[SendMessageToPlayer](#sendmessagetoplayer) ( number playerID, string message )\
return: nil

Spring.[SendMessageToTeam](#sendmessagetoteam) ( number teamID, string message )\
return: nil

Spring.[SendMessageToAllyTeam](#sendmessagetoallyteam) ( number allyID, string message )\
return: nil

Spring.[SendMessageToSpectators](#sendmessagetospectators) ( string message )\
return: nil

\<PLAYER#\> (with \# being a playerid) inside the string will be replaced with the players name - i.e. :\
Spring.SendMessage ("\<PLAYER1\> did something")\
might display as "ProRusher did something"

### Markers

Spring.[MarkerAddPoint](#markeraddpoint) ( number x, number y, number z \[, string text = "" \[, bool localOnly \]\] )\
return: nil

Needs ModUICtrl.

Spring.[MarkerAddLine](#markeraddline) ( number x1, number y1, number z1, number x2, number y2, number z2 )\
return: nil

Needs ModUICtrl.

Spring.[MarkerErasePosition](#markereraseposition) ( number x, number y, number z )\
return: nil

Needs ModUICtrl.

## Sounds

Spring.[LoadSoundDef](#loadsounddef) ( string soundfile )\
return: nil \| bool success

Loads a SoundDefs file, the format is the same as in \`gamedata/sounds.lua\`.

Spring.[PlaySoundFile](#playsoundfile) ( string soundfile \[, number volume = 1.0 \[, number posx \[, number posy \[, number posz \[, number speedx\[, number speedy\[, number speedz\[, number \| string channel \]\]\]\]\]\]\]\] )\
return: nil \| bool playSound

Possible arguments for channel argument:

        "general" || 0 || nil (default)
        "battle" || "sfx" | 1
        "unitreply" || "voice" || 2
        "userinterface" || "ui" || 3

Spring.[PlaySoundStream](#playsoundstream) ( string oggfile \[, number volume = 1.0 \[, bool enqueue \]\] )\
return: nil \| bool true

Allows to play an Ogg Vorbis (.OGG) compressed sound file.\
In 83.0 and up multiple sound streams may be played at once.

Spring.[StopSoundStream](#stopsoundstream) (  )\
return: nil

Terminates any SoundStream currently running.

Spring.[PauseSoundStream](#pausesoundstream) (  )\
return: nil

Spring.[SetSoundStreamVolume](#setsoundstreamvolume) ( number volume )\
return: nil

## SendLuaMessage

Very important! (allows synced inter-lua-enviroment communications)

Spring.[SendLuaUIMsg](#sendluauimsg) ( string message, string mode )\
return: nil

Needs ModUICtrl.\
Possible modes are:\
"s"/"specs" & "a"/"allies"

Spring.[SendLuaGaiaMsg](#sendluagaiamsg) ( string message )\
return: nil

Needs ModUICtrl.

Spring.[SendLuaRulesMsg](#sendluarulesmsg) ( string message )\
return: nil

Needs ModUICtrl.

## AI

Spring.[SendSkirmishAIMessage](#sendskirmishaimessage) ( number aiTeam, string message )\
return: nil \| bool ai_processed, { \[1\] = string response1, ... }

New in version 83.0\
Note there is nothing in this table due to "limitations" of the AI interface.

## Units

Spring.[SetUnitLeaveTracks](#setunitleavetracks) ( number unitID, bool leavetracks )\
return: nil

New in version 83.0

Spring.[SetUnitSelectionVolumeData](#setunitselectionvolumedata) ( number featureID, number scaleX, number scaleY, number scaleZ, number offsetX, number offsetY, number offsetZ, number vType, number tType, number Axis )\
return: nil

New in version 104.0

### Unit Selection

Spring.[SelectUnitMap](#selectunitmap) ( { \[unitID\] = anything, ... } \[, bool append \] )\
return: nil

Spring.[SelectUnitArray](#selectunitarray) ( { \[1\] = unitID1, \[2\] = unitID2, ... } \[, bool append \] )\
return: nil

Spring.[SetDrawSelectionInfo](#setdrawselectioninfo) ( bool drawSelectionInfo )\
return: nil

### Unit Group

Spring.[SetUnitGroup](#setunitgroup) ( number unitID, number groupID )\
return: nil

Needs ModUICtrl.

### Give Order

Spring.[GiveOrder](#giveorder) ( number cmdID, table params = {number, etc...}, table options = {"alt", "ctrl", "shift", "right"} )\
return: nil \| bool true

Needs ModUICtrl.\
Gives order to all selected units.

Spring.[GiveOrderToUnit](#giveordertounit) ( number unitID, number cmdID, table params = {number, etc...}, table options = {"alt", "ctrl", "shift", "right"} )\
return: nil \| bool true

Needs ModUICtrl.

Spring.[GiveOrderToUnitMap](#giveordertounitmap) ( table unitMap = { \[unitID\] = arg1, etc... }, number cmdID, table params = {number, etc...}, table options = {"alt", "ctrl", "shift", "right"} )\
return: nil \| bool true

Needs ModUICtrl.

Spring.[GiveOrderToUnitArray](#giveordertounitarray) ( table unitArray = { \[1\] = number unitID, etc... }, number cmdID, table params = {number, etc...}, table options = {"alt", "ctrl", "shift", "right"} )\
return: nil \| bool true

Needs ModUICtrl.

Spring.[GiveOrderArrayToUnitMap](#giveorderarraytounitmap) ( table unitMap = { \[unitID\] = arg1, etc... }, table orderArray = { number cmdID, table params = {number, etc...}, table options = {"alt", "ctrl", "shift", "right"} } )\
return: nil \| bool true

Needs ModUICtrl.

Spring.[GiveOrderArrayToUnitArray](#giveorderarraytounitarray) ( table unitArray = { \[11\] = number unitID, etc... }, table orderArray = { number cmdID, table params = {number, etc...}, table options = {"alt", "ctrl", "shift", "right"} } \[, bool pairwise \] )\
return: nil \| bool true

Needs ModUICtrl.\
"pairwise" paramater (New in version 89.0) is used to send multiple units a single individual command.

Spring.[SetBuildFacing](#setbuildfacing) ( number facing )\
return: nil

Spring.[SetBuildSpacing](#setbuildspacing) ( number spacing )\
return: nil

### Unit NoDraw,NoSelect,NoMinimap

Spring.[SetUnitNoDraw](#setunitnodraw) ( number unitID, bool noDraw )\
return: nil

LuaGadgets only!

Spring.[SetUnitNoSelect](#setunitnoselect) ( number unitID, bool noSelect )\
return: nil

LuaGadgets only!

Spring.[SetUnitNoMinimap](#setunitnominimap) ( number unitID, bool noMinimap )\
return: nil

LuaGadgets only!

## Features

Spring.[SetFeatureFade](#setfeaturefade) ( number featureID, bool allow )\
return: nil

New in version 101.0\
Control whether a feature will fade or not when zoomed out.

Spring.[SetFeatureNoDraw](#setfeaturenodraw) ( number featureID, bool noDraw )\
return: nil

LuaGadgets only!

Spring.[SetFeatureSelectionVolumeData](#setfeatureselectionvolumedata) ( number featureID, number scaleX, number scaleY, number scaleZ, number offsetX, number offsetY, number offsetZ, number vType, number tType, number Axis )\
return: nil

New in version 104.0

## Developers

Spring.[SetDrawSky](#setdrawsky) ( bool drawSky )\
return: nil

Spring.[SetDrawWater](#setdrawwater) ( bool drawWater )\
return: nil

Spring.[SetDrawGround](#setdrawground) ( bool drawGround )\
return: nil

Spring.[SetWaterParams](#setwaterparams) ( table params )\
return: nil

As of 104.0 no longer needs cheating enabled.\
Allows to change water params (mostly BumpWater ones) at runtime. You may want to set BumpWaterUseUniforms in your [springrc](/springsettings.cfg) to 1, then you don't even need to restart BumpWater via \`/water 4\`. "Params" table contains:

      params = {
        absorb = {number r, number g, number b},
        baseColor = {number r, number g, number b},
        minColor = {number r, number g, number b},
        surfaceColor = {number r, number g, number b},
        diffuseColor = {number r, number g, number b},
        specularColor = {number r, number g, number b},
        planeColor = {number r, number g, number b},
        texture = string file,
        foamTexture = string file,
        normalTexture = string file,
        damage = number value,
        repeatX = number value,
        repeatY = number value,
        surfaceAlpha = number value,
        ambientFactor = number value,
        diffuseFactor = number value,
        specularFactor = number value,
        specularPower = number value,
        fresnelMin = number value,
        fresnelMax = number value,
        fresnelPower = number value,
        reflectionDistortion = number value,
        blurBase = number value,
        blurExponent = number value,
        perlinStartFreq = number value,
        perlinLacunarity = number value,
        perlinAmplitude = number value,
        numTiles = number value,
        shoreWaves = boolean value,
        forceRendering = boolean value,
        hasWaterPlane = boolean value,
      }

Spring.[SetMapRenderingParams](#setmaprenderingparams) ( table params )\
return: nil

New in version 104.0\
Allows to change map rendering params at runtime.\
"Params" table contains:

      params = {
        splatTexMults = {number r, number g, number b, number a},
        splatTexScales = {number r, number g, number b, number a},
        voidWater = boolean value,
        voidGround = boolean value,
        splatDetailNormalDiffuseAlpha = boolean value,
      }

Spring.[SetLogSectionFilterLevel](#setlogsectionfilterlevel) ( string sectionName, string \| number logLevel )\
return: nil

New in version 95.0\
See [infolog.txt](/infolog.txt) for possible log sections.

Spring.[SetDrawGroundDeferred](#setdrawgrounddeferred) ( bool drawGroundDeferred \[, bool drawGroundForward \] )\
return: nil

New in version 101.0 drawGroundForward allows disabling of the forward pass

Spring.[SetDrawModelsDeferred](#setdrawmodelsdeferred) ( bool drawUnitsDeferred, bool drawFeaturesDeferred \[, bool drawUnitsForward \[, bool drawFeaturesForward \]\] )\
return: nil

New in version 101.0 drawFeaturesForward, drawUnitsForward allows disabling of the respective forward passes

Spring.[SetVideoCapturingMode](#setvideocapturingmode) ( bool allowCaptureMode )\
return: nil

New in version 104.0\
This doesn't actually record the game in any way, it just regulates the framerate and interpolations.

Spring.[SetVideoCapturingTimeOffset](#setvideocapturingtimeoffset) ( bool timeOffset )\
return: nil

New in version 104.0

## GUI

Spring.[DrawUnitCommands](#drawunitcommands) ( number unitID )\
return: nil

New in version 104.0

or

Spring.[DrawUnitCommands](#drawunitcommands) ( table units = { \[1\] = unitID, ... } \[, bool false )\
return: nil

or

Spring.[DrawUnitCommands](#drawunitcommands) ( table units = { \[unitID\] = arg1, ... }, bool true )\
return: nil

Spring.[SetTeamColor](#setteamcolor) ( number teamID, number r, number g, number b )\
return: nil

Spring.[AssignMouseCursor](#assignmousecursor) ( string cmdName, string iconFileName \[, bool overwrite = true \[, bool hotSpotTopLeft = false \]{rbracket, &#123;&#123;{arg5&#125;&#125;}, &#123;&#123;{arg6&#125;&#125;}, &#123;&#123;{arg7&#125;&#125;}, &#123;&#123;{arg8&#125;&#125;}, &#123;&#123;{arg9&#125;&#125;} )

\|arg5 = \|arg6 = \|arg7 = \|arg8 = \|arg9 = \|return = nil \| bool assigned \|info = Changes/creates the cursor of a single CursorCmd. Note, that iconFileName is not the full filename instead it is like this:\
Wanted filename: Anims/cursorattack_0.bmp\
=\> iconFileName: cursorattack &#125;&#125;

Spring.[ReplaceMouseCursor](#replacemousecursor) ( string oldFileName, string newFileName \[, bool hotSpotTopLeft = false \] )\
return: nil \| bool assigned

Mass replace all occurrence of the cursor in all CursorCmds.

Spring.[SetCustomCommandDrawData](#setcustomcommanddrawdata) ( number cmdID, number cmdID_cloneIcon \| string iconname, table RGBA = { number r, number g, number b, number a } \[, bool showArea \] )\
return: nil \| bool assigned

Register your custom cmd so it gets visible in the unit's cmd queue

or

Spring.[SetCustomCommandDrawData](#setcustomcommanddrawdata) ( number cmdID, nil )\
return: nil \| bool assigned

Register your custom cmd so it gets visible in the unit's cmd queue

## Sharing

Spring.[SetShareLevel](#setsharelevel) ( string metal \| string energy, number shareLevel )\
return: nil

LuaGadgets only!\
Note: shareLevel is 0\<= x \<= 1 .

Spring.[ShareResources](#shareresources) ( number teamID, string units )\
return: nil

LuaGadgets only!

or

Spring.[ShareResources](#shareresources) ( number teamID, string metal \| string energy, number amount )\
return: nil

LuaGadgets only!

## UnitDef RadarIcons & BuildPics

Spring.[AddUnitIcon](#adduniticon) ( string iconName, string texFile \[, number size \[, number dist \[, bool radAdjust \]\]\] )\
return: nil \| bool added

Spring.[FreeUnitIcon](#freeuniticon) ( string iconName )\
return: nil \| bool freed

Spring.[SetUnitDefIcon](#setunitdeficon) ( number unitDefID, string iconName )\
return: nil

Needs ModUICtrl.\
Sets radar icon.

Spring.[SetUnitDefImage](#setunitdefimage) ( number unitDefID, string luaTexture \| string texFile )\
return: nil

Needs ModUICtrl.\
Sets buildpic.

## Camera

Spring.[SetCameraState](#setcamerastate) ( table camState, number camTime )\
return: nil \| bool stateSet

camState has the same format as the output of Spring.GetCameraState(). See [Lua_camState](/lua-camstate) for details about camState.\
The camState's mode/name must fit the rest of the state. Getting a state, changing its mode/name and then passing it to SetCameraState will have undesired results. <a href="https://springrts.com/mantis/view.php?id=5028#c15491" class="external autonumber" rel="nofollow">[1]</a> Also see \#5028\]

Spring.[SetCameraTarget](#setcameratarget) ( number x, number y, number z \[, number transTime \] )\
return: nil

For Spring Engine XZ represents horizontal, from north west corner of map and Y vertical, from water level and rising.

Spring.[SetCameraOffset](#setcameraoffset) ( number px = 0 \[, number py = 0 \[, number pz = 0 \[, number tx = 0 \[, number ty = 0 \[, number tz = 0 \]\]\]\]\] )\
return: nil

Needs ModUICtrl.

## (Virtual-)FileSystem

Spring.[ExtractModArchiveFile](#extractmodarchivefile) ( string modfile )\
return: bool extracted

Spring.[CreateDir](#createdir) ( string path )\
return: nil \| bool dirCreated

Needs ModUICtrl.

The full VFS API is available at [link](/lua-vfs).

## Engine Config

The following functions read the engine configs saved in [Springsettings.cfg](/springsettings.cfg), a version-ed instance of these or a custom file supplied on the command line. If *\*Overlay* is *true*, the value will only be set in memory, and not be restored for the next game.

Spring.[SetConfigInt](#setconfigint) ( string name, number value \[, bool useOverlay = false \] )\
return: nil

Spring.[SetConfigFloat](#setconfigfloat) ( string name, number value \[, bool useOverlay = false \] )\
return: nil

New in version 104.0

Spring.[SetConfigString](#setconfigstring) ( string name, number value \[, bool useOverlay = false \] )\
return: nil

New in version 104.0

## World Primitives

outdated! use opengl api instead!

Spring.[AddWorldIcon](#addworldicon) ( number cmdID, number x, number y, number z )\
return: nil

Spring.[AddWorldText](#addworldtext) ( string text, number x, number y, number z )\
return: nil

Spring.[AddWorldUnit](#addworldunit) ( number unitDefID, number x, number y, number z, number team, number facing )\
return: nil

## Sun

The dynamic Sun must be invoked via /dynamicsun (Dynamic sun was removed in 104.0, use SetSunDirection, SetSunLighting & SetAtmosphere instead).

Spring.[SetSunManualControl](#setsunmanualcontrol) ( bool setManualControl )\
return: nil

Removed from version 104.0

Spring.[SetSunParameters](#setsunparameters) ( number dirX, number dirY, number dirZ, number dist, number startTime, number orbitTime )\
return: nil

Removed from version 104.0

Spring.[SetSunDirection](#setsundirection) ( number dirX, number dirY, number dirZ )\
return: nil

Spring.[SetSunLighting](#setsunlighting) ( table params )\
return: nil

New in version 101.0\
It can be used to modify the following sun lighting parameters:

         {ground,unit}{Ambient,Diffuse,Specular}Color and specularExponent
         All Colourvalues have to in the Range from 0.0 to 1.0 for all colors and the alpha
         Example usage: Spring.SetSunLighting({groundAmbientColor = {1, 0.1, 1}, groundDiffuseColor = {1, 0.1, 1} })

Spring.[SetAtmosphere](#setatmosphere) ( table params )\
return: nil

New in version 101.0\
It can be used to modify the following atmosphere parameters:

         fog{Start,End}, {sun,sky,cloud}Color
         Example usage: Spring.SetAtmosphere({ fogStart = 0, fogEnd   = 0.5, fogColor = { 0.7, 0.2, 0.2, 1 &#125;&#125;)

## Misc

Spring.[Reload](#reload) ( string startscript )\
return: -

New in version 99.0\
start-script is the CONTENT of the [script.txt](/script.txt) spring should use to start.

Spring.[Restart](#restart) ( string commandline_args, string startscript )\
return: -

New in version 0.79\
If this call returns, something went wrong.\
*commandline_args* are commandline arguments passed to spring executable.

Spring.[Start](#start) ( string commandline_args, string startscript )\
return: -

New in version 102.0\
If this call returns, something went wrong.\
Launches a new Spring instance without terminating the existing one.\
start-script is the CONTENT of the [script.txt](/script.txt) spring should use to start (if empty, no start-script is added, you can still point spring to your custom script.txt when you add the file-path to *commandline_args*.

Spring.[SetWMIcon](#setwmicon) ( string iconFileName )\
return: nil

New in version 83.0\
Sets the icon for the process which is seen in the OS task-bar and other places (default: spring-logo).\
Note: has to be 24bit or 32bit.\
Note: on windows, it has to be 32x32 pixels in size (recommended for cross-platform)\
Note: *\*.bmp* images have to be in BGR format (default for m\$ ones).\
Note: *\*.ico* images are not supported.

Spring.[SetWMCaption](#setwmcaption) ( string title \[, string titleShort = title \] )\
return: nil

New in version 83.0\
Sets the window *title* for the process (default: "Spring \<version\>").\
The *shortTitle* is displayed in the OS task-bar (default: "Spring \<version\>").\
**NOTE:** *shortTitle* is only ever possibly used under X11 (Linux & OS X), but not with QT (KDE) and never under Windows. See <a href="http://www.gpwiki.org/index.php/SDL:Tutorials:Initializing_SDL_Libraries#About_the_icon_.28.22Icon_Title.22.29_parameter_on_different_window-managers" class="external text" rel="nofollow">this site</a> for more details.

Spring.[ClearWatchDogTimer](#clearwatchdogtimer) ( \[ string threadName = main \] )\
return: nil

New in version 83.0

Spring.[SetClipboard](#setclipboard) ( string text )\
return: nil

New in version 98.0

## Rendering

### Preload

Allow the engine to load the unit's model (and texture) in a background thread. Wreckages and buildOptions of a unit are automatically preloaded.

Spring.[PreloadUnitDefModel](#preloadunitdefmodel) ( number unitDefID )\
return: nil

{New in version 101.0

Spring.[PreloadFetureDefModel](#preloadfeturedefmodel) ( number featureDefID )\
return: nil

{New in version 101.0

### Lighting

NOTE: these (0.83+) lighting callouts only work when called from unsynced gadgets!

Spring.[AddMapLight](#addmaplight) ( table lightParams )\
return: number lightHandle

(requires MaxDynamicMapLights \> 0)

Spring.[AddModelLight](#addmodellight) ( table lightParams )\
return: number lightHandle

(requires MaxDynamicMapLights \> 0)

Spring.[UpdateMapLight](#updatemaplight) ( number lightHandle, table lightParams )\
return: bool success

Spring.[UpdateModelLight](#updatemodellight) ( number lightHandle, table lightParams )\
return: bool success

Spring.[SetMapLightTrackingState](#setmaplighttrackingstate) ( number lightHandle, number unitOrProjectileID, bool enableTracking, bool unitOrProjectile )\
return: bool success

Spring.[SetModelLightTrackingState](#setmodellighttrackingstate) ( number lightHandle, number unitOrProjectileID, bool enableTracking, bool unitOrProjectile )\
return: bool success

**lightParams** is a table that should contain at least one of the following recognized key/value pairs:

       lightParams = {
           position = {px, py, pz},
           direction = {dx, dy, dz},
           ambientColor = {red, green, blue},
           diffuseColor = {red, green, blue},
           specularColor = {red, green, blue},
           intensityWeight = {ambientWeight, diffuseWeight, specularWeight},

           -- per-frame decay of ambientColor (spread over TTL frames)
           ambientDecayRate = {ambientRedDecay, ambientGreenDecay, ambientBlueDecay},
           -- per-frame decay of diffuseColor (spread over TTL frames)
           diffuseDecayRate = {diffuseRedDecay, diffuseGreenDecay, diffuseBlueDecay},
           -- per-frame decay of specularColor (spread over TTL frames)
           specularDecayRate = {specularRedDecay, specularGreenDecay, specularBlueDecay},
           -- *DecayType = 0.0 -> interpret *DecayRate values as linear, else as exponential
           decayFunctionType = {ambientDecayType, diffuseDecayType, specularDecayType},

           radius = number elmos,
           fov = number degrees,
           ttl = number frames,
           priority = number,
           ignoreLOS = boolean,
       }

## Map

Spring.[SetSkyBoxTexture](#setskyboxtexture) ( string texName )\
return: nil

New in version 101.0

Spring.[SetMapShadingTexture](#setmapshadingtexture) ( string texType, string texName )\
return: bool success

New in version 101.0

<div class="note">

Example usage: Spring.SetMapShadingTexture("\$ssmf_specular", "name_of_my_shiny_texture")

</div>

Spring.[SetMapSquareTexture](#setmapsquaretexture) ( number texSqrX, number texSqrY, string luaTexName )\
return: bool success

Spring.[SetMapShader](#setmapshader) ( number standardShaderID, number deferredShaderID )\
return: nil

New in version 101.0

<div class="note">

The ID's must refer to valid programs returned by gl.CreateShader. Passing in a value of 0 will cause the respective shader to revert back to its engine default. Custom map shaders that declare a uniform ivec2 named "texSquare" can sample from the default diffuse texture(s), which are always bound to TU 0.

</div>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua UnsyncedCtrl](https://springrts.com/wiki/Lua_UnsyncedCtrl).*
