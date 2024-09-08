//Q1

var eatsPlants = true;
var eatsAnimals = false;

var category = (eatsPlants && eatsAnimals) ? "omnivore": (!eatsPlants && eatsAnimals) ? "carnivore" : (eatsPlants && !eatsAnimals) ? "herbivore" : (!eatsPlants && !eatsAnimals) ? "undefined": undefined
console.log(category);




// Q2


var musicians = 5;

if(musicians <= 0){
    console.log("not a group")
    
}else if(musicians == 1){
    console.log("solo")
}else if (musicians == 2){
    console.log("duet")

} else if(musicians == 3){
    console.log("trio")

} else if(musicians == 4){
    console.log("quartet")

}else if(musicians > 4){
    console.log("this is a large group")
}



// Q3




var room = "dining room";
var suspect = "Mr. Parkes";
var weapon = "";
var solved = false;

if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison"; solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy"; solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick"; solved = true;
} else {
    weapon = "knife"; solved = true;
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

//Q4

var balance = 0;
var checkBalance = true;
var isActive = true;

if (checkBalance === true) {
    if (isActive === true && balance > 0) {
        console.log("Your balance is " + balance)
    } else if (isActive === false) {
        console.log("Your account is not active.")
    } else if (balance === 0) {
        console.log("Your account is empty.")
    }
}else console.log("Thank you");



// Q5
var flavor = "vanilla";
var vessel = "cone";
 var toppings="sprinkles";

 if((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel ===  "bowl") && (toppings === "sprinkles" || toppings === "peanuts")){
    console.log( "I'd like two scoops of" + flavor + "ice cream in a"+ vessel +"with"+ toppings +"")
 }

 
 