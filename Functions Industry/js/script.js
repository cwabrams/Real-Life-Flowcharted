// Charles Abrams 04-30 Assignment: Functions Industry
// commuting time based on route selection, amount of stops and speed: two choices, 16 and 1 routes. 
// Walk time from home to starting stop and final stop to final destination
// 3 parameters in this one 

function calculateTime(w, b, j){ //Using parameters here
	var route = confirm("Select OK if you are taking route 1 or select cancel if you are taking route 16.")	
proceed = (route) ? console.log("You selected Route 1") : console.log("You selected route 16"); //Printout
	var totalTime = w + b + j;
if (route == true){
	calculateTime(2, 15, 4);
}else if{
	calculateTime(2, 20, 6)
}else{
	calculateTime(2, 20, 6);
}
console.log(totalTime);
}
calculateTime(); 


	/*var route1 = 15; 
		route16 = 20; 
		walkHome = 2; 
		walkWorkone = 4; 
		walkWorksix = 6; */