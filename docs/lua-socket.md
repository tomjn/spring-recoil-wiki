---
title: "Lua Socket"
source_url: "https://springrts.com/wiki/Lua_Socket"
categories:
  - "Lua"
---
# Lua Socket

<div class="mw-parser-output">

LuaSockets allow a widget to use tcp/udp sockets. With luasockets you can create a client or a server connecting to a server and transfering some data.

There are many possibilties what could be done with luasockets in spring, some ideas:

- webserver that shows all files in VFS
- telnet console, that allows control of spring
- statistics webpage
- ingame widget updater
- ingame news pages
- ...

## config

All LuaSocket related config is readonly for LuaWidgets. They can be only changed through unitsync.

As default, socket access is restricted, as default no connections are allowed. To allow a connection / sending a packet, the destination has to the corresponding allow rule. For example, if a lua widget wants to connect to springrts.com at port 80,

    TCPAllowConnect springrts.com:80

has to be set.

Since spring 97.0 lobby.springrts.com:8200 is allowed as default.

Since Spring 98.0 all tcp connections are allowed by default (udp is still restricted).

Creating a server socket needs no config value to be set.

### possible config values

|  |  |
|----|----|
| LuaSocketEnabled = 1 | Default is 1 means, all Socket functions are enabled, 0 disables access to sockets. |
| TCPAllowConnect | allow TCP-connections to the listed hosts, for example: "springrts.com:80 springfiles.com:80" which allows luasockets to connect to springrts.com at port 80 and springfiles.com at port 80. |
| UDPAllowConnect | see TCPAllowConnect |

## example code

- <a href="https://github.com/spring/spring/blob/develop/cont/examples/Widgets/luasocket.lua" class="external text" rel="nofollow">luasocket.lua</a>
- <a href="https://github.com/spring/spring/blob/develop/cont/examples/Widgets/luasocket_console.lua" class="external text" rel="nofollow">luasocket_console.lua</a>

## Notes / known issues / TODO

- only ipv4 is supported (could be solved by using unstable luasocket2: <a href="http://code.matthewwild.co.uk/luasocket2-hg/" class="external free" rel="nofollow">http://code.matthewwild.co.uk/luasocket2-hg/</a>) or <a href="https://github.com/diegonehab/luasocket" class="external free" rel="nofollow">https://github.com/diegonehab/luasocket</a> (seems to be the more official)
- dns resolving is blocking, solutions: worker thread or some lib:
  - adns <a href="http://www.chiark.greenend.org.uk/~ian/adns/" class="external free" rel="nofollow">http://www.chiark.greenend.org.uk/~ian/adns/</a>
  - dns.c <a href="http://25thandclement.com/~william/projects/dns.c.html" class="external free" rel="nofollow">http://25thandclement.com/~william/projects/dns.c.html</a>
  - tadns <a href="http://adns.sourceforge.net/" class="external free" rel="nofollow">http://adns.sourceforge.net/</a>
  - or a lua implementation? biggest problem would be to <a href="http://stackoverflow.com/questions/2916675/programmatically-obtain-dns-servers-of-host" class="external text" rel="nofollow">find the local dns-server</a>
- most lua scripts from luasocket won't work as they are blocking! rewriting them non-blocking is required! (should be in most cases few work, as parsing stuff can be reused)
- config file should be better protected, see <a href="https://github.com/spring/spring/blob/develop/rts/System/Config/ConfigHandler.cpp#L289" class="external free" rel="nofollow">https://github.com/spring/spring/blob/develop/rts/System/Config/ConfigHandler.cpp#L289</a> + <a href="https://github.com/spring/spring/commit/948d6fb9d1c95b99b5cc7929cf3e0de0f9d6d93e" class="external free" rel="nofollow">https://github.com/spring/spring/commit/948d6fb9d1c95b99b5cc7929cf3e0de0f9d6d93e</a> maybe just locking the file is best?! see also <a href="http://springrts.com/mantis/view.php?id=2891" class="external free" rel="nofollow">http://springrts.com/mantis/view.php?id=2891</a> (private report)
- access to autohost interface / game host is denied
- If you get this error:

<!-- -->

    Error in Initialize(): [string "LuaUI/Widgets/luasocket.lua"]:65:
    attempt to index upvalue 'socket' (a nil value)

you maybe need to add to system.lua: socket = socket,

## documentation

- <a href="http://w3.impa.br/~diego/software/luasocket/socket.html" class="external free" rel="nofollow">http://w3.impa.br/~diego/software/luasocket/socket.html</a>
- <a href="http://w3.impa.br/~diego/software/luasocket/tcp.html" class="external free" rel="nofollow">http://w3.impa.br/~diego/software/luasocket/tcp.html</a>
- <a href="http://w3.impa.br/~diego/software/luasocket/udp.html" class="external free" rel="nofollow">http://w3.impa.br/~diego/software/luasocket/udp.html</a>

## links

<a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=27526" class="external text" rel="nofollow">lua sockets in spring</a> - original thread <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=28071" class="external text" rel="nofollow">Lua Lobby / Socket</a> - some code pieces for connecting to spring lobby server & protocol

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua Socket](https://springrts.com/wiki/Lua_Socket).*
