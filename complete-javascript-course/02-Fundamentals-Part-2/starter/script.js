"use strict";
// If you disable strict mode - an error is not displayed
// If enabled tell you line of error
// Uncaught ReferenceError: hasDriverLicense is not defined
// at script.js:10:32

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; // ERROR
if (hasDriversLicense) console.log("I can drive");

// Can't create variables using reserved words:
// let interface = false;
// let private = true;
// Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:13:1)

// Functions
function logger() {
  console.log("Logger function: My name is William");
}

// invocating/calling/running function
logger(23); // No parameters are defined in function definition - so the argument 23 is unused.
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice of ${apples} apples & ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);
const numStr = "76";
const num = Number(numStr);
console.log(typeof num);
console.log(typeof numStr);

// Function Declaration
// Can call a function declaration before you define it due to Hoisting
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
// Function Expression - function doesn't have a name just a reference
// Functions are just values in JS
// Can't call a function expression reference before you define it.
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

// Arrow function - form of function expression
const calcAge3 = (birthYear) => 2024 - birthYear;
console.log(calcAge3(1990));

// if multi-line function expression - then use the return statement
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirementAge = 65;

  return `${firstName} will have to work for ${
    retirementAge - age
  } years until retirement.`;
};

console.log(yearsUntilRetirement(1990, "William"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

// Functions calling functions
function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice of ${applePieces} apple pieces & ${orangePieces} orange pieces`;
  return juice;
}

console.log(fruitProcessor2(0, 5));

// if multi-line function expression - then use the return statement
const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirementAge = 65;
  let yearsRemaining = retirementAge - age;
  yearsRemaining = yearsRemaining > 0 ? yearsRemaining : -1;

  //   console.log(`${firstName} will retire in ${yearsRemaining} years`);
  return yearsRemaining;
};

console.log(yearsUntilRetirement2(1990, "William"));
console.log(yearsUntilRetirement2(1955, "Toddy"));
