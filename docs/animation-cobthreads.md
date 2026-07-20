---
title: "Animation-CobThreads"
source_url: "https://springrts.com/wiki/Animation-CobThreads"
categories:
  - "Animation"
---
# Animation-CobThreads

<div class="mw-parser-output">

## Source

<a href="https://github.com/spring/spring/blob/106.0/rts/Sim/Units/Scripts/CobThread.cpp" class="external text" rel="nofollow">rts/Sim/Units/Scripts/CobThread.cpp</a>

## Introduction

Much of the time you can expect your script to execute sequentially; that is, looking through your code, the system progresses from statement to statement without anything "strange" (variables being changed, threads being started, etc.) between them. HOWEVER, "strange" things do happen, and in fact they happen quite regularly in scripts. We say that the script system has "concurrency" when things can happen between statements.

### Why Concurrency?

So why go to all this trouble with concurrency? The script system has concurrency because we never know when things are going to happen. The player could give a command to the unit, the unit could run into a wall, rocks could fall out of the sky and kill the unit, and so forth. Without concurrency we would have to check very often whether which of all possible events had happened recently in order to determine what to do next. This would suck.

## Dealing With Concurrency

Every time a callin is called or a start-script statement is executed, a "thread" is created. At any one time, only one thread is being executed at a time, but sometimes a thread will stop executing for a while and continue later, while several other threads will execute in the meantime. Most of the time your script is guaranteed to execute sequentially. If you say x = 1;, it will stay 1 unless you change it again. The exceptions are as follows:

- Before a script starts.
- After a wait-for-move or wait-for-turn statement.
- After a sleep statement.

During these times, any other thread has the ability to come in and change all your static variables, tell your pieces to move, turn, and spin, and so forth. Therefore, you cannot always assume these things will be the way you left them when execution of the thread resumes. If it is possible that another thread will change something that you need to know about, you need to check it after any of these times.

## Sleeping

You can have a thread sleep by using a sleep statement:

    sleep [time in ms];

This is useful for delaying events and in making loops execute every so often. If you want to wait until a piece moves into position, use wait-for-move or wait-for-turn instead.

## Signals

Signals provide a way to kill threads in their sleep. Signals are bitmasks. There are two statement types dealing with signals: signal and set-signal-mask.

    signal [bitmask];

kills all sleeping threads that overlap the bitmask.

    set-signal-mask [bitmask];

sets what signals kill the current thread.

This has several applications. For functions that are called regularly, such as AimWeaponX(), this prevents multiple copies of the same thread from running at the same time. It is also a way (but not the only or necessarily best way) to interrupt another thread.

## call-script

Use as follows:

    call-script [function]([args]);

This does not start a new thread! The calling function will not continue until the called function returns.

## start-script

At first glance, this is similar to call-script:

    start-script [function]([args]);

However, start-script *does* create a new thread, and the calling function *doesn't* wait until the started function returns before continuing. By default, the new thread shares the same signal mask as its parent, although you can set it manually if you like. Apart from this, the two threads execute completely independently.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Animation-CobThreads](https://springrts.com/wiki/Animation-CobThreads).*
