---
title: "Licenses Forking Mutators"
source_url: "https://springrts.com/wiki/Licenses_Forking_Mutators"
categories:
  - "Spring"
---
# Licenses Forking Mutators

<div class="mw-parser-output">

[Wiki](/main-page) \< [Community](/community-docs) \< Licenses Forking Mutators

## Guidelines on licensing, forks and mutators within the Spring community

### Licensing for content devs, in brief:

We think a package of content for Spring (e.g. sdz, sd7) is not a "single work" derived of the engine in the terms of the GPL. A package of content may consist of multiple independent works, each of which may be covered by a different license.

We generally view **code** that is necessarily read/executed by the Spring engine, as linking to the engine. As a result, since the engine is licensed under GPL, we think that such code requires a GPL compatible license. This typically applies to widgets, gadgets, scripts, shaders, CEGs, unit defs, etc.

All other content that you create, such as **artwork**, can be licensed however you wish. That said, we encourage you to use open source copyleft licenses, and make your content free for anyone to use and modify.

Details can be found in <a href="https://springrts.com/phpbb/viewtopic.php?f=1&amp;t=17847" class="external free" rel="nofollow">https://springrts.com/phpbb/viewtopic.php?f=1&amp;t=17847</a>. Please remember that on our forums we require that discussion of specific projects licensing is "in very good faith and a highly positive and productive manner" ;)

### Forks and mutators:

As a general rule, Spring encourages content sharing whilst also discouraging unwanted imitation of existing content.

A **mutator** (of map or mod type) built on game X should make it explicitly clear in its name that it will modify/augment content from X.

A **fork** of game X should have a clearly distinct name and versioning scheme, and a clearly visible difference to the content of the most recent release of X.

In both cases:

- The license(s) of game X should be respected;
- Names, version numbers and other branding should not attempt to imitate the original game X;
- Promotion (including promotion by players) should not take place within the infrastructure of game X;
- A non-technical description of the changes/mutations made from (a named version of) game X should be made publicly available on Springs forums - in a release post, change-log, or similar;

Exceptions to these conditions may occur only if the developers of game X have given permission for them.

When these conditions are satisfied, mutators and forks of existing games may be used on Springs server. Where possible, the mutator/fork can initialize data (ingame times, TrueSkill scores, etc) within Springs infrastructure from a copy of similar data that Spring already holds related to game X.

In practice, within Spring:

- If you develop a game and feel that a mutator/fork of your project is not following these guidelines, contact Springs moderators.
- If you want to fork/mutate a game, we encourage you to contact its developers first.

## FAQ:

\(Q\) "What about **procedurally generated art**, or artwork such as a story-line that happens to be stored within a lua file?"\
(A) This is a grey area, and in some cases there may not be a clear answer. A lua gadget that generates art is code and should be GPL compatible, but a file containing a lua table with one sentence of a story on each line could reasonably be viewed as artwork.

\(Q\) "I want to make a **commercial game**. How can I protect my rights to license it?"\
(A) You may use a restrictive license for your artwork, although we'd prefer that you didn't! At the very least, if you stop making/selling your game we hope that you would re-license all your content freely.

\(Q\) "I want to develop/distribute a **game agnostic utility or library**, with game X included as an example, but I need to make modifications to X for this. Can I?"\
(A) Yes. As long as you respect the license of X and stick to modifying the technical stuff needed for your own work, we won't consider it to be affected by these guidelines.

\(Q\) "I store some **data related to game X** on my own servers, do I have to share this data to a fork of game X?"\
(A) No, it's your data. But if you'd like your data/project to be viewed as "within Spring's infrastructure" for the purposes of these guidelines, then let us know.

\(Q\) "I want to make a fork or mutator of X but the maintainers of X refuse to endorse it. Can I still do it?"\
(A) Yes, as long as the guidelines above are followed by both yourself and your players.

\(Q\) "Should I make **a fork or a mutator**?"\
(A) In general, mutators should be used by projects that, as part of their own development, usually incorporate changes found in new releases of their parent game - such as an added-on "King of the Hill" or "Tower Defence" mode. Forks should be used by projects that tend not to incorporate innovations found in new releases of their parent game.

\(Q\) What is a "clearly visible difference to the content of the most recent release of X"?\
(A) A difference that, if it was present in a typical game of the most recent release of X, would be noticed and reacted to by most (and ideally, all) of the players.

\(Q\) "I want my game to share infrastructure from another game (hosts, content distribution, forum, etc). Can it?"\
(A) Not unless the developers of the other game want it to.

\(Q\) "I am a developer, can I impose additional conditions on how people use my content within Spring?"\
(A) Yes, as long as they don't conflict with the guidelines above. We would prefer you to do it via your license. Note that, if you wish to use Springs content distribution systems (rapid, SpringFiles, etc), your license(s) must allow us to distribute your content!

\(Q\) "What will happen if I, or other users of my content, break these guidelines?"\
(A) Typically, we may withhold use of Spring's infrastructure (such as the forum, lobby server, rapid, SpringFiles, botflags, etc) and may remove offending content. In serious cases we may issue warnings and bans.

\(Q\) "What about games containing OTA content? What about different points of view of GPL, packages and linking?"\
(A) See <a href="https://springrts.com/phpbb/viewtopic.php?f=1&amp;t=17847" class="external free" rel="nofollow">https://springrts.com/phpbb/viewtopic.php?f=1&amp;t=17847</a> and [/wiki/Felony#11](/felony#11).

\(Q\) "Who takes decisions to cover **grey areas and disputes**? Who updates/modifies these guidelines?"\
(A) Spring's moderators and administrators. Note that these are our community guidelines; this is NOT a legal document.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Licenses Forking Mutators](https://springrts.com/wiki/Licenses_Forking_Mutators).*
