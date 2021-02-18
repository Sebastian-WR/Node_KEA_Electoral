// require importere express library og sætter det til variablen express samt sætter app til express
const express = require("express");
const app = express();
// const app = require(express)(); dette på 1 linje 


// GET
app.get("/", (reg, res) => {
    // send an empty json
    res.send({});
});

app.get("/me", (reg, res) => {
    const me = {
        name: "Sebastian",
        age: 25,
        gender: "Male"
    };
    res.send(me);
});


// POST
// PUT
// DELETE


// Starting the server with app.listen(); giv den en port som den kører på
app.listen(8080);

// npm install -g nodemong  er globally 
// for at bruge når app.js kører så skriv nodemon.cmd app.js
// Øv at lave express api app så man kan teste get