// Charles Abrams Conditionals Assignment: Personal 4-23
//Goal of this code: To output if Rachele needs to eat/drink something to keep her blood sugar level up, or if she needs to 
//give herself insulin

var bloodSugar = parseInt(prompt("What if your current blood sugar level")); // User input on blod sugar
	carbsEaten = parseInt(prompt("How many carbs did you recently consume?")); //User input on carbs eaten
	insulinUnit = 1; 
	carbsperUnit = 8;
	unitsDelivered = (carbsEaten / carbsperUnit); 
	
if (carbsEaten = 0 && bloodSugar < 70){
	console.log ("You need to eat something!")
}else if (carbsEaten > 0 && bloodSugar > 70){
	console.log ("You need to enter" + unitsDelivered + " " + "units of insulin.")
}else{
	console.log ("You are fine.")
}