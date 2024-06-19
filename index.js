/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const concatenatedString = `${s1} ${s5} ${s3} ${s2} ${s4}.`;

// Print out the concatenated string
console.log(concatenatedString);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const newString = `${part1.slice(0, 3)}${part1[3].toUpperCase()} ${part2.slice(
  0,
  5
)}${part2[5].toUpperCase()}`;

// Print the cameLtaiL-formatted string
console.log(newString);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
function calculateTip(billTotal) {
  const tip = (billTotal * 15) / 100;
  return tip;
}

// Print out the tipAmount
console.log(calculateTip(billTotal));

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(1, 10);

// Print the generated random number
console.log(rndInt);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// false
console.log(expression1);

const expression2 = a || b;
// true
console.log(expression2);

const expression3 = !a && b;
// false
console.log(expression3);

const expression4 = !(a && b);
// true
console.log(expression4);

const expression5 = !a || !b;
// true
console.log(expression5);

const expression6 = !(a || b);
// false
console.log(expression6);

const expression7 = a && a;
// true
console.log(expression7);
