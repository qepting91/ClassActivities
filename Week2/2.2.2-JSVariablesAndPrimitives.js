// create a variable called "name" that references a string
const name = "Quinten";
console.log(typeof name);
// create a variable called "favoriteSong" that references a string
let favoritesong = "Oh Elizabeth";
console.log(typeof favoritesong);
// create a variable called "wage" that references a number
let wage = 30;
console.log(typeof wage);
// create a variable called "age" that references a number
let age = 33;
console.log(typeof age);
// create a variable called "onlyChild" that references a boolean
const onlyChild = false;
console.log(typeof onlyChild);
// create a variable called "satisfied" that references a boolean
let satisfied = true;
console.log(typeof satisfied);
// create a variable called "favoriteThing" that references ANY primitive value
let favoriteThing = "leaping lizards";
// print the data type of "favoriteThing"
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoritesong = "Cat's in the Cradle";
console.log(typeof favoritesong);
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = 21;
console.log(typeof favoriteThing);
// Happy Birthday!
// Reassign "age" to a new value
age = 34;
console.log(typeof age);

// You got a big raise at work.
// Reassign "wage" to a new value
wage = 45;
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log(
  "My name is " +
    name +
    " my goal wage is " +
    wage +
    " but when I am asked if I am an only child...the answer is " +
    onlyChild
);
