// String interpolation
const age = 4
console.log(`I'm ${age} years old!`)

const animal = "cow";
const desc = `The ${animal} jumped over the moon`;
console.log(desc);

// Regular string vs template literals
const rgb = "rgb(" + r + "," + g + "," + b + ")";
var rgb = `rgb(${r}, ${g}, ${b})`;

// Must use BACKTICKS, in order to work.
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);