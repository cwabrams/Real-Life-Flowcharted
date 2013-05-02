// Charles Abrams 04-30 Assignment: Functions Industry
// commuting time based on route selection, amount of stops and speed: two choices, 16 and 1 routes. 
// Walk time from home to starting stop and final stop to final destination
// 3 parameters in this one 

function calculateTime(walkingTime,busTime,journeyWalk){ //Using parameters here and user will be prompted for them
	var route = parseInt(prompt("Please enter which route number you are taking (1 or 16)?")); // Confirmation of which route you will be taking
	console.log ("You have chosen route " + route + ".") //Printout for route choice
	//var totalTime = w + b + j; //Note for myself for calculation needed
if (route == 1){ //Start of elseif statement
		var walkingTime = parseInt(prompt("Please enter the amount of time it takes to walk from your home to the bus stop (in minutes.)")); //Entering travel time
		var busTime = parseInt(prompt("Please enter the amount of time it is scheduled to take you on the bus (in minutes).")); //Entering travel time
		var journeyWalk = parseInt(prompt("Please enter the amount of time it takes to walk from your final stop to work (in minutes).")); //Entering travel time
		var totalTime = walkingTime + busTime + journeyWalk; //Calculation
		alert("It will take you " + totalTime + " minutes to get to work."); //Alert for printout
		console.log ("It will take you " + totalTime + " minutes to get to work."); //Printout for once the function is called
}else if (route == 16){
		var walkingTime = parseInt(prompt("Please enter the amount of time it takes to walk from your home to the bus stop (in minutes.)")); //Entering travel time
		var busTime = parseInt(prompt("Please enter the amount of time it is scheduled to take you on the bus (in minutes).")); //Entering travel time
		var journeyWalk = parseInt(prompt("Please enter the amount of time it takes to walk from your final stop to work (in minutes).")); //Entering travel time
		var totalTime = walkingTime + busTime + journeyWalk; //Calculation
		alert("It will take you " + totalTime + " minutes to get to work."); //Alert for printout
		console.log ("It will take you " + totalTime + " minutes to get to work."); //Printout for once the function is called
}else{
		console.log ("Please try your entry again.")
} //Closing elseif
} //Closing function

calculateTime(); 
console.log ("Thank you for choosing route services!")
		
// Need to add final notes.