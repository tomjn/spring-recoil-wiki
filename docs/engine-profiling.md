---
title: "Engine Profiling"
source_url: "https://springrts.com/wiki/Engine_Profiling"
categories:
  - "Engine_Dev"
---
# Engine Profiling

<div class="mw-parser-output">

[Development](/development-main) \< Engine Profiling

## Engine Profiling

### Linux

#### Intro

There are several ways to profile an application.

**gprof**

The compiler injects special code in the binary that self profiles it when it runs. this is what `cmake -DCMAKE_BUILD_TYPE=PROFILING` is here for. We are not going to use this. It does not interfere with normal program's work-flow. With spring, it gets so slow that it is unusable for profiling anything in late game (which is where it is needed the most). It requires special compiling options.

**oprof**

OProfile uses statistical sampling. It is a kernel module, which every n clock ticks, registers which function is currently being processed. It is lightweight; it may run with almost 0 performance impact. This method always profiles your profiles your whole system; relevant info has to be filtered out after the profiling run has finished. The downside of statistical profiling, is that it requires at least a certain sample size to achieve good accuracy. Also remember, that *oprof* still requires the debug symbols, to resolve addresses into function names. It can be turned on/off at any time, so for instance, you may skip spring loading so you would only profile in-game runtime. You can also merge multiple profiling sessions.

**perf**

Powerful and lightweight Linux performance profiler based on perf events. Part of linux kernel from version 2.6.31.

#### Setting up *oprof*

Required stuff:

- *oprof* kernel module
- *oprof* package

#### Using *oprof*

|  |
|----|
| Note: Modern CPUs have special statistical sampling timing functions to make profiling with software like *oprof* fast. |

You will have to load the kernel module. The profiling daemon is controlled using *opcontrol* as root. As regular user, you can do post-processing using *opreport*.

**Recommended settings**

- use a call-graph depth of size 16
- disable kernel profiling & enable user-space profiling
- separate each application in its own profile
- separate each thread in its own profile; you can always merge them later, using *opreport*

**A typical profiling session**

    # We need to be root
    su -

    # In case the kernel module is not already loaded ...
    modprobe -v oprofile

    # This has to be sent only once; it will be saved
    opcontrol --event=CPU_CLK_UNHALTED:1000000:0x0:0:1 \
              --callgraph=16 \
              --separate=thread,library \
              --no-vmlinux

    # -- Bring spring into a state where you want to start profiling --

    # start the profiler
    opcontrol --start

    # -- In spring, do whatever you want to profile --

    # stop the profiler
    opcontrol --stop

    # in order to make the profile data available to user-space,
    # you have to dump the data
    opcontrol --dump

#### Post processing *oprof* data

[<img src="/images/Oprof_engine_part.png" decoding="async" alt="Oprof engine part.png" />](/images/Oprof_engine_part.png)

We will first explain the post processing steps, and then give a script that should work for most general spring profiling tasks.

**Extract the data**

The data is now stored in *oprofile*s cache, and we need to extract the parts of it that we are interested in, and write them to a file. With the settings we used above, *oprofile* indexes stuff by thread- and process-ID. In order to generate a report, we will have to tell which program, which threads and which sampling sessions to include. If you do not care much, you can just merge thread data and sampling data, as we do here too.

**Converting the data file to a dot-graph file**

<a href="https://code.google.com/p/jrfonseca/wiki/Gprof2Dot" class="external text" rel="nofollow">gprof2dot</a> takes *oprof* data and outputs a nice dot-graph. We use it to generate the dot graph out of *oprofile*s `--callgraph` version.

**Finalizing (Creating an image out of the graph file)**

Then you can either use <a href="https://code.google.com/p/jrfonseca/wiki/XDot" class="external text" rel="nofollow">XDot</a> to view it directly, or create an image out of the graph file. We will use <a href="http://www.graphviz.org/" class="external text" rel="nofollow">GraphViz</a>'s *dot* utility to render to an image.

