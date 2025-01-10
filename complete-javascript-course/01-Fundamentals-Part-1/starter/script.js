// Inline Script
let js = "amazing";
// if (js === "amazing") alert("JS is fun");

console.log(10 + 45 + 15 - 2);

// Variable declaration
let firstName = "William";
firstName = "Georgia";
console.log(firstName);

// Reserved Keyword -> Syntax Error
// let new = "car";

// Variable naming conventions:
// Can use:
//  Underscore _
//  dollar sign $

// boolean value type of:
console.log(typeof true);
console.log(typeof firstName);
console.log(typeof 10);
console.log(typeof "Georgia");

// Undefined variable
let year;
console.log(year); // Value
console.log(typeof year); // Type

// Odd behaviour
console.log(typeof null); // object

// let keyword
// variable can be mutated
let age = 33;
age = 34;

//
let birthYear = 1991;
// birthYear = 1990; // ERROR: Assignment to constant variable.

// need to define an initial value for constants
// const job;

// completely avoid var -> pre-ES6
var job = "programmer";
job = "teacher";

propertyOnObject = 78; // this creates a property on the global object

const now = 2024;
const ageWilliam = now - 1990;
const ageGeorgia = now - 1997;
console.log(ageWilliam, ageGeorgia); // Console: 34 27

firstName = "Georgia";
job = "scientist";
birthYear = 1997;
year = 2024;

const georgiaNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`;
console.log(georgiaNew);

const multiLineString = `I am
a
multi-line
string.`;
console.log(multiLineString);

// Decisions
age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
} else {
  console.log(`Sarah is too young. Wait another ${18 - age} years. 🚶‍♀️`);
}

// Type conversion:
///////////////////
const inputYear = "1990";
console.log(inputYear, Number(inputYear));

// Concatenation: 199018
console.log(inputYear + 18);

// Addition: 2008
console.log(Number(inputYear) + 18);

// NaN - Not a Number printed
console.log(Number("New Job"));

// NaN is an "Invalid" number - number
console.log(typeof NaN);

// Convert Number to String
console.log(String(23));

// Type coercion
// + operator converts Numbers to Strings
console.log("I am " + 33 + " years old.");

// - operator does subtraction with Numbers
// - converts all strings to Numbers
console.log("23" - "10" - 3);

console.log("23" * "2");

// Guess the outcome
let n = "1" + 1; // 11
n = n - 1; // 11 - 1 = 10
console.log(n);

console.log(2 + 3 + 4 + "5"); // 95 -> 9+5

console.log("10" - "4" - "3" - 2 + "5"); // 10-4 -> 6, 6-3 -> 3, '3' - 2 -> 1, 1 + '5' => 15

// Truthy/Falsey values
///////////////////////

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({})); // true???
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
///////////////////////

// Strict equality operator ===
// 10 === 10 >> true
// 10 === '10' >> false
// 10 === 11 >> false

// Loose equality operator ==
// 10 == 10 >> true
// 10 == '10' >> true
// 10 == 11 >> false

// Best Practice: Avoid the loose operator - better to use strict & manually do a conversion if required.

// const favorite = Number(prompt("What is your favorite number?"));
// console.log("Favorite Number: " + favorite);
// console.log("Type: " + typeof favorite); // string

// if (favorite === 7) {
//   console.log("Strict: Cool, 7 is an amazing number.");
// } else if (favorite === 3) {
//   console.log("Strict: Cool, 3 is a pretty cool number.");
// } else {
//   console.log(`${favorite} is an ok number.`);
// }

// 14 June 2024 - 7% completed

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(
  `Has driver license & good vision: ${hasDriverLicense && hasGoodVision}`
);
console.log(
  `Has driver license or good vision: ${hasDriverLicense || hasGoodVision}`
);

const day = "monday";

switch (day) {
  case "monday":
    console.log("I plan my course structure.");
    console.log("Go to coding meetup.");
    break;
  case "tuesday":
    console.log("Prepare theory videos.");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples.");
    break;
  case "friday":
    console.log("Record videos.");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend.");
    break;
  default:
    console.log("Not a valid day.");
}

if (day === "monday") {
  console.log("I plan my course structure.");
  console.log("Go to coding meetup.");
} else if (day === "tuesday") {
  console.log("Prepare theory videos.");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples.");
} else if (day === "friday") {
  console.log("Record videos.");
} else if (day === "saturday" || day === "sunday") {
  console.log("Prepare theory videos.");
} else {
  console.log("Not a valid day.");
}
