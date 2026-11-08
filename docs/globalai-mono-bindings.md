---
title: "GlobalAI Mono Bindings"
source_url: "https://springrts.com/wiki/GlobalAI_Mono_Bindings"
categories:
  - "AI_Dev"
---
# GlobalAI Mono Bindings

<div class="mw-parser-output">

## Introduction

Writing AIs in C# massively facilitates development, because C# runs just as fast as C++ and avoids those annoying stack/heap corruption errors.

We have bindings for .Net Framework 1.1 and 2.0 for Windows. It would be useful to create a set of bindings for Mono so that this could run also on any Mono-supported platform.

Such bindings would make it possible to write portable AIs in C#, Boo (Python.Net), and any .Net language capable of being compiled into a portable ILSM class library.

Here's some thoughts on writing such bindings.

These thoughts are taken from a fuller thread at <a href="https://springrts.com/phpbb/viewtopic.php?t=7634&amp;postdays=0&amp;postorder=asc" class="external text" rel="nofollow">https://springrts.com/phpbb/viewtopic.php?t=7634&amp;postdays=0&amp;postorder=asc</a>

## High-level overview

To create bindings for Mono, we almost certainly need a generator. The hardest part of writing a generator is parsing the input files. In the case of the Mono bindings, we can use Reflection on the existing CSAIInterfaces.dll. This could save a lot of time.

## Download

Code written so far:

- prototyping code and generator: modified MonoEmbeddedTest at <a href="http://hughperkins.com/csai/MonoEmbeddedTest.zip" class="external text" rel="nofollow">http://hughperkins.com/csai/MonoEmbeddedTest.zip</a>
- C# AI "Hello World" for Mono: <a href="http://hughperkins.com/csai/CSharpAIMono.zip" class="external text" rel="nofollow">http://hughperkins.com/csai/CSharpAIMono.zip</a> Note that you will need to ensure that Mono-1.1.18/bin is in Spring.exe's path.

A generator has been started in the file "GenerateCode.cs" in the MonoEmbeddedTest.zip zipfile. You can build it by doing:

    csc /debug GenerateCode.cs /reference:CSAIInterfaces.dll

Using mono, you'd do:

    mcs -debug -reference:CSAIInterfaces.dll GenerateCode.cs

## Architecture

There are three types of classes we need to deal with:

- data classes, pass-by-value. This includes: Command, Float3
- proxied method calls from C++ to C#. This includes: IGlobalAI
- proxied method calls from C# to C++. This includes: IUnitDef, IAICallback

### Pass-by-value

We create a class in C++ for each pass-by-value class, with static methods "Marshall_MyType_to_MonoObject" and "Marshall_MonoObject_to_MyType"

The generator does this already, although it needs tweaking to cope with the double array in Command.

Two files are created for each type: MyTypeMarshaller.cpp and MyTypeMarshaller.h

We include the include file for the original Spring native type from MyTypeMarshaller.h, eg Float3Marshaller.h includes Float3.h.

### Proxied method calls from C++ to C#

There is only one class that this applies to, IGlobalAI.

We create a C# class GlobalAIProxyLoader, which contains delegate definitions for each method in IGlobalAI, and which calls SetUnitCreatedHandler etc on the C++ proxy class

We create a C++ class GlobalAIProxyCppToCs , which contains a function to receive each delegate from the C# ProxyLoader. It implements each function in IGlobalAI, redirecting to a user-provided GlobalAI C# class.

We strip the leading "I" from the interface name to get the underlying type name.

### Proxied method calls from C# to C++

This applies to: IUnitDef, and IAICallback.

The native instances of these classes are always created by Spring itself, then passed back to the AI. We need to provide a C# proxy to wrap calls to a C++ proxy, which forwards the calls to the native instance.

Two classes called MyTypeCallbackProxyCsToCpp are created, one in C# one in C++.

The MyTypeCallbackProxyCsToCpp class in C# contains instance methods, such as SendTextMsg, which redirect to static methods, such as \_SendTextMsg. The static methods are extern'd internal calls to methods with the same name in the MyTypeCallbackProxyCsToCpp class in C++.

In the general case, there can be many instances of each of these proxied classes, so we create a map of reference number to instance in the C++ proxy. The reference number is an arbitrary number starting from 1.

Each time a function on the Spring side returns a class that needs to be proxied into C#, we create a new reference number and add it to the map. The reference number is returned into the C#-side proxy, and will be used as a handle for method calls in the future.

The C#-side proxy that called the spring function that returned the new proxied class will receive the new handle from the C++-side proxy, and create a new instance of the appropriate proxy class, passing in the new handle in the constructor. It can then pass the new proxy class instance onto the C# AI.

The method calls from C# into C++ contain an additional first parameter, which is the reference number , which allows the C++-side proxy to select the appropriate native object and forward the call, eg to a UnitDef object. The instance methods in the C#-side proxy class will add the additional handle parameter when they call the corresponding static method.

The method calls in the C++ proxy are static, so they can be internal-called from C#, and in a class, to avoid namespace collisions.

## Generator main block

The generator main block can add each of the types to be generated into an arraylist TypesByVal, ProxiesCppToCs or ProxiesCsToCpp, as appropriate. Then when we call generate:

- it goes through each arraylist and generates the appropriate classes
- when a class undergoing generation uses one of the other classes, the generator can handle this accordingly by checking which arraylist the other classes are in

## Use of attributes

It's possible to add custom attributes to parameters and methods in the interface classes in CSAIInterfaces.dll . These can be read by the generator and used to tweak the generation.

For example, we could have \[MarshallAsCNullTerminatedString\] vs \[MarshallAsCppStdString\].

An attribute is just an empty class that derives from Attribute, eg:

    [AttributeUsage(AttributeTargets.Parameter, Inherited = false, AllowMultiple = true)]
    public class MarshallAsCNullTerminatedString: Attribute
    {
       // nothing needed here, empty class
    }

Use of attributes should probably be kept to a minimum, to avoid modifying CSAIInterfaces.dll, but the possibility exists where necessary.

## Hand-Tweaked Code

It will almost certainly be necessary to add hand-tweaked code to the proxies. For example, GetMetalMap() cannot be easily guessed, because there is no info on the size of the array, and it's not constant either.

Hand-tweaked code could be added by creating a derived class, in C++, from the proxy class one wishes to tweak. This keeps generated code separate from human-written code, so it is easy to regenerate the files as the interfaces change.

The generator will need to know the name of any derived classes so that it can use this in any "new" statements it generates for that proxy.

## Overall

A plan exists that should probably work. Some code has been written. The devil is in the details.

Writing the Mono bindings will need someone with a good knowledge of the Mono API, the Spring GlobalAI API, C, C++ and C#.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [GlobalAI Mono Bindings](https://springrts.com/wiki/GlobalAI_Mono_Bindings).*
