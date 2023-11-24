let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = 0; 
y = []; 
z = null; 
// print x, y, and z
console.log(x);
console.log(y);
console.log(z);

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// a = "";
b.push(false);
c.newProperty = false;
// using BRACKET NOTATION, assign a value to b
b[0] = "New Value";
// using DOT NOTATION, assign a PROPERTY to c
c.myProperty = "Property Value";
// using DOT NOTATION, assign a METHOD to c
c.myMethod = function() {
    return "This is a method in object c";
};
// using BRACKET NOTATION, call the method in c
console.log(c["myMethod"]());
// print a, b, and c
console.log(a);
console.log(b);
console.log(c);