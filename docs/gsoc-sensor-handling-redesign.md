---
title: "GSoC Sensor handling redesign"
source_url: "https://springrts.com/wiki/GSoC_Sensor_handling_redesign"
categories:
  - "GSoC"
---
# GSoC Sensor handling redesign

<div id="gsoc-idea-sensor-handling-redesign-simplification" class="section mw-parser-output">

## GSoC idea: Sensor handling redesign / simplification

### Why

The Spring Engine is currently capable of significant real-world applications in the area of simulation of certain types of events or situations; a better sensor system could greatly improve Spring's applicability to an even wider range of projects.

### What

Currently there are a number of different "sensor" systems in the engine: LineOfSight, Radar, Sonar, and Seismic. Some sensors can be jammed, some cannot. Some respect terrain, and some are always circular in coverage.

A new sensor system should integrate the current LOS, Radar, Sonar, Seismic systems into a streamlined codebase, to reduce amount of code in each implementation, and it should add additional features which would be then available for all types, while improving efficiency where possible.

Preferably this all should also be faster than the current system or a compelling argument/experiment should be made that shows there cannot be a faster system with the same features.

### Required skills

- Knowledge of C++
- Bachelor level algorithmics knowledge
- Bachelor level software engineering knowledge

### Difficulty

Estimated: hard

### Technical details

- It should be possible to specify different behaviours for sensors of either type: is it based on e.g. simple 2d or 3d distance check or terrain raycast (i.e. LOS).
- It should be possible to use multiple different types of radar in one game (possibly current seismic sensors system could be a type of radar too, internally).
- It should be possible to use "reversed LOS" for the sensor (instead of sight distance, detection distance is used - like cloak now).
- There should be a generic mechanism for jamming (removing coverage of an area) and stealth (only this unit is not detectable using this sensor) for each type of sensor.
- There should be support for Lua defined areas that block sensors operating in that area, hide units in that area for certain sensors, or block the rays of terrain-raycasting sensors.
- There should be support for creating false positives and false negatives using Lua.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [GSoC Sensor handling redesign](https://springrts.com/wiki/GSoC_Sensor_handling_redesign).*
