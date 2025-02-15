"use strict";

// Object literal
const william = {
  name: "william",
  birthYear: 1990,
  calcAge: function () {
    return 2025 - this.birthYear;
  },
  calcAgeArrow: () => {
    console.log(`Return: ${2025 - this.birthYear}`);
  },
};
console.log(william.calcAge());

// Fails as this is undefined in arrow fxs
console.log(william.calcAgeArrow());

// this keyword in node runtime is undefined
console.log(`Value of this keyword in top level node app is: ${this}`);
console.log(this); // Prints: {}

// The this keyword in an event handler block is
// the domElement that the listener is attached to.
// The this keyword in an arrow fx is
// the lexical this
// the this of the surrounding fx

// An arrow function will use the this keyword from its surrounding
// In strict mode this is undefined
