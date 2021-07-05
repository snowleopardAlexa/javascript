/**
 * Array Methods
 */

let backpackContents = ["bear", "headlamp", "pen"];

// adds new items to the end of the array
backpackContents.push("pencil", 5);

// add new items at the beginning of the array
backpackContents.unshift("pencil", 5);

// For Each loop gives us the ability of manipulating the contents within the array and then doing something with those contents outside of the array without touching the array itself.
backpackContents.forEach(function (item) {
    item = <li>${item}</li>;
    console.log(item);
});

// The function grabs each item in turn, and then it says, if this item has a length that is bigger than or equal to five, meaning there are five or more characters in that item, then return the item. And this will return the first item that meets this requirement. 
let longItems = backpackContents.find(function (item) {
    if (item.length >= 5) {
        return item;
    }
});

console.log("longItems:", longItems)

console.log(backpackContents);

