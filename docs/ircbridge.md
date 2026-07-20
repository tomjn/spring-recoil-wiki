---
title: "IrcBridge"
source_url: "https://springrts.com/wiki/IrcBridge"
categories:
  - "Lobby"
---
# IrcBridge

<div class="mw-parser-output">

IRC bridge for Spring lobby

------------------------------------------------------------------------

## What is it and how does it work ?

This Spring IRC bridge is a Perl program that translates IRC commands into Spring lobby commands. It acts like a proxy for your lobby connection, allowing you to use a standard IRC client to connect to Spring lobby server. However, don't expect to mask your IP address and be anonymous this way, as the client IP is still forwarded to Spring lobby server by the IRC bridge as "local" IP in Spring lobby protocol.

## How to use it ?

Configure your IRC client as follows:

- server: irc.springrts.com
- port: 6667 (or 16667)
- nickname: login of a valid Spring lobby account (not connected to Spring lobby server currently)
- password: password of the Spring lobby account

Then you can use the bridge like any other IRC server (list channels, join channels, send private messages...).

***Note:*** When creating a new lobby account to be used over IRC, you first have to login with it on the lobby, at least once.

## How to get the full player list ? How to know who is online ?

Usually, in Spring lobby clients, there is a "local" tab which contains all online players so that you know who is online. You can have the same behavior with IRC bridge by joining the special "&local" channel. This channel is actually a fake channel which contains all online clients.

Also, if you try to send a private message to a client who isn't online, you will be warned by the IRC bridge that no one received your message (like with normal IRC servers).

## Can I join battles ?

Yes, the Spring IRC bridge handles battles as special channels. These battle channels are prefixed by '&' instead of '#', and they are named according to their battle ID (numbers used internally by Spring lobby servers and clients).

Here are some ways to join battles easily using IRC bridge:

- you can use the IRC command "LIST" to list all channels. The battles will appear in this list, with various colored information as topic (status, number of players/specs, modname, mapname, description etc.)
- you can use the &\<playerName\> alias to refer to the battle in which \<playerName\> is. For example, sending the IRC command "JOIN &joe" will join the battle in which player "joe" is currently
- you can use the IRC command "WHOIS" on a player to check in which battle he is

When you join a battle, you will appear as an unsynced spectator. That way, players know you don't want to play and you won't be able to join the game when it starts.

## What do IRC user prefixes "!.@%+" mean in Spring world ?

In IRC world, channel user modes are used to indicate characteristics of users in a channel. These user modes are shown as nickname prefixes in user lists. Here are the nickname prefixes used by Spring IRC bridge and the corresponding user modes:

For standard channels:

! Admin bot @ Operator/admin % Bot + In-game user

For battles:

! Admin bot . Host @ Operator/admin % Bot + Player (non-spectator)

## What do IRC masks mean in Spring world ?

In IRC world, user masks are used to identify clients. Standard format is "\<nick\>!\<ident\>@\<host\>", where \<nick\> is the nickname of the client (as seen on screen during chat), \<ident\> is the username (as provided by the client), and \<host\> is the actual hostname or IP address of the client.

When using Spring IRC bridge, \<ident\> is replaced by \<countryCode\> which is the country code on 2 letters. And \<host\> is replaced by "\<accountId\>.taspringmaster.clan-sy.com", where \<accountId\> is the account identifier (which doesn't change when users renames).

That way, IRC client functionalities which rely on IRC user masks (ignore, highlights etc.) still work reliably.

## How to get more Spring-specific information about users ? (ranks, status etc.)

You can use the standard IRC command "WHOIS" to get detailed information about any user. The rank, in-game status, and current battle if any are shown.

## How to send raw commands to Spring lobby server ?

If you try to send raw commands directly with your IRC client, the raw command will be interpreted by the IRC bridge itself and won't be forwarded to Spring lobby server. To send raw commands to Spring lobby server through IRC bridge, you have to join the special channel "&local" and simply say the command as a chat message here. The "&local" channel is just a fake channel, and no one will see what is entered here. Messages are simply forwarded to Spring lobby server without any modification.

## How to filter annoying user mode changes ?

In standard channels, the +v/-v user mode changes corresponding to in-game/out-of-game Spring status changes can be annoying because there can be a lot of them at the same time, and they may generate messages at client side. Usually you can filter these messages in your IRC client. But you can also choose to filter them at IRC bridge level, by disabling your "s" (STATUS_CHANGES) user flag. To do so you can send the following standard IRC command: "MODE \<nickname\> -s" (user modes are persistent at IRC bridge level, so you don't have to send it every time you reconnect).

## Can I use CTCP (Client-To-Client Protocol) IRC extension ?

Yes, the IRC bridge supports the CTCP IRC protocol extension. CTCP VERSION is supported even when interacting with standard Spring lobby clients, whereas other CTCP commands (DCC CHAT, DCC SEND ...) only work with other IRC bridge users.

## How to avoid timeouts between your client and the IRC bridge ?

If you have connection issues, you can try to tune the IRC bridge timeout. Default value is 120 seconds, which should fit most connections (maximum value is 600 and minimum value is 20). If you use a big value as IRC timeout, you will be able to stay connected even if your Internet connection is down for a long time. However the IRC bridge will take more time to detect that your connection is down, so you could appear online on Spring lobby server whereas your connection is down. You can change your IRC timeout value by changing your "t" (TIMEOUT_IRC) user flag. To do so you can send the following standard IRC command: "MODE \<nickname\> t \<timeout\>" (user modes are persistent at IRC bridge level, so you don't have to send it every time you reconnect). Note that increasing the IRC timeout value won't help if your IP address changes after each disconnection.

## How to avoid timeouts between IRC bridge and Spring lobby server ?

If Spring lobby server takes too much time to answer, IRC bridge will consider the connection as down. The default timeout is 60 seconds, which should be ok most of the time (maximum value is 600 and minimum value is 20). However, sometimes Spring lobby server is overloaded so it takes very long to answer to all Spring clients but connections are still active. You can increase the lobby timeout if you want to stay connected in this case. On the other hand, the IRC bridge will take more time to detect that Spring lobby server is down, so you could think you are still connected whereas lobby server is down. You can change your lobby timeout value by changing your "T" (TIMEOUT_LOBBY) user flag. To do so you can send the following standard IRC command: "MODE \<nickname\> T \<timeout\>" (user modes are persistent at IRC bridge level, so you don't have to send it every time you reconnect).

## I have problems using the bridge, can I see the network messages exchanged in real time to investigate myself?

Sure, you can join the special channels "&debug", "&debug_lobby" and "&debug_irc". These fake channels allow any IRC bridge user to check the messages exchanged between his IRC client, the IRC bridge and the lobby server (for his connection only of course).

- &debug_lobby contains all network messages exchanged between the Spring lobby server and the IRC bridge
- &debug_irc contains all network messages exchanged between the IRC bridge and the IRC client
- &debug contains the same as &debug_lobby and &debug_irc gathered in one channel

## Is the source code available? What is the license?

The IRC bridge source code is available <a href="https://github.com/Yaribz/SpringIrcBridge" class="external text" rel="nofollow">here</a> under GPL v3 license.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [IrcBridge](https://springrts.com/wiki/IrcBridge).*
