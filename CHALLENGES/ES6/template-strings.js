function print(firstName) {
    // old way
    // console.log("Hello " + firstName);
    // ES6 way - template strings --? backticks
    console.log(`Hello ${firstName}`);

}

print("Isabelle");

function createEmail(firstName, price) {
    let shipping = 5.95;
    console.log(`Hi ${firstName}! Thanks!
    Total: $${price}
    Shipping: $${shipping}
    Grand Total: $${price + shipping}
    `);
}

createEmail("Guy", 100);