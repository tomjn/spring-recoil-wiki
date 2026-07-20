---
title: "Help:CameraControls"
source_url: "https://springrts.com/wiki/Help:CameraControls"
---
# Help:CameraControls

<div class="mw-parser-output">

There are five camera modes in Spring. Pressing Ctrl and one of the first five F buttons (F1-F5) will change your camera to that view. Alternatively use CTRL or SHIFT with Backspace. Mouse 3, Backspace or J toggle "free look" mode for the current camera view; this allows you to move the camera around using the mouse.

## Camera Modes

There are five different camera modes in Spring. Everyone likes a different one. Try them all out to decide what you like best.

### FPS Style (CTRL + F1)

In this view the camera is controlled just like in a first person shooter. Use arrow keys to fly forward/backward and strafe left/right. Hold the middle mouse button to aim the camera. Use the scroll wheel to zoom in and out.

This is the easiest camera to position. However, it can get quite tedious trying to control the camera in the middle of a battle. Its good for screenshots and FPS junkies.

### Classic Overhead (TA) Style (CTRL + F2)

The default view, very similar to the view OTA had. Use the arrow keys or move the mouse to the edge of the screen to pan around the map. The scroll wheel zooms in and out. Ctrl & scrolling will tilt the camera. Free look mode (click the middle mouse button) also pans around the map. It always "faces" straight north.

This is the easiest view for OTA players to use. It functions exactly the same as the OTA camera, so no new tricky controls are needed to properly enjoy the game. This view has recently had camera tilt added (see above), but still does not really show off the full glory of the Spring engine, as you are limited to one compass direction. It is the favorite view mode for most people, as most people played OTA or other similar RTS games with a traditional top-down view.

### Spring Style (CTRL + F3)

This camera is New in version 99.0. It is a combination of the now removed <a href="https://en.wikipedia.org/wiki/Total_War_(series)" class="external text" rel="nofollow">Total War</a> style camera and the default Overhead camera. Use the arrow keys or move the mouse to the edge of the screen to pan around the map, the ALT modifier will rotate the screen instead. Scrolling the scroll wheel zooms the camera with ALT increasing the zoom height; scrolling with CTRL tilts the camera. Free look mode (click the middle mouse button) pans around the map, and rotates with ALT.

