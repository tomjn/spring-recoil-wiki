---
title: "On off scripts"
source_url: "https://springrts.com/wiki/On_off_scripts"
categories:
  - "Emmanuel"
---
# On off scripts

<div class="mw-parser-output">

---**know and change the on off button state**---

defined in UnitDef by the tags: ` ActivateWhenBuilt=false, OnOffable=true, `

switched by player or by script action

- detect the switching of on/off button

` local starton startoff `

`function script.Activate ( ) `

`starton=1 `

`end `

`function script.Deactivate ( ) `

`startoff=1 `

`end `

- know the state of on/off

` local isactive `

`isactive==Spring.GetUnitIsActive(unitID) `

- change the on/off state(1=on,0=off)

` local something `

`if something==true `

`then SetUnitValue (20,1) `

`else SetUnitValue (20,0) `

`end `

- - note : the lua equivalent is maybe not possible

- [SpringRtsTutorialAnimDef](/springrtstutorialanimdef) return to the list of animDef exemples

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [On off scripts](https://springrts.com/wiki/On_off_scripts).*
