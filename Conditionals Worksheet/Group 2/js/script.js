// Charles Abrams WPF Week 3 Conditionals Worksheet

//Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. 
//If the password doesn’t match a message should appear for that, etc. Only one error message should appear.

var enteredUsername = prompt("Please enter your username.");
var enteredPassword = prompt("Please enter the password associated with the username entered previously"); 
var correctUsername = "user123";
var correctPassword = "resetme123";

if (enteredUsername === correctUsername && enteredPassword === correctPassword){
	console.log ("Welcome" + " " + enteredUsername);
}else if (enteredUsername != correctUsername){
	console.log ("User not found. Try again.")
}else{
	console.log ("Password does not match our records")
}