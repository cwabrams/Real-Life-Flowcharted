// Charles Abrams 04-30 Assignment: Functions Industry
// commuting time based on route selection, amount of stops and speed: two choices, 16 and 1 routes. 
// Walk time from home to starting stop and final stop to final destination
// 3 parameters in this one 

function calculateTime(walkingTime,busTime,journeyWalk){ //Using parameters here	
	var route = parseInt(prompt("Please enter which route number you are taking (1 or 16)?"));
	console.log ("You have chosen route " + route + ".")
	//var totalTime = w + b + j;
if (route == 1){
		var walkingTime = parseInt(prompt("Please enter the amount of time it takes to walk from your home to the bus stop (in minutes.)"));
		var busTime = parseInt(prompt("Please enter the amount of time it is scheduled to take you on the bus (in minutes)."));
		var journeyWalk = parseInt(prompt("Please enter the amount of time it takes to walk from your final stop to work (in minutes)."));
		var totalTime = walkingTime + busTime + journeyWalk;
		console.log ("It will take you " + totalTime + " minutes to get to work.");
}else if (route == 16){
		var walkingTime = parseInt(prompt("Please enter the amount of time it takes to walk from your home to the bus stop (in minutes.)"));
		var busTime = parseInt(prompt("Please enter the amount of time it is scheduled to take you on the bus (in minutes)."));
		var journeyWalk = parseInt(prompt("Please enter the amount of time it takes to walk from your final stop to work (in minutes)."));
		var totalTime = walkingTime + busTime + journeyWalk;
		console.log ("It will take you " + totalTime + " minutes to get to work.");
}else{
	console.log ("Please try your entry again.")
}
}
calculateTime(); 

		
// Need to add final notes.