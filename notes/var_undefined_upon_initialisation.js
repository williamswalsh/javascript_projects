"use strict";

// Uncomment the following line
// console.log("Value of var variable a: " + a);
// This prints:
// Value of var variable a: undefined 😱

// var  variables are accessible but undefined before their declaration.
var a = 8;

// ------------------------------------------------
// Uncomment the following line
// console.log("Value of let variable b: " + b);
// This causes:
// Cannot access 'b' before initialization

let b = 8;

// ------------------------------------------------
// Uncomment the following line
// console.log("Value of const variable c: " + c);
// This causes:
// Cannot access 'b' before initialization

const c = 8;

// ------------------------------------------------

var greet = (firstName, lastName) => {
  console.log(arguments);
  console.log("Hello " + firstName + ", " + lastName);
};

// greet("Georgia", "Barrington-Smith");

var addArrow = (a, b) => {
  console.log(arguments); // exists in node runtime, not in browser runtime
  return a + b;
};

addArrow(1, 2);
