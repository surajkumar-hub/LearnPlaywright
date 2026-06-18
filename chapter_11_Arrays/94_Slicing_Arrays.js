// Slicing & Combining
let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array, does not mutate actual -> 
// ( start, end-1) . index = 0
// Don't give the end, it will automatically take from start to end. 

console.log(arr.slice(1, 3)); // [ 2, 3 ] ( start, end-1) 

console.log(arr.slice(2, 4)); // [ 3, 4 ] 
console.log(arr.slice(2, 5)); // [ 3, 4, 5 ] 

// When end is not mentioned
console.log(arr.slice(2)); // [ 3, 4, 5 ] 
// If somebody doesn't mention the end, we"ll get everything till the end

console.log(arr.slice(-2)); // [ 4, 5 ]
// -2 basically means it"ll go in reverse. Here 5 is -1, 4 is -2, 3 is -3.....
// Starting from -2 to all the elements. It"ll not go like this -3, -4, -5
// Instead it"ll go -2, -1

console.log(arr.slice(0)); // [ 1, 2, 3, 4, 5 ]

// slice vs splice
let arr = [10, 20, 30, 40, 50];
let s = arr.slice(1, 4);
console.log(arr); // [ 10, 20, 30, 40, 50 ]
console.log(s); // [20, 30, 40]

let arr = [10, 20, 30, 40, 50];
let removed = arr.splice(1, 2);  // It means from index 1 remove 2 element
console.log(removed); // [20, 30]
console.log(arr); // [ 10, 40, 50 ]

// For safer side use slice because splice modifies the original array