const user = {
    firstName: "Pramod",
    lastName: "Dutta",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}
// this means current value in the Object.
// Objects - JS {}
// Class and Object - Different Concept


console.log(user.fullName);
user.fullName = "Amit Sharma";
console.log(user.fullName);


