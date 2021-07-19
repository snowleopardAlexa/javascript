// Sets are new to JS, they are like maps, and arrays

let books = new Set();
books.add("Pride and Prejudice");
books.add("War and Peace").add("Oliver Twist");
books.add("The Little Prince")

console.log(books);
console.log(books.size);

books.delete("Oliver Twist");
// we need to use forEach, because MAP doesn't work in set like in array
// books.forEach
books.map(function (item) {
    console.log(item);
})

console.log("has Oliver Twist", books.has("Oliver Twist"))