**Post Processing Script**

    #!/bin/bash

    SPRING_INSTALL_PATH=$(dirname $(which spring))
    BIN_ENGINE=${SPRING_INSTALL_PATH}/spring
    BIN_AIS=$(ls ${SPRING_INSTALL_PATH}/AI/Skirmish/*/*/libSkirmishAI.so)

    SETTINGS_CREATE_TABLE=0
    SETTINGS_CREATE_CALLGRAPH=1
    SETTINGS_CREATE_PNG=1
    SETTINGS_CREATE_SVG=1
    SETTINGS_CLEANUP=1

    function profileBins() {
        BASE_OUT_FILE_PATH=$1
        MY_BINARIES="$2"

        # extract relevant oprof data as table
        if [ ${SETTINGS_CREATE_TABLE} == 1 ]; then
            opreport \
                    --long-filenames \
                    --demangle=smart \
                    --merge=tid,tgid \
                    --symbols ${MY_BINARIES} \
                    --output-file ${BASE_OUT_FILE_PATH}.txt
        fi

        if [ ${SETTINGS_CREATE_CALLGRAPH} == 1 ]; then
            # extract relevant oprof data as callgraph
            opreport \
                    --long-filenames \
                    --callgraph \
                    --demangle=smart \
                    --merge=tid,tgid \
                    --symbols ${MY_BINARIES} \
                    --output-file ${BASE_OUT_FILE_PATH}.oprof

            # create graph file
            gprof2dot --format=oprofile --output=${BASE_OUT_FILE_PATH}.dot ${BASE_OUT_FILE_PATH}.oprof

            # create images
            if [ ${SETTINGS_CREATE_PNG} == 1 ]; then
                dot -Tpng ${BASE_OUT_FILE_PATH}.dot > ${BASE_OUT_FILE_PATH}.png
            fi
            if [ ${SETTINGS_CREATE_SVG} == 1 ]; then
                dot -Tsvg ${BASE_OUT_FILE_PATH}.dot > ${BASE_OUT_FILE_PATH}.svg
            fi
            # ... likewise for other formats

            if [ ${SETTINGS_CLEANUP} == 1 ]; then
                rm ${BASE_OUT_FILE_PATH}.oprof
                rm ${BASE_OUT_FILE_PATH}.dot
            fi
        fi
    }

    #profileBins ./profiling_engine         "${BIN_ENGINE}"
    profileBins ./profiling_ais            "${BIN_AIS}"
    profileBins ./profiling_engine_and_ais "${BIN_ENGINE} ${BIN_AIS}"

This will leave you with these graph files:

    ./profiling_ais.png
    ./profiling_ais.svg
    ./profiling_engine_and_ais.png
    ./profiling_engine_and_ais.svg

#### Using *perf*

**Setup**

For ubuntu install linux-tools-common using apt-get. In fedora the package's name is perf. Make sure `/proc/sys/kernel/kptr_restrict` contains value **0**

**Useful commands**

- perf top - shows statistics in real time
- perf record - save statistics to file for further insight
- perf report - read previously generated data
- perf diff a.data b.data - show differences between two report files

**Example**

- Get data of running spring proccess for 10 seconds. Pay attention to frequency parameter -F. At this rate the output takes about 17 mb of space. Parameter call-graph dwarf unwinds the stack even when frame pointer optimization is on.

`perf record -F 99 -p PID_NUMBER -o my_output1.data --call-graph dwarf sleep 10`

- Read the report. Press / and type symbol to narrow list to e.g "air"

`perf report -i my_output1.data -g`

      Children      Self  Command  Shared  Symbol                                                                                   
    +  132.33%    29.15%  unknown  spring  [.] CStrafeAirMoveType::Update
    +   71.36%     3.35%  unknown  spring  [.] CStrafeAirMoveType::UpdateFlying
    +   52.01%    32.48%  unknown  spring  [.] CStrafeAirMoveType::UpdateAirPhysics
    +   36.42%     0.00%  unknown  spring  [.] CAirCAI::ExecuteFight
        34.50%    12.55%  unknown  spring  [.] CommandDrawer::DrawAirCAICommands
    +   32.11%     0.00%  unknown  spring  [.] CStrafeAirMoveType::UpdateLanding
        26.65%    12.90%  unknown  spring  [.] CGameHelper::GetClosestEnemyAircraft
        16.73%     0.00%  unknown  spring  [.] CAirCAI::GiveCommandReal
        15.91%     0.00%  unknown  spring  [.] CStrafeAirMoveType::FindLandingPos
        15.91%     6.42%  unknown  spring  [.] CStrafeAirMoveType::BrakingDistance
         9.82%     0.00%  unknown  spring  [.] CAirCAI::AirAutoGenerateTarget
         9.82%     0.00%  unknown  spring  [.] CAirCAI::SlowUpdate
         3.28%     0.00%  unknown  spring  [.] CAirCAI::ExecuteMove
         3.26%     0.00%  unknown  spring  [.] CStrafeAirMoveType::HandleCollisions
         3.17%     3.17%  unknown  spring  [.] AAirMoveType::UseSmoothMesh                                                

**Flamegraph**

- `perf script -i a.data | ./stackcollapse-perf.pl > out.perf-folded` - convert perf stacks data to text representation
- `./flamegraph.pl out.perf-folded > my_idle_air.svg` - create flamegraph from perf data

or

- `grep -i air out.perf-folded | ./flamegraph.pl > my_idle_air.svg` - same as above, but it ignores stacks that do not contain "air" in symbol names

[<img src="/images/Flamegraph-grepped-example.png" decoding="async" width="1200" height="594" alt="flamegraph-grepped-example.png" />](/images/Flamegraph-grepped-example.png)

**Links**

<a href="https://perf.wiki.kernel.org/index.php/Tutorial" class="external text" rel="nofollow">perf kernel wiki tutorial</a>

<a href="http://www.brendangregg.com/perf.html" class="external text" rel="nofollow">perf examples by Brendan Gregg</a>

<a href="https://eclipse.org/linuxtools/projectPages/perf/" class="external text" rel="nofollow">Eclipse perf plugin</a>

<a href="https://github.com/brendangregg/FlameGraph" class="external text" rel="nofollow">Flamegraph</a>

### Windows

\<Please add\>

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Engine Profiling](https://springrts.com/wiki/Engine_Profiling).*
