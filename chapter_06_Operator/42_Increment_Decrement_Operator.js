// Pre Increment
// Pre increment -> ++a -> increase the value and then assign
let a = 10;
let b = ++a; // (increment the a by 1) It means a = a+1
console.log(b); // 11
console.log(a); // 11

// Post Increment
// post ++ -> first assign the value and then increase
let a_post = 10;
let b = a_post++;
console.log(a_post); // 11
console.log(b); // 10

// Pre Decrement
let a = 10;
let b = --a; // (Decrement the a by 1)
console.log(b); // 9
console.log(a);  // 9

// Post Decrement
let a = 10;
let b = a--; // (Decrement the a by 1)
console.log(b); // 10
console.log(a);  // 9

let a = 34;
let result = a++;
console.log(result); // 34
console.log(a); // 35 