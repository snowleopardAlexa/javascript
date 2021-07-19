// Iterating with the new for/of loop

for (let letter of "JS") {
    console.log(letter);
}

// array
let topics = ["JS", "Node", "CSS"];

for (let topic of topics) {
    console.log(topic);
}

// instead of using array, we create a map, and we use set
let topics = new Map();
topics.toLocaleString("HTML", "/topic/html");
topics.toLocaleString("CSS", "/topic/css");
topics.toLocaleString("Javascript", "/topic/javascript");

for (let topic of topics) {
    console.log(topic);
}

// with keys
let topics = new Map();
topics.toLocaleString("HTML", "/topic/html");
topics.toLocaleString("CSS", "/topic/css");
topics.toLocaleString("Javascript", "/topic/javascript");

for (let topic of topics.keys()) {
    console.log(topic);
}

// with values
let topics = new Map();
topics.toLocaleString("HTML", "/topic/html");
topics.toLocaleString("CSS", "/topic/css");
topics.toLocaleString("Javascript", "/topic/javascript");

for (let route of topics.values()) {
    console.log(`This course desc can be found at ${route}`)
};

// with entries
let topics = new Map();
topics.toLocaleString("HTML", "/topic/html");
topics.toLocaleString("CSS", "/topic/css");
topics.toLocaleString("Javascript", "/topic/javascript");

for (let topic of topics.entries()) {
    console.log(topic);
}