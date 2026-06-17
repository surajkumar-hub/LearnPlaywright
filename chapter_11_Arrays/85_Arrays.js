// Creating Arrays // Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];

// We can also create an Array by using Array constructor
let scores = new Array(3);// It"ll create an empty Array & here the length is 3
scores[0] = 1;
scores[1] = 1;
scores[2] = 1;
let scores2 = new Array(1, 2, 3); // This is also another way of creating an Array
console.log(scores);
console.log(scores2);

let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers);

// This is another way of creating an Array by using Array.of() 
let test = Array.of(10, 20, 30, 40, 50);
console.log(test);

// This is another way of creating an Array by using Array.from()
let chars = Array.from("hello");
console.log(chars); // ["h", "e", "l", "l", "o"]

// let numbers1 = Array.from("123456789");
// console.log(numbers1);