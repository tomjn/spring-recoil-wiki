---
title: "AI:Hughs global AI tutorial"
source_url: "https://springrts.com/wiki/AI:Hughs_global_AI_tutorial"
categories:
  - "AI_Dev"
---
# AI:Hughs global AI tutorial

<div class="mw-parser-output">

This page goes step by step through how to create your own global AI.

We'll be writing the AI in C#, because C# is powerful and easy to debug. You'll need a Windows platform with Visual C# Express 2005 installed.

Note that the C++/C# interface is made available under the GPL licence, so your AI will need to be available under the GPL licence.

## Setting up your own AI Project

We're going to use the C# loader dlls from CSAI. We'll get these to run our own AI dll.

- Download CSAI from [AI:CSAI](/ai-csai), unzip it, and run setup.exe to install it.

In what follows, TASpring in a directory path means the Spring application directory, the one that contains spring.exe.

First, we need to create a loader dll "myailoader.dll", that will load our AI dll.

- Copy TASpring\AI\Bot-libs\csailoader.dll to TASpring\AI\Bot-libs\myailoader.dll
- Copy TASpring\AI\Bot-libs\csailoader.xml to TASpring\AI\Bot-libs\myailoader.xml
- Open TASpring\AI\Bot-libs\myailoader.xml in notepad, and change the value csaidirectory to "AI/myai", then save the file
- Create a new directory TASpring\AI\myai
- For now, copy TASpring\AI\CSAI\csai.dll and TASpring\AI\CSAI\csai.pdb into the TASpring\AI\myai directory.

AI\myai is where we'll be placing our own AI dll. For now we've copied the csai dll into it to check that the loader xml is configured correctly.

Check this is working ok:

- Create a new multiplayer game
- Do "add bot". Click "reload". You should see "myailoader.dll"
- Select "myaialoader.dll" and do ok
- Do "add bot" and add "emptyai.dll". This gives you a dummy opponent so you can spectate
- Click "Spectate" and launch the game
- Check that the game starts and that the commanders appear

If the game started and the commander appeared, everything is working so far. If you get an error message about a global AI exception, and spring shuts down, recheck the steps above.

Now that we've set up the myailoader.dll , we can create our own AI project.

- Download and unzip <a href="http://manageddreams.com/csai/csaitemplate.zip" class="external text" rel="nofollow">csaitemplate.zip</a>
- Start Visual C# 2005 Express
- Create a new project of type "Class library", called "csai" (note: the name is important)
- Delete the default file "Class1.cs"
- Add the file CSAI.cs and LogFile.cs from the csaitemplate.zip file
- In the solution explorer, open CSAI.cs
  - Locate the string variable aidirectory at the top of the class
  - Change its value to "myai"
- In the solution explorer, right-click "References", do "Add Reference...", select the "Browse" tab, and add TASpring\CSAIInterfaces.dll
- We want to build as Debug, because this gives better error messages. By default it may build as Release, so:
  - Go to "Tools" \| "Options..." Navigate to "Projects and Solutions", "General". Select "Show Advanced build configurations", then click "ok"
  - Go to "Build" \| "Configuration Manager..."
  - Set Active solution configuration to "Release", then close the dialog
- Build the solution. It should build with no errors, otherwise check the last few steps

You've created an empty AI dll. We need to check that it build ok.

- Locate the bin\Debug directory in your project directory
- You should see csai.dll, csai.pdb, CSAIInterfaces.dll and CSAIInterfaces.pdb
- Copy csai.dll and csai.pdb into the TASpring\AI\myai directory, overwriting the existing csai.dll and csai.pdb

Create a multiplayer game, add the myailoader.dll and emptyai.dll bots as before, click Spectate and Start

- The game should start and the commander should appear

If the game starts and the commander appears, with no error messages about "Global AI Exception" then everything is working so far. You've created a C# AI project.

## Talking to the player

Let's make the AI say something to the player. We use the SendTextMsg function to do this. The SendTextMsg function is available from the aicallback object in the CSAI class.

SendTextMsg takes two parameters. The first is the text you want to say, and the second is the number zero.

