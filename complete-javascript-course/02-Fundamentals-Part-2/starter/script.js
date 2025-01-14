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

// Literal array systax
const friends = ["Peter", "Jamie", "Austin", "Sam"];
console.log(friends);

// First element in array
console.log("First friend: " + friends[0]);

// Number of elements in array
console.log("Number of friends: " + friends.length);

// get last element in array
console.log("Newest friend: " + friends[friends.length - 1]);

// can modify array element
friends[0] = "Austin";
friends[2] = "Peter";
console.log("Modified friend array: " + friends);

// Arrays can contain different types
const person = ["William", "Walsh", 1990, "Software Engineer"];
console.log(person);

// Can create an array using this constructor/function
const friends1 = new Array("Peter", "Jamie", "Austin", "Sam");
console.log(friends1);

const years = [1995, 1990, 1988, 1986, 1983, 1980];

console.log(calcAge1(years[0]));
console.log(calcAge1(years[1]));
console.log(calcAge1(years[2]));
console.log(calcAge1(years[3]));
console.log(calcAge1(years[4]));
console.log(calcAge1(years[5]));

console.log(friends);
// Add an element to the end of the array
// returns the new length
const newLength = friends.push("James");
console.log(newLength);
console.log(friends);

// Add an element to the start of the array
friends.unshift("Graeme");
console.log(friends);

// Remove an element from the start of the array
friends.shift("Graeme");
console.log(friends);

// remove last element of the array
console.log(friends.pop());
console.log(friends);

// Get position of element in an array
const jamiesPosition = friends.indexOf("Jamie");
console.log("Position of Jamie in friend array: " + jamiesPosition);

// If not found in the array -> -1
const notFriendPosition = friends.indexOf("Gayme");
console.log("Position of Gayme in friend array: " + notFriendPosition);

// Check if element is in the array

const isJamieAFriend = friends.includes("Jamie");
console.log("Is Jamie a friend: " + isJamieAFriend);
const isGaymeAFriend = friends.includes("Gayme");
console.log("Is Gayme a friend: " + isGaymeAFriend);

// includes tests with strict equality
// does not do type coertion
// Add number
friends.push(23);
// check if array contains string version of the number
const containStringValueOf23 = friends.includes("23");
console.log(
  "Contains string version of the number?: " + containStringValueOf23
);

const person1 = {
  firstName: "Austin",
  lastName: "Hilliard",
  hobbies: ["films", "teaching"],
};

const choice = prompt(
  "What do you want to know about Austin? Options: firstName, lastName, hobbies"
);

// Square bracket object field notation
// can use expression in square brackets
// can't use expression with dot notation.
// Undefined in a falsy value - can use if expression to control what to print.
if (person1[choice]) {
  console.log("Property: " + person1[choice]);
} else {
  console.log("" + choice + " is not a property defined on this object.");
}

// Undefined - when a property is not defined - choice is undefined
// console.log("Property: " + person1.choice); // Doesn't work. No field called choice.

// Add property to object
person1.location = "Da Nang, Vietnam";
console.log(person1);
person1["age"] = 35;
console.log(person1);

console.log(
  "Jonas has " +
    person1.hobbies.length +
    " hobbies and his best hobbie is " +
    person1.hobbies[0]
);

console.log(
  `Jonas has ${person1.hobbies.length} hobbies and his best hobbie is ${person1.hobbies[0]}`
);

const coolPerson = {
  firstName: "Georgia",
  lastName: "Barrington-Smith",
  birthYear: 1997,
  job: "Marketing Analyst",
  friends: ["Sarah", "Natalie", "Jordy", "Rose"],
  hasDriversLicense: true,

  // Function property -> A method
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  calcAge1: function (birthYear) {
    return 2024 - birthYear;
  },
  getSummary: function () {
    console.log(
      `${this.firstName} is a ${this.calcAge()} year old ${this.job} and has ${
        this.hasDriversLicense ? "a" : "no"
      } driver's license.`
    );
  },
};

console.log(coolPerson.calcAge());
console.log(coolPerson["calcAge"]()); // strange looking property access
console.log(coolPerson.calcAge1(1997)); // Parameter is passed in as an argument

console.log(coolPerson.age);
console.log(coolPerson["age"]); // strange looking property access

// Georgia is a 27 year old marketing analyst and has a driver's license.
coolPerson.getSummary();
// negative case:
coolPerson.hasDriversLicense = false;
coolPerson.getSummary();

// For loops
for (let rep = 1; rep <= 10; rep++) {
  console.log(`FOR LOOP: This is weights repetition number: ${rep}`);
}

const types = [];
for (let i = 0; i < person.length; i++) {
  console.log(`Cool person properties: ${person[i]}`);

  // Only recore types of they are strings:
  if (typeof person[i] !== "string") continue;
  types[i] = typeof person[i]; // ["string","string","number","string"]
}
console.log(types);
for (let i = 0; i < coolPerson.friends.length; i++) {
  console.log(
    `Friend: ${coolPerson.friends[i]}, type: ${typeof coolPerson.friends[i]}`
  );
}

for (let i = coolPerson.friends.length - 1; i >= 0; i--) {
  console.log(
    `Friend: ${coolPerson.friends[i]}, type: ${typeof coolPerson.friends[i]}`
  );
}

// While loop
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE LOOP: This is weights repetition number: ${rep}`);
  rep++;
}

//
let dice = -1;
let diceRoll = 1;
while (dice !== 6) {
  // Create random number betweeon 0 & 1, * by 6(values 0-5), add 1(values 1-6), then truncate
  dice = Math.trunc(Math.random() * 6 + 1);
  console.log(`Dice roll: ${diceRoll}, value: ${dice}`);
  diceRoll++;
}
