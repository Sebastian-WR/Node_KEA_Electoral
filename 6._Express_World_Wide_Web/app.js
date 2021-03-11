const express = require("express");
const app = express();
const port = process.env.PORT || 8080; // lavet om så den tager provess environment port eller 8080 afhænglkig af hvordan men starter den, med npm run start-dev eller nodemon.cmd app.js

app.get("/", (req, res) => {
    //__dirname exists in Node.js
    // res.sendFile is a method in Express

    // todo serve the welcome page on root
    res.sendFile(__dirname + "/public/welcome.html");
});

app.get("/pizza", (req, res) => {
    res.sendFile(__dirname + "/public/pizza.html")
});

app.get("/whiskey", (req, res) => {
    res.send({ barkeep: "Here ya go m8"});
});

app.get("/pub",(req, res) => {
    if (Number(req.query.money) > 500) { // skriv ?money=amount for at checke om det er penge nok
    res.redirect("/whiskey")  // redirecter til en anden side
    } else {
        res.send({ doorman: "Sorry you don't have money for whiskey."})
    } 
});

 // serve more html pages and make new route for it :D 
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is running on port", Number(port)); // lavet om 
    }
});

// i package.json har vi lavet scripts som kan køre i command line med npm run myscript f.eks. Den kan lave en fil, liste filer, osv alt i terminalen
// scripts i package.json som kan kaldes med npm 
// $env:PORT=3000   sætter port til det ønskede
// process.env.PORT satrter på environtment port