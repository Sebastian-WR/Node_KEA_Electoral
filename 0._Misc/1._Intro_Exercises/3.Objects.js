// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 
console.log(myObj.message); // Bedste måde i javascript med dot notation
console.log(myObj["message"]); // square bracket notation

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const me = {firstName: 'Sebastian', age: 25};

console.log("My name is " + me.firstName + " and i'm " + me.age + " years old!");

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

const isAllowed = true; 

stackOverflow.isAllowed = true;

console.log(isAllowed);
console.log(stackOverflow.isAllowed);



// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {"description": "The best song in the world."}

delete thisSong.description;

thisSong.about = 'Just a tribute'

console.log(thisSong.description);
console.log(thisSong.about);
// remove the property "description" and add a property called "about" that should say "Just a tribute." 


// --------------------------------------
