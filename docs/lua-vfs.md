---
title: "Lua VFS"
source_url: "https://springrts.com/wiki/Lua_VFS"
categories:
  - "Lua"
---
# Lua VFS

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua VFS

## Overview

Although Spring can access the filesystem directly (via os module) it is more common that you would want to access files included with your game or Spring. Trouble is, most of these files are compressed into archives (.sdz/.sd7) so random access would generally be a difficult procedure. Fortunately, the Spring Lua system automatically provides access to mod and base files via the VFS module.

The VFS module doesn't simply open archives though. What it does is map your game files, game dependencies and Spring content onto a virtual file tree. All archives start from the 'roots' of the tree and share the same virtual space, meaning that if two or more archives contain the same resource file name the resources overlap and only one of the files will be retrieved. Overlapping directories on the other hand are merged so the resulting virtual directory contains the contents of both. Here is an example of how this works:

**Archive 1 (games/mygame.sd7)**

textures\
\|\_\_ texture1.png\
models\
\|\_\_ model1.mdl\

**Archive 2 (base/springcontent.sdz**

textures\
\|\_\_ texture1.png\
\|\_\_ texture2.png\
\|\_\_ texture3.png\

**VFS**

textures\
\|\_\_ texture1.png\
\|\_\_ texture2.png\
\|\_\_ texture3.png\
models\
\|\_\_ model1.mdl\

This raises the question: If both archives have a texture1.png then which texture1.png is retreived via the VFS? The answer depends on the order the archives are loaded and the VFS mode (more on modes below). Generally however, each archive loaded overrides any archives loaded before it. The standard order of loading (from first to last) is:

1.  The main Spring/ game directory.
2.  The automatic dependencies springcontent.sdz and maphelper.sdz.
3.  Dependencies listed in your modinfo.lua (or modinfo.tdf), in the order listed.
4.  Your mod archive.

## Modes

These modes are constants passed to VFS.Include() and friends to control the order that archives are searched for a given file. They are case-sensitive.

**VFS.RAW** Only select uncompressed files.

**VFS.MOD** New in version 104.0

**VFS.MAP** New in version 104.0

**VFS.BASE** New in version 104.0

**VFS.MENU** New in version 104.0

**VFS.ZIP** Only select compressed files (.sdz,.sd7).

**VFS.RAW_FIRST** Try uncompressed files first, then compressed.

**VFS.ZIP_FIRST** Try compressed files first, then uncompressed.

**VFS.RAW_ONLY** (Deprecated. Same as VFS.RAW)

**VFS.ZIP_ONLY** (Deprecated. Same as VFS.ZIP.)

See also: <a href="https://github.com/spring/spring/blob/develop/rts/System/FileSystem/VFSModes.h" class="external free" rel="nofollow">https://github.com/spring/spring/blob/develop/rts/System/FileSystem/VFSModes.h</a>

## Files

**VFS.Include** (if enviroment=nil then use current one)

     ( string "filename" [, table enviroment = nil [, number mode ] ] ) ->

The environment arg sets the global environment (see generic lua refs). In almost all cases, this should be left nil to preserve Springs default. 

If nil then the env will be \_G (global environment) If the optional env argument is provided any non-local variables and functions defined in filename.lua are then accessable via env or \_G. Vise-versa, any variables defined in env prior to passing to VFS.Include are available to code in the included file. Code running in filename.lua will see the contents of env in place of the normal \_G environment.

This loads and compiles the lua code from a file in the VFS. The path is relative to the main Spring directory, e.g. VFS.Include('LuaUI/includes/filename.lua', nil, \[vfsmode\]) 

VFS modes are single char strings and can be concatenated; doing specifies an order of preference for the mode (=location) from which to include files.

**VFS.LoadFile**

     ( string "filename" [, number mode ] ) -> nil | string data

This is used for loading raw text data, as it will not execute the file, like VFS.Include does, just returns a string of the file contents.

**VFS.FileExists**

     ( string "filename" [, number mode ] ) -> boolean

example usage: if VFS.FileExists("maps/Castles.sdz") then ... end 

**VFS.DirList**

     ( string "directory" [, string "pattern" = "*"  [, number mode ] ] )
       -> { [1] = string filename, ... }

**VFS.SubDirs**

     ( string "directory", [, string "pattern" = "*"  [, number mode ] ] )
       -> { [1] = string subdir1, ... }

**VFS.GetAvailableAIs**

     ( [ string gameName] [, string mapName ] )
       -> { ai1, ai2, ... }

Gets a list of all Spring AIs. The optional gameName and mapName parameters can be used to include game/map specific LuaAIs in the list.

**VFS.UseArchive** unsynced only!

     ( string "filename" [, number mode ], lua_function [, arg1 [,arg2 ]] )
       -> result1,result2,... of the given lua_function

Loads an archive **temporarely** in the VFS and then runs the given lua_function,\
which can make usage of the files in the archive.

**VFS.MapArchive** unsynced only!

     ( string "filename/modname of archive", [string checksum of archive] )
       -> bool

Permanently loads an archive into the VFS (to load zipped music collections etc.).\
Does nothing if the archive is already loaded in the VFS (won't reload even if there are\
changes made to the archive). If checksum is given it checks if the to be loaded file is correct,\
if not then it won't load it and return false.

**VFS.UnmapArchive** unsynced only! available in 98.0

     ( string "filename/modname of archive")
       -> bool

Removes an already loaded archive (see VFS.MapArchive)

**VFS.CompressFolder** unsynced only!

     ( string "folderPath" [, string "archiveType" ] [, string "compressedFilePath" ] 
     [, bool includeFolder ] [, number mode ] ) -> nil

Compresses the specified folder.\
archiveType defines the compression type which can currently be only "zip"\
includeFolder specifies whether the archive should have the specified folder as root (defaults to false) 

**VFS.GetFileAbsolutePath** unsynced only! available in 105.0

     ( string "filename" [, number mode ] ) -> absPath | nil

**VFS.GetArchiveContainingFile** unsynced only! available in 105.0

     ( string "filename" [, number mode ] ) -> archiveNameWithVersion | nil

## Generic hash

**VFS.CalculateHash** New in version 101.0

     ( string input, number hashType)
       -> string md5hash

Calculates hash (in base64 form) of a given string (with md5 support initially). Note supplying 0 (MD5) as hashType is mandatory

## Archives

**VFS.GetMaps** New in version 98.0

     ( ) -> {
      [1] = string mapName, ...
    }

**VFS.GetGames** New in version 98.0

     ( ) -> {
      [1] = string gameName, ...
    }

**VFS.GetAllArchives** New in version 98.0

     ( ) -> {
      [1] = string archiveName, ...
    }

**VFS.GetLoadedArchives** New in version 105.0

     ( ) -> {
      [1] = string archiveName, ...
    }

**VFS.GetArchivePath** New in version 105.0

     ( string archiveName ) -> string archivePathOnDisk

**VFS.GetNameFromRapidTag** New in version 105.0

     ( string rapidTag ) -> string archiveName

**VFS.HasArchive** New in version 98.0

     ( string archiveName ) -> boolean

**VFS.GetArchiveInfo** New in version 98.0

     ( string archiveName ) - >
        {        
             name = string,
             shortname = string,
             version = string,
             mutator = string,
             game = string,
             shortgame = string,
             description = string,
             mapfile = string,
             modtype = number,     
         }

modtype values:1=primary, 0=hidden, 3=map

**VFS.GetArchiveChecksum** New in version 98.0

     ( string archiveName ) -> string singleArchiveChecksum, string completeArchiveChecksum

**VFS.GetArchiveDependencies** New in version 98.0

     ( string archiveName ) -> { 
       [1] = string archiveName, ... 
     }

**VFS.GetArchiveReplaces** New in version 98.0

     ( string archiveName ) -> { 
       [1] = string archiveName, ... 
     }

**VFS.DownloadArchive** New in version 101.0

     ( name, category ) -> nil

Category must be one of: map, game, engine.

**VFS.AbortDownload** New in version 104.0

     ( id ) -> boolean foundAndRemoved

Additional functions are available as part of the [unsynced ctrl](/lua-unsyncedctrl#28virtual-29filesystem).

## Packing

The Pack- and Unpack-functions are used to convert numbers-\>strings and strings-\>numbers. So you can read a binary file and then convert the received strings back to numbers and the other way around. Also you can use it in combination with the SendLuaXYZMsg-functions.

**VFS.PackU8**

**VFS.PackU16**

**VFS.PackU32**

**VFS.PackS8**

**VFS.PackS16**

**VFS.PackS32**

**VFS.PackF32**

arguments are:

**VFS.PackX( number arg1, number arg2, number arg3, ... )** -\> string

**VFS.PackX( {\[1\]=number,\[2\]=number,..} )** -\> string

**VFS.UnpackU8**

**VFS.UnpackU16**

**VFS.UnpackU32**

**VFS.UnpackS8**

**VFS.UnpackS16**

**VFS.UnpackS32**

**VFS.UnpackF32**

arguments are:

**VFS.UnpackX( string "binary" \[, number position = 1\] \[, number count\] )**

     -> number | table { [1]=number,[2]=number,.. }

## Zlib

**VFS.ZlibCompress** unsynced only!

     ( string "uncompressedStr" )
       -> nil | string "compressedStr"

**VFS.ZlibDecompress** available in synced, too!

     ( string "compressedStr" [, number uncompressed size = 65500] )
       -> nil | string "uncompressedStr"

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua VFS](https://springrts.com/wiki/Lua_VFS).*
