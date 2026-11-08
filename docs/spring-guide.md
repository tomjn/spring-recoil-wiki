---
title: "Spring guide"
source_url: "https://springrts.com/wiki/Spring_guide"
categories:
  - "Deprecated"
  - "Playing"
---
# Spring guide

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

This page describes the gameplay of TA-based games on the Spring engine. The Spring engine can run a wide selection of [Games](/games) and thus this text does not apply to every one of them.

------------------------------------------------------------------------

Keep in mind that Spring is still in beta, therefore crashes can occur (a lot) and we (well, not me!) haven't got everything fixed yet.

Before we start, let's have some background info.

## TA: so what's so cool about this game?

[TA (Total Annihilation)](/ota) was created by Cavedog (R.I.P) in 1997, about half a year before(!!!) Starcraft was released. It was revolutionary in many ways, with 3D graphics (but a fixed camera), good animations (aircraft barrel rolled and leaned when they turned etc.), 3D terrain and many units (150 in the original game.) But in my not so humble opinion, the 3 greatest things that set TA apart were...

- Its physics! Every shot trajectory was calculated! An artillery shell could try to get over a hill and hit an aircraft, which exploded into bits, damaging other troops nearby, which could also explode and set forests on fire. Yeah, might not sound that big after 7 years, but back then we had Starcraft, which defied at least a half dozen laws of physics.

(Example of the tentacle through space. Yeah, really realistic) <a href="http://fast.filespace.org/Kixxe/WTF.png" class="external text" rel="nofollow">Click here</a>

- The order system! You could have 300 units waiting to be built, and when they were done, they could go and patrol an area and attack anyone in it. Order queues were limitless. You could build your whole base and drink tea while it was getting built. Construction units on patrol would repair damaged units, help build things and reclaim stuff (sucking it in and transforming it into resources.)

<!-- -->

- The resource system! Contrary to other RTS games, the resources in TA are infinite. What limits resource consumption is the rate at which they can be gathered. This sole fact would make for longer and more epic games, with hundreds or thousands of units fighting in the endgame.

Pretty cool game. If you want, check out their old website for more info. <a href="http://www.fileuniverse.com/Total_Annihilation_Mirror/totala/index.html" class="external text" rel="nofollow">Click here</a>

Anyway, enough of my rambling, onto Spring!

Now, as I told you, Spring was inspired by TA and has the same features TA had. Plus a few new things, check out the Spring features page for more info. <a href="/about">Click here</a>

------------------------------------------------------------------------

## Controls

Keyboard controls here: <a href="http://img108.imagevenue.com/img.php?image=03721_PK06A_Compact_Keyboard_ProdImage_Black_V2_122_972lo.jpg" class="external autonumber" rel="nofollow">[1]</a>

Don't forget: shift+ right click to queue orders.

------------------------------------------------------------------------

## Resources

There are two types of resources in Spring, namely *metal* and *energy*. Each of these two resources can be collected in a number of different ways. The amount of each resource that you currently have stockpiled is represented by a colored bar, one for each resource, along the upper edge of the screen. The rate at which you are presently collecting and consuming each of the two types is represented by a number and a + or - sign. If you are collecting at a faster rate then the rate at which you are consuming you will see your colored bar grow as resources accumulate. Your stockpiled resources are being depleted whenever the colored bar is shrinking. There are storage buildings which you can build for each type of resource and these will increase the amount of each which can be stored. Units and structures cost both metal and energy to build, while some units or structures also require energy to walk, shoot or operate in general.

Metal is collected continuously from either a metal extractor, often called "mexes" which extract from certain areas of the map, or by using a metal maker, abbreviated as "MM" which convert energy into metal. Both will only operate so long as there is sufficient energy to power them. However, metal makers require a lot of energy. A faster way to gather metal is by using either your commander or a construction bot to 'reclaim' it from the remains of destroyed units and buildings! They can even reclaim buildings which have not been destroyed and they don't have to belong to your enemy to be reclaimed.

Energy can be produced by a number of different buildings or it can be reclaimed (you can reclaim trees to gather energy). There are many different types of energy producers, including solar collectors and power plants, but they will be covered in another section.

