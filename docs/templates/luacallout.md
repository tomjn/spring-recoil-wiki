---
title: "Template:LuaCallout"
source_url: "https://springrts.com/wiki/Template:LuaCallout"
---
# Template:LuaCallout

<div class="mw-parser-output">

## Lua Callout usage example

This template creates an anchored entry meant for Lua functions. It allows for a function prefix, funtion name, up to 9 function argument slots, info about the returned variable(s) and a description.

    &#123;&#123;LuaCallout
    |prefix = Spring.
    |name = UseTeamResource
    |arg1 = &#123;&#123;type|number&#125;&#125; teamID
    |arg2 = &#123;&#123;type|string&#125;&#125; "metal" &#123;&#123;pipe&#125;&#125; "energy"
    |arg3 = &#123;&#123;type|number&#125;&#125; amount &#123;&#123;pipe&#125;&#125; { metal = &#123;&#123;type|number&#125;&#125; amount, energy = &#123;&#123;type|number&#125;&#125; amount } 
    |arg4 =
    |arg5 =
    |arg6 =
    |arg7 =
    |arg8 =
    |arg9 =
    |return = &#123;&#123;type|nil&#125;&#125; &#123;&#123;pipe&#125;&#125; &#123;&#123;type|bool&#125;&#125; hadEnough
    |info = Imposes a one-off usage of resources on the given team. The return value indicates whether or not the team had sufficient resources to meet the usage demand.
    &#125;&#125;

Spring.[UseTeamResource](#useteamresource) ( number teamID, string "metal" \| "energy", number amount \| { metal = number amount, energy = number amount } )\
return: nil \| bool hadEnough

Imposes a one-off usage of resources on the given team. The return value indicates whether or not the team had sufficient resources to meet the usage demand.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Template:LuaCallout](https://springrts.com/wiki/Template:LuaCallout).*
