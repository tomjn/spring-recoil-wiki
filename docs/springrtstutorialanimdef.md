---
title: "SpringRtsTutorialAnimDef"
source_url: "https://springrts.com/wiki/SpringRtsTutorialAnimDef"
categories:
  - "Emmanuel"
---
# SpringRtsTutorialAnimDef

<div id="animation-script-examples" class="section mw-parser-output">

## Animation Script Examples

### Basic Scripts

this scripts make the gameplay

- [builder scripts](/builder-scripts) - AnimDef building unit oustside ingame
- [factory scripts](/factory-scripts) - AnimDef producing unit inside themself ingame
- [weapon scripts](/weapon-scripts) - AnimDef shooting targets ingame
- [transport scripts](/transport-scripts) - AnimDef loading unloading units ingame
- [wind extractor](/wind-extractor) - AnimDef checking wind speed and direction ingame

### Common Scripts

this scripts are cosmetic or modifiers

- *start stop scripts* - AnimDef acting when mobile or static ingame
- [on off scripts](/on-off-scripts) - AnimDef using the switch menu key on off ingame
- [armored when close scripts](/armored-when-close-scripts) - AnimDef enabling damagemodifier ratio ingame
- [emiter scripts](/emiter-scripts) - AnimDef emiting smoke, buble, wave, weapon, explosion, ceg ingame
- *victim scripts* - AnimDef check if the unit is attacked by what and where and how much
- *death scripts* - unit diying with style ingame
- *born scripts* - unit borning with style ingame
- [health scripts](/health-scripts) - AnimDef know own maxhealth, actual health, paralyser %, born % ingame
- [dynamic scripts](/dynamic-scripts) - AnimDef changing UnitDef values ingame
- *perpiece scripts* - AnimDef check piece for critical hit location or dedicaced damages
- *context scripts* - Animdef know who is interacting with them (transport build fight)
- *collision scripts* - crushing or so ?

### Complex Scripts

this scripts are the anims that make realistic renders

- *location scripts* - AnimDef check position on map,slopes ,direction of attack ingame
- *animation scripts* - AnimDef moving wheels leg arm crane accurately ingame
- [loop scripts](/loop-scripts) - AnimDef thing repetadly or forever condition or not ingame
- *data scripts* - AnimDef lot of info or piece ingame

#### What cannot be done in AnimDefs ?

- Some things are not possible in SpringRts engine :

1.  Factory will not move
2.  Factory will not own ON/OFF switch
3.  Transport will not build(confirm? who is exclusif ?)
4.  metal extractor will do nothing else(exclusif)
5.  changing the height of the radar and sonar and view sensors
6.  

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [SpringRtsTutorialAnimDef](https://springrts.com/wiki/SpringRtsTutorialAnimDef).*
