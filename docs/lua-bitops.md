---
title: "Lua BitOps"
source_url: "https://springrts.com/wiki/Lua_BitOps"
categories:
  - "Lua"
---
# Lua BitOps

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< Lua BitOps

## Bit Operators

math.[bit_and](#bit-and) ( number a1, number a2 , ... )\
return: number i

Returns the bitwise AND of all arguments. Only use up to 24 bit integers.

math.[bit_or](#bit-or) ( number a1, number a2 , ... )\
return: number i

Returns the bitwise OR of all arguments. Only use up to 24 bit integers.

math.[bit_xor](#bit-xor) ( number a1, number a2 , ... )\
return: number i

Returns the bitwise XOR of all arguments. Only use up to 24 bit integers.

math.[bit_inv](#bit-inv) ( number a1 )\
return: number i

Returns the bitwise NOT of the 24 bit integer argument.

math.[bit_bits](#bit-bits) ( number a1, number a2 , ... )\
return: number i

Set each of the bits of a 24 bit integer. Returns result = result OR (1 \<\< a1) OR (1 \<\< a2) OR ...;)

    -- Note: there are no bit shift. Use those Lua functions instead for 24 bits bitshift
    -- 24 bits because only the 24 bits of the mantissa can be easily used in a 32 bit float
    -- bitshift functions (<<, >> equivalent)

    -- shift left
    local function lsh(value,shift)
        return (value*(2^shift)) % 2^24
    end

    -- shift right
    local function rsh(value,shift)
        return math.floor(value/2^shift) % 2^24
    end

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Lua BitOps](https://springrts.com/wiki/Lua_BitOps).*
