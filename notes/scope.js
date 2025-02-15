"use strict";

// Variables defined with var are end up in the closest function scope

// Variables defined in a block can be accessed from outside if they use var keyword
// var is accessible outside the block scope its defined in
// Block scoping
{
  const a = 1;
  let b = 2;
  var c = 3;
}
console.log("let & const are block scoped");
// console.log(a); // ReferenceError - let & const are block scoped
// console.log(b); // ReferenceError
console.log(c); // Only var works as it isn't scoped to block only - its accessible outside the block
console.log("var are function scoped");
console.log(
  "Variables defined in a block can be accessed from outside if they use var keyword"
);

// Variables defined in a function are only accessible inside the function
function test() {
  const d = 1;
  let e = 2;
  var f = 3;
}
// console.log(d); // ReferenceError
// console.log(e); // ReferenceError
// console.log(f); // ReferenceError
