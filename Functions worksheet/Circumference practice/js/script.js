// Circumference practice(functions)
//Calculating the circumference of a circle 

var circumferenceCalc = function(radius, d, pi){ //setting the function equal to the variable 
	var radius = parseInt(prompt("Please enter the radius of the circle in inches"));
	var d = 2; //Doubling the radius will give the diameter
	var pi = 3.14 //Constant
	var circumference = (radius * d) * pi; //Calculation
	return circumference
}

var cir = circumferenceCalc(); //Setting the anonymous function
console.log("Your circle has a circumference of " + cir + " inches."); //Printout

