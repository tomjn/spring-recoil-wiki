---
title: "Invqueuekey"
source_url: "https://springrts.com/wiki/Invqueuekey"
categories:
  - "Help"
section: "play"
---
# Invqueuekey

<div class="mw-parser-output">

This setting, inverts the behaviour of the shift key ingame.

## Setting it up

You must bind a key to the command "invqueuekey", and press it one time, once ingame.

This will toggle the value of the configuration, and save it somewhere, so you dont need to press it again (unless what to revert shift key bhaviour).

### Adding the key to uikeys.txt

Just add:

bind Any+y invqueuekey

to your uikeys.txt file.

this example uses the y key for the binding, you can use whichever you like/is free.

## Using it ingame

Press the toggle key once.

From now on, any build order you issue, will be added to the queue, as if shift were being pressed.

To issue "direct", "inmediate" orders, like for example, Dgun order, or to cancell a queue, hold down Shiftkey and issue the order. this will erase the queue and execute the order inmediatly.

### The Pros

Statistically, you hold/press shiftkey many times in a game.

This setting will decrease the wearing of the key.

Easier queubuilding.

No camera speedup/speeddown when adding things to the queue.

If you pick an "unbuildable" spot, the requested building is not canceled, it just stays selected for placing.

more?

### The Cons

At times, for exmple when dgunning, it "feels" less responsive. Not sure if this is true.

Lua programmers not always take into account this modifier, so it has odd behaviour on some widgets.

## Additional notes for LUA programmers

Special care must be taken to make widgets compatible with this feature.

Examples of compatible widgets, that work with this setting, are found in <a href="http://springrts.com/phpbb/viewtopic.php?f=23&amp;t=18997" class="external text" rel="nofollow">Central Build Ai Widget</a>, or latelly <a href="http://springrts.com/phpbb/viewtopic.php?f=23&amp;t=18523" class="external text" rel="nofollow">Custom formations widget</a>.

Examples of not compatible widgets are LolUI. Some other UIs.

More specific information about how to make lua work with this setting are appreciated, so add or link them from here.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Invqueuekey](https://springrts.com/wiki/Invqueuekey).*
