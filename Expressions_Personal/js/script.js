// Charles Abrams 4-17-13 Expressions Assignment (Personal)
//Javascript
//Monthly Required Expense report for my family

var amountRent = prompt("Enter total rent for Month",950)
var amountXcel = prompt("Enter total for Xcel monthly bill")
var amountCable = prompt("Enter total for Comcast monthly bill",75)
var amountGrocery = prompt("Enter estimated Grocery monthly bill",300)
var amountPaycheck = prompt("Enter paycheck amount",2772)

totalBills = amountRent + amountXcel + amountCable + amountGrocery
amountLeft = amountPaycheck - totalBills

console.log(amountLeft)