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

const georgiaNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
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
