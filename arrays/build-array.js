// A new array
const serengetiArray = [
  "zebra",
  "flamingo",
  "lion",
  "cheetah",
  "leopard",
  "giraffe",
  "crocodile",
  "WHITE rhineo"
];

// console.log the original array
console.log("Original array:", serengetiArray);

// remove the last item
serengetiArray.pop();
console.log("New array:", serengetiArray);

// add last item as the first item on the array
serengetiArray.unshift(serengetiArray.pop())
console.log("Last item is now first:", serengetiArray);

// sort items by alphabetical order:
// capitalized letters are sorted as first in the alphabetical order
// unit tests code
serengetiArray.sort();
console.log("Alphabetical order array:", serengetiArray);

// find "crocodlie":
const foundItem = serengetiArray.find(item => item === "crocodile");
console.log("Found item:", foundItem)

// find and remove an item:
let remove = "crocodile"
serengetiArray.splice(serengetiArray.indexOf(remove), 1)
console.log(`Array with "${remove}" removed:`, serengetiArray)

