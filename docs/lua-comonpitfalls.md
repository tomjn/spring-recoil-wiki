---
title: "LUA ComonPitfalls"
source_url: "https://springrts.com/wiki/LUA_ComonPitfalls"
categories:
  - "Lua"
---
# LUA ComonPitfalls

<div class="mw-parser-output">

This page mentions some common problems and their solutions, and should not be treated as a tutorial page.

You can also visit \#moddev or \#lua channels on the spring lobby. You are advised to post the infolog and a code snippet describing your problem to www.pastebin.com or similar sites. These are some of the more common pitfalls:

**1. Variable declaration instead of assignment:**

In some cases you might make a typo in variable assignments in the form of: myWariable = \[ value \] instead of the intended: myVariable = \[ value \] which will create a new variable "myWariable" instead of the intended assignment to an existing variable "myVariable".

A solution would be to print variable's value often with Spring.Echo("MyVariableName:", variableName) and to enforce properly spelled variable names.

**2. Keep it simple!:**

If its to big for you to understand (who built it), break it down. Do not copy and paste code. Doing that is wrong, wrong - and wrong. Get code out into special functions only dedicated to checking.

*if (boolOne == true and x \> 3.14) or (foo==bar) then**can be converted into*

*function checkThem(boolOne,x,foo,bar)* return (boolOne == true and x \> 3.14) or (foo==bar) *end*

Delete unnecessary stuff.Do not keep code in your work that has reached its exparation date. Plan ahead, it might sound stupid to draw a sketch of a program, but you will come into situation were you coded yourself into a corner, and 2 hours go to waste. So planning if you have a complex task is never wasted time.

**3. Use existing tools:**

There are tools available which may ease some of your development. Some examples are: Toolbox and springposer. These may take some time to setup but it will be worth it.

**4. Use Includes:**

Parts of your unitscript are used allover again? In different units? Have sort of a function toolkit, you want to reuse, without copy and pasting it?

**include "MyToolkit.lua"** will add all the functions of the MyToolkit.lua to the program(only used ones). Good way to separate complex programs into easier understandable pieces.

**5. Locals:**

It's advisable to use local variables (prefixed by the "local" keyword) instead of global variables (no prefix by default) where possible. Doing so may increase Lua performance as well as keep you from polluting the global namespace - which may be a problem as your project grows.

**6. Variable scope:** The scope of your variable is limited by the blocks of code (between then/do/else and end). Everything deeper down can see your variable, everything outside of this scope cant. Check them Twice- if you were the function.. could you see it at the point it is needed? If a function gets handed a value that has the same name then a global, this local "copy" hides the global variable till function end. What maybe obvious to the programmer, is invisible to the program.

**7. Comments:** Every time you have to return to work, and don't know what something does, and you read it again - write it down as a comment above. Comments are not only for other people, they can also help you. Even with a carefully worked out plan, you will lose the oversight with larger projects.

**8. No wreckage Info/No such Unit** If you get this message, spring might have finished parsing the unitdef and skipped it, so it won't show up to the party. Check for missing comma, typos, comment pieces out, until its loaded. \[\[Something\|\] , is just a different way of writing "something". So within double braces is just another string.

**9.Object Orientated Thinking:**

Its way more efficient to bundle data together with objects, then store it en mass in huge tables, getting it together on demand. For example:

for i=1, 9000,1 do

if unit\[i\] == weapon\[i\] then doSomething() end

end

is slow. Every time the first table is called the value is taken, then the second big value is called, rising the chance to push the first table out of memory. Thus a constant loading and writing occurs in the background.

ArmedUnits -- a table that contains the unit and the weapon bundled together

for i=1, 9000,1 do

ArmedUnits\[i\].unit

weapon=ArmedUnits\[i\].weapon

if unit== weapon then doSomething() end

end

This approach takes a little time to get used to, but especially for large tables its a big performance safer.

**10. Use Text Replacement:**

