---
title: "GetTextHeight"
source_url: "https://springrts.com/wiki/GetTextHeight"
categories:
  - "Lua"
---
# GetTextHeight

<div class="mw-parser-output">

[Development](/development-main) \< [Lua Scripting](/lua-main) \< GetTextHeight

## GetTextHeight() Illustrations

note: the returned heights are normalized, so you need to multiply them with your wanted fontSize

**GetTextHeight**

     ( string singlelined_text ) -> number textHeight, number textDescender, number num_lines=1

[<img src="/images/Gettextheight_singleline.png" decoding="async" width="700" height="147" alt="Gettextheight singleline.png" />](/images/Gettextheight_singleline.png)

**GetTextHeight**

     ( string multilined_text ) -> number textHeight, number textDescender, number num_lines

[<img src="/images/Gettextheight_multiline.png" decoding="async" width="700" height="422" alt="Gettextheight multiline.png" />](/images/Gettextheight_multiline.png)

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [GetTextHeight](https://springrts.com/wiki/GetTextHeight).*
