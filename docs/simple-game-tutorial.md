---
title: "Simple Game Tutorial"
source_url: "https://springrts.com/wiki/Simple_Game_Tutorial"
categories:
  - "Deprecated"
---
# Simple Game Tutorial

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | This page is out of date and has been marked for review. |

This Tutorial Aims to get a person from knowing nothing about Spring to the point where they can create and edit mods.

Right now I am working from memory so you may want to correct me when I'm wrong, I will try to cross link from my summaries to the appropriate articles available in other places.

I will not go too deep into making 3do's because they are old and dumb... but I'll try to make note of the differences here.

I don't know anything about scripting right now, so that section is likely to be sparse when I write it, I hope that someone will expand on it.

## Book 1: The First Unit

### Step 1:Planning

Who cares about planning, you know what you're doing... just come up with an idea for a mod... I made a chess set... if you don't have a real idea and just want to make a model show up in the game... then yeah... this is the place to start... I'd do that if I were you.

Another good thing to do at this point is to creat a "working directory", and inside it create a directory with the name that your mod will have... after many headaches I decided it's best to put this in the root directory of your system so it's really easy to find when you are switching around back and forth between folders and keep having to find your files over and over again.

### Step 2:Getting The Tools

You will need a bunch of stuff... here's the list (I assume you are using windows)

*Want:*

- [Spring](/download) - The main program, you will likely need this to test if you've screwed up
- A Tiny Map (2x2) - to test your mod fast

*Need:*

