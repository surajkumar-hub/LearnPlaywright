let arr = [1, 2, 3];
console.log(arr);

// Add new elements to the end of an array
arr.push(4);
console.log(arr); // [ 1, 2, 3, 4 ]

// Removes the last element from an array
arr.pop();
console.log(arr); // [ 1, 2, 3 ]

// Add multiple elements
arr.push(5, 6);
console.log(arr); // [ 1, 2, 3, 5, 6 ]

// Inserts new elements at the start of an array
arr.unshift(0);
console.log(arr); // [ 0, 1, 2, 3, 5, 6 ]

// Removes the first element from an array
arr.shift();
console.log(arr); // [ 1, 2, 3, 5, 6 ]


console.log(arr);
arr.unshift(100);
console.log(arr);
arr.shift();
console.log(arr);