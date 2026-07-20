---
title: "Chili:Tutorial"
source_url: "https://springrts.com/wiki/Chili:Tutorial"
categories:
  - "Libraries"
  - "Tutorial"
---
# Chili:Tutorial

<div class="mw-parser-output">

[Wiki](/main-page) \< [Chili](/chili) \< Chili Tutorial

## The Basics

In Chili, every element of the GUI has properties that control how it looks, and functions it can call when special events (such as a double click, or mouseover) affect it.

To use Chili inside a Lua widget, your `widget:Initialize` function should include the following code:

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

      function widget:Initialize()
        Chili = WG.Chili
        Screen0 = Chili.Screen0
      end

</div>

Now, `Chili` is your route to creating new GUI elements, and `Screen0` is the screen in which you add them.

## Creating a Chili Component

To create a Chili component, you use its `New` function, for example:

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

      Chili.Window:New{parent=Screen0, width='20%', height='20%'}

</div>

This creates a square window, taking up 1/5th of the screen. See the [Hello World](/chili-example-hello-world) example for how to fit this code into a Chili widget.

If you forget to include `parent=Screen0`, your window will exist, but it won't be drawn anywhere. This is the instruction that tells Chili that you want your component to appear inside Screen0 - your screen.

If you look at the properties of a <a href="http://gajop.github.io/chiliui/modules/controls.window.html" class="external text" rel="nofollow">Window</a>, you won't find any. But, Window inherits from <a href="http://gajop.github.io/chiliui/modules/controls.control.html" class="external text" rel="nofollow">Control</a> - this means that a Window also has all the properties that a Control has. By looking at the properties of Control you can see that a Window actually has many options. Any properties that you don't specify are set to their default values.

The hierarchy of inheritance for all Chili objects can be found [here](/chili#documentation-chili-component-hierarchy).

## Modifying components

Once a component exists you can modify its properties, whenever you like. When you do so, Chili will react and automatically change how the component is drawn. For example,

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

      local myWindow = Chili.Window:New{parent=Screen0, width='20%', height='20%'}
      myWindow.x = 100
      myWindow.y = 100

</div>

results in the window above being placed on the screen at (100,100).

Many properties, such as x and y can be modified directly as though the component was a Lua table. Sometimes there are also functions to help you, for example in the properties of a <a href="http://gajop.github.io/chiliui/modules/controls.checkbox.html" class="external text" rel="nofollow">CheckBox</a> you can find a `Toggle()` function, which you would call as `myCheckBox:Toggle()`

## Making a GUI from multiple components

Components can have children. Child components are placed inside of their parent components (and are drawn in front of it). The x-y coords, width, height, etc, of a component are relative to the area covered by its parent component.

For example:

<div class="mw-highlight mw-highlight-lang-lua mw-content-ltr" dir="ltr">

      window = Chili.Window:New{parent = Screen0,   x='25%', y='25%', width='50%', height='50%'}
      textBox = Chili.TextBox:New{parent = window,  x='10%', y='10%', width='80%', height='30%', text="Is the sky blue?"}
      yesButton = Chili.Button:New{parent = window, x='10%', y='60%', width='30%', height='30%', caption="Yes"}
      noButton = Chili.Button:New{parent = window,  x='60%', y='60%', width='30%', height='30%', caption="No"}

</div>

draws a Window in the center of the screen, containing a TextBox with the words "Is the sky blue?", and two clickable Buttons, for yes and no. It looks like

(TODO: picture).

See the [example widgets](/chili-examples) page for how to make stuff happen when the buttons are clicked.

## Children and Showing/Hiding

A component is drawn only when it is a child of another component that is drawn. Screen0 is a component of type <a href="http://gajop.github.io/chiliui/modules/controls.screen.html" class="external text" rel="nofollow">Screen</a>, and is always drawn, by default. A component that has no parent will never be drawn; it is said to be orphaned.

In a GUI, it's common to want components to sometimes be visible and sometimes be hidden. You can control this in two ways.

- Every component has Show() and Hide() functions, e.g. `myWindow:Hide()`
- Components can be orphaned/reattached to their parent.

Of course, Show() will only cause a component to be drawn if it is not orphaned.

There are many ways to specify (and change!) which components are children of which other components.

- To match the `parent=` used above, each component has a `children={[1]=firstChild, [2]=secondChild, ...}` table.
- There are the functions `AddChild, RemoveChild, SetParent, ClearChildren` and others.

A child component can have at most one parent, and a parent cannot have the same child more than once. However, a child can be removed from its original parent and then added to a new parent.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Chili:Tutorial](https://springrts.com/wiki/Chili:Tutorial).*
