// Charles Abrams 4-17-13 Expressions_Personal
//Javascript
//Monthly Required Expense report for my family:  This is meant to be used by anyone for basic bills, but has specific fields added for my girlfriend's use.
//Default values removed for purposes of assignment, can be added back in at end of var statements

var amountRent = parseInt(prompt("Enter total rent for Month"));//Amount for rent
var amountEnergy = parseInt(prompt("Enter total for Energy bill")); //Amount for Energy
var amountCable = parseInt(prompt("Enter total for Cable monthly bill")); //Amount for Cable
var amountGrocery = parseInt(prompt("Enter estimated Grocery monthly bill")); // Amount for Groceries
var miscExpense = parseInt(prompt("Enter Miscellaneous expense amount")); //Added misc. expense amount 
var miscName = prompt("Enter reason for Miscellaneous expense"); //Bringing Misc reason as string
var amountPaycheck = parseInt(prompt("Enter paycheck amount")); //Amount for paycheck



var totalBills = amountRent + amountEnergy + amountCable + amountGrocery + miscExpense; //Bill total calculation
var amountLeft = amountPaycheck - totalBills; //Money after bills
var suggestedSavings = amountLeft * .4; //Suggested savings calculation 40%
var spendingMoney = amountLeft - suggestedSavings //Leftover spending money calculation

console.log("Our total bills were" + " $" + totalBills + " " + "and the potential savings for the month equals" + " $" + amountLeft);
console.log(miscName + " " + "costing" + " $" + miscExpense + " " + "was a miscellaneous expense"); 
console.log("Suggested amount to commit to savings account equals" + " $" + suggestedSavings);
console.log("Spending money available equals" + " $" + spendingMoney);//Printouts


//Everyday savings plan that my girlfriend and I have been working on


