---
title: "Lua Lobby"
source_url: "https://springrts.com/wiki/Lua_Lobby"
categories:
  - "Lua"
---
# Lua Lobby

<div class="mw-parser-output">

**Note: After discussion <sup>[\[1\]](#cite-note-1)</sup> LuaLobby was removed<sup>[\[2\]](#cite-note-2)</sup> from engine \> 91.0** 

Instead [LuaSocket](/lua-socket) can be used. There's an existing LuaSocket implementation available at: <a href="https://github.com/gajop/liblobby" class="external free" rel="nofollow">https://github.com/gajop/liblobby</a> with docs at: <a href="http://gajop.github.io/liblobby/" class="external free" rel="nofollow">http://gajop.github.io/liblobby/</a>.

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua Lobby

## Create

**Script.CreateLobby**

     ( ) -> userdata lobby

## Userdata Functions

**lobby:Connect**

     ( string url, int port ) -> nil

**lobby:Disconnect**

     ( ) -> nil

**lobby:Login**

     ( string username, string password ) -> nil

**lobby:Rename**

     ( string newname ) -> nil

**lobby:ChangePass**

     ( string oldpassword, string newpassword ) -> nil

**lobby:Register**

     ( string username, string password ) -> nil

**lobby:ConfirmAggreement**

     ( ) -> nil

**lobby:JoinChannel**

     ( string chan_name [,string password] ) -> nil

**lobby:LeaveChannel**

     ( string chan_name ) -> nil

**lobby:Say**

     ( string chan_name, string message ) -> nil

**lobby:SayEx**

     ( string chan_name, string message ) -> nil

**lobby:SayPrivate**

     ( string user_name, string message ) -> nil

**lobby:StatusUpdate**

     ( bool ingame, bool away ) -> nil

**lobby:Channels**

     ( ) -> nil

**lobby:KickChannelMember**

     ( string chan_name, string user_name, string reason) -> nil

**lobby:ChangeTopic**

     ( string chan_name, string topic) -> nil

**lobby:Poll**

     ( ) -> nil

## Userdata Events

**lobby.DoneConnecting** = function(bool sucess, string error_message)\
**lobby.ServerGreeting** = function(string server_version, string spring_version, int udp_port, int mode)\
**lobby.RegisterDenied** = function(string reason)\
**lobby.RegisterAccepted** = function()\
**lobby.LoginDenied** = function(string reason)\
**lobby.LoginEnd** = function()\
**lobby.Aggreement** = function(string text)\
**lobby.Motd** = function(string text)\
**lobby.ServerMessage** = function(string text)\
**lobby.ServerMessageBox** = function(string text, string url)\
**lobby.AddUser** = function(string user_name, string country, number cpu)\
**lobby.RemoveUser** = function(string user_name)\
**lobby.UserStatusUpdate** = function(string user_name, bool away, bool bot, bool ingame, bool moderator, int rank)\
**lobby.ChannelInfo** = function(string chan_name, int num_users)\
**lobby.ChannelInfoEnd** = function()\
**lobby.RequestMutelist** = function(string chan_name)\
**lobby.Mutelist** = function(string chan_name, table {"userABC","userXYZ",...})\
**lobby.Joined** = function(string chan_name)\
**lobby.JoinFailed** = function(string chan_name, string reason)\
**lobby.ChannelMember** = function(string chan_name, string user_name, bool joined)\
**lobby.ChannelMemberLeft** = function(string chan_name, string user_name, string reason)\
**lobby.ChannelMemberKicked** = function(string chan_name, string user_name, string reason)\
**lobby.ChannelTopic** = function(string chan_name, string author, int time, string topic)\
**lobby.ChannelMessage** = function(string chan_name, string text)\
**lobby.Said** = function(string chan_name, string user_name, string text)\
**lobby.SaidEx** = function(string chan_name, string user_name, string text)\
**lobby.SaidPrivate** = function(string user_name, string text)\
**lobby.Disconnected** = function()\
**lobby.NetworkError** = function(string message)\

<div class="mw-references-wrap">

1.  [↑](#cite-ref-1) <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=28935" class="external text" rel="nofollow">anything against removal of lualobby?</a>
2.  [↑](#cite-ref-2) <a href="https://github.com/spring/spring/commit/05f61e76f7522096faeef2eaa6aaa16bc2b55d71" class="external text" rel="nofollow">github commit</a>

</div>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua Lobby](https://springrts.com/wiki/Lua_Lobby).*
