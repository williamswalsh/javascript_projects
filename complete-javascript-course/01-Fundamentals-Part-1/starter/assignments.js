// Declare variables called country,
// continent and population and assign their values according to your own country (population in millions).
// Log their values to the console.
let country = "Ireland";
let continent = "Europe";
let population = 5.127; // Millions

console.log("Country: " + country);
console.log("Continent: " + continent);
console.log("Population: " + population);

// Declare a variable called isIsland and set its value according to your country.
// The variable should hold a Boolean value.
// Also declare a variable language, but don't assign it any value yet.
// Log the types of isIsland, population, country and language to the console.
const isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Set the value of language to the language spoken where you live
// (some countries have multiple languages, but just choose one).
// Think about which variables should be const variables
// (which values will never change, and which might change?).
// Then, change these variables to const.
// Try to change one of the changed variables now, and observe what happens.
language = "Irish";

// ERROR: TypeError: Assignment to constant variable
// isIsland = false;

// If your country split in half, and each half would contain half the population, then how many people would live in each half?
let halfOfPopulation = population / 2;
console.log(halfOfPopulation);

// Increase the population of your country by 1 and log the result to the console.
population++;
console.log(population);

// Finland has a population of 6 million. Does your country have more people than Finland?
let finlandPopulation = 6;
let largerPopulationThanFinland = population > finlandPopulation;
console.log(largerPopulationThanFinland);

// The average population of a country is 33 million people.
// Does you country have less people than the average country?
let averagePopulation = 33;
let smallerPopulationThanAverageCountry = population < averagePopulation;
console.log(smallerPopulationThanAverageCountry);

// Based on the variables you created, create a new variable description which contains a string with this format:
// 'Portugal is in Europe, and its 11 million people speak portuguese'.
console.log(
  country +
    " is in " +
    continent +
    ", and its " +
    population +
    " million people speak " +
    language +
    "."
);

// Recreate the description variable from the last assignment, this time using the template literal syntax.
let intro = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(intro);

// If your country's population is less than 33 million,
// log a string like this to the console:
// "Portugal's population is 22 million below average"

let hasLessPeopleThanAverage = population < averagePopulation;
if (hasLessPeopleThanAverage) {
  console.log(
    `${country}'s population is ${
      averagePopulation - population
    } million below average`
  );
}
console.log(hasLessPeopleThanAverage);
// let averagePopulation = 6;
// let smallerPopulationThanAverageCountry = population < averagePopulation;
// console.log(smallerPopulationThanAverageCountry);

// (the 22 is the average of 33 minus the country's population).
// After checking the result,
// change the population temporarily to 13 and then to 130.
// See the different results, and set the population back to original.
