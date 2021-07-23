// Block-scoped are only available in the block they're declared
// LET - mutable, CONST - immutable

let animal1 = 'Lion',
const animal2 = 'Cheetah'

console.log(animal1, animal2);

// this will return an error because const is immutable
animal2 = 'Tiger';
console.log(animal2);

const wildAnimal = () => {
    let animal4 = 'Eagle';
    // animal3 works only inside the block-scoped IF 
    if (animal2 === 'Cheetah') {
        let animal3 = 'Running fast';
        console.log(`Our animals are ${animal1}, ${animal2}, and ${animal3}`)
    }
    // this will work because Eagle is within the block-scoped
    console.log(animal4);
}

// error - we're calling variables outside the block-scoped
wildAnimals();
console.log(animals3);

/**
 * Challenge
 */

// ES6 uses mostly CONST nad LET
const animals = [
    {
        name: 'Jurin Pak',
        type: 'bird',
        sound: 'cwir',
        power: 'flying'
    },
    {
        name: 'Kovu',
        type: 'wild cat',
        sound: 'roar',
        power: 'sharp claws'
    },
    {
        name: 'Kiara',
        type: 'wild dog',
        sound: 'howl',
        power: 'strong bite'
    }
]

const wildAnimals = () => {
    // global variable animals available
    console.log(animals);

    animals.map((animal) => {
        if (animal.power === 'strong bite') {
            // block-scoped power
            let power = animal.power;
            console.log(`${animal.name} is ${animal.type} and has a power of ${power}`);
        }
        // block-scoped power isn't available here
        // console.log(animal.power)
    })
}

wildAnimals();



