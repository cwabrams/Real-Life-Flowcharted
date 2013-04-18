// Charles Abrams 4-17-13 Expressions_Personal
//Javascript
//Monthly Required Expense report for my family

var amountRent = parseInt(prompt("Enter total rent for Month",950));//Amount for rent
var amountExcel = parseInt(prompt("Enter total for Excel monthly bill")); //Amount for Excel
var amountCable = parseInt(prompt("Enter total for Comcast monthly bill",75)); //Amount for Cable
var amountGrocery = parseInt(prompt("Enter estimated Grocery monthly bill",300)); // Amount for Groceries
//var amountPaycheck = prompt("Enter paycheck amount")

var totalBills = amountRent + amountExcel + amountCable + amountGrocery;
//amountLeft = amountPaycheck - totalBills

console.log(totalBills)