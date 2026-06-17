let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf — returns first index, or -1 if not found
results.indexOf("fail"); //1
results.indexOf("skip"); // -1

// lastIndexOf — searches from the end
results.lastIndexOf("fail"); // 4


// includes — returns boolean (true or false)
results.includes("error"); // true
results.includes("skip"); // false


// find — returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20); // it means we are trying to find an element x, 
// which is greater than 20 
console.log(r); // 25

// findIndex
nums.findIndex(n => n > 20); // It means we are trying to find an element n,
// that is greater than 20. It"ll give the index of those element i.e. 1, 2, 3

nums.findLast(n => n > 20); // 45 
nums.findLastIndex(n => n > 20);// 3