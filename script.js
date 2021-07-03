const handbag = {
    name: "Anna Karenina",
    volume: 20,
    color: "red",
    pocketNum: 3,
    strapLength: {
        left: 24,
        right: 24,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};

console.log("The handbag object:", handbag);
// accessing object properties: dot notation, we use the dot to separated different properties
console.log("The pockets value:", handbag.pocketNum);
// nested object properties
console.log("Strap length L:", handbag.strapLength.left);

// with dot notation you can't access the property that starts with a number, quotation, hyphen. 
// --> bracket notation can be used when the convention is broken
var query = "pocketNum";
// bracket notation - it gives us more control, enables us to do advanced things
console.log("The pocketNum value:", handbag[query]);



