const express = require("express");
const app = express();

// consider what datatype to store your data in
// your are allowed to hardcode data the id

app.get("/", (req, res) => {
  res.send({ message: "First call to /" });
});

app.get("/anotherpath", (req, res) => {
  const id = 1;
  res.send({ data: "Some other things" });
});

app.listen(8080); // conventionel http developmentg port
