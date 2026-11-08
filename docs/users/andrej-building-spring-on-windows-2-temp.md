---
title: "User:Andrej/Building Spring on Windows 2 temp"
source_url: "https://springrts.com/wiki/User:Andrej/Building_Spring_on_Windows_2_temp"
---
# User:Andrej/Building Spring on Windows 2 temp

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

## Source Code GIT URLs

Modified Spring github URL: <a href="https://github.com/nOOb3167/spring/tree/develop" class="external free" rel="nofollow"><code>https://github.com/nOOb3167/spring/tree/develop</code></a>\
Modified vclibs11 github URL: <a href="https://github.com/nOOb3167/vclibs11/" class="external free" rel="nofollow"><code>https://github.com/nOOb3167/vclibs11/</code></a>\

## Prerequisites

\- Visual Studio 2012 (v11)

\- Microsoft Visual C++ Compiler Nov 2012 CTP

Download link: <a href="http://www.microsoft.com/en-us/download/details.aspx?id=35515" class="external free" rel="nofollow">http://www.microsoft.com/en-us/download/details.aspx?id=35515</a>

How to tell if you have Nov 2012 CTP installed: Start Visual Studio and open any Solution. Open the 'Property Pages' of any Project inside this solution, and check available values of 'Platform Toolset' under 'Configuration Properties -\> General'. Nov 2012 CTP should be listed.

[<img src="/images/Spring_build_cmake09.png" class="mw-file-element" decoding="async" />](/images/Spring_build_cmake09.png)

\- GIT

If you can open command line and run git you should be fine.

[<img src="/images/Spring_build_cmake08.png" class="mw-file-element" decoding="async" />](/images/Spring_build_cmake08.png)

\- CMake

## Building

First clone the git repositories.

Second configure through CMake.

Third compile through Visual Studio.

### Cloning the git repositories

- Spring into any directory.\
- vclibs11 into subdirectory of Spring, named 'vclibs'\
cd someEmptyDirectory\
git clone git://github.com/nOOb3167/spring.git\
cd spring\
git clone git://github.com/nOOb3167/vclibs11.git vclibs\

\- This is the only command line step.

 The directory structure should end up looking like below.\
 A 'spring' directory with spring source, and a 'vclibs' subdirectory\
 inside.\

[<img src="/images/Spring_build_cmake07.png" class="mw-file-element" decoding="async" />](/images/Spring_build_cmake07.png)

### Configuring through CMake

Start CMake GUI.

- There should be a start menu shortcut if you used the CMake installer.\

[<img src="/images/Spring_build_cmake10.png" class="mw-file-element" decoding="async" />](/images/Spring_build_cmake10.png)

Set Source and Build paths.

- Source path should be set to where you cloned the Spring repository.\
  You should find a file CMakeLists.txt in that directory\
- Build path can be set to whatever empty directory, or just same as Source path.\
  On the screenshot below, Build path is set to a subdirectory named 'Build'.\

[<img src="/images/Spring_build_cmake00.png" class="mw-file-element" decoding="async" />](/images/Spring_build_cmake00.png)

Set CMAKE_INSTALL_PREFIX to where you want Spring installed.

- This is necessary because the default, Program Files, requires\
  admin permissions to write.\

[<img src="/images/Spring_build_cmake01.png" class="mw-file-element" decoding="async" />](/images/Spring_build_cmake01.png)

Press Configure.

- The correct option to select for compiler is as shown below.\
  (Should be the default)\

[<img src="/images/Spring_build_cmake02.png" class="mw-file-element" decoding="async" />](/images/Spring_build_cmake02.png)

- For comparison, here is what is output for me after Configure.\
  The warnings shown here are normal / expected.\

[<img src="/images/Spring_build_cmake03.png" class="mw-file-element" decoding="async" />](/images/Spring_build_cmake03.png)

Press Generate.

- This should generate the Visual Studio solution and project files.\
  Those will be used to compile through Visual Studio next.\

### Compiling Solution through Visual Studio

Open the solution file.

- There should be a Spring.sln file, in the location you set as the Build path CMake.\

[<img src="/images/Spring_build_cmake04.png" class="mw-file-element" decoding="async" />](/images/Spring_build_cmake04.png)

Select the INSTALL Project.

- Unfortunately I have not found a way to do this automatically.\

[<img src="/images/Spring_build_cmake06.png" class="mw-file-element" decoding="async" />](/images/Spring_build_cmake06.png)

Build Project

- There should be no compile / link errors (But many warnings).\
  If you forgot to change CMAKE_INSTALL_PREFIX from the default path\
  (Program Files, requiring admin access), the installation step will complain.\

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/User:Andrej/Building_Spring_on_Windows_2_temp). Original page: [User:Andrej/Building Spring on Windows 2 temp](https://springrts.com/wiki/User:Andrej/Building_Spring_on_Windows_2_temp).*
