/**
 * Create a class for backpack object type.
 * 
 */

import Backpack from './Backpack.js';

const everydayPack = new Backpack (
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    false
);

console.log("The everydayPack object: ", everydayPack);
console.log("The pocketNum value: ", everydayPack.pocketNum);