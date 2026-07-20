---
title: "Galaxy 662"
source_url: "https://springrts.com/wiki/Galaxy_662"
categories:
  - "Historical"
  - "Mods"
---
# Galaxy 662

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | This page contains outdated information, but is kept for historical reasons. |

- Guessmyname suddenly notices how many times he's misspelled shields\*

Aw shit

## THE BEGINNING

Not much to say really. I've always been a fan of space modifications. I just think they're cool. So I decided to try my hand at making one.

I've already figured out most of the balance, and had a design doc of sorts (I'm constantly adding to it)

So far I have about 7 models. All quite high poly. I have a race 4 - I haven't gotten around to making a plot or naming races yet. Also, first release will have race 4 and race 6 in it. Race 4 because it has some cool ideas in, and race 6 because they're probably going to be the easist for people to get to grips with - Battlecruiser, which I call the "Dauntless". Two race 4 fighters (basic and advanced) ad a bomber, a race 6 constructor ship and two very heavily armed space stations to whom I have yet to assign a race. As the mod progressed I will add to this wiki page

## NEWS

Does "announced" count?

--Guessmyname 02:27, 4 Nov 2005 (W. Europe Standard Time)

Added some other stuff, like the race4 lvl1 spacedock. Working to get it ingame

More stuff. See below

Pic of some of the models: <a href="http://www.haxorsoft.net/images/album07/all?full=1" class="external free" rel="nofollow">http://www.haxorsoft.net/images/album07/all?full=1</a>

--Guessmyname 18:24, 21 Dec 2005 (W. Europe Standard Time)

Project recontinued - I found all the missing models! Woo!

Now why-oh-why did my search not find them...

PS Adv Fighter + Gunship, Race 6

Scout Craft, Race 3

## STUFF

List of units:

Race 1

Race 2

Race 3

- Scout Craft

Race 4

- Fighter
- Advanced Fighter
- Battlecruiser "Dauntless"
- Carrier Retrebution
- Bomber
- RC Kamikaze craft
- AS Mine
- Lvl1 Space Dock

Race 5

Race 6

- Constructor Fleet Ship
- Scout
- Frigate
- Fighter
- Advanced Fighter
- Gunship
- Advanced Gunship
- Solar Collector
- Advanced Fighter
- lvl 1 Builder
- lvl 1 defense lasers
- Super Carrier

Unassigned

- Space Station Alpha
- Space Station Alpha Mk2

## OTHER STUFF

Races will utilise there different types of shielding.

1.  Health Sheilding.
2.  Repulsor shielding.
3.  Hybrid.

Health Sheilds is where the unit starts off with its armoured state activated. The armoured state is the shield. When the unit goes below a certain health boundary, the shield is lost, and cannot be replaced.

Repulsor Sheilds are repulsors, unsuprisingly. Hopefully we will be able to say what blocks what, instead of of just plasma all the time. I like this idea (which I came up with by the way):

*Have an "inner-circle" thing, within which weapon fire is not deflected. Like in Star Wars Ep1. The droids outside the gungan shields could not get shots through. One they passed through the shields though...*

*It would also add tactical diversity: Long range deflectors that stopped LRPCs and smaller, less energy-intesive ones that cover a smaller area and stops unit fire. Also, let us give a tag to weapons that say wether or not they can be repulsed...*

*EDIT: Better yet, add a txt file - weapontypes.txt or somesutch. This file contains a list of all the different weapon types, ie:*

- *PLASMA;*
- *MISSILE;*
- *UNBLOCKABLE;*
- *RIFLE;*
- *etc.*

*Then, add two new tags for weapons. One for repulsors, and one for normal weaponry. Something like this*

*weapontype=PLASMA;*

*and*

*repulsetype=MISSILE;*

*I think its obvious as to what I'm trying to imply here*

This would allow better flexibility with weapon repulsors.

**Hybrid sheilds:** Health and Repulse sheilds. Just not as powerful.

Health Sheilds and ordinary health can also be arranged to make some interesting play styles, ie: really good sheilds but crap amounts of health could make for an interseting race (Race 1 infact) where just-built units are superior than badly wounded units. Also, if you keep the units above the "lose-shield threshold" and then repair them, they keep their shield bonus. Or ships that, when heavily damaged, send all power to their sheilds - the ship cannot do anything (ANYTHING) at all but has extremely high powered shields (read: Armoured State coming into play), that will allow it to survive until it can be repaired (ie, after the health goes up to a certain point it loses the armoured state and can do stuff again). If I can make them unable to move when in its armoured state, I will.

**Ammo:** I may include ammo for certain weapons

**Sheild ships:** A variety of cheap, unarmed "Sheild ships" (Race 4 has the best)that do nothing more than generate relatively large repulse shields that can cover up a taskforce of small craft or parts of larger ships. A similar thing will be implemented for radar jammers, obviously.

**Mines:** Units can lay mines, but they will be weapons that hover until something (including your own units) fly into it. This will be a command-fire weapon, obviously. There will be minesweeper units however. (they will basically be units that take no damage from mines)

**Another Balance idea:** A race has a fleet of small, fast and dirt-cheap units with peashooters that can cloak and are hard (not impossible, hard) to catch. They can also jam radars. However, all this takes up a lot of energy. Their defenses will be crap and they have no "sheild ships" to try and help defend stuff. Their energy buildings, while each creates a lot of energy, are very weak, making them easy to destroy. So while they fight (and possible start to win) at your base, you send your own little task force, hidden by sheild ships and jammers, to destroy their energy production facilities, thus causing the little craft to lose their stealthy advantages and be easily shot down by your fleets.

**Targets:** I'd like to include (on larger ships though) a system wherein, for instance, the engines were hit several times (read: static-var McFiddlery) by specific weapons the ship's engines would be disabled and the thing would be inable to move. Or sheild generators. Hit them, bye-bye shield bonuses. This whole thing would require some updates to scripting (being able to stop units from moving and a HitByWeapon(piecename, weaponname) type function. Basically, this will not be implemented yet, simply because it cannot be implemented.

See the "fuse-building" thread in the development forums: <a href="http://taspring.clan-sy.com/phpbb/viewtopic.php?t=3245" class="external free" rel="nofollow">http://taspring.clan-sy.com/phpbb/viewtopic.php?t=3245</a>

**Side lasers:** something I'd like to try and implement. Basically these are powerful beam lasers on the side of ships and are to be used against other large ships or installations. To be fired, the ship must come alongside, leaving them open to return fire (unless of course you take out *their* side lasers - see "Targets").

EDIT: These can be implemented. Lineofsight=1; weapons me do!

## COMMENTS

Leave 'em here

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Galaxy 662](https://springrts.com/wiki/Galaxy_662).*
