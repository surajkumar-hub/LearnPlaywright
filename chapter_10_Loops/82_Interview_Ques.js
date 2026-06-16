for (let i = 0; i < 3; i++) {
    if (i === 1) continue;
    console.log(i); // 0, 2
}

// `continue` means that when `i` becomes 1,
// `console.log(i)` is skipped, and the loop proceeds to the next iteration.
