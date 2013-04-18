// Charles Abrams 4-17-13 Expressions_Industry

//Calculating the total time I spent on parsers for a given week

var parserEdit = prompt ("Enter total number of parser edits",20) //Total edits entry
var parserCreate = prompt ("Enter how many parsers you created",5) //Total creations entry
var parserCreatetime = prompt ("Enter average time spent per parser in hours", 1) //Hour average per parser creation

totalTime = parserEdit + parserCreate * parserCreatetime

console.log(totalTime)

