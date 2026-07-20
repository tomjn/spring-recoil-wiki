---
title: "Lua-LuaCOB"
source_url: "https://springrts.com/wiki/Lua-LuaCOB"
categories:
  - "Deprecated"
  - "Lua"
---
# Lua-LuaCOB

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua-LuaCOB

**NOTE LuaCob will merged with LuaRules in 76b2**

## Introduction

To use Lua code in your BOS/COB files, you can either include the gadgetHandler (include it in the mod, see the CA mod or include it from the springcontent.sdz) or you create your own enviroment:

- create a mod-level directory LuaCOB/,
- make a LuaCOB/main.lua file. (Note: it's LuaRules/main.lua now)

Any additional files need to be included with a

    include("LuaCOB/additional_file.lua" [, fenvTable])

If you don't know what a fenvTable is, don't worry, you probably don't need it anyway. More information can be found on <a href="http://www.lua.org" class="external text" rel="nofollow">the Lua site</a>. It it highly recommended to read the manual and the tutorials found there. Note that Spring 76b1 used Lua version is 5.1.2, so please take note which version of the manual you're reading.

Also note that the usual Lua functions for executing code in other files (`dofiles()`, `require()`) are disabled for technical reasons.

## Lua">Interfacing COB-\>Lua

All Lua functions that are called by COB are given three parameters:

- unitID - ID of the unit calling the function,
- unitDefID - ID of the unitDef,
- teamID - self-explanatory.

You can call scripts with any (enough for all practical purpouses) amount of additional arguments.

Example functions:

     function GetNearestEnemy(unitID, unitDefID, teamID, radius)
       local px, py, pz = Spring.GetUnitPosition(unitID)
       if (px == nil) then
         return
       end
          
       local nearDist = 1.0e20
       local nearUnit
       local units = Spring.GetUnitsInCylinder(px, pz, radius)
       for _,enemyID in ipairs(units) do
         if (not Sim.IsUnitAllied(enemyID)) then             
           local ex, ey, ez = Spring.GetUnitPosition(enemyID)
           if (ex ~= nil) then
             local dx, dy, dz = (px - ex), (py - ey), (pz - ez)
             local dist = (dx * dx) + (dy * dy) + (dz + dz)
             if (dist < nearDist) then
               nearUnit = enemyID
               nearDist = dist
             end
           end 
         end   
       end   

       if (nearUnit == nil) then
         return -1
       else
         return nearUnit
       end
     end

Please note that returning tables doesn't currently work as one could expect. *(Description what it does here)* If you want to return multiple values from a table, you need to do it like this:

    function ReturnSomeValues(u, ud, t, ...)
        return arg[1], arg[2], arg[3]  -- instead of arg
    end

### Calling Lua from BOS

To call a Lua function from BOS code, you need to declare it first:

    // BOS
    lua_MyFunction() { return 0; }

Then just call this script. The `lua_` prefix does its magic and routes the call to Lua code instead of calling the usual BOS code. Note that arguments don't matter, they are passed anyway:

    call-script lua_MyFunction(arg1, arg2);

#### Getting output

If you wish to print out some debugging info, please note that `print` and `io.write` don't quite work in Windows versions of Spring, since stdout isn't availible (or is well-hidden.) Use `Spring.Echo("a string")`, this will print a message to the Spring console and into the infolog.

#### LUA0..9

    // the GET/SET constants
    #define LUA0 110
    #define LUA1 111
    #define LUA2 112
    #define LUA3 113
    #define LUA4 114
    #define LUA5 115
    #define LUA6 116
    #define LUA7 117
    #define LUA8 118
    #define LUA9 119

`get LUA0` is used to check whether call succeeded (1 if true, 0 otherwise.) LUA1..9 store return values, e.g. `lua_ReturnSomeValues` above would put its first argument into `get LUA1`, second into `get LUA2`, and so on.

### Summary

Steps needed to call a Lua function in a BOS call-script call:

- define a Lua function `MyFunction(unitID, unitDefID, teamID, ...)` in LuaCOB/main.lua or a file included by it
- define a BOS/COB script `lua_MyFunction() { return 0; }` so the compiler knows about it
- call your function with `call-script lua_MyFunction()`
- return values can be found in `get LUA1..9`
- `get LUA0` returns 1 when call was successful (regardless of its return values) and 0 in case of failure.

#### Examples of code

- <a href="http://neoteric.pl/~imbaczek/spring/messages_lua.zip" class="external text" rel="nofollow">Inter-unit communication</a> (shameless plug ;p) - a library that allows passing messages between units and reading/writing of public variables exposed by them.Included is a tech demo involving modified [Nanoblobs](/nanoblobs) 0.64. Patch, start the game, make a sheep and see for yourself.
- Your own!

## COB">Interfacing Lua-\>COB

Lua:

    Spring.CallCOBScript(unitID, "CustomScript", retArgCount, arg1, ..., argN)
    Spring.CallCOBScriptCB(unitID, "CustomScript", retArgCount, callbackData, arg1, ..., argN)

    retArgCount:  the number of arguments expected to be returned
    callbackData: number passed to CobCallback() when the cob call completes

COB:

    CustomScript(arg1, ..., argN) { ... }

One particularly useful COB script, since Lua doesn't seem to have a way of making `get SOMETHING(args)` requests (but it may provide other ways of getting the same information):

    LuaGet(r, cmd, p1, p2, p3, p4)
    {
     if (r == 0) { r = get cmd;                 return r }
     if (r == 1) { r = get cmd(p1,  0,  0,  0); return r }
     if (r == 2) { r = get cmd(p1, p2,  0,  0); return r }
     if (r == 3) { r = get cmd(p1, p2, p3,  0); return r }
     if (r == 4) { r = get cmd(p1, p2, p3, p4); return r }

     return 1234;
    }

## References

1.  <a href="http://spring.clan-sy.com/phpbb/viewforum.php?f=23" class="external text" rel="nofollow">Spring Lua Scripts forum</a>
2.  <a href="http://spring.clan-sy.com/phpbb/viewtopic.php?t=9329" class="external text" rel="nofollow">trepan's description of Lua-COB interface</a> - a little bit outdated, but still worth a read

## Thanks

trepan for doing the hard work of integrating Lua into Spring!

NOTE from trepan:

     Thanks, but there were lua startscripts before I started doing
     any Spring coding. The benefits of the new LuaCob, LuaGaia, and
     LuaRules scripts are that they can be loaded from map/mod archives,
     and that they all use the same base libraries (as does LuaUI).
     They also have significantly more features then the current
     startscript code (ex: more call-ins and call-outs, the ability to
     render graphics in several different modes, play sounds, etc...)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua-LuaCOB](https://springrts.com/wiki/Lua-LuaCOB).*
