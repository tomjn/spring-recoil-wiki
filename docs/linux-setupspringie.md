---
title: "LINUX:SetupSpringie"
source_url: "https://springrts.com/wiki/LINUX:SetupSpringie"
categories:
  - "Linux"
  - "Autohosts"
---
# LINUX:SetupSpringie

<div class="mw-parser-output">

## Basics

Springie is a standalone windows/linux application written in C# by Licho. It is an alternative to the SPADS Autohost written by bibim. There is a <a href="http://springrts.com/phpbb/viewtopic.php?f=1&amp;t=7921&amp;st=0&amp;sk=t&amp;sd=a" class="external text" rel="nofollow">forum-thread</a> dealing with springie. More information can be found in "[How to use Springie](/hosting-spring-springie)".

In order to run the application on Linux, you need to have mono installed.

It is possible to run Springie on a dedicated sever without graphical interface.

## Springie on Ubuntu

The following steps have led to a successful installation of Springie on an Ubuntu 9.04 (Jaunty) server.

1\. Install Spring as described [here](/ubuntu-install).

2\. Install mono:

    sudo apt-get install mono-common libmono-winforms2.0-cil

3\. Get Springie:

    wget http://springie.licho.eu/springie.zip

4\. Extract "springie.zip" in a separate directory, e.g.:

In your home-directory:

    mkdir springie
    mv path/to/springie.zip springie
    cd springie
    unzip springie.zip

5\. Read the readme.txt file.

6\. Edit the main.xml file in your springie directory:

Replace:

    <ExecutableName>spring-dedicated.exe</ExecutableName>

with:

    <ExecutableName>/usr/games/spring-dedicated</ExecutableName>

7\. Run Springie.

When running Springie for the first time, it creates a bunch of files in its directory.

Run Springie either with

    mono Springie.exe

or

    mono Springie.exe -nogui

in case of a headless display.

8\. Stop Springie.

Use Ctrl+C (Strg+C) to stop Springie.

9\. Configure Springie as described below.

10\. Run Springie as described in item number 7.

## Configure Springie

### Bot account

In order to be able to play Spring and to host games at the same time, you need a new spring account.The easiest way to register a new account is to use your Multiplayer Lobby client, e.g. SpringLobby.

### Server Settings

In case you are hosting on a server with a display attached, you simply can use the Springie GUI for configuration.

If you set Springie up on a headless server, you have to manually edit autohost.xml to set the configuration options. Of course, you can use Springie on a host with a display, use the GUI for configuration and then copy over the autohost.xml file.

#### Add admin users

Between the closing \</DefaultRectangles\>-tag and the opening \<AutoLockMinPlayers\>-tag insert:

     <PrivilegedUsers>
     </PrivilegedUsers>

Then for each admin insert between these tags:

       <PrivilegedUser>
         <Level>LEVEL</Level>
         <Name>ADMIN</Name>
       </PrivilegedUser>

where LEVEL is a number from 1 to 5 and ADMIN is a player's name who should be able to perform admin tasks.

The result could look like this:

     <PrivilegedUsers>
       <PrivilegedUser>
         <Level>5</Level>
         <Name>YOUR-SPRING-PLAYER-ACCOUNT</Name>
       </PrivilegedUser>
       <PrivilegedUser>
         <Level>4</Level>
         <Name>admin1</Name>
       </PrivilegedUser>
     </PrivilegedUsers>

#### Set a password

To set a password replace

    <Password>*</Password>

with

    <Password>YOUR-PASSWORD</Password>

in autohost.xml.

#### Set default map and mod

The tags

    <DefaultMap></DefaultMap>

enclose the default map, the tags

    <DefaultMod></DefaultMod>

the default mod.

An example for hosting a BA 6.95 mod with the SmallDivide map is:

    <DefaultMap>SmallDivide.smf</DefaultMap>
    <DefaultMod>Balanced Annihilation V6.95</DefaultMod>

#### Change the game title

Use the

    <GameTitle></GameTitle>

tags to set the game title, e.g.:

    <GameTitle>MYCOOLSERVER!!!1!</GameTitle>

#### Administer Springie

You can use the commands listed in the readme.txt to administer Springie by "talking" to the bot user. The commands !help and !helpall provide lists of accepted commands.

### Add mods

*TO DO*

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [LINUX:SetupSpringie](https://springrts.com/wiki/LINUX:SetupSpringie).*
