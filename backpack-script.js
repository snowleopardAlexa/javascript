/**
 * Create a class for backpack object type.
 * 
 */

import Backpack from './Backpack.js';
import Book from './Book.js';

const everydayPack = new Backpack (
    "Green Backpack",
    30,
    "grey",
    15,
    26,
    false,
    "December 5, 2018 15:00:00 PST"
);

/**
 * 
 *  template literal
 * const content = `
<main>
<article>
    <h1>${everydayPack.name}</h1>
    <ul>
        <li>Volume: ${everydayPack.volume}</li>
        <li>Color: ${everydayPack.color}</li>
        <li>Age: ${everydayPack.backpackAge()}</li>
        <li>Number of pockets: ${everydayPack.pocketNum}</li>
        <li>Left strap length: ${everydayPack.strapLength.left}</li>
        <li>Right strap length: ${everydayPack.strapLength.right}</li>
        <li>Lid status: ${everydayPack.lidOpen}</li>
    </ul>
</article>
</main>
`;
document.body.innerHTML = content;
 * 
 * */ 

// traditional string output
// const content = "<h1>${everydayPack.name}</h1>";

// string concatenation - outdated
const content = "<h1>" + everydayPack.name + "</h1>";

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