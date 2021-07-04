/**
 * LET 
 * when should we use VAR and LET?
 *  For most situations, when you want to use a changeable or mutable variable, you should use a let
 * --> that includes when you want to use it in global scope, because when you declare a let in global scope, it will apply everywhere except where you re-declare it. 
 * the VAR is only really useful if you want a mutable variable with global scope all the time, but that situation is quite rare and is a special case. 
 * so the default is, when you want a changeable or mutable variable use a LET.
 */

// global scope
 let color = "purple";

 document.querySelector(".left").style.backgroundColor = color;
 document.querySelector(".left .color-value").innerHTML = color;
 
 color = "skyblue";
 
 function headingColor() {
    // local scope
   let titleColor = "blue";
   document.querySelector(".title").style.color = titleColor;
   console.log("inside:", titleColor);
 }

 /**
  * What happens if we try to call locally scoped variable outside its scope?
  * JS stops rendering because it is an error
  */ 
 console.log("outside:", titleColor);
 
 headingColor();
 
 document.querySelector(".right").style.backgroundColor = color;
 document.querySelector(".right .color-value").innerHTML = color;