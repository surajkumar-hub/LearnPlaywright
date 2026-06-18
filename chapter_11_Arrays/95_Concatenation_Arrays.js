// How to combine 2 arrays
let a = [1, 2];
let b = [3, 4];
// let c = a + b; // 1,23,4 - Not a correct way to combine
let c = a.concat(b);
console.log(c); // [ 1, 2, 3, 4 ] 

// spread (modern way) - concatenation. (...)
let d = [...a, ...b]; // ... represents all the elements of A and B
console.log(d); // [ 1, 2, 3, 4 ] 

// Join 
let s = ["pass", "fail", "skip"].join("|");
console.log(s); // pass|fail|skip

let s = ["pass", "fail", "skip"].join("-");
console.log(s); // pass-fail-skip


let s = ["pass", "fail", "skip"].join(" ");
console.log(s); // pass fail skip