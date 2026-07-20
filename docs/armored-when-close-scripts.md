---
title: "Armored when close scripts"
source_url: "https://springrts.com/wiki/Armored_when_close_scripts"
categories:
  - "Emmanuel"
---
# Armored when close scripts

<div class="mw-parser-output">

--activation of the UnitDef modifier--

in UnitDef the tag `damagemodifier=0.1,` mean 1/10 of damage will be deduced of health when activated by the AnimDef switch

- know the state of armored and the armormodifier

` local armored,numberarmorMultiple `

`armored,numberarmorMultiple=Spring.GetUnitArmored(unitID) `

- armor of UnitDef activated when variable set to 1

` local doorclosed `

`if doorcloosed=1 `

`then `

`Spring.SetUnitArmored(unitID,true) `

`else `

`Spring.SetUnitArmored(unitID,false) `

`end `

- [SpringRtsTutorialAnimDef](/springrtstutorialanimdef) return to the list of animDef exemples

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Armored when close scripts](https://springrts.com/wiki/Armored_when_close_scripts).*
