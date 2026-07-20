---
title: "AI:Development:Lang:Lua"
source_url: "https://springrts.com/wiki/AI:Development:Lang:Lua"
categories:
  - "AI_Dev"
---
# AI:Development:Lang:Lua

<div class="mw-parser-output">

[Development](/development-main) \< [AI Development](/ai-development) \< Lua AI Development

## Writing a Lua AI

### Introduction

#### Lua AIs are different

Lua for AIs is quite different from all the other AI languages supported by spring. Lua AIs use a completely different interface, and they can not be shipped separately, but only bundled with a mod.

#### Things to know

- They have to be bundled with a mod. Therefore, you should consider contacting the mod developer(s) in question early, to see if they are at all interested in an AI.
- A Lua AI is actually a regular gadget. The difference is just that it is listed in the mods LuaAI.lua file. See [Lua Scripting](/lua-main) for details.
- This brings up the problem that AIs can "accidentally" cheat or even move units of the enemy! It is up to the AI writer to avoid that. All AI players of the same type also share the same variables and tables. One way to avoid that is to put everything into a teamdata\[teamID\] table. Or the use of classes.

### How to start

For a start, choose a single mod you want your AI to work with. You will also want to contact the mods developer(s) before you start to code, or soon thereafter.

Things you need to get comfortable with:

- the Lua scripting language
- Lua scripting for spring (gadgets)

You may combine learning Lua for spring with writing simplistic gadgets or widgets for spring, and publishing them <a href="http://springrts.com/phpbb/viewforum.php?f=23" class="external text" rel="nofollow">in the forum</a>, as this way you get practical training and feedback about your code from the pros, plus the community eventually gets a usefull addon. When you start feeling comfortable, you should inspect the code of Lua AIs that are already available. Source code of these AIs can be found in the mod archives, which you may open with 7zip, or it may be available separately (see [References](#references)).

#### Integrating the AI Gadget

This section explains everything you have to do to integrate your Lua AI into a mod. Which at the same time is everything that separates a Lua AI form a gadget.

In the root of the mods archive, you need the file *LuaAI.lua*, which should look about like this: ` `

    -- file: LuaAI.lua
    local listOfLuaAIs = {
        {
            name = "MyFirstAI",
            desc = "Beats even the best players with Core, most others with Arm too",
        },
    }
    return listOfLuaAIs

Besides all the other stuff you need for a gadget (you should know this by now), you will need something like this in your code (eg under *{mod_root}/LuaRules/Gadgets/MyFirstAI_v01.lua*): ` `

    function gadget:GetInfo()
        return {
            name    = "MyFirstAI",
            desc    = "An AI that knows how to play Mod X",
            author  = "John Doe",
            date    = "2020-12-31",
            license = "Public Domain",
            layer   = 82,
            enabled = true
        }
    end

    function gadget:GameStart() 
        -- Initialise AI for all teams that are set to use it
        for _,t in ipairs(Spring.GetTeamList()) do
            local _,_,_,isAI,side = Spring.GetTeamInfo(t)
            if Spring.GetTeamLuaAI(t) == gadget:GetInfo().name then
                Spring.Echo("Team "..t.." assigned to "..gadget:GetInfo().name)
                local pos = {}
                local home_x,home_y,home_z = Spring.GetTeamStartPosition(t)
            end
        end
    end

**Note:** The above example will not work if your AI controls multiple teams because *home_x,home_y,home_z* are not stored *per team.*

That's it, the rest of the game is using regular gadget functions, and in particular [Spring.GiveOrderToUnit()](/lua-syncedctrl#give-order). Now you should be able to use this AI when starting the modified mod in the lobby, when you click on the *Add Bot* button. From Spring 95.0 onwards, lua AIs can be selected from the Spring.exe menu.

Enjoy!

### References

- NOE AI: <a href="http://springrts.com/phpbb/viewtopic.php?f=55&amp;t=28259" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=55&amp;t=28259</a>
- ST AI source: <a href="http://pastebin.com/v1kNRBDj" class="external free" rel="nofollow">http://pastebin.com/v1kNRBDj</a>
- KP AI source: <a href="http://pastebin.com/f771164a0" class="external free" rel="nofollow">http://pastebin.com/f771164a0</a>
- CRAIG source:
  - to browse: <a href="http://github.com/tvo/craig/tree/master" class="external free" rel="nofollow">http://github.com/tvo/craig/tree/master</a>
  - for git: <a href="git://github.com/tvo/craig.git" class="external free" rel="nofollow">git://github.com/tvo/craig.git</a>
- C.R.A.I.G. is inside S44 and SWIW
- forum thread: <a href="http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=25639" class="external text" rel="nofollow">LuaAI information</a>
- forum threads about an AI for the game Conflict Terra: <a href="http://springrts.com/phpbb/viewtopic.php?f=63&amp;t=26148" class="external autonumber" rel="nofollow">[1]</a> <a href="http://springrts.com/phpbb/viewtopic.php?f=63&amp;t=26214" class="external autonumber" rel="nofollow">[2]</a> <a href="http://springrts.com/phpbb/viewtopic.php?f=15&amp;t=26207" class="external autonumber" rel="nofollow">[3]</a> (among the OT, some more or less common LuaAI problems are discussed)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:Development:Lang:Lua](https://springrts.com/wiki/AI:Development:Lang:Lua).*
