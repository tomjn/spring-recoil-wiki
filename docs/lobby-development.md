---
title: "Lobby Development"
source_url: "https://springrts.com/wiki/Lobby_Development"
categories:
  - "Lobby"
---
# Lobby Development

> **Recoil / BAR:** This is a historical catalogue of the Spring lobby ecosystem. The modern game, [Beyond All Reason](https://www.beyondallreason.info/), ships its own integrated launcher rather than a standalone lobby client. Several projects listed below are still maintained; many are legacy. Dead `springrts.com` infrastructure links have been delinked.

<div class="mw-parser-output">

## Spring lobby ecosystem

#### Protocol

- Spring Lobby Protocol Description (formerly hosted on springrts.com; source: [spring/LobbyProtocol](https://github.com/spring/LobbyProtocol/blob/master/ProtocolDescription.xml))

#### Server:

#### [Uberserver](/uberserver)

cross-platform, Python, by aegis, abma, silentwings

- The primary lobby server currently running on springrts.com. See the dedicated page on [uberserver](/uberserver) for more info.

#### [Download_Systems](/download-systems)

Various systems exist to supply content, see the dedicated page [Download_Systems](/download-systems).

#### Lobby clients:

#### [SpringLobby](/springlobby)

Linux, Windows, Mac , C++, by Koshi, Braindamage, Abma and many others

<a href="https://github.com/springlobby/springlobby" class="external text" rel="nofollow">github: repository + issues</a>

#### [Chobby](/chobby)

Windows, Lua, by gajop, with major contributions from various game devs

<a href="https://github.com/Spring-Chobby/Chobby" class="external text" rel="nofollow">github: repository + issues</a>

## Zero-K systems

#### ZeroK Server

cross-platform, C#, by Licho

Zero-K lobby server. Uses a different protocol. Source can be found at <a href="https://github.com/ZeroK-RTS/Zero-K-Infrastructure/tree/master/ZkLobbyServer" class="external free" rel="nofollow">https://github.com/ZeroK-RTS/Zero-K-Infrastructure/tree/master/ZkLobbyServer</a>

#### Zero-K Lobby

No longer uses the Spring lobby protocol

Windows/Linux, C#, by Licho & quantum

<a href="https://github.com/ZeroK-RTS/Zero-K-Infrastructure/tree/master/ZeroKLobby" class="external text" rel="nofollow">Zero-K Lobby github</a>

## Legacy systems

### Legacy lobby clients

From mostly functional, to WIP, abandoned or unusable. Apparently, its much harder to make a lobby client than most people think.

#### flobby

Linux, C++, by cleanrock, only maintained actively for use with the Zero-K lobbyserver.

<a href="https://github.com/cleanrock/flobby" class="external text" rel="nofollow">github page</a>

#### Weblobby

cross-platform, C++, unmaintained (superseded by Chobby)

#### [TASClient](/tasclient)

Windows, Delphi, by Satirik, unmaintained

#### Alphalobby

Windows, C, unmaintained

Alphalobby was work in progress; its source was hosted on the now-defunct Google Code.

#### CheeseLobby

cross-platform, Java, by Cheesecan, unmaintained

<a href="https://github.com/jahwag/OpenLobby" class="external text" rel="nofollow">binaries and code</a>

#### QtLobby

cross-platform, C++, unmaintained

<a href="https://github.com/tizbac/qtlobby" class="external text" rel="nofollow">project page</a>

#### Spring-PythonBotFramework

cross-platform, Python, by BrainDamage & koshi, unmaintained

A bot framework written in python. <a href="https://github.com/renemilk/tasbot/wiki" class="external text" rel="nofollow">GitHub wiki</a>

#### Go SpringLobbyClient

cross-platform, Go unmaintained

A simple client implementation of the lobby protocol in Go. <a href="https://github.com/Agon/go-slc/" class="external text" rel="nofollow">project page</a>

### Legacy lobbyservers

#### SpringLS

cross-platform, Java, hoijui

Legacy lobby server, created by Betalord. Superceeded by uberserver in 2012. You can fetch the sources through *git*. Details can be found on the <a href="http://github.com/spring/SpringLS" class="external text" rel="nofollow">development site</a>.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lobby Development](https://springrts.com/wiki/Lobby_Development).*
