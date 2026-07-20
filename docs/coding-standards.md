---
title: "Coding Standards"
source_url: "https://springrts.com/wiki/Coding_Standards"
categories:
  - "Engine_Dev"
---
# Coding Standards

<div class="mw-parser-output">

 This document is not yet finished.\
Please add new points whenever they occur to you. 

## Compiler

Keep in mind that we use gcc (g++) as the main compiler, likewise for linux and windows builds. So be sure your code compiles and works with gcc.

## Directory structure

<a href="http://github.com/spring/spring/blob/master/directories.txt" class="external free" rel="nofollow">http://github.com/spring/spring/blob/master/directories.txt</a>

## Style

### Indentation

Use tabs, not spaces. This allows anyone to choose their favorite indentation size.

This implies that you should not use tabs in any other place then indentation. E.g. in the following sample use SPACE to align the constants.

<div class="mw-highlight mw-highlight-lang-bash mw-content-ltr" dir="ltr">

      #define LOS_INLOS   1
      #define LOS_INRADAR 2

</div>

Do not attempt to align method parameters in a function call when breaking it over multiple lines. Just indent them using two tabs. Trying to align parameters with the opening parenthesis is unmaintainable: next time someone refactors the code and changes the function name, he has to go through all places it is used this way and waste his time inserting/removing spaces. Of course this applies to similar cases too; in general aligning stuff in such a way that an identifier rename requires realignment of all code using that identifier is bad practice.

### Curly braces

For top-level types (struct/class/union/enum), braces go on the next line and for function definitions they may go on the same line:

      class CMyClass
      {
      };

      void MyFunction()
      {
      }

      // fine too
      void MyFunction2() {
      }

Non-top-level types may use the same style as control flow braces.

For control flow, braces go on the same line:

      if (condition) {
      } else {
      }
      for (int i = 0; i < 10; ++i) {
        do {
          while (condition2) {
          }
        } while (condition1);
      }

For if-else statements (and similar), the following is also fine:

      if (condition) {
      }
      else {
      }

For if's with a single line statement, it is preferred to omit the braces if no braces belonging to another control block follow immediately after the statement:

    function() { // recommended
      if (condition)
        statement;
      if (condition) {
        statement;
      }
    }
    function() { // okay
      if (condition) {
        statement;
      }
      if (condition)
        statement;
    }

### Naming

In Spring engine code, concrete classes are prefixed with C, interfaces with I, structs with S. Both use CamelCase. Functions and methods use CamelCase too. Parameters, fields, variables use pascalCase.

      // interface
      class ISkirmishAI
      {
      };

      // concrete class implementing interface
      class CMySkirmishAI : public ISkirmishAI
      {
        void MyMethod(bool myParam);
        int myField;
        char* myStr;
      };

There are two exception to this however:

- helper subclasses do not have any prefix, and
- value types neither (it is "`float3`", not "`Cfloat3`").

File-names are usually identical to the name of the main class that is inside, with the prefix stripped off. For example, `MySkirmishAI.cpp` for class `CMySkirmishAI`.

### General

Try to keep code as readable as possible. This means, do not write very long functions, but split the problem in multiple functions. Use identifier names with an actual meaning as opposed to a,b,c, etc. The point is to allow other devs to "read" the code, as opposed to "figure it out".

Keep classes dedicated to a single function, do not create big monolithic classes which no one understands.

Insert a blank line to separate two parts of a function that have very distinct functionality. Otherwise try to keep the code compact with as few lines as possible, but avoid putting multiple statements on a single line and do not write lines more than 120 characters long.

We use comment tags (TODO, FIXME, ..) as described <a href="http://en.wikipedia.org/wiki/Comment_%28computer_programming%29#Tags" class="external text" rel="nofollow">here</a>.

On pointer or reference types, try to keep the respective symbol adjacent to the type:

      // better
      char* myStr;
      float* MyMethod(const char& myParam);
      int* MyVar = (int*)OtherVar;
      void MyMethod(const std::string& myParam);
      // okay
      char *myStr;
      float *MyMethod(const char &myParam);
      int *MyVar = (int *)OtherVar;
      void MyMethod(const std::string &myParam);
      // bad
      char * myStr;
      float * MyMethod(const char & myParam);
      int * MyVar = (int *)OtherVar;
      void MyMethod(const std::string & myParam);

If there is no type, keep the symbol adjacent to the variable name:

      // better
      char myChar, *myCharPointer, **myCharDoublePointer;
      // okay
      char myChar, * myCharPointer, ** myCharDoublePointer;
      // bad
      char myChar, * myCharPointer, * * myCharDoublePointer;

For items separated by commas, e.g. function parameters and enums, keep one space after each comma:

      // good
      void MyFun(int a, int b, int c);
      int MyArr[3] = {1, 2, 3};
      // bad
      void MyFun(int a,int b,int c);
      int MyArr[3] = {1,2,3};

For operators, e.g. =, + and -, keep one space on each side. Avoid using extra spaces around parentheses:

      // good
      void i = (1 - b);
      void j = ((1 / b) + 5) * c;
      // bad
      void i=( 1-b );
      void j=((1/b)+5)*c;

### External dependencies

Do not introduce new external dependencies without good motivation. The past has proven there are quite some libraries which just suck, do not build on some platform, are too buggy, make code unreadable, etc. If you really need to add a new dependency, be sure it is cross platform, and favor dependencies that are already packages in the major distributions like <a href="http://www.debian.org/distrib/packages" class="external text" rel="nofollow">Debian</a> or <a href="http://packages.ubuntu.com/" class="external text" rel="nofollow">Ubuntu</a>.

When working on Linux, remember to (get someone to) compile the dependency on Windows, both for MinGW and MSVC.

## Sources

(This is good material to at least skim through; the first one is a must have for every serious programmer.)

- <a href="http://en.wikipedia.org/wiki/Code_Complete" class="external text" rel="nofollow">Code complete 2</a> (commercial book)
- <a href="http://www.tiobe.com/content/paperinfo/gemrcsharpcs.pdf" class="external text" rel="nofollow">Philips Medical Systems - Coding Standard: C#</a> (free online book)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Coding Standards](https://springrts.com/wiki/Coding_Standards).*
