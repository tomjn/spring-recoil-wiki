---
title: "Dynamic scripts"
source_url: "https://springrts.com/wiki/Dynamic_scripts"
categories:
  - "Emmanuel"
---
# Dynamic scripts

<div class="mw-parser-output">

changing unitdef ingame by animdef

exemple: ` `

`local=word --define a variable storage `

`word=UnitDefs[unitDefID].turnRate --store the turnrate in word variable `

`Spring.MoveCtrl.SetGroundMoveTypeData((unitID),"turnRate",6280) --set a new turnrate at the 6280 value`

## there is diferent instruction for change diferent cathegory of data in UnitDef file:

- 

Spring.SetUnitSensorRadius ( number unitID, string type, number radius ) -\> nil \| number newRadius

    type can be:
    "los","airLos","radar","sonar","seismic","radarJammer","sonarJammer"

- 

Spring.MoveCtrl.SetAirMoveTypeData

    ( number unitID, string key, value  ) -> nil
    ( number unitID, table values ) -> nil
    supported keys:
    numbers:
      wantedHeight
      myGravity
      maxBank
      maxPitch
      turnRadius
      maxAcc
      maxAileron
      maxElevator
      maxRudder
    booleans:
      collide
      useSmoothMesh

- 

Spring.MoveCtrl.SetGroundMoveTypeData

    ( number unitID, string key, value  ) -> nil
    ( number unitID, table values ) -> nil
    supported keys:
    numbers:
      baseTurnRate
      turnRate
      accRate
      decRate
      maxSpeed
      maxReverseSpeed
      requestedSpeed
      requestedTurnRate
    booleans:
      floatOnWater

- 

Spring.MoveCtrl.SetGunshipMoveTypeData

    ( number unitID, string key, value  ) -> nil
    ( number unitID, table values ) -> nil
    supported keys:
    numbers:
      wantedHeight
      turnRate
      accRate
      decRate
      altitudeRate
      currentBank
      currentPitch
      breakDistance
    booleans:
      collide
      useSmoothMesh
      bankingAllowed
      dontLand
      airStrafe

- - NOTE: not all keys and not all values may work correctly.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Dynamic scripts](https://springrts.com/wiki/Dynamic_scripts).*
