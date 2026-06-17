// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]); // This is how we can access the elements
console.log(statuses[2]);
console.log(statuses[-1]); // undefined

console.log(statuses.at(-1)); // skip
console.log(statuses.at(-2)); // fail
console.log(statuses.at(-3)); // pass
console.log(statuses.at(-4)); undefined

// Modify
statuses[1] = "blocked";
console.log(statuses);