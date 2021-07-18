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