- **Program listings can be found here:** **[Map, Mod, And Unit Development Programs](/map-game-and-unit-development-programs)**
- 3D Modeling Program - **See above link**
- Notepad - to edit all the myriad of text files
- A Graphical Editing Program - needs to handle RGBA TGAs (aka TGA's with alpha channels), I suggest Photoshop if you have it, or The GIMP... needed for all of the texture making for UVmapping stuff... **See above link**
- Upspring 1.3 - To convert your models to the appropriate s3o format (if you want to fight with 3do builder, then go ahead... a good trick is to get your model into Upspring first and adjust all the hierarchy, then save it as an 3do... but why bother?). **See above link**
- Scriptor - to make and compile your units "animation script"... or steal someone else's and make it work for your unit. **See above link**
- Compression Utility - (I suggest <a href="http://www.7-zip.org/" class="external text" rel="nofollow">7zip</a> - even if you are using zip compression and not 7zip, it's still good to have)

### Step 3:Making a 3D Model

Go into your 3D modeling program and make a 3D model, combine all the objects and UV map the model, then separate it out into any parts that need to move independently of each other. Then Export the UV map as an Image File and Export the whole thing as a 3ds file. Put the original wings file, the UVMap image and the 3ds file into your working directory so you can find them later.

Wings 3D UV Mapping tutorial has been started here - [3DModels:Wings3DTutorial](/3dmodels-wings3dtutorial)

### Step 4:Fixing Your Images

[This Article includes a UVMapping Guide](/basic-s3o-unit-making-guide)

Open up your UVMap in Photoshop (or whatever) go to the layer/chooser dialog box and go to the Channels Tab, add a new layer (it should default to alpha) and fill it with 99% black so you can see your texture in upspring. If you want to can paint the UVmap and put white (1% black) on the alpha channel where you want your team colors to show up (you can use something between 1% and 99% to get a blend of your team color along with the texture... for example 50% will give you your texture with 50% of the team color mixed in...)

I don't know how to do glow maps... XXreminder for someone to create a Glowmapping tutorial... you don't actually need one for the model to show up.

Save these images both in the working directory.

Save a copy of these images in tga format into \<working directory\>/\<mod name\>/unittextures

### Step 5:Upspring

#### Importing Your 3ds

Open [upspring](/upspring), go to file\>load model and navigate to and open your 3DS model you exported, you should see the model in upspring as a 3d mesh. Go to the model tab and set the radius and height values to something other then zero... this defines where the health bar will show up, and more importantly, how big the collision sphere will be.

You will also need to use all of the other tools on those tabs to resize and rotate and move your model to the right place... wings makes models that are 90 degrees off and about 30 times smaller than most spring models... make sure you click the "apply transform" button after any changes that you actually want to show up in the game.

Also, you will want to make the hierarchy work using the cut, paste, and add empty buttons. You will need an object called "base" that all the other objects are connected to... the "origin object"... sometimes you get lucky and wings exports it properly... usually not.

#### Importing Your UV and Glowmaps

Go to the textures tab and make your UV/texture/team-color map as "texture1" and your UV/glow/reflectivity map as "texture2"... it should show up correctly in the preview pane.

#### Exporting Your s3o

Choose File\>Save Model As then in the drop down select "s3o" and type an appropriate name. This model should be saved to your working directory, and a copy of it made to \<working directory\>/\<mod name\>/objects3d/

### Step 6: Lua files

#### UnitName.lua

    unitDef = {
      unitname           = [[arm_spider]],
      name               = [[Weaver]],
      description        = [[Cloaking Construction Spider, Builds at 9 m/s]],
      acceleration       = 0.15,
      bmcode             = [[1]],
      brakeRate          = 0.15,
      buildCostEnergy    = 230,
      buildCostMetal     = 230,
      buildDistance      = 80,
      builder            = true,

      buildoptions       = {
      },

      buildPic           = [[arm_spider.png]],
      buildTime          = 230,
      canAttack          = false,
      canGuard           = true,
      canMove            = true,
      canPatrol          = true,
      canreclamate       = [[1]],
      canstop            = [[1]],
      category           = [[LAND UNARMED]],
      cloakCost          = 1,
      cloakCostMoving    = 2,
      corpse             = [[DEAD]],

      customParams       = {
        description_bp = [[Aranha e de construÃƒÂ§?o, ConstrÃƒÂ³i a 6 m/s]],
        description_es = [[Ara?a de construcciÃƒÂ³n, construye a 6 m/s]],
        description_fi = [[Rakentaja/kaikuluotainkiipeilij?, rakentaa 6m/s nopeudella]],
        description_fr = [[Araign?e de Construction, Construit ? 6 m/s]],
        description_it = [[Ragno do costruzione occultante, costruisce a 6 m/s]],
        description_pl = [[Paj?k konstruktor, buduje z pr?dko?ci? 6m/s]],
        helptext       = [[The Weaver is a constructor that can climb over any obstacle and build defenses on high ground.]],
        helptext_bp    = [[Weaver ÃƒÂ© o construtor escalador camuflÃƒÂ¡vel de NOVA. Pode subir qualquer obstÃƒÂ¡culo, mas constrÃƒÂ³i mais devagar que construtores normais.]],
        helptext_es    = [[El Weaver es el constructor que puede treparse sobre qualquier obstÃƒÂ¡culo y construir defensas en terreno alto]],
        helptext_fi    = [[Weaver pystyy liikkumaan vaikeakulkuisimmassakin maastossa ja rakentamaan vaivatta my?s useimmille muille rakentajille saavuttamattomiin paikkoihin.]],
        helptext_fr    = [[Le weaver est un robot de construction tout terrain qui peut batir des d?fenses en terrain ?lev?.]],
        helptext_it    = [[Il Weaver ÃƒÂ© un costruttore che puo arrampicarsi su qualunque ostacolo e costruire difese nel terreno alto]],
        helptext_pl    = [[Weaver jest konstruktorem mog?cym wspina? si? po ka?dej powierzchni oraz posiadaj?cym mo?liwo?? maskowania si?]],
      },

      defaultmissiontype = [[Standby]],
      designation        = [[ARM-MLSPD]],
      energyMake         = 0.15,
      energyUse          = 0,
      explodeAs          = [[BIG_UNITEX]],
      footprintX         = 3,
      footprintZ         = 3,
      iconType           = [[builder]],
      mass               = 115,
      maxDamage          = 750,
      maxslope           = 16,
      maxSlope           = 72,
      maxVelocity        = 1.7,
      maxWaterDepth      = 22,
      metalMake          = 0.15,
      movementClass      = [[TKBOT3]],
      noAutoFire         = false,
      noChaseCategory    = [[TERRAFORM SATELLITE FIXEDWING GUNSHIP HOVER SHIP SWIM SUB LAND FLOAT SINK]],
      objectName         = [[ARMMLSPD]],
      radarDistanceJam   = 256,
      seismicSignature   = 16,
      selfDestructAs     = [[BIG_UNITEX]],
      showNanoSpray      = false,
      side               = [[ARM]],
      sightDistance      = 295,
      smoothAnim         = true,
      steeringmode       = [[1]],
      TEDClass           = [[CNSTR]],
      terraformSpeed     = 450,
      threed             = [[1]],
      turninplace        = 0,
      turnRate           = 1020,
      workerTime         = 9,
      zbuffer            = [[1]],

      featureDefs        = {

        DEAD  = {
          description      = [[Wreckage - Weaver]],
          blocking         = true,
          category         = [[arm_corpses]],
          damage           = 850,
          featureDead      = [[DEAD2]],
          featurereclamate = [[smudge01]],
          footprintX       = 3,
          footprintZ       = 3,
          height           = [[40]],
          hitdensity       = [[100]],
          metal            = 92,
          object           = [[ARMMLSPD_dead]],
          reclaimable      = true,
          reclaimTime      = 92,
          seqnamereclamate = [[tree1reclamate]],
          world            = [[All Worlds]],
        },

        DEAD2 = {
          description      = [[Debris - Weaver]],
          blocking         = false,
          category         = [[heaps]],
          damage           = 850,
          featureDead      = [[HEAP]],
          featurereclamate = [[smudge01]],
          footprintX       = 3,
          footprintZ       = 3,
          height           = [[4]],
          hitdensity       = [[100]],
          metal            = 92,
          object           = [[debris3x3b.s3o]],
          reclaimable      = true,
          reclaimTime      = 92,
          seqnamereclamate = [[tree1reclamate]],
          world            = [[All Worlds]],
        },

        HEAP  = {
          description      = [[Debris - Weaver]],
          blocking         = false,
          category         = [[heaps]],
          damage           = 850,
          featurereclamate = [[smudge01]],
          footprintX       = 3,
          footprintZ       = 3,
          height           = [[4]],
          hitdensity       = [[100]],
          metal            = 46,
          object           = [[debris3x3b.s3o]],
          reclaimable      = true,
          reclaimTime      = 46,
          seqnamereclamate = [[tree1reclamate]],
          world            = [[All Worlds]],
        },

      },

    }

    return lowerkeys({ arm_spider = unitDef })

Save this file as a lua file in \<working directory\>/\<mod name\>/units/

#### modinfo.lua

modinfo.lua is a lua file that defines a number of things that are used when loading a mod, most of the information is self explanatory but basically what you are doing is defining what is going to show up in whatever mod-selection interface you use as well as what other files need to be loaded into memory in order for your mod to work.

##### Making a New Mod with your unit/units

The following is an example of what will be in your [modinfo.lua](/modinfo.lua) file if you are starting from scratch and making your own mod. This is also good when you are just testing one unit to see if it works.

    return {
            -- The name is shown in the selection interface
            game = "MyMod",
            shortGame = "MM",
            name = "My Mod",
            shortName = "MM",
            version = "4.0",
            mutator = "Heroes",
            -- These can be shown by the selection interface
            description = "My Mod That I Made",
            url = "http://www.theplacepeoplecangetthelatestversionofyourmod.com",
            -- What kind of mod this is 
            --  0 - Hidden (support mod that can't be selected, such as OTA_textures) 
            --  1 - Normal, only one can be selected at a time 
            --  2 - Addon, any number of these can be selected. Could be used 
            --      for single units for example. 
            --  others - perhaps mutators and addon races that can be 
            --           enabled in addition to XTA for example? 
            modtype = "1",
            -- Number of other archives this one depends on 
            depend= {
                "Spring content v1",
                "Spring Cursors",
                "Spring Bitmaps",
                -- Number of other content names this one replaces
                            added comment about filename vs unitsync name for dependency
            },
        }

##### Adding Your Unit to an Existing Mod

The following is an example of what will be in your modinfo.lua file if you are adding new units to an existing mod (in this case XTA SE v066), this is good for adding units to the build tree of an existing mod or adding a whole new team.

    -- Description of the mod control file recognized by spring:
    return {
            -- The name is shown in the selection interface
            game = "XTASE_MyUnits",
            shortGame = "XTASEMU",
            name = "XTASEv0.66 with+My Units",
            shortName = "XTASEMU",
            version = "4.0",
            mutator = "Heroes",
            -- These can be shown by the selection interface
            description = "xta_se_v066 with the cool tank I made",
            url = "http://www.fileuniverse.com/exactlocationblahblahblah",
            -- What kind of mod this is 
            --  0 - Hidden (support mod that can't be selected, such as OTA_textures) 
            --  1 - Normal, only one can be selected at a time 
            --  2 - Addon, any number of these can be selected. Could be used 
            --      for single units for example. 
            --  others - perhaps mutators and addon races that can be 
            --           enabled in addition to xta for example? 
            modtype = "1",
            -- Number of other archives this one depends on 
            depend= {
                "XTAsev066",
                            "Spring Cursors",
                            "Spring content v1",
                -- Number of other archives this one replaces
                                            --do not used filenames, use the internal name, or downloader programs will fail to download the dependencies automatically
            },
        }

If you are not depending on OTA files, you will have to supply your own cursors.

There are some extra bits in these examples, but I work on the "better safe than sorry" principle... which is to wait for someone who knows what they are doing to fix my articles.

You will want to save this file as plain text in \<working directory\>/\<mod name\>/

#### armorDefs.lua

I'm not exactly sure how this works, but the file needs to exist, so either steal one from another mod and modify it... or just make a file that looks like this.

    local armorDefs = {
    }

You will want to save this file as a lua file in \<working directory\>/\<mod name\>/gamedata

#### sidedata.lua

Start by stealing the sidedata.lua file from your dependency mod if you have one, then edit it to include your units/side.

Basically this file is in the form:

    local sideData = {
        [1] = {
            name      = 'Good Guys',
            startunit = 'GG_comm',
        },
    }

There are also additional "\[X\]" entries for each side/team/commander-choice available in the mod-selector you choose.

You will save this file as lua file in \<working directory\>/\<mod name\>/gamedata/

------------------------------------------------------------------------

Coolfile:

The engine will stop spawning start units and resources anymore. Please read this<a href="http://springrts.com/phpbb/viewtopic.php?f=14&amp;t=21883" class="external autonumber" rel="nofollow">[1]</a> for more information.

(annotated on 2010-10-23)

Moved the buildOptions definitions into the unitDef definitions, LuaParser Please read the change log line 77 \[2\] for more information.

(annotated on 2010-10-24)

#### moveDefs.lua

This file determines the footprint of your units, the angle of slopes they can climb and in how deep water they can drive. It contains several entries, all in the following format:

    local moveDefs = {
        KBOT1 = { -- This is the name. Unit files refer to this name.
            footprintx = 1, -- This is how big the X dimension is of the footprint in Spring units probably?
            footprintz = 1, -- This is how big the Y dimension is of the footprint in Spring units probably?
            maxwaterdepth = 15, -- This is how big the Y dimension is of the footprint in Spring units probably?
            maxslope = 36, -- The maximum angle of slopes this unit can climb.
            crushstrength = 5, -- This determines if the unit/unit class can crush certain features
        },
        -- etc..
    }

#### sounds.lua

This file refers to all the sounds your units make, so Spring knows which sound file is linked to what action. It contains entries in the following format.

    local Sounds = {
       SoundItems = {
          IncomingChat = {
             file = "sounds/nexuiz/talk.wav",
             priority = 15,
             preload = true,
          },
          MultiSelect = {
             file = "sounds/ota/button9.wav",
             priority = 15,
             preload = true,
             rolloff = 0.1,
          },
          MapPoint = {
             file = "sounds/bzflag/teamgrab.wav",
             priority = 15,
             preload = true,
             rolloff = 0.1,
          },
          FailedCommand = {
             file = "sounds/openQuarz/pkup.wav",
             gain = 0.75,
             priority = 15,
             preload = true,
             in3d = false,
          },
    }

}

### Step 7:Adding a Build Pic

Add a 96x96 BMP to your \<working directory\>/\<mod name\>/unitpics/ folder named either "UnitName.bmp" or whatever you specified in the "BuildPic=" line of your fbi.

### Step 8:Adding a Side Pic

Add a 16x16 BMP to your \<working directory\>/\<mod name\>/sidepics/ folder named "teamname.bmp" or whatever you specified in the "name=" line of your SIDEDATA.TDF for each side/team you have added.

### Step 9:Scriptor

#### Stealing a Script

Open someone else's script in scriptor that works the way you want your script to work, look at the top where it's talking about "piece names"... then change those piece names to be the piece names of your unit and do a find/replace to make all the places where those pieces show up to be your pieces too. Compile it so its name is the same as the "UnitName=" value in your "UnitName.fbi".

XXreminder to someone to link to a proper scripting tutorial

Put the bos and cob files for your unit script in \<working directory\>/\<mod name\>/scripts

### Step 10:Compiling Your Mod

You may want to check your mod directory and make sure it follows the structure defined [here](/gamedev-archives).

navigate to your \<working directory\>/\<mod name\> and select everything and choose "add to archive \<mod name\>.7z".

make a copy of this file called \<mod name\>v0.7z in your working directory so you don't screw anything up later, then make a copy of it called \<mod name\>.sd7 in the mods directory of spring.

An alternative, added in more recent versions is the ".SDD" folder, to use this, copy the entire \<mod name\> folder in the mods directory of spring and rename it as "\<mod name\>.SDD". The advantage to the ".SDD" method is that you can tweak settings and add files without recompressing your mod all the time. When it comes time to distribute your mod use ".sd7".

EXAMPLES: If your mod is called JoesMod you will have a file called "JoesMod.sd7" or a folder called "JoesMod.SDD" in your spring mods directory.

### Step 11:Testing Your Mod

Open Up your lobby client, pick your mod from the drop-down list of the games in host battle or singleplayer mode if your lobby supports it(if it doesn't show up you screwed up your modinfo.txt), choose your tiny map from the map list and press start. If it doesn't break and your unit shows up, you have created all the neccessary files... yay!

Gotchas:

- If it doesn't work, check you didn't zip the folder itself, but the contents, ie if you open mymod.sd7 with 7zip, you should see folders such as "unittextures" rather than a folder "mymod" containing unittextures.

Old Category:Game development

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Simple Game Tutorial](https://springrts.com/wiki/Simple_Game_Tutorial).*
