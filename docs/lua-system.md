---
title: "Lua System"
source_url: "https://springrts.com/wiki/Lua_System"
categories:
  - "Lua"
---
# Lua System

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua System

## All Lua Contexts

Script.[Kill](#kill) (  )\
return: nil

No description available

Script.[GetName](#getname) (  )\
return: string luaInstanceName

Returns the luaInstanceName (e.g. "LuaUI", "LuaRules", "LuaGaia", ...).

Script.[GetSynced](#getsynced) (  )\
return: bool is_synced

No description available

Script.[GetFullCtrl](#getfullctrl) (  )\
return: bool has_fullctrl

No description available

Script.[GetFullRead](#getfullread) (  )\
return: bool has_fullread

No description available

Script.[GetCtrlTeam](#getctrlteam) (  )\
return: number ctrl_teamID

No description available

Script.[GetReadTeam](#getreadteam) (  )\
return: number read_teamID

No description available

Script.[GetReadAllyTeam](#getreadallyteam) (  )\
return: number read_allyTeamID

No description available

Script.[GetSelectTeam](#getselectteam) (  )\
return: number select_teamID

Defines which teamunits can be selected via Spring.SelectUnitMap/Spring.SelectUnitArray.

Script.[GetGlobal](#getglobal) (  )\
return: nil \| table globalEnv

Returns nil if not in dev-mode.

Script.[GetRegistry](#getregistry) (  )\
return: nil \| table registryEnv

Returns nil if not in dev-mode.

Script.[GetCallInList](#getcallinlist) (  )\
return: table known_callins

Known CallIns are:

     known_callins = {
       ["CallInName"] = { unsynced = boolean, controller = boolean }, (`controller` is true for
          all CallIns which's return values are used by the engine for synced code,
           e.g. "AllowUnitCreation" is a controller)
       ...
     }

Script.[IsEngineMinVersion](#isengineminversion) ( major \[, minor \[, commits \]\] )\
return: nil \| boolean isMinVersion

No description available

### Special team constants

number [NO_ACCESS_TEAM](#no-access-team)

No description available

number [ALL_ACCESS_TEAM](#all-access-team)

No description available

## LuaUI only

Spring.[SetShockFrontFactors](#setshockfrontfactors) ( number minArea, number minPower, number distAdj )\
return: nil

No description available

Spring.[UpdateCallIn](#updatecallin) ( string callin_name )\
return: nil

No description available

## LuaGadgets only

### Synced

number [COBSCALE](#cobscale)

Number containing the cobscale factor, which is applied to transform the variables assigned via unit cob animation scripts for use inside the engine (default: 65536).

Script.[AddActionFallback](#addactionfallback) ( string command, string help )\
return: nil \| boolean ???

No description available

Script.[RemoveActionFallback](#removeactionfallback) ( string command )\
return: nil \| boolean ???

No description available

Script.[UpdateCallIn](#updatecallin) ( string callin_name )\
return: nil

No description available

Script.[SetWatchFeature](#setwatchfeature) ( number featureDefID, boolean enable )\
return: nil

Enables the \`UnitFeatureCollision\` callin for a specific [FeatureDef](/gamedev-featuredefs).

Script.[GetWatchFeature](#getwatchfeature) ( number featureDefID )\
return: nil \| boolean enabled

No description available

Script.[SetWatchUnit](#setwatchunit) ( number unitDefID, boolean enable )\
return: nil

Enables the \`UnitUnitCollision\`, \`UnitFeatureCollision\` and \`UnitMoveFailed\` callins for a specific [UnitDef](/gamedev-unitdefs).

Script.[GetWatchUnit](#getwatchunit) ( number unitDefID )\
return: nil \| boolean enabled

No description available

Script.[SetWatchWeapon](#setwatchweapon) ( number weaponDefID, boolean enable )\
return: nil

Enables the \`Explosion\` and (as of 0.83+) \`ProjectileCreated\` and \`ProjectileDestroyed\` callins for a specific WeaponDef.

Script.[GetWatchWeapon](#getwatchweapon) ( number weaponDefID )\
return: nil \| boolean enabled

No description available

Script.[GetWatchWeapon](#getwatchweapon) ( number weaponDefID )\
return: nil \| boolean enabled

No description available

[SendToUnsynced](#sendtounsynced) ( arg1, arg2, ... )\
return: nil

Just nil, number, string and boolean datatypes are allowed as arguments! NO tables, userdatas, ...

[CallAsTeam](#callasteam) ( number teamID, lua_function f, arg1, arg2, ... )\
return: nil

or\
[CallAsTeam](#callasteam) ( table access, lua_function f, arg1, arg2, ... )\
return: nil

LOS checking depends on the \`selected\` team, this functions allows to select another one.

     access = {
       [ctrl = number teamID,]
       [read = number teamID,]
       [select = number teamID,]
     }

### Unsynced

Script.[UpdateCallIn](#updatecallin) ( string callin_name )\
return: nil

No description available

[CallAsTeam](#callasteam) ( number teamID, lua_function f, arg1, arg2, ... )\
return: nil

or\
[CallAsTeam](#callasteam) ( table access, lua_function f, arg1, arg2, ... )\
return: nil

LOS checking depends on the \`selected\` team, this functions allows to select another one.

     access = {
       [ctrl = number teamID,]    (limits Spring.GiveOrderXYZ)
       [read = number teamID,]    (limits reading of unit params, e.g. Spring.GetUnitLosState)
       [select = number teamID,]    (limits Spring.SelectUnitXYZ)
     }

## LuaRules only

### Synced

Script.[PermitHelperAIs](#permithelperais) ( boolean permit )\
return: nil

No description available

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua System](https://springrts.com/wiki/Lua_System).*
