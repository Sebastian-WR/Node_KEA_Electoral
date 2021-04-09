const express = require("express");
const app = express();
const port = process.env.PORT || 8080; // lavet om så den tager provess environment port eller 8080 afhænglkig af hvordan men starter den, med npm run start-dev eller nodemon.cmd app.js
app.use(express.static("public"));
const fetch = require("node-fetch");
const fs = require("fs");

app.get("/", (req, res) => {
  //__dirname exists in Node.js
  // res.sendFile is a method in Express

  // todo serve the welcome page on root
  res.sendFile(__dirname + "/public/welcome/welcome.html");
});

app.get("/pizza", (req, res) => {
  res.sendFile(__dirname + "/public/pizza.html");
});

app.get("/whiskey", (req, res) => {
  res.send({ barkeep: "Here ya go m8" });
});

app.get("/pub", (req, res) => {
  if (Number(req.query.money) > 500) {
    // skriv ?money=amount for at checke om det er penge nok
    res.redirect("/whiskey"); // redirecter til en anden side
  } else {
    res.send({ doorman: "Sorry you don't have money for whiskey." });
  }
});

app.get("/catfacts", (req, res) => {
  res.sendFile(__dirname + "/public/catfacts/catfacts.html");
});

// this fetches the html and sends it right back to the document/window
app.get("/proxy1", (req, res) => {
  fetch("https://www.google.dk/")
    .then(function (res) {
      return res.text();
    })
    .then(function (html) {
      res.send(html);
    });
});

// creates a file and writes the html from google that gets fetched to the file. and serves the html file. it doesnt work if the file is not created at first though because of the asynchronism.
app.get("/proxy", (req, res) => {
  (async function () {
    const response = await fetch("https://www.google.dk/");
    const result = await response.text();
    fs.writeFile("google.html", result, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  })();
  res.sendFile(__dirname + "/google.html");
});

// made by anders 
app.get("/proxy2", (req, res) => { 
  fetch("https://www.google.dk/")
    .then((res) => res.textConverted()) // text converted can handle Ø Æ Å and so
    .then((body) => res.send(body));
});

app.get("/proxy3", (req, res) => {
  fetch("https://google.com/")
    .then((response) => response.text())

    .then((body) => res.send(body))

    .catch((error) => res.send({ error: error }));
});

app.get("/proxy4", async (req, res) => {
  try {
    const response = await fetch("https://google.com/");

    const body = await response.text();

    return res.send(body);
  } catch (error) {
    res.send({ error: error });
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
