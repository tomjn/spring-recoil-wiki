---
title: "Lua Performance"
source_url: "https://springrts.com/wiki/Lua_Performance"
categories:
  - "Lua"
---
# Lua Performance

<div class="mw-parser-output">

## Overview

This page is copied from the <a href="http://trac.caspring.org/wiki/LuaPerformance" class="external text" rel="nofollow">CA wiki</a>. The widget used in the performance tests is available from the <a href="http://trac.caspring.org/browser/trunk/mods/ca-sandbox/LuaUI/Widgets/performance.lua" class="external text" rel="nofollow">CA SVN</a>.

## Other Considerations

It is a well known axiom in computing that

> "We should forget about small efficiencies, say about 97% of the time: **premature optimization is the root of all evil**"

    - Donald Knuth

Lua coders should keep that in mind, and especially when visiting this page. Readability and maintainability are in most cases just as important, and optimizing code for every last ounce of performance can severely impact those qualities. On the other hand, some of the optimizations suggested have little bearing on readability and should generally always be applied, e.g. localization of API functions, or actually make for neater code e.g. the use of `or` rather than a nil-check. Generally speaking, optimize only once you are sure that there is or will be a performance bottleneck.

## Performance Tests

### TEST 1: Localize

**Code:**

      local min = math.min

**Results:**

Non-local: 0.719 (158%) Localized: 0.453 (100%)

**Conclusion:**

Yes, we should localize all standard Lua and Spring API functions.

### TEST 2: Localized Class-Methods (with only 3 accesses!)

**Code 1:**

      for i=1,1000000 do
        local x = class.test()
        local y = class.test()
        local z = class.test()
      end

**Code 2:**

      for i=1,1000000 do
        local test = class.test
        local x = test()
        local y = test()
        local z = test()
      end

**Results:**

Normal way: 1.203 (102%) Localized: 1.172 (100%)

**Conclusion:**

No, it isn't faster to localize a class method IN the function call.

### TEST 3: Unpack A Table

**Code 1:**

      for i=1,1000000 do
        local x = min( a[1],a[2],a[3],a[4] )
      end

**Code 2:**

      local unpack = unpack
      for i=1,1000000 do
        local x = min( unpack(a) )
      end

**Code 3:**

      local function unpack4(a)
        return a[1],a[2],a[3],a[4]
      end
      for i=1,1000000 do
        local x = min( unpack4(a) )
      end

**Results:**

with \[ \]: 0.485 (100%) unpack(): 1.093 (225%) custom unpack4: 0.641 (131%)

**Conclusion:**

Don't use `unpack()` in time critical code!

### '_vs._max)">TEST 4: Determine Maximum And Set It ('\>' vs. max)

**Code 1:**

      local max = math.max
      for i=1,1000000 do
         x = max(random(cnt),x)
      end

**Code 2:**

      for i=1,1000000 do
        local r = random(cnt)
        if (r>x) then x = r end
      end

**Results:**

math.max: 0.437 (156%) 'if \> then': 0.282 (100%)

**Conclusion:**

Don't use `math.[max|min]()` in time critical code!

### TEST 5: Nil Checks ('if' vs. 'or')

**Code 1:**

      for i=1,1000000 do
        local y,x
        if (random()>0.5) then y=1 end 
        if (y==nil) then x=1 else x=y end
      end

**Code 2:**

      for i=1,1000000 do
        local y
        if (random()>0.5) then y=1 end 
        local x=y or 1
      end

**Results:**

nil-check: 0.297 (106%) a=x or y: 0.281 (100%)

**Conclusion:**

The `or`-operator is faster than a nil-check. Use it!

### TEST 6: 'x^2' vs. 'x\*x'

**Code 1:**

      for i=1,1000000 do
         local y = x^2
      end

**Code 2:**

      for i=1,1000000 do
         local y = x*x
      end

**Results:**

x^2: 1.422 (110%) x\*x: 1.297 (100%) 

**Conclusion:**

The second syntax is marginally faster

### TEST 7: Modulus Operators (math.mod vs. %)

**Code 1:**

      local fmod = math.fmod
      for i=1,1000000 do
        if (fmod(i,30)<1) then
          local x = 1
        end
      end

**Code 2:**

      for i=1,1000000 do
        if ((i%30)<1) then
          local x = 1
        end
      end

**Results:**

math.mod: 0.281 (355%) %: 0.079 (100%) 

**Conclusion:**

Don't use `math.fmod()` for positive numbers (for negative ones `%` and `fmod()` have different results!)

### TEST 8: Functions As Param For Other Functions

**Code 1:**

      local func1 = function(a,b,func) 
        return func(a+b) 
      end

      for i=1,1000000 do
        local x = func1(1,2,function(a) return a*2 end)
      end

**Code 2:**

      local func1 = function(a,b,func) 
        return func(a+b) 
      end
      local func2 = function(a) 
        return a*2 
      end

      for i=1,1000000 do
        local x = func1(1,2,func2)
      end

**Results:**

defined in function param: 3.890 (1144%) defined as local: 0.344 (100%) 

