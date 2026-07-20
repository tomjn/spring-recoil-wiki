---
title: "ChanServ"
source_url: "https://springrts.com/wiki/ChanServ"
categories:
  - "Lobby"
---
# ChanServ

<div class="mw-parser-output">

ChanServ is the lobby bot of [uberserver](/uberserver) for managing channels in the springrts.com lobby. It is intended that one day ChanServ will be replaced with a GUI, but we didn't get there yet.

## Interacting with ChanServ

ChanServ commands are prefixed by a colon **`:`**. They can be given in two forms:

- By PM to the ChanServ bot, in the form e.g. **`:topic newbies Welcome to #newbies!`**
- Within a channel in which ChanServ is present, in the form e.g. **`:topic Welcome to #newbies!`**

In the second form, the channel name is omitted. Note that in this first form the channel name 'newbies' is *not* preceded by a \# character.

ChanServ is present in all registered channels, and adds extra functionality to these channels as documented below. Contact a lobbyserver moderator to register a channel.

## Commands

All expressed as though sent in PM to ChanServ; when used inside a channel the chanName arg is omitted. All commands are callable by users with channel operator/founder or lobby moderator status, unless specified otherwise.

### Registering channels and operators

These commands are accessible only to lobby moderators and the channel founder.

- **`:register chanName chanFounder`**\
  Registers a channel. If the final argument is omitted, the callee will be the founder.
- **`:unregister chanName`**\
  Un-registers a channel.
- **`:changefounder chanName username`**\
  Make a user not be a channel operator.
- **`:op chanName username`**\
  Make a user into a channel operator. Accessible only to lobbyserver moderators and the channel founder.
- **`:deop chanName username`**\
  Make a user not be a channel operator. Accessible only to lobbyserver moderators and the channel founder.
- **`:history chanName state`**\
  Turns persistent chat functionality on/off. State should be "on" or "off".
- **`:antispam chanName state`**\
  Turns antispam chat functionality on/off. State should be "on" or "off".

### Managing users

These commands are accessible to channel operators, as well as lobby moderators and the channel founder.

- **`:topic chanName topic`**\
  Sets the topic, which is displayed to all users when they join the channel.
- **`:mute chanName target_username duration reason`**\
  Mutes a user. The duration can be in form e.g. "2d" for two days or "1h" for one hour.
- **`:unmute chanName target_username `**\
  Unmutes a user.
- **`:listmutes`**\
  Returns a list of muted users.
- **`:ban chanName target_username duration reason`**\
  Bans a user.
- **`:unban chanName target_username duration reason`**\
  Unbans a user.
- **`:listbans`**\
  Returns a list of banned users.
- **`:kick chanName username`**\
  Kicks a user.

### Channel forwarding

These commands are accessible only to lobby moderators.

- **`:forward from_chanName to_chanName`**\
  Set up forwarding of all operator statuses, mutes and bans, from a channel to a battle. Call this command more than once to forward to more than one battle.
- **`:unforward from_chanName to_chanName`**\
  Remove forwarding.
- **`:listforwards chanName`**\
  Returns a list of the locations this channel is forwarding too.

### General info

These commands can be called by anyone.

- **`:battlename username`**\
  Returns the name of the channel in use by this user to host their current battle.
- **`:info chanName`**\
  Displays information about the channel, including the founder and list of operators.
- **`:help`**\
  Offers you a link to this page!

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [ChanServ](https://springrts.com/wiki/ChanServ).*
