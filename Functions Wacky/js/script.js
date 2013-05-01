// Charles Abrams 04-30 Assignment: Functions Wacky
// Using this to calcule gallons to cups or liters based on user input. (Use ternary)


var conversionCalc = function(){

	var liquid = true;
	proceed = (liquid) ? console.log("Great, you are working with a liquid") : console.log("You are not using a liquid"); //Printout
	var conversionType = confirm("Select OK for gallons and cancel for liter conversions"); 
if (conversionType == true){
	var liquidCups = parseInt(prompt("Please enter the amount of liquid in cups."));
		conversionGalcup = 0.0625; // Gallons per one cup
		calcGalcup = liquidCups * conversionGalcups;
		return calcGalcup;
}else
	var liquidCups = parseInt(prompt("Please enter the amount of liquid in cups."));




















}