// Charles Abrams 4-17-13 Expressions_Industry

//Calculating the total time our team spent on parsers for a given week  This is used by our finance team for billing purposes to our clients

var parserEdit = parseInt(prompt("Enter total number of parser edits")); //Total edits entry
var parserCreate = parseInt(prompt("Enter how many parsers we created")); //Total creations entry
var parserCreatetime = parseInt(prompt("Enter average time spent per parser in hours")); //Hour average per parser creation
var customer1Time = parseInt(prompt("Enter time spent on Customer A parsers in hours")); //Finance does not bill for this client, so these are removed

var totalTime = parserEdit + parserCreate * parserCreatetime - customer1Time; // Calculation for Total time

console.log("Total we spent" + " " + totalTime + " " + "team hours this week on parsers"); //Printout for total time

//alert("Total we spent" + " " + totalTime + " " + "team hours this week on parsers")

