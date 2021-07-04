/**
 * Assignment vs comparison
 */

let a = 10;
let b = 7;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);

if ( a == b ) {
    console.log(`Match! Let a and let b are the same value.`);
} else {
    console.error(`No match: let a and let b are NOT same value`);
}

