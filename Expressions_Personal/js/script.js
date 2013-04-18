// Charles Abrams 4-17-13 Expressions_Personal
//Javascript
//Monthly Required Expense report for my family

var amountRent = prompt("Enter total rent for Month");//Amount for rent
parseInt = (amountRent)
var amountExcel = prompt("Enter total for Excel monthly bill"); //Amount for Excel
parseInt = (amountExcel)
var amountCable = prompt("Enter total for Comcast monthly bill"); //Amount for Cable
parseInt = (amountCable)
var amountGrocery = prompt("Enter estimated Grocery monthly bill"); // Amount for Groceries
parseInt = (amountGrocery)
//var amountPaycheck = prompt("Enter paycheck amount")

var totalBills = amountRent + amountExcel + amountCable + amountGrocery;
//amountLeft = amountPaycheck - totalBills

console.log(totalBills)