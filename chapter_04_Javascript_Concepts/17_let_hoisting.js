console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 100; // Let doesn't allow hoisting

// Let will never allow this code to be executed

{
    // ---- TDZ for "score" starts here ----
    // console.log(score);  // ReferenceError!
    // score = 50;          // ReferenceError!
    // typeof score;        // ReferenceError!
    // ---- TDZ for "score" ends here ----
    let score = 100;        // Declaration reached, TDZ ends
    console.log(score);     // 100 (safe to access now)
}

// TDZ happens only for let and const. 