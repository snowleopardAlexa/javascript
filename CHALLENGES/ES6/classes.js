// Classes
class Vehicle {
    constructor(desc, wheels) {
        this.desc = desc;
        this.wheels = wheels;
    }
    describeYourself() {
        console.log(`I am a ${this.desc} with ${this.wheels} wheels.`);
    }
  }

  let coolSkiVan = new Vehicle("cool ski van", 4);

  console.log(coolSkiVan);
  // we don't need to repeat console.log
  coolSkiVan.describeYourself();
