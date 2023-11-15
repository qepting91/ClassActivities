// create five variables and assign them values
let whiteranger = "Tommy";
let redranger = 2;
let blueranger = true;
let yellowranger = null;
let pinkranger =
  // each variable should reference a different primitive data type
  // REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

  // print the type of each variable in this order:
  // string, number, boolean, undefined, null
  console.log(typeof whiteranger);
console.log(typeof redranger);
console.log(typeof blueranger);
console.log(typeof pinkranger);
console.log(typeof yellowranger);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let gogopowerrangers = `Everyone knew that ${whiteranger}, was the best ${blueranger}`;
// reassign the value of the variable that references "null"
yellowranger = 3;
// print the value and its type
console.log(typeof yellowranger);
// print a variable that causes a ReferenceError
//console.log(saba);
// alter the previous line to no longer cause a ReferenceError
let saba = "The most iconic power rangers weapon of all time";
console.log(typeof saba);
console.log(saba);
