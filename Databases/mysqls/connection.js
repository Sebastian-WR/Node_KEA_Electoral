// I want to run this file like this: node connection.js --createdb
// if I have written "--createdb" it should print out "creation mode activated"
// hint: use argv
require("dotenv").config(); // gets you the .env file and the passwords and so which are in gitignore so people cannot access it
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABSE
});

connection.connect();

// CREATE TABLE IF NOT EXISTS beers (name VARCHAR(15), alcprc int)


// this will show 
// if the process env includes --createdb so node connection.js --createdb here node is index 0 argument connection.js(full path) is index 1 and --createdb is index 2


if (process.argv.includes("--createdb")) {
  const createBeersTable = "CREATE TABLE IF NOT EXISTS beers (brand VARCHAR(50), alcLevel FLOAT);";
  connection.query(createBeersTable, (error, result, fields) => {
      if (error) {
          throw new Error(error);
      }
      console.log(result);
      connection.end();
  });
}


module.exports = {
    connection
}
// npm install dotenv kan bruges til at gemme passwords på en måde