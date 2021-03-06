// JavaScript and JSON

// JSON STRINGS are in DOUBLE QUOTES
{ "full_name" : "Alexa Slomski" }
// JSON keys wrapped in "quotes"
// JSON keys can be any valid string
// JSON values have to be one of six data types:
// strings, numbers, objects, arrays, booleans, or null

// JS OBJECTS
// JavaScript Objects - can be any data types, including a function
var info { full name : "Alexa Slomski" };
// quotes on keys not necessary
var info = {
    full_name: "Alexa",
    getName: function() {
        alert(this.full_name);
    }
};

// JS & JSON
// Parsing JSON
var data = '
{
    "name": "Alexa Slomski",
    "position": "Author",
    "courses": [
        "Js and Ajax",
        "Build Facebook",
        "Jquery for Mobile"
    ]
}';

// JSON has to be parsed into JS
// can be done using eval('(' + data + or JSON.parse()))
// JSON.stringify does the opposity of parse
// A library like jQuery can be helpful