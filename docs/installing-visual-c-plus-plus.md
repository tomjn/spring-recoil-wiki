---
title: "Installing Visual C plus plus"
source_url: "https://springrts.com/wiki/Installing_Visual_C_plus_plus"
categories:
  - "Deprecated"
---
# Installing Visual C plus plus

<div class="mw-parser-output">

|  |  |
|----|----|
| [<img src="/images/172px-Symbol_comment_vote.svg.png" decoding="async" width="50" height="51" alt="172px-Symbol comment vote.svg.png" />](/images/172px-Symbol_comment_vote.svg.png) | **Warning!** This page is **outdated**! The information displayed may no longer be valid, or has not been updated in a long time. Please refer to a [different page](/project/categorystructure) for current information. |

Ok getting the free Microsoft IDE to run is not the easiest task, if you donÃ‚Â´t know what your doing. If you do though its easy easy :D . First of all your going to need quite a bit of free Hard drive memory, about 2 gigabytes. Roughly one Gigabyte needs to be free on your windows drive (usually C:).

What I say after this can basically be found on the microsoft page <a href="http://msdn.microsoft.com/vstudio/express/visualc/usingpsdk/" class="external text" rel="nofollow">here</a> with links included, so you might as well go there, and just check here if your having problems. You first need to install the "Visual Studio C++ 2005 Express edition" . Long name ey? Anyway there are two ways to install:

1.  The <a href="http://go.microsoft.com/fwlink/?LinkId=51410&amp;clcid=0x409" class="external text" rel="nofollow">online installation</a>, where you download a small installer, which then downloads the files as you install. I advise against this, as it was always moaning about not having this or that windows update. I do run on a Windows 2000 Machine though, so maybe its no problem with XP.
2.  Anyway the other (in my opinion: better) way is to download the <a href="http://go.microsoft.com/fwlink/?linkid=54766" class="external text" rel="nofollow">Image file</a> (.img), extract this with an image reader (you can get one free, just google for it). Than all you need to do is run setup/install, and presto ! You donÃ‚Â´t need to install the frills by the way (the Visual Studio Library or the SQL something).

Okay, that was step one. Now you need to install the "Windows Platform SDK (Software Developer Kit)". Again there are two ways of installation, same as before. This time though IÃ‚Â´d advise using the <a href="http://www.microsoft.com/downloads/info.aspx?na=46&amp;p=3&amp;SrcDisplayLang=en&amp;SrcCategoryId=&amp;SrcFamilyId=A55B6B43-E24F-4EA3-A93E-40C0EC4F68E5&amp;u=http%3a%2f%2fdownload.microsoft.com%2fdownload%2fa%2f5%2ff%2fa5f0d781-e201-4ab6-8c6a-9bb4efed1e1a%2fPSDK-x86.exe&amp;oRef=http%3a%2f%2fmsdn.microsoft.com%2fvstudio%2fexpress%2fvisualc%2fusingpsdk%2f" class="external text" rel="nofollow">online installer</a>, as the <a href="http://www.microsoft.com/downloads/details.aspx?familyid=D8EECD75-1FC4-49E5-BC66-9DA2B03D9B92&amp;displaylang=en" class="external text" rel="nofollow">Image file</a> was broken (for me anyway).

OK if youÃ‚Â´ve got that done, your almost ready. Next you need to follow the <a href="http://msdn.microsoft.com/vstudio/express/visualc/usingpsdk/" class="external text" rel="nofollow">instructions on the Windows page</a>, manually changing some of the VS C++ 2005 Settings.

After that you need to install the vclibs package and (if you want to compile the source, and not only AIÃ‚Â´s) the directx SDK. Also, the VC8 Project file isn't updated as much as the source code changes, so you might have to look through the SVN log and manually tell it about files added since the last update.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Installing Visual C plus plus](https://springrts.com/wiki/Installing_Visual_C_plus_plus).*
