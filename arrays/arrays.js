/**
 * Arrays 
 * - we can insert any data type here
 * - we can add, delete, replace items in an array
 */

let item = "flashlight";

const collection = ["Bear", item, 5, true];

// you can insert any data type in the array 
// we replace 5 with "camera"
collection[2] = "camera";
// add a new item to an array
collection[collection.length] = "new item";
// we can insert items further in the area
collection[9] = "at the end";

console.log(collection);