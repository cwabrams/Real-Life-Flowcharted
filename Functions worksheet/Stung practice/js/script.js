// Sting practice (functions)

function stingVictim(){
	var weight = parseInt(prompt("Please enter the animal's weight in pounds")); //User entry for weight
		beestings = 8.66666667; //Constant: Number of beestings that it takes to kill an animal per pound
		stingsPerpound = weight * beestings;
		console.log("It will take " + stingsPerpound + " to kill an animal that size.");
}

stingVictim();