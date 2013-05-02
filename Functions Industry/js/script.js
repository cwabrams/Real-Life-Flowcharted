// Charles Abrams 04-30 Assignment: Functions Industry
// commuting time based on route selection, amount of stops and speed: two choices, 16 and 1 routes. 
// Walk time from home to starting stop and final stop to final destination
// 3 parameters in this one 

function calculateTime(w,b,j){ //Using parameters here	
	var route = parseInt(prompt("Please enter which route number you are taking?"));
	console.log ("You have chosen route " + route + ".")
	var totalTime = w + b + j;
	console.log ("It will take you " + totalTime + " minutes to get to work.");
}

calculateTime(2,15,4); //Enter values for w, b and j here
//console.log ("It will take you " + totalTime + " minutes to get to work.");

	/*  Values to use for the two routes I take. 
		b	route1 = 15; 
		b	route16 = 20; 
		w	walkHome = 2; 
		j	walkWorkone = 4; 
		j	walkWorksix = 6; */
		
// Need to add final notes and attempt to get the values to be entered by a prompt.  