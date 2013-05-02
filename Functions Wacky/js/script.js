// Charles Abrams 04-30 Assignment: Functions Wacky
// Using this to calcule gallons to cups or liters based on user input. (Use ternary)

var conversionCalc = function(){ //Setting the anonymous function
    var liquid = confirm("Select OK if you are working with a liquid"); //Asking the user if they are using a liquid
    proceed = (liquid) ? console.log("Great, you are working with a liquid") : console.log("You are not using a liquid"); //Printout
    var conversionType = confirm("Select OK for gallons and cancel for liter conversions"); 
if (liquid == true && conversionType == true){
    var liquidCups = parseInt(prompt("Please enter the amount of liquid in cups.")); //Entered from user
        conversionGalcups = 0.0625; // Gallons per one cup
        calcGalcup = liquidCups * conversionGalcups; //Calculation for cups to gallons
return ("You have " + calcGalcup + " gallon(s) of liquid."); 
}else if(liquid == true && conversionType == false){
    var liquidCups = parseInt(prompt("Please enter the amount of liquid in cups.")); //Entered from user
   conversionLitercups = 0.236588; //How many liters are in 1 cup
   calcLitercup = liquidCups * conversionLitercups; //Calculation for cups to liters 
return ("You have " + calcLitercup + " liter(s) of liquid."); 
}else if(liquid == false){
console.log("Please try your entry again.");
}else 
console.log("Please try your entry again.");
}	
var conversion = conversionCalc();
console.log(conversion); 





















}