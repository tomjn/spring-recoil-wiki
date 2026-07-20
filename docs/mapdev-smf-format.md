---
title: "Mapdev:SMF format"
source_url: "https://springrts.com/wiki/Mapdev:SMF_format"
categories:
  - "Map_Dev"
---
# Mapdev:SMF format

<div id="smfspring-map-file-reference" class="section mw-parser-output">

## SMF(Spring Map File) Reference

SMF is a binary format

- <a href="https://github.com/spring/spring/blob/2e5bc43dc464ec27d6b880d105f0c618e07c4ff8/rts/Map/SMF/mapfile.h" class="external text" rel="nofollow">mapfile.h</a>
- <a href="https://github.com/spring/spring/blob/2e5bc43dc464ec27d6b880d105f0c618e07c4ff8/rts/Map/SMF/SmfMapFile.cpp" class="external text" rel="nofollow">SmfMapFile.cpp</a>

### File location

maparchive.sd7/maps/mymapname.smf

### Data Map

- smu = spring map unit, the size you see when in the lobby. roughly between 2 and 64.

|       |                |                                      |
|-------|----------------|--------------------------------------|
| Bytes | Type           | Description                          |
| 16    | `char[]`       | Magic number; "spring map file\0"    |
| 4     | `int`          | Version number; "1"                  |
| 4     | `unsigned int` | ID, should be as unique as possible. |
| 4     | `int`          | Width; smu \* 64                     |
| 4     | `int`          | Length; smu \* 64                    |
| 4     | `int`          | Square size; 8                       |
| 4     | `int`          | Texels per square size; 8            |
| 4     | `int`          | Tile size; 32                        |
| 4     | `float`        | Depth/min height; 512 = 1\*smu       |
| 4     | `float`        | Height/max height; 512 = 1\*smu      |
| 4     | `int`          | Byte offset to start of height map   |
| 4     | `int`          | Byte offset to start of type map     |
| 4     | `int`          | Byte offset to start of tile index   |
| 4     | `int`          | Byte offset to start of mini map     |
| 4     | `int`          | Byte offset to start of metal map    |
| 4     | `int`          | Byte offset to start of features map |
| 4     | `int`          | No of extra headers                  |

Header {.wikitable width="100%"}

|       |       |                    |
|-------|-------|--------------------|
| Bytes | Type  | Description        |
| 4     | `int` | Size of the header |
| 4     | `int` | Type of header     |
| \*    | \*    | Data of header     |

+ Extra Headers {.wikitable width="100%"}

- 
- 
- 

|                       |                    |                      |
|-----------------------|--------------------|----------------------|
| Bytes                 | Type               | Description          |
| (width+1)\*(length+1) | `unsigned short[]` | Data for height map. |

+ Height Map {.wikitable width="100%"}

|                       |          |                    |
|-----------------------|----------|--------------------|
| Bytes                 | Type     | Description        |
| (width/2)\*(length/2) | `char[]` | Data for type map. |

+ Type Map {.wikitable width="100%"}

|        |          |                                      |
|--------|----------|--------------------------------------|
| Bytes  | Type     | Description                          |
| 699048 | `char[]` | raw DXT1 compressed 1024x1024 image. |

+ Mini Map {.wikitable width="100%"}

|       |       |                                     |
|-------|-------|-------------------------------------|
| Bytes | Type  | Description                         |
| 4     | `int` | Number of tile files                |
| 4     | `int` | Total number of tiles in all files. |

+ Tile Index Header {.wikitable width="100%"}

|                  |          |                              |
|------------------|----------|------------------------------|
| Bytes            | Type     | Description                  |
| 4                | `int`    | Number of tiles in this file |
| size of filename | `char[]` | The filename of the smt.     |

+ SMT File Infos {.wikitable width="100%"}

- 
- 
- 

|                             |         |                                 |
|-----------------------------|---------|---------------------------------|
| Bytes                       | Type    | Description                     |
| (width / 4) \* (length / 4) | `int[]` | Index numbers of tiles in SMT's |

+ Tile Index {.wikitable width="100%"}

|                             |          |               |
|-----------------------------|----------|---------------|
| Bytes                       | Type     | Description   |
| (width / 2) \* (length / 2) | `char[]` | Metal Density |

+ Metal Map {.wikitable width="100%"}

|       |          |                                         |
|-------|----------|-----------------------------------------|
| Bytes | Type     | Description                             |
| 4     | `int`    | Number of features                      |
| 4     | `int`    | Number of feature types                 |
| \*    | `char[]` | List of feature names delimited by null |

+ Features Header {.wikitable width="100%"}

|       |         |                                                      |
|-------|---------|------------------------------------------------------|
| Bytes | Type    | Description                                          |
| 4     | `int`   | Type of feature, corresponds with feature name list. |
| 4     | `float` | X Position (along the width of the map)              |
| 4     | `float` | Y Position (Up into the sky)                         |
| 4     | `float` | Z Position (along the length of the map)             |
| 4     | `float` | rotation, not sure of scale                          |
| 4     | `float` | relative size (not implemented); 1                   |

+ Features {.wikitable width="100%"}

- 
- 
- 

### Optional Extra Headers & data

|       |       |                                       |
|-------|-------|---------------------------------------|
| Bytes | Type  | Description                           |
| 4     | `int` | Size of the header; 12                |
| 4     | `int` | Type of header; 1                     |
| 4     | `int` | Byte offset to beginning of grass map |

+ Grass Extra header {.wikitable width="100%"}

|  |  |  |
|----|----|----|
| (width / 4) \* (length / 4) | `unsigned char` | Map defining the grass on the map. not sure what 256 available values mean. |

+ Grass Data {.wikitable width="100%"}

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Mapdev:SMF format](https://springrts.com/wiki/Mapdev:SMF_format).*
