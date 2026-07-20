---
title: "Lua MathExtra"
source_url: "https://springrts.com/wiki/Lua_MathExtra"
categories:
  - "Lua"
---
# Lua MathExtra

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua MathExtra

## Additional math functions

New in Engine Version 0.95 and up.

math.[clamp](#clamp) ( number x, number min, number max )\
return: number clamped

Returns x clamped to min and max boundaries.

math.[diag](#diag) ( number x1, number x2, number x3, ... )\
return: number diagonal

Returns the length of the diagonal of an n-dimensional box (or the length of an n-component vector). Rather quick method that does not handle intermediate overflows/underflows nor is made for numerical stability.

math.[erf](#erf) ( number x )\
return: number erf

Returns <a href="http://en.wikipedia.org/wiki/Error_function" class="external text" rel="nofollow">erf</a>(x).

math.[hypot](#hypot) ( number x, number y )\
return: number sqrt(x\*x+y\*y)

Returns the length of hypotenuse of right angle triangle with sides x and y, equivalent to sqrt(x\*x + y\*y), but has better numerical stability and internally handles intermediate overflows/underflows, but is also slower.

math.[mix](#mix) ( number x, number y, number a )\
return: number (x+(y-x)\*a)

Returns linear interpolation between x and y with ratio a (x+(y-x)\*a).

math.[round](#round) ( number x, number decimals )\
return: number rounded

Returns x rounded to n decimals, if n is omitted or \<=0, rounds to nearest integer. Note that Spring's Lua interpreter uses 32-bit floats for all numbers so max. precision is ~7 decimal digits.

math.[sgn](#sgn) ( number x )\
return: number sign

Returns 0 if x ==0, 1 if x \> 0, -1 if x \< 0 <a href="http://en.wikipedia.org/wiki/Sign_function" class="external text" rel="nofollow">sgn</a>(x).

math.[smoothstep](#smoothstep) ( number edge0, number edge1, number x )\
return: number smoothstep

Returns <a href="http://en.wikipedia.org/wiki/Smoothstep" class="external text" rel="nofollow">smoothstep</a>(edge0, edge1, v).

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua MathExtra](https://springrts.com/wiki/Lua_MathExtra).*
