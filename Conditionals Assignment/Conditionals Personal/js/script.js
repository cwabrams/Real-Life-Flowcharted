// Charles Abrams Conditionals Assignment: Personal 4-23
//Goal of this code: To output if Rachele needs to eat/drink something to keep her blood sugar level up, or if she needs to 
//give herself insulin

var bloodSugar = parseInt(prompt("What if your current blood sugar level")); // User input on blod sugar
	carbsEaten = parseInt(prompt("How many carbs did you recently consume?")); //User input on carbs eaten
	carbsperUnit = parseInt(prompt("How many carbs can one unit of insulin process?")); //User input for carbs per unit
	insulinUnit = 1; // Not needed, just for reference
	unitsDelivered = (carbsEaten / carbsperUnit); //Units needed to be delivered by insulin pump
	
if (carbsEaten === 0 && bloodSugar < 70){
	console.log ("You need to eat something!")
}else if (carbsEaten > 0 || bloodSugar > 70){
	console.log ("You need to enter" + " " + unitsDelivered + " " + "units of insulin.")
}else if (bloodSugar > 70){
	console.log ("You are fine.")
}else{
	console.log ("Please try your entry again.")
}
//Need to figure out how to validate if the field does contain an entry or not