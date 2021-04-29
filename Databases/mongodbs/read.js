const MongoClient = require("mongodb").MongoClient; // creates connection to database
const url = "mongodb://localhost:27017"; // the protocol is mongodb like https usually but here its mongodb
const dbName = "beer"; 

MongoClient.connect(url, { useUnifiedTopology: true}, (error, client) => { // Connecting to database?
    if (error) {
        throw new Error(error);
    }

    const db = client.db(dbName);
    const types = db.collection("types");

    types.find().toArray((error, data) => { // within the find here you can put conditions like written in the mongodb commands
        if (error) {
            throw new Error(error);
        }
        console.log(data[1].type); // data alone shows everything
        client.close(); // closes client nice
    });
});