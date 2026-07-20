---
title: "Template:LuaCallin"
source_url: "https://springrts.com/wiki/Template:LuaCallin"
---
# Template:LuaCallin

<div id="lua-callin-usage-example" class="section mw-parser-output">

## Lua Callin usage example

    &#123;&#123;LuaCallin
    |name = AllowUnitTransfer
    |args = unitID, unitDefID, oldTeam, newTeam, capture
    |return = &#123;&#123;type|bool&#125;&#125; allow 
    |info = Called just before a unit is transferred to a different team, the boolean return value determines whether or not the transfer is permitted.
    &#125;&#125;

addon.[AllowUnitTransfer](#allowunittransfer)(unitID, unitDefID, oldTeam, newTeam, capture)\
return: bool allow

Called just before a unit is transferred to a different team, the boolean return value determines whether or not the transfer is permitted.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Template:LuaCallin](https://springrts.com/wiki/Template:LuaCallin).*
