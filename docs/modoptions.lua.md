---
title: "Modoptions.lua"
source_url: "https://springrts.com/wiki/Modoptions.lua"
categories:
  - "Gamedata"
---
# Modoptions.lua

<div class="mw-parser-output">

Note: map options (`mapoptions.lua`) and game options (`modoptions.lua`) are basically the same, so one page for both.

## Purpose

Allow players to set game variables via lobby.

## Reading

Use [these functions.](/lua-syncedread#mod-2fmap-options)

To avoid errors **check modoptions for being nil**, in case the game was not started by a lobby. Otherwise you get "*attempt to index local 'modOptions' (a nil value)*"

    local lolfactor = 100    --some default value to be used when no modoptions are present
    local modOptions = Spring.GetModOptions()
    if (modOptions) then
        lolfactor = modOptions.lolfactor
    else
        Spring.Echo ("no modoptions are set")
    end
    Spring.Echo ("lolfactor = " .. lolfactor)
    --do something with lolfactor--

## Examples

### Some simple example

Allow players to set start resources.

    local opts= {
        {
        key="startingmetal",
        name="Start Metal",
        desc="How much metal at start?",
        type   = 'number',  
        def    = 4000,
        min    = 1,
        max    = 40000,
        step   = 1,
        },
    return opts

The gadget that gives the start resources reads it like this:

    local startingmetal=4000
    local modOptions = Spring.GetModOptions()
    if (modOptions) then startingmetal = modOptions.startingmetal or 4000 end
    Spring.SetTeamResource(teamID, "m", startingmetal)

## links

zero-K: <a href="http://code.google.com/p/zero-k/source/browse/trunk/mods/zk/ModOptions.lua" class="external free" rel="nofollow">http://code.google.com/p/zero-k/source/browse/trunk/mods/zk/ModOptions.lua</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Modoptions.lua](https://springrts.com/wiki/Modoptions.lua).*
