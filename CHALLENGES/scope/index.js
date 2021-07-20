// SCOPE - determines accessability of a variable
// var - rarely used
// const, let - ES6

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
// local - variables, objects, functions are only available inside: warriorTwo
// global - variables, objects, functions are available to all: var warrior
// block-scope - declare with let, const which are available in the block they're surrounded by: warriorTwo

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



