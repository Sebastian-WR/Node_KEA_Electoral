First class:
________________________________________________________________________

Node.js is a backend runtime Javascript environment it lets developers use Javascript front end and backend so you only have to use one language across server site and client side. its lets someone who knows Javascripot become a fullstack developer. It has one of the largest opensource libraries in the world.
We learned about:

- Variables(const, let), strings, numbers floats and so
- Concatenation, string litterals, console.log and simples manipulation of datatypes, objects and arrays and so.

How these are used in node and javascript and learning the basic syntaxes for theese, and working with datatypes in Javascript.
We did basic exercises with these.
Also we practices some terminal commands and how to work around the terminal with git and regular navigation.

Second class:
________________________________________________________________________

In this class we learned about functions(callback functions) and HTTP methods and how to set up a basic REST API with express, along with the methods.
Setting ups a basic function

function myFirstFunction() { // Function declaration
return "Hello world, what's up!";
}
const returnValue = myFirstFunction();

console.log(returnValue);

and arrowfunctions

const myArrowFunction = (/_ Der kan være parametrer her_/) => {
console.log("Hello from the anonymous function which is also an arrow function");
}
myArrowFunction();

Callback functions node-js is build on pyramid on callback functions basically
Callback is a function that we pass as an argument in another function, functions are first class - citizens, functions are treated as any other value and therefore it can be passed as an argument so everyone is treated equally first class is not prioritized but at the same level as all. Functions can be uses as parameters.

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

Third class:
________________________________________________________________________

in this class we learned about:

- Variables, scopes, strict mode, type coercion, NPM, express, and nodemon.
  some of the above more elaborated than earlier classes.

Strict mode is used to makes sure you follow standard semantics, it optimizes your clean code and helps with possible errors and help write secure Javascript.

type coercion converts types so it can compare two variables === !== when checking values and types, this is hard checks and now == != which is different like 1 == true is true cause < = is true byt 1 === true is false casue its not the same value/type

NPM iss used for downloading packages and tools to use in your programs through the terminal. it is where we get the express package which is a web application server framework that is designed to help building we applications with node.

nodemon helps develop node js based applications by automatically restarting the node application when files change in the directory.

And here we also learned slower about the process of setting up a REST API with express. npm install express to do it automatically but you can also create tje package.json file and write the dependencies yourself.

we created routes with endpoints to get different json on ths page with different endpoints. and in the app.js where we build the API we have this for importing the express library and set it to a variable along with setting the app to the varible, so we can use it on call.

const express = require("express");
const app = express();
Along with that we also have this at the bottum app.listen(8080); which starts the server and listens on port 8080

{
"dependencies": {
"express": "^4.17.1"
}
}

node modules are where we have the libraries.

Fouth class: 
________________________________________________________________________

Fifth class:
________________________________________________________________________

Sixth class:
________________________________________________________________________

Seventh class:
________________________________________________________________________