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

/**
 * Create array of fruits when you print:
 * 1. The number of fruits items in array
 * 2. Assign the number to a fruit position
 * 3. 
 */

const fruitsList = ['Apple', 'Banana', 'Orange', 'Lemon'];
// prints number of items only
console.log(fruitsList.length);

fruitsList.forEach(function(item, index) {
// prints names of objects in the array     
console.log(item, index)
});

// we add Mango to the list
const fruitsListNew = fruitsList.push('Mango');
// prints the new number of items in an array
console.log(fruitsListNew);

// prints items in the array with Mango
fruitsList.forEach(function(item) {
    console.log(item);
})

// deletes last item Mango
const first = fruitsList.pop();
console.log(fruitsList);

// skips first item Apple
const last = fruitsList.shift();  
console.log(fruitsList);






/**
 * Create array of vegetables when you print:
 * 1. The array of the items
 * 2. The array of deleted objects
 */

const vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot', 'Cucumber', 'Onion']
console.log(vegetables);

const position = 1, amountOfDeletedItems = 3;

const removedItems = vegetables.splice(position, amountOfDeletedItems);

console.log(vegetables);
console.log(removedItems);








