// Checking Arrays

// Check if something is an array
let result = Array.isArray([1, 2, 3]);
console.log(result); // true    
let result1 = Array.isArray("a");
console.log(result1); // false

// every & some

[80, 90, 85].every(s => s >= 70); // true
// It means find every element which is greater than or equal to 70.
// If all the elements are greater than or equal to 70, then it"ll print 'true'

[80, 60, 85].every(s => s >= 70); // false

// Playwright API 
[200, 201, 203].every(statuscode => statuscode > 200);

// some — AT LEAST ONE must pass
[80, 60, 85].some(s => s < 70); // true
[80, 90, 85].some(s => s < 70); // false

// arrow : s => s >= 70
// s - This is the parameter
// s >= 70 - This is the condition
