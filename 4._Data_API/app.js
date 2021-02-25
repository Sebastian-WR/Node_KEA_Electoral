// Data API
const express = require("express");
const app = express();
app.use(express.json()); // installerede "npm i body-parser" og skriver så denne <- og så kan man se body i postman
const PORT = 8080; // 8080 defined as HTTP development port, 9090defined as HTTPS development port

// How do you send data with a GET request?
// localhost:8080/?key=value&key1=value1 de skal være unikke keys"query string" kaldes det
// search engine URL is really long and ugly cause its unique to you i think and then you can get the exact same thing if you click the copied URL
// path varialbe / path parameter - localhost:8080/user/1 anden måde at sende data på
// javascript object == {key: "value"} så req.query i URL returnere java object

// create a route called search that reurns an empty JSON
// send back the entire query string
app.get("/search", (req, res) =>{
    //console.log(req.query);
    res.send({query: req.query}); // sender query tilbage i object form det som står efter search?key=value leler fisk eller noget
});

// create a route called telegram
// send back the messsage to the client path variable
// der kan være flere path variables så det bliver smidt i object,/lsite
// path varialbe its called
app.get("/telegram/:message/:joke", (req, res) =>{ // kolonn: betyder det er dynamisk indhold
    // req.params
    // let message = req.params; og så return message kan også gøres
    // flere path variables kan tilgås sådan her
    const message = req.params.message;
    const joke = req.params.joke;
    const wholeMessage = message + ", " + joke;
    // kan også lave dem som varibler og printe 
    // res.send({ meessage: req.params.message, joke: req.params.joke});
    res.send({ wholeMessage: wholeMessage});
});


// POST
// i don't need you to implement it but i want you to research this conondrum, why is it undefined?
app.post("/goodstuff", (req, res) => {
    console.log(req.body);
    res.send({ body: req.body });
});

// delete, patch and update finish the application CRUD API


app.listen(PORT);