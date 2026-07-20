---
title: "FAQ:player"
source_url: "https://springrts.com/wiki/FAQ:player"
categories:
  - "FAQ"
---
# FAQ: Player

> **New players:** The most active game in this family today is [Beyond All Reason (BAR)](https://www.beyondallreason.info/), a free RTS on the [Recoil engine](https://recoilengine.org/). This FAQ covers the classic Spring engine and its TA-derived games; much of the engine behaviour below still applies, but for a current, supported game start with BAR.

## General

### After I finish driving a unit, my pointer is a crosshair. Why?

That is a "view mode" that lets you move around the screen quickly - good for watching the battle or taking screenshots. Press the middle mouse button (usually the wheel) or backspace to return to the normal pointer.

### How do cheats work?

Cheats must be enabled by the host. Once enabled, these console commands are available:

| Command | Effect |
|----|----|
| `/cheat` | Enable cheats (in multiplayer, only the host can enable them) |
| `/nocost` | Build everything for free (applies to new construction only) |
| `/globallos` | Make the whole map visible |
| `/give <name>`, `/give 10 <name>` | Place one or more units. Use the unit's internal name |

Type `/give arm` and press TAB for auto-completion of matching unit names.

### This game is different from TA - the unit HP and damage are not the same

Spring is an engine, not a single game. Various games run on it, some based on TA content. The games closest to TA are:

- [XTA](/xta)
- [Balanced Annihilation](/balanced-annihilation)

Other [Games](/games) have no connection to TA content.

### How do I ally or unally in game?

Type `/ally <teamID>` (this only works if the host allows changing allies mid-game).

### How can I record and watch demos/replays?

See [replays](/spring-replays).

### How can I run the game in windowed mode?

Set the `Fullscreen` configuration variable to `0` in your engine config (`springsettings.cfg`). For a borderless window, also set `WindowBorderless` to `1`. See the [Recoil configuration variables](https://recoilengine.org/docs/configuration-variables/) for the full list, including windowed resolution and position.

### Can I run an unpacked game?

Yes. Make sure the unpacked folder name ends with `.sdd`.

## Control

### Why is someone else controlling my units?

In the game lobby there are two groupings: player IDs and teams. If two players share an ID, they share a commander and can control the same units (comsharing). If they are on the same team but different IDs, they get separate commanders and cannot control each other's units.

### I don't have a third mouse button

The `J` key works like the middle mouse button. `Ctrl+J` changes camera modes, and pressing `J` toggles between crosshair and pointer mode. Use `Ctrl+F1`/`F2`/`F3`/`F4` to change camera mode directly.

### How do I use WASD-style movement instead of the arrow keys?

Edit the `uikeys.txt` file in your config directory. Note that `S` is normally the stop hotkey and `D` is the commander's D-Gun hotkey, so you may want to rebind those too.

### How do I strafe?

You can only strafe in "brawler-type" aircraft, such as the brawler, rapier, and light gunships.

### Can I invert the mousewheel zoom?

Set a negative value for `ScrollWheelSpeed` in your engine config.

### How do I add map markers and lines during a game?

Hold the marker key (on US keyboards, the tilde `~` to the left of `1`) and draw with the left mouse button, or double-click to add a labelled marker. The physical key varies by keyboard layout.

### How do I rotate buildings?

Use the `[` and `]` keys.

## Communication

### How do I talk to my allies only?

Type `a:` before your message, or press `Alt+Enter`. Example: `a: attacking north`.

### How do I give someone units, metal, or energy?

Press `H`, then choose the amount of metal and/or energy and the receiving player, and confirm. To share units, select them first, then press `H`, tick the share-units box, and pick a recipient.

### How do I continually share metal/energy after a threshold?

On the metal and energy bars at the top of the screen there are two red sliders. Resources above those points are shared automatically.

## Troubleshooting

### I keep getting "sync" errors

These are usually caused by network lag - one player's connection is struggling. Ask them to free up bandwidth, or pause and wait for the connection to stabilise. Ping is the second number reported by the `/info` command in game; values above ~1000ms are a sign of lag.

### My camera is stuck in a weird mode after driving a unit

Press `Ctrl` + middle mouse button (or `Shift+Backspace` / `Shift+J`) to cycle camera modes back to normal.

---

*Imported from the springrts.com wiki (public domain). Original page: [FAQ:player](https://springrts.com/wiki/FAQ:player).*
