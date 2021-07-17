const { whitesmoke } = require("color-name");

// Loop while
var i = 0;
while(i < 10) {
    console.log(i);
    i++;
}
// Alternative - you could break out of a lopp like so:
let i = 0;
while(true) {
    i++;
    if(i===3) {
        break;
    }
}

