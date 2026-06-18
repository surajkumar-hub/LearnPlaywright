// Rest Parameter
function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}

logResult('Login Test', 1, 2, 3);
logResult('Reg Test', "Hello", "Pramod");

// ...results - is an array that collects all the remaining arguments passed
// to the function.
// The array can contain values of any data type (numbers, strings, objects,
// arrays, etc.). and we can pass any number of parameters

/*
Points to Remember
...results is called the Rest Parameter.
It collects all the remaining arguments into a single array.
You can pass any number of arguments to the rest parameter, including zero.
The array can contain values of any data type (numbers, strings, objects, 
arrays, booleans, etc.).
There can be only one rest parameter in a function.
The rest parameter must always be the last parameter in the function 
definition.

*/