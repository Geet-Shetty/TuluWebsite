const { MongoClient } = require("mongodb");
const Express = require("express");
const Cors = require("cors");

const dotenv = require("dotenv");
const { mongo } = require("mongoose");
dotenv.config("./env");

const url = process.env.DB_URL;
const client = new MongoClient(url);

const server = Express();
server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));
server.use(Cors());

let collection;

server.get("/searchID", async (request, response) => {
  try {
    // let id = new mongo.ObjectId(request.query.term);
    let id = mongo.ObjectId.createFromHexString(request.query.term);
    //let result = await collection.findOne({ "word.english": "goovu" });
    let result = await collection.findOne({ _id: id });
    response.send(result);
    collection.findbyID;
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});

server.get("/searchTU", async (request, response) => {
  try {
    let result = await collection
      .aggregate([
        {
          $search: {
            index: "searchWords",
            text: {
              query: `${request.query.term}`,
              path: "word.tulu",
              fuzzy: {
                maxEdits: 2,
                maxExpansions: 10,
              },
            },
          },
        },
        {
          $project: {
            word: 1,
          },
        },
        {
          $limit: 50,
        },
      ])
      .toArray();
    response.send(result);
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});

server.get("/searchENG", async (request, response) => {
  try {
    let result = await collection
      .aggregate([
        {
          $search: {
            index: "searchWords",
            text: {
              query: `${request.query.term}`,
              path: ["word.english","meanings.definitions.english"],
              fuzzy: {
                maxEdits: 2,
                maxExpansions: 10,
              },
            },
          },
        },
        {
          $project: {
            word: 1,
          },
        },
        {
          $limit: 50,
        },
      ])
      .toArray();
    response.send(result);
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});

server.listen("3001", async () => {
  try {
    await client.connect();
    collection = client.db("dict_compact").collection("words");
  } catch (e) {
    console.error(e);
  }
});

// // {$expr: {$eq: ["$word.kannada", "$word.tulu"] } }
// // {"word.english": "goovu"}
// // {"word.english": /^[\s\S]{20,}$/} // number is len
// // 68495-68079
// //  { variations: { $elemMatch: { origin: "Northen Dialects" } } } // search in array structures
// // { examples: { $size: 3 } } //len of examples array
// // {"meanings.definitions": {$size: 0}}
// // {"_id": ObjectId('618dd6df4a017e49673caa98')} search by id
// // {"word.english": "aaya","word.id": 8} search by word and custom id
//  {"meanings.definitions.english" : { $exists: false }}  // check if section exists
