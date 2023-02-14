let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?

/*
ANSWER: 4
Because arrays are objects. So both shoppingCart and fruits are the references to the same array.
 */