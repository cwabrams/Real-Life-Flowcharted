// Charles Abrams WPF Week 3 Conditionals Worksheet

//Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the calculator should convert to Fahrenheit.

//Having issues with the entry being C and wanting to go to F

var temperature = parseInt(prompt("Enter temperature in degrees Fahrenheit"));
//var	tempFahrenheit = ((temperature * 1.8) + 32);
var tempCelsius = (5/9 * (temperature - 32));

console.log ("The temperature is" + " " + tempCelsius + " " + "degrees celsius.")

//havent figured this one out fully.  Trying other example from group 1
