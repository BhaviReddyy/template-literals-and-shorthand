// a) Template Literals
const username = "Bhavya";
const course = "JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);

// b) Shorthand Object
const name = "Sam";
const age = 21;

const student = {
    name,
    age,
    greet() {
        console.log("Hello");
    }
};

// c) Arrow Function Shorthand
const getFullName = (first, last) => `${first} ${last}`;