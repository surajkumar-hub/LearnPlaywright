/* Can you please tell me the difference between the null vs undefined in JS 
with simple example. Please create a 21_null_undeifned.js in the chatper_05_Literal

Simple examples showing the difference between null and undefined in JavaScript
*/

// 1) undefined: variable declared but not assigned
let a;
console.log('a =', a); // a = undefined
console.log('typeof a =', typeof a); // typeof a = undefined

// 2) null: explicitly assigned "no value"
let b = null;
console.log('b =', b); // b = null
console.log('typeof b =', typeof b); // typeof b = object (historical quirk)

// 3) Functions without return give undefined
function noReturn() { }
console.log('noReturn() =', noReturn()); // undefined

// 4) Accessing missing object properties -> undefined
const obj = { x: 1 };
console.log('obj.y =', obj.y); // undefined

// 5) Equality comparisons
console.log('null == undefined ->', null == undefined); // true (loose equality)
console.log('null === undefined ->', null === undefined); // false (strict equality)

// Summary (short):
// - undefined means a variable has been declared but not assigned a value, or a value is missing.
// - null is an explicit assignment used to indicate "no value".
// Use strict equality (===) when distinguishing them.

// Try running: node 21_null_undeifned.js
