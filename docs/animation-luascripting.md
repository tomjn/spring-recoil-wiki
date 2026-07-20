---
title: "Animation-LuaScripting"
source_url: "https://springrts.com/wiki/Animation-LuaScripting"
categories:
  - "Animation"
---
# Animation-LuaScripting

<div class="mw-parser-output">

## Getting started

### Setup

Lua unit animation is implemented partially in the engine, and partially in a Lua gadget which is shipped with Spring in [springcontent.sdz](/gamedev-glossary). By default, gadget is not loaded, so a bit of setup is required to enable Lua unit scripts. (In some games, gadget is alredy activated, for example in Zero:k)

To enable Lua unit scripts, create a file *LuaRules/Gadgets/unit_script.lua*, and paste the following into it:

<table>
<colgroup>
<col>
</colgroup>
<tbody>
<tr>
<td><p></p>

<pre><code>-- Enables Lua unit scripts by including the gadget from springcontent.sdz
&#10;-- Uncomment to override the directory which is scanned for *.lua unit scripts.
--UNITSCRIPT_DIR = &quot;scripts/&quot;
&#10;return include(&quot;LuaGadgets/Gadgets/unit_script.lua&quot;)</code></pre>
<p></p></td>
</tr>
</tbody>
</table>

Also, do check whether your <a href="http://github.com/spring/spring/blob/master/installer/builddata/springcontent/LuaGadgets/system.lua" class="external text" rel="nofollow"><em>LuaRules/system.lua</em></a> is up to date, if you copied this verbatim into your game. (Must be from a later date than 5 september 2009)

Now this is done, you can start putting \*.lua files in your *scripts/* folder.

### Workflow

Lua has the major advantage over BOS/COB that you do not need to compile it, which can reduce the time to develop scripts quite a bit.

To save further time, do not restart Spring for each small change. Simply run Spring in an window so you can easily switch between your editor and Spring, and use */cheat* and */luarules reload* to reload all Lua unit scripts.

To be able to use commands above, unzip your game into directory named "myGame.sdd", then you can directly change lua scripts (animations etc.) and reload.

Additionally, for Lua unit scripts operating on Assimp models (primarily .dae and .blend), it is possible to do most of your animating in Blender using the <a href="https://github.com/Anarchid/blender2lus" class="external text" rel="nofollow">blender2lus</a> export addon.

### Workflow for animating S3o models in Blender

Anarchids Blendertools can be used to animate (within limits) S3O models. Here are the steps:

1\. Export your model into Blender.

2\. Restore the Hierarchy in Blender.

<a href="https://blender.stackexchange.com/questions/26108/how-do-i-parent-objects" class="external free" rel="nofollow">https://blender.stackexchange.com/questions/26108/how-do-i-parent-objects</a> (Ctrl + P) is your friend .

3\. If all Pivots are set correctly, create the Animations, one by one.

4\. Export the Animations with Anarchids Skript Export tool.

5\. Open the resulting Animationskript for postprocesing.

6\. Find Move commands like {\['c'\]='move',\['p'\]=LowerJaw, \['a'\]=x_axis, \['t'\]=-0.000000, \['s'\]=0.012682}, and purge them. Replace them with todos- you will have to insert them manually later, with correct axis and values.

7.In the turn commands - exchange the \['a'\]=z_axis with \['a'\]=y_axisz and the old \['a'\]=y_axis with \['a'\]=z_axis. Here is a Regex, to make the text-search easier.

{\\'c'\]='turn',\\'p'\]=(\[^\s\]+), \\'a'\]=z_axis, \\'t'\]=\\

{\\'c'\]='turn',\\'p'\]=(\[^\s\]+), \\'a'\]=y_axis, \\'t'\]=\\

8\. Invert (change the sign) of the y_axis values.

9\. Start the game and call the Animation you want to debug in a Loop.

10\. Congratulations you now have smoothly animated S3o Models.

## Further reading

- [Animation:LuaExamples](/animation-luaexamples)
- <a href="http://tvo.github.com/spring/2010/04/19/lus-stumpy.html" class="external text" rel="nofollow">Stumpy tutorial</a>
- <a href="http://tvo.github.com/spring/2010/04/26/lus-stumpy-2.html" class="external text" rel="nofollow">Polishing the stumpy</a>
- [Animation-LuaCallins](/animation-luacallins)
- [Animation-LuaCallouts](/animation-luacallouts)
- [comparing Lua and COB unit scripts](/animation-cobluadifferences)
- [SpringTutorialGame](/springtutorialgame) contains simple examples unit scripts
- [SpringRtsTutorialAnimDef](/springrtstutorialanimdef) examples animation scripts

## TODO

- Conversion tool
- Performance measurements
- Link to article in piro's magazine
- Coordinate system (axis, direction of rotation, picture)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Animation-LuaScripting](https://springrts.com/wiki/Animation-LuaScripting).*
