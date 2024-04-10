const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://belkiscoskun:Marc1975@cluster0.d91owf6.mongodb.net/";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('An error occurred connecting to MongoDB: ', err);
  } else {
    console.log('Connected to MongoDB');
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    collection.insertOne({ item: "canvas", qty: 100, tags: ["cotton"] }, function(err, result) {
      if (err) {
        console.error('An error occurred inserting document: ', err);
      } else {
        console.log('Successfully inserted document');
      }
      client.close();
    });
  }
});

