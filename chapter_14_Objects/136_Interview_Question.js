const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const user = { name: "John", age: 30 };

// How to iterate - By using for loop
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
} // This one we"ll use in playwright

// Another way is - By using object
// Object.keys/values/entries
Object.keys(user).forEach(key => {
    console.log(key);
});

// Another way / syntax
Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});