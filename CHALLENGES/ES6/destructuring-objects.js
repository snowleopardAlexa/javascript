// Destructuring objects

// classic - old way
const sandwich = {
    title: "Hottydoti",
    price: 7,
    desc: "A hot one",
    ingredients: [
        "bread",
        "chilli peppers",
        "dressing",
        "cheese",
        "hot sauce"
    ]
};

console.log(sandwich.title);
console.log(sandwich.price)

// destructuring objects way
const {title, price} = {
    title: "Hottydoti",
    price: 7,
    desc: "A hot one",
    ingredients: [
        "bread",
        "chilli peppers",
        "dressing",
        "cheese",
        "hot sauce"
    ]
};

console.log(title);
console.log(price);

// complex version
const vacation = {
    destination: "Chile",
    travelers: 2,
    activity: "skiing",
    cost: "so much"
};

function marketing({destination, activity}) {
    return `Come on ${destination} and do some ${activity}`;
}

console.log(marketing(vacation));