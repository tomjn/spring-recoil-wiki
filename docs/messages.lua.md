---
title: "Messages.lua"
source_url: "https://springrts.com/wiki/Messages.lua"
categories:
  - "Deprecated"
  - "Gamedata"
---
# Messages.lua

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | Removed in Spring 95.0. See <a href="https://github.com/spring/spring/blob/106.0/cont/examples/Widgets/game_messages.lua" class="external text" rel="nofollow">cont/examples/Widgets/game_messages.lua</a> for a possible replacement. |

## Location

`messages.lua` is a file in the `Gamedata/` directory of a Spring Game.

## Purpose

This file defines what messages are shown when a player dies.

## Source

The engine source code which parses the data from this file is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Game/Messages.cpp" class="external text" rel="nofollow">rts/Game/Messages.cpp</a>

## Details

In the message string `%i` is replaced with the player's team number and `%s` is replaced with the player's name.

## Example

### Single Message

Example taken from Air Raid:

    return {
      "Player %i(%s) is down!"
    }

### Multiple Messages

Example taken from <a href="http://code.google.com/p/zero-k/" class="external text" rel="nofollow">zeroK</a>. One message is picked from the list at random.

    local messages = {
      [ [[Team%i(%s) is no more]] ] = {
        "Team%i (%s) has been obliterated",
        "Team%i (%s) has been liquidated",
        "Team%i (%s) has been eradicated",
        "Team%i (%s) has been terminated",
        "Team%i (%s) has bowed out",
        "Team%i (%s) has gone to a better place",
        "Team%i (%s) beheld Satan as he fell from heaven LIKE LIGHTNING!",
        "Team%i (%s) is out of existence",
        ...
        },
    }
    return messages

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Messages.lua](https://springrts.com/wiki/Messages.lua).*
