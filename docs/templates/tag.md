---
title: "Template:Tag"
source_url: "https://springrts.com/wiki/Template:Tag"
---
# Template:Tag

<div class="mw-parser-output">

A template for documenting various tags used in the engine (gamedata files, defs etc)

**Usage:**

    &#123;&#123;tag&#125;&#125;

result: type [name](#name)  default: ? 

FIXME: 

**Usage:**

    &#123;&#123;tag|name=foo|type=int|range=[0-100]|special=Required|default=10|description=Then type your description&#125;&#125;

Result: int [foo](#foo)  default: 10 range: \[0-100\] Required

Then type your description

**Usage:**

    &#123;&#123;tag|name=foo|type=int|default=10|description=Then type your description&#125;&#125;

Result: int [foo](#foo)  default: 10 

Then type your description

**Usage:**

    &#123;&#123;tag
    |name = bar
    |type = float
    |range = [0-100]
    |default = 3.14
    |special = &#123;&#123;new|88.0&#125;&#125;
    |description = Then your description&#125;&#125;

Result: float [bar](#bar)  default: 3.14 range: \[0-100\] New in version 88.0

Then your description

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Template:Tag](https://springrts.com/wiki/Template:Tag).*
