const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json()); // skal laves så man kan bruge post til at sende json

// How do i represent the anime_names collection
let animeNames = [
    {
        id: 1,
        title: "Attack on Titan",
        weirdness: 6.8
    },
    {
        id: 2,
        title: "One Punch Man",
        protagonist: "Saitama"
    },
    {
        id: 3,
        title: "Jeg kender intet til anime",
        lel: "Lel"
    }
];

let AUTOINCREMENT = 3;

app.get("/anime-names", (req, res) => {
    res.send({ animeNames: animeNames });
});

app.get("/anime-names/:id", (req, res) => {
    const animeNamesId = Number(req.params.id);
    const foundAnimeName = animeNames.find(animeName => animeName.id === animeNamesId);
    res.send({ data: foundAnimeName });
});

app.post("/anime-names", (req, res) => {
    const newAnimeName = req.body;       // get the entity
    newAnimeName.id = ++AUTOINCREMENT;   // server side give it an id
    animeNames.push(newAnimeName)        // send it back
    res.send({ data: newAnimeName });
});

app.patch("/anime-names/:id", (req, res) => {
    animeNames = animeNames.map(animeName => {
        if (animeName.id === Number(req.params.id)){
            // id delen til sidst sørger for at brugeren ikke alver id om
            return { ...animeName, ...req.body, id: animeName.id }; // ... spread vi tager de originale værdier animeNames og tilføjer ændringen fra req.body
        }
        return animeName;
    });
    res.send({ data: wasUpdated});
});

app.delete("/anime-names/:id", (req, res) => {
    animeNames = animeNames.filter(animeName => animeName.id !== Number(req.params.id)); // filter alle dem som ikke er id og beholder dem i arrayet
    res.send({});
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is running on port", Number(port));
    }
});