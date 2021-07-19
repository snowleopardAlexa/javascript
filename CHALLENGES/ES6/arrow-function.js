// Arrow functions

// normal function
let studentList = function(students) {
    console.log(students);
}

studentList(["A", "B", 'C']);

// arrow function
// you can remove curly braces if there is only one function
let studentList = (students) => {
    console.log(students);
};

studentList(["A", "B", 'C']);

// normal function
let list = ["apple", "banana", "cherry"];
list.map(function (item) {
    console.log(item);
});

// arrow function
let list = ["apple", "banana", "cherry"];
list.map((item) => {
    console.log(item);
});


/**
 * Understanding this in arrow functions
 */ 
// function with key word this
let person = {
    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function () {
        this.hobbies.forEach(function (hobby) {
            let string = `${_this.first} likes to ${hobby}`;
            console.log(string);
        });
    }
};

person.printHobbies();

// arrow function keeps this in the scope
let person = {
    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function () {
        this.hobbies.forEach((hobby) => {
            let string = `${this.first} likes to ${hobby}`;
            console.log(string);
        });
    }
};

person.printHobbies();
