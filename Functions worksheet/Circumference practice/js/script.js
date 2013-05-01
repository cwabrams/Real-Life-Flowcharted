// Circumference practice(functions)
//Calculating the circumference of a circle 

var circumferenceCalc = function(radius, d, pi){ //setting the function equal to the variable 
	var radius = parseInt(prompt("Please enter the radius of the circle"));
	var circumference = (radius * d) * pi;
	return circumference
}

var cir = circumferenceCalc(3,2,3.14);

//var radius = parseInt(prompt("Please enter the radius of your circle"))
