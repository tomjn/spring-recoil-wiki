---
title: "AI:Skirmish"
source_url: "https://springrts.com/wiki/AI:Skirmish"
categories:
  - "AI"
---
# AI: Skirmish

> **Recoil / BAR:** Modern games such as [Beyond All Reason](https://www.beyondallreason.info/) bundle their own tuned Skirmish AIs, added through the in-game lobby. The notes below describe how Skirmish AIs work on the Spring engine generally.

## What are Skirmish AIs?

Skirmish AIs (older term: Global AIs), also called bots, are the computer opponents in a game. Writing a competitive one is a major undertaking. On the Spring engine, Skirmish AIs are plugins rather than part of the engine, so they can be added and removed like games or maps.

The community and AI-research students have released quite a few [Skirmish AIs](/ai-skirmish-list).

## How to install

A downloaded Skirmish AI is usually an archive containing a folder named for the AI with a version subfolder inside (for example `MyAI/1.23`). Extract it into the `AI/Skirmish/` folder of one of your Spring data directories. The AI then appears in your lobby the next time you start it (or when you refresh the AI list). Any AI-specific steps are in the readme that ships with it.

Some games bundle AIs already, so you may not need to install anything separately.

## How to use

- In your lobby, create a multiplayer game.
- Click "Add Bot".
- [Select](#which-ai-to-choose) an appropriate AI.
- Apply any additional configuration you want.
- Start the game.

## Which AI to choose

If a game ships with its own AI, that is usually the best choice - games like Spring: 1944, Kernel Panic and Zero-K include a specialised AI that understands the game it was built for.

Because the engine and its games evolve constantly, and because AI development is hard, no single Skirmish AI plays every game well. Each has strengths and weaknesses: some are competitive in Balanced Annihilation but struggle elsewhere; others need per-game config but handle many games. Since Spring 0.79, AIs carry meta info (including a description and URL) that the lobby shows when you click "Add Bot", which helps you pick.

In practice you will test a few AIs with your favourite game. See the [list of Skirmish AIs](/ai-skirmish-list) and the [AI comparison tables](/ai-compare).

To understand how AIs interface with the engine, see the [AI Interface system](/ai-development-system). To write one, see [AI Development](/ai-development).

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:Skirmish](https://springrts.com/wiki/AI:Skirmish).*
