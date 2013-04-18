// Charles Abrams 4-17-13 Expressions_Personal
//Javascript
//Monthly Required Expense report for my family:  This is meant to be used by anyone for basic bills, but has specific fields added for my girlfriend's use.
//Default values removed for purposes of assignment

var amountRent = parseInt(prompt("Enter total rent for Month"));//Amount for rent
var amountExcel = parseInt(prompt("Enter total for Excel monthly bill")); //Amount for Excel
var amountCable = parseInt(prompt("Enter total for Comcast monthly bill")); //Amount for Cable
var amountGrocery = parseInt(prompt("Enter estimated Grocery monthly bill")); // Amount for Groceries
var miscExpense = parseInt(prompt("Enter Miscellaneous expense amount")); //Added misc. expense amount 
var miscName = prompt("Enter reason for Miscellaneous expense"); //Bringing Misc reason as string
var amountPaycheck = parseInt(prompt("Enter paycheck amount")); //Amount for paycheck


var totalBills = amountRent + amountExcel + amountCable + amountGrocery + miscExpense; //Bill total calculation
var amountLeft = amountPaycheck - totalBills; //Savings left over

console.log("Our total bills were" + " $" + totalBills + " " + "and our potential savings equal" + " $" + amountLeft) 
console.log(miscName + " " + "costing" + " $" + miscExpense + " " + "was a miscellaneous expense")//Printouts



//console.log(totalBills)
//console.log(amountLeft)

