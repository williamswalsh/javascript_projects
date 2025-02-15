"use strict";

const jonas = {
  birthYear: 1990,
  calcAge: function () {
    return 2025 - this.birthYear;
  },
};

const matilda = {
  birthYear: 1995,
};

// Method borrowing
matilda.calcAge = jonas.calcAge;
console.log("Matilda: " + matilda); // Prints Matilda: [object Object]
console.log("Matilda: ", matilda); // Prints Matilda:  { birthYear: 1995, calcAge: [Function: calcAge] }

// Can make a method a function also
const f = jonas.calcAge;
// This keyword is undefined in strict mode
// if sloppy mode - this = window
// use strict mode && use window reference instead

// ERROR: uncomment this to see error
// f();
