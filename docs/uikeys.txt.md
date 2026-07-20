---
title: "Uikeys.txt"
source_url: "https://springrts.com/wiki/Uikeys.txt"
categories:
  - "Help"
section: "reference"
---
# Uikeys.txt

<div id="uikeys.txt" class="section mw-parser-output">

## uikeys.txt

### Location

The file has to be placed into the SpringData dir, most common next to [springsettings.cfg](/springsettings.cfg).

### example

<a href="https://github.com/spring/spring/blob/106.0/doc/uikeys.txt" class="external text" rel="nofollow">doc/uikeys.txt</a>

### get key codes

to see what keycodes are triggered when a key is pressed, enable keydebug mode with

    /keydebug

### 97.0

In 97.0 support was added for **KeyChains** for example: `/bind Ctrl+a,Ctrl+b say Hello World!`

You can double bind a button this way, e.g.: `/bind e,e say Bar /bind e say Foo` Results in the 1st press printing Foo, 2nd press printing Bar.

Additionally **KeyChains** are now used for several defaults:

- Double hitting drawbutton sets label
- Switching between ally, spec & all chat is now done by double hitting `alt`, `shift` or `ctrl`
- `alt+return` now toggles fullscreen (default shortcut for fullscreen toggle on most OS)

### 104.0

In 104.0 the default bindings for chat switching changed again;

- `alt+ctrl+(a,a)` now toggles chatswitchally
- `alt+ctrl+(s,s)` now toggles chatswitchspec
- `chatswitchall` now has to be bound manually

### selections

For details consult the source: SelectionKeyHandler.cpp.

In the following, "+" and "\_" are taken as literal plus and underscore characters, respectively. "\|" means "or", and "\[...\]" means that ... is optional.

uikeys.txt has the format

    KEY SOURCE+FILTER+CONCLUSION+

"SOURCE+FILTER+CONCLUSION+" will be called the *selector*. Generally, all elements of the selector are separated by \_, where the + does not count as a separator on its own. You'll see what I mean.

Note that:

- SOURCE, FILTER and CONCLUSION are case sensitive, at least sometimes
- Spaces are significant. Do not insert any spaces in the selector string!
- Do not use a KEY that has already been bound to something else (this holds for SelectionEditor too).

The format for KEY is different from uikeys.txt: Use a combination of `Shift` `Control` `Alt` followed by a key A-Z or 0-9, all separated by an underscore \_. Example:

    Control_W
    Alt_Shift_0

SOURCE describes the set of units that you want to filter and pick a selection from. It can be one of

- `AllMap`: obvious
- `Visible`: obvious
- `FromMouse_D`, where D is some number: all units that are at most a distance of D away from the mouse cursor
- `PrevSelection`: the previous selection; that is, the one active before you hit the selection key

FILTER is an arbitrarily long list of filters. Every filter can be preceded by `Not` to negate it. You will still have to use a \_ to separate the `Not` from the filter, as in `Not_Commander`.

Here are the filters. Note that "units" generally means both buildings and units. Typing both got old real quick.

- `AbsoluteHealth_N`: only units that have an absolute health \> N
- `Aircraft`
- `Builder`: only construction units
- `Building`: only buildings
- `Category_C`: only units of category C -- XXX what are the categories?
- `Commander`: do not works since at least version 104
- `Idle`
- `InHotkeyGroup`: only units that are in a group
- `InPrevSel`: only units of the same type as a unit in the previous selection
- `NameContain_S`: only units whose name contains the string S
- `Radar`: only units with either radar, sonar, or a jammer
- `RelativeHealth_P`: only units that have health \> P percent
- `Transport`
- `Waiting`: only units that are under a wait command (usually W)
- `WeaponRange_D`: only units that have a weapon range \> D
- `Weapons`: only units that have weapons

CONCLUSION is

    [_ClearSelection]_HOWMANY

If you specify `ClearSelection`, your new selection will replace the old one; otherwise, it will just add to it. HOWMANY must be exactly one of

- `SelectAll`: all units
- `SelectOne`: one unit, will also center the camera on that unit
- `SelectNum_N`: at most N units -- XXX I think this includes the previously selected units (without ClearSelection), check!
- `SelectPart_P`: P percent of the units

Recall that between every two tokens, there *must* be an underscore \_, even if there is also a +. Another way to put it is that before every word in your selector except the SOURCE, there must be an underscore.

Some examples, first the standard bindings. Again, "unit" also includes buildings.

    Control_A AllMap++_ClearSelection_SelectAll+

Selects everything on the entire map.

    Control_B AllMap+_Builder_Idle+_ClearSelection_SelectOne+

Selects any (one) idle builder on entire map.

    Control_C AllMap+_Commander+_ClearSelection_SelectOne+

Selects your commander.

    Control_R AllMap+_Radar+_ClearSelection_SelectAll+

Selects all units with radar/sonar/jammer.

    Control_W AllMap+_Not_Aircraft_Weapons+_ClearSelection_SelectAll+

Selects all non-aircraft armed units

    Control_Z AllMap+_InPrevSel+_ClearSelection_SelectAll+

Selects all units of a type that was in your previous selection.

Note that up to now, all keys said `ClearSelection`, hence they replaced your old selection.

    Control_X AllMap+_InPrevSel_Not_InHotkeyGroup+_SelectAll+

Selects all units of a type that was in your previous selection, unless they are already in a hotkey group. (Use case: if you have a set of tanks on group 1, and have since produced more of the same type(s), you could hit 1 Ctrl+V Ctrl+1 to include them in the group.)

    Control_V AllMap+_Not_Builder_Not_Commander_InPrevSel_Not_InHotkeyGroup+_SelectAll+

Selects all units of a type that was in your previous selection, except builders and commander, unless they are already in a hotkey group.

And finally, an example from the forums:

    Control_W PrevSelection+_Not_Building_Not_RelativeHealth_30+_ClearSelection_SelectAll+

From your previous selection, leaves everything that is below 30% health, and not a building. (Use this to quickly retreat damaged units.)

### make uikeys.txt read only for SpringSettings

If you wish to aviod [SpringSettings](/springsettings) parsing and possibly ovewriting your uikeys.txt, add this line to uikeys.txt:

    //SPRINGSETTINGS DO NOT TOUCH

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Uikeys.txt](https://springrts.com/wiki/Uikeys.txt).*
