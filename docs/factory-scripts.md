---
title: "Factory scripts"
source_url: "https://springrts.com/wiki/Factory_scripts"
categories:
  - "Emmanuel"
---
# Factory scripts

<div class="mw-parser-output">

FACTORY SCRIPT

<sub>Factory are totally diferent synthax from mobile builder due to engine design:</sub>

## Basic code

` `

local pad = piece "pad" --piece where the unit build is landed local nano = piece "nano" --piece where the nano particule come from function script.QueryBuildInfo ( ) return pad end function script.QueryNanoPiece ( ) return nano end function script.Activate() StartThread( product ) end function product() Signal(1) SetSignalMask(1) SetUnitValue ( 19,1)--ask evacuate area SetUnitValue ( 18,1)--switch the UnitDef Yardmap to open SetUnitValue ( 5,1)--start nano return 1 end function script.Deactivate() StartThread( endproduct ) end function endproduct() Signal(1) SetSignalMask(1) SetUnitValue ( 5,0)--end nano SetUnitValue ( 18,0)--switch the UnitDef Yardmap to close SetUnitValue ( 19,0)--stop to ask evacuate area return 0 end

note: if the pad piece is more high than ground then the unit will fall when completed

### advanced script

- can have arms with multiple nao emiter moving pad and checking the unit completion

--UnitDef tag involvd in the factory :--

Builder = 1,--the unit build some static or mobile units WorkerTime = 999,--amount per second can be spent in build of metal & energy max CanBeAssisted=1, buildoptions = {product1,product2}

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Factory scripts](https://springrts.com/wiki/Factory_scripts).*
