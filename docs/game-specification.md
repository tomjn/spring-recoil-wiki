---
title: "Game specification"
source_url: "https://springrts.com/wiki/Game_specification"
categories:
  - "Delete"
---
# Game specification

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

### Overview

This is a specification of how Spring will support mods and switching between them.

Spring looks for games in the folders "maps", "base" and "mods" and "games", and all their subfolders. It is recommended to put your game in a subfolder of /games. Spring supports multiple subfolders within /games: **/games/my_nifty_game/game.sdd** and **/games/my_nifty_game/game_support.sdz** are both correct.

On startup, Spring will search these folders and their subfolders for files called [Modinfo.lua](/modinfo.lua). This file declares all *dependencies* of this game, such as additional graphics, sounds and the like.

The general idea is that this file should be used as a manifest file to let Spring know what to do with the archive it is found inside, so each archive file in the mods directory is supposed to have one. Archive files that do not contain this file are ignored, and aren't available to Spring's Virtual File System.

### Modinfo.lua

See [Modinfo.lua](/modinfo.lua)

### Replacements

**When releasing new versions of a game or map it is recommended that a new unique filename is used.** In this manner it would be possible for the lobby to download archives from a fast webserver based on the filename.

But if a new name is used for a support archive with content for example, it would break other mods that depend on the archive. To avoid this, replacements can be used.

Replacements simply specifies which other archives this one replaces. So if a new archive specifies that it replaces old_archive.sdz, any other mod that depends on old_archive.sdz would now use the new one instead.

It is probably not always a good idea to use this for new versions of a mod however, since if you hide the old version people would not be able to switch between the old and the new version. So only use replacements when you are sure that it is what you want.

### Distribution

If a player does not have a certain game's files when trying to join a game online, the Lobbies are designed to let them know that they don't have the game. If you have uploaded your game to the [various services](/download-systems) that are supported by the Lobby applications, players can automatically download the game. Also, SpringDownloader allows players to share the game's file with others easily. Modinfo.lua lets both the Lobby application and Spring know what your game is, and whether it "knows" where it can be downloaded from.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Game specification](https://springrts.com/wiki/Game_specification).*
