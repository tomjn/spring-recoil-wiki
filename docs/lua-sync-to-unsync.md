---
title: "Lua sync to unsync"
source_url: "https://springrts.com/wiki/Lua_sync_to_unsync"
categories:
  - "Lua"
---
# Lua sync to unsync

<div id="synced---unsynced-communication" class="section mw-parser-output">

## _Unsynced_Communication">Synced -\> Unsynced Communication

### Using SendToUnsynced

Currently, the recommended way is to use the SendToUnsynced call-in to send an event to the unsynced portion of a gadget. It's also possible to send an event from a gadget to a Widget. First, you send an 'internal event' from synced to unsynced space, within the gadget, then you can create an event which may be subscribed to by any widget. Follows an image showcasing that flow and working/tested code:

[<img src="/images/Sync_unsync_comm.png" decoding="async" width="670" height="399" alt="Sync unsync comm.png" />](/images/Sync_unsync_comm.png)\
<a href="https://pastebin.com/b1eVWn1d" class="external free" rel="nofollow">https://pastebin.com/b1eVWn1d</a>

Bear in mind that only one widget can hook to one LuaUI event at once, trying to listen to it in multiple widgets will lead to erratic behavior. Workaround here would be firing multiple LuaUI events, one for each consuming widget.\

The first parameter in the event handler (in the example, it's named 'cmd' in HandleCommCountEvent) is rarely used. It holds the name of the synced event, so you know what synced event fired the function, as in the following example:

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

    local function func(str)
        if str == "abcd" then
            -- do something
        elseif str == "efgh"
            -- do another thing
        end
    end

    gadgetHandler:AddSyncAction("abcd", func)
    gadgetHandler:AddSyncAction("efgh", func)

    SendToUnsynced("abcd")

</div>

Futher reading in the following forum thread: <a href="https://springrts.com/phpbb/viewtopic.php?t&amp;t=11408" class="external free" rel="nofollow">https://springrts.com/phpbb/viewtopic.php?t&amp;t=11408</a>

### Using globals (96.0 and previous)

When making a gadget you will sometimes want to combine synced and unsynced code.

For example if you do some things with units, that code will need to be synced.

The UnitDestroyed, UnitFinished etc. callins can only be called in synced code. Using them inside unsynced code is not going to work.

If you want to draw on the screen (for example to mark units) then the drawing will have to happen in unsynced code.

The following example demonstrates how to change the value inside the synced block of code and read the value in the unsynced block of code:

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

    if (gadgetHandler:IsSyncedCode()) then
       --SYNCED CODE
       local number = 10               -- declaring local variable 'number'
       function gadget:SomeSyncedCallin(...)
          number=number+1              -- increment variable's value by one
          _G.number=number             -- save the new value into a global variable
       end
    else
       --UNSYNCED CODE
       function gadget:SomeUnsyncedCallin(...)
          Spring.Echo(SYNCED.number)   -- print the global variable's value on screen
       end
    end

</div>

### 97.0+

As of 97.0 unsynced gets most of the [callins](/lua-callins) available to synced (excepting those which control synced actions e.g. AllowUnitCreation etc) which means that forwarding data from synced to unsynced is now not always required. Additionally in 97.0 there were changes to the behaviour of the `SYNCED` table described above.

Change 1: `SYNCED` does a copy on access now and so is slow:\

**Bad:**

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

    for i=1,100 do ... SYNCED.foo[i] ... end

</div>

**Good:**

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

    local foo = SYNCED.foo; for i=1,100 do ... foo[i] ... end

</div>

Change 2: `SYNCED.` can't be localized in global scope anymore:\

**Bad:**

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

    local foo = SYNCED.foo;    function gadget:DrawWorld() ... foo ... end

</div>

**Good:**

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

    function gadget:DrawWorld() local foo = SYNCED.foo; ... foo ... end

</div>

Here is a (older) description by quantum:

    [LCC]quantum[0K] every time there  is a new target, i send "addTarget" and its number to unsynced
    [LCC]quantum[0K] when a target is removed from the list, i send "removeTarget" and its number
    [LCC]quantum[0K] this wierd stuff:
    [LCC]quantum[0K]   _G.laserEventArgs = eventArgs
    [LCC]quantum[0K]   SendToUnsynced("LaserEvent")
    [LCC]quantum[0K]   _G.laserEventArgs = nil
    [LCC]quantum[0K] puts the eventArgs table somewhere were unsynced can find it
    [LCC]quantum[0K] sends a signal to unsynced called "LaserEvent"
    [LCC]quantum[0K] and removes the table
    [LCC]quantum[0K] on the unsynced side, _G.laserEventArgs becomes SYNCED.laserEventArgs
    [LCC]quantum[0K] this copies it to another table, ready for reuse:   for k, v in spairs(SYNCED.laserEventArgs) do
    [LCC]quantum[0K]     eventArgs[k] = v
    [LCC]quantum[0K]   end
    [LCC]quantum[0K] also, this: gadgetHandler:AddSyncAction("LaserEvent", HandleLaserEvent)
    [LCC]quantum[0K] means that i want the HandleLaserEvent function to be called every time i do SendToUnsynced("LaserEvent")

<a href="http://pastebin.com/hMHv3Lrf" class="external free" rel="nofollow">http://pastebin.com/hMHv3Lrf</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua sync to unsync](https://springrts.com/wiki/Lua_sync_to_unsync).*
