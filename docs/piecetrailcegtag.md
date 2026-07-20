---
title: "PieceTrailCEGTag"
source_url: "https://springrts.com/wiki/PieceTrailCEGTag"
categories:
  - "Deprecated"
---
# PieceTrailCEGTag

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

This is replaced by [Gamedev:UnitDefs#pieceExplosionGenerators](/gamedev-unitdefs#pieceexplosiongenerators)

**Old way does not to work anymore.**

Related thread with example and a way to easily convert from old to new system: <a href="http://springrts.com/phpbb/viewtopic.php?f=14&amp;t=27554" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=14&amp;t=27554</a>

------------------------------------------------------------------------

original page below

------------------------------------------------------------------------

From Kloot:

In case you missed the changelog entry, this can now be done using the new unit FBI tags pieceTrailCEGTag and pieceTrailCEGRange (where Tag is a string and Range is an integer). If Tag is given, each piece of an exploding unit randomly loads one of \<pieceTrailCEGRange\> CEG's whose tag starts with the prefix \<pieceTrailCEGTag\> and ends with a number in the range \[0, pieceTrailCEGRange - 1\]:\

Code:\
` // CEG definitions`\
`[Fire0]`\
`...`\
`[Fire1]`\
`...`\
`[Fire2]`\
`...`\
`[Fire3]`\
`...`\

Code:\

`// unit FBI`\
`pieceTrailCEGTag = "Fire";`\
`pieceTrailCEGRange = 4;`\

If range is 1 (default) then you only need Fire0 defined, otherwise all possible \<pieceTrailCEGRange\> tags are expected to be valid.

Thread about this: <a href="http://springrts.com/phpbb/viewtopic.php?f=9&amp;t=12879&amp;start=20" class="external autonumber" rel="nofollow">[1]</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [PieceTrailCEGTag](https://springrts.com/wiki/PieceTrailCEGTag).*