See [here](/springsettings.cfg#springedgerotate) for config tags pertaining to this camera mode.

### Rotatable Overhead (CTRL + F4)

This is a new camera system invented by the SY's. You can change the camera height by scrolling. Use the arrow keys to pan around the map. The scroll wheel moves the camera up and down vertically. Free look mode (click the middle mouse button) lets you aim the camera from its current position.

This is perhaps the best camera, as it allows for totally free movement and aiming, but with some handy restrictions on the height. It is the second most popular view besides the OTA view. It's useful for both screenshots and actual gameplay.

### Free Style (CTRL + F5)

Otherwise known as the smooth camera. Its primary control interface is the keyboard, and it really isn't intended to be used for gameplay (although it may be if the controls get improved, especially with respect to minimap view setting). It has smooth motion, and should make for better video captures. It is not included in the default toggle list for CTRL MiddleMouseButton control.

The main controls are the arrow keys, with the following modifiers:

ALT: side scrolling CTRL: up/down tilting SHIFT: up/down scrolling META: speedup

It will switch to a special mode if you are tracking a unit. The right/left arrow keys then control the angular rotation about the unit, and the up/down key control the speed of motion towards the unit. The further away you are from the unit, the faster you will move towards it. It will also always face the unit, so that you'll see ground shakes rather then unit shakes.

See [here](/springsettings.cfg#camfreeangveltime) for config tags pertaining to this camera mode.

### FPS "Mode" (C)

Press 'C' to toggle "First Person Shooter Mode".

Controls:

- Up Arrow: Move in the direction the unit's base (legs or tracks) is facing
- Left Arrow: Rotate Legs to the left
- Right Arrow: Rotate Legs to the right
- Mouse: Aim default gun. The gun will lock on to any targets the cursor moves close to, making tracking and firing at targets much easier.
- Left Mouse Button: Shoot whatever guns the engine has decided to let you shoot at the current target.
- Right Mouse Button: Click to enter Free Fire Mode. In this mode, the AI will aim and fire for you as you move.

## Zoom Controls

### Mousepoint Zooming

When you zoom out the camera will move back from the center of the screen in such a way as to expand your view. When you zoom back in, however, the camera will shift focus towards the mouse pointer as your new center.

### Tab Zooming

Pressing the TAB key will zoom you out to the point where the entire map will be visible from a special top-down perspective, in most games this view will represent units as icons, then pressing the TAB key again with zoom you back to the same height and angle of view you were at before, but again, using your mouse pointer position as the new center.

## Misc Camera Related Controls

### Function Keys

For the most part, the function keys control what the camera sees, so they are listed here for lack of a better place for them.

- **F1**: Toggles Contour Markings On/Off. These color coded contour markings represent the height of the map. One iteration through the colors (ie: red-green-blue-red) indicates a height difference of 32.
- **F2**: Toggles Path map On/Off. The path map works the following way:
  - **Mobile Unit Selected**: If you have a mobile unit selected, then the pathmap shows where that specific unit can move (green) and where it cant (red). The greener the map, the better the unit can walk on that area. Zones that can't be walked or driven on are always solid red.
  - **Builder Selected**: When you have a builder selected and have clicked on a building in its build menu (i.e. a factory), the path map will show you where you can build that building. Its fairly easy to understand, with the green zones representing buildable areas, and the red zones representing the areas where you cannot build. Note that the marks represent the "center-point" of the build, so if your mouse cursor is over green, you can build there, even if there's red within the building's border.
- **F3**: Moves the camera to the position of the last message. Messages can be from units or alerts placed on the minimap by your allies.
- **F4**: Toggles Metal Map On/Off. The brighter the green overlay on the map the more metal is present at that location. The camera automatically switches to Metal Map mode when placing Metal Extractor structures, and switches back when you stop placing these structures.
- **F5**: Toggles the GUI On/Off. Good for taking screenshots.
- **F6**: Toggles Sound On/Off. Self-explanatory.
- **F7**: Toggles the Dynamic sky. If the game is running slowly, try turning this off to speed it up a little bit.
- **Ctrl+Shift+F8**: Save the Game. Not currently supported.
- **F9**: Show/Hide Unit Status. Unit Status bars are: Health, Building percentage, experience, and group numbers.
- **Ctrl+Shift+F10**: Video Capture. After pressing spring will jump to the desktop and will ask with which codec to record. When selected it will jump back in spring, if it doesn't just click on it! The video capture will unpause if the game was paused and start record. You may experience low FPS though after you stop recording by pressing F10 or exiting Spring it will save video in the original Spring Folder at a normal speed!
- **F11**: Toggle Lua widget selector with what you can turn on/off lua scripting widgets. Ctrl F11 is lua widget tweak mode.
- **F12**: Screenshots. Takes a screenshot and saves it to Spring/Screenshots/Screenshot###.jpg, where \### is the number of the screenshot.

### LOS Visualisation (As of 100.0+)

- **L**: This toggles visible Fog of War and Radar Coverage areas. All Radar and Line of Sight is impeded or helped by terrain; placing a radar/jammer on a hill will allow you to view/jam most of the area; placing either in a pit will not allow you to view/jam beyond the pit. Sonar coverage is included in these overlays. The colours are as follows, note that areas with Aerial LOS permit viewing only of air units, projectiles, and certain graphics such as smoke and shields.

<!-- -->

- **High Brightness** = LOS
- **Mid Brightness** = Aerial LOS
- **Low Brightness** = No sensor coverage
- **Green & Purple Border** = Radar coverage
- **Red** = Jammer coverage

### Snapping/Panning Camera to a Specific View

Middle click(MOUSE3) on the mini-map to snap the center of the view to that point on the map. Click and drag the middle mouse button to move the camera around the map. (Right click, formerly used to move the camera on the minimap, now gives orders).

Press T to lock the camera to track the currently selected units. The camera will move so that the selected units are always centered. Move the camera manually to stop the tracking.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Help:CameraControls](https://springrts.com/wiki/Help:CameraControls).*
