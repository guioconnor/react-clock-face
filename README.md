# react-clock-face
React based configurable SVG clock face

This package implements a react based SVG component that displays a configurable clock face that displays the configured time.

![image](https://user-images.githubusercontent.com/35854/87838841-38ae1500-c890-11ea-9426-03301c27b4b2.png)

In contrast to other clocks available, this component purposefully doesn't include functionality to make it tick or to detect the current time. It's purpose is to display the hour provided by the application.

Despite not having a ticking mechanism, it implements animation which means an update on the time props will make it change smoothly. It's up to the application to keep track of the time in this case.

The available props are

```
  className (string)  // default ''      — one or more classes to be added to the clock root element
  hours (number)      // default 0       — the hours component of the time to be displayed
  minute (number)     // default 0       — the minutes component of the time to be displayed
  marks (boolean)     // default false   — a boolean indicating whether or not to dislay hour marks
  numbers (boolean)   // default false   — a boolean indicating whether or not to dislay hour numbers (although marks and numbers can be used simultaneously, it doesn't look good)
  size  (string)      // default "100vh" — a string representing the css size of the clock.
```

Motivation and examples

The motivation for this clock was for it to be used as a visual aid in educational applications for children learning time arithmetics. Other uses may include
a graphical representation of a static time, or the front end for an application that tracks the time.