In a game, always keep an eye on your metal and energy bar because if one of them goes to zero, particularly energy, your building rate will stall,(metal makers and extractors will stop producing) and some units will be unable to fire their energy weapons (eg. LRPCs, Annihilators, Doomsday Machines).

------------------------------------------------------------------------

## A Normal Spring Game

Anyway, now you will learn the basics of a normal Spring game, as I see it. Every Spring game starts with all players only having:

**The COMMANDER**! (Insert DUN DUN DUUUUUNN)

The Commander is the unit you start with and the most important one in the game. He is unique and cannot be rebuilt. In fact, there is a mode where the game ends when the commander dies, so never leave him alone.

The fastest builder, he can walk and build underwater, he makes a nuke-sized explosion when he dies, he has a laser and the privilege of a Disintegrator Gun (alias D-Gun). The D-Gun is the single most powerful weapon in the whole game, which kills ANY (ANY, I mean it!) unit in one hit (friend or foe no difference, be careful!). Even if that sounds a like a little overkill, keep in mind that the Commander has a very limited range, is defenceless against any aircraft and long range artillery, and when submerged, he cannot shoot. (Subs! Onoz!)

The Commander is used for setting up a base, and early base defences. The D-Gun should protect him against any level 1 unit that tries to kill him, so if you lose your Commander in the beginning of the game, then you're dead. You lose your best (only?) builder and attacker, plus you have a nuke-sized explosion that may destroy half or all of your base.

Anyway, if you're seeing everything in a top down perspective, click the Commander (type Ctrl+C if you can't find him) with left mouse button to select him.

(If you have a crosshair as a mouse, press j. If your camera is zoomed out or all jerky, press ctrl+j until you find the OTA(Original Total Annihilation) camera.)

Okay, let's now discuss **how to build stuff**.

Like any normal RTS, it's choose a unit and click a location, but there is more with Spring. Hold shift and click on different locations to make the unit build the same building there. Hold shift and drag and you will make a line of the building. Hold ctrl and shift to make boxes/rectangular shapes of buildings. Use these! Make a line of DT (Dragon Teeth, small piece of wall/cover) instead of clicking each and every one. The controls are there to help you. This is called queuing up stuff. You can use almost every single command in a queue. Buildings can be queued to build lots of different units, and then the other orders in the behaviour of the unit. You can make them walk to something, or guard/follow a unit by pressing G and selecting the unit to guard. Try it. Selecting a unit and pressing shift key will show the orders queue.

Build 2 solar generators, or 4 wind generators to gather energy. Keep in mind that wind is pretty unstable, and that a number of maps (like lunar ones) have no wind at all! (The level of wind and tides in the map is indicated in the Map Selector in the Lobby).

Now select the Metal extractors and the whole screen turns black and green. Okay, place one on the green stuff. (The greener, the better! Like broccoli!)

Oh, and the minimap controls in spring are reversed. Meaning that you have to right-click to move the screen to the location. Once the new GUI is out and official, this will be fixed.

------------------------------------------------------------------------

## The TA Bestiary

Okay, time to describe the cool units that are at your disposal to make your enemies bleed. 8)

