// arrays with spread operator

let cats = ["Biscuit", "Jungle"];
let dogs = ["Stella", "Camper"];

// ... 3 dots take elements from cats and dogs array and push it 
// inside the animal array 
let animals = ["Miro", "Kion", ...cats, ...dogs];
console.log(animals);
// output
// Miro, Kion, Biscuit, Jungle, Stella, Camper
