// Constructor Functions are great for building objects, but building large number
// of functions using constructor functions alone can have serious memory impact on your apps
// Constructor creates one object with some custom properties, along with a few common
// properties and methods, then another, another. After building a few objects, you have
// duplicate methods
// SOLUTION: FEATURE PROTOTYPES --> 
//  You can think of a prototype as a customizable object you can use as a starting point to build out other objects. And crucially, all the objects you build using a prototype reference the common properties and methods that are stored in that prototype object, rather than storing their own separate copies. So for instance, in a travel app, I might create a prototype containing methods used to perform some common operations in calculating prices and booking. And then, I could build out objects using that prototype for use in different parts of the app. Think booking plane tickets, hotel rooms, car rentals, et cetera, each with their own custom needs, but sharing some core functionality. And then, when I build out those objects, their actual content is only the custom properties and methods they need, with references to the prototype for the shared functionality. This aspect of prototypes, the fact that common keys and values are shared by reference, rather than by duplication, is key to the usefulness of prototypes.

