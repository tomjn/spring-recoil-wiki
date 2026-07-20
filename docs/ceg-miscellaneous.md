---
title: "CEG:Miscellaneous"
source_url: "https://springrts.com/wiki/CEG:Miscellaneous"
categories:
  - "CEG"
---
# CEG:Miscellaneous

<div id="ceg-miscellaneous" class="section mw-parser-output">

## CEG Miscellaneous

A collection of miscellaneous things to consider when making a CEG.

### Blending

CEGs use the blending mode `GL_ONE, GL_ONE_MINUS_SRC_ALPHA`. This is in contrast to the default `GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA`. This means that the alpha determines how much of whatever is behind the particle will show through, but doesn't affect how the particle itself looks. If you want default blending, you'll have to scale the color components by the alpha by hand if the class you're using doesn't do it for you (most classes don't). Note that an alpha of 0 will cause the CEG not to be displayed at all.

### Z-Fighting

A related problem is Z-fighting. If you have several high-alpha particles moving through each other, you may get an undesirable flickering effect as one particle is drawn at first, then the other. To solve this, reduce the alpha.

### Randomness

Always put a little randomness in your CEGs. CEGs are more interesting if they happen a little differently every time, especially if your CEG gets called more than once at the same time on the same screen.

### Realism

While it's important to make sure a CEG doesn't look completely implausible, don't get too hung up on realism. In almost any RTS, concessions are made for gameplay at the cost of a bit of realism; likewise with CEGs, you'll need to make some concessions for looking cool.

### Gameplay

As well as looking cool, CEGs are an important part of gameplay. They let players know when things are happening and where they are happening. CEGs should give clues as to what is happening in the mechanics of the game. A powerful weapon should have a powerful-looking CEG; a blast that affects a large area should have a large CEG. Use the alwaysVisisble and useAirLos tags where appropriate. Hopefully we will eventually have a radius operator so CEGs can automatically be scaled to the radius of the weapon.

At the same time, you don't want to obstruct players' views of the game. A CEG should look cool for a moment, and then get out of the way.

### Performance

Bascially, try not to use more particles than necessary, and try not to use them longer than necessary. Be aware of how often you expect your CEG to run; if it's a commander death or a nuclear missile, you can afford to spend some extra particles, but if it's a machine gun or a cegtag (which is called every frame), you'll want to keep it down.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [CEG:Miscellaneous](https://springrts.com/wiki/CEG:Miscellaneous).*
