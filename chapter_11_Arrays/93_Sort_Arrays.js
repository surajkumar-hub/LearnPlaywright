// Sort the Array
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // [ 'apple', 'banana', 'cherry' ]

let number = [3, 1, 4];
number.sort()
console.log(number); // [ 1, 3, 4 ]

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums); // [ 1, 10, 2, 21 ] - Natural Sorting, lexicographic Sorting

// Normal sorting
nums.sort((a, b) => a - b); // Ascending
console.log(nums); // [ 1, 2, 10, 21 ]
nums.sort((a, b) => b - a); // Descending
console.log(nums); // [ 21, 10, 2, 1 ]

/* By default, arrays are sorted in lexicographic order, which means they will
be sorted like a string, like the first characters. 

But if you need to properly sort them as a number, you need to use the 
`arrow function` */

