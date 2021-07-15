const { whitesmoke } = require("color-name");

// Loop while - we can use here var or let, but not const
var i = 0;
while(i < 10) {
    console.log(i);
    i++;
}
// Alternative - you could break out of a lopp like so:
let i = 0;
while(true) {
    i++;
    if(i===3) {
        break;
    }
}

// do...while - we can use let here, but not const
var result = '',
var i = 0;
do {
    i += 1;
    result += i + '';
}
while (i > 0 && i < 5);
console.log(result);

// number
var text = "";
var i = 0;
do {
   text +="The number is " + i;
   i++;
}
while (i < 5);
console.log(text);

// loop with while
let count = 0;
let max = 10;
while (count < max) {
    console.log(count)
    count = count + 1
}

// for loops: sequential
for (var i = 0; i < 10; i+= 1) {
   console.log(i);
}

// looping over an array
var pageNames = [
    'Home',
    'About us',
    'Contact us',
    'News',
    'Blog'
];
for (i = 0; i < pageNames.length; i += 1) {
    if (document.title === pageNames[i]) {
        console.log('We are here: ' + pageNames[i]);
    } else {
        console.log('We are not here: ' + pageNames[i]);
    }
}

// for loop: enumerative
var pageNames = [
    'Home',
    'About us',
    'Contact us',
    'News',
    'Blog'
];
for (var p in pageNames) {
    console.log(p, pageNames[p]);
}

for (var p in pages) {
    if (pages.hasOwnProperty(p)) {
        console.log(p, pages[p]);
    }
}

// while loops same as for loop
var i = 0;
while (i < 10) {
    console.log(i + "...This will go until we hit 10") 
        i += i;
    }

// why use while? --> you don't know how many times
// you need to loop over something
var myArray = [true, true, true, true, true];
var myItem = null;

while (myItem !==false) {
    console.log(
        "myArray has " +
        myArray.length + 
        " items now. This loop will go until we pop a false."
    );
    myItem = myArray.pop();
}
