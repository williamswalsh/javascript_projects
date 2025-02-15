"use strict";

// ----------------------------------------------------------------
// This function declaration works as it is hoisted
printSomething();

function printSomething() {
  console.log("Something to print");
}

// ----------------------------------------------------------------
// This function expression doesn't work
// 💥ERROR💥: Cannot access 'printSomethingElse' before initialization
// Uncomment the following line
// printSomethingElse();

let printSomethingElse = () => console.log("Something to print");
// ----------------------------------------------------------------

// This function expression doesn't work
// 💥ERROR💥: Cannot access 'printSomethingElseConst' before initialization
// Uncomment the following line
// printSomethingElseConst();

const printSomethingElseConst = () => console.log("Something to print");
// ----------------------------------------------------------------

// This function expression doesn't work
// 💥ERROR💥: printSomethingElseVar is not a function??
// Uncomment the following line
console.log(printSomethingElseVar); // prints undefined

var printSomethingElseVar = () => console.log("Something else var to print");
// ----------------------------------------------------------------
// printSomethingElseVar();
