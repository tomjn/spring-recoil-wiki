---
title: "Infolog.txt"
source_url: "https://springrts.com/wiki/Infolog.txt"
categories:
  - "Development"
---
# Infolog.txt

<div class="mw-parser-output">

log file for the spring rts engine

### windows

Usually in MyDocuments\My Games\Spring\infolog.txt or next to spring.exe when installed in portable mode.

### linux

can be found in ~/.config/spring/infolog.txt

## How to share it

<a href="http://paste.springfiles.com" class="external text" rel="nofollow">paste.springfiles.com</a> is a good site.

## incomplete or empty logfile?

In some cases the file is sometimes <a href="http://springrts.com/mantis/view.php?id=2796" class="external text" rel="nofollow">incomplete or empty.</a> To get a complete log you can try to direct stdout to a file:

**On a Mac:** `./spring &> infolog_full.txt`

**On Windows:** `spring.exe > infolog_full.txt`

In [settings](/springsettings.cfg), set **LogFlushLevel=0**

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Infolog.txt](https://springrts.com/wiki/Infolog.txt).*
