// Charles Abrams WPF Week 3 Conditionals Worksheet

//Group 3 

//The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. 
//In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
//Determine which of the two prices the customer is eligible for.

var age = 32;
var viewingTime = 2
var ticketPrice = 12;
var discountPrice = 7;

if (age > 55){
	console.log ("Your ticket price is" + " " + discountPrice + " " + "dollars.");
}else if (age < 10){
	console.log ("Your ticket price is" + " " + discountPrice + " " + "dollars.");
}else{
	console.log ("Your ticket price is" + " " + ticketPrice + " " + "dollars.");
}