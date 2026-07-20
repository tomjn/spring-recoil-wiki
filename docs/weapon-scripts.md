---
title: "Weapon scripts"
source_url: "https://springrts.com/wiki/Weapon_scripts"
categories:
  - "Emmanuel"
---
# Weapon scripts

<div id="weaponery" class="section mw-parser-output">

## WEAPONERY:

*following exemples are designed for being a vehicule with 3 weapons*

(ex: a tank with a vertical missile launcher a turet canon a front flamer )

    keep in mind the fact that weapon1 is the sight ,

that make the unit will move at weapon1 range if order allow roam

(other weapon will not make the vehicule move )

    here the list of 3d model piece needed (can be jusqt some empty :

` `

     local turet3,gun3 = piece ('turet3','gun3')
     local tir3 = piece "tir3"
     local turet2,gun2 = piece ('turet2','gun2')
     local tir2 = piece "tir2"
     local tir1 = piece "tir1"
     local aim1 = piece "aim1"
     local aim2 = piece "aim2"
     local aim3 = piece "aim3"

### UNCONDITIONAL WEAPONS

` `

    function script.AimWeapon1()
    return 1
    end 

    function script.FireWeapon1()
    end

    function script.AimFromWeapon1()
    return aim1
    end

    function script.QueryWeapon1()
    return tir1
    end

#### weapon with turret

` `

    function script.AimWeapon2(y2,x2)
      Signal(4)
      SetSignalMask(4)
      Turn(turet2,y_axis,y2,2)
      Turn(gun2,x_axis,- x2,2)
      WaitForTurn(turet2,y_axis)
      WaitForTurn(gun2,x_axis)
      return 1
    end 

    function script.FireWeapon2()
    end

    function script.AimFromWeapon2()
    return aim2
    end

    function script.QueryWeapon2()
    return tir2
    end

##### weapon with limited rotation turet

    (the turet will turn only if target is between -0.5 to 3 radian mean on side)
    this can be done with elevation too

` `

    function script.AimWeapon3(y3,x3)
      Signal(8)
      SetSignalMask(8)
      if  
        y3<3   
      and 
        x3>-0.5  
          then 
          Turn(turet3,y_axis,y3,2)
          Turn(gun3,x_axis, - x3 ,2)
          WaitForTurn(turet3,y_axis)
          WaitForTurn(gun3,x_axis)
          return 1
          end 
    end

    function script.FireWeapon3()
    EmitSfx (tir3,257) Sleep(50) --this unmandatory make smoke at shooting point
    end

    function script.AimFromWeapon3()
    return aim3
    end

    function script.QueryWeapon3()
    return tir3
    end

- Signal(1) & SetSignalMask(1) are using ^2 if ever you need more than 30 of them you must use table names
  - the folowing UnitDef tag are involved :

` `

highTrajectory=0, weapons = {\[1\]="verti_missile1",\[2\]="canon2",\[3\]="flamethrower3", slaveTo=0.0, mainDir={0.0, 0.0, 1.0}, maxAngleDif=180.0,

- [SpringRtsTutorialAnimDef](/springrtstutorialanimdef) return to the list of animDef exemples

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Weapon scripts](https://springrts.com/wiki/Weapon_scripts).*
