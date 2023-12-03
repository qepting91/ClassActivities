const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// Concatenate arrTwo, 4, and "e" to arrOne
const arrThree = arrOne.concat(arrTwo, 4, "e");

// Print the new, merged array
console.log(arrThree);

// Join the merged array and print the result
const joined = arrThree.join(",");
console.log(joined);
