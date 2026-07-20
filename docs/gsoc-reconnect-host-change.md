---
title: "GSoC Reconnect Host change"
source_url: "https://springrts.com/wiki/GSoC_Reconnect_Host_change"
categories:
  - "GSoC"
---
# GSoC Reconnect Host change

<div id="gsoc-idea-reconnect-host-change-during-a-match" class="section mw-parser-output">

## GSoC idea: Reconnect / Host change during a match

### Why

Network links can sometimes be unreliable, being able to overcome temporary issues will improve play experience.

### What

Spring's network model implies the existence of a server to host a battle. For various reasons the network link between host and clients can be interrupted. A system should be designed to allow manual and/or automatic switching of the game's host (possibly using an existing player after testing load handling capabilities) and manual and/or automatic reconnection from client side if host remains the same.

### Required skills

- Knowledge of C++
- General networking knowledge
- Understanding Spring's networking model

### Difficulty

Estimated: medium to hard

### Technical details

- During a drop-out clients can be at diverging points in simulation time (game frame), so any solution would have to determine a common point and bring all players to that to ensure sync.
- During a server switch extra measures need to be implemented to prevent cheating.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [GSoC Reconnect Host change](https://springrts.com/wiki/GSoC_Reconnect_Host_change).*
