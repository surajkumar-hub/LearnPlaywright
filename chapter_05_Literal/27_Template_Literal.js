// Template literal

let firstname = "Prrammod";
let fullname = `Hi ${firstname} Dutta`;
console.log(fullname); //Hi Prrammod Dutta

// Usage of Template Literal in real life
let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl);

// Template literal will be use, when we are going to use advance Playwright 
// Locator incase of web tables, we"ll create a locator xpath dynamically by 
// injecting the value. 

const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();

// We can use this in Logging Mechanism also
const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);

// We can use this in case of screenshot as well
const testCase = "checkout_flow";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });

// When we"ll create an API Payload, dynamic value alo injected here
const username = "pramod";
const role = "admin";

const payload = `{
  "user": "${username}",
  "role": "${role}",
  "timestamp": "${new Date().toISOString()}"
}`;
console.log(payload);

/* Template literals are commonly used when a string contains dynamic values 
or expressions that need to be inserted at runtime. */

// Examle:

let name = "Suraj";
let score = 95;

console.log(`Hello ${name}, your score is ${score}.`);

/* Here, name and score are dynamic values—they can change, and the template 
literal automatically inserts their current values. */