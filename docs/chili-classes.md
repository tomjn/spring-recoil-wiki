---
title: "Chili-Classes"
source_url: "https://springrts.com/wiki/Chili-Classes"
categories:
  - "Libraries"
---
# Chili-Classes

<div class="mw-parser-output">

[Development](/gamedev-main) \< [Chili](/chili) \< Chili-Classes

*This article is a stub. You can help the Spring project by expanding it.*

Chili classes are the elements (panels, grids, etc.) that make up the game GUI. The .lua .lua files are stored in the directory `LuaUI/Widgets/Chili/controls`. Displayed elements such as window, as distinct from non-control classes (specifically, font objects and the screen) are referred to as **controls**.

## Source

The default Chili classes can be found <a href="https://github.com/jk3064/chiliui/tree/master/chili/controls" class="external text" rel="nofollow">here</a>.

## Data Types

Tags may be one of the following data types:

- `number` - A number with or without decimals.
- `bool` - A value which can be `true` or `false`.
- `string` - Text, or more precisely a string of alphanumeric characters.
- `color` - An array of colors, in RGBA format.
- `number[4]` - An array of numbers; used for positioning, etc.

## Details

Chili classes use OOP with inheritance, with the following hierarchy:

    object
    |_font
    |_screen
    |_control
     |_button
       |_image
     |_checkbox
     |_colorbars
     |_label
     |_layoutpanel
       |_imagelistview
       |_grid
       |_stackpanel
       |_treeview
     |_panel
     |_progressbar
     |_scrollpanel
     |_textbox
     |_trackbar
     |_treeview
      |_treeviewnode
     |_window

Consequently, it is possible for widgets to define their own Chili classes (discussed below).

Each Chili control has one parent (`Chili.screen0` or another Chili control) and any non-negative number of children. Position is specified relative to the parent, taking into account the parent's `padding` and `itemMargin` tags.

## Classes

### Object

The base Chili object class. It should *not* be used directly.

string [classname](#classname)  default: "object" 

The class name.

bool [hidden](#hidden)  default: false 

Is the object hidden?

bool [disableChildrenHitTest](#disablechildrenhittest)  default: false 

If true, this object's children are not clickable, draggable, etc. - their mouse events are not processed.

### Control

This is the base class for all Chili controls, specifying common properties. It should *not* be used directly.

#### General

string [tooltip](#tooltip)  default: nil 

The control's tooltip.

string [skinName](#skinname)  default: nil 

Specifies the control to use a skin other than the default one.

#### Size

number OR string [width](#width)  default: ? 

The width of the control. This can be a number of pixels, or a percentage value enclosed in a string, e.g. "50%" means half as wide as the parent.

number OR string [height](#height)  default: ? 

The height of the control. This can be a number of pixels, or a percentage value enclosed in a string, e.g. "50%" means half as wide as the parent.

number [minWidth](#minwidth)  default: 10 (50 for windows) 

The control's minimum width.

number [minHeight](#minheight)  default: 10 (50 for windows) 

The control's minimum height.

number [maxWidth](#maxwidth)  default: 1e9 

The control's maximum width.

number [maxHeight](#maxheight)  default: 1e9 

The control's maximum height.

bool [autosize](#autosize)  default: false 

Does the control automatically resize to fit its children?

bool [savespace](#savespace)  default: false 

If `autosize` is enabled, it shrinks the control to the minimum needed space; if disabled `autosize` *normally* only enlarges the control.

bool [fixedratio](#fixedratio)  default: false 

Does this control attempt to maintain its original aspect ratio when resized?

bool [resizable](#resizable)  default: false 

Can this control be resized outside of tweakmode?

bool [tweakResizable](#tweakresizable)  default: true 

Can this control be resized in tweakmode?

#### Positioning

These tags can be combined in different ways with each other and the width/height tags to precisely define the bounds of the element. number [x](#x)  default: ? 

The distance between the left edge of the control and that of its parent.

number [y](#y)  default: ? 

The distance between the top edge of the control and that of its parent.

number [right](#right)  default: ? 

The distance between the right edge of the control and that of its parent.

number [bottom](#bottom)  default: ? 

The distance between the bottom edge of the control and that of its parent.

bool [draggable](#draggable)  default: false 

Can this control be dragged around outside of tweakmode?

bool [tweakDraggable](#tweakdraggable)  default: true 

Can this control be dragged around in tweakmode?

#### Drawing

number\[4\] [padding](#padding)  default: {5, 5, 5, 5} 

How much space there is between the borders of the control and its children. Numbers are for left, top, right and bottom.

color [backgroundColor](#backgroundcolor)  default: {0.8, 0.8, 1.0, 0.4} (can be overridden by skin) 

This is the background color of certain controls, particularly Windows.

### Window

This is the basic container for all other controls. It is the only one that can be moved around by the user and responds to the docking widget. It can be made invisible for a borderless element, or to allow another control such as a Panel to draw the background.

### Panel

A background element, similar to Window but drawn differently and without the resize/drag functions.

### Button

Does things when clicked. Comes with its own implementation of `HitTest`, `MouseDown` and `MouseUp`, making it readily usable for this purpose.

string [caption](#caption)  default: "button" 

A caption written on the button.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Chili-Classes](https://springrts.com/wiki/Chili-Classes).*