(Disclaimer : This will discuss the types of units, not every unit. Therefore, if I say that vehicles have large armour, I don't mean artillery of course.)

On to the first level 1 lab/plant to build. The categories are:

### Vehicles

These babies are all about armour. The level 1 units are pretty basic, with more armour and (build) speed and than their K-bot counterparts. Level 2 vehicles show even more of the same pattern: better armour than their K-bot counterparts. Level 2 also offers the mobile Flak unit, which is the only real level 2 mobile AA. Their weakness is that they are clumsy, turn slowly, and most of them can't climb mountains at all. Leads to trouble when an explosion makes a crater; units survive but can get stuck in the crater. Or just when they are trying to get up a steep hill. But sooner or later, you'll learn what kind of destruction a rush of 30 Goliaths can do!

### K-Bots

K-bots generally have less powerful weapons than tanks, and are also less heavily armored. So why build them in the first place? Because they are cheaper! And since they are cheaper, you can build more and outnumber your enemies. This doesn't work out that good in game though, since tanks ARE stronger. K-bots are also smaller, and will slip through DT and such alike easier than tanks. And finally, the third advantage (which IMO is the biggest) of K-bots are that they can climb most mountains with ease! Climb by defences, up on mountains, through holes, these are all-purpose units.

### Aircraft

Planes are planes. In Spring, there's a plane for every role. Bombers, fighters, gunships, flying radar, transports, stealth fighters and torpedo bombers. Planes are fast, and are not affected by terrain. There is no wall or relief that can stop a plane. You can just swoop into a base and take out AA with your gunship, and then bomb the crap out of their important structures. To stop them, you've got to rely on Anti Air (AA) units.

On the downside, planes are quite expensive to build and are relatively fragile. They are also the only units that have an anti unit against them (Except subs). When someone finds out you're building a large air fleet, they just cram their base full of AA and their army with mobile AA. And the only counter is more planes than their AA can handle, or a ground troop to take the AA down. A combined ground and air attack can be very destructive. Good luck!

### Ships

Ships are good on a map with water. (DUH!) Ships come in many different kinds, but mostly for taking out other ships or bombing the crap out of land units in some way or another. The ships' strength is their powerful weaponry and their long range. All ships made to take out land have long range. Ships also have lots of armor. Another thing that's good about ships is that there is not much you can do to stop them because they are usually out of range. Once you see that the enemy has ships, either build a dock and a navy real fast or build planes and pray that he doesn't have too many AA ships. Their weaknesses are slowness (especially when turning), they can be taken out by submarines, and of course they are confined to water, meaning that they are often stuck with units just outside of their reach.

And they are \*extremely\* expensive, metal-wise.

### Hovercraft

(These are counted as level 2 units, so I would not recommend them as the first to build unless it's the perfect map for them)

Hovercrafts are a tank and a ship(some say plane, but I find ships to be more accurate for some reason O.o) mixed. Sure it's weaker than your average tank, and slower than your average boat. Whats their use? They are meant for swampy maps that means that both tanks and ships are a weakness, and offcourse since none can't be used, everyone just spams out AA since they think aircrafts are the only way. Great suprise for the enemy when 50 hovercrafts comes in agsint their flakkers and MT... Long story short, Hovercrafts are good for those who like (or must) attack from the ground, but can't since there is too much water.

Their weakness is their low climbing ability, and that they're weaker than a tank and boats. (Don't build them on a land map, tanks ARE better.)

### Towers and Turrets

The impressive range of fixed towers, cannons and turrets from Total Annihilation is again at your disposal. Proper use of these structures will help you control a map and stop your opponents in their tracks.

- **Light Laser Towers (LLTs):**

These cheap and fast lasers boast pinpoint accuracy and respectable damage against level 1 units. They suffer from short range, and are vulnerable to artillery and missile units which can kill them from out of reach. Since they fire faster than their bigger brothers, LLTs have an advantage against hordes of small weak units.

- **Heavy Laser Towers (HLTs):**

With a lower rate of fire but much more power than LLTs, these upgraded lasers are ideal for those pesky level 2 units that just don't want to die. They also have a longer range, and can be quite effective against aircraft. They cost a fair amount and take a long time to build, but in the right situation they can be extremely dangerous.

- **Missile Towers (MTs):**

The cheap yet deadly missile tower is guaranteed to shred airborne attackers, and its low cost and long range also makes it a good early-game point defense against weaker level 1 units. MTs are very fragile, and tend to chain-explode if placed too close together; they work best when scattered as random surprises for invading aircraft or with natural terrain or dragon's teeth to provide some cover from ground attacks. The huge damage bonus of missiles against aircraft makes these effective against even level 2 planes, though it would be wise to back them up with a few flak towers as well.

- **Pop-up Cannons:**

Pop-ups are the smallest and wiliest fixed plasma cannons. When not firing they retreat down into the ground, where they are extremely resistant to damage; a closed pop-up in XTA 9.1 can survive two consecutive direct nuclear missile impacts! They can be installed by lowly level 1 construction units, and outclass virtually all level 1 opponents in range and firepower. Their durability and effectiveness is not without cost, however, as even a single pop-up represents a huge gamble of time and resources in the early stages of a game. Consider carefully whether rushing a pop-up will cripple the enemy forces or your own economy...

- **Medium Range Plasma Cannons (MRPCs):**

MRPCs are huge, brutal plasma turrets that really suck on your energy reserves but inflict serious pain over a wide area. Fast and accurate targeting combined with excellent damage and range make them a sound defensive investment against level 2 armies. Remember that a smart enemy will look for a way to simply bypass your expensive static emplacements, and that even if you don't leave any way around these guns still make big fat targets; they work best when used to lock down choke points with overlapping fields of fire, and deserve supporting defenses against air raids and skirmishers. Put one on a hill, cover it with a HLT and some flak or missile towers behind a wall of DT, and don't forget to occasionally send in a builder to reclaim the resulting wreckage.

- **Long Range Plasma Cannons (LRPCs):**

When you want to hammer an enemy installation into gravel from the comfort of your own base, an Intimidator or Big Bertha might be the tool for the job. The enormous range and hitting power of a single LRPC can dominate the whole of a small map or take an enthusiastic bite out of a large one, and a battery of them can obliterate just about anything in only a few volleys. Too slow to effectively track moving targets, the LRPC is not a defensive emplacement but an offensive weapon of mass destruction; as such, building one is a challenge that simply can't be ignored. Surround these with AA and ground troops to fend off your victim's inevitable desperate attempt to halt the rain of destruction.

- **Very Long Range Cannons (VLRCs):**

The ultimate, absurd limit of long-range artillery is the repeating Buzzsaw or Vulcan. These guns are incredibly expensive and ludicrously energy hungry (be prepared to dedicate a couple of fusion plants to powering just one such monster) but have *double* the range of a "mere" LRPC and a withering rate of fire. Just don't forget to go equally overboard defending your Uber-gun, because it doesn't have very much health compared to its build cost and it screams "kick me" like nothing else.

### The first steps

Now comes the tricky part. The first minute is always the same really, so what after that? Well, it's hard to judge. But here are some paths that can be taken.

**1.** Build many construction units and send them out to build mexxes and Geothermal Power Plants. Then a defence and maybe some DT.

**2.** Build some construction units, and then start building defences. Follow the line defence guide lines. Build Fusion Power Plants and Metal makers, and then an army. After that, use the army how armies are used best. This strategy is called PORCING, and is considered by many as BAD. There are disadvantages with this. You can't use many metal extractors or Geos, so you have slim to no resources to build your base. A popular strategy is to kill the anti-nuke, and then blow the whole compact base to bits.

**3.** Build a small army of 3-6 units and attack the enemy. The goal isn't to kill him, but to do as much damage as possible to his resources and hinder his economy. Mexxes are the most important, and then look for wind or solar generators. Try to keep on attacking him, but remember to still tech up and build defences.

Anyway, use your construction units to build defences of SOME kind. Take advantage of Geothermal gases. Yeah the smoking stuff. You can place Geo plants there for good, cheap and space saving energy. If you're expanding, use every Mex' positions, and try to find a place to settle your defence line.

When you can defend yourself from most level 1 units, start on your level 2 building.

When it's done, ALWAYS build a construction unit first. Use it for your first mini Fusion. (Or build some mobile fusion at the vehicle plant if you're Arm) Build level 2 units in the meantime. Low on metal? Upgrade the finest of your Mexxes to Moho Mexxes. They are bigger and better (but they suck up energy). You can also build a Moho Metal maker if you have enough energy to support it. (MMM :p) Okay, if you made this far, you must really start thinking about how to defeat the enemy. Look for his weak spot. Maybe a K-bot assault from the mountains ? Maybe planes. Maybe using amphibious units. That part is for you to figure out.

