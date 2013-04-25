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
	console.log ("Turnaround time is 2 hours for this ticket")
}else if (ticketOne == true && ticketOnepriority == "1"){
	console.log ("Turnaround time is 8 hours for this ticket")
}else if (ticketOne == true && ticketOnepriority == "2"){
	console.log ("Turnaround time is 24 hours on this ticket")	
}else{
	console.log ("Turnaround time is 72 hours on this ticket")
}	


var ticketTwo = confirm("Do you have any APC tickets?"); //APC is second highest priority
var ticketTwopriority = prompt("Enter priority of ticket."); //Enter priority

workingTickettwo = (ticketTwo) ? console.log("Work the APC Ticket") : console.log("Move onto the next ticket"); //APC second status check
if (ticketTwo == true && ticketTwopriority == "0"){
	console.log ("Turnaround time is 2 hours for this ticket")
}else if (ticketTwo == true && ticketTwopriority == "1"){
	console.log ("Turnaround time is 8 hours for this ticket")
}else if (ticketTwo == true && ticketTwopriority == "2"){
	console.log ("Turnaround time is 24 hours on this ticket")	
}else{
	console.log ("Turnaround time is 72 hours on this ticket")
}	





