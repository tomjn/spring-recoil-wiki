---
title: "GadgetDatabase"
source_url: "https://springrts.com/wiki/GadgetDatabase"
categories:
  - "Historical"
---
# GadgetDatabase

<div class="mw-parser-output">

\[b\]Some Logistics thoughts:\[/b\]

There's already been some worthy gadgets suggested for inclusion (on the thread this idea was discussed). And of course I'd like to see them online! While it wouldn't be too great an effort for me to upload them, for two reasons, I'd prefer not too:

\- First, if we get even a fraction of the potential general use gadgets that are out there onto the database, that'd be a considerable workload for me to shoulder alone. - Second (and perhaps more importantly), a good number of them will continue to be improved or kept up to date - and would thus be outdated pretty soon on the database, if the authors can't easily update it themselves.

For the second reason, I'd also be happy to set up shared accounts for game development groups (since you can only edit gadgets you've uploaded with your account, and there's no way of allowing other accounts edit-powers).

Since the Gadget-DB builds on the great system made for the Widget-Database, if you've ever used the Browser-based interface of that (\[url=<a href="http://www.springinfo.info/?page_id=690" class="external free" rel="nofollow">http://www.springinfo.info/?page_id=690</a>\]as seen on Springinfo\[/url\]) - this is the same. Accordingly, if you happen to have managed Widgets, the system is the same here :) !

some technicalities/suggestions regarding documentation of Gadgets you upload and such Finally, the technicalities (I'm wondering if there'd be a better place for this info - maybe wiki ?):

And/or have a look at the docu I included with \[url=<a href="http://gadgetdb.springrts.de/lua_manager.php?m=10&amp;id=356" class="external free" rel="nofollow">http://gadgetdb.springrts.de/lua_manager.php?m=10&amp;id=356</a>\]the KeyboardSteering Gadget\[/url\]

\[b\]"Modules"\[/b\] - As pointed out repeatedly, a lot of gadgets actually require multiple files, and potentially entries in unitdefs (or whatnot) to work properly. Thanks to the setup vbs has made though, it is trivial to upload multiple files and specify different places for them to go different :).

I would suggest that where eg unitdefs are required. I realise anyone more savvy with lua will not require this per se - I think with a little extra effort though, we can keep the database accessible to people with little grasp of lua.

In that vein, the following also seem a pretty much "must-have" to me: As well as including an "Api" text file explaining how the gadget interfaces with the rest of Spring: - ie what unitdefs it needs; - any "calls" it requires (ie global vars be set) from non-generalisable seperate gadgets; Or to pick up your example: - what info it passes on to GUI elements; - CMDs it depends on being given, etc.

Finally, I'd suggest some categories (if you want to categorise that is - as of now there's no functionality, since it's made with SpringDownloader in mind).

UI, (GUI), Map, Unitbehaviour, Unitdefs, Unitvars, Antihack, (I'm sure there's some more that might be added.)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [GadgetDatabase](https://springrts.com/wiki/GadgetDatabase).*
