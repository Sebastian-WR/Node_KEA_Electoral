// Data API
const express = require("express");
const app = express();
app.use(express.json()); // installerede "npm i body-parser" og skriver så denne <- og så kan man se body i postman
const PORT = 8080; // 8080 defined as HTTP development port, 9090defined as HTTPS development port
const wine = require("./wine.json");

let pizzaArray = []

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

app.get("/Wine", (req, res) => {
    res.send(wine);
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
// adds the body which is sent with postman in JSON to the pizza array 
app.post("/goodstuff", (req, res) => {
    console.log(req.body);
    pizzaArray.push(req.body)
    res.send({ body: req.body });
    console.log(pizzaArray);
});

// DELETE
// loops with for each and if param id == the number in an object in the array which is the id
// it will use splice to remove the element using indexOf
app.delete("/goodstuff/:id", (req, res) => {
    console.log(req.body);
    pizzaArray.forEach(element => {
        if (element.number == req.params.id){
            pizzaArray.splice(pizzaArray.indexOf(element), pizzaArray.indexOf(element));
            res.send("pizza number: " + req.params.id + ", has been deleted");
        } else {
            res.send("Sorry that did not exist")
        }
    });
    console.log(pizzaArray);
});

// PUT
// it also loops with for each through and looks for id == number in the element
// and then splices 1 from the indexOf which deletes the one at the index, and replacees it with the req body which is sent with postman in JSON
app.put("/goodstuff/:id", (req, res) => {
    console.log(req.body);
    pizzaArray.forEach(element => {
        if (element.number == req.params.id){
            pizzaArray.splice(pizzaArray.indexOf(element), 1, req.body);
            res.send("It was updated to: " + req.body )
        } else {
            res.send("Sorry that did not exist")
        }
    });
    console.log(pizzaArray);
});
// delete, patch and update finish the application CRUD API


// app.listen takes a callback as the second argument which takes error as an argument... implement the callback

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});