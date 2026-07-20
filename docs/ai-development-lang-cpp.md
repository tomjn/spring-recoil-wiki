---
title: "AI:Development:Lang:Cpp"
source_url: "https://springrts.com/wiki/AI:Development:Lang:Cpp"
categories:
  - "AI_Dev"
---
# AI:Development:Lang:Cpp

<div class="mw-parser-output">

[Development](/development-main) \< [AI Development](/ai-development) \< C++ AI Development

## Writing a Skirmish AI in C++

There are two ways of writing a C++ AI, using the [deprecated legacy API](/aiwrapper-legacycpp) or the [C++ Wrapper API](/aiwrapper-cpp). The legacy API is used for AIs using the old interface ( e.g. KAI, RAI, AAI etc ).

For an example of an AI using the new OO C++ Wrapper interface, refer to [Shard](/ai-shard) by AF.

For further info, have a look at the forum: <a href="http://springrts.com/phpbb/viewtopic.php?p=552433#p552433" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?p=552433#p552433</a>

### Start off

easiest is to copy the existing CpptestAI to a new folder:

    cp -rv AI/Skirmish/CppTestAI/* AI/Skirmish/myAI/ 

adjust AI/Skirmish/myAI/cont/data/AIInfo.lua, for example change "value = 'CppTestAI'", "to 'myAI'".

### Compile

run cmake again in the root of the spring source to make the buildsystem recoginize the newly created folder:

    cmake .

To create the needed interface files run:

    make Cpp-AIWrapper

for each AI there exists such an target, for example:

    make myAI

to list all available targets run

    make help

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:Development:Lang:Cpp](https://springrts.com/wiki/AI:Development:Lang:Cpp).*
