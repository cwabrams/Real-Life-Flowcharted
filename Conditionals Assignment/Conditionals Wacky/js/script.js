// Charles Abrams Conditionals Assignment: Wacky 4-23
// Is it beer Friday yet?

var dayWeek = prompt("What day of the week is it? (case sensitive)"); //What day of the week is it?
	lastFriday = prompt("Is it the last Friday of the month?"); //Asking if it is the last Friday of the month
	working = prompt("Are you working on this day?"); //Asking the user if they are working?

if (dayWeek == "Friday" && lastFriday == "Yes"){
	console.log ("It's beer Friday!"); //Printout for beer Friday
}else if (dayWeek == "Monday" && working == "Yes"){
	console.log ("I hate Mondays."); //Garfield printout of hating Mondays
}else if (dayWeek == "Wednesday" && working == "Yes"){
	console.log ("Hump day! Almost there!"); //Hump day printout
}else{
	console.log ("Another day, another dollar"); //All other entries will fall to this one
}	


//This was just a wacky one that I thought of.  At my work we have a beer Friday day each month to relax after month end. 

	
//(lastFriday) ? console.log("It's beer Friday!") : console.log("Keep hoping!")
