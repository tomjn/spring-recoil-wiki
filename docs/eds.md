---
title: "EdS"
source_url: "https://springrts.com/wiki/EdS"
categories:
  - "Deprecated"
---
# EdS

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

## Welcome to the documentation of the program Editor Spring

I really must do a better job with this when i have time. For now, this is what you have :p

This program is released under the General Public License. You can get it here: <a href="http://www.fileuniverse.com/?p=show&amp;a=it&amp;id=2746" class="external free" rel="nofollow">http://www.fileuniverse.com/?p=show&amp;a=it&amp;id=2746</a>\

**Requirements:**\
- You will need access to a MySql server (<a href="http://www.mysql.com/" class="external free" rel="nofollow">http://www.mysql.com/</a>)\
MySql 4.0 is the one that provides the best performance with a default instalation:\
<a href="http://downloads.mysql.com/archives.php?p=mysql-4.0" class="external free" rel="nofollow">http://downloads.mysql.com/archives.php?p=mysql-4.0</a>\
MySql 5.0, with a default instalation, seems to provide a maximum of 1 query per second, being totally unacceptable performance.\
- You will need to have installed the mono virtual machine to run the virtual code that composes the program (<a href="http://mono-project.com/Main_Page" class="external free" rel="nofollow">http://mono-project.com/Main_Page</a>)\
The program was compiled with mono 1.1.13.4, which can be found here:\
<a href="http://go-mono.com/archive/1.1.13.4/download/" class="external free" rel="nofollow">http://go-mono.com/archive/1.1.13.4/download/</a>\

**Running the program:**\
- After the mono virtual machine is installed,\
- Unzip it, of course\
- Execute the file "EditorSpring.exe.mono" (in Windows, double-click on it then , since mono does not registers .mono files to itself, search for the mono executable, usually c:\Programs\mono\*\bin\mono.exe)\

**Simple tutorial:**\
- Choose the language you wish to use (more languages will be added if people are willing to make translations).\
- You will start in the Configurations menu. Choose user and password with which to access the MySql server by pressing the button.\
- Choose the server if the server is not running on your own computer.\
- On the menu on the left press "Manage Databases" or on the menu on the right press "haa, something database".\
- Now, create a new Database.\
- Select it from the list and press the button select.\
- You are now on the Editing menu in the section for importing and exporting mods. The big widget on the center is to select the working directory. The 4 buttons on the right are:\
1- "Import" This will import a mod from files on the specified working directory. It will search for the file "Armor.txt", "Modinfo.tdf", the 3 files in the folder "Gamedata", and all files in the folders "Units" and "Weapons". It also checks for the existance of the folder "Download" and tries to import the stuff in there.\
!!! This is really slow. It takes 3 mins to import one of the great mods in a Duron 1300. !!!\
2- "Load" This will load a mod from the Sql server to memory. If you just imported a mod to database, it will not be in memory yet and you need to load it.\
!! This one is also somewhat slow. !!\
3- "Verify" This will try to verify if the mod is properly made. At the moment it only checks to see if all sides have a comander assigned and if all units have dependencies assigned.\
4- "Export" This will dump into the specified working directory all the mod's information properly stored in the needed files. Remember that any change in the mod through the program will be reflected in the Database. There is no button to Ã‚Â«unloadÃ‚Â» the mod back to Database. The modifications will run syncronized with the database.\

\- The remaining buttons in the bottom of the Editing menu are for accessing the editing menus of the several diferent sections of a mod. ..try them.\

**Known issues:**\
The mod XTA_se has, in the weapons definitions, reference to the weapons dealing specific damage to ARMBRAWL. It should be referencing a class on units from the file Armor.txt but it does not, it references one unit inside one of those classes. The program will not handle this. So, if you want to mess around with the mod XTA (the most common one), you will have to fix that before importing it or after. Optionally, the mod Uberhack is tested and works Ã‚Â«out of the boxÃ‚Â».

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [EdS](https://springrts.com/wiki/EdS).*
