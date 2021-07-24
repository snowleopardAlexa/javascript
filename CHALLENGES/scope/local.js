  // Local variables - declared inside the function
  // lifetime: from where the function is declared to the 
  // moment the function is completed
  // many functions can have the same variable name

  const wildAnimals = () => {
      var animal1 = 'Kovu';
      let animal2 = 'Kion';

      return `Our cats are ${animal1} and ${animal2}`;
  }

  const wildAnimals2 = () => {
    var animal1 = 'Kiara';
    let animal2 = 'Nala';

    return `Our cats are ${animal1} and ${animal2}`;
}

  console.log(wildAnimals());

  // INCORRECT - animal1, animal2 aren't available globally
  console.log(animal1, animal2);

  // this WILL WORK - we are printing two functions
  console.log(wildAnimals(), wildAnimals2());

/**
 * Challenge
 */

// global variable
var numberOfAnimals = 45;

const animals = () => {
    // local variable
    let animalsPerNumber = 60;

    // local as well
    let totalAnimals = numberOfAnimals * animalsPerNumber;

    return `We have ${totalAnimals} at our zoo`;
}

console.log(animals());

// numbersOfAnimals & totaL Animals are not available globally

// test if variables are local - Reference Error: variables are not defined
console.log(animalPernumber, totalAnimals);

// this works because the variable is globally available 
console.log(numberOfAnimals);
