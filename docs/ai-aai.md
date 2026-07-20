---
title: "AI:AAI"
source_url: "https://springrts.com/wiki/AI:AAI"
categories:
  - "AI"
---
# AI:AAI

<div class="mw-parser-output">

<table class="wiki-infobox">
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<td colspan="2"><strong>AAI</strong></td>
</tr>
<tr>
<td>Developer</td>
<td>Submarine</td>
</tr>
<tr>
<td>Version</td>
<td><strong>V0.9</strong></td>
</tr>
<tr>
<td>Mod Support</td>
<td>XTA, BA, AA, TA:WD, SWTA, TLL, KuroTA, FF, Gundam, TA Battle Fleet, Spring 1944</td>
</tr>
<tr>
<td>Status</td>
<td><strong>Under Active Development</strong></td>
</tr>
<tr>
<td>License</td>
<td>To 0.70 Closed Source,<br />
from 0.70 Open Source (GPL)</td>
</tr>
<tr>
<td>Interface</td>
<td>C</td>
</tr>
<tr>
<td>Wrapper</td>
<td>LegacyCpp</td>
</tr>
<tr>
<td colspan="2"> <strong><a href="/ai-skirmish-list">&lt;- Back to List of AIs</a></strong></td>
</tr>
</tbody>
</table>

**AAI** is being developed by Submarine. It is rather stable and supports most popular [games](/games) (e.g. AA, TA:WD, XTA, SWTA and TLL).

AAI attempts to learn about the mod while playing. However it will take at least a few games, in the beginning AAI will suffer from ineffective build choices. Not only does it keep track of combat efficiency of single units it will also try to learn about which unit categories are used on a specific map and how often it is attacked by certain units (e.g. air units instead of ground units). Therefore AAI will in a limited way adapt to its opponent's playstyle. It also places its defences according to where it has been attacked.

Since AAI 0.50, a new economy management has been implemented. AAI will build all kinds of power plants, storages and metal makers according to its current demand and situation. AAI will also try to exchange metal extractors with better versions once they are available.

AAI will use its airforce to weaken enemy defences, destroy outposts and support ground assault units.

Since version 0.60, limited water support has been implemented. However AAI will have problems especially on mixed land/water maps.

AAI needs a separate config file to be able to run with a specific mod. There are cfg files available for most common games, however it's not very hard to create one yourself, see readme.txt and mod cfg helpfiles for more information. If AAI cannot find a suitable mod cfg file it will display an error message and print the name of the file it had been looking for in the ai log.

### Info

- Playability : especially on big maps with lots of metal it will put up a decent fight (play against 3 AAIs on Comet Catcher Remake :) )
- Limitations : AAI does not build mobile artillery so far and there is no support for nukes/anti nukes etc.

## License

- AAI 0.7 (and above) will have a license change from unknown license to GPL (version not specified, ask Submarine for futher details)

### Related forum threads

- <a href="http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=18941" class="external text" rel="nofollow">"AAI v0.90"</a>
- <a href="http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=13467" class="external text" rel="nofollow">"AAI v0.86"</a>
- <a href="http://springrts.com/phpbb/viewtopic.php?t=6094" class="external text" rel="nofollow">"AAI v0.70"</a>
- <a href="http://springrts.com/phpbb/viewtopic.php?t=7539" class="external text" rel="nofollow">"AAI v0.75"</a>

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:AAI](https://springrts.com/wiki/AI:AAI).*
