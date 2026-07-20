---
title: "3DModels:obj meta"
source_url: "https://springrts.com/wiki/3DModels:obj_meta"
categories:
  - "3D_Models"
---
# 3DModels:obj meta

<div class="mw-parser-output">

## .obj Mesh Meta Reference

so because wavefront .obj files dont contain all the required information for 3d models in spring this extra file was needed to fill in the missing pieces.

the file accompanies your mesh such that:

`objects3d/myobjmesh.obj`

`objects3d/myobjmesh.lua` (this is the meta info file)

variables are organised as such: type [VariableName](#variablename)  default: value range: \[valid range\] Required

Description

If you notice something is incorrect, fix it please!

### Source

The engine source code which reads this file is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Rendering/Models/OBJParser.cpp" class="external text" rel="nofollow">rts/Rendering/Models/OBJParser.cpp</a>

## General Formatting

check <a href="http://www.lua.org/docs.html" class="external text" rel="nofollow">Lua Documentation</a>.

## Data Types

int  
An integer number. eg. 5

float  
A number with decimals. eg 1.023

bool  
A value which can be true or false. eg true

string  
Text, or more precisely a string of alphanumeric characters. eg "string of characters"

rgb  
Three float components, representing red, green and blue components, ranged from 0.0 to 1.0. eg {0.0, 0.0, 0.0} 

float3  
Three float components, eg {0.0, 0.0, 0.0} 

float4  
Four float components, eg {0.0, 0.0, 0.0, 0.0} 

## Notes

- each model-table must define EXACTLY one root-piece in its "pieces" sub-table
- the script MUST return exactly one model-table (which may be named arbitrarily)
- the tree must reference ONLY object names defined in the .obj file
- a piece-table key may NOT be "name" or "offset" (these are reserved keywords)

## Sections

### meshname.lua

    meshname = {
        pieces = {
           ...
        },

        radius = 0,
        midpos = 0,
        tex1 = "",
        --tex2 = "",
        numpieces = 1,

        globalvertexoffset = true,
        localpieceoffset = true,
    }
    return meshname

###### meshname

name of your mesh...

float3 [midpos](#midpos)  default: ? Required

the local of the median point of the mesh from the origin

float [radius](#radius)  default: ? Required

from the midpos the radius of the mesh, used for occlusion culling

string [tex1](#tex1)  default: ? 

filename of the texture image to use for diffuse and teamcolor

string [tex2](#tex2)  default: ? 

filename of the texture image to use for ambient, specular and transparency

bool [globalvertexoffsets](#globalvertexoffsets)  default: ? 

whether the vertex coordinates are relative to the global origin, or the local origin

bool [localpieceoffsets](#localpieceoffsets)  default: ? 

whether the piece offsets are relative to the global origin, or the parent offset

### pieces

Specifies the hierarchy of objects

    meshname = {
        pieces = {
            piecename = {
                offset = {0.0, 0.0, 0.0},
                anotherpiecename = {
                    offset = {0.0, 0.0, 0.0},
                    ...
                },
                ...
            },
        },
        ...
    }
    return meshname

string [name](#name)  default: ? Required

each piece name needs to correspond to an object in the mesh file. For an .obj file it would be the "o" tag

float3 [offset](#offset)  default: ? Required

the offset of the piece vertices either in parent or world space

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [3DModels:obj meta](https://springrts.com/wiki/3DModels:obj_meta).*
