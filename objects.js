// Objects, properties, accessing objects via dot notation and braket notation

const Lion = {
    name: "Kion",
    age: 1,
    color: "orange",
    weight: 25,
    teethAmount: {
        top: 10,
        bottom: 9
    },
    toothBroken: false,
    toggleTooth: function (toothStatus) {
        this.toothBroken = toothStatus;
    },
    newTeethAmount: function (amountTop, amountBottom) {
        this.teethAmount.top = amountTop;
        this.teethAmount.bottom = amountBottom;
    },
};

// dot notation
console.log("The lion object:", lion);
console.log("The teethAmount:", lion.teethAmount);

// braket notation
var query = "teethAmount";
console.log("The lion object: ", lion[query]);

