// maps are like objects and arrays and they are new to JS

let course = new Map();

course.set("react", {desc: "ui"});
course.set("jest", {desc: "testing"});

console.log(course);
console.log(course.react);
console.log(course.get("react"));

let details = new Map([
    [new Date(), "today"],
    [2, {javascript: ["js", "node", "react"] }],
    ["items", [1,2]]
]);

console.log(details.size);

details.forEach(function (item) {
    console.log(item);
});