------------------------------------------------------------------------

## STRATEGY

I read through this guide, and suddenly realized.

*where is the strategy?*

So I fiddled this section up. Hope you'll learn something from it and thereby increase your Spring gaming experience.

### Defence

Ah, the overall defence. There are many different ways to make a good defence, but here are 4 oft seen approaches.

*Compact defence!*

The most common type of defence is a single line of defence, often with Dragon Teeth (DT) in front. Inside your base is some AA, and that's about it. The good thing about this is that it's pretty easy and fast to set up, and you know where your territory ends, which can make the game much easier. Problem is, if something makes it past the line of defence, then you're screwed, unless you're building line after line of defence, or have some units to stop them.

*Spread out defence!*

I saw a guy pull this off one time, and he won by a large margin. The trick with this is to never really have a defined line of defence, just a Heavy Laser Tower (HLT) here, a radar there, some DT there, a mine here and there. Basically, you expand every time you build a defence building, so in the end you have ENORMOUS space to move in. Since the defence is spread out, no one is gonna rush past it with some Goliaths. You can have some units hide behind mountains and attack. He used Merls who he trapped in fortification walls. I tried to run past the defence with an army of 30 Bulldogs. His HLT and missile/plasma batteries stopped me before I even reached his final defence line. Even though this defence is the best of them all, it's hard to build up, and requires lots of resources and time. IF you're able to pull it off, the only problem may be if they are fast enough to run by all of it, or if you don't have much AA and 30 Brawlers are coming.

