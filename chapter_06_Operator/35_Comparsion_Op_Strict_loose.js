// number == string
console.log(42 == "42"); // true - because of loose compasion
console.log(42 === "42"); // false - Here the comparision is between data type
// and converted value
console.log(42 == "45"); // false - value is different


console.log(5 === 5); // true
console.log(5 === "5"); // false

console.log(5 == 5); // true
console.log(5 == "5"); // true

console.log(0 == ""); // true bcoz if we convert "", the value will be zero 
console.log(0 === ""); // false


console.log(true == 1); // true
console.log(false == 0); // true
console.log(true == "1"); // true
console.log(true == 2); // false


console.log(5 != "5"); // false , 5 = int, "5" string, both of them are not 
// equal? - loose couple
console.log(5 !== "5"); // true ( either the value or the data type)
//console.log(5 !=== "5"); This doesn't exit


// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.