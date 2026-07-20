---
title: "Syncing System"
source_url: "https://springrts.com/wiki/Syncing_System"
categories:
  - "Engine_Dev"
---
# Syncing System

<div class="mw-parser-output">

## Why is syncing necessary

Due to the variety of processors, C standard math libraries, and other configuration differences spring might be encountering in the future, it can be assumed that there will always be sync errors. Small differences in floating point numbers will not be an actual problem for the users, but these small differences are cumulative and can eventually lead to a completely different game state.

## Determining out-of-sync state

Determining sync is fairly straightforward: A checksum value based on certain gamestate properties can be calculated on every client, and compared with the checksum of the host. As said above there will always be small differences, so an exact match of gamestate is not possible. A solution is to make the checksum calculation less strict, for example to cast position float3 vectors to int3 vectors, so small floating point differences do not change the checksum.

## Re-syncing

Resyncing gamestate (restoring sync between host and clients) is the real problem to solve here. Due to network lag and different CPU speeds, the host game simulation could be running ahead of the client simulation. The best way of keeping things in control would be to pause the game completely, and then start sending over the data to restore sync. This is also how the linux rts game "Boson" seems to handle sync restoration. How it could work in spring:

1.  When the client detects an out-of-sync situation (checksums don't match), it sends an out-of-sync message to the host
2.  The host sends when receiving this message, sends pausing messages to all clients. With the pause message, the server also sends checksum values for individual units, unit groups, or all the units on a map sector. This larger set of checksum values allows to client to only request data that is actually out-of-sync.
3.  Game situations need to be the same, so the clients run the simulation (even if it's not in sync) until they reach the same gameframe as the host simulation.
4.  Clients compare the set of checksum values with their own gamestate, and report back to the server which parts of their simulation were unsynced.
5.  Server sends the gamestate requested by the client
6.  Server starts running the game again

#### Resyncing using a full savegame

Sending the complete gamestate would result in several MBs of network traffic, so that is something that should only be considered if everything else fails (or maybe it shouldn't be considered at all)

#### Resyncing invidual units

Resyncing individual units is already somewhat within range, although probably still heavy on network traffic. sizeof(CUnit) is 832 bytes, so sending complete unit instance contents is not possible. I have noticed that a lot of the CUnit and derivative members can be calculated from others, or are only used in specific situations (such as building/terraform/attacking). This is were unit specific optimizations could be done, if every unit has a function which selects which class members have to be synced in that game situation.

## Possible optimizations

- If network traffic is too high, it might be reduced by adding more steps to the syncing process (possibly at the expense of a longer resync time due to lag). Step 2 and 4 of the resync process would be applied multiple times
  - 1\. The gamestate set of out-of-sync data starts with ALL gamestate
  - 2\. Server sends checksum values for specific sections of this set of gamestate (checksum per map sector for example)
  - 3\. Client compares with own gamestate and reports back.
  - 4\. Server now has a reduced set of out-of-sync gamestate and calculates a new set of checksums for that (per object checksum value for example)
- When one client goes out-of-sync, a more strict checksum calculation is applied to all client, to catch emerging differences in gamestate. The game is already paused anyway, so using that time would be useful.
- Use replay data to reduce resync data volumes. Have a 'running checksum' embedded in the replay data, which calculates periodically during gameplay. When a client loses sync, the host and client run back through these checksums from last to first until they identify the one that agrees (ie they were last in sync at that point). Then the host resends the subsequent gamestate changes in the same 'replay' format. Given that a replay is only a couple of megs, resending a few seconds worth of replay data should require little data and would only need the host and the affected client.
  - Note: assuming that the cause of desync is deterministic, this would have a good chance of triggering the same desync again just after the client got in sync. Also it is impossible to go back in time in the engine, so the act of starting at the last known good point in time is (almost) impossible to implement. -- Tobi

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Syncing System](https://springrts.com/wiki/Syncing_System).*
