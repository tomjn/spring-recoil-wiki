---
title: "Development:Getting Started"
source_url: "https://springrts.com/wiki/Development:Getting_Started"
categories:
  - "Engine_Dev"
---
# Development:Getting Started

<div class="mw-parser-output">

[Development](/development-main) \< Getting Started

## Starting Spring Development

**NOTE: Outlined below is information on assisting with the development of the Spring source itself. For information about developing a game (units, widgets, maps, etc.) see the [Gamedev:Main](/gamedev-main) page.**

**[Even if you are developing a game, it is highly recommended that you get the engine source. Engine source + full text search: DO IT.](/enginesource-for-gamedevs)**

### Overview

To start development, you will need:

1.  To read the [Coding_Standards](/coding-standards)
2.  A good code manipulation program: [Development_IDEs](/development-ides)
3.  [Compiling](/building-spring) the source code

### Learning C++

You will need to know C++ to modify or understand Spring's source code. If you are interested in learning C++, see [Learning_CPP](/learning-cpp)

However please note that badly designed code (code created by a C++ novice for example), even if working will likely not be included in the spring code. Spring is a large project, and therefore it is necessary to stay away from hack jobs and create general solutions to problems.

## Source Code Documentation

The <a href="https://springrts.com/dl/buildbot/doc/" class="external text" rel="nofollow">doxygen documentation</a> can provide an overview about the source, directory structure and its dependencies. Unfortunately, there is no server running it, so you need to make them on your own, to do this, install doxygen and run "doxygen" in spring source directory (will take some time).

An explanation on how the code is executed in game can be found in the [Spring Engine Code](/spring-engine-code) page.

### Development Guidelines

Before starting to make modifications to the source, take a look at the [development guidelines](/development-guidelines) which outlines some important things to think about. To find something interesting to work on, look for todos in the <a href="http://springrts.com/phpbb/viewforum.php?f=60" class="external text" rel="nofollow">forum</a>. You can also check in the forums to see what others are doing. If you do edit the code, please add [Doxygen style comments](/doxygen-style-comments) to the code, which will then enhance the source code documentation.

### Keep track what others do

If you develop with others, you need to know what they do. You can browse the source <a href="http://github.com/spring/spring/tree/develop" class="external text" rel="nofollow">at our github-page</a>, and there is a <a href="http://github.com/feeds/spring/commits/spring/develop" class="external text" rel="nofollow">commit newsfeed</a>.

### Buildbot and Stacktrace translator

A buildbot server is <a href="http://buildbot.springrts.com/waterfall?reload=60" class="external text" rel="nofollow">here</a> available to automatically compile Spring, the default AIs and make the installer. It can also <a href="http://stacktranslate.springrts.com/" class="external text" rel="nofollow">translate stacktraces</a> directly from uploaded [infolog.txt](/infolog.txt) files.

## Important Developer Tasks

### [Profiling](/engine-profiling)

### [How to debug SyncErrors](/debugging-sync-errors)

### [Debug GFX problems](/debug-gfx-problems)

## How to get your code included

If you create something that you think should be included in the official source tree please create a pull request to the develop branch of the spring repository on github.com.

Make sure that your changes:

1.  Were successfully tested locally.
2.  Conform with the [Coding Standards](/coding-standards).
3.  Are spread over an appropriate amount of commits - Please refrain from combining many individual changes into a single commit and from including merge commits.
4.  Include an update to the changelog if it's a major change - this is not to save work for the devs, but mostly to provide a concise explanation of what the pull request changes.

Post in the <a href="http://springrts.com/phpbb/viewforum.php?f=12" class="external text" rel="nofollow">development forum</a> or drop in [\#sy](/irc) after creating the pull request (or while coding it) to get feedback and eventually to have it included.

## Spring Engine TODO list

If you want to code something, look into the <a href="http://springrts.com/phpbb/viewforum.php?f=60" class="external text" rel="nofollow">New Developers Forum</a> for TODOs. There is also a <a href="http://springrts.com/phpbb/viewforum.php?f=21" class="external text" rel="nofollow">feature request forum</a>, which may give you some ideas. Don't be overwhelmed by the sheer number of (silly) requests though!

Alternatively, you may just search the code for the <a href="http://en.wikipedia.org/wiki/Comment_%28computer_programming%29#Tags" class="external text" rel="nofollow">famous comment tags</a>, for example on linux:

<div class="mw-highlight mw-highlight-lang-bash mw-content-ltr" dir="ltr">

    grep -r "TODO" rts

</div>

The Bugtracker contains a <a href="http://springrts.com/mantis/view_all_bug_page.php" class="external text" rel="nofollow">long todo-list</a> as well.

There are also some [project proposals](/project-proposals).

## Development links

- <a href="http://github.com/spring/spring/" class="external text" rel="nofollow">View the latest source in a web browser</a>
- <a href="https://springrts.com/dl/buildbot/doc/106.0/engine/" class="external text" rel="nofollow">Doxygen documentation</a>
- <a href="http://springrts.com/mantis/" class="external text" rel="nofollow">Bug Tracking System</a>
- <a href="http://buildbot.springrts.com/waterfall?reload=60" class="external text" rel="nofollow">buildbot</a>
- <a href="http://springrts.com/dl/buildbot/" class="external text" rel="nofollow">buildbot builds</a>
- <a href="https://springrts.com/dl/buildbot/doc/106.0/engine/d9/d28/group__unitsync__api.html" class="external text" rel="nofollow">Unitsync API docs</a>
- [Developer Meetings](/development-minutes)
- <a href="http://stacktranslate.springrts.com" class="external text" rel="nofollow">Stacktrace Translator</a> (translates stacktraces from official win32 builds)
- <a href="http://sourceforge.net/projects/springrts" class="external text" rel="nofollow">SourceForge project page</a>
- <a href="http://github.com/spring/spring-website/" class="external text" rel="nofollow">Web site repository</a>

## Legal

The Spring engine and content in the main installer is Free Software, distributed under the GPL license. You may distribute the Spring Engine freely, modify its contents, or redistribute the source. For details, please read the license, which is included in the installer and source code.

If you wish to use a game or mod in a game CD, promote it in a magazine, or promote it on another website, please contact the game's maintainers. The Spring Project is not responsible for the legal status of any games built with or using this engine, and does not support redistribution of illegal content.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Development:Getting Started](https://springrts.com/wiki/Development:Getting_Started).*
