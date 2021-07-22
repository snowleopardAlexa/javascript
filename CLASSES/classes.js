// ES6 
// class changes get passed down
// classes aren't hoisted
// Two ways to declare classes: CLASS DECLARATION, CLASS EXPRESSION
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} and
        a beautiful ${this.color} color!`
    }
}

// instance of the class Car
const cx5 = new Car(4, 'V6', 'red');

console.log (cx5);
console.log (cx5.carStats());