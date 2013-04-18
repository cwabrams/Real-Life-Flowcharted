//Charles Abrams 4-17-2013 Expression Worksheet
// JavaScript for Discounts

var originalPrice = 25 ;  //Price of DVD
var discountPercentage = .2 ; //Discount percentage for employees
var description = "newDVD" ; //Description of item
var salesTax = .075 //Sales tax percentage

discountTotal = originalPrice * discountPercentage; //Total discount off product
discountPrice = originalPrice - discountTotal; //Price of item without tax

taxTotal = discountPrice * salesTax
discounttaxTotal = taxTotal + discountPrice

//console.log(discountPrice);
console.log(discounttaxTotal);





