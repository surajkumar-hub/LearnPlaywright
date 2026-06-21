const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user); // { name: 'John', age: 30, email: 'john@example.com' }
console.log(user.name); // John
console.log(user["age"]); // 30


// Dynamic property access
const key = "age";
console.log(user[key]); // 30 - Because of dynamic property access is allowed

// Adding/modifying properties
user.city = "NYC";
user.age = 31;

console.log(user);
// O/P: { name: 'John', age: 31, email: 'john@example.com', city: 'NYC' }
// Yes, we can modify the values because objects are dynamic in nature


let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// O/P: {
//   value: "Login",
//   writable: true,       ← can change the value
//   enumerable: true,     ← shows in for...in / Object.keys()
//   configurable: true    ← can delete or redefine
// }

// This function is used when we want the description of a key / property