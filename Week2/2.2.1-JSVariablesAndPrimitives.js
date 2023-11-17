// create a constant variable (const)
const name = "Quinten";
// create a variable that can be reassigned (let)
let language = "English";
console.log(typeof language);
// create three variables and assign them values of different data types (=)
let age = 33;
const whatif = true;
const fancypant = "cat's pajamas";

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof age);
console.log(typeof fancypant);
// change the value referenced by a variable (dynamic typing)
language = 7;
// print the type of the variable you just changed (typeof)
console.log(typeof language);
// create variables and give them values to complete the sentences that will print  below.
language = "English";
// Which variables need to be created?
// What type of data needs to go in each variable?

console.log(
  "Hello, my name is " +
    name +
    ", and I am learning " +
    language +
    ". I have been practicing for only " +
    age +
    " weeks, so my status as a master is: " +
    whatif +
    "."
);
