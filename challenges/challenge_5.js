const calcTip = (bill) => {
  const lowerTipPercent = 15;
  const higherTipPercent = 20;

  const tipPercent =
    bill < 50 || bill > 300 ? higherTipPercent : lowerTipPercent;

  const tip = bill * (tipPercent / 100);
  return tip;
};

const bills = [125, 555, 44];

// Approach A - for loop
////////////////////////////////
// const tips = [];
// const totals = [];

// for (var i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }
////////////////////////////////

// Approach B - array literal
////////////////////////////////
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
////////////////////////////////

console.log("Totals: " + totals);
