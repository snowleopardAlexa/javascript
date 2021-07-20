// SCOPE - determines accessability of a variable
// var - rarely used
// const, let - ES6

const { lightsalmon } = require("color-name");

// global variable
var warrior = 'Ninja';

const screamWarrior = () => {
    // closure --> a use of variables without making them global
    // the enclosed variable are only in scope within 
    // the containing function. 
    // you can't get at the data from an outside scope
    // except through the object's privileged methods
    let warriorTwo = 'Samuaraj';
    return {
        shootWarrior: () => {
            return console.log(warrior, warriorTwo);
        }
    }
}

const newWarrior = screamWarrior();

newWarrior.shootWarrior();

// we can't access warriorTwo outside the function, it throws the error
console.log(warrior, warriorTwo);

// Types of scope
// LOCAL - variables, objects, functions are only available inside: warriorTwo
// GLOBAL - variables, objects, functions are available to all: var warrior
// BLOCK-SCOPED - declare with let, const which are available in the block they're surrounded by: warriorTwo

// HOISTING --> moving all declarations to the top of the scope when the code is compiled
// if you declare anything at the bottom ex. function and run it at the top 
warrior = 'Ninja'; // warrior is defined here

const screamWarrior = () => {
    let warriorTwo = 'Samuaraj';
    // wrapped in a function now is a closure
    return {
        shootWarrior: () => {
            return console.log(warrior, warriorTwo);
        }
    }
}

const newWarrior = screamWarrior();

newWarrior.shootWarrior();

var warrior;
var warrior3 = 'Viking'; 

console.log(warrior, warriorTwo);

// GLOBAL VARIABLES
// It is always better to declare variable
// not declared variable are automatically global and can be accessed by anything
// and this can break the code

'use strict'; // <-- catches global variables

const warrior = {
    name: 'Jane',
    type: 'Ninja',
    weapon: 'knife',
    agility: 79
} // this is globally scoped

// globally scoped
const screamWarrior = () => {
    let warriorTwo = 'Samaraj';

    warrior3 = 'Viking';
    return {
        shootWarrior: () => {
            return console.log(warrior, warrior2);
        }
    }
}

const newWarrior = screamWarrior();
newWarrior.shootWarrior();
console.log(warrior, warrior3);

// Define global variable
const animals = {
    name: 'Kovu',
    type: lightsalmon,
    weight: 100,
    color: black
}

// this functin is globally scoped
const mildAnimals = () => {
    return console.log(animals);
}

// no issues running this function
mildAnimals();

