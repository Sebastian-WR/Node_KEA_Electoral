// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constants

const firstName = "Sebastian";
const lastName = "Rasmussen";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

// Concatenation
console.log("My first name is " + firstName + " and my last name is " + lastName);

// String literal ``
console.log(`My first name is ${firstName} and my last name is ${lastName}`);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2021
// You cannot touch line 1 or 2
const now = parseInt(year) + number;
console.log(now);

const currentYear = Number(year) + number;
console.log(currentYear);

console.log(+ year + number);
console.log(number + + year);
// typeof foran skriver hvilken type det er
// Number tager ikke noget hvis der er string i eller bogstaver men parseint tager nummeret fra en string med nummer og bogstaver og printer bare nummeret.
// Men den tager kun det første nummer i en string 





// --------------------------------------
