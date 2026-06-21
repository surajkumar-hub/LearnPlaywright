// Objects are nothing but a Key and value pair

let student1 = { name: "Amit", age: 65 }; // 2 keys and 2 values
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };

// Rule - Key will not be in the double quotes
// below key is not in double quotes 
// If the key is in double quotes, then it becomes json - 
let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };


let a = { status: "pass" };

// This is how we can print the value of status
console.log(a.status); // pass
console.log(a["status"]); // pass - We can also write like this

// We can also create a similar object with a different variable
let a1 = { status: 'pass' };
console.log(a1.status);


let b = a;
b.status = "fail";
console.log(a.status); // fail
console.log(b.status); // fail

if (b === a) {
    console.log("true"); // true
} else {
    console.log("false");
}

// This is the example of copy-by-reference