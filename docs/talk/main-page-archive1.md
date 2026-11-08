---
title: "Talk:Main Page/archive1"
source_url: "https://springrts.com/wiki/Talk:Main_Page/archive1"
categories:
  - "Deprecated"
---
# Talk:Main Page/archive1

<div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr">

## Redesign idea

I propose to use the current main page as the architecture for the categorys (actually IÃ‚Â´m going to do some categorizing in a moment :D ).

Also I then propose to move this page to somewhere like "Overview" or something, and making a proper Main Page, like the first page you get when visiting a different game site, something like this: <a href="http://www.ea.com/official/battlefield/battlefield2/us/home.jsp" class="external autonumber" rel="nofollow">[1]</a> (actually not as messy if possible :D). Anyway, IÃ‚Â´ll just set up a nice little page to play around with should I ?

\[\[Ideas for the Front Page\| There\]\]

we are. [SeanHeron](/users/seanheron) 14. March

Ok I got started on categorizing, and in case you donÃ‚Â´t understand the system IÃ‚Â´m using IÃ‚Â´ll explain here: I think the System in use on the "Main Page" is very good (I think I had exactly the same structure in my head and wanted to implement it, but somebody else \[brilliant person\] did so already ). Anyway, I want to make the categories sort more or less like on the main Page thus: Root (directory for the top level Categorys)

- **Spring (de)**
  - Spielen
    - ....
  - ...
- **Spring (Category for the english Wiki)**
  - Playing (Currently Playing Spring)
    - Read this first
    - .....
  - Content (Currently Spring Project)
    - Units
    - Maps
    - Mods
    - ....
  - Development
    - Unit making
    - Map making
    - Mod making
    - Source Development
    - ....

Note that there is only one category each for Maps, Units, Mods and AIs at the moment, and I intend to split them into two: one for describing content already made (e.g. Absolute Annihilation) and one describing how to make the content (Development) e.g. Upspring. --[Seanheron](/users/seanheron)

## Missing category display

I think there is one little thing missing in the current wiki-style: There is no display of the categories the viewed page is in. e.g [Mods](/games) should have its category \[\[Category:Mods\]\] displayed, no? --[Hoehrer](/users/hoehrer)

------------------------------------------------------------------------

TO do something like that, you have to use a template. This is already working on a few of the mods pages. To put this template in, type &#123;&#123;Category:Mods&#125;&#125;, which would look like this:

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" class="mw-file-element" decoding="async" width="50" height="51" />](/images/172px-Symbol_comment_vote.svg.png) | This site is kept for historical reasons, all mods here are incompatible to the current spring engine, maybe they work with an older version of the Engine. |

- please use [Category:Games](/categories/games) if you search for playable games!\

--Maelstrom

------------------------------------------------------------------------

I think you are missing/missunderstanding my point (I'm no native speaker, oh well ;) ).... You can classify a wiki-page in mediawiki into several categories e.g. \[\[Category:TODO\]\] \[\[Category:Mods\]\] \[\[Category:Fixme\]\] In the default-style these categories are listed on the bottom of the page, so you can select them and get an overview of all pages in this category. See <a href="http://en.wikipedia.org/wiki/Java_programming_language" class="external free" rel="nofollow">http://en.wikipedia.org/wiki/Java_programming_language</a> as an example (on the bottom of the page is the "Categories" section) Doing a template with a cool formatting is a nice addition to this, but \_seeing what categories are used\_ is needed IMHO.\
On a side note: does &#123;&#123;Category:xxx&#125;&#125; **doesn't** classify a page inside the xxx category. --[Hoehrer](/users/hoehrer) 14:23, 20 Dec 2005 (W. Europe Standard Time)

------------------------------------------------------------------------

I see what you mean now. Yes that would be a good thing to have. Ask Fnordia about it, he is the one that takes care of the wiki.

And no, adding a &#123;&#123;Template&#125;&#125; does not add that page into that catrgory, it just adds that page into the current page. --Maelstrom 05:51, 21 Dec 2005 (W. Europe Standard Time)

------------------------------------------------------------------------

Ok, i'll contact Fnordia.

Template: I know, I actually wanted to write a declarative statement with that sentense, but messed it up with the leading "does" :) --[Hoehrer](/users/hoehrer)

Just wanted to point out that the default template now contains the category thing at this point (poked fnordia about it a bit more). --Sinbadev

## Updating the skin

The skin I based the spring skin from (Cologne blue) doesn't seem to show this information either unfortunately. I guess I will have to create a new one based on Monobook instead for that to work. I'll see what I can do.

That might not be neccessary. I don't know exactly, but by cut&paste-ing the "catlinks" related things from the monobook style this should work just fine (with some modifications of course) --[Hoehrer](/users/hoehrer)

Ok, to correct myself: There is no non-displayed "Categories" part in the current style. It may be suppressd by php depending on the skin or something like that :-/ So the method mentioned above will not work. --[Hoehrer](/users/hoehrer)

Hey Fnordia ! The categories are working, woot ! Well done and thank you [SeanHeron](/users/seanheron) 00:10, 15 Mar 2006 (W. Europe Standard Time)

------------------------------------------------------------------------

Made some big changes by integrating a bit of css and deleteing a lot of stuff. Can't figure out how to make a css class whithin wiki markup, which caused some useless repetition.

</div>

---

*Imported from the springrts.com wiki (public domain), via p2004a's 17 August 2025 dump and [mirror](https://springrts-wiki.p2004a.com/wiki/Talk:Main_Page/archive1). Original page: [Talk:Main Page/archive1](https://springrts.com/wiki/Talk:Main_Page/archive1).*
