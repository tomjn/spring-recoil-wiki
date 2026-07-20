---
title: "AI:HughsUnitGroupingHeuristic"
source_url: "https://springrts.com/wiki/AI:HughsUnitGroupingHeuristic"
categories:
  - "AI_Dev"
---
# AI:HughsUnitGroupingHeuristic

<div id="unit-grouping-heuristic" class="section mw-parser-output">

## Unit grouping heuristic

### Summary

The goal of this heuristic is to concentrate units together, to concentrate firepower optimally. In addition, the units will automatically retreat when necessary to reorg.

This heuristic can be given a group of units, a target, and will automatically:

- group the units together physically
- move the units to the target
- fall back to reorg when necessary
- continue the attack

This heuristic was created by Hugh Perkins

### Details

- Select a target to attack
- Find the 5 attacking units closest to the target
- Measure the distance between the 5th and the 1st closest unit
- If the distance is more than some threshold, order the tanks to move to the position of the third unit
- Otherwise order the units to move to the target

The behavior is to form a pack of 5 which pushes into the enemy. Other units will move towards it over time. If the two leading tanks are destroyed, new tanks will keep moving towards the remaining pack. If a third tank is destroyed, the pack will retreat towards the new third-closest unit, which is probably back at base somewhere.

- Computationally it runs in Od, where d is number of attacking units
- Memorywise, it uses constant memory O.

### Example implementation, C#

See packcoordinators/AttackPackCoordinator.cs in CSAI

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:HughsUnitGroupingHeuristic](https://springrts.com/wiki/AI:HughsUnitGroupingHeuristic).*
