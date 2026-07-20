---
title: "Chili:Adding To Game"
source_url: "https://springrts.com/wiki/Chili:Adding_To_Game"
categories:
  - "Libraries"
---
# Chili:Adding To Game

<div class="mw-parser-output">

[Wiki](/main-page) \< [Chili](/chili) \< Adding Chili To A Game

## Getting Chili

The Chili repository can be found at ~~<a href="https://github.com/jk3064/chiliui" class="external text" rel="nofollow">https://github.com/jk3064/chiliui</a>~~ <a href="https://github.com/gajop/chiliui" class="external text" rel="nofollow">https://github.com/gajop/chiliui</a>. There are three ways to add Chili to your game:

- Include the Chili repository as a git submodule in your project.
- Include Chili as a dependency in [modinfo.lua](/modinfo.lua), using the line `depend={"Chili Framework v2014.0"}`.
- Checkout the Chili repository, and manually place the files & subdirs from its /luaui/chili directory into your games /luaui/widgets directory.

If you are having trouble getting Chili to run, login to the lobby and join the \#moddev channel (type /j moddev). People there will help you figure it out.

## Chili interaction with game internals

The Chili library is, basically, a very big widget. It is loaded as a widget by the widget handler, and it makes its functions accessible via WG. This allows 'normal' widgets to use Chili - a widget may call a function from inside WG.Chili, which instructs the chili library to create/modify a particular GUI element.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Chili:Adding To Game](https://springrts.com/wiki/Chili:Adding_To_Game).*
