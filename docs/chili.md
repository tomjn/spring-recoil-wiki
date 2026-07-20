---
title: "Chili"
source_url: "https://springrts.com/wiki/Chili"
categories:
  - "Libraries"
---
# Chili

> **Recoil:** Spring's maintained fork documents this at [recoilengine.org](https://recoilengine.org/). Where this page and the Recoil docs disagree, prefer Recoil for current engine behaviour.

<div class="mw-parser-output">

[Wiki](/main-page) \< Chili

## Chili UI

Chili is Springs very own GUI framework. It's a flexible, class based framework which allows you to create great looking GUIs very quickly. See [Screenshots](/chili-screenshots).

### Learning Chili

- [Chili Tutorial](/chili-tutorial)
- [Examples of Chili widgets](/chili-examples)

Before working with Chili, it is strongly recommended to be familiar with using [Lua in Spring](/lua-main), in particular with writing simple widgets.

### Including Chili

- [Adding Chili to a game](/chili-adding-to-game)
- [Hiding Springs default GUI](/chili-hiding-the-default-gui)

## Documentation: Chili Component Hierarchy

The Chili framework is object orientated, and each different component is a class. The hierarchy of components, which is documented <a href="https://gajop.github.io/chiliui/index.html" class="external text" rel="nofollow">here</a>, is as follows:

    Object
    |_ Screen
    |_ Control
     |_ Button
     |_ Checkbox
     |_ ColorBars
     |_ ComboBox
     |_ EditBox
     |_ Font
     |_ Label
     |_ LayoutPanel
       |_ ImageListView
       |_ Grid
       |_ StackPanel
       |_ TabPanel
     |_ Line
     |_ Image
     |_ MultiProgressBar
     |_ Panel
     |_ ProgressBar
     |_ Scale
     |_ ScrollPanel
     |_ TextBox
     |_ TrackBar
     |_ TreeView
      |_ TreeViewNode
     |_ Window

Viewing the diagram as a tree, each component inherits from its parent in the tree. In practice, this means each component has the properties/functionality of its own type, and also of all components found upwards from it in the tree. For example, a Grid has it's own properties, but also has those of a LayoutPanel, Control and Object.

## Skinning Chili

Start with your desired `skin.lua`.

An example button skin will look like this:

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

    skin.positive_button = {
      clone     = "window";

      TileImageBK = ":cl:tech_button_bright_small_bk.png",
      TileImageFG = ":cl:tech_button_bright_small_fg.png",

      tiles = {40, 40, 40, 40}, --// tile widths: left,top,right,bottom
      padding = {10, 10, 10, 10},

      backgroundColor = {0.50, 0.50, 0.50, 0.65},
      focusColor  = {0.50, 0.50, 0.50, 0.9},
      borderColor = {0.50, 0.50, 0.50, 0.15},

      DrawControl = DrawButton,
    }

</div>

- `TileImageBK` - This image will be the background of your control. Alpha values indicate transparency, and color values you will be multiplied with `backgroundColor`

<!-- -->

- `TileImageFG` - This image will be the foreground (drawn over background) of your control. Alpha values indicate transparency, and color values you will be multiplied with `borderColor`

<!-- -->

- `tiles` - This image will be the background of your control. Alpha values indicate transparency, and color values you will be multiplied with `backgroundColor`

<!-- -->

- `padding` - This image will be the background of your control. Alpha values indicate transparency, and color values you will be multiplied with `backgroundColor`

<!-- -->

- `backgroundColor` - This image will be the background of your control. Alpha values indicate transparency, and color values you will be multiplied with `backgroundColor`

<!-- -->

- `focusColor` - This image will be the background of your control. Alpha values indicate transparency, and color values you will be multiplied with `backgroundColor`

<!-- -->

- `borderColor` - This image will be the background of your control. Alpha values indicate transparency, and color values you will be multiplied with `backgroundColor`

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Chili](https://springrts.com/wiki/Chili).*
