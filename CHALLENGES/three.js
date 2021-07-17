// if statement const random object
const randomObject = 5;
if(randomObject < 2) {
    console.log("The Random Object has a value more than 2");
}
else {
    console.log("The Random Object has a value less than 2");
}

// if statement numbers
if (5 < 10) {
    console.log("5 is less than 10");
} else {
    console.log("5 is now bigger than 10");
}

// if statement Math.random
let number = (Math.random() - 3.5) * 5;
if (number < 0) {
    console.log('Number is negative');
}
if (number = 0) {
    console.log('Number is zero');
}
if (number > 0) {
    console.log('Number is positive');
}

// use window.prompt to print if statement in browser console
var answer = window.prompt("Type YES, or NO");
if (answer === "YES" || answer === "NO") {
    console.log("You said YES")
}
else {
    console.log("You said NO")
}

