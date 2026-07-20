---
title: "Transport scripts"
source_url: "https://springrts.com/wiki/Transport_scripts"
categories:
  - "Emmanuel"
---
# Transport scripts

<div class="mw-parser-output">

--**transportation**--

## ground sea transports

- to check and improve

` `

local loader=piece "loader" function script.QueryTransport(passengerID) return loader end function script.TransportPickup (passengerID) Spring.Echo(passengerID) SetUnitValue(6, 1)-- BUSY set BUSY to 1; Spring.UnitScript.AttachUnit(slot, passengerID) currSlot=currSlot+1 SetUnitValue(6, 0)--set BUSY to 0; end function script.EndTransport(each, passengerID)--ground UnloadLandFlood after the last unit unloaded. end

function script.TransportDrop (passengerID, x, y, z ) SetUnitValue(6,1)-- BUSY Spring.UnitScript.DropUnit(passengerID) SetUnitValue(6,0) end

## Air transports

- todo

function script.BeginTransport(passengerID) end

### ModRule tags involved in transportation :

bool transportAir Default: false

Can aircraft be transported?

bool transportShip Default: false

Can ships be transported?

bool transportHover Default: false

Can hovercraft be transported?

bool transportGround Default: true

Can ground units be transported?

bool targetableTransportedUnits Default: false New in version 89.0

Can transported units be targeted by weapons? true allows both manual and automatic targeting.

### UnitDef tags involved in transportation :

transportCapacity=1,-- - Int - This is simply the number of units it can hold transportMass=15000,-- Float - This is the total maximum mass of units it can hold (Mass being another unitdef tag which defaults to the buildCostMetal) transportSize=6,-- - Int - This is the maximum size of unit it can hold, in terms of the transportees footprintX minTransportSize=1,-- - Int - The minimum size of footprint that this transport can hold minTransportMass=1,-- - Float - The minimum mass a unit must have to be transported by this (N.B. this is not quite the inverse of transportMass) cantBeTransported=true,-- - bool - This unit can / cannot be transported by any transport transportByEnemy=true,-- - bool - This unit can / cannot be transported by enemy transports ReleaseHeld = true, --transported units survive if transporter dies HoldSteady=1, --useless for ground transport --maybe transported units tilt and turn like the transporter transportUnloadMethod = 0,--UnloadLand (0)defaultunload --UnloadDrop (1)fly over and drop unit-- UnloadLandFlood (2) land, then release all units at once loadingRadius=999,--defaults to 220 isfireplatform=true,

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Transport scripts](https://springrts.com/wiki/Transport_scripts).*
