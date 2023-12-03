// create a new unordered list (ul) element
const newUL = document.createElement("ul");
// remove the paragraph element in the nav-bar
document.querySelector("nav > p").remove();
// add your new ul element to the nav-bar
document.querySelector("nav").appendChild(newUL);
// create two new list item (li) elements, and add some text to them
const LI1 = document.createElement("li");
const LI2 = document.createElement("li");

LI1.textContent = "First List element";
LI2.textContent = "Second List Element";
// add the li elements to the ul in the nav-bar
newUL.appendChild(LI1);
newUL.appendChild(LI2);
