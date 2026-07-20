---
title: "CEG For Units"
source_url: "https://springrts.com/wiki/CEG_For_Units"
categories:
  - "Delete"
---
# CEG For Units

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Deletion!** This page is marked for **deletion**! If you think it does not belong deleted, please remove this template, and state your reasoning in the edit summary, or on the talk page. |

Creating Custom Explosion Generators (CEGs) and using them with Units in Spring, via COB, is quite easy. This tutorial will show you how to do so.

## Step 1: Link your CEGs to your Unit.

CEGs need to be linked to a Unit's data to be generated via COB.

To do so, create a section in your Unit's TDF like this:

**\[SFXTypes\]**\
**{**\
   ExplosionGenerator0=custom:MyNiftyExplosionGenerator;\
**}**

This tells Spring that the CEG called **MyNiftyExplosionGenerator** is attached to this Unit, and allows COB to call it. If you have more than one, then the next one uses a 1 instead of a 0, e.g. **ExplosionGenerator1=custom:MyNiftyExplosionGenerator;** ... and so forth.

## Step 2: Calling the CEG via COB

The easiest way to do this is to use a \#DEFINE statement, using the appropriate number for the type of Explosion you want to invoke. So, what I typically do is put in lines at the start of the COB, like this:

**\#DEFINE MyNiftyExplosionGenerator 1024+0**

This means that, wherever in the COB I call MyNiftyExplosionGenerator, Spring will call the appropriate CEG.

To actually call the CEG, just use the following:

**emit-sfx MyNiftyExplosionGenerator from PieceName;**

It's just that simple :-) Just make darn sure you've gotten everything right before you use this, or you will cause to Spring to crash!

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [CEG For Units](https://springrts.com/wiki/CEG_For_Units).*
