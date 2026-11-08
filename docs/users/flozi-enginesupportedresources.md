---
title: "User:Flozi/EngineSupportedResources"
source_url: "https://springrts.com/wiki/User:Flozi/EngineSupportedResources"
---
# User:Flozi/EngineSupportedResources

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

A little scrapbook of (incomplete) ideas - purely from a game dev, not engine dev perspective - about how engine-supported multiple resources might look. Realistically, such support would be a huge undertaking and probably not worth the effort seen as most of this can already be done purely through lua, and the 2 engine 'hardcoded' resources are flexible enough to be used in various ways (c.f. S44 & MCL). Backwards compatibility would also be a maintenance nightmare.

## Lua SyncedRead

**Spring.GetTeamResources**

( number teamID, string resourceName ) -\> \

nil \| number currentLevel,

        number storage,\
        number pull,\
        number income,\
        number expense,\
        number share,\
        number sent,\
        number received\

**Spring.GetTeamResourceStats**

( number teamID,  string resourceName ) -\>\
  nil \| number used,\
        number produced,\
        number excessed,\
        number received,\
        number sent\

**Spring.GetUnitResources**

( number unitID ) -\> nil \| {make = {metal = 1.0, ...}, uses = {energy = 5.0, ...&#125;&#125;\

**Spring.GetUnitHarvestStorage**

( number unitID ) -\> nil \| {coal = 50, gold = 2 ...}\

## Lua SyncedCtrl

### Team

**Spring.AddTeamResource**

( number teamID, string resourceName, number amount ) -\> nil\
( number teamID, { \["metal"\] = amount, ... } ) -\> nil\

**Spring.UseTeamResource**

( number teamID, \
  string resourceName, number amount \|\
  { \["metal"\] = number amount, ...}\
) -\> nil \| boolean hadEnough\

**Spring.SetTeamResource**

( number teamID, string resourceName, number amount, bool storage = false ) -\> nil\

**Spring.SetTeamShareLevel**

( number teamID, string resourceName, number amount ) -\> nil\

**Spring.ShareTeamResource**

( number teamID_src, number teamID_recv, string resourceName, number amount ) -\> nil\

### Unit

**Spring.SetUnitResourcing**

( number unitID,\
  string resourceName, bool conditional, number amount \|\
  { \["metal"\] = number amount, ... }\
) -\> nil\

**Spring.AddUnitResource**

( number unitID, string resourceName, number amount ) -\> nil\
( number unitID, { \["metal"\] = amount, ... } ) -\> nil\

**Spring.UseUnitResource**

( number unitID, string resourceName, number amount ) -\> nil \| boolean okay\
( number unitID, { \["metal"\] = amount, ... } ) -\> nil \| boolean okay\

**Spring.SetUnitHarvestStorage**

( number unitid, string resourceName, number amount )\
( number unitID, { \["metal"\] = amount, ... } ) -\> nil\

## Unit/FeatureDefs

\<syntaxhighlight lang="lua" line='line'\>resources = { cost = { -- features only support this, used for reclamation values metal = 50, energy = 130, coal = 100, }, makes = { metal = 1.0, }, uses = { energy = 5.0, }, extracts = { metal = {radius = 5.0, amount = 1.0}, coal = {radius = 10.0, amount = 5.0}, }, generates = { wind = {energy = 25}, tidal = {gold = 5}, -- panning or something, w/e it is an example! }, storage = { metal = 50, harvest = 100, -- a single harvestStorage or per-resource? }, }\</syntaxhighlight\>

## Gamedata/Resources.lua

Old one is renamed to Textures.lua or equivalent

return {\
    metal = {\
        extractable = true, -- all resources can be extractable, \
                    --  but for now only from the current single 'metal map'\
    },\
    energy = {\
        tidal = true,\
        wind = true,\
    },\
    gold = {\
        harvestable = true, -- only resources which have this set can fill a units harvestStorage \
                    -- when reclaimed from a unit or feature\
        tidal = true,\
    },\
    coal = {\
        extractable = true,\
        harvestable = true,\
    },\
}

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Flozi/EngineSupportedResources). Original page: [User:Flozi/EngineSupportedResources](https://springrts.com/wiki/User:Flozi/EngineSupportedResources).*
