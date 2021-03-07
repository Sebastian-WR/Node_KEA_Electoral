const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    //__dirname exists in Node.js
    // res.sendFile is a method in Express

    // todo serve the welcome page on root
    res.sendFile(__dirname + "/public/welcome.html");
});
 // serve more html pages and make new route for it :D 
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is running on port", PORT);
    }
});