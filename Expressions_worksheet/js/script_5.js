//Charles Abrams 4-17-2013 Expression Worksheet
// JavaScript for Discounts

var originalPrice = 25 ;  //Price of DVD
var discountPercentage = .2 ; //Discount percentage for employees
var description = "newDVD" ; //Description of item
var salesTax = .075 //Sales tax percentage

discountTotal = originalPrice * discountPercentage; //Total discount off product
discountPrice = originalPrice - discountTotal; //Price of item without tax

taxTotal = discountPrice * salesTax // Calculate tax total
discounttaxTotal = taxTotal + discountPrice // Total cost with tax minus discount

console.log(discountPrice); //No tax total
console.log(discounttaxTotal); //Tax total





