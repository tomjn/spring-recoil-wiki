---
title: "3DModels:AssimpMetadata"
source_url: "https://springrts.com/wiki/3DModels:AssimpMetadata"
categories:
  - "3D_Models"
---
# 3DModels:AssimpMetadata

<div class="mw-parser-output">

## Assimp mesh Meta Reference

You may add additional, Spring-specific information to .dae, .lwo and other assimp-supported files in this extra lua file. It's usually named after the models extension and placed at the /objects folder, next to it. For instance, for testobject.dae you'd use testobject.dae.lua.

Variables are organised as such: type [VariableName](#variablename)  default: value range: \[valid range\] Required

Description

### Source

The engine source code which reads this file is viewable here:

- <a href="https://github.com/spring/spring/blob/106.0/rts/Rendering/Models/AssParser.cpp" class="external text" rel="nofollow">rts/Rendering/Models/AssParser.cpp</a>

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

- the script MUST return exactly one model-table (which may be named arbitrarily)
- the tree must reference ONLY object names defined in the assimp file
- a piece-table key may NOT be "name" or "offset" (these are reserved keywords)

## Sections

### modelfilename.lua

    model = {
        pieces = {
           ...
        },
        radius = 0,
        midpos = { 0, 0, 0 },
        tex1 = "",
        --tex2 = "",
        numpieces = 1,

        globalvertexoffset = true,
        localpieceoffset = true,
    }
    return model

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

bool [nodenamesfromids](#nodenamesfromids)  default: false 

uses names as unique object identifiers, instead of node ids. Useful for non-Blender .dae files. New in 104 maintenance 1153-gfb53422

### pieces

Specifies the hierarchy of objects

    model = {
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
    return model

string [name](#name)  default: ? Required

each piece name needs to correspond to an object in the mesh file. For an .obj file it would be the "o" tag

float3 [offset](#offset)  default: ? 

the offset of the piece vertices either in parent or world space

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [3DModels:AssimpMetadata](https://springrts.com/wiki/3DModels:AssimpMetadata).*
