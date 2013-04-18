// Charles Abrams 4-17-13 Expressions_Industry

//Calculating the total time our team spent on parsers for a given week  This is used by our finance team for billing purposes to our clients
//

var parserEdit = prompt ("Enter total number of parser edits") //Total edits entry
var parserCreate = prompt ("Enter how many parsers we created") //Total creations entry
var parserCreatetime = prompt ("Enter average time spent per parser in hours") //Hour average per parser creation
var customer1Time = prompt ("Enter time spent on Customer A parsers in hours") //Finance does not bill for this client, so these are removed

totalTime = parserEdit + parserCreate * parserCreatetime - customer1Time

console.log(totalTime + " " + "team hours spent")

