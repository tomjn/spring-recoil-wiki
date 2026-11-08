---
title: "User:Nemo/NewGamedevInterfacesDraft"
source_url: "https://springrts.com/wiki/User:Nemo/NewGamedevInterfacesDraft"
---
# User:Nemo/NewGamedevInterfacesDraft

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

## Adding new interfaces for Game Developers to the engine

TL; DR: Don't add new \*Def tags. Prefer LuaSyncedCtrl interfaces, but mostly strive to see how we can simplify the existing tags into a smaller, more useful set of dials that have fewer obviously bad values. The mechanical replacement of hard-coded constants with \*Def tags is not an improvement in most cases: it makes the engine harder to maintain, and it increases the number of foot-guns for game developers. The huge number of \*Def tags is an anti-pattern that we're trying to outgrow.

#### Tags, a brief history

Modern Spring is a powerful and versatile engine, but it originally started with the goal of running content from the 1998 RTS, Total Annihilation. As a result, the primary interfaces for game developers to customize units and weapons for much of Spring's history have been [UnitDef](/gamedev-unitdefs), [WeaponDef](/gamedev-weapondefs), and [FeatureDef](/gamedev-featuredefs) tags of the same basic name and functionality as the ones in Total Annihilation. They are simple to use for less technical game developers (working on a game involves editing values in a text file), and can be fairly elegantly managed with something like the object-oriented approach found in MCL or Spring: 1944.

#### Why not more tags?

###### They limit the engine

As nice as the simple interface can be for game developers, tags strongly constrain the growth and flexibility of the engine: they often embody assumptions from Total Annihilation, and are spread into many corners of the codebase.

###### Fixed at load time

Furthermore, tags cannot be changed at run-time: their values are fixed at load time. While some unit attributes can be modified by LuaSyncedCtrl usage, most cannot. This is not strictly a bad thing: not all values should be mutable at run-time (otherwise filtering, for example, weapons by an attribute becomes impossible for performance reasons), but this should be a carefully considered decision rather than historical-default.

Some implications of immutable-by-default tags are:

1.  Game developers are constrained in their designs (because many aspects of a unit are immutable during gameplay)
2.  Working on a game involves constantly rebooting Spring. This is especially true for tags where the outcome of value changes is difficult to reason about: the [aircraft tags](/gamedev-unitdefs#advanced-air-tags) are a good example.

#### So just transform everything into LuaSyncedCtrl interfaces?

The general consensus among engine devs is that there are far more \*Def tags than needed. They represent a tangled, complicated nest of magic values. Whenever possible, we should aim to simplify systems so reasonable behavior is easy to accomplish (i.e., not requiring arcane knowledge of sane values for the hundreds of tags), and leave exotic behavior to game developers to implement using the LuaSyncedCtrl interfaces.

Converting every single \*Def tag into a LuaSyncedCtrl isn't a clear win, since it is already a fairly complicated bit of code, and every unit carrying its own mutable copy of every tag would result in notably increased memory usage.

## Flowchart for adding new interfaces for Game Devs

Many of the answers to these questions will result from discussions with engine and game devs. a PR or forum thread are good ways to do this.

1.  Determine if you're adding a totally new capability, or just adding more control to an existing system.
    1.  New capability --\> add it to LuaSyncedCtrl, submit PR
    2.  More control --\> see if the system can be simplified so that it doesn't need manual tuning by the gamedev, and the number of tags can be reduced.
        1.  Yes, it can be simplified --\> yay! Kill that complexity with fire, submit PR, look into deprecating old tags.
        2.  No, this is just really complicated and gamedevs legitimately need to control these elements --\> Add to LuaSyncedCtrl, submit PR

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Nemo/NewGamedevInterfacesDraft). Original page: [User:Nemo/NewGamedevInterfacesDraft](https://springrts.com/wiki/User:Nemo/NewGamedevInterfacesDraft).*
