---
title: "Doxygen style comments"
source_url: "https://springrts.com/wiki/Doxygen_style_comments"
categories:
  - "Engine_Dev"
---
# Doxygen style comments

<div class="mw-parser-output">

Spring gets automatically generated documentation for the source code which can be found <a href="https://springrts.com/dl/buildbot/doc/" class="external text" rel="nofollow">here</a>. The tool used for this is <a href="http://www.doxygen.org" class="external text" rel="nofollow">doxygen</a>. Whilst doxygen does a good job of producing diagrams and extracting logical relationships from the code, the documentation can be somewhat hard to digest without any descriptive text to read!

The good news is that doxygen can automatically extract your header comments from the code and use them as a description for the class/method/field they're associated with... as long as you stick to the doxygen comment style. Therefore, please put doxygen style comments into the code.

Doxygen comments have the same syntax as Javadoc basically - if you're familiar with Javadoc, go ahead and write header comments as you normally would in Java. If you're not familiar with Javadoc, the main thing you need to know is to use:

/\*\*

At the start of your comment blocks (doxygen also works with /\*!). Or on the otherhand if you prefer using // style comments, use /// or //! as your comment marker.

Within the comment blocks you can also use <a href="http://www.stack.nl/~dimitri/doxygen/commands.html" class="external text" rel="nofollow">special commands</a> including the very useful @todo command. All @todo commands are noted by Doxygen and pulled out into a single "TODO" list page, which lists all the @todo items across the entire project in one place.

The full <a href="http://www.stack.nl/~dimitri/doxygen/manual.html" class="external text" rel="nofollow">doxygen manual</a> describes all the various commenting conventions you can use which doxygen will pick up. This includes nice things like being able to mark several items as having the same comment (part of <a href="http://www.stack.nl/~dimitri/doxygen/grouping.html" class="external text" rel="nofollow">grouping</a>), producing <a href="http://www.stack.nl/~dimitri/doxygen/lists.html" class="external text" rel="nofollow">lists</a>, <a href="http://www.stack.nl/~dimitri/doxygen/autolink.html" class="external text" rel="nofollow">links</a> into other classes/methods etc., how to use <a href="http://www.stack.nl/~dimitri/doxygen/htmlcmds.html" class="external text" rel="nofollow">HTML</a> within the comments etc.

The current codebase (0.65b2) contains non doxygen comments as we've only just started using it. If you do see header/field comments which start with just /\* or //, please do a search-and-replace on them so that we can have the benefit of them in the documentation. Thanks

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Doxygen style comments](https://springrts.com/wiki/Doxygen_style_comments).*
