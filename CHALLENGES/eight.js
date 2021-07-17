// operators
let a = { a: 0, b: 1};
let b = { b: 2, c: 3};
let c = { ...a, ...b};

console.log(c);

// objects
let cats = { lion: 'big mane', claws: 20 };
let birds = { tucan: 'big beak', claws: 8 };

let wildCats = {...cats};
let wildBirds = {...birds};

console.log(wildCats);
console.log(wildBirds);

// strings
var string = "This is \
 Joe's favorite \
 chinese restaurant. "

 // method and strings - it executes in the console browser
 // otherwise is undefined
 var myString = "This is my string"
 myString.length;
 myString.toUpperCase();
 myString.toLowerCase();

 // boolean
 var myLocation = "LA"
 var myOtherLocation = "NY"
 // === equal strictly
 myLocation === myOtherLocation
 false

 // objects
 var animals = {
     lion: 'Chewi',
     tiger: 'Togo',
     jaguar: 'Simba'
 }