*No defence at all?*

Yes, this is an option. Okay, you may want some mines here and there, and some DT to stop them from running right through the door and AA in your base if they're building planes. But how do you defend with no defence? With units; the whole concept is that you put all your effort into making units. This works pretty well, since when you see where the enemy is going to attack, you can MOVE your whole defence to that location. The problem with this defence is that when you are attacking, you lose most of your defence. Sure, you can leave units behind, but I find it hard mentally to leave half the army at home when I am attacking. If you manage to pull this off, and make enough units to both attack and defend, then you have not wasted any money on defence, and you have a strong army!

*The All Out Defence*

*-- addendum by Cain*

The opposite of the "no defence" strategy, mixed with the "spread out defence" strategy: the main concept is to invest resources in lots of level 1 build planes, and use them to quickly gather huge amounts of territory and resources, while keeping a lot of planes building/repairing turrets all over the map. This could be very effective on maps with few choke points where your defence can be concentrated in a small area, or mostly flat maps where the overlapping range of defensive structures will create a large grid of protected territory. The concept is to expand the defence line until you can shoot straight into the enemy base. When using this strategy, it is wise to have a lot of level 2 aircraft defending the construction point, as you will need to constantly move your mobile defences around the map, protecting under-contruction defensive areas. I usually end up with a hundred builder planes and 20 to 50 Brawlers floating around... keep them away from Kroghot!

These are the defensive strategies I have found effective.

Also, one thing to remember is to eliminate the largest threat first. If you're relying on DT, take out the FARK or construction planes first.

Okay, you've built a good defence. The next thing you should do is attempt to get into the mindset of your enemy. Put yourself in his shoes, and determine how he would most likely proceed given your defensive strategy. Would he attempt a gunship raid, or launch an attack from a defenceless mountain position? Once you know what his most likely plan of attack will be, rethink your defences with this in mind. If there is an area that is defenceless under your current strategy, and you believe it is a prime spot for your enemy to attack, set up some sort of defence there as well.

### Moving

Moving or attacking is pretty easy right? Just move from point a to point b and attack c? Nope. First, you have to have your units move TOGETHER. . If some are trailing behind, then you just have to wait a little for them. A way of having your units stick together is to take a pretty slow unit, like a Can, and have others guard it. Pressing control while moving units will make them keep their position in the formation, but not their speed. (they will spread out along the way, but *try* to get back into the position they were in when reaching the destination) The *Simple formation* is also a way of doing this, and the units will automatically form a couple of lines, often with the right units first, too! Transports are useful for moving units, but use the air transports (Valkyrie /Atlas) intelligently and protect them. The other transportation units are harder to use, since they take more time to load/unload.

### Attacking

When attacking, remember what each unit's role is in the fight. Farks are used to repair important units that have been damaged. Bulldogs are meant to take damage and give damage back. Merls are used to shoot missiles from a distance, and don't require a clear LOS (line of sight). The question is what to repair. Merls die quickly, so one shot = dead. Knowing this, your first instinct might be to repair a Bulldog instead. Bulldogs are often the first thing that the enemy targets, and thus their HP often drops too rapidly to repair. Therefore, it is often wise to repair the middle-range units; not the giant HP monsters, not the units with a weak defence and strong/useful attack, but the average units that have acceptable HP and are not an enemy's first choice when selecting targets. One exception to this is mobile artillery. While it only has enough HP to survive one or two attacks, its attacks are well worth it, and the enemy still may not target them first, giving them a chance to deal massive damage.

### Army vs Army

