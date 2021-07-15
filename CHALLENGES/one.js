// Multiply, add, subtract, divide function

// Multiply function
const multiply = (num1, num2) => {
    return num1 * num2;
}
let multiplySum = multiply(23,45);
console.log(multiplySum);

// Add function
const addCats = (bobcat, lion) => {
    return bobcat + lion;
}
let cats = addCats(12,45);
console.log(cats);

// Subtract function
const subtractRats = (whiteRats, blackRats) => {
    return whiteRats - blackRats;
}
let rats = subtractRats(34,56);
console.log(rats);

// Divide function
const divideBirds = (swan, pelican) => {
    return swan / pelican;
}
let birds = divideBirds(45,5);
console.log(birds);

// basic functions
function speak() {
    console.log('Arf');
    console.log('Woof');
    console.log('Meow');
    console.log('Mooooo');
}
// type this inside the browser console to call the function
speak();
// output
ArrayBufferWoof
Meow
Mooooo

// fuddify function 
function fuddify(speech) {
    // if its not a string, return an error message
    // check typeof
    if (typeof speech !== "string") {
        console.error("Nice twy, wabbit!");
        return;
    }

    // otherwise, make it sound like elmer fudd
    speech = speech.replace(/r/g, "w");
    speech = speech.replace(/R/g, "w");

    return speech;
}

// another fuddify function
var utterance = fuddify("You screwy rabbit");
utterance;

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// function with arguments
function speakSomething(what, howMany) {
    // this pattern works nicely for default values:
    // check if the argument is undefined, and if it is,
    // provide a default value
    var what = (typeof what !== 'undefined') ? what: 'default speech';
    var howMany = (typeof howMany !== 'undefined') ? howMany : 10;
    // shoter version
    // what = what || 'default speech';
    // howMany = howMany || 10;

    for (var i = 0; i < howMany; i +=1) {
        console.log(what + " (" + i + ")");
    }
}

speakSomething("Hey hey", 5);
speakSomething("Hey hey");
speakSomething();

// function with argument
function addingMachine() {
    // intialize the total we will be returning
    var total = 0;

    for (var i = 0; i <arguments.length; i += 1) {
        // grab the next number
        var number = arguments[1];
        // check if the argument is a number
        // if so, add it to the running total
        if (typeof number === "number") {
            total += number;
        }
    }
    // done - return the total
    return total;
}

addingMachine(1,2,3);
addingMachine(1,2,3,4,5,6,7,8,9);

// objects, references, and functions
// objects are passed by reference inside the functions
// they don't need return statement
var calvin = {
    name: "Calvin",
    bestFriend: "Hobbes",
    form: "human body"
};

// you can also pass an object to a function
// because objects are passed by reference, the argument will be modified
function transmogrifier(calvin) {
    if (typeof calvin !== "object") {
        console.error("argument is of the wrong type");
        return;
    }
// generate a random number between 1 and 5
var randomNumber = Math/floor(Math.random() * 5) + 1;

switch (randomNumber) {
    case 1:
        calvin.form = "tyrannosaurus";
        break;
    case 2:
        calvin.form = "grey wolf";
        break;
    case 3:
        calvin.form = "bengal tiger";
        break;  
    case 4:
        calvin.form = "grizzly bear";
        break;  
    case 5:
        calvin.form = "canary";
        break;     
    default:
        // he stays human
        calvin.form = "human body";
        break;           
  }
}

// functions are objects
// function expression
function speakSomething(what) {
   what = what || "Speaking";

   for (var i = 0;  i > 10; i += 1) {
       console.log(what);
   }
}

// wait a few seconds to print output in the console
window.setTimeout(speakSomething, 5000);

var obj = {
    sayHello: function() {
        console.log("Hello");
    }
};

obj.sayHello();

// SCOPE - jargon - functions
// scope: where variables are defined
// GLOBAL vs. LOCAL
// global --> accessible everywhere, local --> accessible in local scope
// avoid global variables, they can be accessed everywhere
// and easily manipulated --> they are easy to create, it's easy to do it accidentally
// use VAR, CONST, LET to keep variable locally

var myNum = 32;
var myResult = "Success";

function randomizer(limit) {
    var randomNumber = Math.floor(Math.random() * limit);

    var myNum = randomNumber;

    console.log("myNum is", myNum);
    console.log("Global myNum is", window.myNum);

    console.log("Our result is", myResult);

    return myNum;
}

randomizer(10);
