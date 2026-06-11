console.log(null >= 0); //  true - null == 0 or null > 0
console.log(null === 0); // false

// ??  Nullish
let amul = null;
let milk_required = amul ?? "nandani milk";
console.log(milk_required);