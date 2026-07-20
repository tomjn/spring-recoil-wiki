---
title: "Help:CommandLineArgs"
source_url: "https://springrts.com/wiki/Help:CommandLineArgs"
categories:
  - "Help"
---
# Help:CommandLineArgs

<div id="spring-command-line-arguments" class="section mw-parser-output">

## Spring Command-line Arguments

Spring has several command-line arguments which have various uses from setting window size, choosing the starting map & game (as of 98.0 these can be specified as a [rapid](/rapid) tag) and various developer debugging tools.

### spring://

In Spring 97.0 a new syntax was added which should in the long term replace [Script.txt](/script.txt) for clients, so that it is only needed for hosts, without the need to create a file to start Spring as a client. Spring links `spring://` URL scheme in the OS, so you can start such URLs from browser (as <a href="http://en.wikipedia.org/wiki/Unreal_Tournament" class="external text" rel="nofollow">UT99</a> did). E.g. you can place a spectator link on your website to join your [autohosts](/categories/autohosts) and/or you can use it for weblobbies.

The syntax is as follows: `spring spring://username:passwd@hostname:port`

All except hostname are optional, i.e. `spring://localhost` will work fine.

### How to display possible arguments

Linux: `./spring --help`

Windows: `spring --help > out.txt`

### Possible Arguments

As of 104.0 (note that earlier one-letter commandline flags are removed in 104.0 onwards)

    spring: Usage: spring [options] [path_to_script.txt or demo.sdfz]

      Flags from ../../rts/System/SpringApp.cpp:
        -benchmark (Enable benchmark mode (writes a benchmark.data file). The given
          number specifies the timespan to test.) type: int32 default: -1
        -benchmarkstart (Benchmark start time in minutes.) type: int32 default: -1
        -config (Exclusive configuration file) type: string default: ""
        -fullscreen (Run in fullscreen mode) type: bool default: false
        -game (Specify the game that will be instantly loaded) type: string
          default: ""
        -hidden (Start in background (minimised, no taskbar entry)) type: bool
          default: false
        -isolation (Limit the data-dir (games & maps) scanner to one directory)
          type: bool default: false
        -isolation-dir (Specify the isolation-mode data-dir (see --isolation))
          type: string default: ""
        -list-ai-interfaces (Dump a list of available AI Interfaces to stdout)
          type: bool default: false
        -list-ceg-classes (Dump a list of available projectile classes to stdout)
          type: bool default: false
        -list-config-vars (Dump a list of config vars and meta data to stdout)
          type: bool default: false
        -list-def-tags (Dump a list of all unitdef-, weapondef-, ... tags and meta
          data to stdout) type: bool default: false
        -list-skirmish-ais (Dump a list of available Skirmish AIs to stdout)
          type: bool default: false
        -map (Specify the map that will be instantly loaded) type: string
          default: ""
        -menu (Specify a lua menu archive to be used by spring) type: string
          default: ""
        -name (Set your player name) type: string default: ""
        -nocolor (Disables colorized stdout) type: bool default: false
        -oldmenu (Start the old menu) type: bool default: false
        -safemode (Turns off many things that are known to cause problems (i.e. on
          PC/Mac's with lower-end graphic cards)) type: bool default: false
        -server (Set listening IP for server) type: string default: ""
        -sync-version (Display program sync version (for online gaming)) type: bool
          default: false
        -test-creg (Test if all CREG classes are completed) type: bool
          default: false
        -textureatlas (Dump each finalized textureatlas in textureatlasN.tga)
          type: bool default: false
        -window (Run in windowed mode) type: bool default: false
        -write-dir (Specify where Spring writes to.) type: string default: ""

      Flags from ../../rts/lib/gflags/src/gflags.cc:
        -flagfile (load flags from file) type: string default: ""
        -fromenv (set flags from the environment [use 'export FLAGS_flag1=value'])
          type: string default: ""
        -tryfromenv (set flags from the environment if present) type: string
          default: ""
        -undefok (comma-separated list of flag names that it is okay to specify on
          the command line even if the program does not define a flag with that
          name.  IMPORTANT: flags in this list that have arguments MUST use the
          flag=value format) type: string default: ""

      Flags from ../../rts/lib/gflags/src/gflags_completions.cc:
        -tab_completion_columns (Number of columns to use in output for tab
          completion) type: int32 default: 80
        -tab_completion_word (If non-empty, HandleCommandLineCompletions() will
          hijack the process and attempt to do bash-style command line flag
          completion on this value.) type: string default: ""

      Flags from ../../rts/lib/gflags/src/gflags_reporting.cc:
        -help (show help on all flags [tip: all flags can have two dashes])
          type: bool default: false currently: true
        -helpfull (show help on all flags -- same as -help) type: bool
          default: false
        -helpmatch (show help on modules whose name contains the specified substr)
          type: string default: ""
        -helpon (show help on the modules named by this flag value) type: string
          default: ""
        -helppackage (show help on all modules in the main package) type: bool
          default: false
        -helpshort (show help on only the main module for this program) type: bool
          default: false
        -helpxml (produce an xml version of help) type: bool default: false
        -version (show version and build info and exit) type: bool default: false

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Help:CommandLineArgs](https://springrts.com/wiki/Help:CommandLineArgs).*
