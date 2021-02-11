// create a function call myFirstFunction which returns a greeting
// hoisting, lifts the functions to the top of file so it can be called anywhere,
// so i can switch the function under the variable and log and it would still work that is hoisting

function myFirstFunction() { // Function declaration
    return "Hello world, what's up!";
}
const returnValue = myFirstFunction();

console.log(returnValue);

const myVariableFunction = function(/* Der kan være parametrer her*/) { // function with no name = anonymous function variablen bliver functionnavnet som kaldes på den er ikke hoisted variabler er ikke hoisted, medmindre de er i scope{}
    console.log("Hello from the anonymous function");
};

myVariableFunction();

const myArrowFunction = (/* Der kan være parametrer her*/) => {
    console.log("Hello from the anonymous function which is also an arrow function");
}
myArrowFunction();

// Callback functions node-js is build on pyramid on callback functions basically
// Callback is a function that we pass as an argument in another function, functions are first class -
// citizines, functions are treated as any other value and therefore it can be passed as an argument  så alle bliver behandlet ens first class er ikke at de er bedre og prioriteret men på niveau med alle
// du kan bruge functioner som parametre
function sayHiLater(anyFunctionReference) {
    // simulate some code running
    // ... 5 seconds later ....
    anyFunctionReference(); 
}

function hiFunction () {
    //return "Hi" begge virker
    console.log("Hi!");
}

sayHiLater(hiFunction);

function sayHello () {
    console.log("Hello");
}
sayHiLater(sayHello);
// Call say hi later and pass a callback that says "Hi"
// Prøv også hvor metoden siger hello og kalder parametrer

const poke = (name) => {
    return "Poke " + name;
}

function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

interact(poke, "Christopher");


// call interact and let it interact with a person of name
// example: "poke " + name

// call interact and in a single line make sure that the folowing is achieved
// example: "lick " + name
 interact((name) => "Lick " + name, "Christopher"); // wowowowowoow men kun smart når det ikke er avanceret

