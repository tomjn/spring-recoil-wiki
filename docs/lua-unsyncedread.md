---
title: "Lua UnsyncedRead"
source_url: "https://springrts.com/wiki/Lua_UnsyncedRead"
categories:
  - "Lua"
---
# Lua UnsyncedRead

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua UnsyncedRead

## Unsynced Read

### Replay/Spectating

Spring.[IsReplay](#isreplay) (  )\
return: nil \| bool isReplay

Spring.[GetReplayLength](#getreplaylength) (  )\
return: nil \| number timeInSeconds

New in version 92.0

Spring.[GetSpectatingState](#getspectatingstate) (  )\
return: bool spectating, bool fullView, bool fullSelect

### Game/Menu Name

Spring.[GetGameName](#getgamename) (  )\
return: string name

New in version 104.0\
Apparently returns [name](/modinfo.lua#name) .. [version](/modinfo.lua#version) from [Modinfo.lua](/modinfo.lua). E.g. "Spring: 1944 test-5640-ac2d15b".

Spring.[GetMenuName](#getmenuname) (  )\
return: string name

New in version 104.0

### ModUI

Spring.[GetModUICtrl](#getmoduictrl) (  )\
return: bool ModUICtrl

### MyInfo

Spring.[GetMyAllyTeamID](#getmyallyteamid) (  )\
return: number allyTeamID

Spring.[GetMyTeamID](#getmyteamid) (  )\
return: number teamID

Spring.[GetMyPlayerID](#getmyplayerid) (  )\
return: number playerID

### Local Player,Team,Ally

Redundant same as the GetMyXYZ functions!

Spring.[GetLocalPlayerID](#getlocalplayerid) (  )\
return: number playerID

Spring.[GetLocalTeamID](#getlocalteamid) (  )\
return: number teamID

Spring.[GetLocalAllyTeamID](#getlocalallyteamid) (  )\
return: number allyID

### Team/Player Info

Spring.[GetPlayerRoster](#getplayerroster) ( \[number sortType\] \| \[number sortType\], \[bool showPathingPlayers\] )\
return: nil \| table playerTable

"playerTable" contains:

    playerTable = {
                [1] = {
                  string  name,
                  number  playerID,
                  number  teamID,
                  number  allyTeamID,
                  boolean spectator,
                  number  cpuUsage,
                  number  pingTime
                },
                etc...
              }

       if pingTime == -1, the player is pathfinding, in order to find the progress, use:
       cpuUsage&0x1 if it's PC or BO, cpuUsage& 0xFE to get path res, (cpuUsage>>8)*1000
       for the progress
      Sort codes:
         1 = Sort by allies  (the default)
         2 = Sort by teamID
         3 = Sort by playerName
         4 = Sort by CPU usage
         5 = Sort by ping time

Spring.[GetTeamColor](#getteamcolor) ( number teamID )\
return: nil \| number r, number g, number b, number a

Spring.[GetTeamOrigColor](#getteamorigcolor) ( number teamID )\
return: nil \| number r, number g, number b, number a

Spring.[GetPlayerTraffic](#getplayertraffic) ( number playerID \[, number packetID \] )\
return: number traffic

### Sound

Spring.[GetSoundStreamTime](#getsoundstreamtime) (  )\
return: number playedTime, number totalTime,

### Camera

Spring.[GetCameraNames](#getcameranames) (  )\
return: { \[camName\] = number camNum, ... }

Spring.[GetCameraState](#getcamerastate) (  )\
return: { "name" = string, "mode" = number camIdx, state1 = number, state2 = number, ... }

See [Lua_camState](/lua-camstate) for details about Spring.GetCameraState output.

Spring.[GetCameraPosition](#getcameraposition) (  )\
return: number x, number y, number z

Spring.[GetCameraDirection](#getcameradirection) (  )\
return: number forward_x, number forward_y, number forward_z

Spring.[GetCameraFOV](#getcamerafov) (  )\
return: number vFov, number hFov

Spring.[GetCameraVectors](#getcameravectors) (  )\
return: table vectorTable

vectorTable contains:

    vectorTable = {
        forward   = { [1] = number x, [2] = number y, [3] = number z },
        up        = { [1] = number x, [2] = number y, [3] = number z },
        right     = { [1] = number x, [2] = number y, [3] = number z },
        top       = { [1] = number x, [2] = number y, [3] = number z },
        bottom    = { [1] = number x, [2] = number y, [3] = number z },
        leftside  = { [1] = number x, [2] = number y, [3] = number z },
        rightside = { [1] = number x, [2] = number y, [3] = number z }
      }

#### Inview

Spring.[GetVisibleUnits](#getvisibleunits) ( \[number teamID = -1 \[, number radius = 30 \[, bool Icons = true \]\]\] )\
return: nil \| table unitTable = { \[1\] = number unitID, ... }

Spring.[GetVisibleFeatures](#getvisiblefeatures) ( \[number allyTeamID = -1 \[, number radius = 30 \[, bool Icons = true \[, bool geos = true \]\]\]\] )\
return: nil \| table featureTable = { \[1\] = number featureID, ... }

Spring.[IsAABBInView](#isaabbinview) ( number minX, number minY, number minZ, number maxX, number maxY, number maxZ )\
return: nil \| bool isInView

Spring.[IsSphereInView](#issphereinview) ( number x, number y, number z \[, number radius \] )\
return: nil \| bool isInView

Spring.[IsUnitIcon](#isuniticon) ( number unitID )\
return: nil \| bool isUnitIcon

Spring.[IsUnitInView](#isunitinview) ( number unitID )\
return: nil \| bool isUnitInView

Spring.[IsUnitVisible](#isunitvisible) ( number unitID \[, number radius \[, bool checkIcons \]\] )\
return: nil \| bool isVisible

#### Screen Trace

Spring.[WorldToScreenCoords](#worldtoscreencoords) ( number x, number y, number z )\
return: number x, number y, number z

Spring.[TraceScreenRay](#tracescreenray) ( number mouseX, number mouseY, \[, bool onlyCoords \[, bool useMinimap \[, bool includeSky \[, bool ignoreWater \[, number D \]\]\]\]\] )\
return: nil \| string unit, number unitID \| string feature, number featureID \| string ground, table coords = { \[1\] = number x, \[2\] = number y, \[3\] = number z }

New in version 101.0

    Extended to allow a custom plane, parameters are (0, 1, 0, D=0) where D is the offset D can be specified in the third argument (if all the bools are false) or in the seventh (as shown). Intersection coordinates are returned in t[4],t[5],t[6] when the ray goes offmap and includeSky is true), or when no unit or feature is hit (or onlyCoords is true). This will only work for units & objects with the default collission sphere. Per Piece collission and custom collission objects are not supported. The unit must be selectable, to appear to a screen trace ray.

    To get map coordinates under mouse cursor: input mouse coordinates obtained via GetMouseState() and pass true for the onlyCoords parameter. Be careful as going off map will result in nil:
       local mouseX, mouseY = Spring.GetMouseState()
       print ("Mouse coordinates: (" .. mouseX .. ", " .. mouseY .. ")")
       local desc, args = Spring.TraceScreenRay(mouseX, mouseY, true)
       if nil == desc then return end -- off map
       local x = args[1]
       local y = args[2]
       local z = args[3]
       print ("World coordinates: (" .. x .. ", " .. y .. ", " .. z .. ")")

Spring.[GetPixelDir](#getpixeldir) ( number x, number y )\
return: number dirX, number dirY, number dirZ

New in version 95.0

#### Screen & Window Geometry

Spring.[GetViewGeometry](#getviewgeometry) (  )\
return: number viewSizeX, number viewSizeY, number viewPosX, number viewPosY

Spring.[GetWindowGeometry](#getwindowgeometry) (  )\
return: number winSizeX, number winSizeY, number winPosX, number winPosY

Spring.[GetScreenGeometry](#getscreengeometry) (  )\
return: number screenSizeX, number screenSizeY, number ZERO, number ZERO

Is missing multiscreen support!

### Unit

Spring.[IsUnitAllied](#isunitallied) ( number unitID )\
return: nil \| bool isAllied

Spring.[GetUnitViewPosition](#getunitviewposition) ( number unitID \[, bool midPos = false \] )\
return: nil \| number x, number y, number z

Spring.[GetUnitTransformMatrix](#getunittransformmatrix) ( number unitID \[, bool invert = false \] )\
return: nil \| number a11, number a12 ..., number a44 (4x4 matrix)

Spring.[GetUnitSelectionVolumeData](#getunitselectionvolumedata) ( number unitID )\
return: number scaleX, number scaleY, number scaleZ, number offsetX, number offsetY, number offsetZ, number volumeType, number testType, number primaryAxis, bool disabled

#### Selected Units

Spring.[GetSelectedUnits](#getselectedunits) (  )\
return: { \[1\] = number unitID, ... }

Spring.[GetSelectedUnitsSorted](#getselectedunitssorted) (  )\
return: { \[number unitDefID\] = { \[1\] = \[number unitID\], etc... }, ... }

Spring.[GetSelectedUnitsCounts](#getselectedunitscounts) (  )\
return: { \[number unitDefID\] = number count, etc... }

Spring.[GetSelectedUnitsCount](#getselectedunitscount) (  )\
return: number count

Spring.[IsUnitSelected](#isunitselected) ( number unitID )\
return: nil \| bool isSelected

#### Unit Groups

Spring.[GetUnitGroup](#getunitgroup) ( number unitID )\
return: nil \| number groupNumber

Spring.[GetGroupList](#getgrouplist) (  )\
return: nil \| { \[number\] = number unitCount, ... }

Spring.[GetSelectedGroup](#getselectedgroup) (  )\
return: number groupNumber

Spring.[GetGroupAIName](#getgroupainame) ( number groupID )\
return: string aiName

Spring.[GetGroupAIList](#getgroupailist) (  )\
return: { \[1\] = string aiName, ... }

Spring.[GetGroupUnits](#getgroupunits) ( number groupID )\
return: nil \| { \[1\] = number unitID, ... }

Spring.[GetGroupUnitsSorted](#getgroupunitssorted) ( number groupID )\
return: nil \| { \[number unitDefID\] = { number unitID, ... }, ... }

Spring.[GetGroupUnitsCounts](#getgroupunitscounts) ( number groupID )\
return: nil \| { \[number unitDefID\] = number count, ... }

Spring.[GetGroupUnitsCount](#getgroupunitscount) ( number groupID )\
return: nil \| number count

### Feature

Spring.[GetFeatureSelectionVolumeData](#getfeatureselectionvolumedata) ( number unitID )\
return: number scaleX, number scaleY, number scaleZ, number offsetX, number offsetY, number offsetZ, number volumeType, number testType, number primaryAxis, bool disabled

### Projectiles

Spring.[GetVisibleProjectiles](#getvisibleprojectiles) ( \[ number allyTeamID = -1 \[, bool addSyncedProjectiles = true \[, bool addWeaponProjectiles = true \[, bool addPieceProjectiles = true \]\]\]\] )\
return: nil \| { \[1\] = number projectileID, ... }

### UI

Spring.[GetUICommands](#getuicommands) (  )\
return: nil \| { \[1\] = { command=string, description=string, synced=bool, cheat=bool}, ... }

New in version 101.0\
Returns a list of available [UI commands](/ui-commands).

#### GUI Settings

Spring.[IsGUIHidden](#isguihidden) (  )\
return: nil \| bool isHidden

Spring.[HaveShadows](#haveshadows) (  )\
return: nil \| bool haveShadows

Spring.[HaveAdvShading](#haveadvshading) (  )\
return: nil \| bool haveShading

Spring.[GetWaterMode](#getwatermode) (  )\
return: nil \| number mode, string mode

      mode numbers:
          0 - basic
          1 - reflective
          2 - dynamic
          3 - refractive
          4 - bumpwater
          default - unknown

Spring.[GetMapDrawMode](#getmapdrawmode) (  )\
return: nil \| string "normal" \| string "height" \| string "metal" \| string "pathTraversability" \| string "los"

Spring.[GetDrawSelectionInfo](#getdrawselectioninfo) (  )\
return: bool drawSelectInfo

Returns whether "Selected units" text is displayed.

#### Unit & Feature GUI States

Spring.[GetUnitLuaDraw](#getunitluadraw) ( number unitID )\
return: nil \| bool unitDraw

Spring.[GetUnitNoDraw](#getunitnodraw) ( number unitID )\
return: nil \| bool noDraw

Spring.[GetUnitNoMinimap](#getunitnominimap) ( number unitID )\
return: nil \| bool noMinimap

Spring.[GetUnitNoSelect](#getunitnoselect) ( number unitID )\
return: nil \| bool noSelect

Spring.[GetFeatureLuaDraw](#getfeatureluadraw) ( number featureID )\
return: nil \| bool featureDraw

Spring.[GetFeatureNoDraw](#getfeaturenodraw) ( number featureID )\
return: nil \| bool noDraw

#### Minimap

Spring.[GetMiniMapGeometry](#getminimapgeometry) (  )\
return: number posX, number posY, number sizeX, number sizeY, bool minimized, bool maximized

Spring.[GetMiniMapDualScreen](#getminimapdualscreen) (  )\
return: bool false \| string "left" \| string "right"

Spring.[IsAboveMiniMap](#isaboveminimap) ( number x, number y )\
return: nil \| bool isAbove

#### (Build-)Menu

Spring.[GetActiveCommand](#getactivecommand) (  )\
return: nil \| number index \[, number cmd_id, number cmd_type, string cmd_name \]

Spring.[GetDefaultCommand](#getdefaultcommand) (  )\
return: nil \| number index \[, number cmd_id, number cmd_type, string cmd_name \]

Spring.[GetActiveCmdDescs](#getactivecmddescs) (  )\
return: nil \| table cmdDesc

cmdDesc contains:

    cmdDesc = {
        [1] = {
          id=number,
          type=number,
          name=string,
          action=string,
          tooltip=string,
          texture=string,
          cursor=string,
          hidden=boolean,
          disabled=boolean,
          showUnique=boolean,
          onlyTexture=boolean,
          params = { [1] = string, .. }
        }, ...
      }

Spring.[GetActiveCmdDesc](#getactivecmddesc) (  )\
return: nil \| table cmdDesc

cmdDesc contains:

    cmdDesc = {
          id=number,
          type=number,
          name=string,
          action=string,
          tooltip=string,
          texture=string,
          cursor=string,
          hidden=boolean,
          disabled=boolean,
          showUnique=boolean,
          onlyTexture=boolean,
          params = { [1] = string, .. }
      }

Spring.[GetCmdDescIndex](#getcmddescindex) ( number cmdID )\
return: nil \| number index

Spring.[GetActivePage](#getactivepage) (  )\
return: nil \| number pageNum, number maxPages

#### Build Facing

Spring.[GetBuildFacing](#getbuildfacing) (  )\
return: nil \| number facing

Spring.[GetBuildSpacing](#getbuildspacing) (  )\
return: nil \| number spacing

#### GatherMode & InvertQueueKey

Spring.[GetGatherMode](#getgathermode) (  )\
return: nil \| number gatherMode

Spring.[GetInvertQueueKey](#getinvertqueuekey) (  )\
return: nil \| number queueKey

#### Mouse States

Spring.[GetMouseState](#getmousestate) (  )\
return: number x, number y, bool leftPressed, bool middlePressed, bool rightPressed, bool offscreen

New in version 104.0 Sixth return value offscreen.\
X, Y are the screen coordinates, not world ones. This coordinate system starts in the lower left corner. For world coordinates see Spring.TraceScreenRay.

Spring.[GetMouseCursor](#getmousecursor) (  )\
return: string  name, number scale

Spring.[GetMouseStartPosition](#getmousestartposition) ( number mouseButton )\
return: nil \| number pressedX, number pressedY, number camPosX, number camPosY, number camPosZ, number dirX, number dirY, number dirZ

#### (Hot-)Keys

Spring.[GetKeyState](#getkeystate) ( number key )\
return: nil \| bool keyState

Spring.[GetModKeyState](#getmodkeystate) (  )\
return: bool alt, bool ctrl, bool meta, bool shift

Spring.[GetPressedKeys](#getpressedkeys) (  )\
return: { \[number code\] = bool, \[string name\] = bool, ... }

New in version 99.0: string name\
Returns the SDL1 codes for the pressed keys, first as an integer, a string containing the hex representation.\
Use Spring.[GetKeySymbol](/lua-unsyncedread#getkeysymbol) to convert to an SDL2 symbol.

Spring.[GetKeyCode](#getkeycode) ( string keysym )\
return: number keyCode

Returns the SDL1 code for the SDL2 symbol

Spring.[GetKeySymbol](#getkeysymbol) ( number key )\
return: string "keysym1", string "keysym2"

Converts an SDL1 keycode into an SDL2 keycode, represented as a hexadecimal string. For most cases, these values will be the same.

Spring.[GetKeyBindings](#getkeybindings) ( string keyset )\
return: nil \| table keyBindings

keyBindings contains:

    keyBindings = {
        [1] = {
          [string actionCmd] = string actionExtra,
          command   = string actionCmd,    &#123;&#123;new|97&#125;&#125;
          boundWith = string boundWith,    &#123;&#123;new|97&#125;&#125;
          extra     = string actionExtra,  &#123;&#123;new|97&#125;&#125;
        }, ...
      }

Spring.[GetActionHotKeys](#getactionhotkeys) ( string action )\
return: nil \| { \[1\] = string hotKey, ... }

#### Console

Spring.[GetLastMessagePositions](#getlastmessagepositions) (  )\
return: nil \| { \[1\] = { number x, number y, number z }, ... }

Spring.[GetConsoleBuffer](#getconsolebuffer) ( \[number maxLines\] )\
return: nil \| { \[1\] = { text = string, priority = number }, ... }

Spring.[GetCurrentTooltip](#getcurrenttooltip) (  )\
return: string tooltip

#### LOS Colors

Spring.[GetLosViewColors](#getlosviewcolors) (  )\
return: table always = {r,g,b}, table LOS = {r,g,b}, table radar = {r,g,b}, table jam = {r,g,b}, table radar2 = {r,g,b}

New in version 100

### Config

Spring.[GetConfigParams](#getconfigparams) (  )\
return: table configParams

Same information as `spring --list-config-vars`\
configParams contains:

    configParams = {
        {
          name = string,
          type = string,
          [ description = string, ]
          [ defaultValue = string, ]
          [ minimumValue = string, ]
          [ maximumValue = string, ]
          [ safemodeValue = string, ]
          [ declarationFile = string, ]
          [ declarationLine = number, ]
          [ readOnly = bool, ]
        },
        ...
      }

Spring.[GetConfigInt](#getconfigint) ( string name \[, number default \] )\
return: nil \| number configInt

Spring.[GetConfigFloat](#getconfigfloat) ( string name \[, number default \] )\
return: nil \| number configFloat

New in version 104.0

Spring.[GetConfigString](#getconfigstring) ( string name \[, number default \] )\
return: nil \| string configString

### FPS & GetDrawFrame

Spring.[GetFPS](#getfps) (  )\
return: number fps

Spring.[GetDrawFrame](#getdrawframe) (  )\
return: number low_16bit, number high_16bit

Spring.[GetVideoCapturingMode](#getvideocapturingmode) (  )\
return: bool videoCaptureAllowed

New in version 104.0

### Time

Spring.[GetGameSpeed](#getgamespeed) (  )\
return: number userSpeedFactor, number speedFactor, bool paused

Speed factors are by default 1.0, (the default simulation gamespeed) but are not 0 when the game is paused. Factor at 10x gamespeed is 10.0. New in version 98.0

Spring.[GetGameState](#getgamestate) (  )\
return: bool finishedLoading, bool loadedFromSave, bool locallyPaused, bool laggingWrtExpectedFromSimtime

New in version 105.0

Spring.[GetFrameTimeOffset](#getframetimeoffset) (  )\
return: nil \| number offset

Gets globalRendering-\>timeOffset, which contains the offset of the current draw frame from the last sim frame, expressed in fractions of a frame. Ideally, when running 30hz sim, and 60hz rendering, the draw frames should have and offset of either 0.0 frames, or 0.5 frames. When draw frames are not integer multiples of sim frames, some interpolation happens, and this timeoffset shows how far along it is.

Spring.[GetLastUpdateSeconds](#getlastupdateseconds) (  )\
return: nil \| number lastUpdateSeconds

Spring.[GetHasLag](#gethaslag) (  )\
return: bool hasLag

Spring.[GetTimer](#gettimer) (  )\
return: timer

This function returns a timer type object, which we can use a pair of to calculate the time difference between two timer objects with DiffTimers. However, this time is at best millisecond resolution.

Spring.[GetFrameTimer](#getframetimer) ( \[ bool lastFrameTime \] )\
return: timer

New in version 102.0\
Get a timer for the start of the frame, this should give better results for camera interpolations. If given an optional boolean true, then it returns the game-\>lastFrameTime instead of the lastFrameStart

Spring.[DiffTimers](#difftimers) ( timer cur, timer ago \[, bool inMilliseconds \] )\
return: number seconds

New in version 95.0\
Optional third argument (boolean) to return dt in milliseconds.

### Rendering

Spring.[GetMapSquareTexture](#getmapsquaretexture) ( number texSqrX, number texSqrY, number texMipLvl, string luaTexName )\
return: bool success

### Logging

Spring.[GetLogSections](#getlogsections) (  )\
return: table logSections = { "KeyBindings" = LOG.INFO, "Font" = LOG.INFO, "Sound" = LOG.WARNING, ... }

### Misc

Spring.[GetClipboard](#getclipboard) (  )\
return: string text

New in version 98.0

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua UnsyncedRead](https://springrts.com/wiki/Lua_UnsyncedRead).*
