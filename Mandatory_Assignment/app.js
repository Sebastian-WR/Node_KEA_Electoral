const express = require("express");
const app = express();
let path = __dirname + '/public/';
const port = process.env.PORT || 8080;


app.get("/", (req, res) => {
    res.sendFile(path + 'index.html');
});

app.get("/express", (req, res) => {
    res.sendFile(path + 'express.html');
});

app.get("/functions_loops", (req, res) => {
    res.sendFile(path + 'functions_loops.html');
});

app.get("/obj_variables", (req, res) => {
    res.sendFile(path + 'obj_variables.html');
});

app.get("/terminal", (req, res) => {
    res.sendFile(path + 'terminal_commands.html');
});

// Underlaying HTTP methods are not used as of now--------------------
app.post("/", (req, res) => {
    res.send();
});

app.patch("/", (req, res) => {
    res.send();
});

app.delete("/", (req, res) => {
    res.send();
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("This server is running on port: " + Number(port));
    }
});