Many beginners use compares like if booleanDeBug ==true then Spring.Echo("Testvalue",blabla) end

Do not leave this useless compares in the code. Instead use the Spring.Echo alone.  Then if the release is closing in use Text Replacement to Replace Spring.Echo with --Spring.Echo.

**11. Syntactical Insecuritys?**

Spring has over time incorporated scripts from different languages (cob/bos/lua) and some of those calls are rather vague described in the wiki. So how does this COB Get/Set work? Best solution, google it. Really. Somewhere someone already has used it, and you can see it, working.

**12.Forgotten Globals**

Declared eons ago, forgotten by you and used in the assumption they never existed. And now you fill them with different values in a function, wondering at the strange sideeffects.

**13. Nil**

Nil is Nihilistic. It takes functions with it it, everything that touches it becomes unstable, antimatter. A Variable initialized with nil will resolve in a 0 no matter what you put in through other functions. You know the checks. Use them.

**14. Backup**

Not against data loss through hardware failure or viruses, but to have a safecopy should you screw up. There is stuff that will crawl into a overworked tired mind at 4 in the morning that you will find brilliant. And the next moment, you want to go back, all you find is a NeedMoreSleep() function with a lame pun in it. Use a Subversion control system, use a simple on for the start (like Mecurial). Advanced people will recommend you advanced tools. There is no shame in using the easier option if that one allows you to archieve your goals.

**15. Don't Poison the Well** Sometimes you need Information for a Unit, and you create a Sensor-Thread such as this.

    local function senSoricLoop()

      while(true) do
    info=Spring.GetMyInfo(unitID)
      if info == true then
      --do this
         else 
         --do that
         end
    Sleep(150)
    end

    end

Poisoning the well means, instead of writting a second while loop to give in to the temptation to just falsify the sensoric data. In this case making the info global, and setting it to false every Sleep(20). This thing is nasty, it will result in unpredictable behaviour, a unit that seemingly at random sometimes spasms. Avoid at all cost.

**16. SignalMasks for Threads (Thx to Tobi for this one)**

**SIG_ONE=1**

**SIG_SOMETHING=2**

**SIG_ANYTHING=4**

Threads are Started and if you use SetSignalMask(SIG_SOMETHING) you assing them a unique Number, that must be the power of two(1,2,4,8,16,32...). To understand SignalMasks you need to understand the <u>**binary**</u>representation of this numbers.

SIG_ONE = 1            SIG_SOMETHING= 10            SIG_ANYTHING= 100

Notice the difference? Every one of this 1s represent a Switch, that can be either on, or off. If you Send a Signal Signal(SIG_ONE) this will find the thread (and its decendants) and pull the plug.  What happens if we would use a uneven number? Signal(3) for example?  It would result into Signal(11) (3 beeing 11 in binary) and pull the plugs of all threads marked by the SignalMasks 2 and 1. Now if you assign a threads decendant thread another number, it becomes independent from the father Thread. Handle with care.

**17. Internal Language Changes:**

Now that sounds like something made up to impress. But well, this occurs mainly if you do complicated math or call external functions. You write something down, which is in the language you are currenty thinking in quite accurate. But meanwhile you have forgotte all about the LUA-Syntax. Example?

x=32+ math.sin(phi) \* x

y=64 + 12 \*math.cos(phi)^x

If you write this.. its pure truth. Written down on paper its pure truth. If you calc it back, its still pure truth. Executed in Lua it will do strange things, you wont find easily without debugger. Thats because the x is allready changed when it goes into the second line. So a accurate Version of this would look like:

tempXofOld=x

x=32+ math.sin(phi) \* x

y=64 + 12 \*math.cos(phi)^tempXofOld

And thats a hardone to find. Because if you read it up again, you will switch languages in your head.. its one of those things you do without thinking. Same stuff can happen if you are fluent with several languages, and translate your variables, because you are distracted for a moment.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [LUA ComonPitfalls](https://springrts.com/wiki/LUA_ComonPitfalls).*
