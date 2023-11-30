const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const lastItem = nums.pop(); //0
const secondLastItem = nums.pop(); //1
// remove each of the first two items with shift(), saving each item to a variable
const firstitem = nums.shift(); //6
const seconditem = nums.shift(); //5
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(secondLastItem);
nums.unshift(lastItem);
nums.push(seconditem);
nums.push(firstitem);

console.log(nums);