**Conclusion:**

REALLY, LOCALIZE YOUR FUNCTIONS ALWAYS BEFORE SENDING THEM INTO ANOTHER FUNCTION!!! i.e if you use gl.BeginEnd(), gl.CreateList(), ...!!!

### TEST 9: for-loops

**Code 1:**

      for i=1,1000000 do
        for j,v in pairs(a) do
          x=v
        end
      end

**Code 2:**

      for i=1,1000000 do
        for j,v in ipairs(a) do
          x=v
        end
      end

**Code 3:**

      for i=1,1000000 do
        for i=1,100 do
          x=a[i]
        end
      end

**Code 4:**

      for i=1,1000000 do
        for i=1,#a do
          x=a[i]
        end
      end

**Code 5:**

      for i=1,1000000 do
        local length = #a
        for i=1,length do
          x=a[i]
        end
      end

**Results:**

pairs: 3.078 (217%) ipairs: 3.344 (236%) for i=1,x do: 1.422 (100%) for i=1,#atable do 1.422 (100%) for i=1,atable_length do: 1.562 (110%)

**Conclusion:**

Don't use `pairs()` or `ipairs()` in critical code! Try to save the table-size somewhere and use `for i=1,x do`!

### TEST 10: Array Access (with \[ \]) vs. Object Access (with .method)

**Code 1:**

      for i=1,1000000 do
        x = a["foo"]
      end

**Code 2:**

      for i=1,1000000 do
        x = a.foo
      end

**Results:**

atable\["foo"\]: 1.125 (100%) atable.foo: 1.141 (101%)

**Conclusion:**

No difference.

### TEST 11: Buffered Table Item Access

**Code 1:**

      for i=1,1000000 do
        for n=1,100 do
          a[n].x=a[n].x+1
        end
      end

**Code 2:**

      for i=1,1000000 do
        for n=1,100 do
          local y = a[n]
          y.x=y.x+1
        end
      end

**Results:**

'a\[n\].x=a\[n\].x+1': 1.453 (127%) 'local y=a\[n\]; y.x=y.x+1': 1.140 (100%) 

**Conclusion:**

Buffering can speed up table item access.

### TEST 12: Adding Table Items (table.insert vs. \[ \])

**Code 1:**

      local tinsert = table.insert
      for i=1,1000000 do
        tinsert(a,i)
      end

**Code 2:**

      for i=1,1000000 do
        a[i]=i
      end

**Code 3:**

      for i=1,1000000 do
        a[#a+1]=i
      end

**Code 4:**

      local count = 1
      for i=1,1000000 do
        d[count]=i
        count=count+1
      end

**Results:**

table.insert: 1.250 (727%) a\[i\]: 0.172 (100%) a\[#a+1\]=x: 0.453 (263%) a\[count++\]=x: 0.203 (118%)

**Conclusion:**

Don't use `table.insert`!!! Try to save the table-size somewhere and use `a[count+1]=x`!

### TEST 12: Adding Table Items (mytable ={} vs. mytable={...})

When you write {true, true, true} , Lua knows beforehand that the table will need three slots in its array part, so Lua creates the table with that size. Similarly, if you write {x = 1, y = 2, z = 3}, Lua will create a table with four slots in its hash part.

As an example, the next loop runs in 2.0 seconds:

`for i = 1, 1000000 do `

`local a = {} `

`a[1] = 1; a[2] = 2; a[3] = 3 `

`end `

If we create the tables with the right size, we reduce the run t ime to 0.7 seconds:

` for i = 1, 1000000 do `

`local a = {true, true, true} `

`a[1] = 1; a[2] = 2; a[3] = 3 `

`end `

If you write something like {\[1\] = true, \[2\] = true, \[3\] = true}, however, Lua is not smart enough to detect that the given expressions (literal numbers, in this case) describe array indices, so it creates a table with four slots in its hash part, wasting memory and CPU time

<a href="http://www.lua.org/gems/sample.pdf" class="external autonumber" rel="nofollow">[1]</a>

## Test 13

Table initialisation with local members and static intialisation.

    local x = os.clock()
    T={}
    print(string.format("start time: %.2f\n", os.clock() - x))
    local CachedTable= {"abc","def","ghk"}
    for i=1 , 10000000, 1 do
    T[i] = CachedTable
    end
    print(string.format("elapsed time: %.2f\n", os.clock() - x))

    local x = os.clock()
    A={}
    print(string.format("start time: %.2f\n", os.clock() - x))
    for i=1 , 10000000, 1 do
    A[i] = {"abc","def","ghk"}
    end
    print(string.format("elapsed time: %.2f\n", os.clock() - x))

Result: local table initializer = 100 % static intializer = 500 %

Analysis: Lua sucks at identifying static initializers, do not use them, use local initalizations instead.

## Lua Garbage Collection

Forum thread about <a href="http://springrts.com/phpbb/viewtopic.php?t&amp;t=31049" class="external text" rel="nofollow">Lua Garbage collection info</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua Performance](https://springrts.com/wiki/Lua_Performance).*
