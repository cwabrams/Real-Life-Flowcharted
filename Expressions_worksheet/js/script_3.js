//Charles Abrams 4-17-2013 Expression Worksheet
// JavaScript for Slice of Pie Part 2

var numberSlices = 8; //Number of slices per Pizza
var numberPeople = 4; //Total number of Partygoers
var totalPizzas = 2; //Total pizzas ordered
var eatenSlices = 2; //Total slices per person eaten

totalSlices = totalPizzas * numberSlices	; //Total slices

totalSparky = totalSlices - numberPeople * eatenSlices; //Total slices Sparky can have
console.log(totalSparky)
