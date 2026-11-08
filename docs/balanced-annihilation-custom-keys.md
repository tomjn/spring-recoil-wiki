---
title: "Balanced Annihilation:Custom Keys"
source_url: "https://springrts.com/wiki/Balanced_Annihilation:Custom_Keys"
categories:
  - "Deprecated"
  - "Balanced_Annihilation"
---
# Balanced Annihilation:Custom Keys

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

**[\<--Back to Balanced Annihilation](/balanced-annihilation)**

## Customizing keyboard shortcuts

Open and read UIKeys.txt, much more complete and informative than this page.

There are several categories of keys in Spring that can be customized.

### Unit Action Keys

These are keys that control unit actions. They're all listed in the README found in the docs folder of your Spring installation.

These keys are hardcoded and cannot be changed. While a unit is selected, 'A' will always issue an attack order and 'M' will always issue a move order. You can still bind the key to something else in uikeys.txt or the Selection Keys Editor, but your binding will only work when you don't have any units selected.

### User Interface keys

<table class="wiki-infobox">
<colgroup>
<col>
</colgroup>
<tbody>
<tr>
<td><strong>Wholly incomplete list of<br />
commands for UIKeys.txt:</strong>
<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<td><p></p>

<ul>
<li>buildfacing south</li>
<li>buildunit_unitname</li>
<li>chat</li>
<li>controlunit</li>
<li>createvideo</li>
<li>debug</li>
<li>drawinmap</li>
<li>drawtrees</li>
<li>dynamicsky</li>
<li>grabinput</li>
<li>group0</li>
<li>group1</li>
<li>group2</li>
<li>group3</li>
<li>group4</li>
<li>group5</li>
<li>group6</li>
<li>group7</li>
<li>group8</li>
<li>group9</li>
<li>hideinterface</li>
<li>lastmsgpos</li>
<li>lessclouds</li>
<li>lesstrees</li>
<li>moreclouds</li>
<li>moretrees</li>
<li>mouse1</li>
<li>mouse2</li>
<li>mouse3</li>
<li>mouse4</li>
<li>mouse5</li>
<li>mousestate</li>
</ul>
<p></p></td>
<td><p></p>

<ul>
<li>increaseviewradius</li>
<li>decreaseviewradius</li>
<li>moveback</li>
<li>movedown</li>
<li>movefast</li>
<li>moveforward</li>
<li>moveleft</li>
<li>moveright</li>
<li>moveslow</li>
<li>moveup</li>
<li>nosound</li>
<li>pause</li>
<li>quit</li>
<li>savegame</li>
<li>screenshot</li>
<li>sharedialog</li>
<li>showelevation</li>
<li>showhealthbars</li>
<li>showmetalmap</li>
<li>showpathmap</li>
<li>showshadowmap</li>
<li>showstandard</li>
<li>singlestep</li>
<li>slowdown</li>
<li>speedup</li>
<li>togglelos</li>
<li>track</li>
<li>updatefov</li>
<li>yardmap1</li>
<li>yardmap4</li>
</ul>
<p></p></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

Many key bindings related to the user interface can be edited through the **uikeys.txt** file found in Spring folder. You should be able to work out the format by skimming it, it's fairly simple. Key bindings load upon game start, and can't be changed in middle of the game.

A few keys related to the UI can't be changed:

- Mouse button functions.

\- Behaviour of shift/control

\- Behaviour of shift/control Middle mouse button.

The correct way to bind keys is to put single-quotes around letter keys, like this:

*bind 'x' mouse3*

You can also comment out any bind to quickly disable it by putting "//" before it:

*//bind home increaseViewRadius*

Function keys and some other keys don't need single quotes. They're listed in the "Special Bindable Keys" list, below.

<table>
<colgroup>
<col>
</colgroup>
<tbody>
<tr>
<td>Special Bindable Keys:
<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<td><p><strong>Function</strong></p>
<ul>
<li>Home</li>
<li>End</li>
<li>insert</li>
<li>delete</li>
<li>space</li>
<li>f1-f12</li>
<li>esc</li>
<li>`</li>
<li>Ã‚Â§</li>
<li>enter</li>
<li>backspace</li>
<li>pause</li>
<li>pageup</li>
<li>pagedown</li>
</ul></td>
<td><p><strong>Modifiers</strong></p>
<ul>
<li>ctrl</li>
<li>Shift</li>
</ul>
<p><strong>Arrow</strong></p>
<ul>
<li>Up</li>
<li>Down</li>
<li>Left</li>
<li>Rigth</li>
</ul></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

### Selection keys

Im sure you do remember Control C key. Or Control Z.

Well these keys, as all that are related to "selected units" are now fully editable.

i.e. You can map a key to do the same as Control C BUT without the "center on commander" part.

This offers tremendous flexibility and enhaces control and gameplay to pro levels.

Look at <a href="https://springrts.com/phpbb/viewtopic.php?t=2190" class="external text" rel="nofollow">this thread</a> to learn more on editing these selection keys through selectioneditor.exe.

**[\<--Back to Balanced Annihilation](/balanced-annihilation)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Balanced Annihilation:Custom Keys](https://springrts.com/wiki/Balanced_Annihilation:Custom_Keys).*
