/**
 * CONST - once it is defined, you can't assign a new value to it
 * - use CONST for any unchangeable value
 * - we can't reassign a value to CONST
 * 
 * - we can't reassign values to a const --> we can't put new stuff in the const box. 
 * - BUT we can change the status or properties or other features of what the constant holds. 
 * - we can still change the properties of an object inside a const. 
 * - we can also change the entries in an array inside a const, BUT we just can't reassign the whole constant to replace the object with another object or the array with another array or an object with an array. 
 * - for any data that should be protected from accidentally being overwritten, like an object, or an array or a function, use a const.
 */

// from let - const - we are breaking the script, we can't change the color.
 const color = "purple";

 document.querySelector(".left").style.backgroundColor = color;
 document.querySelector(".left .color-value").innerHTML = color;
 
 color = "skyblue";
 
 function headingColor() {
   let color = "blue";
   document.querySelector(".title").style.color = color;
 }
 
 headingColor();
 
 document.querySelector(".right").style.backgroundColor = color;
 document.querySelector(".right .color-value").innerHTML = color;


