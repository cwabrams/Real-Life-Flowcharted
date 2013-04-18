// Charles Abrams 4-17-13 Expressions_Personal
//Javascript
//Monthly Required Expense report for my family

var amountRent = parseInt(prompt("Enter total rent for Month",950));//Amount for rent
var amountExcel = parseInt(prompt("Enter total for Excel monthly bill")); //Amount for Excel
var amountCable = parseInt(prompt("Enter total for Comcast monthly bill",75)); //Amount for Cable
var amountGrocery = parseInt(prompt("Enter estimated Grocery monthly bill",300)); // Amount for Groceries
var miscExpenses = parseInt(prompt("Enter Miscellaneous expense amount")); //Added misc. expense amount 
var miscName = prompt("Enter reason for Miscellaneous expense"); //Bringing Misc reason as string
var amountPaycheck = parseInt(prompt("Enter paycheck amount")); //Amount for paycheck


var totalBills = amountRent + amountExcel + amountCable + amountGrocery; //Bill total calculation
var amountLeft = amountPaycheck - totalBills; //Savings left over

console.log("Our total bills were" + " $" + totalBills + " " + "and our potential savings equal" + " $" + amountLeft) 
console.log(miscName + " " + "costing" + " " + miscExpenses)//Printout



//console.log(totalBills)
//console.log(amountLeft)

