function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}


retry("Login Test");
retry("Registeration Test", 5, 2000);

/* We can write like this - retry("Login Test", 3, 1000); but if the default
maxRetries is 3 and delay is 1000, then no need to mention while calling the
retry function. Directly we can mention the default value while defining the
function and we can write the calling function like this - retry("Login Test");
but if we want to set different value for registration page, then we can write
like this - retry("Registeration Test", 5, 2000); // We can define it 
explicitly. 
O/P:
retry("Login Test"); // Retrying Login Test up to 3 times, 1000ms apart
retry("Registeration Test", 5, 2000); // Retrying Registeration Test up to 5 
// times, 2000ms apart

If we call without the values, then it"ll execute - retry("Login Test");
If we call with the values, then it"ll execute - retry("Registeration Test", 5, 2000);

*/