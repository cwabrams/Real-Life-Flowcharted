// Assignment: Functions Personal

//Based on how many hours in a week, calculate how much free time I will have
//Use Work time, school time, cleaning time, raid time and avg sleep per night

function freeTimecalc(){
	var working = confirm("Is this a work week?");
if (working == true){	
	var	workTime = parseInt(prompt("Enter how many hours on average you work per week"));
		schoolTime = parseInt(prompt("Enter how many hours you need to spend studying per week"));
		cleaningTime = parseInt(prompt("Enter how many hours you spend on chores per week"));
		raidTime = parseInt(prompt("Enter how many hours of gaming time you spend per week"));
		sleepTime = parseInt(prompt("Enter how many hours you need to sleep per night"));
		totalTimeweek = 168;
		totalTimeused = workTime + schoolTime + cleaningTime + raidTime + sleepTime
		freeTime = totalTime - totalTimeused
}else

