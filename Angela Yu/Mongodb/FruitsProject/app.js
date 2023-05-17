// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'fruitsDB';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Use connect method to connect to the Server
// client.connect(function(err) {
// assert.equal(null, err);
// console.log("Connected successfully to server");
// const db = client.db(dbName);
// client.close();
// });









//Connecting to server
/* const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to server');

    // Get a reference to the fruitsDB database
    const db = client.db(dbName);

    // Get a reference to the fruits collection
    const collection = db.collection('fruits');

    // Insert a document into the fruits collection
    const result = await collection.insertOne({
      name: 'Apple',
      score: 8,
      review: 'Great fruit',
    });

    console.log(`Inserted document into the fruits collection with id ${result.insertedId}`);
  } catch (err) {
    console.log(err.stack);
  } finally {
    // Close the MongoDB client
    await client.close();
    console.log('Connection to server closed');
  }
}

run().catch(console.dir);
*/













//CONNECTING TO SERVER AND INSERTING MULTIPLE ELEMENTS

/* 
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to server');

    // Get a reference to the fruitsDB database
    const db = client.db(dbName);

    // Get a reference to the fruits collection
    const collection = db.collection('fruits');

    // Insert a document into the fruits collection
    const result = await collection.insertOne({
      name: 'Apple',
      score: 8,
      review: 'Great fruit',
    });

    console.log(`Inserted document into the fruits collection with id ${result.insertedId}`);

    // Insert multiple documents into the fruits collection
    const results = await collection.insertMany([
      {
        name: 'Banana',
        score: 9,
        review: 'Great fruit',
      },
      {
        name: 'Orange',
        score: 7,
        review: 'Good fruit',
      },
      {
        name: 'Mango',
        score: 10,
        review: 'Amazing fruit',
      },
    ]);

    console.log(`Inserted ${results.insertedCount} documents into the fruits collection`);

  } catch (err) {
    console.log(err.stack);
  } finally {
    // Close the MongoDB client
    await client.close();
    console.log('Connection to server closed');
  }
}

run().catch(console.dir); */



























/*  //CONNECTING TO SERVER, INSERTING THE ELEMENTS , FINDING THE ELEMETNS
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to server');

    // Get a reference to the fruitsDB database
    const db = client.db(dbName);

    // Get a reference to the fruits collection
    const collection = db.collection('fruits');

    // Insert a document into the fruits collection
    const result = await collection.insertOne({
      name: 'Apple',
      score: 8,
      review: 'Great fruit',
    });

    console.log(`Inserted document into the fruits collection with id ${result.insertedId}`);

    // Insert multiple documents into the fruits collection
    const results = await collection.insertMany([
      {
        name: 'Banana',
        score: 9,
        review: 'Great fruit',
      },
      {
        name: 'Orange',
        score: 7,
        review: 'Good fruit',
      },
      {
        name: 'Mango',
        score: 10,
        review: 'Amazing fruit',
      },
    ]);

    console.log(`Inserted ${results.insertedCount} documents into the fruits collection`);

    // Find documents in the fruits collection where score is greater than 8
    const query = { score: { $gt: 8 } };
    const cursor = collection.find(query);

    // Loop through the cursor and log each document
    await cursor.forEach(doc => {
      console.log(doc);
    });

  } catch (err) {
    console.log(err.stack);
  } finally {
    // Close the MongoDB client
    await client.close();
    console.log('Connection to server closed');
  }
}

run().catch(console.dir);  */


















const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', { useNewUrlParser: true });

const fruitsSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty good and tasty"
});

const pineapple = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit!"
})

const pomogranate = new Fruit ({
  name: "Pomogranate",
  score: 8,
  review : "It takes too much time to peel that off!"
})

const litchi = new Fruit ({
  name : "Litchi",
  score: 9,
  review: "It's decent!!"
})

pineapple.save()
pomogranate.save()
litchi.save()

// fruits.save()


  /* People Schema */
  const peopleSchema = new mongoose.Schema({
    name:String,
    age:Number,
  })

  const People = mongoose.model("People", peopleSchema);

  const people = new People({
    name: "Jhon Banega Don",
    age:  25
  })
  people.save();


  Fruit.find()
  .then(fruits => {
    console.log(fruits);
  })
  .catch(err => {
    console.log(err);
  });



  //When this chunk of code runs it resave the same document again and again
/*   Fruit.insertMany([pineapple,pomogranate,litchi])
    .then(() => {
      console.log("Fruits Saved Successfully!!");
    })
    .catch((err) => {
      console.error(err);
    }); */



// const findDocuments = function (db, callback) {
//   // get the documents collection
//   const collection = db.collection("Fruit");
//   // find some documents
//   collection.find({}).toArray(function(err, fruits) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(fruits);
//       callback(fruits);
//     }
//   });
// };
 


// mongoose.connection.once("open", function() {
//   findDocuments(mongoose.connection.db, function(fruits) {
//     // do something with the fruits array
//   });
// });

