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