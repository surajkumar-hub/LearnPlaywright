// Primitive vs Reference Types
let a = 10;
let b = a;
b = 99;
console.log(a); // In this case what will be the output?
/* 
When we say a = 10; in the memory, value of a = 10 will be assigned.

When we say b = a; Here "b" won't point to a, instead a new variable will be 
created in the name of b because this is a primitive variables and whenever 
we have primitive variables, a new value (object reference) will be created.

As we have mentioned b = a, value of b = 10 will be assigned.  

When we say b = 99, "b" value will be changed from 10 to 99

Now if we print console.log(a); - output will be 10 because value of a has not
changed
*/

// Objects — copied by REFERENCE , call by reference 
// Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);