In the CSAI.cs file, locate the function "InitAI"

- You should see a comment "// your init code here"
- Add the line:
  - aicallback.SendTextMsg( "Hello world!", 0 );

Test that this works:

- Rebuild the project
- Copy the csai.dll and csai.pdb files into TASpring/AI/myai , overwriting the old ones
- Restart the game, or just say ".reloadai" if the old game is still running
- The commander should appear, and the AI should say "Hello world!"

If something went wrong, and the message didnt appear, the AI will almost certainly no longer crash. Instead you can find any error messages in the logfile at TASpring/AI/myai/csharpai_team0.log

Just make any corrections, recompile, copy the new dlls over to TASpringAI/myai , and say ".reloadai" in the game to load the corrected AI dll.

## Building your first solar panel

Let's make the commander build a solar panel.

To do this, we use aicallback.GiveOrder , passing in the commander's id and an appropriately initialized Command object.

The Command object has two parts:

- an id that specifies the command type, in this case it will be the typeid for a solar cell
- a double array which in this case specifies the position of the new solar cell.

There are a couple of prerequisites:

- we need to know the commander's id, to give to the GiveOrder function
- we need the typeid for a solar cell
- we need to find an appropriate location for the solar panel

### Get Commander id

First, let's get the commander's id. An easy way to do this is using the UnitFinished method in the CSAI class. This method is essentially an event that fires whenever a new friendly unit has finished building. We'll get a UnitFinished event for the commander right at the start of the game.

In the UnitFinished function there should be a line "IUnitDef unitdef = aicallback.GetUnitDef( deployedunitid );".

- this line obtains an IUnitDef object for the newly created unit
- An IUnitDef gives access to data about each unit type, such as its name, its human name, whether it is a commander
- You can browse through the properties available on an IUnitDef using Visual Studio Express:
  - On the line just after IUnitDef def = aicallback.GetUnitDef( deployedunitid );, type:
  - unitdef.
  - Intelisense should automatically produce a list of all the unitdef properties you can read.

Instead of writing "unitdef.", insert some new code to get the commander's id, type:

if( unitdef.isCommander ) {

      int commanderid = deployedunitid;
      aicallback.SendTextMsg( "Commander id is: " + commanderid, 0 );

}

- Recompile, copy the dlls over to TASpring/AI/myai, and restart the game to test this modification
- The AI should say "Commander id is: " and the commander's id

Note that since the commander is created only once in each game, at the start, you'll need to restart the game, .reloadai is not going to work with this code.

If it works, good. If there's a problem, you can check the logfile at TASpring/AI/myai/csharpai_team0.log

### Get solar cell typeid

Next, let's look at finding the typeid for solar cells. To do this, we can use the function aicallback.GetUnitDefList()

IUnitDef\[\] GetUnitDefList()

This returns an array containing an IUnitDef s for every available unit in the currently loaded mod.

The function takes a while to run, 2-3 seconds, so you probably want to run this only once in your real AI, and store the results.

We can get the solar cell's typeid using the following code. Add this inside your if, just after the aicallback.SendTextMsg line:

    IUnitDef[] unitdeflist = aicallback.GetUnitDefList();
    IUnitDef solarcelldef = null;
    foreach(IUnitDef thisunitdef in unitdeflist )
    {
       if( thisunitdef.name == "ARMSOLAR" )
       {
          solarcelldef = thisunitdef;
       }
    }
    aicallback.SendTextMsg( "Found solar cell def: " + solarcelldef.id + 
       " human name: " + solarcelldef.humanName, 0 );

Recompile, copy the csai.dll and csai.pdb files over to TASpring/AI/myai and restart the game.

Remember that .reloadai won't work with this code, because we're relying on the UnitFinished event to get the commmander's id.

### Get buildsite

Next we need to find an appropriate location for the solar panel. The function to do this is aicallback.ClosestBuildSite:

aicallback.ClosestBuildSite( IUnitDef unitdef, Float3 targetpos, double searchRadius, int minDistance )

