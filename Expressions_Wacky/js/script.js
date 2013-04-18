// Charles Abrams 4-17-13 Expressions Assignment (Wacky)
// JavaScript
// Script for giving you a valuable piece of info about each Hogwarts House based on user choice


var hogwartHouses = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];
var selectedHouse = prompt("Please enter your Favorite Hogwarts house"); //User choice of house

console.log("You selected" + " " + selectedHouse); //Print to console choice user made

hogwartHouses [0] = "brave at heart";
hogwartHouses [1] = "of wit and learning";
hogwartHouses [2] = "just and loyal friends";
hogwartHouses [3] = "cunning and power hungry";

switch (selectedHouse) 
{
	case "Gryffindor":
	console.log("Gryffindors, where dwell the" + " " + hogwartHouses[0])
		break;
		
	case "Ravenclaw":
	console.log("Ravenclaw, where dwell those" + " " + hogwartHouses[1])
		break;

	case "Hufflepuff":
	console.log("Hufflepuff, where dwell" + " " + hogwartHouses[2])
		break;
		
	case "Slytherin":
	console.log("Slytherin, where dwell the" + " " + hogwartHouses[3])
		break;
}
	



