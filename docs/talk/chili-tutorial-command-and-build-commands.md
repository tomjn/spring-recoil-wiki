---
title: "Talk:Chili:Tutorial Command and Build Commands"
source_url: "https://springrts.com/wiki/Talk:Chili:Tutorial_Command_and_Build_Commands"
---
# Talk:Chili:Tutorial Command and Build Commands

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

(23:55:43) \[LCC\]jK: multiple issues:\
(23:56:04) \[LCC\]jK: first widget:GetInfo() should be always at the top of the file\
(23:56:34) \[LCC\]jK: when ppl open it, they want to see this very important data always w/o scrolling/searching\
(23:57:07) \[LCC\]jK: second, the Chili.Window, Chili.Button localization is bad style\
(23:57:13) \[LCC\]jK: I know car does it\
(23:57:49) \[LCC\]jK: but it just increase the lines of code w/o improving anything, instead it just adds an additional bug source\
(23:58:27) \[LCC\]jK: third, the 'anchors' tag doesn't exist anymore\
(23:58:49) Modus (+v \[1uP\]CarRepairer) von taspringmaster.clan-sy.com\
(23:58:58) \[LCC\]jK: it was replaced a long time ago with the relative tags (%/negative  values)\
(23:59:05) \[1uP\]CarRepairer: i already told him about the getinfo\
(27.06.2011 00:00:02) \[LCC\]jK: fourth, your drawPanel function doesn't draw anything\
(00:00:47) \[1uP\]CarRepairer: i didn't do it, licho did it (the localization)\
(00:00:55) \[1uP\]CarRepairer: i copied him\
(00:02:07) Modus (-v \[1uP\]CarRepairer) von taspringmaster.clan-sy.com\
(00:03:05) \[LCC\]jK: fifth, please use CamelCase for functions and camelCase for vars\
(00:04:35) \[LCC\]jK: 6th, chili objects have a ClearChildren() function\
(00:08:28) Modus (+v \[1uP\]CarRepairer) von taspringmaster.clan-sy.com\
(00:09:18) Modus (-v \[1uP\]CarRepairer) von taspringmaster.clan-sy.com\
(00:13:06) \[LCC\]jK: 7th, creating windows in windows is extremely bad style\
(00:13:24) \[LCC\]jK: chili has proper a Panel control\
(00:13:39) Modus (+v \[1uP\]CarRepairer) von taspringmaster.clan-sy.com\
(00:13:49) \[LCC\]jK: you could even use a simple Chili.Control\
(00:16:23) \[BoS\]nixtux hat den Raum verlassen (quit: Quit).\
(00:16:44) \[LCC\]jK: 8th there is a Spring.GetActiveCmdDescs\
(00:16:53) \[LCC\]jK: you don't need to iterate all units\
(00:17:40) Modus (-v \[1uP\]CarRepairer) von taspringmaster.clan-sy.com\
(00:19:21) \[LCC\]jK: sorry when I might sound harsh.\
(00:19:40) \[LCC\]jK: I am very happy when ppl share what they have learned with others and write such tutorials , so I wished I would have found less issues ^^\

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/Talk:Chili:Tutorial_Command_and_Build_Commands). Original page: [Talk:Chili:Tutorial Command and Build Commands](https://springrts.com/wiki/Talk:Chili:Tutorial_Command_and_Build_Commands).*
