---
title: "Loop scripts"
source_url: "https://springrts.com/wiki/Loop_scripts"
categories:
  - "Emmanuel"
---
# Loop scripts

<div id="loop-scripts" class="section mw-parser-output">

## loop scripts

this loop make thing repetably from a counter or a condition or forever with possible exit

### condition are checked by :

` `

== \> \< =\> \<= ~=

### values can be :

bool(booleans):

` `

true false empty(nothing):

` `

nil string(text):

` `

"abc123" INT (numders):

` `

123 FLOAT(number with decimal):

` `

0.5555 variables(data storage):

` `

test1

### condition are:

- if then elseif then else end

` `

if condition_is_true then something elseif another_condition_is_true then anotherthing else default_thing end exemple:

` local a=0 b=10 c=100 if a=1 then a=a+1 elseif a>0 and a~=1 and b<c then b=b+1 else a=0 b=0 end `

### the basic loop are :

- repeat until

` repetat something until condition_is_true `

exemple:

` local a=0 repeat a=a+1 Spring.Echo(a) until a==10 `

- while do end

` `

while condition_is_true do something end exemple:

` local a=0 b=1 while (a~=10 and b<999) or a<10 do Spring.Echo(a) a=a+1 end `

### forever loop

just use a condition always true as:

` local a=1 repeat a=a+1 until a==0 ` ` local a=1 while true do a=a+1 end `

` `

- [SpringRtsTutorialAnimDef](/springrtstutorialanimdef) return to the list of animDef exemples

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Loop scripts](https://springrts.com/wiki/Loop_scripts).*
