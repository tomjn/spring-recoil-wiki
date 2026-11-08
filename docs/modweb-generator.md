---
title: "Modweb Generator"
source_url: "https://springrts.com/wiki/Modweb_Generator"
categories:
  - "Deprecated"
---
# Modweb Generator

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

The Modweb Generator is a set of PHP scripts created by Maelstrom to easily create statistics pages for each unit and weapon in a mod.

### Instructions

To create a 'Modweb' for your mod, follow these instructions

1.  Download the current version of the Modweb scripts from the forum thread. A link is down the bottom of this page.
2.  Unzip the Modweb generator into a directory on your webserver.
3.  Unzip the following folders and files of your mod into the **mod/** directory of the Modweb:
    - The **modinfo.tdf** file, found in the base directory of the mod, into the base directory
    - The **units/** directory of the mod,
    - The **weapons/** directory of the mod,
    - The **gamedata/** directory of the mod.
    - The files in **unitpics/** directory of the mod in the **output/images** folder of the modweb generator (note : unitpics **MUST** be in **.bmp** format.
4.  Run **index.php** through your web browser of choice, and select the relevant options from the menu.
5.  Copy the contents of the **output/** folder to the desired location
6.  Your done!

### Notes

- Depending on the template, build pics will need to be uploaded to an **images/** directory where all the HTML files are located.

### Examples

- <a href="http://ta-aa.sourceforge.net/modweb/" class="external text" rel="nofollow">AA's Technical Unit Guide</a>, using excellent custom templates (outdated).
- <a href="http://froob.iamacup.com/AAmodweb/" class="external text" rel="nofollow">AA 2.21 Technical Unit Guide</a>, Made by Maelstrom and \[Gen\]Fox after loads of headache.
- <a href="https://springrts.com/warcows/XTAv6/" class="external text" rel="nofollow">XTA Modweb</a>. A bit outdated, but still there.
- <a href="http://www.ta-spring.com/mods/xectvsmynn/unitguide/" class="external text" rel="nofollow">Xect vs. Mynn Modweb</a>. Used an old version of the Modweb.
- Please add yours to the list if its not here!

### Links

<a href="https://springrts.com/phpbb/viewtopic.php?t=3842" class="external text" rel="nofollow">Forum Thread</a>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Modweb Generator](https://springrts.com/wiki/Modweb_Generator).*
