// Getter and Setter
let attendance = {
    _list: [],
    set addName(name) {
        this._list.push(name);
    },
    get list() {
        return this._list.join(", ");
    }
};

attendance.addName = "Alexa Slomski";
console.log(attendance.list);

attendance.addName = "Bill Benkelman";
attendance.addName = "Charlie Charslon";
console.log(attendance.list);

// getter and setter in class
class Hike {
    constructor(distance, pace) {
        this.distance = distance;
        this.pace = pace;
    }
    get lengthInHours() {
        return `${this.calcLength()} hours`;
    }
    calcLength() {
        return this.distance / this.pace;
    }
}

const mtTallac = new Hike(10,2);
console.log(mtTallac.lengthInHours);
