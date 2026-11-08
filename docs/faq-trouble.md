---
title: "FAQ:trouble"
source_url: "https://springrts.com/wiki/FAQ:trouble"
categories:
  - "FAQ"
  - "Pages_with_broken_file_links"
---
# FAQ: Troubleshooting

> **Recoil / BAR:** For a current, supported game and its up-to-date troubleshooting, see [Beyond All Reason](https://www.beyondallreason.info/) (on the [Recoil engine](https://recoilengine.org/)) and its community [Discord](https://discord.gg/GUpRg6Wz3e). The notes below are for the classic Spring engine.

## Current troubleshooting

Generic steps that still apply:

- **Can't host / friends can't connect:** the engine uses UDP port 8452 by default. Forward that port on your router and allow it through your firewall, or use a relay host if your lobby offers one.
- **Graphics glitches or crashes:** update your GPU drivers first. If it still crashes, check `infolog.txt` in your config directory - it usually names the cause. Lowering graphics settings (shadows, advanced shading) or running windowed can help isolate driver issues.
- **Sound problems:** update your sound drivers. On Linux, most sound issues come from the audio server configuration.
- **Still stuck:** ask in the BAR/Recoil Discord with your `infolog.txt` attached.

::: details Historical: old hardware and driver workarounds (classic Spring, ~2010-era)

These notes target discontinued hardware and driver versions (e.g. ATI Catalyst 8.x-10.x, early Intel/Nvidia drivers) and specific old Spring releases. They are kept as a record and are unlikely to apply to current systems or to Recoil/BAR.

<div class="mw-parser-output">

### Network

#### My buddy can not connect to a game I've opened. What can we do?

The engine uses UDP port 8452 by default, which can be changed in the lobby. If you are behind a router, and are having problems hosting, try forwarding the correct port and also make sure the firewall is not blocking it. If you do not know what a port or a firewall is, use a relay host instead: when hosting a game, tick the check-box labeled "Use relayhost".

#### I can not connect to the online lobby server?

See in the <a href="http://springrts.com/phpbb/index.php" class="external text" rel="nofollow">forum</a> if others have the same problem.

The server might be temporary down for maintenance. Most lobbies should allow you to connect to a "backup server" or just try again after some time.

### Graphics

#### Map texture repeating across the map in squares

[<img src="/images/Screenshot_Spring_Squares_of_Doom.jpg" decoding="async" alt="Screenshot Spring Squares of Doom.jpg" />](/images/Screenshot_Spring_Squares_of_Doom.jpg)

Try adding `UsePBO = 0` to your springsettings.cfg.

#### Low fps that get better in metalview (F4)

Try typing into ingame chat:

*/advmapshading 0*

/advmodelshading 0

And/Or add to springsettings.cfg:

*AdvMapShading = 0*

AdvUnitShading = 0

(usually the AdvMapShading part is enough)

#### I am having really bad framerates (fps) on my dual core! What am I doing wrong?

Some of this helped other users:

- This error is sometimes reported by people having multicore-CPUs. To solve this, you could try to restrict it to run on one core. Enable "SetCoreAffinity=1" in your [springrc](/springsettings.cfg).
- Installing the latest processor drivers and Windows hotfixes for your system may also help.
- Also try to disabling the "Exhaust" effect on planes could help: Press f11 while ingame, disable LUPS and Lups manager (by clicking on them to make them turn red)

#### How to Alt-Tab out of full-screen on Linux?

Play windowed with */grabinput*, or <a href="http://springrts.com/phpbb/viewtopic.php?p=449972#p449972" class="external text" rel="nofollow">use devilspie</a>.

#### I use Linux with Open-Source Gfx drivers, and the map is all white!

[<img src="/images/Whitemap.png" decoding="async" alt="Whitemap.png" />](/images/Whitemap.png)

Due to patents S3TC texture support is disabled by default. To enable it you need the tool driconf (note, you no longer require libdxtn):

    $ sudo apt-get install libgl1-mesa-dev driconf
    $ driconf

On the "Image Quality" tab activate "Enable S3TC texture compression even if software support is not available".

Related forum threads:

- <a href="http://springrts.com/phpbb/viewtopic.php?f=20&amp;t=20809" class="external text" rel="nofollow">Spring on Intel or ATI 'open-source' drivers</a>

#### It crashes, hangs, ...

Possible fixes are:

- updating your graphics driver
- lowering the graphic-settings at SpringSettings
- disabling graphics effects at SpringSettings

#### Spring crashes on my notebook but it has a really nice graphic card! (or some effects are messed up)

for example air plane trails might look like:

[<img src="/images/Bugged_plane_trails_graphics.jpg" decoding="async" width="530" height="170" alt="Bugged plane trails graphics.jpg" />](/images/Bugged_plane_trails_graphics.jpg)

Some notebooks have two graphic cards: One for 3D and a small integrated one to save power while on facebook. Setting it to use the correct 3D card has helped some players. Use the internet to find out how to do that. Screenhot of such controll panel, though it might look different on different computers:

[<img src="/images/Graphic_cards_selection.png" decoding="async" width="366" height="155" alt="Graphic cards selection.png" />](/images/Graphic_cards_selection.png)

#### Nvidia

##### I am having really bad framerates (FPS)!

Turn off 'threaded optimizations' for Spring in the nVidia control panel, enable "Compress textures" in SpringSettings.

[<img src="/images/MToptimizations.png" decoding="async" alt="MToptimizations.png" />](/images/MToptimizations.png)

##### After playing Spring, in background running firefox window is white or gray.

Disable Anti-Aliasing / decrease graphic-quality (\<=high) in SpringSettings.

##### Shadows on Units doesn't work

[<img src="/images/Shadows_fail.jpg" decoding="async" alt="Shadows fail.jpg" />](/images/Shadows_fail.jpg)

Check if Shadows and AdvUnitShading is enabled, update your graphics driver.

##### It crashes/hangs

- try disabling shadows (SpringSettings)
- try disabling advanced map shading (AdvMapShading=0)

#### Intel

##### Why does spring hang for a few seconds?

This bug occurs on maps like FolsomDamDeluxeV2, Tangerline. FPS suddenly drops to 1 and game runs very slowly. This seems to be an Intel driver bug. For Windows Vista/7 try updating driver up to 8.15.10.2246 or newer. For Windows XP there is no solution yet.

Related forum threads:

- <a href="http://springrts.com/phpbb/viewtopic.php?f=11&amp;t=23541" class="external text" rel="nofollow">Intel HD Graphics Driver issue?</a>
- <a href="http://springrts.com/phpbb/viewtopic.php?f=11&amp;t=23081" class="external text" rel="nofollow">Performance issues on Intel X4500</a>

##### Fonts are unreadable

[<img src="/images/IntelBorkedFonts.png" decoding="async" alt="IntelBorkedFonts.png" />](/images/IntelBorkedFonts.png)

This is a driver bug, try to update/downgrade your driver.

##### It crashes, hangs etc...

Possible fixes are:

- disabling texture-compression at SpringSettings
- disabling reflective units at SpringSettings
- disable ReflectiveWater
- <a href="http://downloadcenter.intel.com/" class="external text" rel="nofollow">updating your driver</a>
- use linux! (yes, this hint sucks, but the open-source-drivers seems to work better...)

#### ATI/AMD

First of all, if you encourage a graphics related problem on ATI/AMD graphic device update your drivers to the latest version <a href="http://support.amd.com/us/gpudownload/Pages/index.aspx" class="external text" rel="nofollow">ATI/AMD dowload</a>.

##### I've got the most recent drivers and the game crashes in atioglxx.dll

As of Spring 0.80.5, use only basic or dynamic water. Bump water with disabled shore waves should also work. Reflective or refractive water will make the game crash after 15-20 minutes due to a memory leak.

Spring 0.81.2 and/or Catalyst 10.2 drivers or newer should fix this problem.

if the game crashes immediatly after the loading screen is finished ("Finalizing") in the Zero-K or Gundam mods and the video card is based on the RV670 GPU (some models of: 3690, 3850, 3870, 4570, 4730, 3730, 3610, 4580, 4750, 3750, 2600 XT/PRO, 3830) Catalyst 8.12 drivers may fix it (windows xp 32-bit, possibly other NT5-based 32-bit platforms), however even with that driver there may still be a crash (not immediatly after the loading screen, as soon as the simulations starts) in Annihilation-based mods that use RED UI, the same lua-based atioglxx.dll crash also happens with the 1944 mod.

also note that later versions of Catalyst drivers for these cards reduce performance in OpenGL applications (windows xp 32-bit, possibly other NT5-based 32-bit platforms) (found at least in: spring, quake3 and Nexuiz), for spring the most significant drop (by ~15%) appears in 9.10 and higher Catalyst versions (more than 15%), if you have one of the lower-performing models of these and don't use shadows you may want to try the Catalyst 8.3 and 8.4 drivers (they do not support shadows but should work ~5% faster compared to 8.12) but those drivers may be less stable

##### I've got a notebook and official ATI/AMD drivers refuse to install, what to do?

First of all, make sure you're installing the 'AMD Mobility Radeon' driver pack branch. Use <a href="http://www.driverheaven.net/modtool.php" class="external text" rel="nofollow">ATI Mobility Modder</a> or unofficial drivers - DNA or Omega. Use <a href="http://google.com" class="external text" rel="nofollow">Google</a> or get them from <a href="http://downloads.guru3d.com/Videocards----ATI-Catalyst-(Modified)_c24.html" class="external text" rel="nofollow">guru3d</a>.

##### UI disapears after 5-10 mins of play on old ATI videocards

In cmdcolors.txt, simply comment out or remove the following lines:

    stipplePattern 0xffcc
    stippleFactor 1
    stippleSpeed 1.0

The problem detected on:

- ATI Radeon X3200 with latest drivers (<a href="http://springrts.com/phpbb/viewtopic.php?f=11&amp;t=20817" class="external text" rel="nofollow">ref</a>)
- ATI Radeon 9500 with Omega drivers 3.8.442 (<a href="http://springrts.com/phpbb/viewtopic.php?f=11&amp;t=23526" class="external text" rel="nofollow">ref</a>)

##### I see the complete screen full of red/green/yellow or giant dots on minimap

200px

This is a bug somewhere in LUA drawing with ATI/AMD. Disable widgets that draw via F11 menu to find the one. There is no real fix. A Widget causing this is "Red UI Minimap", "Highlight Units" or "Chili Minimap". Setting "Max nano simultaneous particles" (SpringSettings) seems to help, too.

##### I see big green rectagle on minimap

[<img src="/images/AMD-Minimap-green_rectangle-bug.png" decoding="async" alt="AMD-Minimap-green rectangle-bug.png" />](/images/AMD-Minimap-green_rectangle-bug.png)

Try to set [MiniMapDrawProjectiles](/springsettings.cfg#minimapdrawprojectiles) in Spring settings to 0.

##### The textures looks scary

[<img src="/images/Ati-drawing-issues.jpg" decoding="async" alt="Ati-drawing-issues.jpg" />](/images/Ati-drawing-issues.jpg)

This is a known ATI/AMD-bug. Try using different driver, preferably other than 10.5, 10.6, 10.7 -\> newer driver pack with fixed OpenGL driver should be fine.

##### Units are almost invisible, except for same black pieces

For example on Radeon X1300/X1550 Series.

[<img src="/images/InvisibleUnitBug_Radeon_X1300X1550AdvUnitShading.jpg" decoding="async" width="320" height="274" alt="InvisibleUnitBug Radeon X1300X1550AdvUnitShading.jpg" />](/images/InvisibleUnitBug_Radeon_X1300X1550AdvUnitShading.jpg)

Set [Springsettings.cfg#AdvUnitShading](/springsettings.cfg#advunitshading) = 0

##### It crashes always at start, hangs etc...

Check [infolog.txt](/infolog.txt), as it mostly contains hints whats the cause for the crash. Possible fixes are:

- try the [safemode](/springsettings.cfg#safemode) / set [springsettings.cfg](/springsettings.cfg) safemode values.
- updating or even downgrading <a href="http://support.amd.com/" class="external text" rel="nofollow">ATI driver</a>

### Sound

#### The Sound is crackling/pausing in Windows, what can i do?

Try:

- Update the sounds driver
- Enable SystemSoundsService in Vista/Seven

#### I am having sound problems under Linux! What can i do?

In more then 90% of the cases, this is caused by PulseAudio. If this is the problem, there are three known solutions to solve it. Use one of them.

##### disable sound effects

Make sure you have the OpenAL-Soft configuration utility. You might want to run:

    # install
    sudo apt-get install alsoft-conf
    # run
    alsoft-conf

If you're not on a debian-based distribution, you can download the source from the project's homepage: <a href="http://www.anduin.net/~angasule/?x=entry:entry091211-133213" class="external free" rel="nofollow">http://www.anduin.net/~angasule/?x=entry:entry091211-133213</a>. You can also check if there's a newer version.

    #download
    wget http://www.anduin.net/~angasule/fp-content/attachs/alsoft-conf_1.4.3.tar.gz
    #extract
    tar xvf alsoft-conf_1.4.3.tar.gz
    cd alsoft-conf-1.4.3
    #compile
    cmake .
    make
    #run
    ./alsoft-conf

In the "Effects" tab remove everything from "Allowed effects".

##### disable non-ALSA (preferred)

run alsoft-conf (for installation see above)

In the "backend" tab, keep only "ALSA" on the left column, then save. Done!

*Side Note:* ALSA is redirected to the PulseAudio layer when installed.

### Misc

#### Middle mouse button does not work ingame

If you use Logitech Setpoint be aware that it sets your middle mouse button by default to 'Autoscroll'. It should be set to 'Middle button' instead. Change the setting in Setpoint.

#### Spring crashes after Error opening cache\\ ... in infolog.txt

      [f=0000000] Reading Estimate PathCosts [8]
      [f=0000000] Error opening cache\paths\...

this is a known bug in 0.82.7.1. Your cpu also has many cores? Then try to set HardwareThreadCount=2" in [springrc](/springsettings.cfg). Spring tries to create the PathCache with to many threads in parallel and crashes because out of memory.

#### I have a problem that is not described here! What can i do?

There is a number of things you can do, among these are:

- Search in the <a href="http://springrts.com/phpbb/viewforum.php?f=11" class="external text" rel="nofollow">Help &amp; Bugs Forum</a>, and ask if you can not find a suiting topic.
- Check the games forum or homepage.
- Look at the [Linux only FAQ](/gentoo-install#linux-specific-troubleshooting).
- Ask for help in the lobby in a suiting channel, eg: \#springlobby, \#de, \#fr, \#ai, \#main
- Ask the FAQ-Bot in the lobby in channel \#springlobby. To get a list of topics, write *!faqlist* and then use *!faq \<topic-name\>* to get the help text. For example, try *!faq rename*.

#### The ingame chat spams a lot of cryptic error messages

This is most likely a problem with the game's Lua scripting. Report it in the games forum or its bug tracker. [Here](/bugs) are some hints how to so.

</div>

:::

---

*Imported from the springrts.com wiki (public domain). Original page: [FAQ:trouble](https://springrts.com/wiki/FAQ:trouble).*
