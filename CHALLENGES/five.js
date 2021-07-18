// Variables

// var is use for variable in js problem with it that it has
// complicated scope, it is dynamic, it can be changed
var varExample = "var"; 
// const is use for constant values as this
// variable scope is same as let, but it is NOT dynamic
const constExample = "const";
// let variable is like const with a scope and like var - it is dynamic
let letExample = "let";

// var
var Number = 5;
var String = "Hi!";
var boolen1 = true;
var boolen2 = false;
var array = [11, "Hi!", true];
var object = {age:11, speach:"Hi!", likes_Bananas:true};

// loop with variable
var text = "";
var i;
for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}
console.log(text);

// var and const comparision
// var declares a variable, meaning its value will vary. 
// const declares a constant, meaning its value will remain 
// consistant and not change. 
// If your variable changes throughout the program or website, 
// declare it using a var statement. 
// Otherwise, if its value does not change, declare it using 
// a const statement. 

const myConst='A const does not change.';

var myVar='A var does change.';

var myVar=2;

// const
const age; // errror as const cannot be kept un-initialized;
const age = 20 ; 
const age = 21 , // error as once declared const variable cann't be
// re-declared in same scope or different scope. 

// desctructuring assignment syntax is a JS expression that
// makes it possible to unpack values from arrays, or properties
// from objects, into distinct variables.
let array = [2,3];
[a, b] = array;
console.log(a);
console.log(b);

let object = {name: "someone", "weight: 500kg"};
let {name, weight} = object;
console.log(name);
console.log(weight);

//it i similar as doing this
/*
var a = array[0];
var b = array[1]
var name = object.name;
var weight = object.weight;

 */

// var and let
// var has function scope
// let has block scope

function func() {
    if (true) {
        var A = 1;
        let B = 2;
    }
    A++ // 2 --> ok, inside function scope
    B++ // B is not defined --> not ok, outside block scope
    return A + B; // NaN --> B is not defined
}
