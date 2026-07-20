---
title: "Builder scripts"
source_url: "https://springrts.com/wiki/Builder_scripts"
categories:
  - "Emmanuel"
---
# Builder scripts

<div class="mw-parser-output">

--**NANO builder**--

this script is requested for enabling the construction of unit by a vehicule,repair, capture,reclaim,recycle,teraform ground

this scripts are not compatible with transportation script (not sure who is winner when both)

<sub>note : construction by factory request a diferent kind of script</sub>

## basic script:

` `

local nano = piece "nano" local body = piece "body" function script.AimFromWeapon() return body end

--(not sure if it function really exist ) -- origin the direction of the nano turet will sight

function script.StartBuilding(y0,x0)

--seem not y elevation will never output

SetUnitValue(19,1)

-- ask evacuation of area

Spring.SetUnitNanoPieces(nano)

--piece where from the nano particule output

SetUnitValue(5,1)

--start emiting nano

end

function script.StopBuilding() SetUnitValue(5,0)

--stop emiting nano

SetUnitValue(19,0)

--stop asking evacuation of area

end

### advanced script:

- using turet for nano emiter and conditionnal start

UnitDef tags involved in builder activity:

(more tags exist since updates : lets check [Gamedev:UnitDefs](/gamedev-unitdefs): builders wiki page)

` `

Builder=true,

--the unit build some static or mobile units

BuildDistance=199,

--the unit build or repair or reclaim or restore or capture or resurect at this distance

WorkerTime=555,

--amount per second can be spent in build metal or energy max

Reclaimable=true,

--the unit can be eated by a unit with canreclamate=1

canReclaim=true,

--the unit can eat another unit not having reclamable=0

ShowNanoSpray =true,

--if false no spray when build

CanBeAssisted=false,

--when the unit start a task a unit that canassist=1 can help

CanRepair=true,

--can repair unit damaged

CanRestore=true,

--can reset the ground at the origin map design

CanAssist=true,

--can help other having not canbeassisted =0

Capturable=false,

--can be stoled by ennemy with cancapture=1

CanCapture=true,

--can stole ennemy unit not having canbecaptured=0

canResurrect=false,

--can resurect unit corspes at a price(unknow)

RepairSpeed=777,

--max spend in repair

ReclaimSpeed=1600,

--max gain in reclaim (corpses will not dispear before complet drain)maybe memory of drain

Capturespeed=8000,

--maybe the amount of needed (per second) for equal the damge of the unit before being stoled

terraformSpeed=600,

`--amount spend for restore ground at map staart on a zone (unknow calculation) `

buildoptions = {buildunit1,buildunit2},

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Builder scripts](https://springrts.com/wiki/Builder_scripts).*
