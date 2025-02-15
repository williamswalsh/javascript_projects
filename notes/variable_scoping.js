{
  var z = 88;
  let y = 77;
}

console.log("Value of: " + z);
// console.log("Value of: " + y); // y is not defined

function a() {
  var w = 88;
  let x = 77;
}

console.log("Value of: " + w); // w is not defined - var is fx scoped
console.log("Value of: " + x);
