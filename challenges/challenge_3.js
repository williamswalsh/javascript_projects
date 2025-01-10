const bill = 275;
const lowerTipPercent = 15;
const higherTipPercent = 20;
const tipPercent = bill < 50 && bill > 300 ? higherTipPercent : lowerTipPercent;

const tip = bill * (tipPercent / 100);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
