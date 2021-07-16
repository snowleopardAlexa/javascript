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




