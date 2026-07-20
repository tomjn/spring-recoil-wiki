---
title: "Lua camState"
source_url: "https://springrts.com/wiki/Lua_camState"
categories:
  - "Lua"
---
# Lua camState

<div class="mw-parser-output">

## TL;DR

**px**, **py** and **pz** are camera position in world coords.

### Free camera

**rx** and **ry** are camera rotation in radians about the X and Y axes respectively, where an rx of 0 is horizontal and an ry of 0 is facing south, positive values running anticlockwise. **rz** currently (91.0) does nothing.

**dx**, **dy** and **dz** have *nothing* to do with camera rotation.

## The raw info

    I wanted to use Spring.SetCameraState( table camState, number camTime) -> nil | boolean

    The wiki said: camState has the same format as the output of Spring.GetCameraState().

    So I ran Spring.Echo(Spring.GetCameraState())
    All I got was:
    <table>
    TABLE: 

    So, I ran, for every kind of camera:
    for index,value in pairs(Spring.GetCameraState()) do
        Spring.Echo(index,value)
    end

    This is what I got:

    Switching to Overhead (TA) style camera
    name : "ta"
    mode : 1
    px,py,pz : Position of the ground point in screen center (not camera position)
    dx,dy,dz : Camera direction vector?
    zscale: how tilted is the camera, from 10 (near horizontal) to 0.05 (near vertical). We have y/z = 1.0/zscale (with a -1 thrown in if flipped)
    height : how much above the ground is the camera, cannot be negative -- '' it's absolute height of the camera, ie the camera positions y value, actually (so no difference if cam is above mountain or valley)~~~~''
    flipped : -1 for when south is down, 1 for when north is down

    exemple:
    px, 2000
    py, 70
    pz, 1800
    flipped, -1
    dy, 0
    name, ta
    zscale, 0.5
    height, 500
    mode, 1
    dx, 0
    dz, 0

    Switching to Total War style camera
    rz, 0
    rx, -0.9727737903595
    name, tw
    ry, 3.1415927410126
    px, 477.53298950195
    py, 100
    pz, 447.54751586914
    mode, 2

    Switching to Rotatable overhead camera
    name : "rot"
    mode : 3
    px,py,pz : Position of the ground point in screen center (not camera position) -- '' actually it seems to be the camera position to me (I set the height with py, not so sure about the others...) ~~~~''
    dx,dy,dz : Camera direction vector?
    rx,ry,rz : Camera rotation?
    oldHeight : how much above the ground is the camera, cannot be negative, cannot be changed (I guess it's just in for when switching to a view that requires it next)

    exemple:
    px, 522.32415771484
    py, 600
    pz, 441.25302124023
    rz, 0
    dx, -4.9136563262664e-008
    dy, -0.82505232095718
    name, rot
    ry, 3.1415927410126
    rx, -0.9727737903595
    mode, 3
    dz, -0.56205677986145
    oldHeight, 500

    Switching to Free style camera
    avx, 0
    px, 522.32415771484
    gravity, -500
    pz, 873.39385986328
    autoTilt, 2.6179938316345
    dx, -0.011240424588323
    dy, -0.82505232095718
    dz, -0.5619443655014
    py, 964.28167724609
    gndOffset, 16
    gndLock, -1
    goForward, -1
    mode, 4
    tiltSpeed, 2.6179938316345
    velTime, 1.5
    slide, 0.5
    avz, 0
    rx, -0.9727737903595
    invertAlt, -1
    rz, 0
    ry, 3.1615927219391
    avy, 0
    scrollSpeed, 100
    name, free
    fov, 45
    vz, 0
    avelTime, 1
    vx, 0
    vy, 0

    Switching to Smooth style camera
    px, 522.32415771484
    py, 109.49719238281
    pz, 873.39385986328
    flipped, -1
    dy, -0.89428168535233
    name, sm
    zscale, 0.5
    height, 500
    mode, 5
    dx, 0
    dz, -0.44714084267616

    Switching to Orbit style camera
    tx, 522.32415771484
    ty, 241.19664001465
    name, OrbitController
    tz, 644.45776367188
    px, 522.32415771484
    py, 556.63806152344
    pz, 873.39385986328
    mode, 6

    Switching to FPS style camera
    px, 1233.4810791016
    py, 554.39453125
    pz, 873.39385986328
    rz, 0
    dx, -0.011240424588323
    dy, -0.82505232095718
    name, fps
    ry, 3.1615927219391
    rx, -0.9727737903595
    mode, 0
    dz, -0.5619443655014
    oldHeight, 300

    Switching to Overhead (TA) style camera
    px, 1324.8835449219
    py, 254.39453125
    pz, 871.56591796875
    flipped, -1
    dy, -0.89428168535233
    name, ta
    zscale, 0.5
    height, 713.52716064453
    mode, 1
    dx, 0
    dz, -0.44714084267616

    Now someone go comment that.

    It appears that mod eis simply a number containing the same information as name, but while name is a string, mode is an integer between 0 and 6.

    I guess px,py,pz could be the postion, while dx,dy,dz could be the direction?
    px,py,pz is the position.
    https://github.com/spring/spring/blob/30862626214bd263b1c4489bb197ef1c3dbc0738/rts/Game/Camera/CameraController.cpp#L75
    dx,dy,dz is the directional vector, this determinates where the camera points towards.
    fov is the field of view.

    These values are part of the inherited base class, thus apply to all camera controllers.
    rx,ry,rz - are part of a derived class and thus can not be found in all cameras.
    https://github.com/spring/spring/blob/30862626214bd263b1c4489bb197ef1c3dbc0738/rts/Game/Camera.cpp#L383
    It denotes the rotation of the camera, found in some camera controllers- theroretically these cameras could tilt and tumble around the viewing direction. In practice, setting the direction - always overrides the rotation.

    All the other values are also part of the derived classes. Found here:
    https://github.com/spring/spring/blob/30862626214bd263b1c4489bb197ef1c3dbc0738/rts/Game/Camera/FreeController.cpp#L380

    But what is height? What is zscale? What is flipped? What is oldHeigh? What are rx,ry,rz? Why has orbit no dx,dy,dz but some tx,ty,tz? What about all the free style camera settings? If you know edit that page please!

    From testing, I found out flipped invert north/south depending on whether it's negative or positive.

    From testing, I found out zscale is how horizontal/vertical are some camera, 10 for almost horizontal TA overhead, 0.05 for almost vertical TA overhead.

Camtime is optional, and currently not used

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua camState](https://springrts.com/wiki/Lua_camState).*
