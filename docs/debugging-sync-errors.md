---
title: "Debugging sync errors"
source_url: "https://springrts.com/wiki/Debugging_sync_errors"
categories:
  - "Engine_Dev"
---
# Debugging sync errors

<div class="mw-parser-output">

[Development](/development-main) \< Debugging Sync Errors

## Debugging Sync Errors

Desync happens when simulation gives different results for different clients. Currently it is detected by means of checksumming crucial data on every write; this checksum is then transferred to the host, who compares them to his own checksum.

For purposes of debugging, the sync debugger stores every such write with some debugging information. When a desync happens, the write history is compared on every client, who then sends locations where computation has given different results. The location is then resolved to line number of the engine source, which should provide information about the nature of the desync.

First of all, before trying to find a sync-error you should make sure, that running with SIGNAL_NANS=TRUE works without getting SIGFPE's and valgrind doesn't detect invalid reads/writes as this can cause desyncs, too.

### check for NANs

edit CMakeCache.txt and set SIGNAL_NANS=TRUE, recompile spring.

run spring and ideally, if you have a replay which desynced, run it with the nan-checking spring. else try some stuff like

    /cheat
    /give all
    /give all 1
    /give 100 unitname ...

### check for memory corruption with gcc's address sanitizer

compile spring with gcc's address sanitizer (gcc \>= 4.8.0)

    cmake . -DCMAKE_CXX_FLAGS=-fsanitize=address -DCMAKE_C_FLAGS=-fsanitize=address
    make spring-headless

then run the demo with the compiled spring:

    spring-headless demofile.sdf

### Compiling

To enable sync debugging, you have use a special build of Spring. You can either use the buildbot or compile it yourself.

#### Using buildbot

Go to <a href="http://buildbot.springrts.com/builders/full-windows-test" class="external free" rel="nofollow">http://buildbot.springrts.com/builders/full-windows-test</a> set

` `

    Property 1 Name = config
    value           = syncdebug

If the build works, an executable will be uploaded to the usual place; at the time of this writing, it's <a href="http://springrts.com/dl/buildbot/syncdebug/" class="external free" rel="nofollow">http://springrts.com/dl/buildbot/syncdebug/</a>. The generated archive will have \[syncdebug\] in its name.

Valid values for config are stored in <a href="https://github.com/spring/spring/blob/develop/buildbot/master/master.cfg#L57" class="external text" rel="nofollow">master.cfg</a> of the buildbot config.

#### Self-Compile

To compile it, first get the same revision from git, configure with

    cmake -DCMAKE_BUILD_TYPE=DEBUG -DSYNCDEBUG=true

you can add

    -DTRACE_SYNC=true

which makes spring write a trace file which can be compared with "diff".

### Running

1.  Host a game. Make sure **every** player who joins has this exe; it's not needed to have it at the time of joining the battle, but when the game starts, everyone must have it. Expect random undefined behaviour otherwise.
2.  If you want engine source lines, the host has to download two more files: debug symbols and addr2line. Debug symbols are generated and uploaded by buildserv; as of now, they can be found at <a href="http://springrts.com/dl/buildbot/syncdebug/" class="external free" rel="nofollow">http://springrts.com/dl/buildbot/syncdebug/</a> . addr2line is a part of MinGW32 <a href="http://sourceforge.net/project/showfiles.php?group_id=2435&amp;package_id=11290" class="external text" rel="nofollow">binutils package</a>.
    1.  Download debug symbols
    2.  Download addr2line
    3.  Extract both to where your syncdebug-enabled spring.exe lives
    4.  **Rename debug symbols to spring.dbg**

Only the host needs to download addr2line and debug symbols.

When everybody is in game, test your setup by enabling cheats (*/cheat*) and having one of the players do a test desync (*/desync*). The game should pause and syncdebugger should do its work. If the game pauses, but you won't see SD messages, it's likely that one of the clients doesn't have the correct exe.

In addition to syncdebugger logs, syncdebug engine builds also have synctrace enabled. This option makes spring.exe write a file called trace\<playernum\>.log which logs important simulation events in a diff-friendly format. After a desync, get this file from the desynced player(s) and do a *diff -u yourtrace histrace* to find the first *logged* sync mismatch. The real desync probably happened somewhere in between the two log lines.

If you're a game developer, please be aware that Lua may be a source of desyncs. E.g. table iteration using pairs when you have tables, coroutines, or functions as keys is not a sync-safe operation, see <a href="http://springrts.com/mantis/view.php?id=1050" class="external text" rel="nofollow">mantis #1050</a> for example of such a desync.

#### available commands

/desync This command modifies some game data which causes the game to desync. Use this to test the sync debugger.

/fakedesync This just triggers the sync debugger, without desyncing the game. The sync debugger will print an error â€œHuh, all checksums are equal?!?â€? to the logfile after issuing this command. Use this to test the sync debugger. Server only.

/reset Reset the sync debugger to it initial state. Use this if you want to continue playing after the sync debugger finished outputting the debugging info.

#### Post processing

All previously required postprocessing has now been built into the sync debugger, so this step is quickly done: just check that syncdebug-server.log looks sane and if it does, send it to the team. You can also make a diff of trace0.log (taken from client + server) to see where the desync started.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Debugging sync errors](https://springrts.com/wiki/Debugging_sync_errors).*
