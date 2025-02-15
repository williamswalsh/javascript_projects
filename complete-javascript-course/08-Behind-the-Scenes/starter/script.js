'use strict';

const calcAge = birthYear => {
  console.log(firstName);

  // ref error
  // console.log(lastName);

  function printAge() {
    const output = `You are born in ${birthYear}`;
    console.log(output);
  }
  printAge();

  return 2037 - birthYear;
};

// Global Execution variable environment
const firstName = 'jonas';
console.log(calcAge(1990));

// Ref error - age is fx scoped in calcAge fx
// console.log(age);
