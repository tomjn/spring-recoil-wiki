---
title: "Health scripts"
source_url: "https://springrts.com/wiki/Health_scripts"
categories:
  - "Emmanuel"
---
# Health scripts

<div id="get-the-health-of-the-unit-in-animdef" class="section mw-parser-output">

## Get the health of the unit in AnimDef

- read the "damage" full health in UnitDef data:

<!-- -->

    local maxhealth
    local percenthealth,health,maxHealth,paralyzeDamage,captureProgress,buildProgress

    health,maxHealth,paralyzeDamage,captureProgress,buildProgress=Spring.GetUnitHealth(unitID)

    percenthealth=(health/maxHealth)*100

- print all the data in the chat box and infolog for control :

<!-- -->

    Spring.Echo("health="..health,"maxHealth="..maxHealth,"paralyzeDamage="..paralyzeDamage,
    "captureProgress="..captureProgress,"buildProgress="..buildProgress,"percenthealth="..percenthealth.." %")

    --health=19921.25390625,maxHealth=20000,paralyzeDamage=0,captureProgress=0,buildProgress=1,percenthealth=99.606269836426 %
    (unitID)

- - note the buildprogress and captureprogress values are in the range 0 to 1 (1 = complete)

- [SpringRtsTutorialAnimDef](/springrtstutorialanimdef) return to the list of animDef exemples

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Health scripts](https://springrts.com/wiki/Health_scripts).*
