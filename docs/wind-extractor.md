---
title: "Wind extractor"
source_url: "https://springrts.com/wiki/Wind_extractor"
categories:
  - "Emmanuel"
---
# Wind extractor

<div id="read-the-wind-speed-and-direction-from-the-map-randomiser" class="section mw-parser-output">

## Read the wind speed and direction from the map randomiser

the battle seting or map maker define a wind minimal and maximal speed

so when the values are not equal its a gambling

and generaly this values is used for being converted in energy by "elolienne"

(seem english not use them...)

` `

winddirX,winddirY,winddirZ,windstrength,windnormDirX,windnormDirY,windnormDirZ=Spring.GetWind() rotorspeed=windstrength/5 Spring.UnitScript.Spin(rotor,z_axis,rotorspeed,0.3) windradian=Spring.GetHeadingFromVector(windnormDirX,windnormDirZ) Turn(turet,y_axis,windradian,rotorspeed)

- because windspeed is from 1 to 99 is often needed to divide it
- because the wind direction is gived as vector it must be converted in radian for turet direction

- [SpringRtsTutorialAnimDef](/springrtstutorialanimdef) return to the list of animDef exemples

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Wind extractor](https://springrts.com/wiki/Wind_extractor).*
