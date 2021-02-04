// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2


const sum = Number(numberOne) + Number(numberTwo);
const sum3 = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(sum);
console.log(sum3);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const sum2 = Number(anotherNumberOne) + Number(anotherNumberTwo);
console.log(sum2.toFixed(2));

const sum4 = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(sum4.toFixed(2));
// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const avrg = (one + two + three) / 3;
console.log(avrg.toFixed(5));




// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters.indexOf('c'));
console.log(letters.charAt(2));
console.log(letters[2]);
console.log(letters.slice(2,3));
console.log(letters.substr(2));


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const fact2 = fact.replace(/j/, "J");
console.log(fact2);

const fact3 = fact.replace("javascript!", "Javascript!");
console.log(fact3);

console.log(fact.replace("j", "J"));

// --------------------------------------

