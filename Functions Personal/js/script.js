// Assignment: Functions Personal

//Based on how many hours in a week, calculate how much free time I will have
//Use Work time, school time, cleaning time, raid time and avg sleep per night

function freeTimecalc(){ //Setting the function up
	var working = confirm("Is this a work week?"); //Prompt from user to find out if you work this week or not
	var timeAfterwork = parseInt(prompt("Please enter how many hours you will spend after hours at work.")); //Satisfying the conditional other than equals
if (working == true && timeAfterwork > 1){ //Start of elseif statement	
	var	workTime = parseInt(prompt("Enter how many hours on average you work per week")); //Prompt for work hours
		schoolTime = parseInt(prompt("Enter how many hours you need to spend studying per week")); //Prompt for study hours
		cleaningTime = parseInt(prompt("Enter how many hours you spend on chores per week")); //Prompt for chores hours
		raidTime = parseInt(prompt("Enter how many hours of gaming time you spend per week")); //Prompt for gaming hours
		sleepTime = parseInt(prompt("Enter how many hours you need to sleep per night")); //Prompt for sleep hours
		totalTimeweek = 168; //Number of hours in a 7 day week
		totalTimeused = workTime + schoolTime + cleaningTime + raidTime + sleepTime //Calculation
		freeTime = totalTimeweek - totalTimeused //Final calculation for this if statement
		console.log("You have " + freeTime + " hours of free time.") //Printout
}else if (working == false && timeAfterwork <= 0){ //Else if to eliminate work hours
	var	schoolTime = parseInt(prompt("Enter how many hours you need to spend studying per week")); //Prompt for study hours
		cleaningTime = parseInt(prompt("Enter how many hours you spend on chores per week")); //Prompt for chores hours
		raidTime = parseInt(prompt("Enter how many hours of gaming time you spend per week")); //Prompt for gaming hours
		sleepTime = parseInt(prompt("Enter how many hours you need to sleep per night")); //Prompt for sleep hours
		totalTimeweek = 168; //Number of hours in a 7 day week
		totalTimeused = schoolTime + cleaningTime + raidTime + sleepTime //Calculation
		freeTime = totalTimeweek - totalTimeused //Final calc
		console.log("You have " + freeTime + " hours of free time for your work free week.") //Printout
}else{
	console.log("Please try your entry again.") //Fallout if no selection
}
}
freeTimecalc(); //Calling the named function above

