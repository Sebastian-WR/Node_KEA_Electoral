const db = require("./connection");

db.query(`INSERT INTO beers VALUES ("Tuborg", 4.5)`, (error, results, fields) => {
    console.log(results);
});

db.query("SELECT * FROM beers", (error, results, fields) => {
    console.log(results);
});

// mysqlsh.exe -u root runs myql