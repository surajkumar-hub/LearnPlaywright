console.log(null >= 0); //  true - null == 0 or null > 0
console.log(null === 0); // false

// ??  Nullish
/* The Nullish Coalescing Operator (??) returns the right-hand value only 
when the left-hand value is null or undefined */

let amul = null;
let milk_required = amul ?? "nandani milk";
console.log(milk_required);

// If leftValue is null or undefined → returns rightValue
// Otherwise → returns leftValue

let name = null;

console.log(name ?? "Guest"); // Guest
// Because name is null, the default value "Guest" is returned.

let city;

console.log(city ?? "Bangalore"); // Bangalore
// Because city is undefined.

let count = 0;

console.log(count ?? 100); // 0
// 0 is not null or undefined, so 0 is returned.

let message = "";

console.log(message ?? "No Message"); // 

// Again, "" is not null or undefined, so it is returned.