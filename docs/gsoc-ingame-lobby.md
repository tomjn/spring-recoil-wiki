---
title: "GSoC Ingame lobby"
source_url: "https://springrts.com/wiki/GSoC_Ingame_lobby"
categories:
  - "Deprecated"
---
# GSoC Ingame lobby

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

This was implemented/done by gajop <a href="http://springrts.com/phpbb/viewtopic.php?p=561799" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?p=561799</a>

## GSoC idea: Basic ingame lobby

### Why

All existing Spring interfaces (lobbies) are either difficult to customize for game developers or have a different look and feel from the game itself and require focus switch from the game itself to operate.

### What

A new lobby should be implemented with customization and control in mind, using Lua scripting and reusing Spring codebase when possible. For the lobby itself luasocket could be used and it is then implemented in lua to allow easy customizing. For the lobby and loading game / map an additional lua state should be added.

Optionally, the engine's start screen should be replaced and integrated with it.

### Required skills

- Knowledge of C++
- Knowledge of Lua
- Knowledge of Lua API/C bindings
- Knowledge of basic OpenGL programming

### Difficulty

Estimated: hard

### Technical details

- ensure Spring can clean up properly
- ensure Spring can change game and map during program runtime (requires that some singletons be converted to Spring's \*handler pattern)
- create a new Lua context or initalize current context earlier in the code and rewrite Spring's start interface using Lua scripting.

There is some potential of re-using/adapting libSpringLobby for the server interaction. Contact koshi in our IRC/Lobby channels if you are interested.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [GSoC Ingame lobby](https://springrts.com/wiki/GSoC_Ingame_lobby).*
