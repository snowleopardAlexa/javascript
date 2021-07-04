/**
 * SCOPE and VAR
 */

// globally scoped
var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

//  VAR is defined as a globally scoped variable. That means if you first assign a value to have VAR, and then inside a function, assign it a new value, that new value inside the function takes effect in all corresponding code. Even outside the function.
// VAR is globally scoped. So even though we are changing the value of the VAR, inside a function, that new assignment, applies everywhere in the document, after this instance. So, JavaScript reads from the top down, says, color is purple. Now color is sky blue. Now color is blue. And that therefore, at the bottom here we get blue. 

//function headingColor() {
//    color = blue;
//    document.querySelector(".title").style.color = color;
// }

// if you have the call to the function, over this item. So if I cut this out and paste it in after, you'll see the function is only invoked, after we've already set the color of the right box. And now we get this light blue instead. This a scope issue. It becomes really hard to understand why, sometimes the color is what it's supposed to be, and other times it's not. And looking at the code here, it's not immediately obvious what's happening. This issue has been a pain in the side of JavaScript developers, since the very beginning --> that's why we have LET and CONST now
//headingColor();

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

function headingColor() {
    color = blue;
    document.querySelector(".title").style.color = color;
}

headingColor();

