"use strict";

let georgia = {
  firstName: "Georgia",
  lastName: "Smith",
  age: 27,
};

// Shallow copy - just copies the ref to the original object
const fakeMarriedGeorgia = georgia;
fakeMarriedGeorgia.lastName = "Walsh";
console.log("Shallow copy");
console.log("Before married❌: ", georgia);
console.log("After  married✅: ", fakeMarriedGeorgia);

// Reset object
georgia = {
  firstName: "Georgia",
  lastName: "Smith",
  age: 27,
  kids: [],
};

// Deep Copy  - copies the properties of the original object into the new object.
// no sharing of references.
const actuallyMarriedGeorgia = { ...georgia }; // Spread operator
actuallyMarriedGeorgia.lastName = "Walsh";
console.log("Spread operator copy");
console.log("Before married✅: ", georgia);
console.log("After  married✅: ", actuallyMarriedGeorgia);

const test1 = { ...georgia };
const test2 = { ...georgia };

const marryPerson = (originalPerson, newLastName) => {
  originalPerson.lastName = newLastName;
  return originalPerson;
};

const marriedPerson = marryPerson(test1, "Walsh");

console.log("Shallow copy function:");
console.log("Before married❌: ", test1);
console.log("After  married✅: ", marriedPerson);

// Creates a deep copy of the object and updates the object's lastName property.
const marryPersonDeepCopy = (originalPerson, newLastName) => {
  let newPerson = { ...originalPerson };
  newPerson.lastName = newLastName;
  return newPerson;
};

const marriedPerson2 = marryPersonDeepCopy(test2, "Walsh");
console.log("Spread operator copy function:");
console.log("Before married✅: ", test2);
console.log("After  married✅: ", marriedPerson2);

// spread operater performs a deep copy of the objects properties if they are primitive types.
//💥💥💥💥N.B.:💥💥💥💥 if they are reference types then they still only copy the ref leading to buggy behaviour.
const georgiaClone = structuredClone(georgia);
georgiaClone.lastName = "Walsh";
georgiaClone.kids.push("Tony", "Sophie");
console.log("Structured clone fuunction:");
console.log("Before married✅: ", georgia);
console.log("After  married✅: ", georgiaClone);
