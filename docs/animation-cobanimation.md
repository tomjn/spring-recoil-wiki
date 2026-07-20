---
title: "Animation-CobAnimation"
source_url: "https://springrts.com/wiki/Animation-CobAnimation"
categories:
  - "Animation"
---
# Animation-CobAnimation

<div class="mw-parser-output">

## Pieces

Each unit has a root piece and a tree of other pieces attached to the root piece. At the top of each file you'll need to put the following line:

    piece [names of pieces of the model separated by commas];

As usual, capitalization does not matter; neither does the order of the pieces. You do not need to name every piece that the model actually has, although you should do so, and you cannot do anything to a piece that you have not named. If you try to do something to a piece that doesn't exist, Spring will throw an error. Generally it will not crash but you'll probably get lots of chat spam, so avoid this.

Every piece starts in the position as it appears in any modeling program, such as [upspring](/upspring). This is defined to be zero position and zero rotation.

Pieces are really numbers, although Scriptor usually throws a fit if you try to use them as numbers (it will not accept a number in places where it expects a piece name, although for functions that involve a piecenum you can use the piece's number instead of the piece name if you so desire). The first piece you list is 0, and it counts from there.

## Linear Units

Everything linear *really* happens in a unit I'll call Spring distance (sd). This is a tiny distance--there are 2<sup>16</sup> = 65536 sd in an elmo, which is the unit that is most commonly used. For example, weapon ranges are specified in elmos. Fortunately, Scriptor can automatically convert elmos to sd: just put the number of elmos you want in brackets (\[\]). Sometimes you'll see scripts that use 2.5 \* 2<sup>16</sup> = 163840 instead. I recommend not doing this since it makes conversion more difficult.

## Angular Units

Likewise, everything angular *really* happens in a unit I'll call Spring angle (sa). There are 2<sup>16</sup> sa in a full circle. Generally you'll be working in degrees. There are 182 and 2/45 sa in a degree. Again, Scriptor can automatically convert from degrees to sa; just put the number of degrees you want in angles (\<\>).

## Axes

All COB animation statements specify an axis. There are three axes, "x-axis", "y-axis", and "z-axis". Positive x is to the unit's right (the left if you are looking at the unit from the front). Positive y is to the unit's top. Positive z is to the unit's front.

The position and rotation of each piece defines the coordinate system for all of its child pieces. So, if you move or rotate a piece, all of its child pieces will move and rotate with it.

Rotations around x-axis and z-axis are left-handed and rotations around the y-axis is right-handed. To comprehend this more easily, positive angles are shown graphically in the following figure:

[<img src="/images/Cob_Rotation_System.jpg" decoding="async" width="512" height="768" alt="Cob Rotation System.jpg" />](/images/Cob_Rotation_System.jpg)

## move

    move [piece] to [axis] [distance] now;

This moves the piece immediately. The piece will be in its new position along the axis before the next statement is executed.

    move [piece] to [axis] [distance] speed [speed];

This moves the piece at some speed until it reaches its destination, or the piece is told to move to a different distance along the same axis, whichever comes first. After this statement, the piece moves independent of the script; indeed, the script proceeds immediately to the next statement after it sets the piece moving.

Speed is always positive, even if you are moving the piece to a negative distance. It is measured in Spring distance/second (sd/s).

    wait-for-move [piece] along [axis];

Makes the thread sleep until the piece stops moving along the axis.

## turn

These are similar to movement in behavior, except they rotate the piece.

    turn [piece] to [axis] [angle] now;

Turns the piece to the specified angle around the axis immediately. The piece will be in its new rotation around the axis before the next statement is executed. Pieces rotate around their <u>own</u> center, not their parent's (although if the parent rotates, they do as well). If the piece moves, the center moves with it, so a piece's movement occurs "before" its rotation in determining its final position.

    turn [piece] to [axis] [angle] speed [angular speed];

This turns the piece at some angular speed until it reaches its destination, or the piece is told to turn to a different distance around the same axis, whichever comes first. Angular speed is always positive, even if the angle is negative. The speed is in Spring angles/second (sa/s).

    wait-for-turn [piece] around [axis];

Makes the thread sleep until the piece stops turning around the axis.

## spin

    spin [piece] around [axis] speed [angular speed];

This starts the piece spinning at a constant speed immediately. Again, the speed is in Spring angles/second (sa/s); however, it can be negative if you want it to spin in that direction.

    spin [piece] around [axis] speed [angular speed] accelerate [angular acceleration];

The angular acceleration should always be positive, even if you are spinning the piece at a negative angular speed. It is measured in Spring angles per frame-second (sa/f\*s); in other words, the speed of the piece will increase by that amount every *frame*, not every second. There are 30 frames per second.

    stop-spin [piece] around [axis];

Stops the piece from spinning immediately, regardless of its orientation.

    stop-spin [piece] around [axis] decelerate [angular deceleration];

Slows the piece's spinning down until it stops. As with angular acceleration, the angular deceleration should always be positive and is measured in Spring angles per frame-second.

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Animation-CobAnimation](https://springrts.com/wiki/Animation-CobAnimation).*
