---
title: "Download Testing"
source_url: "https://springrts.com/wiki/Download_Testing"
categories:
  - "Development"
---
# Download Testing

<div id="spring-engine-testing-release" class="section mw-parser-output">

## Spring Engine Testing Release

Current test version: 103.0.1-1328-g882485f (02. September 2017)

### Get It

#### [SpringLobby](/springlobby)

Go to Tools-\>Download Archives, then enter

` engine:spring 103.0.1-1328-g882485f develop `

Click ok.

#### [pr-downloader](/pr-downloader)

easiest way is by using pr-downloader (which is included into spring)

` pr-downloader --download-engine "103.0.1-1328-g882485f develop" `

#### Windows

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<td><a href="/images/Distributions-windows.png"><img src="/images/Distributions-windows.png" decoding="async" width="64" height="64" alt="Distributions-windows.png" /></a></td>
<td><ul>
<li><a href="https://springrts.com/dl/buildbot/default/develop/103.0.1-1328-g882485f/win32/spring_%7Bdevelop%7D103.0.1-1328-g882485f_win32.exe" class="external text" rel="nofollow">installer</a></li>
<li><a href="https://springrts.com/dl/buildbot/default/develop/103.0.1-1328-g882485f/win32/spring_%7Bdevelop%7D103.0.1-1328-g882485f_win32-minimal-portable.7z" class="external text" rel="nofollow">portable</a> (Lobby not included)</li>
<li><a href="https://springrts.com/dl/buildbot/default/develop/103.0.1-1328-g882485f/win32/" class="external text" rel="nofollow">whole build</a></li>
</ul></td>
</tr>
</tbody>
</table>

#### Linux

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<td><a href="/images/Tux-G2.png"><img src="/images/Tux-G2.png" decoding="async" width="64" height="64" alt="Tux-G2.png" /></a></td>
<td><ol>
<li><strong>get the source</strong>
<ol>
<li>creating the repo (first time only):<br />
<code>git clone </code><a href="git://github.com/spring/spring.git" class="external free" rel="nofollow"><code>git://github.com/spring/spring.git</code></a><code> spring_src</code></li>
<li>update to latest sources:<br />
<code>cd spring_src &amp;&amp; git fetch &amp;&amp; git checkout 103.0.1-1328-g882485f</code></li>
</ol></li>
<li><strong>build</strong> by following the <a href="/building-spring-on-linux">build from source</a> guide, or in short:<br />
<code>cmake -G "Unix Makefiles" . &amp;&amp; make spring &amp;&amp; sudo make install-spring</code></li>
</ol></td>
</tr>
</tbody>
</table>

#### static builds

as alternative you can try the one of the linux static builds:

- <a href="https://springrts.com/dl/buildbot/default/develop/103.0.1-1328-g882485f/linux32/spring_%7bdevelop%7d103.0.1-1328-g882485f_minimal-portable-linux32-static.7z" class="external text" rel="nofollow">static linux build (32 bit)</a>

<!-- -->

- <a href="https://springrts.com/dl/buildbot/default/develop/103.0.1-1328-g882485f/linux64/spring_%7bdevelop%7d103.0.1-1328-g882485f_minimal-portable-linux64-static.7z" class="external text" rel="nofollow">static linux build (64 bit)</a>

#### Mac OS X

<table>
<colgroup>
<col>
<col>
</colgroup>
<tbody>
<tr>
<td><a href="/images/Distributions-mac-2.png"><img src="/images/Distributions-mac-2.png" decoding="async" width="64" height="64" alt="Distributions-mac-2.png" /></a></td>
<td><p><a href="https://springrts.com/dl/buildbot/default/develop/103.0.1-1328-g882485f/osx64/spring_%7bdevelop%7d103.0.1-1328-g882485f_MacOSX-10.6-SnowLeopard.zip" class="external text" rel="nofollow"><strong>App Bundle</strong></a> (tested on 10.6 Snow-Leopard only)</p>
<p>In case the above fails, check out <a href="/spring-on-macosx">alternative ways</a>.</p></td>
</tr>
</tbody>
</table>

### Lobby

Make sure your lobby client is configured to use the correct spring binary & unitsync! On Linux, this will usually be */usr/local/bin/spring* & */usr/local/lib/libunitsync.so*.

Use one of the test lobby servers (recommended):

- *lobby1.springlobby.info:8200*
- *lobby2.springlobby.info:8200*

Or alternatively, configure your lobby so it does not insist using the release version of the engine:

- SpringLobby: set `DisableVersionCheck=1` in *springlobby.conf*
- TASClient: press CTRL+SHIFT+F6 and enable "Ignore server version incompatibility"

### Bugs and issues

Report on <a href="https://springrts.com/mantis/" class="external text" rel="nofollow">Mantis</a>. Remember to upload [infolog.txt](/infolog.txt) if you crash!

### Changelog

For changes please look into the <a href="https://github.com/spring/spring/blob/103.0.1-1328-g882485f/doc/changelog.txt" class="external text" rel="nofollow">Change Log</a> or the <a href="https://github.com/spring/spring/compare/106.0...103.0.1-1328-g882485f" class="external text" rel="nofollow">diff log</a> for details.

See the topmost for changes to the upcoming version.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Download Testing](https://springrts.com/wiki/Download_Testing).*
