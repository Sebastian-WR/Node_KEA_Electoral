// denne linje importerer express library og sætter det til variablen express, samt app sættes til det samme
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi and welcome to the time API! Here you can use the following calls -  /currentTime, to get the current time right now. /currentDay, to get the current date /currentMonth, to get the current month and /current, to get everything at once");
});

// Creates date obj called today
let today = new Date();

// months obj containing the number and name of the monnth
// kan også gøres uden 1, 2 og 3 osv bare med måneder så tager den det tal den får som index nummer
const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "Septemper",
    10: "October",
    11: "November",
    12: "December"
}
// weekdays obj containing number and day name
const weekDays = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday TGIF!",
    6: "Saturday",
    0: "Sunday"
}
// gets month from getmonth method that returns 0-11 based on the current month, then +1 and get the corresponding month from months obj
const month = (months[today.getMonth() + 1]);

// gets day 
const day = (weekDays[today.getDay()]);

const time = (("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2));

const date = (("0" + today.getDate()).slice(-2) + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + today.getFullYear());

const diffDate = (weekDays[today.getDay()] + " the " + ("0" + today.getDate()).slice(-2) + " of " + months[today.getMonth() + 1] + " " + today.getFullYear());

app.get("/currentTime", (req, res) => {
    res.send("The current time is: " + time);
});

app.get("/currentDay", (req, res) => {
    res.send("The current date is: " + day);
});

app.get("/currentMonth", (req, res) => {
    res.send("The current month is: " + month);
});

app.get("/current", (req, res) => {
    res.send("The current time is: " + time + " and the date is: " + diffDate + " " + date);
});


// Starter serveren op og lytter på port 8080
app.listen(8080);