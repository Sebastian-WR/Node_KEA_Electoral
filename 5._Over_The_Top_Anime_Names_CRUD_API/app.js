const express = require("express");
const app = express();
const PORT = 8080;

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

app.get("/anime-names", (req, res) => {
    res.send({ animeNames: animeNames });
});

app.get("/anime-names/:id", (req, res) => {
    const animeNamesId = Number(req.params.id);
    const foundAnimeName = animeNames.find(animeName => animeName.id === animeNamesId);
    res.send({ data: foundAnimeName });
});


app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is running on port", PORT);
    }
});