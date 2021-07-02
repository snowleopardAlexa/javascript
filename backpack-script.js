/**
 * Create a class for backpack object type.
 * 
 */

import Backpack from './Backpack.js';
import Book from './Book.js';

const everydayPack = new Backpack (
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    false,
    "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object: ", everydayPack);
console.log("The pocketNum value: ", everydayPack.pocketNum);
console.log("Date acquired: ", everydayPack.dateAcquired);
console.log("Days since aquired: ", everydayPack.backpackAge());

