---
title: "Heatcloud"
source_url: "https://springrts.com/wiki/Heatcloud"
categories:
  - "Delete"
---
# Heatcloud

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

## Introduction

heatcloud is one of the simplest and most common explosion types. Ironically, it is also one of the least intuitive. First of all, ignore the name--it basically makes an expanding image at the point at which it is spawned.

## Source

<a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Projectiles/Unsynced/HeatCloudProjectile.cpp" class="external text" rel="nofollow">rts/Sim/Projectiles/Unsynced/HeatCloudProjectile.cpp</a>

## Suggested Use

heatcloud makes a good main piece of an explosion. Think of it as a background for the other components of your explosion generator.

## Parameters

### heat, maxheat, heatFalloff

Most explosions have alpha and ttl. I don't know why heatcloud uses these instead. Basically:

Starting alpha = heat / maxheat

ttl = heat / heatFalloff

The alpha decreases linearly across the heatcloud's lifetime.

### size, sizeGrowth

The heatcloud starts at size size and grows sizeGrowth each frame.

### sizemod, sizemodmod

It seems that the heatcloud expands by a factor of (1 - sizemod) each frame. The sizemod itself is multiplied by sizemodmod every frame. Most of the time it's probably best just not to contemplate these.

### texture

The texture of the heatcloud.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Heatcloud](https://springrts.com/wiki/Heatcloud).*
