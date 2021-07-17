const { whitesmoke } = require("color-name");

// Loop while - we can use here var or let, but not const
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

// do...while - we can use let here, but not const
var result = '',
var i = 0;
do {
    i += 1;
    result += i + '';
}
while (i > 0 && i < 5);
console.log(result);