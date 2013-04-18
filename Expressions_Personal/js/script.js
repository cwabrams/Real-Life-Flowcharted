// Charles Abrams 4-17-13 Expressions_Personal
//Javascript
//Monthly Required Expense report for my family

var amountRent = prompt("Enter total rent for Month");//Amount for rent
var amountExcel = prompt("Enter total for Excel monthly bill"); //Amount for Excel
var amountCable = prompt("Enter total for Comcast monthly bill"); //Amount for Cable
var amountGrocery = prompt("Enter estimated Grocery monthly bill"); // Amount for Groceries
//var amountPaycheck = prompt("Enter paycheck amount")

var totalBills = amountRent + amountExcel + amountCable + amountGrocery;
//amountLeft = amountPaycheck - totalBills

console.log(totalBills)