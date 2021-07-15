/**
 * Create an array and loop through it using for loop
 */

// Array
const dogs = ["German Shepherd", "Golden Retriever", "Dashhund"];

// for loop
for (let dog = 0; dog < dogs.length; dog++) {
    console.log(dogs[dog]);
}

// create an array of cats and loop through it
const cats = ["bobcat", "lion", "leopard"];

for (let cats = 0; cat < cats.length; cat++) {
    console.log(cats[cat]);
}

/**
 * Create array of colors and print them all. 
 * Change the last color to a different one, and print it.
 */

const colors = ["red", "yellow", "blue", "orange"];

console.log(colors); // prints whole array
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);

colors[3] = "purple" // changes orange to purple
console.log(colors[3]);




