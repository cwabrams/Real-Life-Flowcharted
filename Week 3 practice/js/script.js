// JavaScript practice week 3

var kidHeight = 44;
	minHeight = 48;
	wParentHeight = 45;

//if child is old enough, print to console "you can ride!"

if(kidHeight > minHeight){
	//you can ride
	console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
	//you can ride with a parent
	console.log("You can ride with a parent");
}else{
	//you cannot ride
	console.log("Too bad, you cannot ride the coaster");
}
