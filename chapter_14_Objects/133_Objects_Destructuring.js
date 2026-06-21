// Object_Destructuring

const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring
const { name1, age } = user;
console.log(name1); // John
console.log(age); // 30


// We extracted the 'name1' and 'age' properties from the 'user' object
// and stored them in variables with the same names.
// This process is called Object Destructuring.

// Destructuring does not remove the properties from the object.
const user = { name1: "John", age: 30, city: "NYC" };
const { name1, age } = user;
console.log(user); // { name1: "John", age: 30, city: "NYC" }
// The original object remains unchanged. Destructuring only creates variables
//  from the object's properties.

// User can rename the variables / keys  
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

// Usage of destructuring = If we want only age. That's why destructuring is required.
// const { age } = user;

// Default values
const { country = "USA" } = user; // It means if country exist in the user print that value or else print USA
console.log(country); // USA
console.log(user); // { name1: "John", age: 30, city: "NYC" } - It wii not add to the country to the user

// Object within object within object
const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
};
// How to fetch the value
const { user: { address: { city } } } = data;
console.log(data.user.address.city);