Many units attacking one unit is the best thing you can do, as when you kill one of their units, they lose one source of firepower. Focusing your fire is very important. Using focus fire in a group of weak units is very effective. Focus fire is, however, less effective on HP powerhouses. When you're facing an army, always try to attack from behind or the side. Keep your units a little spread out when attacking. Not to far, but just so that area of effect weapons don't do as much damage. Have your HP powerhouses at the front, or at the front and sides. Keep em pretty close together but not side by side. Having your units spread out in this manner allows the units in the back to attack, and prevents splash damage units such as Zippers and Pyros from damaging many of your units at once.

This is the normal way of attacking an enemy army. There is the classical pincher movement too. In this, you run one third of your HP powerhouses to the left, one third to the right and have the last third stay where they are. This gives you 3 advantages:

- it's easier to get past the units and attack their weak units, or just run past them into the base
- you do more damage, since their units will have to change their target all the time and can't escape
- it makes it MUCH harder for the enemy to run away or try to get past you.

### Army vs Base

Okay, you may have made it past the ground troops, but the fight is not over (unless your enemy used up his units to defend.) Now you must face his base defence, and act depending on the type of defence he has.

*Line defence*

Gather your army and set up for battle a bit away from his base, and get ready to move in. Have the FARKS guard your main HP powerhouses, so they are in the front but can still hide behind em. Everything else behind that. When attacking, have several units attacking the HLT and plasma batteries, and use the FARKS to reclaim his Dragon Teeth. When you have a hole in the DT wall, just run into the heart of the base like a maniac. Split your tanks into 2 groups, 1 guarding your long range/high damage units and the other going into the heart of the base. Find the Fusion reactors with your second group of tanks, and try to move the other big group to a place that is easy to defend while hitting the Fusions. Behind buildings is perfect! Kill as much as you can, or kill everything ^^ If there are several lines of defence, make a hole in each DT wall and repeat the same tactics.

*Spread out defence*

Argh The tough one. While the individual towers are easy to beat, you can't run past his defences unless you enjoy suicide. (and if you do, ctrl+a and then ctrl+d will do the trick. A slice of the wrist works well, too.) Use your army to begin killing the defence step by step, structure by structure. Keep building units, and moving them into the fray (you can use air transports with the repeat command and make them drop the units a little ways from the fight). Once you start getting close to his last line of defence, think of it as a line defence and act accordingly.

*Units defence*

Think army vs army. Don't rush past them with all your units. Your units will spread out and try to go through holes in the enemy's formation. In a word, they are dead meat. If you MUST get to the base, have half of the tanks go around the units.

### Naval Battles

Naval battles are hard to predict if you don't play island maps a lot, since there are many factors to take into account. Since land units are removed, you have to think in a WHOLE new perspective. No land means that only Sea, Air and Hover units can fight (and LRC of course). Anyway, try to have air units scouting land and sea, and determine how much AA the enemy has. Ships roam around assaulting other ships, with a mix of subs, sub killers, AA ships and normal ships. Hovercrafts are the unit to use when assaulting land that's a little far from shore. Provide them with an escort consisting of planes and/or ships.

#### Ships

When using ships, have scout ships or planes scout the area in front, then send in subs and sub killers. Use long range ships at the sides to protect anything of value you might have with you (a sea transport or an aircraft carrier). When in battle, try to have the subs run away from sub killers, while your sub killers kill the enemy subs. Your subs should try to attack the most important ship in the area, and then just go crazy. When facing land, you're pretty much in for an easy win. Just have your ships blow it all up. If you face LRC, take them out first. The rest of it is out of your hands. Remember if your opponent has air superiority or LRPCs use subs as they can't hit them :)

#### Hovercraft

Use the Army vs Army or Army vs Base strategy here.

*-- addendum by Cain.*

Hovercraft are quite expensive compared to other land units, but are very useful in maps with a bit of water, able to target enemies without worrying about those pesky Goliaths... note that they're much cheaper than ships, anyway.

### Planes

Hohoho, planes. Fun stuff to attack with. Anyway, most of the strategy involving planes is simple. First, always attack the AA first, unless you are going to do a suicide mission. Kill the AA with gunships, and use bombers to kill structures. Many players use gunships only, which is a bad idea. Bombers take a little time to master but combined with gunships, they do a very good job. Scout early, so you can quickly see WHAT the enemy has and WHERE he has it. Use gunships to take out AA and act as overall decoys. Have Bombers fly in and bomb the crap out of his Fusion or whatever strategic point, and use the fighters to guard the bombers. When facing units, do the same. When facing sea, do the same thing, but add Torpedoes to bombers and gunships.

