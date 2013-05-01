// Circumference practice(functions)
//Calculating the circumference of a circle 

var circumferenceCalc = function(radius, d, pi){ //setting the function equal to the variable 
	var radius = parseInt(prompt("Please enter the radius of the circle in inches"));
	var d = 2;
	var pi = 3.14
	var circumference = (radius * d) * pi;
	return circumference
}

var cir = circumferenceCalc();
console.log("Your circle has a circumference of " + cir + " inches.");

//var radius = parseInt(prompt("Please enter the radius of your circle"))
