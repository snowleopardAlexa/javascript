// Ternery operator
// It is the same as if statements
const animals;
if (animals > 10) {
    animals = "There are less than 10 animals in the jungle!";
} 
else (animals < 10) {
    animals = "There are more than 10 animals in the jungle!"
}

const animals = animals > 10 ? "something" : "something else";

// numbers example
let num1 = 1;
let num2 = 2;

num1 < num2 ? console.log("True") : console.log("False");
num1 > num2 ? console.log("True") : console.log("False");

// let
let age = 15;
let canDrive = age >= 16 ? 'yes' : 'no';
console.log(canDrive);
// ternary above is the same as this is else statement
let age = 15;
let canDrive;

if (age >= 16) {
    canDrive = 'yes';
} else {
    canDrive = 'no';
}

// exam
let marks = prompt('Enter your marks :');
let result = (marks >= 40) ? 'pass' : 'fail';
console.log(`You ${result} the exam.`);

// ternary operator with while
const numOfBottles = 10;

while(numOfBottles > 0) {
    const bottles = numOfBottles < 2 ? "bottle" : "bottles";
    console.log(numOfBottles + "" + bottles + " of beer on the wall.");
    console.log(numOfBottles + " " + bottles + " of beer,");
    console.log("take one down, pass it around,");
    numOfBottles--;

    console.log(numOfBottles + " " + bottles + " of beer on the wall.");
}



