// "this" keyword

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPak = {
    name: "Frog Pack",
    color: "green",
    volume: 8,
    pocketNum: 3,
    newVolume: function (volume) {
        console.log("this.volume in the method:", this.volume);
        this.volume = volume;
        console.log("this.volume after update:", this.volume);
        (function () {
            console.log("this.volume in nested function:", this.volume)
        })();
        (() => {
            console.log("this.volume in nested function:", this.volume)
        })();
    },
};

