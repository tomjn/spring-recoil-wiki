---
title: "Development guidelines"
source_url: "https://springrts.com/wiki/Development_guidelines"
categories:
  - "Engine_Dev"
---
# Development guidelines

<div class="mw-parser-output">

This page details some important things to take note of when doing Spring development.

### Spring runs synchronized on all computers

Spring's networking is built upon the assumption that all player's simulations are in sync and only send their (or their AI's) input over the network. This mean that you will have to be very careful to keep the simulation deterministic. Here is a few pointers to think about.

- There are essentially two sorts of code in spring, synced and unsynced. Which code is what is not as clear as one could wish but essentially the synced code is anything that is reached through CGame::Simframe or handlers of some network msgs, unsynced is everything else (graphic, input, sound etc). Synced code can write anything but should only read synced data. Unsynced code can read anything but must not write synced data. The rest of the points here is essentially about synced code.
- Always make sure to initialize variables. Even if the value doesnt seem to matter it might unsync the simulation.
- Be paranoid about array boundaries, reading one byte beyond an array might not crash but it will probably cause sync problems at some point.
- For random numbers use the CGlobalStuff::RandFloat etc functions (but never use these from unsynced code)
- Never compare memory block locations other than for equality. This mean for example that you shouldn't create a std::set or std::map with a pointer as index if the order might matter.

### Adding your own stuff

We welcome anyone to make changes to Spring but in order to get them accepted into our distribution the following can be worth thinking about.

- Spring is a game and different people might want different things from it. So if your changes change gameplay it might be a good idea to make it optional.
- Resources (esp. CPU time) is always in short supply for spring so make sure that you dont waste them needlessly and that your resource usage is in proportion to the impact of your changes.
- Ask around before starting on a change. Not only might you get tips about how to implement it in the best way but also if anyone else is working on something similar.
- Comment your code to make it more readable. In particular use [Doxygen style comments](/doxygen-style-comments) so that header comments for classes/methods/functions/fields etc. automatically get pulled into the source code <a href="https://springrts.com/dl/buildbot/doc/" class="external text" rel="nofollow">documentation</a>.

### Engine Branching Model

The version currently in use: [<img src="/images/EngineBranchingModel.png" decoding="async" width="640" height="635" alt="EngineBranchingModel.png" />](/images/EngineBranchingModel.png)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Development guidelines](https://springrts.com/wiki/Development_guidelines).*
