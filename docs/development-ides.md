---
title: "Development IDEs"
source_url: "https://springrts.com/wiki/Development_IDEs"
categories:
  - "Engine_Dev"
---
# Development IDEs

<div class="mw-parser-output">

The Spring engine is highly complex; it is recommended that you use an IDE such as Code::Blocks or Eclipse.

## Compatibility with official release builds

In order to compile code that synchronizes with the official release, you'll need to compile with GNU GCC/G++ 4.0 or higher (MinGW). So, whilst you can edit in either of the aforementioned development environments, note that you won't be able to use them to build anything to work with the real Spring engine unless you install the MinGW compiler. In practice this is not too bad: usually you develop a patch against the latest source code, which usually doesn't synchronize with the official release anyway, so it does not matter which compiler you use.

## Code::Block/Dev C++

Code::Blocks (and also Dev C++) is a light weight (around 3MB download), widely-used free/open source alternative to Visual Studio .NET, and can be downloaded here: <a href="http://www.codeblocks.org/" class="external free" rel="nofollow">http://www.codeblocks.org/</a> . Dev C++ is in the same vein as Code::Blocks, but slightly less advanced. It can be downloaded here: <a href="http://www.bloodshed.net/devcpp.html" class="external free" rel="nofollow">http://www.bloodshed.net/devcpp.html</a> . Code::Blocks and Dev C++ both come with GNU GCC/G++ 3.4.

## Eclipse

A good full blown free C++ IDE is Eclipse. Eclipse does not come with C++ support by default but has a downloadable plugin that provides C++ support. See <a href="http://www.eclipse.org/" class="external free" rel="nofollow">http://www.eclipse.org/</a> and <a href="http://www.eclipse.org/cdt/" class="external free" rel="nofollow">http://www.eclipse.org/cdt/</a>. The download is much larger at around 100MB for the basic tool without the C++ plugin.

## Visual Studio 2012 Express for Windows Desktop

<a href="http://www.microsoft.com/visualstudio/eng/downloads#d-express-windows-desktop" class="external text" rel="nofollow">Visual Studio 2012 Express for Windows Desktop</a> is for free, but requires a registration after 30 days (to get a free license).

## Notes

The game engine is found inside the /rts/ folder. The AI subsystems are located in respective folders. Take a peek and see where everything is. You can take a look at <a href="http://springrts.com/doxygen/" class="external free" rel="nofollow">http://springrts.com/doxygen/</a> for a good (graphical) and dynamic display of how the Spring engine code hangs together.

Compiling the source will make it into a playable executable. The very same IDEs previously mentioned can compile the source, so see the appropriate documentation for the program you are using to compile properly. Make sure that you are in Release mode and not Debug mode when you compile, because the game may be very slow in Debug mode (and the executable may be huge!)

## Resources

<a href="http://en.wikipedia.org/wiki/Comparison_of_integrated_development_environments#C.2FC.2B.2B" class="external text" rel="nofollow">Comparison of C++ IDE's</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Development IDEs](https://springrts.com/wiki/Development_IDEs).*