*-- addendum by Cain*

Know where the enemy commander is! In games where the commander's death is a winning condition, a lot of bombers could just converge on him, killing him on the first run.. especially the 2nd level bombers that have a nice turreted fast targeting laser! Also, gunships could create a diversion to keep the main enemy defences away from your main attack force, or you could use them to make the defences of distracted players shoot their own base...

### Using Terrain

Using terrain wisely is very important. The issue of a game can depend on a good use of terrain. First, Line of Sight (LOS) and RADAR. Both are blocked by terrain. So build your radars as high up as possible, otherwise you may not see anything. Use the relief to your advantage to hide an army or your important buildings from enemy radars. Of course, one can also take advantage of altitude to increase fire range. A couple of Guardians on top of two high hills can easily devastate a small army. Terrain also helps shield your units against attacks. Therefore, when you're building something high on top of a hill, try placing it a little behind the top. This is like crouching behind a crate where just your head and gun sticks up. But remember that terrain in Spring is deformable and can be leveled by impacts! Know the climbing ability of your units. Hovercrafts and vehicles have pretty low climbing ability. But if a foe thinks he has sealed up all exits, your K-bots can still climb the mountains where he hasn't put any Dragon Teeth Another good thing about terrain is that it mentally makes you feel safe. If there is a water barrier between me and the enemy, with 3 land bridges here and there, I probably won't have much ground defence at a location AWAY from the bridges. Presuming the map is pretty flat (like "Flooded Desert") a hovercraft assault would do A LOT of damage, right?

### Energy and all the problems with it

(in XTA) As I said before, most level 2 units require energy to move, shoot and operate in general, meaning that if you have no energy to support your army, you can't do anything! You can use this in your favor, by attacking your enemy's Fusions, or by *giving* Metal makers to your enemy when you are attacking him(although Metal makers are now turned off when given to an enemy), or he is attacking you! Things that drain a lot of energy include LRPC, Goliaths, HLT, and most level 2 units. (/in XTA)

### Paper-rock-scissors?

Try to look at all units as individuals. Even if I didn't write much about every single unit, know your favorite ones and how to use them effectively in conjunction with the others. You'll find that some units are very complementary. The only real paper-rock relationships are AA and planes... Maybe subs vs sub killers...

I didn't even mention cloaking, radar jamming, troops behaviour facing attacks, mines, etc, etc. The possibilities are immense, but I don't want to spoil your pleasure any longer, so I'll let you discover them by yourself.

**Have fun !!!**

------------------------------------------------------------------------

### Strategy Tips

