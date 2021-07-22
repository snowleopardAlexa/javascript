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
        return `This car has ${this.doors}, a ${this.engine} and
        a beautiful ${this.color} color!`
    }
}