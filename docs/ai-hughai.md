---
title: "AI:HughAI"
source_url: "https://springrts.com/wiki/AI:HughAI"
categories:
  - "AI"
---
# AI:HughAI

<div class="mw-parser-output">

## What is HughAI

HughAI is a an AI written in Java. Works quite well at fast rush attacks.

## To install

To install

Make sure you have hoijui's Java Interface v0.1 installed. I believe this is installed automatically if you have Windows. Other platforms may have varying mileage.

Once you have Java Interface 0.1 installed ok:

1\. Download HughAI from:

sorry, no up to date link. github repo here: <a href="https://github.com/hughperkins/HughAI" class="external free" rel="nofollow">https://github.com/hughperkins/HughAI</a>

2\. Remove any old AI/Skirmish/HughAI directory

3\. untar (using Winzip or your favorite zip utility) into AI/Skirmish, so you should have the following directory structure:

    AI/
      Skirmish/
        HughAI/
          0.1/
            SkirmishAI.jar
            ... other files ...

4\. Run springlobby, create a single-player game, and do "add-bot"

Note that the AI needs to be playing as Arm, and on Balanced Annihilation. On anything else, it will probably just sit there and do nothing :-D

It's fairly early days yet, so don't expect too much just yet ;-) I'll update this message as it gets better.

## Mods and maps

Works with BA mod, with the AI running as ARM.

## Play-style

It's a non-cheating AI by day ... but if you go to the 'Config' tab on the gui and tick the box next to 'maphack' and then click 'apply' or 'save' ... it will become a cheating maphack AI!

Otherwise, its playstyle is essentially to rush. If it doesn't beat you within a few minutes, it's basically not going to do very much else just yet ;-) Maybe in the future though ;-)

## Cheating / maphack

In the gui, in the 'config' tab, click 'maphack' then 'apply' or 'save' to enable maphack.

Unclick it, and then 'apply' or 'save' to disable it.

## To disable gui

Either:

\- run spring in windowed mode, in the gui, in the config tab, unclick 'guiactivated' and then click 'save', or - in the config file BA_2.xml, change guiactivated from 'yes' to 'no'.

## Can it beat other AIs?

Yes ;-) it beats E323 v2.12.0 sometimes.

## Configuration

There is a gui with a tab 'Config' that can be used to configure many things.

A few extra things are configurable in the config file 'BA\_\<side\>.xml' , in the AI's directory, where side is core or arm.

There are also a number of workflow xml files in the BA\_\<side\>workflows subdirectory. Currently, only one of the workflows are used, so there's no point in adding more than one for now ;-) In the future, it might simply randomly select from one, at random, so a human enemy doesn't know if the AI will tech or rush or whatever. Sounds reasonable?

The workflow config files define what will get built essentially, with a priority, a unitname, and a quantity.

The higher the priority, the earlier the units will be built.

You can add in the same unit on multiple lines, with different priorities, so you can say: ok, first build a couple of stumpies, then a jeffy, then some more stumpies, or whatever.

## Limitations /ways to beat it

Survive the initial rush, and it will probably not do too much else.

## Console

For techies, there's a console, where you can directly write Java code.

## Soure-code

The sources are available from the following git repository:

<a href="https://github.com/spring/HughAI" class="external free" rel="nofollow">https://github.com/spring/HughAI</a>

More details on the architecture can be found in the file src-ai/architecture.txt, in the sources, which I try to keep somewhat up-to-date, but really, if you have any questions, just ask me ;-)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [AI:HughAI](https://springrts.com/wiki/AI:HughAI).*
