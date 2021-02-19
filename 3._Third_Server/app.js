// denne linje importerer express library og sætter det til variablen express, samt app sættes til det samme
const express = require("express");
const app = express();

// today.toLocaleString([locales[, options]])
// options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// giver både dato og tid men jeg bruger den ikke, bare så man kan huske det
/* const fullDAte = (today.toLocaleString('en-DK', { timeZone: 'UTC'})); */

// Jeg har lavet 4 routes
// GET på endpoint /currentTime bruger time variablen
// time returnerer tid i en-DK så en er 24 timers og DK tidsonen så vidt jeg forstår
// Opretter et date objekt som hedder today
app.get("/currentTime", (req, res) => {
    const today = new Date();
    const time = (today.toLocaleTimeString('en-DK'));
    res.send("The current time in Copenhagen is now: " + time);
});

// GET på endpoint /currentDay bruger day variablen
// day returnere ugedagen i string f.eks. Friday skal også være long
app.get("/currentDay", (req, res) => {
    const today = new Date();
    const day = (today.toLocaleString('en-DK', { weekday: 'long' }));
    res.send(day);
});

// GET på endpoint /currentMonth bruger month variablen
// month returnere måned, skal være long
app.get("/currentMonth", (req, res) => {
    const today = new Date();
    const month = (today.toLocaleString('en-DK', { month: 'long' }));
    res.send("The current month is: " + month);
});

// GET på endpoint /current bruger forskellige variabler til at sammensætte en fuld tid og dato 
// dayDate returnere dagen i måneden f.eks. 19 skal være numerisk
app.get("/current", (req, res) => {
    const today = new Date();
    const dayDate = (today.toLocaleString('en-DK', { day: 'numeric' }));
    const month = (today.toLocaleString('en-DK', { month: 'long' }));
    const time = (today.toLocaleTimeString('en-DK'));
    const day = (today.toLocaleString('en-DK', { weekday: 'long' }));
    res.send("Today is: " + day + " the " + dayDate + " of " + month + " and the time is: " + time);
});

// Starter serveren op og lytter på port 8080
app.listen(8080);