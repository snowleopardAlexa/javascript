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
