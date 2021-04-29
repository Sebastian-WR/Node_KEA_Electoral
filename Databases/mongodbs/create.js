const  MongoClient  = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017"; // the protocol is mongodb like https usually but here its mongodb
const dbName = "beer"; 

MongoClient.connect(url, { useUnifiedTopology: true}, (error, client) => { // Connecting to database? need unified for not getting errors?
    if (error) {
        throw new Error(error);
    }

    const db = client.db(dbName); // connectiiong to db theese to and the collection types
    const types = db.collection("types");

    types.insertOne({ name: 'Best beer', type: 'IPA' }, (error, data) => {
        if (error) {
            throw new Error(error)
        }
        console.log(data)
        client.close();
    });
});

