// Charles Abrams WPF Week 3 Conditionals Worksheet

//Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the calculator should convert to Fahrenheit.

//Having issues with the entry being C and wanting to go to F

//var temperature = parseInt(prompt("Enter temperature"));
//var unitsTemp = prompt("Enter what unit of temperature you want to convert to");
//var	tempFahrenheit = ((temperature * 1.8) + 32);
//var tempCelsius = ((0.55 * temperature - 32));

//if(unitsTemp = "F"){
//console.log ("The temperature is" + " " + tempFahrenheit);
//}else{
//console.log ("The temperature is" + " " + tempCelsius);
//}

var temp = parseInt(prompt("Enter current temperature."));
var tempUnit = prompt("Fahrenheit (F) or Celsius (C) ?");
var tempF = ((temp * 1.8) + 32);
var tempC = (temp - 32 * 0.55);

if(tempUnit = "F"){
	console.log ("The temperature is" + " " + tempF)
}else{
	console.log ("The temperature is" + " " + tempC)
}	
//convertedTemp = (tempUnit === "F") ? (tempF) : (tempC)
