// Looping through a content

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const nestedObjects = {
    item01: {
        name: "piggy",
        type: "toy",
        weight: 30,
    },
    item02: {
        name: "headlamp",
        type: "equipment",
        weight: 120,
      },
      item03: {
        name: "pen",
        type: "tool",
        weight: 30,
      },
      item04: {
        name: "pencil",
        type: "tool",
        weight: 30,
      },
      item05: {
        name: "eraser",
        type: "tool",
        weight: 40,
      },
      item03: {
        name: "water bottle",
        type: "equipment",
        weight: 1300,
      },
};

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// for loop
for (let i = 0; i < stuff.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = stuff[i];
    stuffList.append(listItem);
}




