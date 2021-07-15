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






