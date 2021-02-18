/* "use strict";

totalGlobaleVariable = "My variable"; */

// const variable cant change it is immutable
// let is mutable
// are objects immutable in javascript? no even though its a constant it is not. but other const are its partially immutable
let variableA;
let variableB;

console.log(variableA + variableB); // Not a Number NaN
console.log(variableB, variableA); // undefined undefined

// type coercion converts types so it can compare two variables === !== når man tjekker value og type does not convert hard cehck

// scope here is global scope within the file, a file level scope. 
{
    // this is a new scope you might call it a "scope block"
    // new execution call stack, stack will be populated with the variables, when we leave it variables dissapear
    let scopedVariable ="abc";
    {
        scopedVariable = 123;
        // this is a nested scope that inherits from the previous scope around it 
        // man kan declare den samme varibale igen fordi det er et andet scope selvom den arver
    }
    console.log(scopedVariable); // prints the latest change cause its within the same scope it inherits
} 


for (let i = 0; i < 6; i++) {
    setTimeout(() => { // venter kun det ene sekund 1 gang fordi det er en callback funktion set interval gør det igen og igen, men kunne ikke topppe den umiddelbart da jeg pøvede
        console.log(i);
    }, 1000);
}

// package.json dependencies, npm install express and son on node modules
// Try to install eslint yourself and set up the airbnb stryle

