// mass -> kg
// height -> metres
function calculateBMI(mass, height) {
  return mass / (height * height);
}

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = calculateBMI(massMark, heightMark);
let bmiJohn = calculateBMI(massJohn, heightJohn);
let markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

bmiMark = calculateBMI(massMark, heightMark);
bmiJohn = calculateBMI(massJohn, heightJohn);
markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);
