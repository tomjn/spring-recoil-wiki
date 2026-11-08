---
title: "Talk:Game and Unit development"
source_url: "https://springrts.com/wiki/Talk:Game_and_Unit_development"
---
# Talk:Game and Unit development

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

This page is a diseased wasteland of unorganized stuff piled all into one page.

Needs to be sorted and cleaned up. Did a bit of work with Forboding angel tonight to clean up a few things.

--[Smoth](/users/smoth) 05:47, 12 February 2012 (CET) Further cleaned out opinions, sorted tutorials into their own section, removed the demotivating rubbish. seriously, no one cares about the drama, don't put it here.

### beginner bleprint mod

- i will write another commander mod using all FLOZI new wiki addition

since beginning i used empiric files made from test and containing obsolete or useless tags or worst some undocumented that i thinked to be needed

- i will write a simple mod dotwar or cubic with a representative of all game behaviour (wind metal nano radar factory etc)
- i have the knowelge for make basic things and the motive to learn all lua unitdef animdef for air land sea this winter (actually i understand only land unit basic at 93%)

#### transportation = engine mess

- transportation is the third animdef part after builder and weapon
- transportation respresent 1% of all ingame units made (including ota tm)
- zdkfz mastered this since ota
- all game use gadgets when a lot is possible with animdef
- when supcom released evryone wondered the massive peewee transporter flying rack and :requested engine suport for all needed tags but suddently when done this fall to :oblivion(thx ZK)
- there was a mantis "bug" report about radar keeping activation when transported what :broked the total annihilation ATARI gameplay
- **SPRINGRTS freedom of mod a WARZONE2100 modular unit construction gameplay can be :reached by transporting seeker/radar turrets activated on choosed hull**
- actually its :not only needed to make a unit for each diferent variation of a 16weapon boat :but worst this prevent that *the 16 turets of yamatoo cruiser sight more than a flyer :when attacked by a swarm*(when transporting turet will allow 4999turrets per boat player
- why the transportee canbetargeted is a gamerule and not a unitdef as the :canshoot when transported ???
- i plan to make a complete warzone2100 game and need lot of test since the 'bugs" of the :transportee collision volume sometime blink or dispear is "fixed" : i must know if :transportee can shoot can be shoot if the gamerule work as needed and **to request a tag :that allow sensors for transportee**
  - worst of all  : its the transporter design that must decide if the transportee can sight :can shoot canbe shoot inside it : when you get in a boat or ON a boat its not you that :decide if you can see or shoot nor a god rule but the location where you are on this boat !

its the transporter animdef to change it by overwriting the transportee tags to decid if the sight the los the colision are kept (if atari tm player want not the core commander sight shoot targeted under armatlas then the armatlas.bos must get/store/set the core commander tags for keep the fair balanced 1997 gameplay )

- (search function dont found the expression "GetGroundMoveTypeData" so i dont now if that work with radar sonar and los but turnspeed i tested can be changed in game by animdef code...)

` Spring.MoveCtrl.SetTag ( number unitID, number tag ) -> nil `

`Spring.MoveCtrl.GetTag ( number unitID ) -> nil `

- found here : [/wiki/Lua_MoveCtrl](/lua-movectrl)
  - here i writed a animdef scrit that keep the radar value of the transported unit and copy it to the transporter:

--this code work with turnrate (tested) but i presume (undocumented) MoveCtrl will work for radar (...move~=sensor?)-- ` local function keep radar of passager() local sensor,sensor0,sensor1,sensor2,passager1ID,passager2ID while true do Sleep(900) passager1ID,passager2ID=Spring.GetUnitIsTransporting() sensor0=Spring.MoveCtrl.GetGroundMoveTypeData((unitID),"radar") sensor1=Spring.MoveCtrl.GetGroundMoveTypeData((passager1ID),"radar") sensor2=Spring.MoveCtrl.GetGroundMoveTypeData((passager2ID),"radar") if sensor1~=nil then if sensor1>sensor0 && sensor1>sensor2 then sensor==sensor1 end end if sensor~=nil then if sensor2>sensor0 && sensor2>sensor1 then sensor==sensor2 end end Spring.MoveCtrl.SetGroundMoveTypeData((unitID),"sensor",628) end end `

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/Talk:Game_and_Unit_development). Original page: [Talk:Game and Unit development](https://springrts.com/wiki/Talk:Game_and_Unit_development).*
