---
title: "CSAI Build Instructions"
source_url: "https://springrts.com/wiki/CSAI_Build_Instructions"
categories:
  - "AI_Dev"
---
# CSAI Build Instructions

<div id="building-csai" class="section mw-parser-output">

## Building CSAI

The CSAI zipfile comes with the binaries prebuilt. You might wish to build CSAI if:

- you want to modify/extend the C# AI
- you want to extend the C /C# AI interface

### You will need

If you wish to modify the C# AI, ie the CSAI directory, you will need:

- Framework .Net 1.1 runtime (only need runtime, not SDK)
- nant
- Spring
- Contents of CSharpAI.zip

If you want to extend the C /C# interface, ie change the files in the CSAILoader or CSAIInterfaces directory, you will need in addition:

- Visual C 2003 compiler
- Microsoft Platform SDK
- Spring sourcecode

nant will automatically detect if you changed files in the CSAILoader or CSAIInterfaces directory, so as long as you dont change files in these directories it wont ask you for the C compiler.

### Build instructions, C# AI only

Using nant:

- open a cmd prompt and go to the unzipped CSharpAI directory
- open AllCSAI.build file with a text editor, and specify the locations of:
  - spring (directory containing spring.exe)
- add nant to PATH
- type "nant" and press return

The C# AI dll should build and be copied into the appropriate place in the Spring application directory tree.

Alternatively, using Visual C# 2003:

- Create a new project of type "class library" called "CSAI"
- Add CSAIInterfaces\CSAIInterfaces.dll as a Reference
- Add the .cs files in the CSAI to the project
- Select "Build"
- Manually copy the CSAI.dll and CSAI.pdb files from the project's Debug directory into the AI\CSAI subdirectory of the spring application directory

### Build instructions, C# AI and C# AI Interface

- open the msvcvars.bat cmd prompt and go to the unzipped CSharpAI directory
- open AllCSAI.build file with a text editor, and specify the locations of:
  - spring (directory containing spring.exe)
  - spring sourcecode
  - Microsoft Platform SDK
- add nant to PATH
- type "nant" and press return

With everything configured ok, the dlls should build and be copied into the appropriate place in the Spring application directory tree.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [CSAI Build Instructions](https://springrts.com/wiki/CSAI_Build_Instructions).*
