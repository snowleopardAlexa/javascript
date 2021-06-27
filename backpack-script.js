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

// template literal
const content = `
<main>
<article>
    <h1>Everyday Backpack</h1>
    <ul>
        <li>Volume:</li>
        <li>Color:</li>
        <li>Age:</li>
        <li>Number of pockets:</li>
        <li>Left strap length:</li>
        <li>Right strap length:</li>
        <li>Lid status:</li>
    </ul>
</article>
</main>
`;

document.body.innerHTML = content;

console.log("The everydayPack object: ", everydayPack);
console.log("The pocketNum value: ", everydayPack.pocketNum);
console.log("Date acquired: ", everydayPack.dateAcquired);
console.log("Days since aquired: ", everydayPack.backpackAge());


// Book parameters order: title, author, ISBN, pubYear, pageNumber, currentPage, readStatus
const HarryPotterAndTheSorcererStone = new Book (
   "Harry Potter and the Sorcerer Stone",
   "J.K.Rowling",
   647585950033,
   "2019",
   691,
   691,
   "Finished"
);
console.log(HarryPotterAndTheSorcererStone);