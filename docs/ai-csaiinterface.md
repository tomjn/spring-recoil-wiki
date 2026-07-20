---
title: "AI:CSAIInterface"
source_url: "https://springrts.com/wiki/AI:CSAIInterface"
categories:
  - "AI_Dev"
---
# AI:CSAIInterface

<div class="mw-parser-output">

## CSAI Interface

CSAI Interface makes it possible to build Global AIs for Spring using .Net Framework 1.1 or 2.0. This means you can write AIs using C#, VB, Boo (Python.Net), or any language capable of being compiled into ILSM bytecode assemblies. Fairly complete list at <a href="http://www.dotnetpowered.com/languages.aspx" class="external autonumber" rel="nofollow">[1]</a> .

.Net languages run fast and are easy to debug. In addition, using CSAI Interface makes it possible to dynamically recompile and reload your AI dll in the middle of a game.

Helloworlds are available in C#, VB and Boo (Python.Net)

You can get CSAI Interface from within the CSAI download on the [CSAI page](/ai-csai).

CSAI Interface was written by Hugh Perkins

## Platforms

CSAI Interface runs on Windows using .Net Framework 1.1 or 2.0

It would be possible to write bindings for Mono. Discussion at [GlobalAI Mono Bindings](/globalai-mono-bindings).

## How to use

- [AI:CSAI](/ai-csai) Please see the CSAI installation instructions for installation instructions; for now these are integrated and identical
- [CSAI Build Instructions](/csai-build-instructions) For now, the build instructions for CSAI and CSAI Interface are integrated and identical

## Dynamic dll recompilation and reloading

To dynamically recompile and reload your AI dll in the middle of a game:

- recompile your dll
- in the game say ".reloadai"

You can do this whilst paused if you want.

Note that this only applies to the C# AI dll itself. CSAIInterfaces.dll and CSAILoader.dll require the game to be shut down during recompilation.

## dll loading, CSAILoader.dll configuration

CSAILoader.dll searches for a configuration file with the same name (ie CSAILoader.xml), in the same directory. This configuration file defines the C# AI dll to reload. If you want you can name your C# dll mysuperai.dll , as long as you change the name of the dll in the configuration file. You can also change the name of the directory and the name of the main C# dll class.

Be really careful to double-check the name of the dll, directory and class if you change them. Your only warning that something is wrong will be an AI exception when you start the game ;-)

You can rename CSAILoader.dll to anything you like. The dll will look for a configuration file with the same name.

All this means that it is very easy for you to create your own C# AI dlls with your own name, and that it wont conflict with other people's C# AIs.

Note that CSAIInterfaces.dll is immutable, never needs to be renamed.

## C# AI base class

Your C# AI needs to have a class that derives from CSharpAI.IGlobalAI

You can see the definition of this interfaces in CSAIInterfaces\IGlobalAI.cs

You will need to ensure that the name of the class specified in your CSAILoader.xml configuration file matches the name and namespace of this class.

If you're unsure, just call this class CSAI, in namespace CSharpAI. Then you won't need to change the configuration file

## Creating a C# dll using Visual Studio

- Create a new project of type "class library"
- Add a reference to CSAIInterfaces\CSAIInterfaces.dll

This will automatically configure your project to build as a dll, and make the types from CSAIInterfaces.dll available to your project.

## CSAI Interface Architecture

You won't need to know this unless you want to extend the interface, but it might be interesting as background.

### spring.exe

Spring.exe is the Spring RTS game that loads the AI.

The main classes that are important are: - IGlobalAI The AI's main class should derive from this - AICallback Passed to AI, to provide functions for AI to drive Spring - UnitDef Unit definitions - Command Commands passed to AICallback-\>GiveOrder - MoveData Information on movements, part of a UnitDef

Other helper classes include: - float3 vector of 3 floats

### csailoader.dll

This is a managed C++ component that binds Spring.exe to CSAI.dll

\- CSAIProxy derives from Spring.exe/IGlobalAI. This is the proxy from Spring.exe to CSAI.dll - AICallbackProxy derives from CSAI.dll/IAICallback. This proxies requests from CSAI.dll to Spring.exe - UnitDefProxy derives from CSAI.dll/IUnitDef. This is a proxy of the actual Spring.exe UnitDef

### CSAIInterfaces.dll

This holds interfaces that are used to abstract CSAI.dll classes away from csailoader.dll It is written in C#

This gives us the possibility to dynamically reload CSAI without reloading Spring.

\- CSharpAI.IGlobalAI C# version of Spring.exe/IGlobalAI - CSharpAI.IAICallback C# version of Spring.exe/IAICallback

Some helper classes: - CSharpAI.Command used to hold commands passed to IAICallback.GiveOrder - CSharpAI.IUnitDef holds definition of a unit - CSharpAI.Float3 holds vectors of 3 floats

### CSAI.dll

This is the C# AI component.

\- CSAI the main class, equivalent to a C++ IGLobalAI derivative

\+ The C# AI's classes go here, eg: - ScoutController.cs - TankController.cs - CommanderController.cs - StrategyController.cs - ...

## How this works, C++/C# binding

Some background information on how the C++/C# binding works.

- C++ can be built in mixed mode, with both managed and unmanaged classes
- we do this by simply specifying /clr in the commandline
- managed classes have \_\_gc at the start, unmanaged ones dont. This is always true

<!-- -->

- managed objects dont need deleting or memory management, unmanaged ones do
- managed objects can freely call into unmanaged code, and hold pointers to unmanaged objects
- unmanaged objects can freely call into managed code
- an unmanaged object can hold a pointer to a managed object, as long as the pointer variable is declared as gcroot, or it exists only for the lifetime of a method call

## How this works, dynamic recompilation and reloading

Some background information on how .reloadai works

What this is: - you can recompile CSAI.dll when you like, because CSAI.dll and CSAI.pdb are not locked - you can reload the CSAI.dll during a game by saying ".reloadai"

This works best if you run spring in windowed mode, and set its priority to "Low".

Why would you want to do this?

- saves time during AI development and debugging

Doesnt this mean the AI doesnt know what happened before?

- yes, but it's pretty easy for it to ask Spring to remind it what is happening

How does this work / why this is hard

- when managed code that loads an assembly is run, that assembly/dll will be automatically loaded, and locked
- assemblies cant be unloaded from an appdomain without destroying the entire appdomain

We can load assemblies dynamically, without locking them, by reading the assembly's dll file as a binaryfile, and passing the raw bytes to Assembly.Load The old assemblies are not unloaded, but they will be CPU-starved because our CSAIProxy class will no longer be forwarding events to them

Just in case we create new threads within our AI, there is a Shutdown method in the CSAI main class, where we can shut these down. This can also be used to close open handles to a logfile.

This comes close to solving the problem, however:

- when we create variables using types defined in our target C# assembly, the CLR will automatically load that assembly ...
- ... locking the assembly so we cant swap it out with a new one

A solution is to abstract any C# interfaces used by the C++ dll into a new dll, CSAIInterfaces.dll. This dll will be fairly stable wrt changes to C# AI code.

One last point: in order to get detailed debugging information during exceptions, with line numbers, we need the pdb file. We can load the pdb file also by reading it as a binaryfile, and pass the raw bytes to Assembly.Load along with the main assembly bytes.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:CSAIInterface](https://springrts.com/wiki/AI:CSAIInterface).*
