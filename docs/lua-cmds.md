---
title: "Lua CMDs"
source_url: "https://springrts.com/wiki/Lua_CMDs"
categories:
  - "Lua"
---
# Lua CMDs

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua CMDs

## Options

**CMD.OPT_ALT**\
**CMD.OPT_CTRL**\
**CMD.OPT_SHIFT**\
**CMD.OPT_RIGHT**\
**CMD.OPT_INTERNAL**\
**CMD.OPT_META**

## Waitcodes

**CMD.WAITCODE_TIME**\
**CMD.WAITCODE_DEATH**\
**CMD.WAITCODE_SQUAD**\
**CMD.WAITCODE_GATHER**

## Insert/Remove Commands

To get the commandqueue use the following lua-call

### CommandQueues

**Spring.GetUnitCommands**\
**Spring.GetCommandQueue** (Alias)

     ( number unitID, number count ) -> nil | number commandQueueSize New in version 96
     -> nil | table commandQueueTable = {
        [1] = {
          "id"      = number,
          "params"  = { [1] = number, ...},
          "options" = {
            "coded"    = number,
            "alt"      = boolean,
            "ctrl"     = boolean,
            "shift"    = boolean,
            "right"    = boolean,
            "internal" = boolean,
            "meta"    = boolean
          }
        }, ...
      }

Use count = -1 to get all commands.

