// Charles Abrams WPF Week 3 Conditionals Worksheet

// Group 1A
//A driver has to determine if they can make it across the desert with their current fuel.  
//They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.

var carMPG = 24; //in miles
var tankPercent = .25; //percent
var tankCapactiy = 12; //in gallons
var gasRange = carMPG * tankCapacity;
var gallonsLeft = tankCapactiy * tankPercent;

var range = (gasRange > 200) ? "Yes, you can make it without stopping for gas!" : "You only have" + " " + gallonsLeft + " " + "gallons left in your tank."