# Functions
Functions can be created in 3 different ways.
- Function Declarations
- Function Expressions
- Arrow Functions - which are types of Function expressions  
  
Functions are just values in JS.

### Function Declaration
```javascript
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
```
You can call a function declaration before you define it due to **"Hoisting**" behaviour.

### Function Expression
```javascript
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
```
Here a function doesn't have a name just a reference.  
You can't call a function expression reference before you define it.

### Arrow function - form of function expression
```javascript
const calcAge3 = (birthYear) => 2024 - birthYear;
console.log(calcAge3(1990));
```
Arrow functions cannot use **this** keyword.


