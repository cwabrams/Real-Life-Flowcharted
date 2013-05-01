// Assignment: Functions Personal

//Based on how many hours in a week, calculate how much free time I will have
//Use Work time, school time, cleaning time, raid time and avg sleep per night

function freeTimecalc(){ //Setting the function up
	var working = confirm("Is this a work week?"); //Prompt from user to find out if you work this week or not
if (working == true){ //Start of elseif statement	
	var	workTime = parseInt(prompt("Enter how many hours on average you work per week")); //Prompt for work hours
		schoolTime = parseInt(prompt("Enter how many hours you need to spend studying per week")); //Prompt for study hours
		cleaningTime = parseInt(prompt("Enter how many hours you spend on chores per week"));
		raidTime = parseInt(prompt("Enter how many hours of gaming time you spend per week"));
		sleepTime = parseInt(prompt("Enter how many hours you need to sleep per night"));
		totalTimeweek = 168;
		totalTimeused = workTime + schoolTime + cleaningTime + raidTime + sleepTime
		freeTime = totalTimeweek - totalTimeused
		console.log("You have " + freeTime + " hours of free time.")
}else if (working == false){
	var	schoolTime = parseInt(prompt("Enter how many hours you need to spend studying per week"));
		cleaningTime = parseInt(prompt("Enter how many hours you spend on chores per week"));
		raidTime = parseInt(prompt("Enter how many hours of gaming time you spend per week"));
		sleepTime = parseInt(prompt("Enter how many hours you need to sleep per night"));
		totalTimeweek = 168;
		totalTimeused = schoolTime + cleaningTime + raidTime + sleepTime
		freeTime = totalTimeweek - totalTimeused
		console.log("You have " + freeTime + " hours of free time for your work free week.")
}else{
	console.log("Please try your entry again.")
}
}
freeTimecalc();

