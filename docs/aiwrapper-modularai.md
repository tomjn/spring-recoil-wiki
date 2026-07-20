---
title: "AIWrapper:ModularAI"
source_url: "https://springrts.com/wiki/AIWrapper:ModularAI"
categories:
  - "AIWrapper"
---
# AIWrapper:ModularAI

<div class="mw-parser-output">

<table class="wiki-infobox">
<tbody>
<tr>
<td colspan="2"><strong>ModularAI</strong></td>
</tr>
<tr>
<td>Developer</td>
<td>LoidThanead</td>
</tr>
<tr>
<td>Version</td>
<td><strong>?</strong></td>
</tr>
<tr>
<td>Language Support</td>
<td>Java</td>
</tr>
<tr>
<td>Status</td>
<td><strong>beta</strong></td>
</tr>
<tr>
<td>License</td>
<td>GNU GPL v2+</td>
</tr>
<tr>
<td>AI Interface</td>
<td><a href="/aiinterface-java">Java</a></td>
</tr>
<tr>
<td colspan="2"> <strong><a href="/ai-development-interface">&lt;- Back to AI Interfaces</a></strong></td>
</tr>
</tbody>
</table>

## ModularAI

The ModularAI wrapper is a wrapper for the [Java AI Interface](/aiinterface-java). It divides AI functionality up in modules. Each module is self-contained, easily customizable and can be swapped for any the module serving the same function without breaking the AI.

The design goal of the ModularAI wrapper is to provide the AI developer with easily customizable default behavior as well as the ability to add his or her own, without hiding any of the full power of the Java interface underneath.

PM LoidThanead for a copy of the latest version.

### Overview

A ModularAI consists of a collection of modules. Each module is responsible for one aspect of the AI's behavior. The behavior of a module could be to manage the AI's construction queue. Another module might be used to plan and/or execute attacks.

The AI communicates with the modules through Messages. When an event happens in the game, all modules are notified. Modules can also communicate with one another through messages.

To simplify unit handling, the ModularAI wrapper introduces the `SimpleUnit`. This is a wrapper around the Unit object that provides a convenient interface for giving orders to units. It also makes the unit's properties (i.e. current/max speed, current/max health, available weapons etc) easily accessible.

### Use

