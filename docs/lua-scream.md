---
title: "Lua Scream"
source_url: "https://springrts.com/wiki/Lua_Scream"
categories:
  - "Lua"
---
# Lua Scream

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua Scream

## Scream UserData Object

**Script.CreateScream**

     ( ) -> userdata scream

     This creates an userdata object, which calls a special
     user-defined function, when the object gets destroyed
     (->garbage collector).
     You use it like the follow:

     local myScream = Script.CreateScream()
     myScream.func  = function() Spring.Echo("AHHHHHH") end

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua Scream](https://springrts.com/wiki/Lua_Scream).*
