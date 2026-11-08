---
title: "Gamedev:DebugDrawModes"
source_url: "https://springrts.com/wiki/Gamedev:DebugDrawModes"
categories:
  - "Game_Dev"
---
# Gamedev:DebugDrawModes

<div id="debug-drawing-modes" class="section mw-parser-output">

## Debug Drawing Modes

Spring has several drawing modes which are useful for debugging and performance checking. They are listed below by [UI commands](/ui-commands) with their default key binding.

### /Debug (alt+b)

<div class="floatleft">

[<img src="/images/Debug.jpg" decoding="async" alt="/Debug" />](/images/Debug.jpg)

</div>

Draws a toggleable list of engine functions and a breakdown of how much time is spent computing them. When toggled on a line graph is drawn to illustrate the change in performance over time.

Since 97.0 there is a new **Frame Grapher** visualisation which shows how the last half-second was spent:

- Green are video frames
- Red are simframes
- Blue is swapBuffer (gpu/vsync)
- Pink is lua gc

### /DebugColVol (alt+v)

<div class="floatleft">

[<img src="/images/DebugColVol.jpg" decoding="async" alt="/DebugColVol" />](/images/DebugColVol.jpg)

</div>

Draws unit and feature [collision volumes](/gamedev-collisionvolumes) as purple meshes. When hit by a weapon the meshes turn red. Since 99.0 weapon debug spheres are also drawn in this mode for the [AimFromWeapon()](/animation-luacallins#weapons) position, [QueryWeapon()](/animation-luacallins#weapons) (muzzle) position and unit target position. Shields spheres are drawn in blue. Weapon 'Query' points are in red, orange if aiming. Weapon 'AimFrom' points are in yellow. The unit centre is in magenta, and if it is different the target point of the unit is in red.\

### /DebugPath (alt+p)

<div class="floatleft">

[<img src="/images/DebugPath_Close.jpg" decoding="async" alt="/DebugPath Close up view" />](/images/DebugPath_Close.jpg)

</div>

<div class="floatleft">

[<img src="/images/DebugPath_Far.jpg" decoding="async" alt="/DebugPath Far out view" />](/images/DebugPath_Far.jpg)

</div>

Draws pathfinder routes, colour coded by accuracy.

- Red is the most finely computed pathing
- Green is intermediate paths
- Blue is least accurate long range path

### /DebugTraceRay

It is meant for debugging trajectories of ballistic projectiles. <a href="https://springrts.com/mantis/view.php?id=4664" class="external text" rel="nofollow">Currently broken in 98.0</a>

### /DebugDrawAI

<div class="floatleft">

[<img src="/images/DebugDrawAI_E232AI.jpg" decoding="async" alt="/DebugDrawAI implemented in E232AI" />](/images/DebugDrawAI_E232AI.jpg)

</div>

This mode is toggled through the engine but is up to the native AI to implement itself. The image shows how [E232AI](/ai-skirmish-list) implements a real-time threatmap rendering and a real-time performance profiler.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Gamedev:DebugDrawModes](https://springrts.com/wiki/Gamedev:DebugDrawModes).*
