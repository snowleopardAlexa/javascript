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
//const content = "<h1>" + everydayPack.name + "</h1>";
//document.body.innerHTML = content;

const content = `
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
`;

const main = document.querySelector(".maincontent");
const newArticle = document.createElement("article")
newArticle.classList.add("backpack")
newArticle.setAttribute("id", "everyday")
newArticle.innerHTML = content;

main.append(newArticle);


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

const HarryPotterAndTheGobletOfFire = new Book (
    "Harry Potter and the Goblet of Fire",
    "J.K.Rowling",
    6475859505566,
    "2021",
    691,
    645,
    "Started"
 );
 console.log(HarryPotterAndTheGobletOfFire);

 /**
  * Add navigation section to the DOM 
  */

 const navContent = `
     <li><a href="#">Home</a></li>
     <li><a href="#">About</a></li>
     <li><a href="#">Backpacks</a></li>
     <li><a href="#">Other things</a></li>
     <li><a href="#">Contact</a></li>
     `;

const mainNav = document.createElement("nav")
mainNav.classList.add("main-navigation");
const navList = document.createElement("ul")
navList.innerHTML = navContent
mainNav.append(navList)

document.querySelector(".siteheader").append(mainNav)



