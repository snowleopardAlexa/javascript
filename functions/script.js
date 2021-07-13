// function declaration:
// parameters are inside parenthesis
function doSomeMath(a,b) {
    let c = a + b;
    return c;
}

// function expression: - commonly used in React 
const doMoreMath = function(a,b) {
    let c = a * b;
    return c;
}

console.log("Do some math:", doSomeMath(5,6));
console.log("Do more math:", doMoreMath(5,6));

// Immediately envoked function expression IIFE
(function () {
    let a = 5;
    let b = 6;
    let c = doSomeMath(a,b);
    console.log(`The sun of a and b is: ${c}`);
})();

// Object
const greenPack = {
    name: "Frog Pack",
    color: "green",
    volume: 8,
    pocketNum: 3,
};


