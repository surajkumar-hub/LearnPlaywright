let year = 2024

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("It's a leap year");
} else {
    console.log("It's not a leap year");
}

// Rules:

// Divisible by 4 AND not divisible by 100 → Leap year
// OR divisible by 400 → Leap year
// Else → Not a leap year