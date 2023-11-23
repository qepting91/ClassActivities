// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function twoParams(param1, param2) {
  console.log(param1, param2);
  return param1 + param2;
}

// invoke the function and pass in two numbers
twoParams(1,2);

// invoke the function and pass in more than two numbers
twoParams(1, 2, 3, 4);
// invoke the function and pass in only one number
twoParams(14);
// change the function to set default values for the parameters
function functionWithTwoDefaultParams(a = 4, b = 5) {
  console.log(a, b);
  return a + b;
}
console.log(functionWithTwoDefaultParams());
console.log(functionWithTwoDefaultParams(1, 2));
// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
function functionWithRestParam(a, b, ...c) {
  console.log(a, b);
  console.log(c);
  return a + b;
}


// add a line to the function's body to print the value of the rest operator
functionWithRestParam(1, 2, 3, 4, 5);
// again, invoke the function and pass in more than two numbers
