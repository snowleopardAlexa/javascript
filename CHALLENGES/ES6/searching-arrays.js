const { ConsoleWriter } = require("istanbul-lib-report");

let cities = [
    "NYC",
    "LA",
    "Seatlle",
    "JC",
    "Corona"
];

// true
console.log(cities.includes("NYCC"));
// false
console.log(cities.includes("Boston"));
