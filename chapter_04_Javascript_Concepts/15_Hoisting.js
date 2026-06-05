console.log(greeting);
var greeting = "Hello!";
console.log(greeting);

/* O/P:
undefined
Hello!
*/

/* This happens because of JavaScript engine. It executes line by line,
it also do JIT Compilation. What happens is - JavaScript compiler is very smart.
Behind the scene, it creates a varibale like this - 'var greeting;' when it
sees the 1st line i.e. console.log(greeting);.

As we are printing this, it prints "undefined" value automatically because no
value was assigned that time when we were printing it.
When it sees a value has assigned, then it prints "Hello!" */


// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"

/* This concept is called as the hoisting. 
In simpler terms - Whenever we see black clouds before going to office, we take
umbrella by guessing that rain may come. Similarly, whenever JavaScript engine 
sees this kind of line - console.log(greeting); as the 1st line of code, it 
expects that user may use this variable latter. That's why it creates an empty 
variable  like this - 'var greeting;' */

// Another example of hoisting

// var a;
console.log(a);
var a = "Pramod";
console.log(a);

// Hoisting can be done by using function also. Check the next example...