First, said "tags" aka "id" are unique command identifiers, so each command that gets inserted into a unit's command queue gets its unique "tag" number. (It is used to *sync* command queue operations, also it makes things much easier.) Editors Note: I fucking hate it when open source devs use the word easy. It is a clear indicator that someone spends a whole day finding out about a well hidden simple concept. Well at least we are on this journey together :)\
To look at those "tags" you can do the following: 

      local cmdQueue = Spring.GetUnitCommands(unitID, 100);
      if (#cmdQueue>0) then 
         local cmdTag = cmdQueue[1].tag
         Spring.Echo(cmdTag)
         ..
      end

**CMD.INSERT**

     options.ALT     -> treat param0 as a position instead of a tag 
     options.CONTROL -> use the build queue for factories 
     params[0] = command tag or position (negative numbers to reference
     the back of the queue and 0 the first)
     params[1] = insertCmd id 
     params[2] = insertCmd options (shift,alt,right click,etc.)
     params[3 ... N+2] = insertCmd params[0 ... N-1]

     Example:

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

        Spring.GiveOrderToUnit(unitID,
          CMD.INSERT,
          {-1,CMD.ATTACK,''CMD.OPT_SHIFT'',''unitID2''},
          {"alt"}
        );

</div>

Command structure dissection:

**What to do with the command - in our case insert:**

'CMD.INSERT'

**Place in the queue to insert:**

'-1'

**Type of command to insert:**

'CMD.ATTACK'

**Additional Information:**

If the unit is working down a shift queue, add it seemless into it

'CMD.OPT_SHIFT'

**TargetID or Position:**

'unitID2'

**The '-1' is the queue position and not a tag:**

'{"alt"}'

     if you insert cmd in pos 2 for example the rest of commands starting
     from 2 will be pushed back. 
     Ilustration: {cmdA, cmdB, cmdC, cmdD} => {cmdA, cmdB, NewCmd, cmdC, cmdD}

     
     Note: If you didn't already notice, the command params and
           the command options are twisted in the array (compared to GiveOrder)!
     
     Note2: The command options in the array/table is a number value!
            You have to use CMD.OPT_* in this case.
     
     Note3: The inserted command doesn't go through allowcommand callins, only CMD.INSERT does.
     

**CMD.REMOVE**

     options.ALT     -> use the parameters as commandIDs 
     options.CONTROL -> use the build queue for factories 
     params[0 ... N-1] = tags or commandIDs to remove

No clues what the above mean translated, but here is a working example of how to delete a buildorder from a factory:

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

       
     local facCmds = Spring.GetFactoryCommands(factoryID)
     
     if facCmds then -- nil check
        local cmd = facCmds[1]
        Spring.GiveOrderToUnit(factoryID, CMD.REMOVE, {i,cmd.tag}, {"ctrl"})
     end

</div>

## Commands

Note, the CMD\[\] table is bidirectional. That means: CMD\[CMD.STOP\] := "CMD_STOP"

**CMD.STOP**

     type CMDTYPE.ICON

**CMD.WAIT**

     type CMDTYPE.ICON

**CMD.TIMEWAIT**

     type CMDTYPE.NUMBER

**CMD.DEATHWAIT**

     type CMDTYPE.ICON_UNIT_OR_RECTANGLE

**CMD.SQUADWAIT**

     type CMDTYPE.NUMBER

**CMD.GATHERWAIT**

     type CMDTYPE.ICON

**CMD.MOVE**

     type CMDTYPE.ICON_MAP

**CMD.PATROL**

     type CMDTYPE.ICON_MAP

**CMD.FIGHT**

     type CMDTYPE.ICON_MAP

**CMD.ATTACK**

     type CMDTYPE.ICON_UNIT_OR_MAP

**CMD.AREA_ATTACK**

     type CMDTYPE.ICON_AREA

**CMD.GUARD**

     type CMDTYPE.ICON_UNIT

**CMD.AISELECT**

     type CMDTYPE.COMBO_BOX

**CMD.GROUPSELECT**

     type CMDTYPE.ICON

**CMD.GROUPADD**

     type CMDTYPE.ICON

**CMD.GROUPCLEAR**

     type CMDTYPE.ICON

**CMD.REPAIR**

     type CMDTYPE.ICON_UNIT_OR_AREA

**CMD.FIRE_STATE**

     type CMDTYPE.ICON_MODE

**CMD.MOVE_STATE**

     type CMDTYPE.ICON_MODE

**CMD.SELFD**

     type CMDTYPE.ICON

**CMD.LOAD_UNITS**

     type CMDTYPE.ICON_UNIT_OR_AREA

**CMD.LOAD_ONTO**

     type CMDTYPE.ICON_UNIT

**CMD.UNLOAD_UNITS**

     type CMDTYPE.ICON_UNIT_OR_AREA

**CMD.UNLOAD_UNIT**

     type CMDTYPE.ICON_MAP

**CMD.ONOFF**

     type CMDTYPE.ICON_MODE

**CMD.RECLAIM**

     type CMDTYPE.ICON_UNIT_FEATURE_OR_AREA

**CMD.CLOAK**

     type CMDTYPE.ICON_MODE

**CMD.STOCKPILE**

     type CMDTYPE.ICON

**CMD.DGUN**

     type CMDTYPE.ICON_MAP

**CMD.RESTORE**

     type CMDTYPE.ICON_AREA

**CMD.REPEAT**

     type CMDTYPE.ICON_MODE

**CMD.TRAJECTORY**

     type CMDTYPE.ICON_MODE

**CMD.RESURRECT**

     type CMDTYPE.ICON_UNIT_FEATURE_OR_AREA

**CMD.CAPTURE**

     type CMDTYPE.ICON_UNIT_OR_AREA

**CMD.AUTOREPAIRLEVEL**

     type CMDTYPE.ICON_MODE

**CMD.LOOPBACKATTACK**

     type CMDTYPE.ICON_MODE

**CMD.IDLEMODE**

     type CMDTYPE.ICON_MODE

**CMD.SET_WANTED_MAX_SPEED**

     type CMDTYPE.NUMBER

**CMD.SETBASE**

**CMD.INTERNAL**

     used in different ways

**A negative number means build command**\
The number is -unitDefID of the unittype that this command orders to be built.

      This means that build orders have no convenient CMD._____ string.
         The command id for build orders must always be a "minus" sign appended to an integer value.
      Spring.GiveOrderToUnit(unitID, -(unitDefID), {x,y,z(,facing)}, {"shift"})
         alternatively:
      Spring.GiveOrderToUnit(unitID, -UnitDefNames["unitname"].id, {x,y,z(,facing)}, {"shift"})
        'facing' is an optional integer parameter that controls unit's facing when placed.
         The values of (x,y,z) must all be number values (like the number "0"), or the build order will break.

## CommandTypes

Note, the CMDTYPE\[\] table is bidirectional. That means: CMDTYPE\[CMDTYPE.ICON\] := "CMDTYPE_ICON"

**CMDTYPE.ICON**

     expect 0 parameters in return

**CMDTYPE.ICON_MODE**

     expect 1 parameter in return (number selected mode)

**CMDTYPE.ICON_MAP**

     expect 3 parameters in return (mappos)

**CMDTYPE.ICON_AREA**

     expect 4 parameters in return (mappos+radius)

**CMDTYPE.ICON_UNIT**

     expect 1 parameters in return (unitid)

**CMDTYPE.ICON_UNIT_OR_MAP**

     expect 1 parameters in return (unitid) or 3 parameters in return (mappos)

**CMDTYPE.ICON_FRONT**

     expect 3 or 6 parameters in return (middle and right side of front if a front was defined)

**CMDTYPE.COMBO_BOX**

     expect 1 parameter in return (number selected option)

**CMDTYPE.ICON_UNIT_OR_AREA**

     expect 1 parameter in return (unitid) or 4 parameters in return (mappos+radius)

**CMDTYPE.ICON_UNIT_FEATURE_OR_AREA**

     expect 1 parameter in return (unitid or Game.maxUnits+featureid)
         or 4 parameters in return (mappos+radius)

**CMDTYPE.ICON_BUILDING**

     expect 3 parameters in return (mappos)

**CMDTYPE.ICON_UNIT_OR_RECTANGLE**

     expect 1 parameter in return (unitid)
         or 3 parameters in return (mappos)
         or 6 parameters in return (startpos+endpos)

**CMDTYPE.NUMBER**

     expect 1 parameter in return (number)

**CMDTYPE.CUSTOM**

     used with CMD_INTERNAL

**CMDTYPE.NEXT** next command page

     used with CMD_INTERNAL

**CMDTYPE.PREV** previous command page

     used with CMD_INTERNAL

## CmdIDs

Below is a table of all CMD table entries and their IDs:

|                         |     |
|-------------------------|-----|
| Command                 | ID  |
| FIRESTATE_NONE          | -1  |
| MOVESTATE_NONE          | -1  |
| STOP                    | 0   |
| MOVESTATE_HOLDPOS       | 0   |
| FIRESTATE_HOLDFIRE      | 0   |
| INSERT                  | 1   |
| MOVESTATE_MANEUVER      | 1   |
| FIRESTATE_RETURNFIRE    | 1   |
| WAITCODE_TIME           | 1   |
| WAITCODE_DEATH          | 2   |
| MOVESTATE_ROAM          | 2   |
| REMOVE                  | 2   |
| FIRESTATE_FIREATWILL    | 2   |
| FIRESTATE_FIREATNEUTRAL | 3   |
| WAITCODE_SQUAD          | 3   |
| OPT_META                | 4   |
| WAITCODE_GATHER         | 4   |
| WAIT                    | 5   |
| TIMEWAIT                | 6   |
| DEATHWAIT               | 7   |
| OPT_INTERNAL            | 8   |
| SQUADWAIT               | 8   |
| GATHERWAIT              | 9   |
| MOVE                    | 10  |
| PATROL                  | 15  |
| FIGHT                   | 16  |
| OPT_RIGHT               | 16  |
| LOOPBACKATTACK          | 20  |
| ATTACK                  | 20  |
| AREA_ATTACK             | 21  |
| GUARD                   | 25  |
| AISELECT                | 30  |
| OPT_SHIFT               | 32  |
| GROUPSELECT             | 35  |
| GROUPADD                | 36  |
| GROUPCLEAR              | 37  |
| REPAIR                  | 40  |
| FIRE_STATE              | 45  |
| MOVE_STATE              | 50  |
| SETBASE                 | 55  |
| INTERNAL                | 60  |
| OPT_CTRL                | 64  |
| SELFD                   | 65  |
| SET_WANTED_MAX_SPEED    | 70  |
| LOAD_UNITS              | 75  |
| LOAD_ONTO               | 76  |
| UNLOAD_UNITS            | 80  |
| UNLOAD_UNIT             | 81  |
| ONOFF                   | 85  |
| RECLAIM                 | 90  |
| CLOAK                   | 95  |
| STOCKPILE               | 100 |
| MANUALFIRE              | 105 |
| DGUN                    | 105 |
| RESTORE                 | 110 |
| REPEAT                  | 115 |
| TRAJECTORY              | 120 |
| RESURRECT               | 125 |
| OPT_ALT                 | 128 |
| CAPTURE                 | 130 |
| AUTOREPAIRLEVEL         | 135 |
| IDLEMODE                | 145 |

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua CMDs](https://springrts.com/wiki/Lua_CMDs).*
