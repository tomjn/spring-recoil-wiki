---
title: "Spring on a LAN"
source_url: "https://springrts.com/wiki/Spring_on_a_LAN"
categories:
  - "Lobby"
---
# Spring on a LAN

<div class="mw-parser-output">

## Playing on a LAN

### Introduction

Hosting a LAN game of Spring is very simple.

First, you must have a working LAN. Obviously this is not within the scope of this article, so you are on your own there.

Once you have your network working, you can proceed. You must first install the [Latest version of Spring](/download).

We will now discuss startup and configuration.

## Running the Server

currently there are two lobby server available:

- [uberserver](/uberserver) (recommonded, is used for official server)
- [SpringLS](/springls) (unmaintained, broken with current lobby clients)

## Joining the local lobby server

After the server has successfully been started, the players have to log in the local lobby server by entering its IP followed by ":8200" (to specify the port) in the server field of their lobby clients (SpringLobby by default). The player hosting the lobby server can use "localhost:8200" or "127.0.0.1:8200" instead of his own IP. If running uberserver, you must first register your nickname. The nickname must not contain space nor special characters. Once the IP & port are entered in the server field, go to the register tab, enter a nickname and password, and click "Ok". Accept the terms of use by clicking "Yes" when they pop up. Then log in using the registered nickname.

[<img src="/images/Connect_to_lan_lobby-withnote.png" decoding="async" width="415" height="293" alt="Connect to lan lobby-withnote.png" />](/images/Connect_to_lan_lobby-withnote.png) [<img src="/images/Register_on_lan_lobby.png" decoding="async" width="415" height="292" alt="Register on lan lobby.png" />](/images/Register_on_lan_lobby.png)

Once every one is logged into the local lobby server you can host battle in the usual way and play spring in your LAN.

## How to get the lobby server IP

The player hosting the lobby server has to give his IP to all the players in the LAN. He can retrieve his IP by doing this:

### Windows

- Press *Windows Key + R*

[<img src="/images/Windows-run-start-menu.gif" decoding="async" width="344" height="176" alt="Windows-run-start-menu.gif" />](/images/Windows-run-start-menu.gif)

- Type "cmd"
- Click "run"
- In the terminal window, type "ipconfig"

[<img src="/images/Lan_hostip.gif" decoding="async" width="481" height="235" alt="Lan hostip.gif" />](/images/Lan_hostip.gif)

### Linux

- Open a terminal and type: ifconfig

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Spring on a LAN](https://springrts.com/wiki/Spring_on_a_LAN).*