To use the ModularAI wrapper, we should first have a regular Java AI set up, as described in [AI:Development:Lang:Java](/ai-development-lang-java). Next, we add the ModularAI.jar file to your project. (Make sure it is located in the *jlib* subdirectory of your AI's folder.) Then, instead of having `MyJavaAI` extend `AbstractOOAI`, we extend `DefaultModularAI`.

`DefaultModularAI` has a constructor, which our AI class will need to call. The `MyModularAI` class will look something like this:

` public class MyModularAI extends DefaultModularAI { `

      public MyModularAI(OOAICallback callback)
      {
         super(callback, 6);
      }

`} `

As you can see, the `super` constructor has two arguments. The first is the callback, which allows the AI and its modules to communicate with the game engine. The second parameter, `updateInterval`, tells the `DefaultModularAI` how often the default modules should update. The choice for an interval of 6 is only an example. At 1x speed, this interval means that every component updates once per second.

A module is updated at frame 1, and every x frames after that, where x is the update interval. So a module with an update interval of 100 is updated at frames 1, 100, 200, etc. The smallest possible update interval is 1, which means that the module updates every frame. This is 6 times per second at 1x speed! Obviously, you will want to keep update intervals reasonable for modules that perform heavy calculations at updates. If you do not want a module to update besides the first frame, set the updateInterval to 0. For suggestions about appropriate update intervals, you should consult the documentation for the module in question. Most of the modules provided in `DefaultModularAI` do not require updating at all, and none require heavy computation.

At this point, we technically have a working ModularAI. You may want to export your code and see if there are no errors when you run it. As you may see, your AI does not do anything yet. In order to have our AI do anything intelligent, we will have to use modules.

### Getting your AI to Do Something

As is customary, the details of creating an `ModularAI` that actually does something will be explained through an example that shows how to build a solar plant in the BA mod.

The `DefaultModularAI` that our AI extends has all the required modules to do the building for us. The only thing we still need to tell it is what to build and when. Therefore, we will create a module, `ControlModule`, that makes the necessary decisions.

#### Creating a new Module

We require a custom module that tells our AI what to build. Technically, we could do this in the `MyModularAI` class, but this defeats the purpose of making the AI modular. Therefor, we create a new module, `ControlModule`, that tells the built-in `BuildManager` module that it has to build a solar plant.

First we create the `ControlModule` class. Creating a new module is as easy as creating a class that extends AbstractAIModule. You will need to create a constructor with parameters `OOAICallback callback` and `int updateInterval`.

The callback enables your module to retrieve information from the engine as well as give commands. Note that giving commands to the engine should not be necessary, as for most actions that require you to talk to the engine directly there are more convenient methods available that do the work for you. For example, units can be ordered around using the appropriate method. Moving a unit is achieved by using the method `moveTo()`, which takes the position to move to as its parameter, and will issue to appropriate move order for you.

The `ControlModule` class should look like this:

` public class ControlModule extends AbstractAIModule { `

      public ControlModule(OOAICallback callback, int updateInterval)
      {
         super(callback, updateInterval);
      }

`} `

We simple delegate the work to the constructor of `AbstractAIModule`. It is often a good idea to let the AI that uses a module specify the updateInterval, rather than hard-coding it inside the module. This is because an AI with many light-weight modules may be able to update modules that perform heavy calculations more often, while other AI's may wish to do it the other way around.

Let's have our AI build a solar plant at the first frame of the game, frame 1. The easiest way to do that is to overwrite the `update()` method. To let our AI build a unit, we need a `BuildUnitCommand`. In its simplest form, the `BuildUnitCommand` constructor takes two arguments: a priority and an instance of `BuildProperties`.

The priority of a `BuildUnitCommand` works much the same as the priority of a module: the lower the priority number and the earlier the position in the build order queue. The difference is that a build order with a higher priority is not necessarily fulfilled first. The `BuildManager` keeps track of which available units can be used to fulfill which requests. When a requests prerequisites are met, it assigns the required units to the module that issued the request. When two requests can be fulfilled using the same units, the request priority comes into play: the request with higher priority is processed, while the other one will have to wait for another usable unit to become available.

The second parameter, `buildProperties`, describes the details of the build command. The minimum information needed for a build command is the type of unit you would like to build. For all other properties (i.e. build position, number of units to build) defaults are used when they are not specified.

To actually issue the BuildUnitCommand after we've created the object, we can use the `sendMessage()` method implemented in `AbstractAIModule``. This method takes any message as its parameter, then passes it to all AI modules. (This includes the module that sent the message.) `

`So, to have our AI a build a solar plant, we will overwrite the update method and give a ``BuildUnitCommand`` with unit type 'armsolar.' Now our module looks like this: `

` public class ControlModule extends AbstractAIModule { `

      public ControlModule(OOAICallback callback, int updateInterval)
      {
         super(callback, updateInterval);
      }

      @Override
      public int update(int frame)
      {
         int exitcode = 0;

         if (frame == 1 && exitcode == 0)
         {
            BuildProperties properties = new BuildProperties("armsolar");
            Message buildCommand = new BuildUnitCommand(0, properties);
            exitcode = this.sendMessage(buildCommand);
         }

         return exitcode;
      }

`} `

In the above code, we first construct a `BuildProperties` object with as only property the unit type 'armsolar,' meaning we will use default values for all other properties. Then we create the `BuildUnitCommand` with priority 0 and the described properties. Zero is normally the highest priority (or lowest priority number) used, although technically negative values can be used as well. Finally the build command is sent and passed to all modules of our AI.

Just having the `ControlModule` class is not enough to make our AI do something. We still need to add it to the AI instance. This will be described in the next section.

#### Adding a module

To use a module, we need to it to our AI. Modules are best added in the constructor of your AI class.

The method `addModule()` is used to add a new module. This method comes in two variants. The first only takes the module that we wish to add as its argument. The second also lets us specify a priority. This priority determines in what order modules are notified of events, as well as the sequence in which they are initialized and updated. This can be important if, for example, the initialization of a component requires another component to be already initialized. Note that a lower priority number means a higher priority. A module with priority 1 will be initialized, updated and notified of events before any module with priority 2. The priority number works as an index in a list. The order in which two modules with the same priority number are handled is undefined, and may vary from moment to moment. If no priority is specified for a module, it is given a default priority of 10.

In order to let our AI build a solar plant, we will need to add our `ControlModule`. To add the module, `MyModularAI` should look something like this:

` public class MyModularAI extends DefaultModularAI { `

      public MyModularAI(OOAICallback callback)
      {
         super(callback, 6);
         this.addModule(new ControlModule(callback, 6));
      }

`} `

And with this, our AI should start the game by building a solar plant.

**[\<- Back to AI page](/ai-skirmish-list)**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AIWrapper:ModularAI](https://springrts.com/wiki/AIWrapper:ModularAI).*
