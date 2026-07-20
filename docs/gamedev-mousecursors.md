---
title: "Gamedev:MouseCursors"
source_url: "https://springrts.com/wiki/Gamedev:MouseCursors"
categories:
  - "Game_Dev"
---
# Gamedev:MouseCursors

<div class="mw-parser-output">

[Development](/development-main) \< [Game Development](/gamedev-main) \< Gamedev:MouseCursors

## Mouse Cursors

### Location

Cursors for Spring are stored in the `Anims/` directory.

### Supported Image Formats

The cursors have to be in either:

- png
- tga
- bmp

To make transparent sections in bmp's use RGB(84, 84, 252).\
The images don't have to be squared neither power-of-two, but those are preferred and the size should be \<=128.

### Filename

Even if your cursor isn't animated, it must have the \_0 at the end of its name. Only when using a .txt this isn't needed.

### Animated Cursors

#### Via Filenames

To make animated cursors, just make a sequence where the filenames start with '\_0' at the end of the first in the sequence, going on sequentially until the last frame. This uses the default \`frame time\` (= the time each sprite is visible) of 0.1sec.

#### Via .txt

You can also create a .txt file with further specifications for your cursor:

`cursorattack.txt:`

<div>

    hotspot %hotspot
    frame %filename_0 %timespan_0
    frame %filename_1 %timespan_1
    frame %filename_2 %timespan_2
    ...

</div>

The `hotspot` tag is optional and can be either `topleft` or `center`.\
Note, the filenames have to contain the full path, e.g. `Anims/CursorMove.png`.

## Engine Cursors

Spring itself just needs one cursor and that's `cursornormal`, if this isn't present in your game Spring will crash with an ContentError.

Still there are additional cursors the engine will use when present:\
(When cursors are double named in the table, it means that the following ones are fallbacks.)

<div data-align="center">

|                  |                     |               |
|------------------|---------------------|---------------|
| Cursor Name      | Internal Name/Usage | Def. Hot Spot |
| cursornormal     |                     | TopLeft       |
| cursorareaattack | Area attack         | Center        |
| cursorattack     | Area attack         | Center        |
| cursorattack     | Attack              | Center        |
| cursorattackbad  | AttackBad           | Center        |
| cursorattack     | AttackBad           | Center        |
| cursorbuildbad   | BuildBad            | Center        |
| cursorbuildgood  | BuildGood           | Center        |
| cursorcapture    | Capture             | Center        |
| cursorcentroid   | Centroid            | Center        |
| cursordwatch     | DeathWait           | Center        |
| cursorwait       | DeathWait           | Center        |
| cursordgun       | DGun                | Center        |
| cursorattack     | DGun                | Center        |
| cursorfight      | Fight               | Center        |
| cursorattack     | Fight               | Center        |
| cursorgather     | GatherWait          | Center        |
| cursorwait       | GatherWait          | Center        |
| cursordefend     | Guard               | Center        |
| cursorpickup     | Load units          | Center        |
| cursormove       | Move                | Center        |
| cursorpatrol     | Patrol              | Center        |
| cursorreclamate  | Reclaim             | Center        |
| cursorrepair     | Repair              | Center        |
| cursorrevive     | Resurrect           | Center        |
| cursorrepair     | Resurrect           | Center        |
| cursorrestore    | Restore             | Center        |
| cursorrepair     | Restore             | Center        |
| cursorselfd      | SelfD               | Center        |
| cursornumber     | SquadWait           | Center        |
| cursorwait       | SquadWait           | Center        |
| cursortime       | TimeWait            | Center        |
| cursorwait       | TimeWait            | Center        |
| cursorunload     | Unload units        | Center        |
| cursorwait       | Wait                | Center        |

</div>

Example: A `cursorattack_0.bmp` (same for `cursorattack.txt`) in your `Anims/` dir will automatically used for attack commands.

## Lua/Custom Cursors

### Runtime Replacing Default Cursors

To runtime change cursors (e.g. per-faction cursors or user-configurable ones) you may want to use [Spring.ReplaceMouseCursor](/lua-unsyncedctrl#gui-2). Example:

    Spring.ReplaceMouseCursor("cursorattack", "faction2_subdir/cursorattack")
    Spring.ReplaceMouseCursor("cursormove", "faction2_subdir/cursormove")
    ...

### Give Custom Commands a Cursor

First you need to register your custom cursor with `Spring.AssignMouseCursor`. After that you can use it in `Spring.EditUnitCmdDesc/Spring.InsertUnitCmdDesc`:

    --loads cursor from foo_cursor.txt, foo_cursor_0.bmp, ...
    Spring.AssignMouseCursor("mahcursor", "foo_cursor", false)

    --NOTE: this is SYNCED code!
    --add custom cmddesc
    Spring.InsertUnitCmdDesc(unitID, {
      ...
      cursor = "mahcursor",
      ...
    })

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Gamedev:MouseCursors](https://springrts.com/wiki/Gamedev:MouseCursors).*
