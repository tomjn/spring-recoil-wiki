---
title: "User:Flozi"
source_url: "https://springrts.com/wiki/User:Flozi"
---
# User:Flozi

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

## My User Subpages

<div class="mw-prefixindex-body">

- [Flozi/EngineSupportedResources](/users/flozi-enginesupportedresources)
- [Flozi/Showcase](/users/flozi-showcase)
- [Flozi/Tutorial](/users/flozi-tutorial)

</div>

## Scratchpad

### Template:API proposal

Note that the number of 'arg1' etc is fixed (i.e. 10) but can be omitted without issue. the 'type' template is just a way to make inserting different styles within the param list easier, [Template:Pipe](/templates/pipe) already exists and is required as it is a special char within mediawiki syntax, could use &#123;&#123;!&#125;&#125; as a shorter alternative to pipe.

&#123;&#123;API \<!-- Callout example --\>\
\|prefix = Spring\
\|name = UseTeamResource\
\|arg1 = &#123;&#123;type\|number&#125;&#125; teamID\
\|arg2 = &#123;&#123;type\|string&#125;&#125; "metal" &#123;&#123;pipe&#125;&#125; "energy"\
\|arg3 = &#123;&#123;type\|number&#125;&#125; amount &#123;&#123;pipe&#125;&#125; { metal = &#123;&#123;type\|number&#125;&#125; amount, energy = &#123;&#123;type\|number&#125;&#125; amount }\
\|output = &#123;&#123;type\|nil&#125;&#125; &#123;&#123;pipe&#125;&#125; &#123;&#123;type\|bool&#125;&#125; hadEnough\
\|info = Imposes a one-off usage of resources on the given team. The return value indicates whether or not the team had sufficient resources to meet the usage demand.\
&#125;&#125;

Spring.[UseTeamResource](#useteamresource)(number teamID, string "metal" \| "energy", number amount \| { metal = number amount, energy = number amount })

-\> nil \| bool hadEnough

Deduct the specified amount from the team's metal or energy resource.

Spring.CreateUnit( string "defName" \| number unitDefID, number x, number y, number z, (number facing \| string "facing"), number teamID \[, boolean build = false\] \[, boolean flattenGround = true\] \[, number unitID\] \[, number builderID \])

-\> number unitID \| nil

&#123;&#123;API \<!-- Callin example --\>\
\|prefix = addon \<!-- May use gadget: instead? --\>\
\|name = AllowUnitTransfer\
\|arg1 = &#123;&#123;type\|number&#125;&#125; unitID\
\|arg2 = &#123;&#123;type\|number&#125;&#125; unitDefID\
\|arg3 = &#123;&#123;type\|number&#125;&#125; oldTeam\
\|arg4 = &#123;&#123;type\|number&#125;&#125; newTeam\
\|arg5 = &#123;&#123;type\|bool&#125;&#125; capture\
\|return = &#123;&#123;type\|bool&#125;&#125; allow \<!-- note that this is a different entry than output above --\>\
\|info = Called just before a unit is transferred to a different team, the boolean return value determines whether or not the transfer is permitted.\
&#125;&#125;

addon.AllowUnitTransfer(number unitID, number unitDefID, number oldTeam, number newTeam, bool capture)

return: bool allow

Called just before a unit is transferred to a different team, the boolean return value determines whether or not the transfer is permitted.

#### Using syntaxhighlight instead

\<syntaxhighlight lang="c"\>Spring.CreateUnit // offmap positions are clamped! (you still can use MoveCtrl todo so)

( string "defName" \| int unitDefID,\
  int x, int y, int z,\
  (int facing \| string "facing"),\
  int teamID\
  \[, bool build = false\] \
  \[, bool flattenGround = true\]\
  \[, int unitID\]\
  \[, int builderID\]) -\> int unitID \| nil\</syntaxhighlight\>\

## TODO:

### Major

- Category:ShowCase template, main page, S44 & MCL as examples
- Category:Tutorial
- Continue to improve [Lua:Callins](/lua-callins) - Fill in blank explanations
- Clickable / right-click copy paste-able anchors in &#123;&#123;tag&#125;&#125; et al
- [Assimp](/assimp) build upon, metadata doc, split tutorial again \>\_\>
- Cleanup old [Category:Map_making](/categories/map-making) into new [Category:Map Dev](/categories/map-dev)

### Minor

- Page on spring wiki etiquette ([SpringWiki](/project/wikietiquette)) / style guide & template usage ([Mapdev:WikiGuide](/mapdev-wikiguide)) /namespace conventions ([Spring:PageNamingConventions](/project/pagenamingconventions)) - pages are good already; put these in revamped community portal?
- Move all pages in Animation- to Animation:
- Continue to improve [Gamedev:Main](/gamedev-main) up to the high standard of [Mapdev:Main](/mapdev-main)

### Undocumented Features

- cmdcolors.txt (c.f. <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=7099" class="external text" rel="nofollow">GUI modifications in SVN</a>)
- ctrlpanel.txt (c.f. as above)
- isolated mode (isolated.txt 99+ c.f. <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=26359" class="external text" rel="nofollow">portable/isolation mode</a>, <a href="http://springrts.com/dl/buildbot/default/master/99.0/manpages/spring.6.html" class="external text" rel="nofollow">Spring manpages</a>)

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Flozi). Original page: [User:Flozi](https://springrts.com/wiki/User:Flozi).*
