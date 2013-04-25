// Charles Abrams Conditionals Assignment: Industry 4-23
// Creating code to tell me which ticket to work next at work based on priority and client

var working = true; // Let's us know if the user is working or not 

status = (working) ? console.log("Start working tickets!") : console.log("Enjoy your day off!"); //Printout for working status

var client = ["TE", "APC", "JUN", "POL"]; // List of 4 of our client ID's (priority as listed)
var priority = [0, 1, 2, 3]; // Priority 0 is system down, 1 is high priority, 2 is normal, 3 is low
var ticketOne = confirm("Do you have any TE tickets?"); //TE is highest priority
var ticketOnepriority = prompt("Enter priority of ticket."); //Enter priority

workingTicket = (ticketOne) ? console.log("Work the TE Ticket") : console.log("Move onto the next ticket"); //TE first status check
if (ticketOne == true && ticketOnepriority == "0"){
	console.log ("Turnaround time is 2 hours for this ticket"); //Turnaround for priority 0
}else if (ticketOne == true && ticketOnepriority == "1"){
	console.log ("Turnaround time is 8 hours for this ticket"); //Turnaround for priority 1
}else if (ticketOne == true && ticketOnepriority == "2"){
	console.log ("Turnaround time is 24 hours on this ticket"); //Turnaround for priority 2
}else{
	console.log ("Turnaround time is 72 hours on this ticket"); //Turnaround for priority 3
}


var ticketTwo = confirm("Do you have any APC tickets?"); //APC is second highest priority
var ticketTwopriority = prompt("Enter priority of ticket."); //Enter priority

workingTickettwo = (ticketTwo) ? console.log("Check priority of APC ticket") : console.log("Move onto the next ticket"); //APC second status check

if (ticketTwo == true && ticketTwopriority == "0" || ticketTwopriority == "1"){
	console.log ("Work this ticket before priority 2 and 3 TE tickets"); //If lower TE ticket, then work this ticket
}else if (ticketTwo == true && ticketTwopriority == "2"){
	console.log ("Work the TE ticket first before this one"); //If TE is higher priority, then wait on this ticket
}else{
	console.log ("Push this ticket back in priority"); //Last message if lower priority
}


var ticketThree = confirm("Do you have any JUN tickets?"); //JUN is third highest priority
var ticketThreepriority = prompt("Enter priority of ticket."); //Enter priority

workingTicketthree = (ticketThree) ? console.log("Check priority of JUN ticket") : console.log("Move onto the next ticket"); //JUN third status check
if (ticketThree == true && ticketThreepriority == "0"){
	console.log ("Work this ticket before priority 2 and 3 TE/APC tickets"); //Must work priority 0 first
}else if (ticketThree == true && ticketThreepriority == "1"){
	console.log ("Work any TE tickets before working this ticket"); //Turnaround for priority 1
}else if (ticketThree == true && ticketThreepriority == "2"){
	console.log ("Turnaround time is 24 hours on this ticket: Work all other TE and APC tickets first"); //Turnaround for priority 2
}else{
	console.log ("Push this ticket back in priority"); //Turnaround for priority 3
}


var ticketFour = confirm("Do you have any POL tickets?"); //JUN is third highest priority
var ticketFourpriority = prompt("Enter priority of ticket."); //Enter priority

workingTicketfour = (ticketFour) ? console.log("Check priority of POL ticket") : console.log("Move onto the next ticket"); //POL fourth status check
if (ticketFour == true && ticketFourpriority == "0"){
	console.log ("Work this ticket before priority 2 and 3 TE/APC tickets"); //Must work priority 0 first
}else if (ticketFour == true && ticketFourpriority == "1"){
	console.log ("Work any TE/APC/JUN tickets before working this ticket"); //Turnaround for priority 1
}else if (ticketFour == true && ticketFourpriority == "2"){
	console.log ("Turnaround time is 24 hours on this ticket: Work all other TE/APC/JUN tickets first"); //Turnaround for priority 2
}else{
	console.log ("Push this ticket back in priority"); //Turnaround for priority 3
}

//printouts show the ticket notes in order, which is nice when looking at a list of projects/tickets to work on for the day.  
//want to eventually make this more streamline using new tools that I learn in further Javascript classes