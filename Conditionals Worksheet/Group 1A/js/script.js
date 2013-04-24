// Charles Abrams WPF Week 3 Conditionals Worksheet

// Group 1A
//A driver has to determine if they can make it across the desert with their current fuel.  
//They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.

var carMPG = 15; //in miles
var tankPercent = .5; //percent
var tankCap = 22; //in gallons
var gallonsLeft = (tankCap * tankPercent);
var gasRange = (carMPG * gallonsLeft);

var range = (gasRange > 200) ? "Yes, you can make it without stopping for gas!" : "You only have" + " " + gallonsLeft + " " + "gallons left in your tank. Better fill up while you can"
console.log (range)