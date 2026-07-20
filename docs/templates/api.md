---
title: "Template:API"
source_url: "https://springrts.com/wiki/Template:API"
---
# Template:API

<div class="mw-parser-output">

    &#123;&#123;API <!-- Callout example -->
    |prefix = Spring
    |name = UseTeamResource
    |arg1 = &#123;&#123;type|number&#125;&#125; teamID
    |arg2 = &#123;&#123;type|string&#125;&#125; "metal" &#123;&#123;pipe&#125;&#125; "energy"
    |arg3 = &#123;&#123;type|number&#125;&#125; amount &#123;&#123;pipe&#125;&#125; { metal = &#123;&#123;type|number&#125;&#125; amount, energy = &#123;&#123;type|number&#125;&#125; amount }
    |output = &#123;&#123;type|nil&#125;&#125; &#123;&#123;pipe&#125;&#125; &#123;&#123;type|bool&#125;&#125; hadEnough
    |info = Imposes a one-off usage of resources on the given team. The return value indicates whether or not the team had sufficient resources to meet the usage demand.
    &#125;&#125;

Spring.UseTeamResource(number teamID, string "metal" \| "energy", number amount \| { metal = number amount, energy = number amount })

-\> nil \| bool hadEnough

Deduct the specified amount from the team's metal or energy resource.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Template:API](https://springrts.com/wiki/Template:API).*
