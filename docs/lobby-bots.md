---
title: "Lobby Bots"
source_url: "https://springrts.com/wiki/Lobby_Bots"
categories:
  - "Lobby"
---
# Lobby Bots

<div class="mw-parser-output">

There are some bots on the springrts.com lobby server:

- [ChanServ](/chanserv) the lobby servers own bot for managing channels.
- [MelBot](/melbot) A nub bot with a bit of relay and notification functionality.

### uberbot

In various channels.

Channel founders will soon be able to request his presence in their channel, for now: ask one of his admins (only aegis at the moment).

In channels he has op status in: he auto-unmutes the founder, functions as a banbot (or allow bot, kicks users not on the whitelist), and more later.

Your channel config (banlist, oplist, founder) is completely separate from other channels (founder is automatically loaded by asking chanserv).

### X_death23_X

tombom's bot... haven't seen it in a while \<\_\<

in channels: \#unknown, \#ca, \#s44

- **!delaypm \<user\> \<message\>**\
  Sends a PM with \<message\> to \<user\> as soon as he gets online.
- **!help**\
  Displays a list of all commands. Only useful ones are listed on this page (and they aren't even included in the !help).
- **!viewpolls**\
  Displays all the polls you can participate in.
- **!viewpollopts \<pollnum\>**\
  Displays the options (for example Yes/No) of poll \<pollnum\> (as displayed by !viewpolls).
- **!votepoll \<pollnum\> \<optionnum\>**\
  Participates in poll \<pollnum\> and votes for option \<optionnum\> (as displayed by !viewpollopts).
- **!viewpollresults \<pollnum\>**\
  Displays the current results of poll \<pollnum\>.

### MessageBot

MidKnight's message-sending bot, in a variety of channels, including \#main.

Ask MidKnight if you want it to join your channel.

- **!message \<receiver\> \<message\>**\
  Relays your message to the designated receiver when they next come online.
- **!help**\
  Displays some information about MessageBot.

## Information

There are also several bots that just login, post news and logoff:

### CommitBot

- CommitBot posts details about each commit (change) to the <a href="http://spring.clan-sy.com/fisheye/browse/Spring/" class="external text" rel="nofollow">Spring source</a> in the channels \#commits and \#news.

### FileBot

- FileBot posts details about each file that is added to <a href="http://spring.unknown-files.net/" class="external text" rel="nofollow">Unknown Files</a> in \#unknown and in \#news.

### Forum

- Forum posts a link to each new post in the <a href="http://spring.clan-sy.com/phpbb/index.php" class="external text" rel="nofollow">Spring message board</a> in \#forum and in \#news.\
  It checks for new posts every 5 minutes.

### IceUI

- IceUI posts details about each commit (change) to the <a href="http://spring.clan-sy.com/phpbb/viewtopic.php?t=8779" class="external text" rel="nofollow">IceUI</a> <a href="https://meltrax.homeip.net/svn/IceUI/" class="external text" rel="nofollow">source</a> in the channels \#commits and \#news.

### League

- League posts details about each <a href="http://www.spring-league.com/" class="external text" rel="nofollow">ladder game</a> that took place to the channels \#league and \#news.\
  It checks the ladder site every 15 minutes for new game results.

### RevisionNinja

- RevisionNinja posts details about each commit (change) to the <a href="http://www.caspring.org/" class="external text" rel="nofollow">Complete Annihilation</a> <a href="http://www.caspring.org/browser" class="external text" rel="nofollow">source</a> in \#ca and in \#news.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lobby Bots](https://springrts.com/wiki/Lobby_Bots).*
