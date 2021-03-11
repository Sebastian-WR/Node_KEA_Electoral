const express = require("express");
const app = express();
let path = __dirname + '/public/';
const PORT = 8080;


app.get("/", (req, res) => {
    res.sendFile(path + 'index.html');
});

app.get("/index2.html", (req, res) => {
    res.sendFile(path + 'index2.html');
});

app.post("/", (req, res) => {
    res.send();
});

app.patch("/", (req, res) => {
    res.send();
});

app.delete("/", (req, res) => {
    res.send();
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("This server is running on port: " + PORT);
    }
});