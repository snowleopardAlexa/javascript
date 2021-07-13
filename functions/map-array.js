// map() array mehod

// You'll see the map method used a lot in modern JavaScript especially in JavaScript frameworks. And a lot of the time it's used to just iterate through an array. This is an anti-pattern and it should be avoided. Map is specifically for when you need to create a new array to do something further with the data. If you just want to iterate through an array, and then output the content right away, use a foreach loop, that's what it's for. 
// So if you need to iterate through an array, use foreach. If you need to create a new array, out of an old array and do something to each of the items before you do so, then use map.

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = documen.createElement("ul");

// forEach() array method
stuff.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    stuffList.append(listItem);
});

article.append(stuffList)

// map() through the stuff array to make a new stuffItems array.
const stuffItems = stuff.map((item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    return listItem;
});

// append each element from the stuffItems array to the stuffList <ul>
stuffItems.forEach((item) => {
    stuffList.append(item);
});



