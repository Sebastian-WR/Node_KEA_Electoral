const express = require("express");
const app = express();

// consider what datatype to store your data in
// your are allowed to hardcode data the id

app.get("/", (req, res) => {
  res.send({
    greeting:
      "Hi! Welcome to my API of students. You can got to /classmates to see a list of students, and you can also go to /students/(id of a student) to see a specific student.",
  });
});

const students = [
  {
    id: 1,
    name: "William",
  },
  {
    id: 2,
    name: "Christopher",
  },
  {
    id: 3,
    name: "Jakob",
  },
  {
    id: 4,
    name: "Cecilie",
  },
];

app.get("/classmates", (req, res) => {
  res.send(students);
});

app.get("/classmates/:id", (req, res) => {
  let studList = students.filter((stud) => stud.id == req.params.id);
  res.send(studList);
});

app.listen(8080); // conventionel http development port
