---
title: "Troubleshooting linux"
source_url: "https://springrts.com/wiki/Troubleshooting_linux"
categories:
  - "Linux"
---
# Troubleshooting linux

<div class="mw-parser-output">

## Linux specific Troubleshooting

### Ingame

#### Slow Mouse

Run:

    echo '# Slow fullscreen cursor fix for Spring' >> ~/.xsessionrc
    echo 'SDL_MOUSE_RELATIVE=0' >> ~/.xsessionrc
    echo 'export SDL_MOUSE_RELATIVE' >> ~/.xsessionrc

And log out and log in again.

The mouse should now be as fast as in windowed mode.

#### Rotating Buildings

You can rotate a building before you give the build order, but the keys that do this do not work in Linux by default for some users. Issue the following commands in the beginning of the game:

    /bind keycodex buildfacing inc
    /bind keycodey buildfacing dec

Keycodex and keycodey above are just placeholders. What you want to write depends on which key you want to use. To see what keycodes any keys have, do:

    /keydebug yes

And then hit the keys you want to use, and spring prints the keycodes in the message buffer.

If you want to save these keys you have to edit the uikeys.txt.

#### Problems with Audio

The engine needs at least OpenAL Soft 1.6 for its sound. If you still have the old openal-0.0.8 installed, you should update it.

Additionally, *pulseaudio* causes lots of issues, so try to disable it for spring if you have sound problems.

### Desync in game

Spring only send the commands and not the result over the network, so it needs to run all math in a repeatable manner, so all other clients in a multiplayer match get the same results. So some CPU specific features have to enabled/disabled. If you desync, you either have a CPU that is not SSE1 capable, or you set the wrong -march/-mtune compiler flags. If you compile Spring via CMake, remove *CMakeCache.txt*, and leave the march flag at the default.

## See also

- [IRC](/irc)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Troubleshooting linux](https://springrts.com/wiki/Troubleshooting_linux).*
