/*
// Assignment 1 - Values and Variables
let country = "Egypt";
let continent = "Africa";
let population = 119;

console.log(country);
console.log(continent);
console.log(population);
*/

/*
// Assignment 2 - Data Types
let country = "Egypt";
let continent = "Africa";
let population = 119;
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*
// Assignment 3 - let, const and var
const country = "Egypt";
const continent = "Africa";
let population = 119;
const isIsland = false;
const language = "Arabic";
population = 120;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*
// Assignment 4 - Basic Operators
const country = "Egypt";
const continent = "Africa";
let population = 119;
const isIsland = false;
const language = "Arabic";

console.log(population / 2);

population++;
console.log(population);

console.log(population > 6);

console.log(population < 33);

const describtion = country + " is in " + continent + ", and its " + population + " million people speak " + languagecountry, population and capitalCity;
console.log(describtion)country, population and capitalCity;
*/

/*
// Assignment 5 - Strings and Template Literals
const country = "Egypt";
const continent = "Africa";
let population = 119;
const isIsland = false;
const language = "Arabic";

console.log(population / 2);

population++;
console.log(population);

console.log(population > 6);

console.log(population < 33);

const describtion = `${country} is in ${continent}, and its ${population} million people speak ${language}`country, population and capitalCity;
console.log(describtion)country, population and capitalCity;
*/

/*
// Assignment 6 - Taking Decisions: if / else Statements
const country = "Egypt";
const continent = "Africa";
let population = 130;
const isIsland = false;
const language = "Arabic";

if (population < 33) {
  console.log(`${country}'s population is ${33 - population} million below average`);
} else {
  console.log(`${country}'s population is ${population - 33} million above average`);
}
*/

/*
// Assignment 7 - Type Conversion and Coercion
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> "617"
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143
*/

/*
// Assignment 8 - Equality Operators: == vs. ===
const numNeighbours = Number(prompt("How many neighbour countries does your contry have?"));
if (numNeighbours === 1) console.log("Only 1 border!");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");
*/

/*
// Assignment 9 - Logical Operators
const country = "Egypt";
const continent = "Africa";
let population = 130;
const isIsland = false;
const language = "Arabic";

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
*/

/*
// Assignment 9 - Logical Operators
const language = "arabic";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/

/*
// Assignment 10 - The Conditional (Ternary) Operator
const country = "Egypt";
let population = 130;

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);
*/

// Assignment 11 - Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const describeEgypt = describeCountry("Egypt", 119, "Cairo");
const describeSpain = describeCountry("Spain", 47, "Madrid");
const describeQatar = describeCountry("Qatar", 3, "Doha");

console.log(describeEgypt);
console.log(describeSpain);
console.log(describeQatar);
