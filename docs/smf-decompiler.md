---
title: "Smf decompiler"
source_url: "https://springrts.com/wiki/Smf_decompiler"
categories:
  - "Map_Tools"
---
# Smf decompiler

<div class="mw-parser-output">

This simple python2.x script will decompile fully decompile a map, outputs features, raw heightmap, texture, typemap, metal map, grass map, elevations, texturemap, minimap.

    #!/usr/bin/python
    # PD license by Beherith
    import sys
    import struct
    import Image

    print 'Welcome to the SMF decompiler by Beherith (mysterme@gmail.com). Place this script next to the .smf file and pass the .smf as a command line argument to this script to get it decompiled'

    if len(sys.argv)>1:
        print 'Working on:',sys.argv[1]
    else:
        exit(1)
    SMFHeader_struct= struct.Struct('< 16s i i i i i i i f f i i i i i i i')
    ''' char magic[16];      ///< "spring map file\0"
        int version;         ///< Must be 1 for now
        int mapid;           ///< Sort of a GUID of the file, just set to a random value when writing a map

        int mapx;            ///< Must be divisible by 128
        int mapy;            ///< Must be divisible by 128
        int squareSize;      ///< Distance between vertices. Must be 8
        int texelPerSquare;  ///< Number of texels per square, must be 8 for now
        int tilesize;        ///< Number of texels in a tile, must be 32 for now
        float minHeight;     ///< Height value that 0 in the heightmap corresponds to    
        float maxHeight;     ///< Height value that 0xffff in the heightmap corresponds to

        int heightmapPtr;    ///< File offset to elevation data (short int[(mapy+1)*(mapx+1)])
        int typeMapPtr;      ///< File offset to typedata (unsigned char[mapy/2 * mapx/2])
        int tilesPtr;        ///< File offset to tile data (see MapTileHeader)
        int minimapPtr;      ///< File offset to minimap (always 1024*1024 dxt1 compresed data plus 8 mipmap sublevels)
        int metalmapPtr;     ///< File offset to metalmap (unsigned char[mapx/2 * mapy/2])
        int featurePtr;      ///< File offset to feature data (see MapFeatureHeader)

        int numExtraHeaders; ///< Numbers of extra headers following main header
    '''
    ExtraHeader_struct= struct.Struct('< i i i')
    ''' int size; ///< Size of extra header
        int type; ///< Type of extra header
        int extraoffset ; //MISSING FROM DOCS, only exists if type=1 (vegmap)'''
    MapTileHeader_struct=struct.Struct('< i i')
    ''' int numTileFiles; ///< Number of tile files to read in (usually 1)
        int numTiles;     ///< Total number of tiles'''
    MapFeatureHeader_struct=struct.Struct('< i i')
    ''' int numFeatureType;
        int numFeatures;'''
        
    MapFeatureStruct_struct=struct.Struct('< i f f f f f')
    '''int featureType;    ///< Index to one of the strings above
        float xpos;         ///< X coordinate of the feature
        float ypos;         ///< Y coordinate of the feature (height)
        float zpos;         ///< Z coordinate of the feature

        float rotation;     ///< Orientation of this feature (-32768..32767 for full circle)
        float relativeSize; ///< Not used at the moment keep 1'''
    TileFileHeader_struct =struct.Struct('< 16s i i i i')
    ''' char magic[16];      ///< "spring tilefile\0"
        int version;         ///< Must be 1 for now

        int numTiles;        ///< Total number of tiles in this file
        int tileSize;        ///< Must be 32 for now
        int compressionType; ///< Must be 1 (= dxt1) for now'''
        

    _S3OHeader_struct = struct.Struct("< 12s i 5f 4i")
    _S3OPiece_struct = struct.Struct("< 10i 3f")
    _S3OVertex_struct = struct.Struct("< 3f 3f 2f")
    _S3OChildOffset_struct = struct.Struct("< i")
    _S3OIndex_struct = struct.Struct("< i")

    SMALL_TILE_SIZE=680
    MINIMAP_SIZE=699048
    def pythonDecodeDXT1(data):# Python-only DXT1 decoder; this is slow!
        # input: one "row" of data (i.e. will produce 4*width pixels)
        blocks = len(data) / 8  # number of blocks in row
        out = ['', '', '', '']  # row accumulators

        for xb in xrange(blocks):
            # Decode next 8-byte block.        
            c0, c1, bits = struct.unpack('<HHI', data[xb*8:xb*8+8])
            # print c0,c1,bits
            # color 0, packed 5-6-5
            b0 = (c0 & 0x1f) << 3
            g0 = ((c0 >> 5) & 0x3f) << 2
            r0 = ((c0 >> 11) & 0x1f) << 3
            
            # color 1, packed 5-6-5
            b1 = (c1 & 0x1f) << 3
            g1 = ((c1 >> 5) & 0x3f) << 2
            r1 = ((c1 >> 11) & 0x1f) << 3

            # Decode this block into 4x4 pixels
            # Accumulate the results onto our 4 row accumulators
            for yo in xrange(4):
                for xo in xrange(4):
                    # get next control op and generate a pixel
                    
                    control = bits & 3
                    bits = bits >> 2
                    if control == 0:
                        out[yo] += chr(r0) + chr(g0) + chr(b0)
                    elif control == 1:
                        out[yo] += chr(r1) + chr(g1) + chr(b1)
                    elif control == 2:                                
                        if c0 > c1:
                            out[yo] += chr((2 * r0 + r1 + 1) / 3) + chr((2 * g0 + g1 + 1) / 3) + chr((2 * b0 + b1 + 1) / 3)
                        else:
                            out[yo] += chr((r0 + r1) / 2) + chr((g0 + g1) / 2) + chr((b0 + b1) / 2)
                    elif control == 3:
                        if c0 > c1:
                            out[yo] += chr((2 * r1 + r0 + 1) / 3) + chr((2 * g1 + g0 + 1) / 3) + chr((2 * b1 + b0 + 1) / 3)
                        else:
                            out[yo] += '\0\0\0'

        # All done.
        return out
        
    def unpack_null_terminated_string(data, offset):
        result=''
        nextchar = 'X'
        while True:
            nextchar=struct.unpack_from('c',data,offset+len(result))[0]
            if nextchar=='\0':
                return result
            else:
                result+=nextchar
            if len(result)>10000:
                return result

    class SMFMap:
        def __init__(self,filename):
            self.filename=filename
            self.basename=filename.rpartition('.')[0]
            self.smffile=open(filename,'rb').read()
            self.SMFHeader= SMFHeader_struct.unpack_from(self.smffile, 0)
            
            self.magic=self.SMFHeader[0]#;      ///< "spring map file\0"
            self.version=self.SMFHeader[1]#;         ///< Must be 1 for now
            self.mapid=self.SMFHeader[2]#;           ///< Sort of a GUID of the file, just set to a random value when writing a map

            self.mapx=self.SMFHeader[3]#;            ///< Must be divisible by 128
            self.mapy=self.SMFHeader[4]#;            ///< Must be divisible by 128
            self.squareSize=self.SMFHeader[5]#;      ///< Distance between vertices. Must be 8
            self.texelPerSquare=self.SMFHeader[6]#;  ///< Number of texels per square, must be 8 for now
            self.tilesize=self.SMFHeader[7]#;        ///< Number of texels in a tile, must be 32 for now
            self.minHeight=self.SMFHeader[8]#;     ///< Height value that 0 in the heightmap corresponds to  
            self.maxHeight=self.SMFHeader[9]#;     ///< Height value that 0xffff in the heightmap corresponds to

            self.heightmapPtr=self.SMFHeader[10]#;    ///< File offset to elevation data (short int[(mapy+1)*(mapx+1)])
            self.typeMapPtr=self.SMFHeader[11]#;      ///< File offset to typedata (unsigned char[mapy/2 * mapx/2])
            self.tilesPtr=self.SMFHeader[12]#;        ///< File offset to tile data (see MapTileHeader)
            self.minimapPtr=self.SMFHeader[13]#;      ///< File offset to minimap (always 1024*1024 dxt1 compresed data plus 8 mipmap sublevels)
            self.metalmapPtr=self.SMFHeader[14]#;     ///< File offset to metalmap (unsigned char[mapx/2 * mapy/2])
            self.featurePtr=self.SMFHeader[15]#;      ///< File offset to feature data (see MapFeatureHeader)

            self.numExtraHeaders=self.SMFHeader[16]#; ///< Numbers of extra headers following main header'''
            
            print 'Writing heightmap RAW (Remember, this is a %i by %i 16bit 1 channel IBM byte order raw!)'%((1+self.mapx),(1+self.mapy))
            self.heightmap=struct.unpack_from('< %iH'%((1+self.mapx)*(1+self.mapy)),self.smffile,self.heightmapPtr)
            heightmap_file=open(self.basename+'_height.raw','wb')
            for pixel in self.heightmap:
                heightmap_file.write(struct.pack('< H',pixel))
            heightmap_file.close()
            heightmap_img=Image.new('RGB',(1+self.mapx,1+self.mapy),'black')
            heightmap_img_pixels=heightmap_img.load()
            for x in range(heightmap_img.size[0]):
                for y in range(heightmap_img.size[1]):
                    height=self.heightmap[(heightmap_img.size[0])*y+x]/256
                    heightmap_img_pixels[x,y]=(height,height,height)
            heightmap_img.save(self.basename+'_height.bmp')
                    
            print 'Writing MetalMap'
            self.metalmap= struct.unpack_from('< %iB'%((self.mapx/2)*(self.mapy/2)),self.smffile,self.metalmapPtr)
            metalmap_img=Image.new('RGB',(self.mapx/2,self.mapy/2),'black')
            metalmap_img_pixels=metalmap_img.load()
            for x in range(metalmap_img.size[0]):
                for y in range(metalmap_img.size[1]):
                    metal=self.metalmap[(metalmap_img.size[0])*y+x]
                    metalmap_img_pixels[x,y]=(metal,0,0)
            metalmap_img.save(self.basename+'_metal.bmp')
            
            print 'Writing typemap'
            self.typemap=  struct.unpack_from('< %iB'%((self.mapx/2)*(self.mapy/2)),self.smffile,self.typeMapPtr)
            typemap_img=Image.new('RGB',(self.mapx/2,self.mapy/2),'black')
            typemap_img_pixels=typemap_img.load()
            for x in range(typemap_img.size[0]):
                for y in range(typemap_img.size[1]):
                    type=self.typemap[(typemap_img.size[0])*y+x]
                    typemap_img_pixels[x,y]=(type,0,0)
            typemap_img.save(self.basename+'_type.bmp')
        
            print 'Writing minimap'
            miniddsheaderstr=([68, 68, 83, 32, 124, 0, 0, 0, 7, 16, 10, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 
            11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 4, 0, 0, 0, 68, 88, 84, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 8, 16, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
            self.minimap=self.smffile[self.minimapPtr:self.minimapPtr+MINIMAP_SIZE]
            minimap_file=open(self.basename+'_mini.dds','wb')
            for c in miniddsheaderstr:
                minimap_file.write(struct.pack('< B',c))
            minimap_file.write(self.minimap)
            minimap_file.close()
            
            print 'Writing grassmap'
            vegmapoffset = SMFHeader_struct.size+ExtraHeader_struct.size+4
            for extraheader_index in range(self.numExtraHeaders):
                extraheader = ExtraHeader_struct.unpack_from(self.smffile,extraheader_index*ExtraHeader_struct.size+SMFHeader_struct.size)
                extraheader_size,extraheader_type,extraoffset =extraheader
                # print 'ExtraHeader',extraheader
                if extraheader_type==1: #grass
                    # self.grassmap=struct.unpack_from('< %iB'%((self.mapx/4)*(self.mapy/4)),self.smffile,ExtraHeader_struct.size+SMFHeader_struct.size+extraheader_size)
                    self.grassmap=struct.unpack_from('< %iB'%((self.mapx/4)*(self.mapy/4)),self.smffile,extraoffset)
                    grassmap_img=Image.new('RGB',(self.mapx/4,self.mapy/4),'black')
                    grassmap_img_pixels=grassmap_img.load()
                    for x in range(grassmap_img.size[0]):
                        for y in range(grassmap_img.size[1]):
                            grass=self.grassmap[(grassmap_img.size[0])*y+x]
                            if grass==1:
                                grass = 255
                            else:
                                grass = 0
                            grassmap_img_pixels[x,y]=(grass,grass,grass)
                    grassmap_img.save(self.basename+'_grass.bmp')

            
            #MapFeatureHeader is followed by numFeatureType zero terminated strings indicating the names
            #of the features in the map. Then follow numFeatures MapFeatureStructs.
            self.mapfeaturesheader = MapFeatureHeader_struct.unpack_from(self.smffile,self.featurePtr)
            self.numFeatureType,self.numFeatures=self.mapfeaturesheader
            self.featurenames=[]
            featureoffset = self.featurePtr + MapFeatureHeader_struct.size
            while len(self.featurenames)<self.numFeatureType:
                featurename = unpack_null_terminated_string(self.smffile,featureoffset)
                self.featurenames.append(featurename)
                featureoffset+=len(featurename)+1 #cause of null terminator
                # print featurename
                '''nextchar= 'N'
                while nextchar != '\0':
                    nextchar=struct.unpack_from('c',self.smffile,len(featurename)+self.featurePtr+MapFeatureHeader_struct.size
                        +sum([len(fname)+1 for fname in self.featurenames]))[0]
                    if nextchar =='\0':
                        self.featurenames.append(featurename)
                        featurename=''
                    else:
                        featurename+=nextchar'''
                        
            print 'Features found in map definition',self.featurenames
            feature_offset=self.featurePtr+MapFeatureHeader_struct.size+sum([len(fname)+1 for fname in self.featurenames])
            self.features=[]
            for feature_index in range(self.numFeatures):
                feat= MapFeatureStruct_struct.unpack_from(self.smffile,feature_offset+MapFeatureStruct_struct.size*feature_index)
                # print feat
                self.features.append({'name':self.featurenames[feat[0]],'x':feat[1],'y':feat[2],'z':feat[3],'rotation':feat[4],'relativeSize':feat[5],})
                # print self.features[-1]
            print 'Writing feature placement file'
            feature_file=open(self.basename+'_featureplacement.lua','w')
            for feature in self.features:
                feature_file.write('{ name = \'%s\', x = %i, z = %i, rot = "%i" ,scale = %f },\n'%(feature['name'],feature['x'],feature['z'],feature['rotation'],feature['relativeSize']))
            feature_file.close()
            
            print 'loading tile files'
            self.maptileheader=MapTileHeader_struct.unpack_from(self.smffile,self.tilesPtr)
            self.numtilefiles,self.numtiles=self.maptileheader
            self.tilefiles=[]
            tileoffset=self.tilesPtr+MapTileHeader_struct.size
            for i in range(self.numtilefiles):
                numtilesinfile=struct.unpack_from('< i',self.smffile,tileoffset)[0]
                tileoffset+=4 #sizeof(int)
                tilefilename=unpack_null_terminated_string(self.smffile,tileoffset)
                tileoffset+=len(tilefilename)+1 #cause of null terminator
                self.tilefiles.append([tilefilename,numtilesinfile,open(tilefilename,'rb').read()])
                print tilefilename, 'has',numtilesinfile,'tiles'
            self.tileindices=struct.unpack_from('< %ii'%((self.mapx/4)*(self.mapy/4)),self.smffile,tileoffset)
                
            
            self.tiles=[]
            for tilefile in self.tilefiles:
                tileFileHeader = TileFileHeader_struct.unpack_from(tilefile[2],0)
                magic,version,numTiles,tileSize,compressionType=tileFileHeader
                #print tilefile[0],': magic,version,numTiles,tileSize,compressionType',magic,version,numTiles,tileSize,compressionType
                for i in range(numTiles):
                    self.tiles.append(struct.unpack_from('< %is'%(SMALL_TILE_SIZE),tilefile[2], TileFileHeader_struct.size+i*SMALL_TILE_SIZE)[0])
                
                
            
            print 'Generating texture, this is very very slow (few minutes)'
            textureimage=Image.new('RGB',(self.mapx*8,self.mapy*8),'black')
            textureimagepixels=textureimage.load()
            for ty in range(self.mapy/4):
                # print 'row',ty
                for tx in range(self.mapx/4):
                    currtile=self.tiles[self.tileindices[(self.mapx/4)*ty+tx]]
                    # print 'Tile',(self.mapx/4)*ty+tx
                    #one tile is 32x32, and pythonDecodeDXT1 will need one 'row' of data, assume this is 8*8 bytes
                    for rows in xrange(8):
                        # print "currtile",currtile
                        dxdata=currtile[rows*64:(rows+1)*64]
                        # print len(dxdata),dxdata
                        dxtrows=pythonDecodeDXT1(dxdata) #decode in 8 block chunks
                        for x in xrange(tx*32,(tx+1)*32):
                            for y in xrange(ty*32+4*rows,ty*32+4+4*rows):
                                # print rows, tx,ty,x,y
                                # print dxtrows
                                oy=(ty*32+4*rows)
                                textureimagepixels[x,y]=(ord(dxtrows[y-oy][3*(x-tx*32) +0]),ord(dxtrows[y-oy][3*(x-tx*32) +1]),ord(dxtrows[y-oy][3*(x-tx*32) +2]))
            textureimage.save(self.basename+'_texture.bmp')
            print 'Done, one final bit of important info: the maps maxheight is %i, while the minheight is %i'%(self.maxHeight,self.minHeight)
    mymap = SMFMap(sys.argv[1])

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Smf decompiler](https://springrts.com/wiki/Smf_decompiler).*