- unitdef: the IUnitDef for the unit we want to build
- targetpos: roughly where we want to build it
- minDistance: not sure, but putting 2 here works
- searchRadius: how far to look for a build spot before giving up

We already have the unitdef for a solar cell, so we just need an approximate location. We can use the commander's location for this. We can get this by calling aicallback.GetUnitPos:

Float3 GetUnitPos( int unitdeployedid )

- unitdeployedid: the unit's deployedid, in this case we'll use commanderid
- returns the position as a Float3

Float3's are used a lot. They have three properties x, y, z, which typically represent the position of something.

Let's get the commander's position. After the foreach(){} block above, you can add the following code:

    Float3 commanderpos = aicallback.GetUnitPos( commanderid );
    aicallback.SendTextMsg( "The commander's position is " +
       commanderpos.ToString(), 0 );

Compile, copy the dlls, and restart the game. You should see the AI say the position of the commander.

Now, we can call ClosestBuildSite to get a good build site for the solar cell. Add the following code beneath our last aicallback. SendTextMsg line:

    Float3 buildsite = aicallback.ClosestBuildSite( 
       solarcelldef, commanderpos, 1400, 2 );
    aicallback.SendTextMsg( "solar cell buildsite: " + buildsite.ToString(), 0 );

Build, copy the dlls, restart the game

- You should see the ai giving the proposed solar cell position
- Check that it's roughly near the commander's position , otherwise double check the code above

### Build solar cell

We've got the information we need. Now let's build a solarcell. We can use aicallback.GiveOrder. The general format for a GiveOrder command is:

aicallback.GiveOrder( targetid, new Command( commandid, new double\[\]{ x, y, z } ) );

- The targetid in this case is the commander's id, commanderid
- The commandid can take specific predefined values, such as CMD_MOVE or CMD_ATTACK
- For a build command, commandid is minus the type id of the unit to build
- Lastly, an array of doubles, which in this case is the position where we want to build the solar cell

Just underneath the last aicallback.SendTextMsg line, add the following lines:

aicallback.GiveOrder( commanderid, new Command( - solarcelldef.id, buildsite.ToDoubleArray() ) );

The code you just wrote should look something like:

    IUnitDef unitdef = aicallback.GetUnitDef( deployedunitid );

if (unitdef.isCommander) {

       int commanderid = deployedunitid;
       IUnitDef[] unitdeflist = aicallback.GetUnitDefList();
       IUnitDef solarcelldef = null;
       foreach (IUnitDef thisunitdef in unitdeflist)
       {
           if (thisunitdef.name == "ARMSOLAR")
           {
               solarcelldef = thisunitdef;
           }
       }
       aicallback.SendTextMsg("Found solar cell def: " + solarcelldef.id + 
         " human name: " + solarcelldef.humanName, 0 );
       Float3 commanderpos = aicallback.GetUnitPos(commanderid);
       aicallback.SendTextMsg("The commander's position is " + 
          commanderpos.ToString(), 0 );
       Float3 buildsite = aicallback.ClosestBuildSite(
          solarcelldef, commanderpos, 1400, 2);
       aicallback.SendTextMsg( "solar cell buildsite: " + 
          buildsite.ToString(), 0 );
       aicallback.GiveOrder(commanderid, new Command(-solarcelldef.id,
          buildsite.ToDoubleArray()));

}

Recompile, copy the dlls and restart the game to test.

Important: we're building an ARM solar panel, so the AI must be running as ARM for this to work.

Hopefully you should see the commander build a solar panel. Otherwise check the logfile for any error message, and try again.

Remember that .reloadai won't work with this code, because we're relying on the UnitFinished event to get the commmander's id, so you'll need to restart the game. There are ways around this, but that is for later :-) .

Here's some pictures of the commander building a solar panel:

![tut_buildsolar1.JPG](http://manageddreams.com/csai/screenshots/tut_buildsolar1.JPG)

![tut_buildsolar2.JPG](http://manageddreams.com/csai/screenshots/tut_buildsolar2.JPG)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:Hughs global AI tutorial](https://springrts.com/wiki/AI:Hughs_global_AI_tutorial).*