- Expand! Metal is scarce. The more you get, the more you can build. Even if you have a good base, making it bigger is not a bad thing.
- Scout! Knowledge is power. You must know what your enemy is planning, and what the enemy knows about you. (Or thinks he knows about you) Check what he has, and what he is building. If he's building aircrafts, do something about it. Look for weaknesses in defense and such. If you or your ally are scouting, don't look away. Gather as much information as possible. ALL buildings once in sight range will remain visible as 'ghost' buildings if this option isn't turned off by the host.
- Radar = GOOD ^^ Radar checks areas for units, increases your units LOS and is, overall, quite helpful. A radar with your army makes a big difference when attacking. But so is Jamming. Jamming is good for sneak attacks. They are cheap, so just build one and make your units guard it.
- Work Together! Often I see allies who just mind their own business and don't care what the other person's doing. DON'T DO THIS!!! Listen to each other, make up a plan. Prepare combined attacks. If there is a 2v2, then it's 2 allies vs 2 allies. Not a FFA with neutral partners. Type h to share units. Left click on your resource bars to auto share resources with allies.
- Power Plants. In order to level out the building costs, it is important to make a smooth transition from the least powerful generators to the most powerful ones in succession. First solar, then Geo, then mobile/mini Fusion then Fusion.
- Check your resource bar. Try to keep a fine line between having too many resources/wasting, and having a nanostall. Use your factories and such accordingly. If you have a lot of resources, try using your old level 1 factories to build some units. Also, try to find the time to build an energy/metal storage...
- Spread out your buildings/units. Since every unit explodes, they damage units close to them. This is especially important with Fusions... (I once saw someone put 13 mobile fusions close to each other... blew up half his base with 2 (!!!) LRPC shots...)
- Queue (yeah, easy word for it too :/) up orders! You can almost win the game by pausing, queuing up some stuff, and then go eat lunch. Not really, but holding shift is good whilst putting up buildings.
- Guard = following and protection. Use planes to guard your tanks, subs to guard your transports, construction units to automatically repair important units and so on. They will choose to attack whatever is hurting their guard object first. You can even do this to structures, for units who are built to move to a unit's position or AA to attack whatever is shooting on the Fusion reactors, etc... Overall, this makes working with several unit types easier.
- Reclaim stuff (sucking it in and transforming it into resources). When you're starting to run low on metal, reclaim the enemy's and your own corpses. Trees give energy, so if you're out of energy in the beginning... You can reclaim a whole area by shift-clicking.
- The key for porcers are to build LRPC. Or even better, build a nuke and use LOTS of planes to kill his anti-nuke. Then BOOM! Also as you have way loads more metal and space to move in than your opponent, you can easily afford 2 nukes. An anti-nuke can't deal with 2 nukes heading towards it(and if you aim the nukes at the anti-nuke...^^!
- Experiment! I suggest you go into single player and try every unit. Use commanders for arm, and small battle (watch that Krogoth!) for core. Try every approach to a problem. Remember, just because a unit is good, it's not invincible. Also, try how much metal and energy a building uses while in operation. For instance, a level 1 factory uses about 50 energy and 5 metal. This varies depending on what you build. This could help you prevent nanostalling.
- Several types of factories. Yeah, even if it costs money. An advanced building costs as much as a Bulldog or 2... You've got the time, and the money. Build it.
- Raid. Take the Weasel or a couple of Peewees on a cruise right by the enemy's mexes. Having trouble finding them? Type F4 to see where the ground is drained ^^ (Edit) This doesn't apply anymore, but you can still see where a mex is by trying to build one of your own there. If you can't, there's already one on the spot... A tip is to stay away from the Commander, or use buildings as hostages. Hide behind stuff and kill it off, then move on. If you're sure you're going to die, move close to a building and self-destruct.
- Just because Peewees are better then AK's doesn't meant that AK's are useless. (And so on). In fact, no unit is useless. If you believe it is, try it once. On what it was meant to do.
- Mix armies. Oh boy, if you haven't heard this one a thousand times before, you've only been playing Half-Life for the last 7 years or something. Even if Goliaths rule, a couple of missile units will make them much more effective.
- FARKs are useful in combat. Always have 1-3 with you. Reclaiming DT, or doing what they were meant to do: Repair -.-\* (also, when I say FARKs somewhere in the guide, construction units work too...)
- Ask questions. No one is going to laugh at you. And if someone does, he's an ass and should be paid no mind. No question is too stupid. Just don't expect anyone in the heat of a battle to answer to *how do I play*?.
- Learn! If you lost, use the replay to watch the game and try to understand why you died. What did the enemy do better than you? What was their key to winning? And so on.
- *The Readme* file has some cool keyboard shortcuts... check it out.
- Develop! Are you a programmer, a 3D design artist or just some regular Joe? Come to the forum for a talk, chatter, and make wacky suggestions! In the end you may contribute to making Spring better! Remember, Spring is open source. So just dive into there and replace AK's with flying monkeys in space suits or whatever.
- Try having some good music on when playing. It can give you a good kick. I recommend the War of the Worlds (the strategy game, yes it exists) Eve of the War Another great choice is, of course, <a href="http://www.fileuniverse.com/?page=listing&amp;ID=54" class="external text" rel="nofollow">the original TA music</a>! You can choose whatever music you like, though.
- Need more strategy and tips? Since Spring is a remake of TA, any TA strategy guide works...
- LAST BUT NOT LEAST: **Don't get too serious. It's only a game.**

This guide was written by Kixxe before everyone edited (and improved!) it mercilessly.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Spring guide](https://springrts.com/wiki/Spring_guide).*
