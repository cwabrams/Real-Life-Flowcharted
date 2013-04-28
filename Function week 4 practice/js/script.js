// JavaScript practice week 4 (functions)

//function functionName () {   //parenthesis can be empty or hold parameters
  //code the function runs
//}
//Must invoke (or tell the function to run)
//Can invoke the code more than once, essentially making it reusable. calcArea(); is the command
//Materials in our code = arguments.  Bins to store the materials or code are called parameters

//function outputMsg (){
	//console.log("Hello world");
//}

//var width = 5; //This variable is scoped outside of the function

//function calcArea (){
	//var width = 20; //This variable is scoped INSIDE the function
		//height = 30;
		//area = width * height;
		//console.log(area);
//}	
//console.log(width); 
//calcArea(); 

//Commented out for notes


//Basic function layout
//funcName (argument1, argument2);
//function funcName(parameter1, parameter2){
	//code the function runs
//}	

//calcArea(30, 20); //Arguments that will be used in the function

//function CalcArea(w, h){ //Bins that are storing the arguments
	//var area = w * h;
	//console.log(area);
//}	
//Basic layout of code for dogyears
//function dogYears (){
//	var age = 4;
//		dogYears = age * 7;
//		console.log("Sparky is " + dogYears + " years old");
//}
//dogYears();

function dogYears (age){
	var dogYears = age * 7;
		console.log("Sparky is " + dogYears + " years old");
}

var age1 = parseInt(prompt("Enter dog's age"))
dogYears(age1); //Passing the amount 6 as age
dogYears(4); //Passing the amount 4 as age
