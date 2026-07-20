---
title: "LuaTutorials::InterCommunications"
source_url: "https://springrts.com/wiki/LuaTutorials::InterCommunications"
categories:
  - "Lua"
---
# LuaTutorials::InterCommunications

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< LuaTutorials::InterCommunications

 Note [LuaUnitScripts](/animation-luascripting) are \`gadgets synced\`.

## Inter Lua Communications

### _gadgets_unsynced">gadgets synced -\> gadgets unsynced

- [RulesParams](/lua-syncedctrl#rulesparams) [(read funcs)](/lua-syncedread#rulesparams)
- [SendToUnsynced](/lua-system#synced)
- [SYNCED](/lua-sync-to-unsync)

### _widgets">gadgets synced -\> widgets

- [RulesParams](/lua-syncedctrl#rulesparams) [(read funcs)](/lua-syncedread#rulesparams)

### _widgets">gadgets unsynced -\> widgets

- Script.LuaUI

### _gadgets_synced">widgets, gadgets unsynced -\> gadgets synced

- [LuaMessages](/lua-unsyncedctrl#sendluamessage)

## Intra Lua Communications

### _gadgets_synced">gadgets synced -\> gadgets synced

- [RulesParams](/lua-syncedctrl#rulesparams) [(read funcs)](/lua-syncedread#rulesparams)
- GG
- Script.LuaRules / Script.LuaGaia

### _gadgets_unsynced">gadgets unsynced -\> gadgets unsynced

- GG
- Script.LuaRules / Script.LuaGaia

### _widgets">widgets -\> widgets

- WG

### _widgets_(other_players)">widgets -\> widgets (other players)

- [LuaMessages](/lua-unsyncedctrl#sendluamessage)

### Further Reading

<a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=11408" class="external text" rel="nofollow">Communicating between Gadgets (forum thread)</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [LuaTutorials::InterCommunications](https://springrts.com/wiki/LuaTutorials::InterCommunications).*
