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

