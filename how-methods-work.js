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

// how methods work
console.log("The handbag object: ", handbag);
console.log("The pocketNum value: ", handbag.pocketNum);

console.log("Left before: ", handbag.strapLength.left);

handbag.newStrapLength(23 , 34);
console.log("Left after: ", handbag.strapLength.left);
