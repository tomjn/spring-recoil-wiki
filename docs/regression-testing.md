---
title: "Regression Testing"
source_url: "https://springrts.com/wiki/Regression_Testing"
categories:
  - "Development"
---
# Regression Testing

<div class="mw-parser-output">

Regression tests are made to not let things break again. If something broke, a regression test should be made.

## General rules

Keep tests small, simple and fast. It doesn't help, if one test takes 10 hours.

Results of tests should be reproduceable. Thats not always possible, but at n runs it should return n times the same.

The game has to be available with a rapid tag

Single tests can be run on demand, means: (when testsrun=1) Also, tests can be disabled with "testsdisable=1,2,3", which will disable test 1,2 and 3.

    /runtest 1

will run test one.

also, tests should be written, that they can run in parallel. tests shouldn't rely on a specific map.

### modoptions

    testsrun=1
    testsdisable=1,2,3
    test1areax = <map cordinate>
    test1areay = <map cordinate>

## How to create a test

A test will be run on a spring-headless, which means it has no visual output.

The test has to be active, when the modoption "EngineTesting = 1" in script.txt is set, it should default to 0.

In the lua widget / gadget, check if this tag is set, and then start the tests.

A test consits of five parts:

### Setup

spawn units, create features, ... initialize. move/reclaim/... command to units

### Run

mostly the engine will do the work. maybe the run a is just some lua function.

### End condition

    - test run > frames
    - unit died
    - unit created

...

### Validate

    - test if unit reached goal
    - test if all units are idle / did their work
    - ...

Results should be shown this way when it failed:

    Spring.Log(string.format("Test %d result: failed",testnumber, result), LOGLEVEL.ERROR)

or on success:

    Spring.Log(string.format("Test %d result: ok",testnumber, result))

### Cleanup

- remove created units
- unset variables

## Example Widget

## Example Gadget

### links

<a href="http://springrts.com/phpbb/viewtopic.php?f=21&amp;t=27928" class="external free" rel="nofollow">http://springrts.com/phpbb/viewtopic.php?f=21&amp;t=27928</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Regression Testing](https://springrts.com/wiki/Regression_Testing).*
