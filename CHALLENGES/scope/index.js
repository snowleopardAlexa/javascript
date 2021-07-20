// SCOPE - determines accessability of a variable
// var - rarely used
// const, let - ES6

// global variable
var warrior = 'Ninja';

const screamWarrior = () => {
    // closure --> a use of variables without making them global
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


